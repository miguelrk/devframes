"use strict";
(() => {
  // client/hub-client.ts
  var config = globalThis.__DEVFRAME_CONFIG__ ?? {};
  var registryKey = config.registryKey ?? "__DEVFRAME_WEBMCP_REGISTRY__";
  var escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  var readFromAncestors = (read) => {
    const seen = /* @__PURE__ */ new Set();
    for (const candidate of [window.parent, window.top, window]) {
      if (!candidate || seen.has(candidate)) continue;
      seen.add(candidate);
      try {
        const value = read(candidate);
        if (value !== void 0) return value;
      } catch {
      }
    }
    return void 0;
  };
  var readModelContext = () => readFromAncestors((win) => {
    const docContext = win.document.modelContext;
    if (docContext && typeof docContext.getTools === "function") {
      return { source: "document", modelContext: docContext };
    }
    const navContext = win.navigator.modelContext;
    if (navContext && typeof navContext.getTools === "function") {
      return { source: "navigator", modelContext: navContext };
    }
    return void 0;
  });
  var readSnapshot = () => readFromAncestors((win) => win[registryKey]?.getSnapshot());
  var formatAnnotations = (annotations) => {
    if (!annotations) return "\u2014";
    const parts = [];
    if (annotations.readOnlyHint) parts.push("read-only");
    if (annotations.untrustedContentHint) parts.push("untrusted");
    if (annotations.consequentialHint) parts.push("consequential");
    return parts.length ? parts.join(", ") : "\u2014";
  };
  var formatSchema = (schema) => {
    if (!schema) return "\u2014";
    try {
      return JSON.stringify(schema, null, 2);
    } catch {
      return "\u2014";
    }
  };
  var mount = document.getElementById("app");
  if (!mount) {
    document.body.textContent = "WebMCP panel root is missing.";
  } else {
    let activeTool = null;
    let invokeArgs = "{}";
    let invokeResult = "";
    let pollTimer;
    let toolchangeCleanup;
    const resolveContext = async () => {
      const live = readModelContext();
      if (live?.modelContext.getTools) {
        try {
          const tools = await live.modelContext.getTools();
          return {
            source: live.source,
            modelContext: live.modelContext,
            tools: tools.map((tool) => ({
              name: tool.name,
              description: tool.description ?? "",
              inputSchema: tool.inputSchema,
              annotations: tool.annotations
            }))
          };
        } catch {
        }
      }
      const snapshot = readSnapshot();
      if (snapshot) {
        return {
          source: "snapshot",
          snapshot,
          tools: Array.isArray(snapshot.tools) ? snapshot.tools : []
        };
      }
      return { source: "none", tools: [] };
    };
    const render = async () => {
      try {
        const context = await resolveContext();
        const { tools } = context;
        const statusParts = [
          `source: ${context.source}`,
          context.modelContext?.getTools ? "getTools: yes" : "getTools: no",
          context.modelContext?.executeTool ? "executeTool: yes" : "executeTool: no",
          `tools: ${tools.length}`
        ];
        if (context.snapshot?.status) {
          const status = context.snapshot.status;
          statusParts.push(
            status.supported ? "modelContext: yes" : "modelContext: no",
            `registered ${status.registered}`,
            `failed ${status.failed}`,
            status.busy ? "syncing\u2026" : null,
            status.lastRun ? `last ${status.lastRun}` : null,
            status.lastError ?? null
          );
        }
        const rows = tools.length === 0 ? '<tr><td colspan="4">No tools available yet.</td></tr>' : tools.map((tool) => {
          const isActive = tool.name === activeTool;
          return `
            <tr class="${isActive ? "active" : ""}" data-tool="${escapeHtml(tool.name)}">
              <td><code>${escapeHtml(tool.name)}</code></td>
              <td>${escapeHtml(tool.description || "\u2014")}</td>
              <td>${escapeHtml(formatAnnotations(tool.annotations))}</td>
              <td>${tool.inputSchema ? "yes" : "\u2014"}</td>
            </tr>
            <tr class="schema">
              <td colspan="4"><pre>${escapeHtml(formatSchema(tool.inputSchema))}</pre></td>
            </tr>
          `;
        }).join("");
        const invokeBlock = context.modelContext?.executeTool && activeTool ? `
          <div class="invoke">
            <strong>Invoke <code>${escapeHtml(activeTool)}</code></strong>
            <textarea id="invoke-args">${escapeHtml(invokeArgs)}</textarea>
            <button type="button" data-action="invoke">Execute</button>
            ${invokeResult ? `<pre>${escapeHtml(invokeResult)}</pre>` : ""}
          </div>
        ` : "";
        mount.className = "";
        mount.innerHTML = `
        <header>
          <strong>WebMCP tools</strong>
          <span>${escapeHtml(statusParts.filter(Boolean).join(" \xB7 "))}</span>
        </header>
        ${invokeBlock}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Annotations</th>
              <th>Schema</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      `;
      } catch (error) {
        mount.className = "empty";
        mount.textContent = error instanceof Error ? error.message : String(error);
      }
    };
    const bindToolchange = () => {
      toolchangeCleanup?.();
      toolchangeCleanup = void 0;
      const live = readModelContext();
      const modelContext = live?.modelContext;
      if (!modelContext?.addEventListener) return;
      const onToolchange = () => {
        void render();
      };
      modelContext.addEventListener("toolchange", onToolchange);
      toolchangeCleanup = () => {
        modelContext.removeEventListener?.("toolchange", onToolchange);
      };
    };
    mount.addEventListener("click", (event) => {
      const target = event.target;
      const row = target.closest("[data-tool]");
      if (row?.dataset.tool) {
        activeTool = row.dataset.tool;
        invokeResult = "";
        void render();
        return;
      }
      if (target.closest('[data-action="invoke"]')) {
        void (async () => {
          const live = readModelContext();
          if (!live?.modelContext.executeTool || !activeTool) return;
          const textarea = mount.querySelector("#invoke-args");
          invokeArgs = textarea?.value ?? invokeArgs;
          try {
            JSON.parse(invokeArgs);
          } catch (error) {
            invokeResult = error instanceof Error ? error.message : String(error);
            void render();
            return;
          }
          try {
            const result = await live.modelContext.executeTool(activeTool, invokeArgs);
            invokeResult = typeof result === "string" ? result : JSON.stringify(result, null, 2);
          } catch (error) {
            invokeResult = error instanceof Error ? error.message : String(error);
          }
          void render();
        })();
      }
    });
    void (async () => {
      bindToolchange();
      await render();
      if (!toolchangeCleanup) {
        pollTimer = setInterval(() => {
          void render();
        }, 2e3);
      }
    })();
    window.addEventListener("beforeunload", () => {
      if (pollTimer) clearInterval(pollTimer);
      toolchangeCleanup?.();
    });
  }
})();
