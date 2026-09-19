"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/nanoid.mjs
  function nanoid2(size = 21) {
    let id = "";
    let i = size;
    while (i--) id += urlAlphabet2[Math.random() * 64 | 0];
    return id;
  }
  var urlAlphabet2;
  var init_nanoid = __esm({
    "../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/nanoid.mjs"() {
      urlAlphabet2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
    }
  });

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/browser-agent-Pu-FLk6I.mjs
  function listBrowserAgentTools() {
    return [...tools.values()];
  }
  function onBrowserAgentToolsChanged(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  var REGISTRY_KEY, tools, listeners;
  var init_browser_agent_Pu_FLk6I = __esm({
    "../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/browser-agent-Pu-FLk6I.mjs"() {
      REGISTRY_KEY = Symbol.for("devframe:browser-agent-registry");
      ({ tools, listeners } = globalThis[REGISTRY_KEY] ??= {
        tools: /* @__PURE__ */ new Map(),
        listeners: /* @__PURE__ */ new Set()
      });
    }
  });

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/browser-agent-rpc-BXhoSh1z.mjs
  var browser_agent_rpc_BXhoSh1z_exports = {};
  __export(browser_agent_rpc_BXhoSh1z_exports, {
    setupBrowserAgentRpcBridge: () => setupBrowserAgentRpcBridge
  });
  function resolveClientId(win = globalThis.window) {
    try {
      const storage = win?.sessionStorage;
      if (storage) {
        let id = storage.getItem(CLIENT_ID_STORAGE_KEY);
        if (!id) {
          id = nanoid2();
          storage.setItem(CLIENT_ID_STORAGE_KEY, id);
        }
        return id;
      }
    } catch {
    }
    memoryClientId ??= nanoid2();
    return memoryClientId;
  }
  function setupBrowserAgentRpcBridge(rpc) {
    rpc.client.register({
      name: "devframe:agent:invoke-client-tool",
      type: "action",
      jsonSerializable: true,
      handler: async (id, args) => {
        const tool = listBrowserAgentTools().find((tool2) => tool2.id === id);
        if (!tool) throw new Error(`[devframe/agent] browser tool "${id}" not found`);
        return await tool.invoke(args);
      }
    });
    let queued = false;
    let disposed = false;
    let lastSyncedCount = 0;
    const sync = () => {
      if (queued || disposed) return;
      queued = true;
      queueMicrotask(async () => {
        queued = false;
        if (disposed) return;
        const manifests = listBrowserAgentTools().map(({ invoke: _, ...manifest }) => manifest);
        if (manifests.length === 0 && lastSyncedCount === 0) return;
        lastSyncedCount = manifests.length;
        await rpc.callOptional("devframe:agent:sync-client-tools", resolveClientId(), manifests).catch(() => {
        });
      });
    };
    const stopTools = onBrowserAgentToolsChanged(sync);
    const stopConnection = rpc.events.on("connection:status", (status) => {
      if (status === "connected") sync();
    });
    sync();
    return () => {
      disposed = true;
      stopTools();
      stopConnection();
    };
  }
  var CLIENT_ID_STORAGE_KEY, memoryClientId;
  var init_browser_agent_rpc_BXhoSh1z = __esm({
    "../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/browser-agent-rpc-BXhoSh1z.mjs"() {
      init_nanoid();
      init_browser_agent_Pu_FLk6I();
      CLIENT_ID_STORAGE_KEY = "devframe:client-id";
    }
  });

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/colors.mjs
  function makeColor(open, close) {
    const o = `\x1B[${open}m`;
    const c = `\x1B[${close}m`;
    return ((arg, ...values) => {
      if (Array.isArray(arg) && "raw" in arg) {
        const strings = arg;
        let out = "";
        for (let i = 0; i < strings.length; i++) {
          out += strings[i];
          if (i < values.length) out += String(values[i]);
        }
        return `${o}${out}${c}`;
      }
      return `${o}${String(arg)}${c}`;
    });
  }
  var colors = {
    blue: makeColor(34, 39),
    cyan: makeColor(36, 39),
    gray: makeColor(90, 39),
    green: makeColor(32, 39),
    red: makeColor(31, 39),
    yellow: makeColor(33, 39),
    bold: makeColor(1, 22),
    dim: makeColor(2, 22),
    reset: makeColor(0, 0),
    underline: makeColor(4, 24)
  };

  // ../../node_modules/.pnpm/nostics@1.2.0/node_modules/nostics/dist/index.mjs
  function toValueWithArgs(valFn, ...args) {
    return typeof valFn === "function" ? valFn(...args) : valFn;
  }
  var captureStackTrace = Error.captureStackTrace;
  var Diagnostic = class Diagnostic2 extends Error {
    name;
    /**
    * The diagnostic code, e.g. `MATH_E001`.
    * Also appears as the `name` property.
    */
    code;
    /**
    * URL to extended documentation for this diagnostic code.
    * Auto-generated from {@link DefineDiagnosticsOptions.docsBase}.
    */
    docs;
    /**
    * Optional actionable instructions on how to resolve the problem.
    */
    fix;
    /**
    * Locations in user code that contributed to this diagnostic, in
    * `file:line:column` format. Relevant when the stack trace doesn't reflect
    * the user's source (e.g. compilers, bundlers), otherwise redundant with the
    * stack and should be omitted.
    */
    sources;
    /**
    * Alias for {@link Error.message}: the reason this diagnostic was raised.
    */
    get why() {
      return this.message;
    }
    /**
    * @param init        structured initializer; `why` is required
    * @param captureFrom V8 stack-cutoff frame. Defaults to {@link Diagnostic}
    * so the top of the trace is the `new Diagnostic(...)` call site.
    * `defineDiagnostics` passes its action method to strip its own frames too.
    * Ignored on engines without `Error.captureStackTrace`.
    */
    constructor(init, captureFrom = Diagnostic2) {
      super(init.why, { cause: init.cause });
      this.code = this.name = init.code;
      this.fix = init.fix;
      this.docs = init.docs;
      this.sources = init.sources;
      captureStackTrace?.(this, captureFrom);
    }
    /**
    * Converts the diagnostic into a serializable structured object.
    */
    toJSON() {
      return {
        name: this.name,
        why: this.why,
        fix: this.fix,
        docs: this.docs,
        sources: this.sources,
        cause: this.cause,
        stack: this.stack
      };
    }
  };
  function deriveDocs(docsBase, code) {
    return typeof docsBase === "string" ? `${docsBase}/${code.toLowerCase()}` : docsBase?.(code);
  }
  // @__NO_SIDE_EFFECTS__
  function defineDiagnostics(options2) {
    const reporters = options2.reporters ?? [];
    const result = {};
    const { docsBase } = options2;
    for (const code of Object.keys(options2.codes)) {
      const def = options2.codes[code];
      const docs = def.docs === false ? void 0 : def.docs || deriveDocs(docsBase, code);
      const handle = (params = {}, reporterOptions = {}) => {
        const diagnostic = new Diagnostic({
          code,
          why: toValueWithArgs(def.why, params),
          fix: toValueWithArgs(def.fix, params),
          docs,
          cause: params.cause,
          sources: params.sources
        }, handle);
        for (const reporter of reporters) reporter(diagnostic, reporterOptions);
        return diagnostic;
      };
      result[code] = handle;
    }
    return result;
  }

  // ../../node_modules/.pnpm/nostics@1.2.0/node_modules/nostics/dist/formatters/ansi.mjs
  // @__NO_SIDE_EFFECTS__
  function ansiFormatter(colors2) {
    return (d) => {
      const header = `${colors2.bold(colors2.red(`[${d.name}]`))} ${d.message}`;
      const details = [];
      if (d.fix) details.push(`${colors2.dim("fix:")} ${d.fix}`);
      if (d.sources?.length) details.push(`${colors2.dim("sources:")} ${d.sources.join(", ")}`);
      if (d.docs) details.push(`${colors2.dim("see:")} ${colors2.cyan(d.docs)}`);
      if (details.length === 0) return header;
      return [header, ...details.map((detail, i) => {
        return `${colors2.dim(i < details.length - 1 ? "\u251C\u25B6" : "\u2570\u25B6")} ${detail}`;
      })].join("\n");
    };
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/tool-input-BAQXvvqL.mjs
  var DEVFRAME_EVENTS = {
    /**
    * Node-side host `EventEmitter` events. The agent host (`ctx.agent.events`)
    * emits these as its tool/resource surface changes; protocol adapters (e.g.
    * MCP) subscribe to re-publish their manifest.
    */
    bus: {
      agentManifestChanged: "agent:manifest:changed",
      agentToolRegistered: "agent:tool:registered",
      agentToolUnregistered: "agent:tool:unregistered",
      agentResourceRegistered: "agent:resource:registered",
      agentResourceUnregistered: "agent:resource:unregistered"
    },
    /**
    * Client-side RPC connection `EventEmitter` events (`rpc.events`) a UI
    * subscribes to for connection lifecycle and error surfacing.
    */
    client: {
      isTrustedUpdated: "rpc:is-trusted:updated",
      error: "rpc:error",
      connectionStatus: "connection:status",
      connectionError: "connection:error"
    },
    /**
    * Broadcast notifications the server pushes to clients (server → client),
    * `devframe:` prefix. The paired request methods (subscribe/get/set/…) are
    * RPC endpoints, not events, and are omitted deliberately.
    */
    broadcast: {
      authRevoked: "devframe:auth:revoked",
      clientStateUpdated: "devframe:rpc:client-state:updated",
      clientStatePatch: "devframe:rpc:client-state:patch",
      streamingChunk: "devframe:streaming:chunk",
      streamingEnd: "devframe:streaming:end",
      streamingUploadCancel: "devframe:streaming:upload-cancel"
    },
    /**
    * In-page channel notifications the page script pushes to its panels
    * (page script → panel), `devframe:` prefix. The paired request methods
    * (`devframe:in-page:page-state:subscribe`/`set`/`patch`) are call
    * endpoints, not events, and are defined at their handlers
    * (`in-page-channel/state.ts`).
    */
    inPageChannel: {
      panelStateUpdated: "devframe:in-page:panel-state:updated",
      panelStatePatch: "devframe:in-page:panel-state:patch"
    },
    /** `postMessage` channels the runtime posts across window boundaries. */
    postMessage: {
      remoteAssetsError: "devframe:remote-assets-error",
      inPageChannel: "devframe:in-page-channel"
    }
  };
  var formatAnsi = ansiFormatter(colors);
  function devframeReporter(d, { method = "warn" } = {}) {
    console[method](formatAnsi(d));
  }
  function defineDiagnostics$1(options2) {
    return defineDiagnostics({
      ...options2,
      reporters: [devframeReporter, ...options2.reporters ?? []]
    });
  }
  function createPromiseWithResolvers() {
    let resolve;
    let reject;
    return {
      promise: new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      }),
      resolve,
      reject
    };
  }
  var random = Math.random.bind(Math);
  var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  function nanoid(size = 21) {
    let id = "";
    let i = size;
    while (i--) id += urlAlphabet[random() * 64 | 0];
    return id;
  }
  var DEFAULT_TIMEOUT = 6e4;
  var defaultSerialize = (i) => i;
  var defaultDeserialize = defaultSerialize;
  var { clearTimeout: clearTimeout2, setTimeout: setTimeout2 } = globalThis;
  function createBirpc($functions, options2) {
    const { post, on, off = () => {
    }, eventNames = [], serialize: serialize3 = defaultSerialize, deserialize: deserialize2 = defaultDeserialize, resolver, bind = "rpc", timeout = DEFAULT_TIMEOUT, proxify = true } = options2;
    let $closed = false;
    const _rpcPromiseMap = /* @__PURE__ */ new Map();
    let _promiseInit;
    let rpc;
    async function _call(method, args, event, optional) {
      if ($closed) throw new Error(`[birpc] rpc is closed, cannot call "${method}"`);
      const req = {
        m: method,
        a: args,
        t: "q"
      };
      if (optional) req.o = true;
      const send = async (_req) => post(serialize3(_req));
      if (event) {
        await send(req);
        return;
      }
      if (_promiseInit) try {
        await _promiseInit;
      } finally {
        _promiseInit = void 0;
      }
      let { promise, resolve, reject } = createPromiseWithResolvers();
      const id = nanoid();
      req.i = id;
      let timeoutId;
      async function handler(newReq = req) {
        if (timeout >= 0) {
          timeoutId = setTimeout2(() => {
            try {
              if (options2.onTimeoutError?.call(rpc, method, args) !== true) throw new Error(`[birpc] timeout on calling "${method}"`);
            } catch (e) {
              reject(e);
            }
            _rpcPromiseMap.delete(id);
          }, timeout);
          if (typeof timeoutId === "object") timeoutId = timeoutId.unref?.();
        }
        _rpcPromiseMap.set(id, {
          resolve,
          reject,
          timeoutId,
          method
        });
        await send(newReq);
        return promise;
      }
      try {
        if (options2.onRequest) await options2.onRequest.call(rpc, req, handler, resolve);
        else await handler();
      } catch (e) {
        if (options2.onGeneralError?.call(rpc, e) !== true) throw e;
        return;
      } finally {
        clearTimeout2(timeoutId);
        _rpcPromiseMap.delete(id);
      }
      return promise;
    }
    const builtinMethods = {
      $call: (method, ...args) => _call(method, args, false),
      $callOptional: (method, ...args) => _call(method, args, false, true),
      $callEvent: (method, ...args) => _call(method, args, true),
      $callRaw: (options3) => _call(options3.method, options3.args, options3.event, options3.optional),
      $rejectPendingCalls,
      get $closed() {
        return $closed;
      },
      get $meta() {
        return options2.meta;
      },
      $close,
      $functions
    };
    if (proxify) rpc = new Proxy({}, { get(_, method) {
      if (Object.hasOwn(builtinMethods, method)) return builtinMethods[method];
      if (method === "then" && !eventNames.includes("then") && !("then" in $functions)) return void 0;
      const sendEvent = (...args) => _call(method, args, true);
      if (eventNames.includes(method)) {
        sendEvent.asEvent = sendEvent;
        return sendEvent;
      }
      const sendCall = (...args) => _call(method, args, false);
      sendCall.asEvent = sendEvent;
      return sendCall;
    } });
    else rpc = builtinMethods;
    function $close(customError) {
      $closed = true;
      _rpcPromiseMap.forEach(({ reject, method }) => {
        const error = /* @__PURE__ */ new Error(`[birpc] rpc is closed, cannot call "${method}"`);
        if (customError) {
          customError.cause ??= error;
          return reject(customError);
        }
        reject(error);
      });
      _rpcPromiseMap.clear();
      off(onMessage);
    }
    function $rejectPendingCalls(handler) {
      const handlerResults = Array.from(_rpcPromiseMap.values()).map(({ method, reject }) => {
        if (!handler) return reject(/* @__PURE__ */ new Error(`[birpc]: rejected pending call "${method}".`));
        return handler({
          method,
          reject
        });
      });
      _rpcPromiseMap.clear();
      return handlerResults;
    }
    async function onMessage(data, ...extra) {
      let msg;
      try {
        msg = deserialize2(data);
      } catch (e) {
        if (options2.onGeneralError?.call(rpc, e) !== true) throw e;
        return;
      }
      if (msg.t === "q") {
        const { m: method, a: args, o: optional } = msg;
        let result, error;
        let fn = await (resolver ? resolver.call(rpc, method, $functions[method]) : $functions[method]);
        if (optional) fn ||= () => void 0;
        if (!fn) error = /* @__PURE__ */ new Error(`[birpc] function "${method}" not found`);
        else try {
          result = await fn.apply(bind === "rpc" ? rpc : $functions, args);
        } catch (e) {
          error = e;
        }
        if (msg.i) {
          if (error && options2.onFunctionError) {
            if (options2.onFunctionError.call(rpc, error, method, args) === true) return;
          }
          if (!error) try {
            await post(serialize3({
              t: "s",
              i: msg.i,
              r: result
            }), ...extra);
            return;
          } catch (e) {
            error = e;
            if (options2.onGeneralError?.call(rpc, e, method, args) !== true) throw e;
          }
          try {
            await post(serialize3({
              t: "s",
              i: msg.i,
              e: error
            }), ...extra);
          } catch (e) {
            if (options2.onGeneralError?.call(rpc, e, method, args) !== true) throw e;
          }
        }
      } else {
        const { i: ack, r: result, e: error } = msg;
        const promise = _rpcPromiseMap.get(ack);
        if (promise) {
          clearTimeout2(promise.timeoutId);
          if (error) promise.reject(error);
          else promise.resolve(result);
        }
        _rpcPromiseMap.delete(ack);
      }
    }
    _promiseInit = on(onMessage);
    return rpc;
  }
  function resolveAgentSafety(type, agent) {
    if (agent.safety) return agent.safety;
    return type === "static" || type === "query" || type == null ? "read" : "action";
  }
  var FALLBACK_OBJECT_SCHEMA = Object.freeze({
    type: "object",
    additionalProperties: true
  });
  function safeToJsonSchema(schema) {
    const standard = schema["~standard"];
    if (standard.jsonSchema) try {
      return standard.jsonSchema.input({ target: "draft-2020-12" });
    } catch {
      return FALLBACK_OBJECT_SCHEMA;
    }
    return FALLBACK_OBJECT_SCHEMA;
  }
  function argsToJsonSchema(args) {
    if (!args || args.length === 0) return {
      type: "object",
      properties: {}
    };
    const properties = {};
    const required = [];
    for (let i = 0; i < args.length; i++) {
      const key = `arg${i}`;
      properties[key] = safeToJsonSchema(args[i]);
      required.push(key);
    }
    return {
      type: "object",
      properties,
      required,
      additionalProperties: false
    };
  }
  function collectPositionalArgs(input, argumentCount) {
    if (Array.isArray(input)) return input;
    if (input === void 0 || input === null) return [];
    if (typeof input !== "object") return void 0;
    const record = input;
    if (argumentCount != null) return Array.from({ length: argumentCount }, (_, index) => record[`arg${index}`]);
    if ("arg0" in record) {
      const positional = [];
      while (`arg${positional.length}` in record) positional.push(record[`arg${positional.length}`]);
      return positional;
    }
    return Object.keys(record).length === 0 ? [] : void 0;
  }
  function toolInputToRpcArgs(input, argumentCount) {
    return collectPositionalArgs(input, argumentCount) ?? [input];
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/hash-DdPnc4k3.mjs
  function serialize(input) {
    if (typeof input === "string") return `'${input}'`;
    return new Serializer().serialize(input);
  }
  var asciiOrder = " _-,;:!?.'\"()[]{}@*/\\&#%`^+<=>|~$0123456789abcdefghijklmnopqrstuvwxyz";
  var asciiWeights = /* @__PURE__ */ (function() {
    const weights = /* @__PURE__ */ new Uint8Array(128);
    for (let i = 0; i < 69; i++) weights[asciiOrder.charCodeAt(i)] = i + 1;
    for (let code = 65; code <= 90; code++) weights[code] = weights[code + 32];
    return weights;
  })();
  function compareStrings(a, b) {
    if (a === b) return 0;
    const length = Math.min(a.length, b.length);
    let tieBreaker = 0;
    for (let i = 0; i < length; i++) {
      const codeA = a.charCodeAt(i);
      const codeB = b.charCodeAt(i);
      if (codeA === codeB) continue;
      const weightA = codeA < 128 && asciiWeights[codeA] ? asciiWeights[codeA] : codeA + 128;
      const weightB = codeB < 128 && asciiWeights[codeB] ? asciiWeights[codeB] : codeB + 128;
      if (weightA !== weightB) return weightA < weightB ? -1 : 1;
      if (tieBreaker === 0) tieBreaker = codeA > codeB ? -1 : 1;
    }
    if (a.length !== b.length) return a.length < b.length ? -1 : 1;
    return tieBreaker;
  }
  var Serializer = /* @__PURE__ */ (function() {
    class Serializer2 {
      #context = /* @__PURE__ */ new Map();
      compare(a, b) {
        const typeA = typeof a;
        const typeB = typeof b;
        if (typeA === "string" && typeB === "string") return compareStrings(a, b);
        if (typeA === "number" && typeB === "number") return a - b;
        return compareStrings(this.serialize(a, true), this.serialize(b, true));
      }
      serialize(value, noQuotes) {
        if (value === null) return "null";
        switch (typeof value) {
          case "string":
            return noQuotes ? value : `'${value}'`;
          case "bigint":
            return `${value}n`;
          case "object":
            return this.$object(value);
          case "function":
            return this.$function(value);
        }
        return String(value);
      }
      serializeObject(object) {
        const objString = Object.prototype.toString.call(object);
        if (objString !== "[object Object]") return this.serializeBuiltInType(objString.length < 10 ? `unknown:${objString}` : objString.slice(8, -1), object);
        const constructor = object.constructor;
        const objName = constructor === Object || constructor === void 0 ? "" : constructor.name;
        if (objName !== "" && globalThis[objName] === constructor) return this.serializeBuiltInType(objName, object);
        if ("toJSON" in object && typeof object.toJSON === "function") {
          const json = object.toJSON();
          return objName + (json !== null && typeof json === "object" ? this.$object(json) : `(${this.serialize(json)})`);
        }
        const keys2 = Object.keys(object).sort(compareStrings);
        let content = `${objName}{`;
        for (let i = 0; i < keys2.length; i++) {
          const key = keys2[i];
          content += `${key}:${this.serialize(object[key])}`;
          if (i < keys2.length - 1) content += ",";
        }
        return content + "}";
      }
      serializeBuiltInType(type, object) {
        const handler = this["$" + type];
        if (handler) return handler.call(this, object);
        if (typeof object.entries === "function") return this.serializeObjectEntries(type, object.entries());
        throw new Error(`Cannot serialize ${type}`);
      }
      serializeObjectEntries(type, entries) {
        const sortedEntries = Array.from(entries).sort((a, b) => this.compare(a[0], b[0]));
        let content = `${type}{`;
        for (let i = 0; i < sortedEntries.length; i++) {
          const [key, value] = sortedEntries[i];
          content += `${this.serialize(key, true)}:${this.serialize(value)}`;
          if (i < sortedEntries.length - 1) content += ",";
        }
        return content + "}";
      }
      $object(object) {
        let content = this.#context.get(object);
        if (content === void 0) {
          this.#context.set(object, `#${this.#context.size}`);
          content = this.serializeObject(object);
          this.#context.set(object, content);
        }
        return content;
      }
      $function(fn) {
        const fnStr = Function.prototype.toString.call(fn);
        if (fnStr.slice(-15) === "[native code] }") return `${fn.name || ""}()[native]`;
        return `${fn.name}(${fn.length})${fnStr.replace(/\s*\n\s*/g, "")}`;
      }
      $Array(arr) {
        let content = "[";
        for (let i = 0; i < arr.length; i++) {
          content += this.serialize(arr[i]);
          if (i < arr.length - 1) content += ",";
        }
        return content + "]";
      }
      $Date(date) {
        try {
          return `Date(${date.toISOString()})`;
        } catch {
          return `Date(null)`;
        }
      }
      $ArrayBuffer(arr) {
        return `ArrayBuffer[${new Uint8Array(arr).join(",")}]`;
      }
      $Set(set2) {
        return `Set${this.$Array(Array.from(set2).sort((a, b) => this.compare(a, b)))}`;
      }
      $Map(map) {
        return this.serializeObjectEntries("Map", map.entries());
      }
    }
    for (const type of [
      "Error",
      "RegExp",
      "URL"
    ]) Serializer2.prototype["$" + type] = function(val) {
      return `${type}(${val})`;
    };
    for (const type of [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array"
    ]) Serializer2.prototype["$" + type] = function(arr) {
      return `${type}[${arr.join(",")}]`;
    };
    for (const type of ["BigInt64Array", "BigUint64Array"]) Serializer2.prototype["$" + type] = function(arr) {
      return `${type}[${arr.join("n,")}${arr.length > 0 ? "n" : ""}]`;
    };
    return Serializer2;
  })();
  var H = [
    1779033703,
    -1150833019,
    1013904242,
    -1521486534,
    1359893119,
    -1694144372,
    528734635,
    1541459225
  ];
  var K = [
    1116352408,
    1899447441,
    -1245643825,
    -373957723,
    961987163,
    1508970993,
    -1841331548,
    -1424204075,
    -670586216,
    310598401,
    607225278,
    1426881987,
    1925078388,
    -2132889090,
    -1680079193,
    -1046744716,
    -459576895,
    -272742522,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    -1740746414,
    -1473132947,
    -1341970488,
    -1084653625,
    -958395405,
    -710438585,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    -2117940946,
    -1838011259,
    -1564481375,
    -1474664885,
    -1035236496,
    -949202525,
    -778901479,
    -694614492,
    -200395387,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    -2067236844,
    -1933114872,
    -1866530822,
    -1538233109,
    -1090935817,
    -965641998
  ];
  var base64KeyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  var W = [];
  var SHA256 = class {
    _data = new WordArray();
    _hash = new WordArray([...H]);
    _nDataBytes = 0;
    _minBufferSize = 0;
    finalize(messageUpdate) {
      if (messageUpdate) this._append(messageUpdate);
      const nBitsTotal = this._nDataBytes * 8;
      const nBitsLeft = this._data.sigBytes * 8;
      this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
      this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
      this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
      this._data.sigBytes = this._data.words.length * 4;
      this._process();
      return this._hash;
    }
    _doProcessBlock(M, offset) {
      const H2 = this._hash.words;
      let a = H2[0];
      let b = H2[1];
      let c = H2[2];
      let d = H2[3];
      let e = H2[4];
      let f = H2[5];
      let g = H2[6];
      let h = H2[7];
      for (let i = 0; i < 64; i++) {
        if (i < 16) W[i] = M[offset + i] | 0;
        else {
          const gamma0x = W[i - 15];
          const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
          const gamma1x = W[i - 2];
          const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
          W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
        }
        const ch = e & f ^ ~e & g;
        const maj = a & b ^ a & c ^ b & c;
        const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
        const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
        const t1 = h + sigma1 + ch + K[i] + W[i];
        const t2 = sigma0 + maj;
        h = g;
        g = f;
        f = e;
        e = d + t1 | 0;
        d = c;
        c = b;
        b = a;
        a = t1 + t2 | 0;
      }
      H2[0] = H2[0] + a | 0;
      H2[1] = H2[1] + b | 0;
      H2[2] = H2[2] + c | 0;
      H2[3] = H2[3] + d | 0;
      H2[4] = H2[4] + e | 0;
      H2[5] = H2[5] + f | 0;
      H2[6] = H2[6] + g | 0;
      H2[7] = H2[7] + h | 0;
    }
    _append(data) {
      if (typeof data === "string") data = WordArray.fromUtf8(data);
      this._data.concat(data);
      this._nDataBytes += data.sigBytes;
    }
    _process(doFlush) {
      let processedWords;
      let nBlocksReady = this._data.sigBytes / 64;
      if (doFlush) nBlocksReady = Math.ceil(nBlocksReady);
      else nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
      const nWordsReady = nBlocksReady * 16;
      const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
      if (nWordsReady) {
        for (let offset = 0; offset < nWordsReady; offset += 16) this._doProcessBlock(this._data.words, offset);
        processedWords = this._data.words.splice(0, nWordsReady);
        this._data.sigBytes -= nBytesReady;
      }
      return new WordArray(processedWords, nBytesReady);
    }
  };
  var WordArray = class WordArray2 {
    words;
    sigBytes;
    constructor(words, sigBytes) {
      words = this.words = words || [];
      this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
    }
    static fromUtf8(input) {
      const str = unescape(encodeURIComponent(input));
      const strlen = str.length;
      const words = [];
      for (let i = 0; i < strlen; i++) words[i >>> 2] |= (str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
      return new WordArray2(words, strlen);
    }
    toBase64() {
      const base64Chars = [];
      for (let i = 0; i < this.sigBytes; i += 3) {
        const byte1 = this.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        const byte2 = this.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
        const byte3 = this.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
        const triplet = byte1 << 16 | byte2 << 8 | byte3;
        for (let j = 0; j < 4 && i * 8 + j * 6 < this.sigBytes * 8; j++) base64Chars.push(base64KeyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
      return base64Chars.join("");
    }
    concat(wordArray) {
      this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
      this.words.length = Math.ceil(this.sigBytes / 4);
      if (this.sigBytes % 4) for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
      else for (let j = 0; j < wordArray.sigBytes; j += 4) this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      this.sigBytes += wordArray.sigBytes;
    }
  };
  function digest(message) {
    return new SHA256().finalize(message).toBase64();
  }
  function hash$1(input) {
    return digest(serialize(input));
  }
  function hash(value) {
    return hash$1(value);
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/events.mjs
  function createEventEmitter() {
    const _listeners = {};
    function emit(event, ...args) {
      const callbacks = _listeners[event] || [];
      for (let i = 0, length = callbacks.length; i < length; i++) {
        const callback = callbacks[i];
        if (callback) callback(...args);
      }
    }
    function emitOnce(event, ...args) {
      emit(event, ...args);
      delete _listeners[event];
    }
    function on(event, cb) {
      (_listeners[event] ||= []).push(cb);
      return () => {
        _listeners[event] = _listeners[event]?.filter((i) => cb !== i);
      };
    }
    function once(event, cb) {
      const unsubscribe = on(event, ((...args) => {
        unsubscribe();
        return cb(...args);
      }));
      return unsubscribe;
    }
    return {
      _listeners,
      emit,
      emitOnce,
      on,
      once
    };
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/url.mjs
  var PROTOCOL_RE = /^[\w+.-]{2,}:\/\//;
  function withTrailingSlash(input) {
    return input.endsWith("/") ? input : `${input}/`;
  }
  function withoutTrailingSlash(input) {
    return (input.endsWith("/") ? input.slice(0, -1) : input) || "/";
  }
  function joinURL(base, ...segments) {
    let url = base;
    for (const segment of segments) {
      if (!segment || segment === "/") continue;
      url = url ? withTrailingSlash(url) + segment.replace(/^\.?\//, "") : segment;
    }
    return url;
  }
  function withBase(input, base) {
    if (!base || base === "/" || PROTOCOL_RE.test(input)) return input;
    const prefix = withoutTrailingSlash(base);
    return input.startsWith(prefix) ? input : joinURL(prefix, input);
  }
  function withProtocol(input, protocol) {
    const match = input.match(PROTOCOL_RE);
    return protocol + (match ? input.slice(match[0].length) : input);
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/shared-state-eQVYHNqA.mjs
  init_nanoid();
  var NOTHING = Symbol.for("immer-nothing");
  var DRAFTABLE = Symbol.for("immer-draftable");
  var DRAFT_STATE = Symbol.for("immer-state");
  var errors = [
    function(plugin) {
      return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
      return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
      return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
      return `'original' expects a draft, got: ${thing}`;
    }
  ];
  function die(error, ...args) {
    {
      const e = errors[error];
      const msg = isFunction(e) ? e.apply(null, args) : e;
      throw new Error(`[Immer] ${msg}`);
    }
  }
  var O = Object;
  var getPrototypeOf = O.getPrototypeOf;
  var CONSTRUCTOR = "constructor";
  var PROTOTYPE = "prototype";
  var CONFIGURABLE = "configurable";
  var ENUMERABLE = "enumerable";
  var WRITABLE = "writable";
  var VALUE = "value";
  var isDraft = (value) => !!value && !!value[DRAFT_STATE];
  function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
  }
  var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
  var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
  function isPlainObject(value) {
    if (!value || !isObjectish(value)) return false;
    const proto = getPrototypeOf(value);
    if (proto === null || proto === O[PROTOTYPE]) return true;
    const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
    if (Ctor === Object) return true;
    if (!isFunction(Ctor)) return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
      ctorString = Function.toString.call(Ctor);
      cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
  }
  function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0) (strict ? Reflect.ownKeys(obj) : O.keys(obj)).forEach((key) => {
      iter(key, obj[key], obj);
    });
    else obj.forEach((entry, index) => iter(index, entry, obj));
  }
  function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
  }
  var has = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
  var get = (thing, prop, type = getArchtype(thing)) => type === 2 ? thing.get(prop) : thing[prop];
  var set = (thing, propOrOldValue, value, type = getArchtype(thing)) => {
    if (type === 2) thing.set(propOrOldValue, value);
    else if (type === 3) thing.add(value);
    else thing[propOrOldValue] = value;
  };
  function is(x, y) {
    if (x === y) return x !== 0 || 1 / x === 1 / y;
    else return x !== x && y !== y;
  }
  var isArray = Array.isArray;
  var isMap = (target) => target instanceof Map;
  var isSet = (target) => target instanceof Set;
  var isObjectish = (target) => typeof target === "object";
  var isFunction = (target) => typeof target === "function";
  var isBoolean = (target) => typeof target === "boolean";
  function isArrayIndex(value) {
    const n = +value;
    return Number.isInteger(n) && String(n) === value;
  }
  var getProxyDraft = (value) => {
    if (!isObjectish(value)) return null;
    return value?.[DRAFT_STATE];
  };
  var latest = (state) => state.copy_ || state.base_;
  var getFinalValue = (state) => state.modified_ ? state.copy_ : state.base_;
  function shallowCopy(base, strict) {
    if (isMap(base)) return new Map(base);
    if (isSet(base)) return new Set(base);
    if (isArray(base)) return Array[PROTOTYPE].slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
      const descriptors = O.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      let keys2 = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys2.length; i++) {
        const key = keys2[i];
        const desc = descriptors[key];
        if (desc[WRITABLE] === false) {
          desc[WRITABLE] = true;
          desc[CONFIGURABLE] = true;
        }
        if (desc.get || desc.set) descriptors[key] = {
          [CONFIGURABLE]: true,
          [WRITABLE]: true,
          [ENUMERABLE]: desc[ENUMERABLE],
          [VALUE]: base[key]
        };
      }
      return O.create(getPrototypeOf(base), descriptors);
    } else {
      const proto = getPrototypeOf(base);
      if (proto !== null && isPlain) return { ...base };
      const obj = O.create(proto);
      return O.assign(obj, base);
    }
  }
  function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) O.defineProperties(obj, {
      set: dontMutateMethodOverride,
      add: dontMutateMethodOverride,
      clear: dontMutateMethodOverride,
      delete: dontMutateMethodOverride
    });
    O.freeze(obj);
    if (deep) each(obj, (_key, value) => {
      freeze(value, true);
    }, false);
    return obj;
  }
  function dontMutateFrozenCollections() {
    die(2);
  }
  var dontMutateMethodOverride = { [VALUE]: dontMutateFrozenCollections };
  function isFrozen(obj) {
    if (obj === null || !isObjectish(obj)) return true;
    return O.isFrozen(obj);
  }
  var PluginMapSet = "MapSet";
  var PluginPatches = "Patches";
  var PluginArrayMethods = "ArrayMethods";
  var plugins = {};
  function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) die(0, pluginKey);
    return plugin;
  }
  var isPluginLoaded = (pluginKey) => !!plugins[pluginKey];
  function loadPlugin(pluginKey, implementation) {
    if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
  }
  var currentScope;
  var getCurrentScope = () => currentScope;
  var createScope = (parent_, immer_) => ({
    drafts_: [],
    parent_,
    immer_,
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0,
    handledSet_: /* @__PURE__ */ new Set(),
    processedForPatches_: /* @__PURE__ */ new Set(),
    mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0,
    arrayMethodsPlugin_: isPluginLoaded(PluginArrayMethods) ? getPlugin(PluginArrayMethods) : void 0
  });
  function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
      scope.patchPlugin_ = getPlugin(PluginPatches);
      scope.patches_ = [];
      scope.inversePatches_ = [];
      scope.patchListener_ = patchListener;
    }
  }
  function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
  }
  function leaveScope(scope) {
    if (scope === currentScope) currentScope = scope.parent_;
  }
  var enterScope = (immer2) => currentScope = createScope(currentScope, immer2);
  function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 || state.type_ === 1) state.revoke_();
    else state.revoked_ = true;
  }
  function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    if (result !== void 0 && result !== baseDraft) {
      if (baseDraft[DRAFT_STATE].modified_) {
        revokeScope(scope);
        die(4);
      }
      if (isDraftable(result)) result = finalize(scope, result);
      const { patchPlugin_ } = scope;
      if (patchPlugin_) patchPlugin_.generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope);
    } else result = finalize(scope, baseDraft);
    maybeFreeze(scope, result, true);
    revokeScope(scope);
    if (scope.patches_) scope.patchListener_(scope.patches_, scope.inversePatches_);
    return result !== NOTHING ? result : void 0;
  }
  function finalize(rootScope, value) {
    if (isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    if (!state) return handleValue(value, rootScope.handledSet_, rootScope);
    if (!isSameScope(state, rootScope)) return value;
    if (!state.modified_) return state.base_;
    if (!state.finalized_) {
      const { callbacks_ } = state;
      if (callbacks_) while (callbacks_.length > 0) callbacks_.pop()(rootScope);
      generatePatchesAndFinalize(state, rootScope);
    }
    return state.copy_;
  }
  function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) freeze(value, deep);
  }
  function markStateFinalized(state) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
  }
  var isSameScope = (state, rootScope) => state.scope_ === rootScope;
  var EMPTY_LOCATIONS_RESULT = [];
  function updateDraftInParent(parent2, draftValue, finalizedValue, originalKey) {
    const parentCopy = latest(parent2);
    const parentType = parent2.type_;
    if (originalKey !== void 0) {
      if (get(parentCopy, originalKey, parentType) === draftValue) {
        set(parentCopy, originalKey, finalizedValue, parentType);
        return;
      }
    }
    if (!parent2.draftLocations_) {
      const draftLocations = parent2.draftLocations_ = /* @__PURE__ */ new Map();
      each(parentCopy, (key, value) => {
        if (isDraft(value)) {
          const keys2 = draftLocations.get(value) || [];
          keys2.push(key);
          draftLocations.set(value, keys2);
        }
      });
    }
    const locations = parent2.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
    for (const location2 of locations) set(parentCopy, location2, finalizedValue, parentType);
  }
  function registerChildFinalizationCallback(parent2, child, key) {
    parent2.callbacks_.push(function childCleanup(rootScope) {
      const state = child;
      if (!state || !isSameScope(state, rootScope)) return;
      rootScope.mapSetPlugin_?.fixSetContents(state);
      const finalizedValue = getFinalValue(state);
      updateDraftInParent(parent2, state.draft_ ?? state, finalizedValue, key);
      generatePatchesAndFinalize(state, rootScope);
    });
  }
  function generatePatchesAndFinalize(state, rootScope) {
    if (state.modified_ && !state.finalized_ && (state.type_ === 3 || state.type_ === 1 && state.allIndicesReassigned_ || (state.assigned_?.size ?? 0) > 0)) {
      const { patchPlugin_ } = rootScope;
      if (patchPlugin_) {
        const basePath = patchPlugin_.getPath(state);
        if (basePath) patchPlugin_.generatePatches_(state, basePath, rootScope);
      }
      markStateFinalized(state);
    }
  }
  function handleCrossReference(target, key, value) {
    const { scope_ } = target;
    if (isDraft(value)) {
      const state = value[DRAFT_STATE];
      if (isSameScope(state, scope_)) state.callbacks_.push(function crossReferenceCleanup() {
        prepareCopy(target);
        updateDraftInParent(target, value, getFinalValue(state), key);
      });
    } else if (isDraftable(value)) target.callbacks_.push(function nestedDraftCleanup() {
      const targetCopy = latest(target);
      if (target.type_ === 3) {
        if (targetCopy.has(value)) handleValue(value, scope_.handledSet_, scope_);
      } else if (get(targetCopy, key, target.type_) === value) {
        if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) handleValue(get(target.copy_, key, target.type_), scope_.handledSet_, scope_);
      }
    });
  }
  function handleValue(target, handledSet, rootScope) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) return target;
    if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) return target;
    handledSet.add(target);
    each(target, (key, value) => {
      if (isDraft(value)) {
        const state = value[DRAFT_STATE];
        if (isSameScope(state, rootScope)) {
          set(target, key, getFinalValue(state), target.type_);
          markStateFinalized(state);
        }
      } else if (isDraftable(value)) handleValue(value, handledSet, rootScope);
    });
    return target;
  }
  function createProxyProxy(base, parent2) {
    const baseIsArray = isArray(base);
    const state = {
      type_: baseIsArray ? 1 : 0,
      scope_: parent2 ? parent2.scope_ : getCurrentScope(),
      modified_: false,
      finalized_: false,
      assigned_: void 0,
      parent_: parent2,
      base_: base,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: false,
      callbacks_: void 0
    };
    let target = state;
    let traps = objectTraps;
    if (baseIsArray) {
      target = [state];
      traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return [proxy, state];
  }
  var objectTraps = {
    get(state, prop) {
      if (prop === DRAFT_STATE) return state;
      let arrayPlugin = state.scope_.arrayMethodsPlugin_;
      const isArrayWithStringProp = state.type_ === 1 && typeof prop === "string";
      if (isArrayWithStringProp) {
        if (arrayPlugin?.isArrayOperationMethod(prop)) return arrayPlugin.createMethodInterceptor(state, prop);
      }
      const source = latest(state);
      if (!has(source, prop, state.type_)) return readPropFromProto(state, source, prop);
      const value = source[prop];
      if (state.finalized_ || !isDraftable(value)) return value;
      if (isArrayWithStringProp && state.operationMethod && arrayPlugin?.isMutatingArrayMethod(state.operationMethod) && isArrayIndex(prop)) return value;
      if (value === peek(state.base_, prop) || isRelocatedBaseRef(state, prop, value)) {
        prepareCopy(state);
        const childKey = state.type_ === 1 ? +prop : prop;
        const childDraft = createProxy(state.scope_, value, state, childKey);
        return state.copy_[childKey] = childDraft;
      }
      return value;
    },
    has(state, prop) {
      return prop in latest(state);
    },
    ownKeys(state) {
      return Reflect.ownKeys(latest(state));
    },
    set(state, prop, value) {
      const desc = getDescriptorFromProto(latest(state), prop);
      if (desc?.set) {
        desc.set.call(state.draft_, value);
        return true;
      }
      if (!state.modified_) {
        const current2 = peek(latest(state), prop);
        const currentState = current2?.[DRAFT_STATE];
        if (currentState && currentState.base_ === value) {
          state.copy_[prop] = value;
          state.assigned_.set(prop, false);
          return true;
        }
        if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_))) return true;
        prepareCopy(state);
        markChanged(state);
      }
      if (state.copy_[prop] === value && (value !== void 0 || has(state.copy_, prop, state.type_)) || Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
      state.copy_[prop] = value;
      state.assigned_.set(prop, true);
      handleCrossReference(state, prop, value);
      return true;
    },
    deleteProperty(state, prop) {
      prepareCopy(state);
      if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
        state.assigned_.set(prop, false);
        markChanged(state);
      } else state.assigned_.delete(prop);
      if (state.copy_) delete state.copy_[prop];
      return true;
    },
    getOwnPropertyDescriptor(state, prop) {
      const owner = latest(state);
      const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
      if (!desc) return desc;
      return {
        [WRITABLE]: true,
        [CONFIGURABLE]: state.type_ !== 1 || prop !== "length",
        [ENUMERABLE]: desc[ENUMERABLE],
        [VALUE]: owner[prop]
      };
    },
    defineProperty() {
      die(11);
    },
    getPrototypeOf(state) {
      return getPrototypeOf(state.base_);
    },
    setPrototypeOf() {
      die(12);
    }
  };
  var arrayTraps = {};
  for (let key in objectTraps) {
    let fn = objectTraps[key];
    arrayTraps[key] = function() {
      const args = arguments;
      args[0] = args[0][0];
      return fn.apply(this, args);
    };
  }
  arrayTraps.deleteProperty = function(state, prop) {
    if (isNaN(parseInt(prop))) die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
  };
  arrayTraps.set = function(state, prop, value) {
    if (prop !== "length" && isNaN(parseInt(prop))) die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
  };
  function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    return (state ? latest(state) : draft)[prop];
  }
  function isRelocatedBaseRef(state, prop, value) {
    if (state.type_ !== 1 || !state.allIndicesReassigned_ || state.assigned_?.get(prop) || !isDraftable(value) || value[DRAFT_STATE]) return false;
    return state.baseRefs_.has(value);
  }
  function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? VALUE in desc ? desc[VALUE] : desc.get?.call(state.draft_) : void 0;
  }
  function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    let proto = getPrototypeOf(source);
    while (proto) {
      const desc = Object.getOwnPropertyDescriptor(proto, prop);
      if (desc) return desc;
      proto = getPrototypeOf(proto);
    }
  }
  function markChanged(state) {
    if (!state.modified_) {
      state.modified_ = true;
      if (state.parent_) markChanged(state.parent_);
    }
  }
  function prepareCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
    }
  }
  var Immer2 = class {
    constructor(config) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.useStrictIteration_ = false;
      this.produce = (base, recipe, patchListener) => {
        if (isFunction(base) && !isFunction(recipe)) {
          const defaultBase = recipe;
          recipe = base;
          const self2 = this;
          return function curriedProduce(base2 = defaultBase, ...args) {
            return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
          };
        }
        if (!isFunction(recipe)) die(6);
        if (patchListener !== void 0 && !isFunction(patchListener)) die(7);
        let result;
        if (isDraftable(base)) {
          const scope = enterScope(this);
          const proxy = createProxy(scope, base, void 0);
          let hasError = true;
          try {
            result = recipe(proxy);
            hasError = false;
          } finally {
            if (hasError) revokeScope(scope);
            else leaveScope(scope);
          }
          usePatchesInScope(scope, patchListener);
          return processResult(result, scope);
        } else if (!base || !isObjectish(base)) {
          result = recipe(base);
          if (result === void 0) result = base;
          if (result === NOTHING) result = void 0;
          if (this.autoFreeze_) freeze(result, true);
          if (patchListener) {
            const p = [];
            const ip = [];
            getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
              patches_: p,
              inversePatches_: ip
            });
            patchListener(p, ip);
          }
          return result;
        } else die(1, base);
      };
      this.produceWithPatches = (base, recipe) => {
        if (isFunction(base)) return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
        let patches, inversePatches;
        return [
          this.produce(base, recipe, (p, ip) => {
            patches = p;
            inversePatches = ip;
          }),
          patches,
          inversePatches
        ];
      };
      if (isBoolean(config?.autoFreeze)) this.setAutoFreeze(config.autoFreeze);
      if (isBoolean(config?.useStrictShallowCopy)) this.setUseStrictShallowCopy(config.useStrictShallowCopy);
      if (isBoolean(config?.useStrictIteration)) this.setUseStrictIteration(config.useStrictIteration);
    }
    createDraft(base) {
      if (!isDraftable(base)) die(8);
      if (isDraft(base)) base = current(base);
      const scope = enterScope(this);
      const proxy = createProxy(scope, base, void 0);
      proxy[DRAFT_STATE].isManual_ = true;
      leaveScope(scope);
      return proxy;
    }
    finishDraft(draft, patchListener) {
      const state = draft && draft[DRAFT_STATE];
      if (!state || !state.isManual_) die(9);
      const { scope_: scope } = state;
      usePatchesInScope(scope, patchListener);
      return processResult(void 0, scope);
    }
    /**
    * Pass true to automatically freeze all copies created by Immer.
    *
    * By default, auto-freezing is enabled.
    */
    setAutoFreeze(value) {
      this.autoFreeze_ = value;
    }
    /**
    * Pass true to enable strict shallow copy.
    *
    * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
    */
    setUseStrictShallowCopy(value) {
      this.useStrictShallowCopy_ = value;
    }
    /**
    * Pass false to use faster iteration that skips non-enumerable properties
    * but still handles symbols for compatibility.
    *
    * By default, strict iteration is enabled (includes all own properties).
    */
    setUseStrictIteration(value) {
      this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
      return this.useStrictIteration_;
    }
    applyPatches(base, patches) {
      let i;
      for (i = patches.length - 1; i >= 0; i--) {
        const patch = patches[i];
        if (patch.path.length === 0 && patch.op === "replace") {
          base = patch.value;
          break;
        }
      }
      if (i > -1) patches = patches.slice(i + 1);
      const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
      if (isDraft(base)) return applyPatchesImpl(base, patches);
      return this.produce(base, (draft) => applyPatchesImpl(draft, patches));
    }
  };
  function createProxy(rootScope, value, parent2, key) {
    const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent2) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent2) : createProxyProxy(value, parent2);
    (parent2?.scope_ ?? getCurrentScope()).drafts_.push(draft);
    state.callbacks_ = parent2?.callbacks_ ?? [];
    state.key_ = key;
    if (parent2 && key !== void 0) registerChildFinalizationCallback(parent2, state, key);
    else state.callbacks_.push(function rootDraftCleanup(rootScope2) {
      rootScope2.mapSetPlugin_?.fixSetContents(state);
      const { patchPlugin_ } = rootScope2;
      if (state.modified_ && patchPlugin_) patchPlugin_.generatePatches_(state, [], rootScope2);
    });
    return draft;
  }
  function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
  }
  function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    let copy;
    let strict = true;
    if (state) {
      if (!state.modified_) return state.base_;
      state.finalized_ = true;
      copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
      strict = state.scope_.immer_.shouldUseStrictIteration();
    } else copy = shallowCopy(value, true);
    each(copy, (key, childValue) => {
      set(copy, key, currentImpl(childValue));
    }, strict);
    if (state) state.finalized_ = false;
    return copy;
  }
  function enablePatches() {
    const errorOffset = 16;
    errors.push('Sets cannot have "replace" patches.', function(op) {
      return "Unsupported patch operation: " + op;
    }, function(path) {
      return "Cannot apply patch, path doesn't resolve: " + path;
    }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
    function getPath(state, path = []) {
      if (state.key_ !== void 0) {
        const parentCopy = state.parent_.copy_ ?? state.parent_.base_;
        const proxyDraft = getProxyDraft(get(parentCopy, state.key_));
        const valueAtKey = get(parentCopy, state.key_);
        if (valueAtKey === void 0) return null;
        if (valueAtKey !== state.draft_ && valueAtKey !== state.base_ && valueAtKey !== state.copy_) return null;
        if (proxyDraft != null && proxyDraft.base_ !== state.base_) return null;
        const isSet2 = state.parent_.type_ === 3;
        let key;
        if (isSet2) {
          const setParent = state.parent_;
          key = Array.from(setParent.drafts_.keys()).indexOf(state.key_);
        } else key = state.key_;
        if (!(isSet2 && parentCopy.size > key || has(parentCopy, key))) return null;
        path.push(key);
      }
      if (state.parent_) return getPath(state.parent_, path);
      path.reverse();
      try {
        resolvePath(state.copy_, path);
      } catch (e) {
        return null;
      }
      return path;
    }
    function resolvePath(base, path) {
      let current2 = base;
      for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        current2 = get(current2, key);
        if (!isObjectish(current2) || current2 === null) throw new Error(`Cannot resolve path at '${path.join("/")}'`);
      }
      return current2;
    }
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";
    function generatePatches_(state, basePath, scope) {
      if (state.scope_.processedForPatches_.has(state)) return;
      state.scope_.processedForPatches_.add(state);
      const { patches_, inversePatches_ } = scope;
      switch (state.type_) {
        case 0:
        case 2:
          return generatePatchesFromAssigned(state, basePath, patches_, inversePatches_);
        case 1:
          return generateArrayPatches(state, basePath, patches_, inversePatches_);
        case 3:
          return generateSetPatches(state, basePath, patches_, inversePatches_);
      }
    }
    function generateArrayPatches(state, basePath, patches, inversePatches) {
      let { base_, assigned_ } = state;
      let copy_ = state.copy_;
      if (copy_.length < base_.length) {
        [base_, copy_] = [copy_, base_];
        [patches, inversePatches] = [inversePatches, patches];
      }
      const allReassigned = state.allIndicesReassigned_ === true;
      for (let i = 0; i < base_.length; i++) {
        const copiedItem = copy_[i];
        const baseItem = base_[i];
        if ((allReassigned || assigned_?.get(i.toString())) && copiedItem !== baseItem) {
          const childState = copiedItem?.[DRAFT_STATE];
          if (childState && childState.modified_) continue;
          const path = basePath.concat([i]);
          patches.push({
            op: REPLACE,
            path,
            value: clonePatchValueIfNeeded(copiedItem)
          });
          inversePatches.push({
            op: REPLACE,
            path,
            value: clonePatchValueIfNeeded(baseItem)
          });
        }
      }
      for (let i = base_.length; i < copy_.length; i++) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value: clonePatchValueIfNeeded(copy_[i])
        });
      }
      for (let i = copy_.length - 1; base_.length <= i; --i) {
        const path = basePath.concat([i]);
        inversePatches.push({
          op: REMOVE,
          path
        });
      }
    }
    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
      const { base_, copy_, type_ } = state;
      each(state.assigned_, (key, assignedValue) => {
        const origValue = get(base_, key, type_);
        const value = get(copy_, key, type_);
        const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
        if (origValue === value && op === REPLACE) return;
        const path = basePath.concat(key);
        patches.push(op === REMOVE ? {
          op,
          path
        } : {
          op,
          path,
          value: clonePatchValueIfNeeded(value)
        });
        inversePatches.push(op === ADD ? {
          op: REMOVE,
          path
        } : op === REMOVE ? {
          op: ADD,
          path,
          value: clonePatchValueIfNeeded(origValue)
        } : {
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(origValue)
        });
      });
    }
    function generateSetPatches(state, basePath, patches, inversePatches) {
      let { base_, copy_ } = state;
      let i = 0;
      base_.forEach((value) => {
        if (!copy_.has(value)) {
          const path = basePath.concat([i]);
          patches.push({
            op: REMOVE,
            path,
            value
          });
          inversePatches.unshift({
            op: ADD,
            path,
            value
          });
        }
        i++;
      });
      i = 0;
      copy_.forEach((value) => {
        if (!base_.has(value)) {
          const path = basePath.concat([i]);
          patches.push({
            op: ADD,
            path,
            value
          });
          inversePatches.unshift({
            op: REMOVE,
            path,
            value
          });
        }
        i++;
      });
    }
    function generateReplacementPatches_(baseValue, replacement, scope) {
      const { patches_, inversePatches_ } = scope;
      patches_.push({
        op: REPLACE,
        path: [],
        value: replacement === NOTHING ? void 0 : replacement
      });
      inversePatches_.push({
        op: REPLACE,
        path: [],
        value: baseValue
      });
    }
    function applyPatches_(draft, patches) {
      patches.forEach((patch) => {
        const { path, op } = patch;
        let base = draft;
        for (let i = 0; i < path.length - 1; i++) {
          const parentType = getArchtype(base);
          let p = path[i];
          if (typeof p !== "string" && typeof p !== "number") p = "" + p;
          if ((parentType === 0 || parentType === 1) && (p === "__proto__" || p === CONSTRUCTOR)) die(19);
          if (isFunction(base) && p === PROTOTYPE) die(19);
          base = get(base, p);
          if (base === null || !isObjectish(base)) die(18, path.join("/"));
        }
        const type = getArchtype(base);
        const value = deepClonePatchValue(patch.value);
        const key = path[path.length - 1];
        switch (op) {
          case REPLACE:
            switch (type) {
              case 2:
                return base.set(key, value);
              case 3:
                die(errorOffset);
              default:
                return base[key] = value;
            }
          case ADD:
            switch (type) {
              case 1:
                return key === "-" ? base.push(value) : base.splice(key, 0, value);
              case 2:
                return base.set(key, value);
              case 3:
                return base.add(value);
              default:
                return base[key] = value;
            }
          case REMOVE:
            switch (type) {
              case 1:
                return base.splice(key, 1);
              case 2:
                return base.delete(key);
              case 3:
                return base.delete(patch.value);
              default:
                return delete base[key];
            }
          default:
            die(17, op);
        }
      });
      return draft;
    }
    function deepClonePatchValue(obj) {
      if (!isDraftable(obj)) return obj;
      if (isArray(obj)) return obj.map(deepClonePatchValue);
      if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)]));
      if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
      const cloned = Object.create(getPrototypeOf(obj));
      for (const key in obj) cloned[key] = deepClonePatchValue(obj[key]);
      if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
      return cloned;
    }
    function clonePatchValueIfNeeded(obj) {
      if (isDraft(obj)) return deepClonePatchValue(obj);
      else return obj;
    }
    loadPlugin(PluginPatches, {
      applyPatches_,
      generatePatches_,
      generateReplacementPatches_,
      getPath
    });
  }
  globalThis.Iterator?.from;
  var immer = new Immer2();
  var produce = immer.produce;
  var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
  var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
  var MAX_SYNC_IDS = 1e3;
  function rememberSyncId(syncIds, syncId) {
    syncIds.add(syncId);
    if (syncIds.size > MAX_SYNC_IDS) {
      const oldest = syncIds.values().next().value;
      if (oldest !== void 0) syncIds.delete(oldest);
    }
  }
  function createSharedState(options2) {
    const { enablePatches: enablePatches$1 = false } = options2;
    if (enablePatches$1) enablePatches();
    const events = createEventEmitter();
    let state = options2.initialValue;
    const syncIds = /* @__PURE__ */ new Set();
    return {
      on: events.on,
      value: () => state,
      patch: (patches, syncId = nanoid2()) => {
        if (syncIds.has(syncId)) return;
        enablePatches();
        state = applyPatches(state, patches);
        rememberSyncId(syncIds, syncId);
        events.emit("updated", state, void 0, syncId);
      },
      mutate: (fn, syncId = nanoid2()) => {
        if (syncIds.has(syncId)) return;
        rememberSyncId(syncIds, syncId);
        if (enablePatches$1) {
          const [nextState, patches] = produceWithPatches(state, fn);
          if (nextState === state) return;
          state = nextState;
          events.emit("updated", state, patches, syncId);
        } else {
          const nextState = produce(state, fn);
          if (nextState === state) return;
          state = nextState;
          events.emit("updated", state, void 0, syncId);
        }
      },
      syncIds
    };
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/structured-clone-CgtQ61SA.mjs
  var env = typeof self === "object" ? self : globalThis;
  var SAFE_ERROR_NAMES = /* @__PURE__ */ new Set([
    "Error",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
    "AggregateError"
  ]);
  var SAFE_CONSTRUCTOR_NAMES = /* @__PURE__ */ new Set([
    "Boolean",
    "Number",
    "String",
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float16Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ]);
  function deserializer($, _) {
    const as = (out, index) => {
      $.set(index, out);
      return out;
    };
    const unpair = (index) => {
      if ($.has(index)) return $.get(index);
      const [type, value] = _[index];
      switch (type) {
        case 0:
        case -1:
          return as(value, index);
        case 1: {
          const arr = as([], index);
          for (const index2 of value) arr.push(unpair(index2));
          return arr;
        }
        case 2: {
          const object = as({}, index);
          for (const [key, index2] of value) object[unpair(key)] = unpair(index2);
          return object;
        }
        case 3:
          return as(new Date(value), index);
        case 4: {
          const { source, flags } = value;
          return as(new RegExp(source, flags), index);
        }
        case 5: {
          const map = as(/* @__PURE__ */ new Map(), index);
          for (const [key, index2] of value) map.set(unpair(key), unpair(index2));
          return map;
        }
        case 6: {
          const set2 = as(/* @__PURE__ */ new Set(), index);
          for (const index2 of value) set2.add(unpair(index2));
          return set2;
        }
        case 7: {
          const { name, message } = value;
          const Ctor = SAFE_ERROR_NAMES.has(name) ? env[name] : void 0;
          return as(new (Ctor ?? env.Error)(message), index);
        }
        case 8:
          return as(BigInt(value), index);
        case "BigInt":
          return as(Object(BigInt(value)), index);
        case "ArrayBuffer":
          return as(new Uint8Array(value).buffer, value);
        case "DataView": {
          const { buffer } = new Uint8Array(value);
          return as(new DataView(buffer), value);
        }
      }
      if (typeof type === "string" && SAFE_CONSTRUCTOR_NAMES.has(type)) return as(new env[type](value), index);
      throw new TypeError(`unable to deserialize unsafe or unknown type: ${String(type)}`);
    };
    return unpair;
  }
  function deserialize(serialized) {
    return deserializer(/* @__PURE__ */ new Map(), serialized)(0);
  }
  var EMPTY = "";
  var { toString } = {};
  var { keys } = Object;
  function typeOf(value) {
    const type = typeof value;
    if (type !== "object" || !value) return [0, type];
    const asString = toString.call(value).slice(8, -1);
    switch (asString) {
      case "Array":
        return [1, EMPTY];
      case "Object":
        return [2, EMPTY];
      case "Date":
        return [3, EMPTY];
      case "RegExp":
        return [4, EMPTY];
      case "Map":
        return [5, EMPTY];
      case "Set":
        return [6, EMPTY];
      case "DataView":
        return [1, asString];
    }
    if (asString.includes("Array")) return [1, asString];
    if (asString.includes("Error")) return [7, asString];
    return [2, asString];
  }
  function shouldSkip([TYPE, type]) {
    return TYPE === 0 && (type === "function" || type === "symbol");
  }
  function serializer(strict, json, $, _) {
    const as = (out, value) => {
      const index = _.push(out) - 1;
      $.set(value, index);
      return index;
    };
    const pair = (value) => {
      if ($.has(value)) return $.get(value);
      let [TYPE, type] = typeOf(value);
      switch (TYPE) {
        case 0: {
          let entry = value;
          switch (type) {
            case "bigint":
              TYPE = 8;
              entry = value.toString();
              break;
            case "function":
            case "symbol":
              if (strict) throw new TypeError(`unable to serialize ${type}`);
              entry = null;
              break;
            case "undefined":
              return as([-1], value);
          }
          return as([TYPE, entry], value);
        }
        case 1: {
          if (type) {
            let spread = value;
            if (type === "DataView") spread = new Uint8Array(value.buffer);
            else if (type === "ArrayBuffer") spread = new Uint8Array(value);
            return as([type, [...spread]], value);
          }
          const arr = [];
          const index = as([TYPE, arr], value);
          for (const entry of value) arr.push(pair(entry));
          return index;
        }
        case 2: {
          if (type) switch (type) {
            case "BigInt":
              return as([type, value.toString()], value);
            case "Boolean":
            case "Number":
            case "String":
              return as([type, value.valueOf()], value);
          }
          if (json && "toJSON" in value) return pair(value.toJSON());
          const entries = [];
          const index = as([TYPE, entries], value);
          for (const key of keys(value)) if (strict || !shouldSkip(typeOf(value[key]))) entries.push([pair(key), pair(value[key])]);
          return index;
        }
        case 3:
          return as([TYPE, value.toISOString()], value);
        case 4: {
          const { source, flags } = value;
          return as([TYPE, {
            source,
            flags
          }], value);
        }
        case 5: {
          const entries = [];
          const index = as([TYPE, entries], value);
          for (const [key, entry] of value) if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry)))) entries.push([pair(key), pair(entry)]);
          return index;
        }
        case 6: {
          const entries = [];
          const index = as([TYPE, entries], value);
          for (const entry of value) if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
          return index;
        }
      }
      const { message } = value;
      return as([TYPE, {
        name: type,
        message
      }], value);
    };
    return pair;
  }
  function serialize2(value, options2 = {}) {
    const _ = [];
    serializer(!(options2.json || options2.lossy), !!options2.json, /* @__PURE__ */ new Map(), _)(value);
    return _;
  }
  var { parse: $parse, stringify: $stringify } = JSON;
  var options = {
    json: true,
    lossy: true
  };
  function parse(str) {
    return deserialize($parse(str));
  }
  function stringify(any) {
    return $stringify(serialize2(any, options));
  }
  function structuredCloneDeserialize(value) {
    return deserialize(value);
  }
  function structuredCloneStringify(value) {
    return stringify(value);
  }
  function structuredCloneParse(value) {
    return parse(value);
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/streaming-channel.mjs
  init_nanoid();
  var DEFAULT_HIGH_WATER_MARK = 256;
  var StreamClosedError = class extends Error {
    name = "StreamClosedError";
  };
  function createStreamSink(options2 = {}) {
    const id = options2.id ?? nanoid2();
    const replayWindow = Math.max(0, options2.replayWindow ?? 0);
    const events = createEventEmitter();
    const controller = new AbortController();
    const buffer = [];
    let closed = false;
    let lastSeq = 0;
    function write(chunk) {
      if (closed) throw new StreamClosedError(`Cannot write to a closed stream "${id}"`);
      lastSeq += 1;
      if (replayWindow > 0) {
        buffer.push({
          seq: lastSeq,
          chunk
        });
        if (buffer.length > replayWindow) {
          if (buffer.length - replayWindow === 1) buffer.shift();
          else buffer.splice(0, buffer.length - replayWindow);
        }
      }
      events.emit("chunk", lastSeq, chunk);
    }
    function error(reason) {
      if (closed) return;
      closed = true;
      const payload = toErrorPayload(reason);
      controller.abort(reason);
      events.emit("end", payload);
    }
    function close() {
      if (closed) return;
      closed = true;
      if (!controller.signal.aborted) controller.abort("stream closed");
      events.emit("end", void 0);
    }
    function abort(reason) {
      if (closed) return;
      if (!controller.signal.aborted) controller.abort(reason ?? "aborted");
    }
    const writable = new WritableStream({
      write(chunk) {
        write(chunk);
      },
      close() {
        close();
      },
      abort(reason) {
        error(reason);
      }
    });
    return {
      id,
      signal: controller.signal,
      get closed() {
        return closed;
      },
      get lastSeq() {
        return lastSeq;
      },
      write,
      error,
      close,
      abort,
      writable,
      events,
      buffer
    };
  }
  function createStreamReader(options2 = {}) {
    const id = options2.id ?? nanoid2();
    const highWaterMark = Math.max(1, options2.highWaterMark ?? DEFAULT_HIGH_WATER_MARK);
    const queue = [];
    let lastSeenSeq = 0;
    let done = false;
    let cancelled = false;
    let endError;
    let pending;
    let pullController;
    let readableInstance;
    function drainNext() {
      if (!pending) return;
      if (queue.length > 0) {
        const value = queue.shift();
        const r = pending;
        pending = void 0;
        r.resolve({
          value,
          done: false
        });
        return;
      }
      if (done) {
        const r = pending;
        pending = void 0;
        if (endError) {
          const err = new Error(endError.message);
          err.name = endError.name;
          r.reject(err);
        } else r.resolve({
          value: void 0,
          done: true
        });
      }
    }
    function feedReadable() {
      if (!pullController) return;
      while (queue.length > 0) {
        const v = queue.shift();
        try {
          pullController.enqueue(v);
        } catch {
          break;
        }
      }
      if (done && pullController) {
        try {
          if (endError) {
            const err = new Error(endError.message);
            err.name = endError.name;
            pullController.error(err);
          } else pullController.close();
        } catch {
        }
        pullController = void 0;
      }
    }
    function push(seq, chunk) {
      if (done || cancelled) return;
      if (seq <= lastSeenSeq) return;
      lastSeenSeq = seq;
      queue.push(chunk);
      if (queue.length > highWaterMark) {
        const overflow = queue.length - highWaterMark;
        queue.splice(0, overflow);
        options2.onOverflow?.(overflow);
      }
      drainNext();
      if (readableInstance) feedReadable();
    }
    function end(error) {
      if (done) return;
      done = true;
      endError = error;
      drainNext();
      if (readableInstance) feedReadable();
    }
    function cancel() {
      if (cancelled || done) return;
      cancelled = true;
      options2.onCancel?.();
      end(void 0);
    }
    function getReadable() {
      if (readableInstance) return readableInstance;
      readableInstance = new ReadableStream({
        start(controller) {
          pullController = controller;
          feedReadable();
        },
        cancel() {
          cancel();
        }
      });
      return readableInstance;
    }
    return {
      id,
      get cancelled() {
        return cancelled;
      },
      get done() {
        return done;
      },
      get lastSeenSeq() {
        return lastSeenSeq;
      },
      get readable() {
        return getReadable();
      },
      cancel,
      _push: push,
      _end: end,
      [Symbol.asyncIterator]() {
        return {
          next() {
            if (queue.length > 0) return Promise.resolve({
              value: queue.shift(),
              done: false
            });
            if (done) {
              if (endError) {
                const err = new Error(endError.message);
                err.name = endError.name;
                return Promise.reject(err);
              }
              return Promise.resolve({
                value: void 0,
                done: true
              });
            }
            return new Promise((resolve, reject) => {
              pending = {
                resolve,
                reject
              };
            });
          },
          return() {
            cancel();
            return Promise.resolve({
              value: void 0,
              done: true
            });
          }
        };
      }
    };
  }
  function toErrorPayload(reason) {
    if (reason instanceof Error) return {
      name: reason.name || "Error",
      message: reason.message
    };
    if (typeof reason === "string") return {
      name: "Error",
      message: reason
    };
    try {
      return {
        name: "Error",
        message: JSON.stringify(reason)
      };
    } catch {
      return {
        name: "Error",
        message: String(reason)
      };
    }
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/utils/agent-tool-name.mjs
  var MAX_TOOL_NAME_LENGTH = 128;
  function toAgentToolName(id) {
    return id.replace(/[^\w-]+/g, "_").slice(0, MAX_TOOL_NAME_LENGTH);
  }

  // ../../node_modules/.pnpm/devframe@1.0.0_srvx@1.0.5/node_modules/devframe/dist/client/index.mjs
  var DEVFRAME_CONNECTION_META_FILENAME = "__connection.json";
  var DEVFRAME_CONNECTION_KEY = "__DEVFRAME_CONNECTION__";
  var DEVFRAME_SSE_SESSION_HEADER = "x-birpc-session";
  var DEVFRAME_RPC_DUMP_MANIFEST_FILENAME = "__rpc-dump/index.json";
  var DEVFRAME_SERVICES_STATE_KEY = "devframe:services";
  var DEVFRAME_OTP_URL_PARAM = "devframe_otp";
  var DEVFRAME_AUTH_TOKEN_QUERY_PARAM = "devframe_auth_token";
  DEVFRAME_EVENTS.postMessage.remoteAssetsError;
  var RpcCacheManager = class {
    cacheMap = /* @__PURE__ */ new Map();
    options;
    keySerializer;
    constructor(options2) {
      this.options = options2;
      this.keySerializer = options2.keySerializer || ((args) => hash(args));
    }
    updateOptions(options2) {
      this.options = {
        ...this.options,
        ...options2
      };
    }
    cached(m, a) {
      const methodCache = this.cacheMap.get(m);
      if (methodCache) return methodCache.get(this.keySerializer(a));
    }
    has(m, a) {
      return this.cacheMap.get(m)?.has(this.keySerializer(a)) ?? false;
    }
    apply(req, res) {
      const methodCache = this.cacheMap.get(req.m) || /* @__PURE__ */ new Map();
      methodCache.set(this.keySerializer(req.a), res);
      this.cacheMap.set(req.m, methodCache);
    }
    validate(m) {
      return this.options.functions.includes(m);
    }
    clear(fn) {
      if (fn) this.cacheMap.delete(fn);
      else this.cacheMap.clear();
    }
  };
  var diagnostics = defineDiagnostics$1({
    docsBase: "https://devfra.me/errors",
    codes: {
      DF0019: {
        why: (p) => `RPC function "${p.name}" has \`agent\` set but \`jsonSerializable\` is \`false\`; MCP requires JSON-serializable data.`,
        fix: "Remove `jsonSerializable: false`, or remove `agent` to keep it RPC-only."
      },
      DF0020: {
        why: (p) => `RPC function "${p.name}" declares \`jsonSerializable: true\` but the value at "${p.path}" is a ${p.type}.`,
        fix: "Either drop `jsonSerializable: true` (falls back to structured-clone) or change the value to a JSON-safe shape."
      },
      DF0021: {
        why: (p) => `RPC function "${p.name}" is already registered`,
        fix: "Use the `force` parameter to overwrite an existing registration."
      },
      DF0022: { why: (p) => `RPC function "${p.name}" is not registered. Use register() to add new functions.` },
      DF0023: { why: (p) => `RPC function "${p.name}" is not registered` },
      DF0024: { why: (p) => `Either handler or setup function must be provided for RPC function "${p.name}"` },
      DF0025: { why: (p) => `Function "${p.name}" not found in dump store` },
      DF0026: { why: (p) => `No dump match for "${p.name}" with args: ${p.args}` },
      DF0027: { why: (p) => `Function "${p.name}" with type "${p.type}" cannot have dump configuration. Only "static" and "query" types support dumps.` },
      DF0028: {
        why: (p) => `Function "${p.name}" with type "${p.type}" cannot use \`snapshot: true\`. Only "query" functions support this sugar; "static" functions have equivalent default behavior already.`,
        fix: "Remove `snapshot: true`, or change the function type to `query`."
      },
      DF0043: {
        why: (p) => `RPC function "${p.name}" received an invalid argument at position ${p.index}: ${p.issues}`,
        fix: "Pass a value that satisfies the `args` schema declared for this function."
      },
      DF0044: {
        why: (p) => `RPC function "${p.name}" returned a value that failed its \`returns\` schema: ${p.issues}`,
        fix: "Make the handler return a value that satisfies the `returns` schema, or relax the schema."
      }
    }
  });
  function ensureAgentJsonSerializable(fnDef) {
    if (fnDef.agent && fnDef.jsonSerializable === false) throw diagnostics.DF0019({ name: fnDef.name });
    if (fnDef.agent && !fnDef.jsonSerializable) fnDef.jsonSerializable = true;
  }
  async function runStandardSchema(schema, value) {
    const result = schema["~standard"].validate(value);
    return result instanceof Promise ? await result : result;
  }
  function formatIssues(issues) {
    return issues.map((issue) => {
      const path = issue.path?.map((segment) => typeof segment === "object" ? segment.key : segment).join(".");
      return path ? `${path}: ${issue.message}` : issue.message;
    }).join("; ");
  }
  async function validateRpcArgs(name, argsSchema, args) {
    const original = args.slice();
    if (!argsSchema || argsSchema.length === 0) return original;
    for (let index = 0; index < argsSchema.length; index++) {
      const schema = argsSchema[index];
      if (!schema) continue;
      const result = await runStandardSchema(schema, args[index]);
      if (result.issues) throw diagnostics.DF0043({
        name,
        index,
        issues: formatIssues(result.issues)
      });
    }
    return original;
  }
  async function validateRpcReturn(name, returnSchema, value) {
    if (!returnSchema) return value;
    const result = await runStandardSchema(returnSchema, value);
    if (result.issues) throw diagnostics.DF0044({
      name,
      issues: formatIssues(result.issues)
    });
    return value;
  }
  async function getRpcResolvedSetupResult(definition, context) {
    if (!definition.setup) return {};
    if (typeof context === "object" && context !== null) {
      definition.__cache ??= /* @__PURE__ */ new WeakMap();
      const cache = definition.__cache;
      let promise = cache.get(context);
      if (!promise) {
        promise = Promise.resolve(definition.setup(context));
        promise.catch(() => {
          if (cache.get(context) === promise) cache.delete(context);
        });
        cache.set(context, promise);
      }
      return await promise;
    }
    if (!definition.__promise) {
      const promise = Promise.resolve(definition.setup(context));
      promise.catch(() => {
        if (definition.__promise === promise) definition.__promise = void 0;
      });
      definition.__promise = promise;
    }
    return await definition.__promise;
  }
  async function getRpcHandler(definition, context) {
    let handler = definition.handler;
    if (!handler) {
      const result = await getRpcResolvedSetupResult(definition, context);
      if (!result.handler) throw diagnostics.DF0024({ name: definition.name });
      handler = result.handler;
    }
    const argsSchema = definition.args;
    const returnSchema = definition.returns;
    if (!argsSchema && !returnSchema) return handler;
    const inner = handler;
    const validating = async (...args) => {
      const validatedArgs = await validateRpcArgs(definition.name, argsSchema, args);
      const output = await inner(...validatedArgs);
      return await validateRpcReturn(definition.name, returnSchema, output);
    };
    return validating;
  }
  var RpcFunctionsCollectorBase = class {
    context;
    definitions = /* @__PURE__ */ new Map();
    functions;
    _onChanged = [];
    constructor(context) {
      this.context = context;
      const definitions = this.definitions;
      const self2 = this;
      this.functions = new Proxy({}, {
        get(_, prop) {
          const definition = definitions.get(prop);
          if (!definition) return void 0;
          return getRpcHandler(definition, self2.context);
        },
        has(_, prop) {
          return definitions.has(prop);
        },
        getOwnPropertyDescriptor(_, prop) {
          return {
            value: definitions.get(prop)?.handler,
            configurable: true,
            enumerable: true
          };
        },
        ownKeys() {
          return Array.from(definitions.keys());
        }
      });
    }
    register(fnDef, force = false) {
      if (this.definitions.has(fnDef.name) && !force) throw diagnostics.DF0021({ name: fnDef.name });
      ensureAgentJsonSerializable(fnDef);
      this.definitions.set(fnDef.name, fnDef);
      this._onChanged.forEach((cb) => cb(fnDef.name));
    }
    update(fn, force = false) {
      if (!this.definitions.has(fn.name) && !force) throw diagnostics.DF0022({ name: fn.name });
      ensureAgentJsonSerializable(fn);
      this.definitions.set(fn.name, fn);
      this._onChanged.forEach((cb) => cb(fn.name));
    }
    onChanged(fn) {
      this._onChanged.push(fn);
      return () => {
        const index = this._onChanged.indexOf(fn);
        if (index !== -1) this._onChanged.splice(index, 1);
      };
    }
    async getHandler(name) {
      return await getRpcHandler(this.definitions.get(name), this.context);
    }
    getSchema(name) {
      const definition = this.definitions.get(name);
      if (!definition) throw diagnostics.DF0023({ name: String(name) });
      return {
        args: definition.args,
        returns: definition.returns
      };
    }
    has(name) {
      return this.definitions.has(name);
    }
    get(name) {
      return this.definitions.get(name);
    }
    list() {
      return Array.from(this.definitions.keys());
    }
  };
  function strictJsonStringify(value, fnName = "") {
    return JSON.stringify(value, function strictReplacer(key, val) {
      const holder = this;
      const original = holder != null ? holder[key] : val;
      if (original === void 0) {
        if (Array.isArray(holder)) throw nonJsonAt(fnName, "undefined", holder, key);
        return val;
      }
      if (original !== null) assertJsonSafe(original, holder, key, fnName);
      return val;
    });
  }
  function assertJsonSafe(original, holder, key, fnName) {
    if (typeof original === "bigint") throw nonJsonAt(fnName, "BigInt", holder, key);
    if (typeof original !== "object") return;
    if (original instanceof Map) throw nonJsonAt(fnName, "Map", holder, key);
    if (original instanceof Set) throw nonJsonAt(fnName, "Set", holder, key);
    if (original instanceof Date) throw nonJsonAt(fnName, "Date", holder, key);
    if (Array.isArray(original)) return;
    const proto = Object.getPrototypeOf(original);
    if (proto !== null && proto !== Object.prototype) throw nonJsonAt(fnName, original.constructor?.name ?? "class instance", holder, key);
  }
  function nonJsonAt(fnName, type, parent2, key) {
    const path = formatPath(parent2, key);
    return diagnostics.DF0020({
      name: fnName || "<anonymous>",
      type,
      path
    });
  }
  function formatPath(parent2, key) {
    if (Array.isArray(parent2)) return `[${key}]`;
    if (key === "") return "<root>";
    return key;
  }
  var CONNECTION_META_KEY = "__DEVFRAME_CONNECTION_META__";
  var CONNECTION_AUTH_TOKEN_KEY = "__DEVFRAME_CONNECTION_AUTH_TOKEN__";
  function readFromWindows(key) {
    const getters = [
      () => window?.[key],
      () => globalThis?.[key],
      () => parent.window?.[key]
    ];
    for (const getter of getters) try {
      const value = getter();
      if (value) return value;
    } catch {
    }
  }
  function readStoredConnection() {
    return readFromWindows(DEVFRAME_CONNECTION_KEY);
  }
  function readStoredConnectionMeta() {
    return readFromWindows(CONNECTION_META_KEY);
  }
  function readStoredAuthToken(userAuthToken) {
    if (userAuthToken) return userAuthToken;
    try {
      const token = localStorage.getItem(CONNECTION_AUTH_TOKEN_KEY);
      if (token) return token;
    } catch {
    }
    return readFromWindows(CONNECTION_AUTH_TOKEN_KEY);
  }
  function storeConnection(connection) {
    globalThis[DEVFRAME_CONNECTION_KEY] = connection;
    globalThis[CONNECTION_META_KEY] = {
      ...connection.connectionMeta,
      baseUrl: connection.metaBaseUrl
    };
    if (connection.authToken) storeAuthToken(connection.authToken);
  }
  function storeAuthToken(token) {
    try {
      localStorage.setItem(CONNECTION_AUTH_TOKEN_KEY, token);
    } catch {
    }
    globalThis[CONNECTION_AUTH_TOKEN_KEY] = token;
    const connection = readStoredConnection();
    if (connection) globalThis[DEVFRAME_CONNECTION_KEY] = {
      ...connection,
      authToken: token
    };
  }
  function resolveMetaBaseUrl(baseURL) {
    const metaPath = withBase(DEVFRAME_CONNECTION_META_FILENAME, baseURL);
    try {
      return new URL(metaPath, globalThis.location?.href).href;
    } catch {
      return metaPath;
    }
  }
  function withAuthToken(connection, authToken) {
    return authToken && authToken !== connection.authToken ? {
      ...connection,
      authToken
    } : connection;
  }
  function getDevframeConnection() {
    const connection = readStoredConnection();
    if (connection) return withAuthToken(connection, readStoredAuthToken() ?? connection.authToken ?? connection.connectionMeta.authToken);
    const connectionMeta = readStoredConnectionMeta();
    if (!connectionMeta) return void 0;
    return {
      connectionMeta,
      metaBaseUrl: connectionMeta.baseUrl ?? resolveMetaBaseUrl("./"),
      authToken: readStoredAuthToken(connectionMeta.authToken)
    };
  }
  async function setupDevframeConnection(options2 = {}) {
    if (options2.connection) {
      const connection = withAuthToken(options2.connection, readStoredAuthToken(options2.authToken ?? options2.connection.authToken ?? options2.connection.connectionMeta.authToken));
      storeConnection(connection);
      return connection;
    }
    const bases = Array.isArray(options2.baseURL) ? options2.baseURL : [options2.baseURL ?? "./"];
    if (options2.connectionMeta) {
      const connection = {
        connectionMeta: options2.connectionMeta,
        /**
        * Preserve the established connectionMeta behavior: an explicitly
        * supplied descriptor resolves from the caller's explicit base.
        */
        metaBaseUrl: resolveMetaBaseUrl(bases[0] ?? "./"),
        authToken: readStoredAuthToken(options2.authToken ?? options2.connectionMeta.authToken)
      };
      storeConnection(connection);
      return connection;
    }
    const existing = getDevframeConnection();
    if (existing) {
      const connection = withAuthToken(existing, readStoredAuthToken(options2.authToken ?? existing.authToken ?? existing.connectionMeta.authToken));
      storeConnection(connection);
      return connection;
    }
    const errors2 = [];
    for (const base of bases) {
      const metaPath = withBase(DEVFRAME_CONNECTION_META_FILENAME, base);
      const metaUrl = resolveMetaBaseUrl(base);
      try {
        const response = await fetch(metaPath);
        if (!response.ok) throw new Error(`Failed to fetch connection meta from ${metaUrl}: ${response.status}`);
        const connectionMeta = await response.json();
        const loadedFrom = response.url || metaUrl;
        const connection = {
          connectionMeta,
          /**
          * A served `baseUrl` re-points relative resolution (RPC dump shards,
          * transport paths) at the meta that owns them: a static hub build's
          * per-frame meta directs each frame SPA at the hub's own dump.
          */
          metaBaseUrl: connectionMeta.baseUrl ? new URL(connectionMeta.baseUrl, loadedFrom).href : loadedFrom,
          authToken: readStoredAuthToken(options2.authToken ?? connectionMeta.authToken)
        };
        storeConnection(connection);
        return connection;
      } catch (error) {
        errors2.push(error);
      }
    }
    throw new Error(`Failed to get connection meta from ${bases.join(", ")}`, { cause: errors2 });
  }
  var DevframeConnectionError = class extends Error {
    name = "DevframeConnectionError";
    kind;
    constructor(kind, message, options2) {
      super(message, options2);
      this.kind = kind;
    }
  };
  function readOtpFromUrl(param = DEVFRAME_OTP_URL_PARAM) {
    try {
      const hash2 = globalThis.location?.hash?.replace(/^#/, "") ?? "";
      return new URLSearchParams(hash2).get(param) || void 0;
    } catch {
      return;
    }
  }
  function stripParamFromUrl(param) {
    try {
      const url = new URL(globalThis.location.href);
      const fragment = new URLSearchParams(url.hash.replace(/^#/, ""));
      if (!fragment.has(param)) return;
      fragment.delete(param);
      url.hash = fragment.toString();
      globalThis.history?.replaceState(globalThis.history.state, "", url.href);
    } catch {
    }
  }
  function consumeOtpFromUrl(param = DEVFRAME_OTP_URL_PARAM) {
    const code = readOtpFromUrl(param);
    if (code) stripParamFromUrl(param);
    return code;
  }
  async function authenticateWithUrlOtp(rpc, options2 = {}) {
    const code = consumeOtpFromUrl(options2.param ?? "devframe_otp");
    if (!code) return false;
    if (rpc.isTrusted) return true;
    return rpc.requestTrustWithCode(code);
  }
  function createDevframeServicesClient(rpc) {
    let current2 = {};
    const handles = /* @__PURE__ */ new WeakMap();
    let statePromise;
    const state = () => {
      statePromise ??= rpc.sharedState.get(DEVFRAME_SERVICES_STATE_KEY, { initialValue: {} }).then((shared) => {
        current2 = shared.value();
        shared.on("updated", (value) => {
          current2 = value;
        });
        return shared;
      });
      return statePromise;
    };
    state();
    return {
      state,
      has: (pkg) => pkg in current2,
      keys: () => Object.keys(current2),
      get: (pkg) => {
        const entry = current2[pkg];
        if (!entry) return void 0;
        let handle = handles.get(entry);
        if (!handle) {
          handle = {
            ...entry,
            rpc: rpc.scope(entry.scope).rpc
          };
          handles.set(entry, handle);
        }
        return handle;
      }
    };
  }
  function createRpcSharedStateClientHost(rpc) {
    const sharedState = /* @__PURE__ */ new Map();
    const stateDisposers = /* @__PURE__ */ new Map();
    const initialValues = /* @__PURE__ */ new Map();
    const keyAddedListeners = /* @__PURE__ */ new Set();
    const isStaticBackend = rpc.connectionMeta.backend === "static";
    function mergeWithInitialValue(key, serverState) {
      const initial = initialValues.get(key);
      if (initial && typeof initial === "object" && !Array.isArray(initial) && typeof serverState === "object" && !Array.isArray(serverState)) return {
        ...initial,
        ...serverState
      };
      return serverState;
    }
    rpc.client.register({
      name: DEVFRAME_EVENTS.broadcast.clientStateUpdated,
      type: "event",
      handler: (key, fullState, syncId) => {
        const state = sharedState.get(key);
        if (!state || state.syncIds.has(syncId)) return;
        state.mutate(() => mergeWithInitialValue(key, fullState), syncId);
      }
    });
    rpc.client.register({
      name: DEVFRAME_EVENTS.broadcast.clientStatePatch,
      type: "event",
      handler: (key, patches, syncId) => {
        const state = sharedState.get(key);
        if (!state || state.syncIds.has(syncId)) return;
        state.patch(patches, syncId);
      }
    });
    function registerSharedState(key, state) {
      const offs = [];
      offs.push(state.on("updated", (fullState, patches, syncId) => {
        if (isStaticBackend) return;
        if (patches) rpc.callEvent("devframe:rpc:server-state:patch", key, patches, syncId);
        else rpc.callEvent("devframe:rpc:server-state:set", key, fullState, syncId);
      }));
      return () => {
        for (const off of offs) off();
      };
    }
    return {
      keys: () => Array.from(sharedState.keys()),
      onKeyAdded(fn) {
        keyAddedListeners.add(fn);
        return () => {
          keyAddedListeners.delete(fn);
        };
      },
      delete(key) {
        const dispose = stateDisposers.get(key);
        stateDisposers.delete(key);
        const existed = sharedState.delete(key);
        initialValues.delete(key);
        dispose?.();
        return existed;
      },
      get: async (key, options2) => {
        if (options2?.initialValue !== void 0) initialValues.set(key, options2.initialValue);
        if (sharedState.has(key)) return sharedState.get(key);
        const state = createSharedState({
          initialValue: options2?.initialValue,
          enablePatches: false
        });
        async function initSharedState() {
          if (!isStaticBackend) rpc.callEvent("devframe:rpc:server-state:subscribe", key);
          if (options2?.initialValue !== void 0) {
            sharedState.set(key, state);
            for (const fn of keyAddedListeners) fn(key);
            rpc.call("devframe:rpc:server-state:get", key).then((serverState) => {
              if (serverState !== void 0) state.mutate(() => mergeWithInitialValue(key, serverState));
            }).catch((error) => {
              console.error("Error getting server state", error);
            });
            stateDisposers.set(key, registerSharedState(key, state));
            return state;
          } else {
            const serverValue = await rpc.call("devframe:rpc:server-state:get", key);
            state.mutate(() => mergeWithInitialValue(key, serverValue));
            sharedState.set(key, state);
            for (const fn of keyAddedListeners) fn(key);
            stateDisposers.set(key, registerSharedState(key, state));
            return state;
          }
        }
        return new Promise((resolve) => {
          if (!rpc.isTrusted) {
            resolve(state);
            let initialized = false;
            rpc.events.on(DEVFRAME_EVENTS.client.isTrustedUpdated, (isTrusted) => {
              if (isTrusted && !initialized) {
                initialized = true;
                initSharedState();
              }
            });
          } else initSharedState().then(resolve);
        });
      }
    };
  }
  var EMPTY_WIRE_DEFS = /* @__PURE__ */ new Map();
  function createRpcWireCodec(definitions = EMPTY_WIRE_DEFS) {
    const pendingRequestMethods = /* @__PURE__ */ new Map();
    return {
      serialize: (msg) => {
        let method;
        if (msg.t === "q") method = msg.m;
        else {
          method = pendingRequestMethods.get(msg.i);
          pendingRequestMethods.delete(msg.i);
        }
        if (!(msg.t === "s" && "e" in msg) && !!method && definitions.get(method)?.jsonSerializable === true) return strictJsonStringify(msg, method ?? "");
        return `s:${structuredCloneStringify(msg)}`;
      },
      deserialize: (raw) => {
        const msg = raw.startsWith("s:") ? structuredCloneParse(raw.slice(2)) : JSON.parse(raw);
        if (msg.t === "q" && msg.i && msg.m) pendingRequestMethods.set(msg.i, msg.m);
        return msg;
      }
    };
  }
  function NOOP$1() {
  }
  function takeFrame(buffer) {
    const boundary = buffer.search(/\n\n|\r\n\r\n/);
    if (boundary < 0) return void 0;
    return {
      frame: buffer.slice(0, boundary),
      rest: buffer.slice(boundary + (buffer[boundary] === "\r" ? 4 : 2))
    };
  }
  function parseFrame(frame) {
    let event = "message";
    const data = [];
    for (const rawLine of frame.split(/\r?\n/)) {
      if (rawLine.startsWith(":")) continue;
      if (rawLine.startsWith("event:")) event = rawLine.slice(6).trimStart();
      else if (rawLine.startsWith("data:")) data.push(rawLine.slice(5).replace(/^ /, ""));
    }
    return {
      event,
      data
    };
  }
  function createSseRpcChannel(options2) {
    const { onConnected = NOOP$1, onError = NOOP$1, onDisconnected = NOOP$1, definitions, fetch: fetchImpl = globalThis.fetch.bind(globalThis) } = options2;
    let url = options2.url;
    if (options2.authToken) url = `${url}${url.includes("?") ? "&" : "?"}${DEVFRAME_AUTH_TOKEN_QUERY_PARAM}=${encodeURIComponent(options2.authToken)}`;
    const codec = createRpcWireCodec(definitions);
    const abort = new AbortController();
    let closed = false;
    let onMessage;
    let activeReader;
    let resolveSession;
    let rejectSession;
    const sessionReady = new Promise((resolve, reject) => {
      resolveSession = resolve;
      rejectSession = reject;
    });
    sessionReady.catch(() => {
    });
    function fail(error) {
      if (closed) return;
      closed = true;
      rejectSession(error);
      onError(error);
      onDisconnected();
    }
    function end() {
      if (closed) return;
      closed = true;
      rejectSession(/* @__PURE__ */ new Error("Devframe SSE stream closed"));
      onDisconnected();
    }
    function dispatch(event, data) {
      if (event === "session") {
        resolveSession(data);
        onConnected();
        return;
      }
      onMessage?.(data);
    }
    async function consume(stream) {
      const reader = stream.getReader();
      activeReader = reader;
      const decoder = new TextDecoder();
      let buffer = "";
      for (; ; ) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        for (; ; ) {
          const taken = takeFrame(buffer);
          if (!taken) break;
          buffer = taken.rest;
          const { event, data } = parseFrame(taken.frame);
          if (data.length > 0) dispatch(event, data.join("\n"));
        }
      }
      end();
    }
    (async () => {
      try {
        const response = await fetchImpl(url, {
          headers: { accept: "text/event-stream" },
          signal: abort.signal
        });
        if (!response.ok || !response.body) throw new Error(`Devframe SSE stream request failed: ${response.status}`);
        await consume(response.body);
      } catch (error) {
        if (abort.signal.aborted) {
          end();
          return;
        }
        fail(error instanceof Error ? error : new Error(String(error)));
      }
    })();
    return {
      close: () => {
        closed = true;
        abort.abort();
        activeReader?.cancel().catch(() => {
        });
      },
      on: (handler) => {
        onMessage = handler;
      },
      post: async (data) => {
        let sessionId;
        try {
          sessionId = await sessionReady;
        } catch {
          return;
        }
        if (closed) {
          onError(/* @__PURE__ */ new Error("Devframe SSE channel is closed; message dropped"));
          return;
        }
        try {
          const response = await fetchImpl(url, {
            method: "POST",
            headers: {
              "content-type": "text/plain; charset=utf-8",
              [DEVFRAME_SSE_SESSION_HEADER]: sessionId
            },
            body: data
          });
          if (response.status === 200) {
            const body = await response.text();
            if (body) onMessage?.(body);
            return;
          }
          if (!response.ok) throw new Error(`Devframe SSE POST failed: ${response.status}`);
        } catch (error) {
          onError(error instanceof Error ? error : new Error(String(error)));
        }
      },
      serialize: codec.serialize,
      deserialize: codec.deserialize
    };
  }
  function createRpcClient(functions, options2) {
    const { channel, rpcOptions = {} } = options2;
    return createBirpc(functions, {
      ...channel,
      timeout: -1,
      ...rpcOptions,
      proxify: false
    });
  }
  function createLiveRpcClientMode(options2) {
    const { transport, authToken, connectionMeta, events, clientRpc, rpcOptions = {}, callTimeout = 0 } = options2;
    let isTrusted = false;
    let status = "connecting";
    let connectionError = null;
    const trustedPromise = Promise.withResolvers();
    function setStatus(next, error = null) {
      if (error) connectionError = error;
      else if (next === "connected") connectionError = null;
      if (next === status) return;
      const previous = status;
      status = next;
      events.emit(DEVFRAME_EVENTS.client.connectionStatus, next, previous);
    }
    const pending = /* @__PURE__ */ new Set();
    function rejectAllPending(error) {
      for (const entry of [...pending]) entry.reject(error);
    }
    function terminalError() {
      if (status === "disconnected" || status === "error") return new DevframeConnectionError("connection", "[devframe] Not connected to the devframe server", { cause: connectionError ?? void 0 });
      if (status === "unauthorized") return new DevframeConnectionError("auth", "[devframe] Not authorized by the devframe server", { cause: connectionError ?? void 0 });
      return null;
    }
    function guardCall(promise, method) {
      return new Promise((resolve, reject) => {
        let settled = false;
        let timer;
        const entry = { reject(error) {
          if (settled) return;
          finish();
          events.emit(DEVFRAME_EVENTS.client.error, error, method);
          reject(error);
        } };
        function finish() {
          settled = true;
          pending.delete(entry);
          if (timer) clearTimeout(timer);
        }
        pending.add(entry);
        if (callTimeout > 0) timer = setTimeout(() => {
          entry.reject(new DevframeConnectionError("timeout", `[devframe] RPC call "${method}" timed out after ${callTimeout}ms`));
        }, callTimeout);
        promise.then((value) => {
          if (settled) return;
          finish();
          resolve(value);
        }, (error) => {
          if (settled) return;
          finish();
          const err = error instanceof Error ? error : new Error(String(error));
          events.emit(DEVFRAME_EVENTS.client.error, err, method);
          reject(err);
        });
      });
    }
    const definitions = /* @__PURE__ */ new Map();
    for (const name of connectionMeta.jsonSerializableMethods ?? []) definitions.set(name, { jsonSerializable: true });
    const channel = options2.createChannel({
      definitions,
      onError(error) {
        setStatus("error", error);
        events.emit(DEVFRAME_EVENTS.client.connectionError, error);
        rejectAllPending(new DevframeConnectionError("connection", "[devframe] Connection to the devframe server failed", { cause: error }));
      },
      onDisconnected() {
        if (status !== "error") setStatus("disconnected");
        rejectAllPending(new DevframeConnectionError("connection", "[devframe] Disconnected from the devframe server", { cause: connectionError ?? void 0 }));
      }
    });
    const serverRpc = createRpcClient(clientRpc.functions, {
      channel,
      rpcOptions
    });
    clientRpc.register({
      name: DEVFRAME_EVENTS.broadcast.authRevoked,
      type: "event",
      handler: () => {
        isTrusted = false;
        const authError = new DevframeConnectionError("auth", "[devframe] The devframe server revoked this client's trust");
        setStatus("unauthorized", authError);
        events.emit(DEVFRAME_EVENTS.client.connectionError, authError);
        rejectAllPending(authError);
        events.emit(DEVFRAME_EVENTS.client.isTrustedUpdated, false);
      }
    });
    let currentAuthToken = authToken;
    async function requestTrustWithToken(token) {
      currentAuthToken = token;
      const result = await serverRpc.$call("anonymous:devframe:auth", {
        authToken: token,
        /**
        * Sent raw; the server parses it into a display label (see
        * `describeUA` in `node/auth/state.ts`) so `ua-parser-modern` stays
        * out of the browser bundle.
        */
        ua: navigator.userAgent,
        origin: location.origin
      });
      isTrusted = result.isTrusted;
      if (isTrusted) {
        trustedPromise.resolve(true);
        setStatus("connected");
      } else {
        const authError = new DevframeConnectionError("auth", "[devframe] The devframe server refused this client's credentials");
        setStatus("unauthorized", authError);
        events.emit(DEVFRAME_EVENTS.client.connectionError, authError);
      }
      events.emit(DEVFRAME_EVENTS.client.isTrustedUpdated, isTrusted);
      return result.isTrusted;
    }
    async function requestTrustWithCode(code) {
      const token = (await serverRpc.$call("anonymous:devframe:auth:exchange", {
        code,
        ua: navigator.userAgent,
        origin: location.origin
      }))?.authToken ?? null;
      if (token) {
        currentAuthToken = token;
        isTrusted = true;
        trustedPromise.resolve(true);
        setStatus("connected");
        events.emit(DEVFRAME_EVENTS.client.isTrustedUpdated, true);
      }
      return token;
    }
    async function requestAuthCode(options3 = {}) {
      await serverRpc.$call("anonymous:devframe:auth:request-code", {
        ua: navigator.userAgent,
        origin: location.origin,
        ...options3.reissue ? { reissue: true } : {}
      });
    }
    async function requestTrust() {
      if (isTrusted) return true;
      return requestTrustWithToken(currentAuthToken ?? "");
    }
    async function ensureTrusted(timeout = 6e4) {
      if (isTrusted) trustedPromise.resolve(true);
      if (timeout <= 0) return trustedPromise.promise;
      let timer;
      try {
        await Promise.race([trustedPromise.promise, new Promise((_, reject) => {
          timer = setTimeout(() => {
            reject(/* @__PURE__ */ new Error("[devframe] Timeout waiting for rpc to be trusted"));
          }, timeout);
        })]);
        return isTrusted;
      } finally {
        clearTimeout(timer);
      }
    }
    return {
      transport,
      get isTrusted() {
        return isTrusted;
      },
      get status() {
        return status;
      },
      get connectionError() {
        return connectionError;
      },
      requestTrust,
      requestTrustWithToken,
      requestTrustWithCode,
      requestAuthCode,
      ensureTrusted,
      call: (...args) => {
        const method = String(args[0]);
        const failFast = terminalError();
        if (failFast) {
          events.emit(DEVFRAME_EVENTS.client.error, failFast, method);
          return Promise.reject(failFast);
        }
        return guardCall(serverRpc.$call(...args), method);
      },
      callEvent: (...args) => {
        const failFast = terminalError();
        if (failFast) {
          events.emit(DEVFRAME_EVENTS.client.error, failFast, String(args[0]));
          return;
        }
        return serverRpc.$callEvent(...args);
      },
      callOptional: (...args) => {
        const method = String(args[0]);
        const failFast = terminalError();
        if (failFast) {
          events.emit(DEVFRAME_EVENTS.client.error, failFast, method);
          return Promise.reject(failFast);
        }
        return guardCall(serverRpc.$callOptional(...args), method);
      },
      close: () => {
        channel.close();
      }
    };
  }
  function resolveSseUrl(sse, metaBaseUrl, loc) {
    const base = (() => {
      try {
        return new URL(metaBaseUrl, loc.href);
      } catch {
        return new URL(loc.href);
      }
    })();
    if (sse && typeof sse === "object") {
      if (sse.host != null || sse.port != null) {
        const host = sse.host ?? `${base.hostname}:${sse.port}`;
        return new URL(sse.path ?? "/", `${base.protocol}//${host}`).href;
      }
      return new URL(sse.path ?? "", base).href;
    }
    const str = sse ?? "";
    if (/^https?:\/\//i.test(str)) return str;
    return new URL(str, base).href;
  }
  function createSseRpcClientMode(options2) {
    const { authToken, connectionMeta, metaBaseUrl, events, clientRpc, rpcOptions = {}, sseOptions = {}, callTimeout = 0 } = options2;
    const url = resolveSseUrl(connectionMeta.sse, metaBaseUrl ?? "./", location);
    return createLiveRpcClientMode({
      transport: "sse",
      authToken,
      connectionMeta,
      events,
      clientRpc,
      rpcOptions,
      callTimeout,
      createChannel: (handlers) => createSseRpcChannel({
        url,
        authToken,
        definitions: handlers.definitions,
        ...sseOptions,
        onConnected() {
          sseOptions.onConnected?.();
        },
        onError(error) {
          handlers.onError(error);
          sseOptions.onError?.(error);
        },
        onDisconnected() {
          handlers.onDisconnected();
          sseOptions.onDisconnected?.();
        }
      })
    });
  }
  function reviveDumpError(stored) {
    const { name, message, cause: rawCause, ...extras } = stored;
    const cause = rawCause instanceof Error ? rawCause : isPlainErrorShape(rawCause) ? reviveDumpError(rawCause) : rawCause;
    const error = cause !== void 0 ? new Error(message, { cause }) : new Error(message);
    error.name = name;
    Object.assign(error, extras);
    return error;
  }
  function isPlainErrorShape(value) {
    return typeof value === "object" && value !== null && typeof value.message === "string" && typeof value.name === "string";
  }
  function isStaticEntry(value) {
    return typeof value === "object" && value !== null && value.type === "static" && typeof value.path === "string";
  }
  function isQueryEntry(value) {
    return typeof value === "object" && value !== null && value.type === "query" && typeof value.records === "object" && value.records !== null;
  }
  function isRecord(value) {
    return typeof value === "object" && value !== null && ("output" in value || "error" in value);
  }
  function resolveRecordOutput(record) {
    if (record.error) throw reviveDumpError(record.error);
    return record.output;
  }
  function hasMeaningfulArgs(args) {
    return args.some((arg) => arg !== null && arg !== void 0);
  }
  function unwrapEnvelope(raw) {
    if (raw !== null && typeof raw === "object" && "serialization" in raw && "data" in raw) return raw.data;
    return raw;
  }
  function createStaticRpcCaller(manifest, fetchJson) {
    const staticCache = /* @__PURE__ */ new Map();
    const queryRecordCache = /* @__PURE__ */ new Map();
    function reviveIfStructuredClone(value, serialization) {
      if (serialization === "structured-clone" && Array.isArray(value)) return structuredCloneDeserialize(value);
      return value;
    }
    function decode(raw, serialization) {
      return reviveIfStructuredClone(unwrapEnvelope(raw), serialization);
    }
    async function loadStatic(entry) {
      if (!staticCache.has(entry.path)) staticCache.set(entry.path, fetchJson(entry.path).then((raw) => decode(raw, entry.serialization)));
      const data = await staticCache.get(entry.path);
      if (isRecord(data)) return resolveRecordOutput(data);
      return data;
    }
    async function loadQueryRecord(path, serialization) {
      if (!queryRecordCache.has(path)) queryRecordCache.set(path, fetchJson(path).then((raw) => decode(raw, serialization)));
      return await queryRecordCache.get(path);
    }
    async function call(functionName, args) {
      if (!(functionName in manifest)) throw new Error(`[devframe-rpc] Function "${functionName}" not found in dump store`);
      const entry = manifest[functionName];
      if (isStaticEntry(entry)) {
        if (hasMeaningfulArgs(args)) throw new Error(`[devframe-rpc] No dump match for "${functionName}" with args: ${JSON.stringify(args)}`);
        return await loadStatic(entry);
      }
      if (isQueryEntry(entry)) {
        const argsHash = hash(args);
        const recordPath = entry.records[argsHash];
        if (recordPath) return resolveRecordOutput(await loadQueryRecord(recordPath, entry.serialization));
        if (entry.fallback) return resolveRecordOutput(await loadQueryRecord(entry.fallback, entry.serialization));
        throw new Error(`[devframe-rpc] No dump match for "${functionName}" with args: ${JSON.stringify(args)}`);
      }
      if (!hasMeaningfulArgs(args)) return entry;
      throw new Error(`[devframe-rpc] No dump match for "${functionName}" with args: ${JSON.stringify(args)}`);
    }
    return {
      call: async (functionName, args) => await call(functionName, args),
      callOptional: async (functionName, args) => {
        if (!(functionName in manifest)) return void 0;
        return await call(functionName, args);
      },
      callEvent: async (_functionName, _args) => {
      }
    };
  }
  async function createStaticRpcClientMode(options2) {
    const staticCaller = createStaticRpcCaller(await options2.fetchJsonFromBases(DEVFRAME_RPC_DUMP_MANIFEST_FILENAME), options2.fetchJsonFromBases);
    return {
      transport: "static",
      isTrusted: true,
      /**
      * A static backend has no live socket; every call is a local fetch, so it
      * is "connected" for its whole life.
      */
      status: "connected",
      connectionError: null,
      requestTrust: async () => true,
      requestTrustWithToken: async () => true,
      /** Static backends are always trusted, so there's nothing to exchange. */
      requestTrustWithCode: async () => null,
      /** No server terminal to print a code in. */
      requestAuthCode: async () => {
      },
      ensureTrusted: async () => true,
      call: (...args) => staticCaller.call(args[0], args.slice(1)),
      callEvent: (...args) => staticCaller.callEvent(args[0], args.slice(1)),
      callOptional: (...args) => staticCaller.callOptional(args[0], args.slice(1)),
      /** No live socket to close; every call is a local fetch. */
      close: () => {
      }
    };
  }
  var STREAM_KEY_SEPARATOR = "";
  function streamKey(channel, id) {
    return `${channel}${STREAM_KEY_SEPARATOR}${id}`;
  }
  function createRpcStreamingClientHost(rpc) {
    const readers = /* @__PURE__ */ new Map();
    const uploads = /* @__PURE__ */ new Map();
    rpc.client.register({
      name: DEVFRAME_EVENTS.broadcast.streamingChunk,
      type: "event",
      handler(channel, id, seq, chunk) {
        readers.get(streamKey(channel, id))?._push(seq, chunk);
      }
    });
    rpc.client.register({
      name: DEVFRAME_EVENTS.broadcast.streamingEnd,
      type: "event",
      handler(channel, id, error) {
        const key = streamKey(channel, id);
        const reader = readers.get(key);
        if (!reader) return;
        reader._end(error);
        readers.delete(key);
      }
    });
    rpc.client.register({
      name: DEVFRAME_EVENTS.broadcast.streamingUploadCancel,
      type: "event",
      handler(channel, id) {
        const key = streamKey(channel, id);
        const sink = uploads.get(key);
        if (!sink) return;
        sink.abort("server cancelled upload");
        uploads.delete(key);
      }
    });
    rpc.events.on(DEVFRAME_EVENTS.client.isTrustedUpdated, (isTrusted) => {
      if (!isTrusted) return;
      for (const [key, reader] of readers) {
        if (reader.cancelled || reader.done) continue;
        const sepIdx = key.indexOf(STREAM_KEY_SEPARATOR);
        if (sepIdx < 0) continue;
        const channel = key.slice(0, sepIdx);
        const id = key.slice(sepIdx + 1);
        rpc.callEvent("devframe:streaming:subscribe", channel, id, { afterSeq: reader.lastSeenSeq });
      }
    });
    function subscribe(channel, id, options2 = {}) {
      const key = streamKey(channel, id);
      const existing = readers.get(key);
      if (existing) return existing;
      const reader = createStreamReader({
        id,
        highWaterMark: options2.highWaterMark,
        onOverflow(dropped) {
          console.warn(`[devframe] DF0029: Stream "${channel}#${id}" dropped ${dropped} chunk(s) after exceeding the client high-water mark.`);
        },
        onCancel() {
          rpc.callEvent("devframe:streaming:cancel", channel, id);
          readers.delete(key);
        }
      });
      readers.set(key, reader);
      if (rpc.isTrusted) rpc.callEvent("devframe:streaming:subscribe", channel, id, { afterSeq: 0 });
      else {
        const off = rpc.events.on(DEVFRAME_EVENTS.client.isTrustedUpdated, (trusted) => {
          if (trusted) {
            off();
            if (readers.has(key) && !reader.cancelled && !reader.done) rpc.callEvent("devframe:streaming:subscribe", channel, id, { afterSeq: reader.lastSeenSeq });
          }
        });
      }
      return reader;
    }
    function upload(channel, id) {
      const key = streamKey(channel, id);
      const existing = uploads.get(key);
      if (existing) return existing;
      const sink = createStreamSink({ id });
      sink.events.on("chunk", (seq, chunk) => {
        rpc.callEvent("devframe:streaming:upload-chunk", channel, id, seq, chunk);
      });
      sink.events.on("end", (error) => {
        rpc.callEvent("devframe:streaming:upload-end", channel, id, error);
        uploads.delete(key);
      });
      uploads.set(key, sink);
      return sink;
    }
    return {
      subscribe,
      upload
    };
  }
  function NOOP() {
  }
  var EMPTY_DEFS = /* @__PURE__ */ new Map();
  function createWsRpcChannel(options2) {
    let url = options2.url;
    if (options2.authToken) url = `${url}?${DEVFRAME_AUTH_TOKEN_QUERY_PARAM}=${encodeURIComponent(options2.authToken)}`;
    const ws = new WebSocket(url);
    const { onConnected = NOOP, onError = NOOP, onDisconnected = NOOP, definitions = EMPTY_DEFS } = options2;
    ws.addEventListener("open", (e) => {
      onConnected(e);
    });
    ws.addEventListener("error", (e) => {
      const _e = e instanceof Error ? e : new Error(e.type);
      onError(_e);
    });
    ws.addEventListener("close", (e) => {
      onDisconnected(e);
    });
    const codec = createRpcWireCodec(definitions);
    return {
      close: () => {
        ws.close();
      },
      on: (handler) => {
        ws.addEventListener("message", (e) => {
          handler(e.data);
        });
      },
      post: (data) => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(data);
          return;
        }
        if (ws.readyState === WebSocket.CONNECTING) {
          let cleanup = function() {
            ws.removeEventListener("open", onOpen);
            ws.removeEventListener("close", onClose);
          };
          const onOpen = () => {
            cleanup();
            if (ws.readyState === WebSocket.OPEN) ws.send(data);
          };
          const onClose = () => cleanup();
          ws.addEventListener("open", onOpen);
          ws.addEventListener("close", onClose);
          return;
        }
        onError(/* @__PURE__ */ new Error("Devframe WebSocket is not open; message dropped"));
      },
      serialize: codec.serialize,
      deserialize: codec.deserialize
    };
  }
  function resolveWsUrl(websocket, metaBaseUrl, loc) {
    const base = (() => {
      try {
        return new URL(metaBaseUrl, loc.href);
      } catch {
        return new URL(loc.href);
      }
    })();
    const wsProtocol = base.protocol === "https:" ? "wss:" : "ws:";
    if (websocket && typeof websocket === "object") {
      if (websocket.host != null || websocket.port != null) {
        const host = websocket.host ?? `${base.hostname}:${websocket.port}`;
        const target3 = new URL(websocket.path ?? "/", `${wsProtocol}//${host}`);
        target3.protocol = wsProtocol;
        return target3.href;
      }
      const target2 = new URL(websocket.path ?? "", base);
      target2.protocol = wsProtocol;
      return target2.href;
    }
    if (typeof websocket === "number") return `${wsProtocol}//${base.hostname}:${websocket}`;
    const str = websocket ?? "";
    if (/^wss?:\/\//i.test(str)) return str;
    if (/^https?:\/\//i.test(str)) return withProtocol(str, /^https/i.test(str) ? "wss://" : "ws://");
    const target = new URL(str, base);
    target.protocol = wsProtocol;
    return target.href;
  }
  function createWsRpcClientMode(options2) {
    const { authToken, connectionMeta, metaBaseUrl, events, clientRpc, rpcOptions = {}, wsOptions = {}, callTimeout = 0 } = options2;
    const url = resolveWsUrl(connectionMeta.websocket, metaBaseUrl ?? "./", location);
    return createLiveRpcClientMode({
      transport: "websocket",
      authToken,
      connectionMeta,
      events,
      clientRpc,
      rpcOptions,
      callTimeout,
      createChannel: (handlers) => createWsRpcChannel({
        url,
        authToken,
        definitions: handlers.definitions,
        ...wsOptions,
        onConnected(event) {
          wsOptions.onConnected?.(event);
        },
        onError(error) {
          handlers.onError(error);
          wsOptions.onError?.(error);
        },
        onDisconnected(event) {
          handlers.onDisconnected();
          wsOptions.onDisconnected?.(event);
        }
      })
    });
  }
  function isQualifiedName(name) {
    return name.includes(":");
  }
  function qualifyName(namespace, name) {
    return isQualifiedName(name) ? name : `${namespace}:${name}`;
  }
  function createSettingsStore(store) {
    return {
      async get(key) {
        return (await store()).value()[key];
      },
      async set(key, value) {
        (await store()).mutate((draft) => {
          draft[key] = value;
        });
      },
      async delete(key) {
        (await store()).mutate((draft) => {
          delete draft[key];
        });
      },
      async all() {
        return (await store()).value();
      },
      async onChange(fn) {
        return (await store()).on("updated", (full) => fn(full));
      }
    };
  }
  function createClientSettingsStore(rpc, namespace, scope) {
    const stateKey = `devframe:settings:${scope}:${namespace}`;
    let statePromise;
    function store() {
      if (!statePromise) statePromise = rpc.sharedState.get(stateKey, { initialValue: {} });
      return statePromise;
    }
    return createSettingsStore(store);
  }
  function createClientSettings(rpc, namespace) {
    return {
      global: createClientSettingsStore(rpc, namespace, "global"),
      project: createClientSettingsStore(rpc, namespace, "project")
    };
  }
  function createScopedClientContext(rpc, namespace) {
    return {
      namespace,
      base: rpc,
      rpc: {
        namespace,
        register(fn) {
          if (isQualifiedName(fn.name)) throw new Error(`[devframe] Scoped client RPC registration for namespace "${namespace}" received an already-namespaced function name "${fn.name}". Pass a bare name without a ":" separator.`);
          rpc.client.register({
            ...fn,
            name: `${namespace}:${fn.name}`
          });
        },
        call: ((method, ...args) => rpc.call(qualifyName(namespace, method), ...args)),
        callEvent: ((method, ...args) => rpc.callEvent(qualifyName(namespace, method), ...args)),
        callOptional: ((method, ...args) => rpc.callOptional(qualifyName(namespace, method), ...args)),
        sharedState: ((key, options2) => rpc.sharedState.get(qualifyName(namespace, key), options2)),
        streaming: {
          subscribe: (channel, id, options2) => rpc.streaming.subscribe(qualifyName(namespace, channel), id, options2),
          upload: (channel, id) => rpc.streaming.upload(qualifyName(namespace, channel), id)
        }
      },
      settings: createClientSettings(rpc, namespace),
      scope: rpc.scope
    };
  }
  function resolveWebMcpModelContext() {
    if (typeof document !== "undefined") {
      const context = document.modelContext;
      if (context) return context;
    }
    if (typeof navigator !== "undefined") {
      const context = navigator.modelContext;
      if (context) return context;
    }
  }
  function registerWebMcpTools(clientRpc, options2 = {}) {
    const resolved = options2.modelContext ?? resolveWebMcpModelContext();
    if (!resolved) return () => {
    };
    const modelContext = resolved;
    const registered = /* @__PURE__ */ new Map();
    const wireNames = /* @__PURE__ */ new Map();
    function register(def, agent) {
      const name = toAgentToolName(def.name);
      const owner = wireNames.get(name);
      if (owner && owner !== def.name) {
        console.warn(`[devframe] WebMCP tool name "${name}" (from "${def.name}") collides with "${owner}"; keeping the first registration.`);
        return;
      }
      const controller = new AbortController();
      const safety = resolveAgentSafety(def.type, agent);
      const result = modelContext.registerTool({
        name,
        description: agent.description,
        inputSchema: argsToJsonSchema(def.args),
        annotations: {
          title: agent.title ?? def.name,
          readOnlyHint: safety === "read",
          destructiveHint: safety === "destructive"
        },
        execute: (args) => executeRpcTool(def, clientRpc.context, args)
      }, { signal: controller.signal });
      if (result && "then" in result) result.then(() => {
      }, () => {
      });
      wireNames.set(name, def.name);
      registered.set(def.name, () => {
        controller.abort();
        if (result && "unregister" in result && typeof result.unregister === "function") result.unregister();
        wireNames.delete(name);
      });
    }
    function sync(id) {
      const names = id ? [id] : [...clientRpc.definitions.keys()];
      for (const name of names) {
        registered.get(name)?.();
        registered.delete(name);
        const def = clientRpc.definitions.get(name);
        const agent = def?.agent;
        if (def && agent) register(def, agent);
      }
    }
    sync();
    const unsubscribe = clientRpc.onChanged((id) => sync(id));
    return () => {
      unsubscribe();
      for (const unregister of registered.values()) unregister();
      registered.clear();
    };
  }
  async function executeRpcTool(def, context, args) {
    try {
      const positional = toolInputToRpcArgs(args, def.args?.length);
      return { content: [{
        type: "text",
        text: stringifyResult(await (await getRpcHandler(def, context))(...positional))
      }] };
    } catch (error) {
      return {
        isError: true,
        content: [{
          type: "text",
          text: formatError(error)
        }]
      };
    }
  }
  function stringifyResult(value) {
    if (value === void 0) return "undefined";
    if (typeof value === "string") return value;
    return JSON.stringify(value, null, 2);
  }
  function formatError(error) {
    if (!(error instanceof Error)) return String(error);
    const cause = error.cause instanceof Error ? ` (cause: ${error.cause.message})` : "";
    return `${error.name}: ${error.message}${cause}`;
  }
  function resolveClientTransport(requested, meta) {
    if (meta.backend === "static") return "static";
    const hasWebsocket = meta.websocket !== void 0;
    const hasSse = meta.sse !== void 0;
    if (requested === "websocket") {
      if (!hasWebsocket) throw new Error("[devframe] transport: 'websocket' was requested, but this server does not advertise a WebSocket endpoint");
      return "websocket";
    }
    if (requested === "sse") {
      if (!hasSse) throw new Error("[devframe] transport: 'sse' was requested, but this server does not advertise an SSE endpoint");
      return "sse";
    }
    if (meta.backend === "sse" && hasSse) return "sse";
    if (hasWebsocket) return "websocket";
    if (hasSse) return "sse";
    throw new Error('[devframe] This server advertises no RPC transport (backend "none"), so there is nothing to connect to. Enable the WebSocket or SSE endpoint on the server, or use its static/MCP surfaces instead.');
  }
  async function getDevframeRpcClient(options2 = {}) {
    const { baseURL = "./", rpcOptions = {}, cacheOptions = false } = options2;
    const events = createEventEmitter();
    const bases = Array.isArray(baseURL) ? baseURL : [baseURL];
    let connection = await setupDevframeConnection(options2);
    const { connectionMeta, metaBaseUrl, authToken } = connection;
    let resolvedBaseURL = bases[0] ?? "./";
    try {
      resolvedBaseURL = new URL(".", metaBaseUrl).href;
    } catch {
    }
    const cacheManager = new RpcCacheManager({
      functions: [],
      ...typeof options2.cacheOptions === "object" ? options2.cacheOptions : {}
    });
    const context = { rpc: void 0 };
    const clientRpc = new RpcFunctionsCollectorBase(context);
    const disposeWebMcp = options2.webmcp === false ? void 0 : registerWebMcpTools(clientRpc);
    let disposeBrowserAgentBridge;
    let closed = false;
    async function fetchJsonFromBases(path) {
      const candidates = [resolvedBaseURL, ...bases.filter((base) => base !== resolvedBaseURL)].filter((x) => x != null);
      const errors2 = [];
      for (const base of candidates) try {
        return await fetch(withBase(path, base)).then((r) => {
          if (!r.ok) throw new Error(`Failed to fetch ${path} from ${base}: ${r.status}`);
          return r.json();
        });
      } catch (error) {
        errors2.push(error);
      }
      throw new Error(`Failed to load ${path} from ${candidates.join(", ")}`, { cause: errors2 });
    }
    const liveModeOptions = {
      authToken,
      connectionMeta,
      metaBaseUrl,
      events,
      clientRpc,
      callTimeout: options2.callTimeout,
      rpcOptions: {
        ...rpcOptions,
        async onRequest(req, next, resolve) {
          await rpcOptions.onRequest?.call(this, req, next, resolve);
          if (cacheOptions && cacheManager?.validate(req.m)) {
            if (cacheManager.has(req.m, req.a)) return resolve(cacheManager.cached(req.m, req.a));
            const res = await next(req);
            cacheManager.apply(req, res);
          } else await next(req);
        }
      }
    };
    const transport = resolveClientTransport(options2.transport ?? "auto", connectionMeta);
    const mode = transport === "static" ? await createStaticRpcClientMode({ fetchJsonFromBases }) : transport === "sse" ? createSseRpcClientMode({
      ...liveModeOptions,
      sseOptions: options2.sseOptions
    }) : createWsRpcClientMode({
      ...liveModeOptions,
      wsOptions: options2.wsOptions
    });
    let authChannel;
    try {
      authChannel = new BroadcastChannel("devframe-auth");
    } catch {
    }
    let bootstrapAuthPromise;
    let bootstrapAuthSettled = false;
    function gateOnBootstrapAuth(fn) {
      return ((...args) => {
        if (bootstrapAuthSettled || !bootstrapAuthPromise) return fn(...args);
        return bootstrapAuthPromise.then(() => fn(...args));
      });
    }
    function closeRpcClient() {
      closed = true;
      try {
        disposeBrowserAgentBridge?.();
        disposeWebMcp?.();
      } finally {
        try {
          authChannel?.close();
        } finally {
          mode.close?.();
        }
      }
    }
    const rpc = {
      events,
      get isTrusted() {
        return mode.isTrusted;
      },
      get status() {
        return mode.status;
      },
      get connectionError() {
        return mode.connectionError;
      },
      get transport() {
        return mode.transport ?? transport;
      },
      get connection() {
        return connection;
      },
      connectionMeta,
      ensureTrusted: mode.ensureTrusted,
      requestTrust: mode.requestTrust,
      requestTrustWithToken: async (token) => {
        storeAuthToken(token);
        connection = {
          ...connection,
          authToken: token
        };
        return mode.requestTrustWithToken(token);
      },
      requestTrustWithCode: async (code) => {
        const token = await mode.requestTrustWithCode(code);
        if (!token) return false;
        storeAuthToken(token);
        connection = {
          ...connection,
          authToken: token
        };
        try {
          authChannel?.postMessage({
            type: "auth-update",
            authToken: token
          });
        } catch {
        }
        return true;
      },
      requestAuthCode: (options3) => mode.requestAuthCode(options3),
      call: gateOnBootstrapAuth(mode.call),
      callEvent: gateOnBootstrapAuth(mode.callEvent),
      callOptional: gateOnBootstrapAuth(mode.callOptional),
      client: clientRpc,
      sharedState: void 0,
      services: void 0,
      streaming: void 0,
      cacheManager,
      scope: void 0,
      close: closeRpcClient
    };
    rpc.sharedState = createRpcSharedStateClientHost(rpc);
    rpc.streaming = createRpcStreamingClientHost(rpc);
    rpc.services = createDevframeServicesClient(rpc);
    const scopedCache = /* @__PURE__ */ new Map();
    rpc.scope = ((namespace) => {
      if (!namespace) return rpc;
      let scoped2 = scopedCache.get(namespace);
      if (!scoped2) {
        scoped2 = createScopedClientContext(rpc, namespace);
        scopedCache.set(namespace, scoped2);
      }
      return scoped2;
    });
    context.rpc = rpc;
    function isTopLevelUnframed() {
      try {
        return typeof window !== "undefined" && window.self === window.top;
      } catch {
        return false;
      }
    }
    async function runSimpleAuthPrompt() {
      if (options2.simpleAuth === false || !isTopLevelUnframed()) return;
      if (typeof globalThis.prompt !== "function") return;
      await rpc.requestAuthCode().catch(() => {
      });
      while (!rpc.isTrusted) {
        const code = globalThis.prompt("devframe: enter the authentication code shown in your terminal");
        if (code == null) return;
        const trimmed = code.trim();
        if (!trimmed) continue;
        if (await rpc.requestTrustWithCode(trimmed)) return;
      }
    }
    async function bootstrapAuth() {
      const trusted = await mode.requestTrust();
      const otpParam = options2.otpParam ?? "devframe_otp";
      const viaOtp = otpParam ? await authenticateWithUrlOtp(rpc, { param: otpParam }) : false;
      if (trusted || viaOtp || rpc.isTrusted) return;
      await runSimpleAuthPrompt();
    }
    bootstrapAuthPromise = bootstrapAuth().then(() => {
      bootstrapAuthSettled = true;
    }, () => {
      bootstrapAuthSettled = true;
    });
    if (connectionMeta.mcp) Promise.resolve().then(() => (init_browser_agent_rpc_BXhoSh1z(), browser_agent_rpc_BXhoSh1z_exports)).then(({ setupBrowserAgentRpcBridge: setupBrowserAgentRpcBridge2 }) => {
      if (!closed) disposeBrowserAgentBridge = setupBrowserAgentRpcBridge2(rpc);
    }).catch(() => {
    });
    if (authChannel) authChannel.onmessage = (event) => {
      if (event.data?.type === "auth-update" && event.data.authToken) rpc.requestTrustWithToken(event.data.authToken);
    };
    return rpc;
  }
  var connectDevframe = getDevframeRpcClient;

  // client/form.ts
  var FORM_CSS = `
  .form-wrap { padding: 12px 14px 24px; overflow-y: auto; height: 100%; }
  .form-actions { display: flex; gap: 6px; align-items: center; margin-bottom: 12px; }
  .form-actions .spacer { flex: 1; }
  .btn { background: #18181b; border: 1px solid #3f3f46; border-radius: 4px; color: #e5e7eb; padding: 4px 10px; font: inherit; font-size: 12px; cursor: pointer; }
  .btn:hover { background: #27272a; }
  .btn.primary { background: #2563eb; border-color: #2563eb; color: #fff; }
  .btn.primary:hover { background: #1d4ed8; }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .field { margin-bottom: 10px; }
  .field > label { display: block; color: #a1a1aa; font-size: 11px; margin-bottom: 3px; }
  .field > label .req { color: #f87171; margin-left: 2px; }
  .field .hint { color: #52525b; font-size: 11px; margin-top: 2px; }
  .field input[type="text"], .field input[type="number"], .field input[type="date"], .field select, .field textarea {
    width: 100%; background: #18181b; border: 1px solid #3f3f46; border-radius: 4px;
    color: #e5e7eb; padding: 4px 8px; font: inherit; font-size: 12px;
  }
  .field textarea { min-height: 72px; resize: vertical; font-family: ui-monospace, SFMono-Regular, monospace; }
  .field input:focus, .field select:focus, .field textarea:focus { outline: none; border-color: #2563eb; }
  .field-bool { display: flex; align-items: center; gap: 6px; }
  .field-bool label { color: #e5e7eb; font-size: 12px; margin: 0; }
  fieldset { border: 1px solid #27272a; border-radius: 5px; padding: 8px 10px; margin-bottom: 10px; min-width: 0; }
  legend { color: #d4d4d8; font-size: 11px; font-weight: 600; padding: 0 4px; text-transform: uppercase; letter-spacing: 0.04em; }
  fieldset.collapsed > *:not(legend) { display: none; }
  legend .toggle { cursor: pointer; user-select: none; }
  legend .count { color: #52525b; font-weight: 400; text-transform: none; letter-spacing: 0; margin-left: 4px; }
  .array-item { border: 1px solid #27272a; border-radius: 5px; padding: 8px 10px; margin-bottom: 8px; position: relative; }
  .array-item > .array-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
  .array-item > .array-head span { color: #71717a; font-size: 11px; }
  .json-editor { width: 100%; min-height: 320px; background: #18181b; border: 1px solid #3f3f46; border-radius: 4px; color: #e5e7eb; padding: 8px; font: 12px/1.5 ui-monospace, SFMono-Regular, monospace; resize: vertical; }
  .json-error { color: #f87171; font-size: 11px; margin-top: 6px; }
  .form-empty { color: #52525b; font-size: 12px; padding: 8px 0; }
`;
  var isPlainObject2 = (value) => typeof value === "object" && value !== null && !Array.isArray(value);
  var el = (tag, attrs = {}, children = []) => {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
    for (const child of children) node.append(child);
    return node;
  };
  var labelOf = (name, schema) => schema.title ?? name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
  var normalize = (schema, defs) => {
    let node = schema;
    if (node.$ref) {
      const key = node.$ref.replace("#/$defs/", "");
      node = defs[key] ?? {};
    }
    const union = node.anyOf ?? node.oneOf;
    if (union?.length) {
      const branches = union.filter((branch) => branch.type !== "null");
      if (branches.every((branch) => branch.type === "string" && branch.enum)) {
        return { ...node, type: "string", enum: branches.flatMap((branch) => branch.enum ?? []) };
      }
      if (branches.length === 1 && branches[0]) return normalize(branches[0], defs);
      return { ...node, type: "json" };
    }
    return node;
  };
  var setLeaf = (input, parent2, key, read, ctx) => {
    const write = () => {
      const value = read();
      if (value === void 0) delete parent2[key];
      else parent2[key] = value;
      ctx.onChange();
    };
    input.addEventListener("input", write);
    input.addEventListener("change", write);
  };
  var buildField = (name, schema, parent2, required, ctx) => {
    const node = normalize(schema, ctx.defs);
    const title = labelOf(name, schema);
    const current2 = parent2[name];
    if (node.type === "object" && node.properties) {
      if (!isPlainObject2(parent2[name])) parent2[name] = { ...node.default ?? {} };
      const value = parent2[name];
      const set2 = new Set(node.required ?? []);
      const legend = el("legend", {}, [
        el("span", { class: "toggle" }, [title])
      ]);
      const fieldset = el("fieldset", {}, [legend]);
      for (const [childName, childSchema] of Object.entries(node.properties)) {
        fieldset.append(buildField(childName, childSchema, value, set2.has(childName), ctx));
      }
      legend.addEventListener("click", () => fieldset.classList.toggle("collapsed"));
      return fieldset;
    }
    if (node.type === "array" && node.items) {
      if (!Array.isArray(parent2[name])) parent2[name] = Array.isArray(node.default) ? [...node.default] : [];
      const list = parent2[name];
      const items = node.items;
      const legend = el("legend", {}, [el("span", { class: "toggle" }, [title])]);
      const fieldset = el("fieldset", {}, [legend]);
      const body = el("div");
      const addButton = el("button", { type: "button", class: "btn" }, ["+ Add"]);
      const paint = () => {
        body.replaceChildren();
        list.forEach((_, index) => {
          const head = el("div", { class: "array-head" }, [el("span", {}, [`#${index + 1}`])]);
          const remove = el("button", { type: "button", class: "btn" }, ["Remove"]);
          remove.addEventListener("click", () => {
            list.splice(index, 1);
            paint();
            ctx.onChange();
          });
          head.append(remove);
          const row = el("div", { class: "array-item" }, [head]);
          row.append(buildField(String(index), items, list, false, ctx));
          body.append(row);
        });
        legend.querySelector(".count")?.remove();
        legend.append(el("span", { class: "count" }, [`(${list.length})`]));
      };
      addButton.addEventListener("click", () => {
        const child = normalize(items, ctx.defs);
        list.push(child.type === "object" ? {} : child.type === "array" ? [] : "");
        paint();
        ctx.onChange();
      });
      fieldset.append(body, addButton);
      paint();
      return fieldset;
    }
    const wrap = el("div", { class: "field" });
    if (node.type === "boolean") {
      const input = el("input", { type: "checkbox", id: `f-${name}` });
      input.checked = current2 === true || current2 === void 0 && node.default === true;
      parent2[name] = input.checked;
      input.addEventListener("change", () => {
        parent2[name] = input.checked;
        ctx.onChange();
      });
      wrap.className = "field field-bool";
      wrap.append(input, el("label", { for: `f-${name}` }, [title]));
      return wrap;
    }
    const label = el("label", {}, [title]);
    if (required) label.append(el("span", { class: "req" }, ["*"]));
    wrap.append(label);
    if (node.enum?.length) {
      const select = el("select");
      if (!required) select.append(el("option", { value: "" }, ["\u2014"]));
      for (const option of node.enum) {
        select.append(el("option", { value: String(option) }, [String(option)]));
      }
      select.value = String(current2 ?? node.default ?? "");
      setLeaf(select, parent2, name, () => select.value === "" ? void 0 : select.value, ctx);
      wrap.append(select);
    } else if (node.type === "json" || node.type === "object" || node.type === "array") {
      const area = el("textarea", { spellcheck: "false" });
      area.value = current2 === void 0 ? "" : JSON.stringify(current2, null, 2);
      const error = el("div", { class: "json-error" });
      area.addEventListener("input", () => {
        if (area.value.trim() === "") {
          delete parent2[name];
          error.textContent = "";
        } else {
          try {
            parent2[name] = JSON.parse(area.value);
            error.textContent = "";
          } catch (err) {
            error.textContent = String(err);
          }
        }
        ctx.onChange();
      });
      wrap.append(area, error);
    } else if (node.type === "number" || node.type === "integer") {
      const input = el("input", { type: "number", step: node.type === "integer" ? "1" : "any" });
      input.value = current2 === void 0 ? String(node.default ?? "") : String(current2);
      setLeaf(input, parent2, name, () => input.value === "" ? void 0 : Number(input.value), ctx);
      wrap.append(input);
    } else if (node.format === "markdown") {
      const area = el("textarea", { spellcheck: "false" });
      area.value = String(current2 ?? node.default ?? "");
      setLeaf(area, parent2, name, () => area.value === "" ? void 0 : area.value, ctx);
      wrap.append(area);
    } else {
      const type = node.format === "date" ? "date" : "text";
      const input = el("input", { type });
      input.value = String(current2 ?? node.default ?? "");
      setLeaf(input, parent2, name, () => input.value === "" ? void 0 : input.value, ctx);
      wrap.append(input);
    }
    if (node.description) wrap.append(el("div", { class: "hint" }, [node.description]));
    return wrap;
  };
  var buildInputForm = (options2) => {
    const { schema, value, mode, onChange } = options2;
    const container = el("div");
    if (mode === "json") {
      const area = el("textarea", { class: "json-editor", spellcheck: "false" });
      area.value = JSON.stringify(value, null, 2);
      const error = el("div", { class: "json-error" });
      area.addEventListener("input", () => {
        try {
          const parsed = JSON.parse(area.value);
          if (!isPlainObject2(parsed)) throw new TypeError("Input must be a JSON object");
          for (const key of Object.keys(value)) delete value[key];
          Object.assign(value, parsed);
          error.textContent = "";
          onChange();
        } catch (err) {
          error.textContent = String(err);
        }
      });
      container.append(area, error);
      return container;
    }
    const names = Object.keys(schema.properties);
    if (!names.length) {
      container.append(el("div", { class: "form-empty" }, ["This template has no caller inputs."]));
      return container;
    }
    const defs = Object.values(schema.properties).reduce(
      (acc, node) => Object.assign(acc, node.$defs ?? {}),
      {}
    );
    const required = new Set(schema.required);
    const ctx = { defs, onChange };
    for (const name of names) {
      container.append(buildField(name, schema.properties[name], value, required.has(name), ctx));
    }
    return container;
  };

  // client/hub-client.ts
  var SCOPE = globalThis.__DEVFRAME_CONFIG__?.id ?? "devframe-comark-pdf";
  var CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #app { width: 100%; height: 100%; overflow: hidden; font: 13px/1.4 ui-sans-serif, system-ui, sans-serif; background: #0f0f10; color: #e5e7eb; }
  #app { display: flex; }
  aside { width: 280px; min-width: 200px; max-width: 360px; display: flex; flex-direction: column; border-right: 1px solid #27272a; overflow: hidden; }
  .toolbar { padding: 8px; display: flex; gap: 6px; align-items: center; border-bottom: 1px solid #27272a; flex-shrink: 0; }
  .toolbar input { flex: 1; min-width: 0; background: #18181b; border: 1px solid #3f3f46; border-radius: 4px; color: #e5e7eb; padding: 4px 8px; font: inherit; }
  .toolbar input::placeholder { color: #71717a; }
  .toolbar .icon-btn { flex: none; }
  .tree { flex: 1; overflow-y: auto; padding: 4px 0; }
  .group-header { padding: 4px 10px 2px; color: #71717a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
  .row { display: flex; align-items: center; gap: 6px; padding: 4px 10px; cursor: pointer; border-radius: 4px; margin: 0 4px; }
  .row:hover { background: #27272a; }
  .row.active { background: #1e40af33; }
  .row-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 12px; }
  .chip { display: inline-block; padding: 1px 5px; border-radius: 99px; font-size: 10px; font-weight: 600; flex-shrink: 0; }
  .chip-green { background: #14532d55; color: #4ade80; }
  .chip-yellow { background: #713f1255; color: #fbbf24; }
  .chip-red { background: #7f1d1d55; color: #f87171; }
  .chip-gray { background: #27272a; color: #71717a; }
  main { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
  .tabs { display: flex; align-items: center; border-bottom: 1px solid #27272a; flex-shrink: 0; }
  .tab { padding: 8px 14px; cursor: pointer; border-bottom: 2px solid transparent; color: #71717a; font-size: 12px; }
  .tab.active { border-color: #2563eb; color: #e5e7eb; }
  .tab-actions { margin-left: auto; display: flex; gap: 4px; padding-right: 8px; }
  .icon-btn { background: transparent; border: 1px solid #3f3f46; border-radius: 4px; color: #a1a1aa; width: 28px; height: 28px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; padding: 0; }
  .icon-btn:hover { background: #27272a; color: #e5e7eb; }
  .icon-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .icon-btn.primary { background: #2563eb; border-color: #2563eb; color: white; }
  .icon-btn.primary:hover { background: #1d4ed8; }
  .panel { flex: 1; overflow: auto; }
  iframe { width: 100%; height: 100%; border: none; background: white; }
  .diagnostics { padding: 16px; }
  .diag-item { padding: 6px 0; border-bottom: 1px solid #27272a; font-size: 12px; }
  .diag-error { color: #f87171; }
  .diag-warn { color: #fbbf24; }
  .diag-ok { color: #4ade80; }
  .empty { display: flex; align-items: center; justify-content: center; height: 100%; color: #52525b; font-size: 13px; }
${FORM_CSS}`;
  var templates = [];
  var diagByTemplate = /* @__PURE__ */ new Map();
  var descriptions = /* @__PURE__ */ new Map();
  var inputByTemplate = /* @__PURE__ */ new Map();
  var unitByTemplate = /* @__PURE__ */ new Map();
  var selectedId = "";
  var selectedTab = "pdf";
  var inputMode = "form";
  var treeMode = sessionStorage.getItem(`${SCOPE}-mode`) || "tree";
  var searchQuery = "";
  var pdfBlobUrl = "";
  var rendering = false;
  var renderToken = 0;
  var root = null;
  var scoped = null;
  var escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  var siteOrigin = () => {
    try {
      return window.parent.location.origin;
    } catch {
      return window.location.origin;
    }
  };
  var describedOk = (id) => {
    const description = descriptions.get(id);
    return description?.ok ? description : null;
  };
  var describeSelected = async (id) => {
    if (descriptions.has(id) || !scoped) return;
    const description = await scoped.rpc.call("describe-template", { templateId: id });
    descriptions.set(id, description);
    if (!description.ok) return;
    if (!unitByTemplate.has(id)) {
      const fallback = description.previewUnit ?? description.unit?.options[0]?.value;
      if (fallback) unitByTemplate.set(id, fallback);
    }
    if (!inputByTemplate.has(id)) {
      inputByTemplate.set(id, structuredClone(description.sample));
    }
  };
  var statusChip = (id) => {
    const d = diagByTemplate.get(id);
    if (!d) return `<span class="chip chip-gray">?</span>`;
    if (d.diagnostics.errors.length > 0) return `<span class="chip chip-red">${d.diagnostics.errors.length}E</span>`;
    if (d.diagnostics.warnings.length > 0) return `<span class="chip chip-yellow">${d.diagnostics.warnings.length}W</span>`;
    return `<span class="chip chip-green">OK</span>`;
  };
  var templateMatches = (t, q) => {
    const hay = [t.id, t.group, t.label, t.searchText ?? ""].join(" ").toLowerCase();
    return hay.includes(q);
  };
  var filteredTemplates = () => {
    const q = searchQuery.toLowerCase();
    return q ? templates.filter((t) => templateMatches(t, q)) : templates;
  };
  var renderTree = () => {
    const list = filteredTemplates();
    if (!list.length) return `<div class="empty">No templates</div>`;
    if (treeMode === "flat") {
      return list.map((t) => `
      <div class="row ${t.id === selectedId ? "active" : ""}" data-id="${escapeHtml(t.id)}">
        <span class="row-name">${escapeHtml(t.id)}</span>
        ${statusChip(t.id)}
      </div>
    `).join("");
    }
    const groups = /* @__PURE__ */ new Map();
    for (const t of list) {
      const g = groups.get(t.group) ?? [];
      g.push(t);
      groups.set(t.group, g);
    }
    return [...groups.entries()].map(([group, entries]) => `
    <div class="group-header">${escapeHtml(group)}</div>
    ${entries.map((t) => `
      <div class="row ${t.id === selectedId ? "active" : ""}" data-id="${escapeHtml(t.id)}">
        <span class="row-name">${escapeHtml(t.label)}</span>
        ${statusChip(t.id)}
      </div>
    `).join("")}
  `).join("");
  };
  var openIcon = `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 3H3.5A1.5 1.5 0 0 0 2 4.5v8A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V10M10 2h4v4M7 9l7-7"/></svg>`;
  var renderIcon = `<svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2.5v11l9-5.5L4 2.5z"/></svg>`;
  var ICON_TREE = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 2h5v2H2zm7 5h5v2H9zm0 5h5v2H9zM4 4v9h1.5V8.5H9V7H5.5V4z"/></svg>`;
  var ICON_LIST = `<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M2 3h12v1.5H2zm0 4.25h12v1.5H2zM2 11.5h12V13H2z"/></svg>`;
  var ICON_RUN_ALL = `<svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M2 2.5v11l5.5-5.5L2 2.5zm7 0v11l5.5-5.5L9 2.5z"/></svg>`;
  var renderMainPanel = () => {
    if (!selectedId) return `<div class="empty">Select a template</div>`;
    const description = describedOk(selectedId);
    const inputCount = description ? Object.keys(description.schema.properties).length : 0;
    const inputBadge = description?.unit ? inputCount + 1 : inputCount;
    const canOpen = Boolean(description?.openUrl);
    const tabs = `
    <div class="tabs">
      <div class="tab ${selectedTab === "input" ? "active" : ""}" data-tab="input">Input${inputBadge ? ` (${inputBadge})` : ""}</div>
      <div class="tab ${selectedTab === "pdf" ? "active" : ""}" data-tab="pdf">PDF</div>
      <div class="tab ${selectedTab === "diagnostics" ? "active" : ""}" data-tab="diagnostics">Diagnostics</div>
      <div class="tab-actions">
        <button class="icon-btn primary" id="btn-render" title="Render" ${rendering ? "disabled" : ""}>${renderIcon}</button>
        ${canOpen ? `<button class="icon-btn" id="btn-open" title="Open via host HTTP route">${openIcon}</button>` : ""}
      </div>
    </div>
  `;
    if (selectedTab === "input") {
      if (!description) {
        const failed = descriptions.get(selectedId);
        const message = failed && !failed.ok ? failed.error : "Loading contract\u2026";
        return `${tabs}<div class="panel"><div class="empty">${escapeHtml(message)}</div></div>`;
      }
      return `${tabs}<div class="panel"><div class="form-wrap" id="form-wrap"></div></div>`;
    }
    if (selectedTab === "pdf") {
      const panel = pdfBlobUrl ? `<div class="panel"><iframe src="${pdfBlobUrl}" title="PDF preview"></iframe></div>` : `<div class="panel"><div class="empty">${rendering ? "Rendering\u2026" : "No PDF yet \u2014 click Render"}</div></div>`;
      return `${tabs}${panel}`;
    }
    const d = diagByTemplate.get(selectedId);
    if (!d) {
      return `${tabs}<div class="panel"><div class="empty">Not yet rendered</div></div>`;
    }
    const items = [
      ...d.diagnostics.errors.map((e) => `<div class="diag-item diag-error">\u2715 ${escapeHtml(e)}</div>`),
      ...d.diagnostics.warnings.map((w) => `<div class="diag-item diag-warn">\u26A0 ${escapeHtml(w)}</div>`),
      ...d.diagnostics.errors.length === 0 && d.diagnostics.warnings.length === 0 ? [`<div class="diag-item diag-ok">\u2713 No issues</div>`] : []
    ].join("");
    return `${tabs}<div class="panel"><div class="diagnostics">${items}</div></div>`;
  };
  var openSelected = () => {
    const description = describedOk(selectedId);
    if (!description?.openUrl) return;
    const url = new URL(description.openUrl, siteOrigin());
    const unit = unitByTemplate.get(selectedId);
    if (unit) url.searchParams.set("unit", unit);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };
  var render = () => {
    if (!root) return;
    const activeId = document.activeElement instanceof HTMLElement ? document.activeElement.id : "";
    const searchEl = root.querySelector("#search");
    const caret = searchEl ? searchEl.selectionStart : null;
    root.innerHTML = `
    <style>${CSS}</style>
    <aside>
      <div class="toolbar">
        <input id="search" type="search" placeholder="Filter templates\u2026" autocomplete="off" value="${escapeHtml(searchQuery)}" />
        <button type="button" id="btn-mode" class="icon-btn" title="Toggle view" aria-label="Toggle view">${treeMode === "flat" ? ICON_LIST : ICON_TREE}</button>
        <button type="button" id="btn-run-all" class="icon-btn" title="Render all" aria-label="Render all">${ICON_RUN_ALL}</button>
      </div>
      <div class="tree" id="tree">${renderTree()}</div>
    </aside>
    <main>${renderMainPanel()}</main>
  `;
    root.querySelector("#search")?.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      render();
    });
    root.querySelector("#btn-mode")?.addEventListener("click", () => {
      treeMode = treeMode === "tree" ? "flat" : "tree";
      sessionStorage.setItem(`${SCOPE}-mode`, treeMode);
      render();
    });
    root.querySelector("#btn-run-all")?.addEventListener("click", runAll);
    root.querySelectorAll(".row[data-id]").forEach((el2) => {
      el2.addEventListener("click", () => {
        const id = el2.dataset.id;
        selectedId = id;
        pdfBlobUrl = "";
        selectedTab = "pdf";
        render();
        void selectTemplate(id);
      });
    });
    root.querySelectorAll(".tab[data-tab]").forEach((el2) => {
      el2.addEventListener("click", () => {
        selectedTab = el2.dataset.tab;
        render();
      });
    });
    root.querySelector("#btn-render")?.addEventListener("click", renderSelected);
    root.querySelector("#btn-open")?.addEventListener("click", openSelected);
    mountInputForm();
    if (activeId) {
      const selector = typeof globalThis.CSS?.escape === "function" ? globalThis.CSS.escape(activeId) : activeId.replace(/[^a-zA-Z0-9_-]/g, "\\$&");
      const restored = root.querySelector(`#${selector}`);
      restored?.focus();
      if (restored && caret != null && typeof restored.setSelectionRange === "function") {
        restored.setSelectionRange(caret, caret);
      }
    }
  };
  var mountInputForm = () => {
    const mount = root?.querySelector("#form-wrap");
    const description = describedOk(selectedId);
    if (!mount || !description) return;
    const value = inputByTemplate.get(selectedId) ?? {};
    inputByTemplate.set(selectedId, value);
    const actions = document.createElement("div");
    actions.className = "form-actions";
    actions.innerHTML = `
    <button type="button" class="btn" id="btn-mode-form" ${inputMode === "form" ? "disabled" : ""}>Form</button>
    <button type="button" class="btn" id="btn-mode-json" ${inputMode === "json" ? "disabled" : ""}>JSON</button>
    <span class="spacer"></span>
    ${Object.keys(description.sample).length ? `<button type="button" class="btn" id="btn-sample">Load sample</button>` : ""}
    <button type="button" class="btn" id="btn-clear">Clear</button>
    <button type="button" class="btn primary" id="btn-form-render">Render</button>
  `;
    mount.replaceChildren(actions);
    if (description.unit) {
      const field = document.createElement("div");
      field.className = "field";
      const selected = unitByTemplate.get(selectedId) ?? "";
      field.innerHTML = `
      <label>${escapeHtml(description.unit.title)}<span class="req">*</span></label>
      <select id="unit-select">
        <option value="">\u2014 ${description.unit.options.length} available \u2014</option>
        ${description.unit.options.map((option) => `<option value="${escapeHtml(option.value)}" ${option.value === selected ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
      </select>
    `;
      field.querySelector("#unit-select")?.addEventListener("change", (event) => {
        unitByTemplate.set(selectedId, event.target.value);
      });
      mount.append(field);
    }
    mount.append(buildInputForm({
      schema: description.schema,
      value,
      mode: inputMode,
      onChange: () => {
      }
    }));
    actions.querySelector("#btn-mode-form")?.addEventListener("click", () => {
      inputMode = "form";
      mountInputForm();
    });
    actions.querySelector("#btn-mode-json")?.addEventListener("click", () => {
      inputMode = "json";
      mountInputForm();
    });
    actions.querySelector("#btn-sample")?.addEventListener("click", () => {
      inputByTemplate.set(selectedId, structuredClone(description.sample));
      mountInputForm();
    });
    actions.querySelector("#btn-clear")?.addEventListener("click", () => {
      inputByTemplate.set(selectedId, {});
      mountInputForm();
    });
    actions.querySelector("#btn-form-render")?.addEventListener("click", renderSelected);
  };
  var selectTemplate = async (id) => {
    await describeSelected(id).catch((err) => console.error("[comark-pdf] describe failed", err));
    if (selectedId !== id) return;
    await renderSelected();
  };
  var renderSelected = async () => {
    if (!selectedId || !scoped) return;
    const token = ++renderToken;
    const id = selectedId;
    rendering = true;
    selectedTab = "pdf";
    render();
    try {
      const result = await scoped.rpc.call(
        "render-template",
        {
          templateId: id,
          unit: unitByTemplate.get(id) || void 0,
          input: inputByTemplate.get(id) ?? {}
        }
      );
      if (token !== renderToken) return;
      diagByTemplate.set(id, {
        id,
        ok: result.ok,
        diagnostics: result.diagnostics
      });
      if (result.ok && result.pdfBase64) {
        const bytes = Uint8Array.from(atob(result.pdfBase64), (c) => c.charCodeAt(0));
        const blob = new Blob([bytes], { type: "application/pdf" });
        if (pdfBlobUrl) URL.revokeObjectURL(pdfBlobUrl);
        pdfBlobUrl = URL.createObjectURL(blob);
      } else {
        pdfBlobUrl = "";
        if (result.error || result.diagnostics.errors.length) {
          selectedTab = "diagnostics";
        }
      }
    } catch (err) {
      if (token !== renderToken) return;
      diagByTemplate.set(id, {
        id,
        ok: false,
        diagnostics: { errors: [String(err)], warnings: [] }
      });
      pdfBlobUrl = "";
      selectedTab = "diagnostics";
    }
    if (token !== renderToken) return;
    rendering = false;
    render();
  };
  var runAll = async () => {
    if (!scoped) return;
    try {
      const results = await scoped.rpc.call("render-all");
      for (const r of results) {
        diagByTemplate.set(r.id, r);
      }
      render();
    } catch (err) {
      console.error("[comark-pdf] render-all failed", err);
    }
  };
  (async () => {
    root = document.getElementById("app");
    if (!root) return;
    root.innerHTML = `<style>${CSS}</style><div class="empty">Connecting\u2026</div>`;
    try {
      const client = await connectDevframe();
      scoped = client.scope(SCOPE);
      const list = await scoped.rpc.call("list-templates");
      templates.push(...list);
      render();
      runAll().catch(() => {
      });
    } catch (err) {
      root.innerHTML = `<style>${CSS}</style><div class="empty">Connection failed: ${err}</div>`;
    }
  })();
})();
