"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn3, res) => function __init() {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/utils-BPMMmTje.js
  function t(t2) {
    let n2 = String(t2), r2 = n2.length - 1;
    return e.context.id + (r2 ? String.fromCharCode(96 + r2) : ``) + n2;
  }
  function n(t2) {
    e.context = t2;
  }
  function _(e3, t2) {
    let n2 = p2, r2 = d, i2 = e3.length === 0, a2 = t2 === void 0 ? r2 : t2, o2 = i2 ? l : { owned: null, cleanups: null, context: a2 ? a2.context : null, owner: a2 }, s3 = i2 ? e3 : () => e3(() => w(() => I(o2)));
    d = o2, p2 = null;
    try {
      return P(s3, true);
    } finally {
      p2 = n2, d = r2;
    }
  }
  function v(e3, t2) {
    t2 = t2 ? Object.assign({}, s, t2) : s;
    let n2 = { value: e3, observers: null, observerSlots: null, comparator: t2.equals || void 0 };
    return [ce.bind(n2), (e4) => (typeof e4 == `function` && (e4 = f && f.running && f.sources.has(n2) ? e4(n2.tValue) : e4(n2.value)), le(n2, e4))];
  }
  function y(e3, t2, n2) {
    M(de(e3, t2, true, 1));
  }
  function b(e3, t2, n2) {
    M(de(e3, t2, false, 1));
  }
  function x(e3, t2, n2) {
    c = me;
    let r2 = de(e3, t2, false, 1), i2 = j && oe(j);
    i2 && (r2.suspense = i2), (!n2 || !n2.render) && (r2.user = true), h2 ? h2.push(r2) : M(r2);
  }
  function S(e3, t2, n2) {
    n2 = n2 ? Object.assign({}, s, n2) : s;
    let r2 = de(e3, t2, true, 0);
    return r2.observers = null, r2.observerSlots = null, r2.comparator = n2.equals || void 0, M(r2), ce.bind(r2);
  }
  function ee(e3) {
    return e3 && typeof e3 == `object` && `then` in e3;
  }
  function te(t2, n2, r2) {
    let i2, a2, o2;
    typeof n2 == `function` ? (i2 = t2, a2 = n2, o2 = r2 || {}) : (i2 = true, a2 = t2, o2 = n2 || {});
    let s3 = null, c2 = u, l3 = null, m2 = false, h3 = false, g2 = `initialValue` in o2, _2 = typeof i2 == `function` && S(i2), b2 = /* @__PURE__ */ new Set(), [x2, te2] = (o2.storage || v)(o2.initialValue), [C2, ne2] = v(void 0), [re2, T2] = v(void 0, { equals: false }), [E2, ae] = v(g2 ? `ready` : `unresolved`);
    e.context && (l3 = e.getNextContextId(), o2.ssrLoadFrom === `initial` ? c2 = o2.initialValue : e.load && e.has(l3) && (c2 = e.load(l3)));
    function D2(e3, t3, n3, r3) {
      return s3 === e3 && (s3 = null, r3 !== void 0 && (g2 = true), (e3 === c2 || t3 === c2) && o2.onHydrated && queueMicrotask(() => o2.onHydrated(r3, { value: t3 })), c2 = u, f && e3 && m2 ? (f.promises.delete(e3), m2 = false, P(() => {
        f.running = true, O2(t3, n3);
      }, false)) : O2(t3, n3)), t3;
    }
    function O2(e3, t3) {
      P(() => {
        t3 === void 0 && te2(() => e3), ae(t3 === void 0 ? g2 ? `ready` : `unresolved` : `errored`), ne2(t3);
        for (let e4 of b2.keys()) e4.decrement();
        b2.clear();
      }, false);
    }
    function k2() {
      let e3 = j && oe(j), t3 = x2(), n3 = C2();
      if (n3 !== void 0 && !s3) throw n3;
      return p2 && !p2.user && e3 && y(() => {
        re2(), s3 && (e3.resolved && f && m2 ? f.promises.add(s3) : b2.has(e3) || (e3.increment(), b2.add(e3)));
      }), t3;
    }
    function A2(e3 = true) {
      if (e3 !== false && h3) return;
      h3 = false;
      let t3 = _2 ? _2() : i2;
      if (m2 = f && f.running, t3 == null || t3 === false) {
        D2(s3, w(x2));
        return;
      }
      f && s3 && f.promises.delete(s3);
      let n3, r3 = c2 === u ? w(() => {
        try {
          return a2(t3, { value: x2(), refetching: e3 });
        } catch (e4) {
          n3 = e4;
        }
      }) : c2;
      if (n3 !== void 0) {
        D2(s3, void 0, _e(n3), t3);
        return;
      }
      return ee(r3) ? (s3 = r3, `v` in r3 ? (r3.s === 1 ? D2(s3, r3.v, void 0, t3) : D2(s3, void 0, _e(r3.v), t3), r3) : (h3 = true, queueMicrotask(() => h3 = false), P(() => {
        ae(g2 ? `refreshing` : `pending`), T2();
      }, false), r3.then((e4) => D2(r3, e4, void 0, t3), (e4) => D2(r3, void 0, _e(e4), t3)))) : (D2(s3, r3, void 0, t3), r3);
    }
    Object.defineProperties(k2, { state: { get: () => E2() }, error: { get: () => C2() }, loading: { get() {
      let e3 = E2();
      return e3 === `pending` || e3 === `refreshing`;
    } }, latest: { get() {
      if (!g2) return k2();
      let e3 = C2();
      if (e3 && !s3) throw e3;
      return x2();
    } } });
    let se2 = d;
    return _2 ? y(() => (se2 = d, A2(false))) : A2(false), [k2, { refetch: (e3) => ie(se2, () => A2(e3)), mutate: te2 }];
  }
  function C(e3) {
    return P(e3, false);
  }
  function w(e3) {
    if (p2 === null) return e3();
    let t2 = p2;
    p2 = null;
    try {
      return e3();
    } finally {
      p2 = t2;
    }
  }
  function ne(e3, t2, n2) {
    let r2 = Array.isArray(e3), i2, a2 = n2 && n2.defer;
    return (n3) => {
      let o2;
      if (r2) {
        o2 = Array(e3.length);
        for (let t3 = 0; t3 < e3.length; t3++) o2[t3] = e3[t3]();
      } else o2 = e3();
      if (a2) return a2 = false, n3;
      let s3 = w(() => t2(o2, i2, n3));
      return i2 = o2, s3;
    };
  }
  function re(e3) {
    x(() => w(e3));
  }
  function T(e3) {
    return d === null || (d.cleanups === null ? d.cleanups = [e3] : d.cleanups.push(e3)), e3;
  }
  function E() {
    return d;
  }
  function ie(e3, t2) {
    let n2 = d, r2 = p2;
    d = e3, p2 = null;
    try {
      return P(t2, true);
    } catch (e4) {
      ve(e4);
    } finally {
      d = n2, p2 = r2;
    }
  }
  function A(e3, t2) {
    let n2 = Symbol(`context`);
    return { id: n2, Provider: be(n2), defaultValue: e3 };
  }
  function oe(e3) {
    let t2;
    return d && d.context && (t2 = d.context[e3.id]) !== void 0 ? t2 : e3.defaultValue;
  }
  function se(e3) {
    let t2 = S(e3), n2 = S(() => ye(t2()));
    return n2.toArray = () => {
      let e4 = n2();
      return Array.isArray(e4) ? e4 : e4 == null ? [] : [e4];
    }, n2;
  }
  function ce() {
    let e3 = f && f.running;
    if (this.sources && (e3 ? this.tState : this.state)) {
      if ((e3 ? this.tState : this.state) === 1) M(this);
      else {
        let e4 = m;
        m = null, P(() => F(this), false), m = e4;
      }
    }
    if (p2) {
      let e4 = this.observers ? this.observers.length : 0;
      p2.sources ? (p2.sources.push(this), p2.sourceSlots.push(e4)) : (p2.sources = [this], p2.sourceSlots = [e4]), this.observers ? (this.observers.push(p2), this.observerSlots.push(p2.sources.length - 1)) : (this.observers = [p2], this.observerSlots = [p2.sources.length - 1]);
    }
    return e3 && f.sources.has(this) ? this.tValue : this.value;
  }
  function le(e3, t2, n2) {
    let r2 = f && f.running && f.sources.has(e3) ? e3.tValue : e3.value;
    if (!e3.comparator || !e3.comparator(r2, t2)) {
      if (f) {
        let r3 = f.running;
        (r3 || !n2 && f.sources.has(e3)) && (f.sources.add(e3), e3.tValue = t2), r3 || (e3.value = t2);
      } else e3.value = t2;
      e3.observers && e3.observers.length && P(() => {
        for (let t3 = 0; t3 < e3.observers.length; t3 += 1) {
          let n3 = e3.observers[t3], r3 = f && f.running;
          r3 && f.disposed.has(n3) || ((r3 ? !n3.tState : !n3.state) && (n3.pure ? m.push(n3) : h2.push(n3), n3.observers && he(n3)), r3 ? n3.tState = 1 : n3.state = 1);
        }
        if (m.length > 1e6) throw m = [], Error();
      }, false);
    }
    return t2;
  }
  function M(e3) {
    if (!e3.fn) return;
    I(e3);
    let t2 = g;
    ue(e3, f && f.running && f.sources.has(e3) ? e3.tValue : e3.value, t2), f && !f.running && f.sources.has(e3) && queueMicrotask(() => {
      P(() => {
        f && (f.running = true), p2 = d = e3, ue(e3, e3.tValue, t2), p2 = d = null;
      }, false);
    });
  }
  function ue(e3, t2, n2) {
    let r2, i2 = d, a2 = p2;
    p2 = d = e3;
    try {
      r2 = e3.fn(t2);
    } catch (t3) {
      return e3.pure && (f && f.running ? (e3.tState = 1, e3.tOwned && e3.tOwned.forEach(I), e3.tOwned = void 0) : (e3.state = 1, e3.owned && e3.owned.forEach(I), e3.owned = null)), e3.updatedAt = n2 + 1, ve(t3);
    } finally {
      p2 = a2, d = i2;
    }
    (!e3.updatedAt || e3.updatedAt <= n2) && (e3.updatedAt != null && `observers` in e3 ? le(e3, r2, true) : f && f.running && e3.pure ? (f.sources.has(e3) || (e3.value = r2), f.sources.add(e3), e3.tValue = r2) : e3.value = r2, e3.updatedAt = n2);
  }
  function de(e3, t2, n2, r2 = 1, i2) {
    let a2 = { fn: e3, state: r2, updatedAt: null, owned: null, sources: null, sourceSlots: null, cleanups: null, value: t2, owner: d, context: d ? d.context : null, pure: n2 };
    return f && f.running && (a2.state = 0, a2.tState = r2), d === null || d !== l && (f && f.running && d.pure ? d.tOwned ? d.tOwned.push(a2) : d.tOwned = [a2] : d.owned ? d.owned.push(a2) : d.owned = [a2]), a2;
  }
  function N(e3) {
    let t2 = f && f.running;
    if ((t2 ? e3.tState : e3.state) === 0) return;
    if ((t2 ? e3.tState : e3.state) === 2) return F(e3);
    if (e3.suspense && w(e3.suspense.inFallback)) return e3.suspense.effects.push(e3);
    let n2 = [e3];
    for (; (e3 = e3.owner) && (!e3.updatedAt || e3.updatedAt < g); ) {
      if (t2 && f.disposed.has(e3)) return;
      (t2 ? e3.tState : e3.state) && n2.push(e3);
    }
    for (let r2 = n2.length - 1; r2 >= 0; r2--) {
      if (e3 = n2[r2], t2) {
        let t3 = e3, i2 = n2[r2 + 1];
        for (; (t3 = t3.owner) && t3 !== i2; ) if (f.disposed.has(t3)) return;
      }
      if ((t2 ? e3.tState : e3.state) === 1) M(e3);
      else if ((t2 ? e3.tState : e3.state) === 2) {
        let t3 = m;
        m = null, P(() => F(e3, n2[0]), false), m = t3;
      }
    }
  }
  function P(e3, t2) {
    if (m) return e3();
    let n2 = false;
    t2 || (m = []), h2 ? n2 = true : h2 = [], g++;
    try {
      let t3 = e3();
      return fe(n2), t3;
    } catch (e4) {
      n2 || (h2 = null), m = null, ve(e4);
    }
  }
  function fe(e3) {
    if (m &&= (pe(m), null), e3) return;
    let t2;
    if (f) {
      if (!f.promises.size && !f.queue.size) {
        let e4 = f.sources, n3 = f.disposed;
        h2.push.apply(h2, f.effects), t2 = f.resolve;
        for (let e5 of h2) `tState` in e5 && (e5.state = e5.tState), delete e5.tState;
        f = null, P(() => {
          for (let e5 of n3) I(e5);
          for (let t3 of e4) {
            if (t3.value = t3.tValue, t3.owned) for (let e5 = 0, n4 = t3.owned.length; e5 < n4; e5++) I(t3.owned[e5]);
            t3.tOwned && (t3.owned = t3.tOwned), delete t3.tValue, delete t3.tOwned, t3.tState = 0;
          }
          O(false);
        }, false);
      } else if (f.running) {
        f.running = false, f.effects.push.apply(f.effects, h2), h2 = null, O(true);
        return;
      }
    }
    let n2 = h2;
    h2 = null, n2.length && P(() => c(n2), false), t2 && t2();
  }
  function pe(e3) {
    for (let t2 = 0; t2 < e3.length; t2++) N(e3[t2]);
  }
  function me(t2) {
    let r2, i2 = 0;
    for (r2 = 0; r2 < t2.length; r2++) {
      let e3 = t2[r2];
      e3.user ? t2[i2++] = e3 : N(e3);
    }
    if (e.context) {
      if (e.count) {
        e.effects ||= [], e.effects.push(...t2.slice(0, i2));
        return;
      }
      n();
    }
    for (e.effects && (e.done || !e.count) && (t2 = [...e.effects, ...t2], i2 += e.effects.length, delete e.effects), r2 = 0; r2 < i2; r2++) N(t2[r2]);
  }
  function F(e3, t2) {
    let n2 = f && f.running;
    n2 ? e3.tState = 0 : e3.state = 0;
    for (let r2 = 0; r2 < e3.sources.length; r2 += 1) {
      let i2 = e3.sources[r2];
      if (i2.sources) {
        let e4 = n2 ? i2.tState : i2.state;
        e4 === 1 ? i2 !== t2 && (!i2.updatedAt || i2.updatedAt < g) && N(i2) : e4 === 2 && F(i2, t2);
      }
    }
  }
  function he(e3) {
    let t2 = f && f.running;
    for (let n2 = 0; n2 < e3.observers.length; n2 += 1) {
      let r2 = e3.observers[n2];
      (t2 ? !r2.tState : !r2.state) && (t2 ? r2.tState = 2 : r2.state = 2, r2.pure ? m.push(r2) : h2.push(r2), r2.observers && he(r2));
    }
  }
  function I(e3) {
    let t2;
    if (e3.sources) for (; e3.sources.length; ) {
      let t3 = e3.sources.pop(), n2 = e3.sourceSlots.pop(), r2 = t3.observers;
      if (r2 && r2.length) {
        let e4 = r2.pop(), i2 = t3.observerSlots.pop();
        n2 < r2.length && (e4.sourceSlots[i2] = n2, r2[n2] = e4, t3.observerSlots[n2] = i2);
      }
    }
    if (e3.tOwned) {
      for (t2 = e3.tOwned.length - 1; t2 >= 0; t2--) I(e3.tOwned[t2]);
      delete e3.tOwned;
    }
    if (f && f.running && e3.pure) ge(e3, true);
    else if (e3.owned) {
      for (t2 = e3.owned.length - 1; t2 >= 0; t2--) I(e3.owned[t2]);
      e3.owned = null;
    }
    if (e3.cleanups) {
      for (t2 = e3.cleanups.length - 1; t2 >= 0; t2--) e3.cleanups[t2]();
      e3.cleanups = null;
    }
    f && f.running ? e3.tState = 0 : e3.state = 0;
  }
  function ge(e3, t2) {
    if (t2 || (e3.tState = 0, f.disposed.add(e3)), e3.owned) for (let t3 = 0; t3 < e3.owned.length; t3++) ge(e3.owned[t3]);
  }
  function _e(e3) {
    return e3 instanceof Error ? e3 : Error(typeof e3 == `string` ? e3 : `Unknown error`, { cause: e3 });
  }
  function ve(e3, t2 = d) {
    throw _e(e3);
  }
  function ye(e3) {
    if (typeof e3 == `function` && !e3.length) return ye(e3());
    if (Array.isArray(e3)) {
      let t2 = [];
      for (let n2 = 0; n2 < e3.length; n2++) {
        let r2 = ye(e3[n2]);
        Array.isArray(r2) ? t2.push.apply(t2, r2) : t2.push(r2);
      }
      return t2;
    }
    return e3;
  }
  function be(e3, t2) {
    return function(t3) {
      let n2;
      return b(() => n2 = w(() => (d.context = { ...d.context, [e3]: t3.value }, se(() => t3.children))), void 0), n2;
    };
  }
  function Se(e3) {
    for (let t2 = 0; t2 < e3.length; t2++) e3[t2]();
  }
  function Ce(e3, t2, n2 = {}) {
    let r2 = [], i2 = [], a2 = [], s3 = 0, c2 = t2.length > 1 ? [] : null;
    return T(() => Se(a2)), () => {
      let l3 = e3() || [], u2 = l3.length, d2, f2;
      return l3[o], w(() => {
        let e4, t3, o2, m2, h3, g2, v2, y2, b2;
        if (u2 === 0) s3 !== 0 && (Se(a2), a2 = [], r2 = [], i2 = [], s3 = 0, c2 &&= []), n2.fallback && (r2 = [xe], i2[0] = _((e5) => (a2[0] = e5, n2.fallback())), s3 = 1);
        else if (s3 === 0) {
          for (i2 = Array(u2), f2 = 0; f2 < u2; f2++) r2[f2] = l3[f2], i2[f2] = _(p3);
          s3 = u2;
        } else {
          for (o2 = Array(u2), m2 = Array(u2), c2 && (h3 = Array(u2)), g2 = 0, v2 = Math.min(s3, u2); g2 < v2 && r2[g2] === l3[g2]; g2++) ;
          for (v2 = s3 - 1, y2 = u2 - 1; v2 >= g2 && y2 >= g2 && r2[v2] === l3[y2]; v2--, y2--) o2[y2] = i2[v2], m2[y2] = a2[v2], c2 && (h3[y2] = c2[v2]);
          for (e4 = /* @__PURE__ */ new Map(), t3 = Array(y2 + 1), f2 = y2; f2 >= g2; f2--) b2 = l3[f2], d2 = e4.get(b2), t3[f2] = d2 === void 0 ? -1 : d2, e4.set(b2, f2);
          for (d2 = g2; d2 <= v2; d2++) b2 = r2[d2], f2 = e4.get(b2), f2 !== void 0 && f2 !== -1 ? (o2[f2] = i2[d2], m2[f2] = a2[d2], c2 && (h3[f2] = c2[d2]), f2 = t3[f2], e4.set(b2, f2)) : a2[d2]();
          for (f2 = g2; f2 < u2; f2++) f2 in o2 ? (i2[f2] = o2[f2], a2[f2] = m2[f2], c2 && (c2[f2] = h3[f2], c2[f2](f2))) : i2[f2] = _(p3);
          i2 = i2.slice(0, s3 = u2), r2 = l3.slice(0);
        }
        return i2;
      });
      function p3(e4) {
        if (a2[f2] = e4, c2) {
          let [e5, n3] = v(f2);
          return c2[f2] = n3, t2(l3[f2], e5);
        }
        return t2(l3[f2]);
      }
    };
  }
  function we(e3, t2, n2 = {}) {
    let r2 = [], i2 = [], a2 = [], s3 = [], c2 = 0, l3;
    return T(() => Se(a2)), () => {
      let u2 = e3() || [], d2 = u2.length;
      return u2[o], w(() => {
        if (d2 === 0) return c2 !== 0 && (Se(a2), a2 = [], r2 = [], i2 = [], c2 = 0, s3 = []), n2.fallback && (r2 = [xe], i2[0] = _((e4) => (a2[0] = e4, n2.fallback())), c2 = 1), i2;
        for (r2[0] === xe && (a2[0](), a2 = [], r2 = [], i2 = [], c2 = 0), l3 = 0; l3 < d2; l3++) l3 < r2.length && r2[l3] !== u2[l3] ? s3[l3](() => u2[l3]) : l3 >= r2.length && (i2[l3] = _(f2));
        for (; l3 < r2.length; l3++) a2[l3]();
        return c2 = s3.length = a2.length = d2, r2 = u2.slice(0), i2 = i2.slice(0, c2);
      });
      function f2(e4) {
        a2[l3] = e4;
        let [n3, r3] = v(u2[l3]);
        return s3[l3] = r3, t2(n3, l3);
      }
    };
  }
  function Te(e3, t2) {
    return w(() => e3(t2 || {}));
  }
  function Ee() {
    return true;
  }
  function Oe(e3) {
    return (e3 = typeof e3 == `function` ? e3() : e3) ? e3 : {};
  }
  function ke() {
    for (let e3 = 0, t2 = this.length; e3 < t2; ++e3) {
      let t3 = this[e3]();
      if (t3 !== void 0) return t3;
    }
  }
  function Ae(...e3) {
    let t2 = false;
    for (let n3 = 0; n3 < e3.length; n3++) {
      let r3 = e3[n3];
      t2 ||= !!r3 && i in r3, e3[n3] = typeof r3 == `function` ? (t2 = true, S(r3)) : r3;
    }
    if (a && t2) return new Proxy({ get(t3) {
      for (let n3 = e3.length - 1; n3 >= 0; n3--) {
        let r3 = Oe(e3[n3])[t3];
        if (r3 !== void 0) return r3;
      }
    }, has(t3) {
      for (let n3 = e3.length - 1; n3 >= 0; n3--) if (t3 in Oe(e3[n3])) return true;
      return false;
    }, keys() {
      let t3 = [];
      for (let n3 = 0; n3 < e3.length; n3++) t3.push(...Object.keys(Oe(e3[n3])));
      return [...new Set(t3)];
    } }, De);
    let n2 = {}, r2 = /* @__PURE__ */ Object.create(null);
    for (let t3 = e3.length - 1; t3 >= 0; t3--) {
      let i2 = e3[t3];
      if (!i2) continue;
      let a2 = Object.getOwnPropertyNames(i2);
      for (let e4 = a2.length - 1; e4 >= 0; e4--) {
        let t4 = a2[e4];
        if (t4 === `__proto__` || t4 === `constructor`) continue;
        let o3 = Object.getOwnPropertyDescriptor(i2, t4);
        if (!r2[t4]) r2[t4] = o3.get ? { enumerable: true, configurable: true, get: ke.bind(n2[t4] = [o3.get.bind(i2)]) } : o3.value === void 0 ? void 0 : o3;
        else {
          let e5 = n2[t4];
          e5 && (o3.get ? e5.push(o3.get.bind(i2)) : o3.value !== void 0 && e5.push(() => o3.value));
        }
      }
    }
    let o2 = {}, s3 = Object.keys(r2);
    for (let e4 = s3.length - 1; e4 >= 0; e4--) {
      let t3 = s3[e4], n3 = r2[t3];
      n3 && n3.get ? Object.defineProperty(o2, t3, n3) : o2[t3] = n3 ? n3.value : void 0;
    }
    return o2;
  }
  function je(e3, ...t2) {
    let n2 = t2.length;
    if (a && i in e3) {
      let r3 = n2 > 1 ? t2.flat() : t2[0], i2 = t2.map((t3) => new Proxy({ get(n3) {
        return t3.includes(n3) ? e3[n3] : void 0;
      }, has(n3) {
        return t3.includes(n3) && n3 in e3;
      }, keys() {
        return t3.filter((t4) => t4 in e3);
      } }, De));
      return i2.push(new Proxy({ get(t3) {
        return r3.includes(t3) ? void 0 : e3[t3];
      }, has(t3) {
        return !r3.includes(t3) && t3 in e3;
      }, keys() {
        return Object.keys(e3).filter((e4) => !r3.includes(e4));
      } }, De)), i2;
    }
    let r2 = [];
    for (let e4 = 0; e4 <= n2; e4++) r2[e4] = {};
    for (let i2 of Object.getOwnPropertyNames(e3)) {
      let a2 = n2;
      for (let e4 = 0; e4 < t2.length; e4++) if (t2[e4].includes(i2)) {
        a2 = e4;
        break;
      }
      let o2 = Object.getOwnPropertyDescriptor(e3, i2);
      !o2.get && !o2.set && o2.enumerable && o2.writable && o2.configurable ? r2[a2][i2] = o2.value : Object.defineProperty(r2[a2], i2, o2);
    }
    return r2;
  }
  function Me(t2) {
    let r2, i2, a2 = (a3) => {
      let o2 = e.context;
      if (o2) {
        let [a4, s4] = v();
        e.count ||= 0, e.count++, (i2 ||= t2()).then((t3) => {
          !e.done && n(o2), e.count--, s4(() => t3.default), n();
        }), r2 = a4;
      } else if (!r2) {
        let [e3] = te(() => (i2 ||= t2()).then((e4) => e4.default));
        r2 = e3;
      }
      let s3;
      return S(() => (s3 = r2()) ? w(() => {
        if (!o2 || e.done) return s3(a3);
        let t3 = e.context;
        n(o2);
        let r3 = s3(a3);
        return n(t3), r3;
      }) : ``);
    };
    return a2.preload = () => i2 || ((i2 = t2()).then((e3) => r2 = () => e3.default), i2), a2;
  }
  function Pe() {
    return e.context ? e.getNextContextId() : `cl-${Ne++}`;
  }
  function Ie(e3) {
    let t2 = `fallback` in e3 && { fallback: () => e3.fallback };
    return S(Ce(() => e3.each, e3.children, t2 || void 0));
  }
  function Le(e3) {
    let t2 = `fallback` in e3 && { fallback: () => e3.fallback };
    return S(we(() => e3.each, e3.children, t2 || void 0));
  }
  function Re(e3) {
    let t2 = e3.keyed, n2 = S(() => e3.when, void 0, void 0), r2 = t2 ? n2 : S(n2, void 0, { equals: (e4, t3) => !e4 == !t3 });
    return S(() => {
      let i2 = r2();
      if (i2) {
        let a2 = e3.children;
        return typeof a2 == `function` && a2.length > 0 ? w(() => a2(t2 ? i2 : () => {
          if (!w(r2)) throw Fe(`Show`);
          return n2();
        })) : a2;
      }
      return e3.fallback;
    }, void 0, void 0);
  }
  function ze(e3) {
    let t2 = se(() => e3.children), n2 = S(() => {
      let e4 = t2(), n3 = Array.isArray(e4) ? e4 : [e4], r2 = () => void 0;
      for (let e5 = 0; e5 < n3.length; e5++) {
        let t3 = e5, i2 = n3[e5], a2 = r2, o2 = S(() => a2() ? void 0 : i2.when, void 0, void 0), s3 = i2.keyed ? o2 : S(o2, void 0, { equals: (e6, t4) => !e6 == !t4 });
        r2 = () => a2() || (s3() ? [t3, o2, i2] : void 0);
      }
      return r2;
    });
    return S(() => {
      let t3 = n2()();
      if (!t3) return e3.fallback;
      let [r2, i2, a2] = t3, o2 = a2.children;
      return typeof o2 == `function` && o2.length > 0 ? w(() => o2(a2.keyed ? i2() : () => {
        if (w(n2)()?.[0] !== r2) throw Fe(`Match`);
        return i2();
      })) : o2;
    }, void 0, void 0);
  }
  function Be(e3) {
    return e3;
  }
  function Ge(e3, t2) {
    let n2 = We[e3];
    return typeof n2 == `object` ? n2[t2] ? n2.$ : void 0 : n2;
  }
  function Xe(e3, t2, n2) {
    let r2 = n2.length, i2 = t2.length, a2 = r2, o2 = 0, s3 = 0, c2 = t2[i2 - 1].nextSibling, l3 = null;
    for (; o2 < i2 || s3 < a2; ) {
      if (t2[o2] === n2[s3]) {
        o2++, s3++;
        continue;
      }
      for (; t2[i2 - 1] === n2[a2 - 1]; ) i2--, a2--;
      if (i2 === o2) {
        let t3 = a2 < r2 ? s3 ? n2[s3 - 1].nextSibling : n2[a2 - s3] : c2;
        for (; s3 < a2; ) e3.insertBefore(n2[s3++], t3);
      } else if (a2 === s3) for (; o2 < i2; ) (!l3 || !l3.has(t2[o2])) && t2[o2].remove(), o2++;
      else if (t2[o2] === n2[a2 - 1] && n2[s3] === t2[i2 - 1]) {
        let r3 = t2[--i2].nextSibling;
        e3.insertBefore(n2[s3++], t2[o2++].nextSibling), e3.insertBefore(n2[--a2], r3), t2[i2] = n2[a2];
      } else {
        if (!l3) {
          l3 = /* @__PURE__ */ new Map();
          let e4 = s3;
          for (; e4 < a2; ) l3.set(n2[e4], e4++);
        }
        let r3 = l3.get(t2[o2]);
        if (r3 != null) {
          if (s3 < r3 && r3 < a2) {
            let c3 = o2, u2 = 1, d2;
            for (; ++c3 < i2 && c3 < a2 && (d2 = l3.get(t2[c3])) != null && d2 === r3 + u2; ) u2++;
            if (u2 > r3 - s3) {
              let i3 = t2[o2];
              for (; s3 < r3; ) e3.insertBefore(n2[s3++], i3);
            } else e3.replaceChild(n2[s3++], t2[o2++]);
          } else o2++;
        } else t2[o2++].remove();
      }
    }
  }
  function Ze(e3, t2, n2, r2 = {}) {
    let i2;
    return _((r3) => {
      i2 = r3, t2 === document ? e3() : z(t2, e3(), t2.firstChild ? null : void 0, n2);
    }, r2.owner), () => {
      i2(), t2.textContent = ``;
    };
  }
  function Qe(e3, t2, n2, r2) {
    let i2, a2 = () => {
      let t3 = r2 ? document.createElementNS(`http://www.w3.org/1998/Math/MathML`, `template`) : document.createElement(`template`);
      return t3.innerHTML = e3, n2 ? t3.content.firstChild.firstChild : r2 ? t3.firstChild : t3.content.firstChild;
    }, o2 = t2 ? () => w(() => document.importNode(i2 ||= a2(), true)) : () => (i2 ||= a2()).cloneNode(true);
    return o2.cloneNode = o2, o2;
  }
  function $e(e3, t2 = window.document) {
    let n2 = t2[L] || (t2[L] = /* @__PURE__ */ new Set());
    for (let r2 = 0, i2 = e3.length; r2 < i2; r2++) {
      let i3 = e3[r2];
      n2.has(i3) || (n2.add(i3), t2.addEventListener(i3, ht));
    }
  }
  function et(e3 = window.document) {
    if (e3[L]) {
      for (let t2 of e3[L].keys()) e3.removeEventListener(t2, ht);
      delete e3[L];
    }
  }
  function R(e3, t2, n2) {
    B(e3) || (n2 == null ? e3.removeAttribute(t2) : e3.setAttribute(t2, n2));
  }
  function tt2(e3, t2, n2, r2) {
    B(e3) || (r2 == null ? e3.removeAttributeNS(t2, n2) : e3.setAttributeNS(t2, n2, r2));
  }
  function nt(e3, t2, n2) {
    B(e3) || (n2 ? e3.setAttribute(t2, ``) : e3.removeAttribute(t2));
  }
  function rt(e3, t2) {
    B(e3) || (t2 == null ? e3.removeAttribute(`class`) : e3.className = t2);
  }
  function it(e3, t2, n2, r2) {
    if (r2) Array.isArray(n2) ? (e3[`$$${t2}`] = n2[0], e3[`$$${t2}Data`] = n2[1]) : e3[`$$${t2}`] = n2;
    else if (Array.isArray(n2)) {
      let r3 = n2[0];
      e3.addEventListener(t2, n2[0] = (t3) => r3.call(e3, n2[1], t3));
    } else e3.addEventListener(t2, n2, typeof n2 != `function` && n2);
  }
  function at(e3, t2, n2 = {}) {
    let r2 = Object.keys(t2 || {}), i2 = Object.keys(n2), a2, o2;
    for (a2 = 0, o2 = i2.length; a2 < o2; a2++) {
      let r3 = i2[a2];
      !r3 || r3 === `undefined` || t2[r3] || (pt(e3, r3, false), delete n2[r3]);
    }
    for (a2 = 0, o2 = r2.length; a2 < o2; a2++) {
      let i3 = r2[a2], o3 = !!t2[i3];
      !i3 || i3 === `undefined` || n2[i3] === o3 || !o3 || (pt(e3, i3, true), n2[i3] = o3);
    }
    return n2;
  }
  function ot(e3, t2, n2) {
    if (!t2) return n2 ? R(e3, `style`) : t2;
    let r2 = e3.style;
    if (typeof t2 == `string`) return r2.cssText = t2;
    typeof n2 == `string` && (r2.cssText = n2 = void 0), n2 ||= {}, t2 ||= {};
    let i2, a2;
    for (a2 in n2) t2[a2] ?? r2.removeProperty(a2), delete n2[a2];
    for (a2 in t2) i2 = t2[a2], i2 !== n2[a2] && (r2.setProperty(a2, i2), n2[a2] = i2);
    return n2;
  }
  function st(e3, t2, n2) {
    n2 == null ? e3.style.removeProperty(t2) : e3.style.setProperty(t2, n2);
  }
  function ct(e3, t2 = {}, n2, r2) {
    let i2 = {};
    return r2 || b(() => i2.children = V(e3, t2.children, i2.children)), b(() => typeof t2.ref == `function` && lt(t2.ref, e3)), b(() => ut(e3, t2, n2, true, i2, true)), i2;
  }
  function lt(e3, t2, n2) {
    return w(() => e3(t2, n2));
  }
  function z(e3, t2, n2, r2) {
    if (n2 !== void 0 && !r2 && (r2 = []), typeof t2 != `function`) return V(e3, t2, r2, n2);
    b((r3) => V(e3, t2(), r3, n2), r2);
  }
  function ut(e3, t2, n2, r2, i2 = {}, a2 = false) {
    t2 ||= {};
    for (let r3 in i2) if (!(r3 in t2)) {
      if (r3 === `children`) continue;
      i2[r3] = mt(e3, r3, null, i2[r3], n2, a2, t2);
    }
    for (let o2 in t2) {
      if (o2 === `children`) {
        r2 || V(e3, t2.children);
        continue;
      }
      let s3 = t2[o2];
      i2[o2] = mt(e3, o2, s3, i2[o2], n2, a2, t2);
    }
  }
  function dt(t2) {
    let n2, r2;
    return !B() || !(n2 = e.registry.get(r2 = vt())) ? t2() : (e.completed && e.completed.add(n2), e.registry.delete(r2), n2);
  }
  function B(t2) {
    return !!e.context && !e.done && (!t2 || t2.isConnected);
  }
  function ft(e3) {
    return e3.toLowerCase().replace(/-([a-z])/g, (e4, t2) => t2.toUpperCase());
  }
  function pt(e3, t2, n2) {
    let r2 = t2.trim().split(/\s+/);
    for (let t3 = 0, i2 = r2.length; t3 < i2; t3++) e3.classList.toggle(r2[t3], n2);
  }
  function mt(e3, t2, n2, r2, i2, a2, o2) {
    let s3, c2, l3, u2, d2;
    if (t2 === `style`) return ot(e3, n2, r2);
    if (t2 === `classList`) return at(e3, n2, r2);
    if (n2 === r2) return r2;
    if (t2 === `ref`) a2 || n2(e3);
    else if (t2.slice(0, 3) === `on:`) {
      let i3 = t2.slice(3);
      r2 && e3.removeEventListener(i3, r2, typeof r2 != `function` && r2), n2 && e3.addEventListener(i3, n2, typeof n2 != `function` && n2);
    } else if (t2.slice(0, 10) === `oncapture:`) {
      let i3 = t2.slice(10);
      r2 && e3.removeEventListener(i3, r2, true), n2 && e3.addEventListener(i3, n2, true);
    } else if (t2.slice(0, 2) === `on`) {
      let i3 = t2.slice(2).toLowerCase(), a3 = Ke.has(i3);
      if (!a3 && r2) {
        let t3 = Array.isArray(r2) ? r2[0] : r2;
        e3.removeEventListener(i3, t3);
      }
      (a3 || n2) && (it(e3, i3, n2, a3), a3 && $e([i3]));
    } else if (t2.slice(0, 5) === `attr:`) R(e3, t2.slice(5), n2);
    else if (t2.slice(0, 5) === `bool:`) nt(e3, t2.slice(5), n2);
    else if ((d2 = t2.slice(0, 5) === `prop:`) || (l3 = He.has(t2)) || !i2 && ((u2 = Ge(t2, e3.tagName)) || (c2 = Ve.has(t2))) || (s3 = e3.nodeName.includes(`-`) || `is` in o2)) {
      if (d2) t2 = t2.slice(5), c2 = true;
      else if (B(e3)) return n2;
      t2 === `class` || t2 === `className` ? rt(e3, n2) : s3 && !c2 && !l3 ? e3[ft(t2)] = n2 : e3[u2 || t2] = n2;
    } else {
      let r3 = i2 && t2.indexOf(`:`) > -1 && Je[t2.split(`:`)[0]];
      r3 ? tt2(e3, r3, t2, n2) : R(e3, Ue[t2] || t2, n2);
    }
    return n2;
  }
  function ht(t2) {
    if (e.registry && e.events && e.events.find(([e3, n3]) => n3 === t2)) return;
    let n2 = t2.target, r2 = `$$${t2.type}`, i2 = t2.target, a2 = t2.currentTarget, o2 = (e3) => Object.defineProperty(t2, "target", { configurable: true, value: e3 }), s3 = () => {
      let e3 = n2[r2];
      if (e3 && !n2.disabled) {
        let i3 = n2[`${r2}Data`];
        if (i3 === void 0 ? e3.call(n2, t2) : e3.call(n2, i3, t2), t2.cancelBubble) return;
      }
      return n2.host && typeof n2.host != `string` && !n2.host._$host && n2.contains(t2.target) && o2(n2.host), true;
    }, c2 = () => {
      for (; s3() && (n2 = n2._$host || n2.parentNode || n2.host); ) ;
    };
    if (Object.defineProperty(t2, "currentTarget", { configurable: true, get() {
      return n2 || document;
    } }), e.registry && !e.done && (e.done = _$HY.done = true), t2.composedPath) {
      let e3 = t2.composedPath();
      o2(e3[0]);
      for (let t3 = 0; t3 < e3.length - 2 && (n2 = e3[t3], s3()); t3++) {
        if (n2._$host) {
          n2 = n2._$host, c2();
          break;
        }
        if (n2.parentNode === a2) break;
      }
    } else c2();
    o2(i2);
  }
  function V(e3, t2, n2, r2, i2) {
    let a2 = B(e3);
    if (a2) {
      !n2 && (n2 = [...e3.childNodes]);
      let t3 = [];
      for (let e4 = 0; e4 < n2.length; e4++) {
        let r3 = n2[e4];
        r3.nodeType === 8 && r3.data.slice(0, 2) === `!$` ? r3.remove() : t3.push(r3);
      }
      n2 = t3;
    }
    for (; typeof n2 == `function`; ) n2 = n2();
    if (t2 === n2) return n2;
    let o2 = typeof t2, s3 = r2 !== void 0;
    if (e3 = s3 && n2[0] && n2[0].parentNode || e3, o2 === `string` || o2 === `number`) {
      if (a2 || o2 === `number` && (t2 = t2.toString(), t2 === n2)) return n2;
      if (s3) {
        let i3 = n2[0];
        i3 && i3.nodeType === 3 ? i3.data !== t2 && (i3.data = t2) : i3 = document.createTextNode(t2), n2 = H(e3, n2, r2, i3);
      } else n2 = n2 !== `` && typeof n2 == `string` ? e3.firstChild.data = t2 : e3.textContent = t2;
    } else if (t2 == null || o2 === `boolean`) {
      if (a2) return n2;
      n2 = H(e3, n2, r2);
    } else if (o2 === `function`) return b(() => {
      let i3 = t2();
      for (; typeof i3 == `function`; ) i3 = i3();
      n2 = V(e3, i3, n2, r2);
    }), () => n2;
    else if (Array.isArray(t2)) {
      let o3 = [], c2 = n2 && Array.isArray(n2);
      if (gt(o3, t2, n2, i2)) return b(() => n2 = V(e3, o3, n2, r2, true)), () => n2;
      if (a2) {
        if (!o3.length) return n2;
        if (r2 === void 0) return n2 = [...e3.childNodes];
        let t3 = o3[0];
        if (t3.parentNode !== e3) return n2;
        let i3 = [t3];
        for (; (t3 = t3.nextSibling) !== r2; ) i3.push(t3);
        return n2 = i3;
      }
      if (o3.length === 0) {
        if (n2 = H(e3, n2, r2), s3) return n2;
      } else c2 ? n2.length === 0 ? _t(e3, o3, r2) : Xe(e3, n2, o3) : (n2 && H(e3), _t(e3, o3));
      n2 = o3;
    } else if (t2.nodeType) {
      if (a2 && t2.parentNode) return n2 = s3 ? [t2] : t2;
      if (Array.isArray(n2)) {
        if (s3) return n2 = H(e3, n2, r2, t2);
        H(e3, n2, null, t2);
      } else n2 == null || n2 === `` || !e3.firstChild ? e3.appendChild(t2) : e3.replaceChild(t2, e3.firstChild);
      n2 = t2;
    }
    return n2;
  }
  function gt(e3, t2, n2, r2) {
    let i2 = false;
    for (let a2 = 0, o2 = t2.length; a2 < o2; a2++) {
      let o3 = t2[a2], s3 = n2 && n2[e3.length], c2;
      if (o3 != null && o3 !== true && o3 !== false) {
        if ((c2 = typeof o3) == `object` && o3.nodeType) e3.push(o3);
        else if (Array.isArray(o3)) i2 = gt(e3, o3, s3) || i2;
        else if (c2 === `function`) {
          if (r2) {
            for (; typeof o3 == `function`; ) o3 = o3();
            i2 = gt(e3, Array.isArray(o3) ? o3 : [o3], Array.isArray(s3) ? s3 : [s3]) || i2;
          } else e3.push(o3), i2 = true;
        } else {
          let t3 = String(o3);
          s3 && s3.nodeType === 3 && s3.data === t3 ? e3.push(s3) : e3.push(document.createTextNode(t3));
        }
      }
    }
    return i2;
  }
  function _t(e3, t2, n2 = null) {
    for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) e3.insertBefore(t2[r2], n2);
  }
  function H(e3, t2, n2, r2) {
    if (n2 === void 0) return e3.textContent = ``;
    let i2 = r2 || document.createTextNode(``);
    if (t2.length) {
      let r3 = false;
      for (let a2 = t2.length - 1; a2 >= 0; a2--) {
        let o2 = t2[a2];
        if (i2 !== o2) {
          let t3 = o2.parentNode === e3;
          !r3 && !a2 ? t3 ? e3.replaceChild(i2, o2) : e3.insertBefore(i2, n2) : t3 && o2.remove();
        } else r3 = true;
      }
    } else e3.insertBefore(i2, n2);
    return [i2];
  }
  function vt() {
    return e.getNextContextId();
  }
  function yt(e3, t2 = false, n2 = void 0) {
    return t2 ? document.createElementNS(`http://www.w3.org/2000/svg`, e3) : document.createElement(e3, { is: n2 });
  }
  function bt(t2) {
    let { useShadow: n2 } = t2, r2 = document.createTextNode(``), i2 = () => t2.mount || document.body, a2 = E(), o2, s3 = !!e.context;
    return x(() => {
      s3 && (E().user = s3 = false), o2 ||= ie(a2, () => S(() => t2.children));
      let e3 = i2();
      if (e3 instanceof HTMLHeadElement) {
        let [t3, n3] = v(false);
        _((n4) => z(e3, () => t3() ? n4() : o2(), null)), T(() => n3(true));
      } else {
        let i3 = yt(t2.isSVG ? `g` : `div`, t2.isSVG), a3 = n2 && i3.attachShadow ? i3.attachShadow({ mode: `open` }) : i3;
        Object.defineProperty(i3, "_$host", { get() {
          return r2.parentNode;
        }, configurable: true }), z(a3, o2), e3.appendChild(i3), t2.ref && t2.ref(i3), T(() => e3.removeChild(i3));
      }
    }, void 0, { render: !s3 }), r2;
  }
  function xt(t2, n2) {
    let r2 = S(t2);
    return S(() => {
      let t3 = r2();
      switch (typeof t3) {
        case `function`:
          return w(() => t3(n2));
        case `string`:
          let r3 = qe.has(t3), i2 = e.context ? dt() : yt(t3, r3, w(() => n2.is));
          return ct(i2, n2, r3), i2;
      }
    });
  }
  function St(e3) {
    let [, t2] = je(e3, [`component`]);
    return xt(() => e3.component, t2);
  }
  function Et(e3) {
    if (`values` in Object) return Object.values(e3);
    let t2 = [];
    for (let n2 in e3) e3.hasOwnProperty(n2) && t2.push(e3[n2]);
    return t2;
  }
  function Dt(e3, t2) {
    let n2 = Et(e3);
    if (`find` in n2) return n2.find(t2);
    let r2 = n2;
    for (let e4 = 0; e4 < r2.length; e4++) {
      let n3 = r2[e4];
      if (t2(n3)) return n3;
    }
  }
  function U(e3, t2) {
    Object.entries(e3).forEach(([e4, n2]) => t2(n2, e4));
  }
  function Ot(e3, t2) {
    return e3.indexOf(t2) !== -1;
  }
  function kt(e3, t2) {
    for (let n2 = 0; n2 < e3.length; n2++) {
      let r2 = e3[n2];
      if (t2(r2)) return r2;
    }
  }
  function Y(e3, t2, n2, r2) {
    return { isApplicable: e3, annotation: t2, transform: n2, untransform: r2 };
  }
  function Zt(e3, t2, n2, r2) {
    return { isApplicable: e3, annotation: t2, transform: n2, untransform: r2 };
  }
  function tn(e3, t2) {
    return e3?.constructor ? !!t2.classRegistry.getIdentifier(e3.constructor) : false;
  }
  function ln(e3) {
    if (Ot(e3, `__proto__`)) throw Error(`__proto__ is not allowed as a property`);
    if (Ot(e3, `prototype`)) throw Error(`prototype is not allowed as a property`);
    if (Ot(e3, `constructor`)) throw Error(`constructor is not allowed as a property`);
  }
  function pn(e3, t2, n2, r2 = []) {
    if (!e3) return;
    let i2 = fn(n2);
    if (!G(e3)) {
      U(e3, (e4, a3) => pn(e4, t2, n2, [...r2, ...J(a3, i2)]));
      return;
    }
    let [a2, o2] = e3;
    o2 && U(o2, (e4, a3) => {
      pn(e4, t2, n2, [...r2, ...J(a3, i2)]);
    }), t2(a2, r2);
  }
  function mn(e3, t2, n2, r2) {
    return pn(t2, (t3, n3) => {
      e3 = dn(e3, n3, (e4) => cn(e4, t3, r2));
    }, n2), e3;
  }
  function hn(e3, t2, n2) {
    let r2 = fn(n2);
    function i2(t3, n3) {
      let i3 = un(e3, J(n3, r2));
      t3.map((e4) => J(e4, r2)).forEach((t4) => {
        e3 = dn(e3, t4, () => i3);
      });
    }
    if (G(t2)) {
      let [n3, a2] = t2;
      n3.forEach((t3) => {
        e3 = dn(e3, J(t3, r2), () => e3);
      }), a2 && U(a2, i2);
    } else U(t2, i2);
    return e3;
  }
  function _n(e3, t2, n2) {
    let r2 = n2.get(e3);
    r2 ? r2.push(t2) : n2.set(e3, [t2]);
  }
  function vn(e3, t2) {
    let n2 = {}, r2;
    return e3.forEach((e4) => {
      if (e4.length <= 1) return;
      t2 || (e4 = e4.map((e5) => e5.map(String)).sort((e5, t3) => e5.length - t3.length));
      let [i2, ...a2] = e4;
      i2.length === 0 ? r2 = a2.map(Yt) : n2[Yt(i2)] = a2.map(Yt);
    }), r2 ? Pt(n2) ? [r2] : [r2, n2] : Pt(n2) ? void 0 : n2;
  }
  function bn(e3) {
    return Object.prototype.toString.call(e3).slice(8, -1);
  }
  function xn(e3) {
    return bn(e3) === `Array`;
  }
  function Sn(e3) {
    if (bn(e3) !== `Object`) return false;
    let t2 = Object.getPrototypeOf(e3);
    return !!t2 && t2.constructor === Object && t2 === Object.prototype;
  }
  function Cn(e3, t2, n2, r2, i2) {
    let a2 = {}.propertyIsEnumerable.call(r2, t2) ? `enumerable` : `nonenumerable`;
    a2 === `enumerable` && (e3[t2] = n2), i2 && a2 === `nonenumerable` && Object.defineProperty(e3, t2, { value: n2, enumerable: false, writable: true, configurable: true });
  }
  function wn(e3, t2 = {}) {
    if (xn(e3)) return e3.map((e4) => wn(e4, t2));
    if (!Sn(e3)) return e3;
    let n2 = Object.getOwnPropertyNames(e3), r2 = Object.getOwnPropertySymbols(e3);
    return [...n2, ...r2].reduce((n3, r3) => {
      if (r3 === `__proto__` || xn(t2.props) && !t2.props.includes(r3)) return n3;
      let i2 = e3[r3];
      return Cn(n3, r3, wn(i2, t2), e3, t2.nonenumerable), n3;
    }, {});
  }
  function Dn(e3) {
    return e3.state.fetchStatus === `fetching` ? `fetching` : e3.getObserversCount() ? e3.state.fetchStatus === `paused` ? `paused` : e3.isStale() ? `stale` : `fresh` : `inactive`;
  }
  function kn({ queryState: e3, observerCount: t2, isStale: n2 }) {
    return e3?.fetchStatus === `fetching` ? `blue` : t2 ? e3?.fetchStatus === `paused` ? `purple` : n2 ? `yellow` : `green` : `gray`;
  }
  function An({ status: e3, isPaused: t2 }) {
    return t2 ? `purple` : e3 === `error` ? `red` : e3 === `pending` ? `yellow` : e3 === `success` ? `green` : `gray`;
  }
  function jn(e3) {
    return e3 === `fresh` ? `green` : e3 === `stale` ? `yellow` : e3 === `paused` ? `purple` : e3 === `inactive` ? `gray` : `blue`;
  }
  var e, r, i, a, o, s, c, l, u, d, f, p2, m, h2, g, D, O, j, xe, De, Ne, Fe, Ve, He, Ue, We, Ke, qe, Je, Ye, L, Ct, wt, Tt, At, jt, Mt, Nt, W, Pt, G, Ft, It, Lt, Rt, K, q, zt, Bt, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, J, Xt, Qt, $t, en, nn, rn, an, on, sn, cn, X, un, dn, fn, gn, yn, Z, Tn, En, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Vn, Q, $, Hn;
  var init_utils_BPMMmTje = __esm({
    "../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/utils-BPMMmTje.js"() {
      e = { context: void 0, registry: void 0, effects: void 0, done: false, getContextId() {
        return t(this.context.count);
      }, getNextContextId() {
        return t(this.context.count++);
      } };
      r = (e3, t2) => e3 === t2;
      i = Symbol(`solid-proxy`);
      a = typeof Proxy == `function`;
      o = Symbol(`solid-track`);
      s = { equals: r };
      c = pe;
      l = { owned: null, cleanups: null, context: null, owner: null };
      u = {};
      d = null;
      f = null;
      p2 = null;
      m = null;
      h2 = null;
      g = 0;
      [D, O] = v(false);
      xe = Symbol(`fallback`);
      De = { get(e3, t2, n2) {
        return t2 === i ? n2 : e3.get(t2);
      }, has(e3, t2) {
        return t2 === i || e3.has(t2);
      }, set: Ee, deleteProperty: Ee, getOwnPropertyDescriptor(e3, t2) {
        return { configurable: true, enumerable: true, get() {
          return e3.get(t2);
        }, set: Ee, deleteProperty: Ee };
      }, ownKeys(e3) {
        return e3.keys();
      } };
      Ne = 0;
      Fe = (e3) => `Stale read from <${e3}>.`;
      Ve = /* @__PURE__ */ new Set([`className`, `value`, `readOnly`, `noValidate`, `formNoValidate`, `isMap`, `noModule`, `playsInline`, `adAuctionHeaders`, `allowFullscreen`, `browsingTopics`, `defaultChecked`, `defaultMuted`, `defaultSelected`, `disablePictureInPicture`, `disableRemotePlayback`, `preservesPitch`, `shadowRootClonable`, `shadowRootCustomElementRegistry`, `shadowRootDelegatesFocus`, `shadowRootSerializable`, `sharedStorageWritable`, ...`allowfullscreen.async.alpha.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.hidden.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.adauctionheaders.browsingtopics.credentialless.defaultchecked.defaultmuted.defaultselected.defer.disablepictureinpicture.disableremoteplayback.preservespitch.shadowrootclonable.shadowrootcustomelementregistry.shadowrootdelegatesfocus.shadowrootserializable.sharedstoragewritable`.split(`.`)]);
      He = /* @__PURE__ */ new Set([`innerHTML`, `textContent`, `innerText`, `children`]);
      Ue = Object.assign(/* @__PURE__ */ Object.create(null), { className: `class`, htmlFor: `for` });
      We = Object.assign(/* @__PURE__ */ Object.create(null), { class: `className`, novalidate: { $: `noValidate`, FORM: 1 }, formnovalidate: { $: `formNoValidate`, BUTTON: 1, INPUT: 1 }, ismap: { $: `isMap`, IMG: 1 }, nomodule: { $: `noModule`, SCRIPT: 1 }, playsinline: { $: `playsInline`, VIDEO: 1 }, readonly: { $: `readOnly`, INPUT: 1, TEXTAREA: 1 }, adauctionheaders: { $: `adAuctionHeaders`, IFRAME: 1 }, allowfullscreen: { $: `allowFullscreen`, IFRAME: 1 }, browsingtopics: { $: `browsingTopics`, IMG: 1 }, defaultchecked: { $: `defaultChecked`, INPUT: 1 }, defaultmuted: { $: `defaultMuted`, AUDIO: 1, VIDEO: 1 }, defaultselected: { $: `defaultSelected`, OPTION: 1 }, disablepictureinpicture: { $: `disablePictureInPicture`, VIDEO: 1 }, disableremoteplayback: { $: `disableRemotePlayback`, AUDIO: 1, VIDEO: 1 }, preservespitch: { $: `preservesPitch`, AUDIO: 1, VIDEO: 1 }, shadowrootclonable: { $: `shadowRootClonable`, TEMPLATE: 1 }, shadowrootdelegatesfocus: { $: `shadowRootDelegatesFocus`, TEMPLATE: 1 }, shadowrootserializable: { $: `shadowRootSerializable`, TEMPLATE: 1 }, sharedstoragewritable: { $: `sharedStorageWritable`, IFRAME: 1, IMG: 1 } });
      Ke = /* @__PURE__ */ new Set([`beforeinput`, `click`, `dblclick`, `contextmenu`, `focusin`, `focusout`, `input`, `keydown`, `keyup`, `mousedown`, `mousemove`, `mouseout`, `mouseover`, `mouseup`, `pointerdown`, `pointermove`, `pointerout`, `pointerover`, `pointerup`, `touchend`, `touchmove`, `touchstart`]);
      qe = new Set(`altGlyph.altGlyphDef.altGlyphItem.animate.animateColor.animateMotion.animateTransform.circle.clipPath.color-profile.cursor.defs.desc.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.font.font-face.font-face-format.font-face-name.font-face-src.font-face-uri.foreignObject.g.glyph.glyphRef.hkern.image.line.linearGradient.marker.mask.metadata.missing-glyph.mpath.path.pattern.polygon.polyline.radialGradient.rect.set.stop.svg.switch.symbol.text.textPath.tref.tspan.use.view.vkern`.split(`.`));
      Je = { xlink: `http://www.w3.org/1999/xlink`, xml: `http://www.w3.org/XML/1998/namespace` };
      Ye = (e3) => S(() => e3());
      L = `_$DX_DELEGATE`;
      Ct = class {
        constructor() {
          this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
        }
        set(e3, t2) {
          this.keyToValue.set(e3, t2), this.valueToKey.set(t2, e3);
        }
        getByKey(e3) {
          return this.keyToValue.get(e3);
        }
        getByValue(e3) {
          return this.valueToKey.get(e3);
        }
        clear() {
          this.keyToValue.clear(), this.valueToKey.clear();
        }
      };
      wt = class {
        constructor(e3) {
          this.generateIdentifier = e3, this.kv = new Ct();
        }
        register(e3, t2) {
          this.kv.getByValue(e3) || (t2 ||= this.generateIdentifier(e3), this.kv.set(t2, e3));
        }
        clear() {
          this.kv.clear();
        }
        getIdentifier(e3) {
          return this.kv.getByValue(e3);
        }
        getValue(e3) {
          return this.kv.getByKey(e3);
        }
      };
      Tt = class extends wt {
        constructor() {
          super((e3) => e3.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
        }
        register(e3, t2) {
          typeof t2 == `object` ? (t2.allowProps && this.classToAllowedProps.set(e3, t2.allowProps), super.register(e3, t2.identifier)) : super.register(e3, t2);
        }
        getAllowedProps(e3) {
          return this.classToAllowedProps.get(e3);
        }
      };
      At = class {
        constructor() {
          this.transfomers = {};
        }
        register(e3) {
          this.transfomers[e3.name] = e3;
        }
        findApplicable(e3) {
          return Dt(this.transfomers, (t2) => t2.isApplicable(e3));
        }
        findByName(e3) {
          return this.transfomers[e3];
        }
      };
      jt = (e3) => Object.prototype.toString.call(e3).slice(8, -1);
      Mt = (e3) => e3 === void 0;
      Nt = (e3) => e3 === null;
      W = (e3) => typeof e3 != `object` || !e3 || e3 === Object.prototype ? false : Object.getPrototypeOf(e3) === null || Object.getPrototypeOf(e3) === Object.prototype;
      Pt = (e3) => W(e3) && Object.keys(e3).length === 0;
      G = (e3) => Array.isArray(e3);
      Ft = (e3) => typeof e3 == `string`;
      It = (e3) => typeof e3 == `number` && !isNaN(e3);
      Lt = (e3) => typeof e3 == `boolean`;
      Rt = (e3) => e3 instanceof RegExp;
      K = (e3) => e3 instanceof Map;
      q = (e3) => e3 instanceof Set;
      zt = (e3) => jt(e3) === `Symbol`;
      Bt = (e3) => e3 instanceof Date && !isNaN(e3.valueOf());
      Vt = (e3) => e3 instanceof Error;
      Ht = (e3) => typeof e3 == `number` && isNaN(e3);
      Ut = (e3) => Lt(e3) || Nt(e3) || Mt(e3) || It(e3) || Ft(e3) || zt(e3);
      Wt = (e3) => typeof e3 == `bigint`;
      Gt = (e3) => e3 === 1 / 0 || e3 === -1 / 0;
      Kt = (e3) => ArrayBuffer.isView(e3) && !(e3 instanceof DataView);
      qt = (e3) => e3 instanceof URL;
      Jt = (e3) => e3.replace(/\\/g, `\\\\`).replace(/\./g, `\\.`);
      Yt = (e3) => e3.map(String).map(Jt).join(`.`);
      J = (e3, t2) => {
        let n2 = [], r2 = ``;
        for (let i3 = 0; i3 < e3.length; i3++) {
          let a2 = e3.charAt(i3);
          if (!t2 && a2 === `\\`) {
            let t3 = e3.charAt(i3 + 1);
            if (t3 === `\\`) {
              r2 += `\\`, i3++;
              continue;
            }
            if (t3 !== `.`) throw Error(`invalid path`);
          }
          if (a2 === `\\` && e3.charAt(i3 + 1) === `.`) {
            r2 += `.`, i3++;
            continue;
          }
          if (a2 === `.`) {
            n2.push(r2), r2 = ``;
            continue;
          }
          r2 += a2;
        }
        let i2 = r2;
        return n2.push(i2), n2;
      };
      Xt = [Y(Mt, `undefined`, () => null, () => void 0), Y(Wt, `bigint`, (e3) => e3.toString(), (e3) => typeof BigInt < `u` ? BigInt(e3) : e3), Y(Bt, `Date`, (e3) => e3.toISOString(), (e3) => new Date(e3)), Y(Vt, `Error`, (e3, t2) => {
        let n2 = { name: e3.name, message: e3.message };
        return `cause` in e3 && (n2.cause = e3.cause), t2.allowedErrorProps.forEach((t3) => {
          n2[t3] = e3[t3];
        }), n2;
      }, (e3, t2) => {
        let n2 = Error(e3.message, { cause: e3.cause });
        return n2.name = e3.name, n2.stack = e3.stack, t2.allowedErrorProps.forEach((t3) => {
          n2[t3] = e3[t3];
        }), n2;
      }), Y(Rt, `regexp`, (e3) => `` + e3, (e3) => {
        let t2 = e3.slice(1, e3.lastIndexOf(`/`)), n2 = e3.slice(e3.lastIndexOf(`/`) + 1);
        return new RegExp(t2, n2);
      }), Y(q, `set`, (e3) => [...e3.values()], (e3) => new Set(e3)), Y(K, `map`, (e3) => [...e3.entries()], (e3) => new Map(e3)), Y((e3) => Ht(e3) || Gt(e3), `number`, (e3) => Ht(e3) ? `NaN` : e3 > 0 ? `Infinity` : `-Infinity`, Number), Y((e3) => e3 === 0 && 1 / e3 == -1 / 0, `number`, () => `-0`, Number), Y(qt, `URL`, (e3) => e3.toString(), (e3) => new URL(e3))];
      Qt = Zt((e3, t2) => zt(e3) ? !!t2.symbolRegistry.getIdentifier(e3) : false, (e3, t2) => [`symbol`, t2.symbolRegistry.getIdentifier(e3)], (e3) => e3.description, (e3, t2, n2) => {
        let r2 = n2.symbolRegistry.getValue(t2[1]);
        if (!r2) throw Error(`Trying to deserialize unknown symbol`);
        return r2;
      });
      $t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce((e3, t2) => (e3[t2.name] = t2, e3), {});
      en = Zt(Kt, (e3) => [`typed-array`, e3.constructor.name], (e3) => [...e3], (e3, t2) => {
        let n2 = $t[t2[1]];
        if (!n2) throw Error(`Trying to deserialize unknown typed array`);
        return new n2(e3);
      });
      nn = Zt(tn, (e3, t2) => [`class`, t2.classRegistry.getIdentifier(e3.constructor)], (e3, t2) => {
        let n2 = t2.classRegistry.getAllowedProps(e3.constructor);
        if (!n2) return { ...e3 };
        let r2 = {};
        return n2.forEach((t3) => {
          r2[t3] = e3[t3];
        }), r2;
      }, (e3, t2, n2) => {
        let r2 = n2.classRegistry.getValue(t2[1]);
        if (!r2) throw Error(`Trying to deserialize unknown class '${t2[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
        return Object.assign(Object.create(r2.prototype), e3);
      });
      rn = Zt((e3, t2) => !!t2.customTransformerRegistry.findApplicable(e3), (e3, t2) => [`custom`, t2.customTransformerRegistry.findApplicable(e3).name], (e3, t2) => t2.customTransformerRegistry.findApplicable(e3).serialize(e3), (e3, t2, n2) => {
        let r2 = n2.customTransformerRegistry.findByName(t2[1]);
        if (!r2) throw Error(`Trying to deserialize unknown custom value`);
        return r2.deserialize(e3);
      });
      an = [nn, Qt, rn, en];
      on = (e3, t2) => {
        let n2 = kt(an, (n3) => n3.isApplicable(e3, t2));
        if (n2) return { value: n2.transform(e3, t2), type: n2.annotation(e3, t2) };
        let r2 = kt(Xt, (n3) => n3.isApplicable(e3, t2));
        if (r2) return { value: r2.transform(e3, t2), type: r2.annotation };
      };
      sn = {};
      Xt.forEach((e3) => {
        sn[e3.annotation] = e3;
      });
      cn = (e3, t2, n2) => {
        if (G(t2)) switch (t2[0]) {
          case `symbol`:
            return Qt.untransform(e3, t2, n2);
          case `class`:
            return nn.untransform(e3, t2, n2);
          case `custom`:
            return rn.untransform(e3, t2, n2);
          case `typed-array`:
            return en.untransform(e3, t2, n2);
          default:
            throw Error(`Unknown transformation: ` + t2);
        }
        else {
          let r2 = sn[t2];
          if (!r2) throw Error(`Unknown transformation: ` + t2);
          return r2.untransform(e3, n2);
        }
      };
      X = (e3, t2) => {
        if (t2 > e3.size) throw Error(`index out of bounds`);
        let n2 = e3.keys();
        for (; t2 > 0; ) n2.next(), t2--;
        return n2.next().value;
      };
      un = (e3, t2) => {
        ln(t2);
        for (let n2 = 0; n2 < t2.length; n2++) {
          let r2 = t2[n2];
          if (q(e3)) e3 = X(e3, +r2);
          else if (K(e3)) {
            let i2 = +r2, a2 = +t2[++n2] == 0 ? `key` : `value`, o2 = X(e3, i2);
            switch (a2) {
              case `key`:
                e3 = o2;
                break;
              case `value`:
                e3 = e3.get(o2);
            }
          } else e3 = e3[r2];
        }
        return e3;
      };
      dn = (e3, t2, n2) => {
        if (ln(t2), t2.length === 0) return n2(e3);
        let r2 = e3;
        for (let e4 = 0; e4 < t2.length - 1; e4++) {
          let n3 = t2[e4];
          if (G(r2)) {
            let e5 = +n3;
            r2 = r2[e5];
          } else if (W(r2)) r2 = r2[n3];
          else if (q(r2)) {
            let e5 = +n3;
            r2 = X(r2, e5);
          } else if (K(r2)) {
            if (e4 === t2.length - 2) break;
            let i3 = +n3, a2 = +t2[++e4] == 0 ? `key` : `value`, o2 = X(r2, i3);
            switch (a2) {
              case `key`:
                r2 = o2;
                break;
              case `value`:
                r2 = r2.get(o2);
            }
          }
        }
        let i2 = t2[t2.length - 1];
        if (G(r2) ? r2[+i2] = n2(r2[+i2]) : W(r2) && (r2[i2] = n2(r2[i2])), q(r2)) {
          let e4 = X(r2, +i2), t3 = n2(e4);
          e4 !== t3 && (r2.delete(e4), r2.add(t3));
        }
        if (K(r2)) {
          let e4 = +t2[t2.length - 2], a2 = X(r2, e4);
          switch (+i2 == 0 ? `key` : `value`) {
            case `key`: {
              let e5 = n2(a2);
              r2.set(e5, r2.get(a2)), e5 !== a2 && r2.delete(a2);
              break;
            }
            case `value`:
              r2.set(a2, n2(r2.get(a2)));
          }
        }
        return e3;
      };
      fn = (e3) => e3 < 1;
      gn = (e3, t2) => W(e3) || G(e3) || K(e3) || q(e3) || Vt(e3) || tn(e3, t2);
      yn = (e3, t2, n2, r2, i2 = [], a2 = [], o2 = /* @__PURE__ */ new Map()) => {
        let s3 = Ut(e3);
        if (!s3) {
          _n(e3, i2, t2);
          let n3 = o2.get(e3);
          if (n3) return r2 ? { transformedValue: null } : n3;
        }
        if (!gn(e3, n2)) {
          let t3 = on(e3, n2), r3 = t3 ? { transformedValue: t3.value, annotations: [t3.type] } : { transformedValue: e3 };
          return s3 || o2.set(e3, r3), r3;
        }
        if (Ot(a2, e3)) return { transformedValue: null };
        let c2 = on(e3, n2), l3 = c2?.value ?? e3, u2 = G(l3) ? [] : {}, d2 = {};
        U(l3, (s4, c3) => {
          if (c3 === `__proto__` || c3 === `constructor` || c3 === `prototype`) throw Error(`Detected property ${c3}. This is a prototype pollution risk, please remove it from your object.`);
          let l4 = yn(s4, t2, n2, r2, [...i2, c3], [...a2, e3], o2);
          u2[c3] = l4.transformedValue, G(l4.annotations) ? d2[Jt(c3)] = l4.annotations : W(l4.annotations) && U(l4.annotations, (e4, t3) => {
            d2[Jt(c3) + `.` + t3] = e4;
          });
        });
        let f2 = Pt(d2) ? { transformedValue: u2, annotations: c2 ? [c2.type] : void 0 } : { transformedValue: u2, annotations: c2 ? [c2.type, d2] : d2 };
        return s3 || o2.set(e3, f2), f2;
      };
      Z = class {
        constructor({ dedupe: e3 = false } = {}) {
          this.classRegistry = new Tt(), this.symbolRegistry = new wt((e4) => e4.description ?? ``), this.customTransformerRegistry = new At(), this.allowedErrorProps = [], this.dedupe = e3;
        }
        serialize(e3) {
          let t2 = /* @__PURE__ */ new Map(), n2 = yn(e3, t2, this, this.dedupe), r2 = { json: n2.transformedValue };
          n2.annotations && (r2.meta = { ...r2.meta, values: n2.annotations });
          let i2 = vn(t2, this.dedupe);
          return i2 && (r2.meta = { ...r2.meta, referentialEqualities: i2 }), r2.meta && (r2.meta.v = 1), r2;
        }
        deserialize(e3, t2) {
          let { json: n2, meta: r2 } = e3, i2 = t2?.inPlace ? n2 : wn(n2);
          return r2?.values && (i2 = mn(i2, r2.values, r2.v ?? 0, this)), r2?.referentialEqualities && (i2 = hn(i2, r2.referentialEqualities, r2.v ?? 0)), i2;
        }
        stringify(e3) {
          return JSON.stringify(this.serialize(e3));
        }
        parse(e3) {
          return this.deserialize(JSON.parse(e3), { inPlace: true });
        }
        registerClass(e3, t2) {
          this.classRegistry.register(e3, t2);
        }
        registerSymbol(e3, t2) {
          this.symbolRegistry.register(e3, t2);
        }
        registerCustom(e3, t2) {
          this.customTransformerRegistry.register({ name: t2, ...e3 });
        }
        allowErrorProps(...e3) {
          this.allowedErrorProps.push(...e3);
        }
      };
      Z.defaultInstance = new Z(), Z.serialize = Z.defaultInstance.serialize.bind(Z.defaultInstance), Z.deserialize = Z.defaultInstance.deserialize.bind(Z.defaultInstance), Z.stringify = Z.defaultInstance.stringify.bind(Z.defaultInstance), Z.parse = Z.defaultInstance.parse.bind(Z.defaultInstance), Z.registerClass = Z.defaultInstance.registerClass.bind(Z.defaultInstance), Z.registerSymbol = Z.defaultInstance.registerSymbol.bind(Z.defaultInstance), Z.registerCustom = Z.defaultInstance.registerCustom.bind(Z.defaultInstance), Z.allowErrorProps = Z.defaultInstance.allowErrorProps.bind(Z.defaultInstance);
      Tn = Z.serialize;
      Z.deserialize;
      En = Z.stringify;
      Z.parse, Z.registerClass, Z.registerCustom, Z.registerSymbol, Z.allowErrorProps;
      Mn = (e3, t2 = false) => {
        let { json: n2 } = Tn(e3);
        return JSON.stringify(n2, null, t2 ? 2 : void 0);
      };
      Nn = (e3) => e3.state.fetchStatus === `idle` ? e3.getObserversCount() ? e3.isStale() ? 2 : 1 : 3 : 0;
      Pn = (e3, t2) => e3.queryHash.localeCompare(t2.queryHash);
      Fn = (e3, t2) => {
        let n2 = t2.state.dataUpdatedAt - e3.state.dataUpdatedAt;
        return n2 < 0 ? -1 : +(n2 > 0);
      };
      In = { status: (e3, t2) => Nn(e3) === Nn(t2) ? Fn(e3, t2) : Nn(e3) > Nn(t2) ? 1 : -1, "query hash": Pn, "last updated": Fn };
      Ln = (e3) => e3.state.isPaused ? 0 : e3.state.status === `error` ? 2 : e3.state.status === `pending` ? 1 : 3;
      Rn = (e3, t2) => e3.state.submittedAt < t2.state.submittedAt ? 1 : -1;
      zn = { status: (e3, t2) => Ln(e3) === Ln(t2) ? Rn(e3, t2) : Ln(e3) > Ln(t2) ? 1 : -1, "last updated": Rn };
      Vn = () => {
        let [e3, t2] = v(`dark`);
        return re(() => {
          let e4 = window.matchMedia(`(prefers-color-scheme: dark)`);
          t2(e4.matches ? `dark` : `light`);
          let n2 = (e5) => {
            t2(e5.matches ? `dark` : `light`);
          };
          e4.addEventListener(`change`, n2), T(() => e4.removeEventListener(`change`, n2));
        }), e3;
      };
      Q = (e3, t2, n2) => {
        if (t2.length === 0) return n2;
        if (e3 instanceof Map) {
          let r2 = new Map(e3);
          if (t2.length === 1) return r2.set(t2[0], n2), r2;
          let [i2, ...a2] = t2;
          return r2.set(i2, Q(r2.get(i2), a2, n2)), r2;
        }
        if (e3 instanceof Set) {
          let r2 = Q(Array.from(e3), t2, n2);
          return new Set(r2);
        }
        if (Array.isArray(e3)) {
          let r2 = [...e3];
          if (t2.length === 1) return r2[t2[0]] = n2, r2;
          let [i2, ...a2] = t2;
          return r2[i2] = Q(r2[i2], a2, n2), r2;
        }
        if (e3 instanceof Object) {
          let r2 = { ...e3 };
          if (t2.length === 1) return r2[t2[0]] = n2, r2;
          let [i2, ...a2] = t2;
          return r2[i2] = Q(r2[i2], a2, n2), r2;
        }
        return e3;
      };
      $ = (e3, t2) => {
        if (e3 instanceof Map) {
          let n2 = new Map(e3);
          if (t2.length === 1) return n2.delete(t2[0]), n2;
          let [r2, ...i2] = t2;
          return n2.set(r2, $(n2.get(r2), i2)), n2;
        }
        if (e3 instanceof Set) {
          let n2 = $(Array.from(e3), t2);
          return new Set(n2);
        }
        if (Array.isArray(e3)) {
          let n2 = [...e3];
          if (t2.length === 1) return n2.filter((e4, n3) => n3.toString() !== t2[0]);
          let [r2, ...i2] = t2;
          return n2[r2] = $(n2[r2], i2), n2;
        }
        if (e3 instanceof Object) {
          let n2 = { ...e3 };
          if (t2.length === 1) return delete n2[t2[0]], n2;
          let [r2, ...i2] = t2;
          return n2[r2] = $(n2[r2], i2), n2;
        }
        return e3;
      };
      Hn = (e3, t2) => {
        if (!e3) return;
        window.__nonce__ = e3;
        let n2 = t2 ?? document.head;
        if (n2.querySelector(`#_goober`)) return;
        let r2 = document.createElement(`style`), i2 = document.createTextNode(``);
        r2.appendChild(i2), r2.id = `_goober`, r2.setAttribute(`nonce`, e3), n2.appendChild(r2);
      };
    }
  });

  // ../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/Devtools-CFKbGy8Z.js
  function me2(e3) {
    return (...t2) => {
      for (let n2 of e3) n2 && n2(...t2);
    };
  }
  function ge2(e3, ...t2) {
    return typeof e3 == `function` ? e3(...t2) : e3;
  }
  function ve2(e3, t2, n2, r2) {
    let i2 = e3.length, a2 = t2.length, o2 = 0;
    if (!a2) {
      for (; o2 < i2; o2++) n2(e3[o2]);
      return;
    }
    if (!i2) {
      for (; o2 < a2; o2++) r2(t2[o2]);
      return;
    }
    for (; o2 < a2 && t2[o2] === e3[o2]; o2++) ;
    let s3, c2;
    t2 = t2.slice(o2), e3 = e3.slice(o2);
    for (s3 of t2) e3.includes(s3) || r2(s3);
    for (c2 of e3) t2.includes(c2) || n2(c2);
  }
  function ye2(e3) {
    let [t2, n2] = v(), r2 = e3?.throw ? (e4, t3) => {
      throw n2(e4 instanceof Error ? e4 : Error(t3)), e4;
    } : (e4, t3) => {
      n2(e4 instanceof Error ? e4 : Error(t3));
    }, i2 = e3?.api ? Array.isArray(e3.api) ? e3.api : [e3.api] : [globalThis.localStorage].filter(Boolean), a2 = e3?.prefix ? `${e3.prefix}.` : ``, o2 = /* @__PURE__ */ new Map(), s3 = new Proxy({}, { get(t3, n3) {
      let s4 = o2.get(n3);
      s4 || (s4 = v(void 0, { equals: false }), o2.set(n3, s4)), s4[0]();
      let c2 = i2.reduce((e4, t4) => {
        if (e4 !== null || !t4) return e4;
        try {
          return t4.getItem(`${a2}${n3}`);
        } catch (e5) {
          return r2(e5, `Error reading ${a2}${n3} from ${t4.name}`), null;
        }
      }, null);
      return c2 !== null && e3?.deserializer ? e3.deserializer(c2, n3, e3.options) : c2;
    } });
    return e3?.sync !== false && re(() => {
      let e4 = (e5) => {
        let t3 = false;
        i2.forEach((n3) => {
          try {
            n3 !== e5.storageArea && e5.key && e5.newValue !== n3.getItem(e5.key) && (e5.newValue ? n3.setItem(e5.key, e5.newValue) : n3.removeItem(e5.key), t3 = true);
          } catch (t4) {
            r2(t4, `Error synching api ${n3.name} from storage event (${e5.key}=${e5.newValue})`);
          }
        }), t3 && e5.key && o2.get(e5.key)?.[1]();
      };
      `addEventListener` in globalThis ? (globalThis.addEventListener(`storage`, e4), T(() => globalThis.removeEventListener(`storage`, e4))) : (i2.forEach((t3) => t3.addEventListener?.(`storage`, e4)), T(() => i2.forEach((t3) => t3.removeEventListener?.(`storage`, e4))));
    }), [s3, (t3, n3, s4) => {
      let c2 = e3?.serializer ? e3.serializer(n3, t3, s4 ?? e3.options) : n3, l3 = `${a2}${t3}`;
      i2.forEach((e4) => {
        try {
          e4.getItem(l3) !== c2 && e4.setItem(l3, c2);
        } catch (n4) {
          r2(n4, `Error setting ${a2}${t3} to ${c2} in ${e4.name}`);
        }
      });
      let u2 = o2.get(t3);
      u2 && u2[1]();
    }, { clear: () => i2.forEach((e4) => {
      try {
        e4.clear();
      } catch (t3) {
        r2(t3, `Error clearing ${e4.name}`);
      }
    }), error: t2, remove: (e4) => i2.forEach((t3) => {
      try {
        t3.removeItem(`${a2}${e4}`);
      } catch (n3) {
        r2(n3, `Error removing ${a2}${e4} from ${t3.name}`);
      }
    }), toJSON: () => {
      let t3 = {}, n3 = (n4, r3) => {
        if (!t3.hasOwnProperty(n4)) {
          let i3 = r3 && e3?.deserializer ? e3.deserializer(r3, n4, e3.options) : r3;
          i3 && (t3[n4] = i3);
        }
      };
      return i2.forEach((e4) => {
        if (typeof e4.getAll == `function`) {
          let t4;
          try {
            t4 = e4.getAll();
          } catch (t5) {
            r2(t5, `Error getting all values from in ${e4.name}`);
          }
          for (let e5 of t4) n3(e5, t4[e5]);
        } else {
          let i3 = 0, a3;
          try {
            for (; a3 = e4.key(i3++); ) t3.hasOwnProperty(a3) || n3(a3, e4.getItem(a3));
          } catch (t4) {
            r2(t4, `Error getting all values from ${e4.name}`);
          }
        }
      }), t3;
    } }];
  }
  function De2(e3) {
    return e3.replace(Ee2, (e4) => we2[e4]);
  }
  function Oe2(e3, t2, n2) {
    if (n2 ||= {}, n2.threshold = n2.threshold ?? z2.MATCHES, !n2.accessors) {
      let r3 = ke2(e3, t2, n2);
      return { rankedValue: e3, rank: r3, accessorIndex: -1, accessorThreshold: n2.threshold, passed: r3 >= n2.threshold };
    }
    let r2 = Pe2(e3, n2.accessors), i2 = { rankedValue: e3, rank: z2.NO_MATCH, accessorIndex: -1, accessorThreshold: n2.threshold, passed: false };
    for (let e4 = 0; e4 < r2.length; e4++) {
      let a2 = r2[e4], o2 = ke2(a2.itemValue, t2, n2), { minRanking: s3, maxRanking: c2, threshold: l3 = n2.threshold } = a2.attributes;
      o2 < s3 && o2 >= z2.MATCHES ? o2 = s3 : o2 > c2 && (o2 = c2), o2 = Math.min(o2, c2), o2 >= l3 && o2 > i2.rank && (i2.rank = o2, i2.passed = true, i2.accessorIndex = e4, i2.accessorThreshold = l3, i2.rankedValue = a2.itemValue);
    }
    return i2;
  }
  function ke2(e3, t2, n2) {
    return e3 = Me2(e3, n2), t2 = Me2(t2, n2), t2.length > e3.length ? z2.NO_MATCH : e3 === t2 ? z2.CASE_SENSITIVE_EQUAL : (e3 = e3.toLowerCase(), t2 = t2.toLowerCase(), e3 === t2 ? z2.EQUAL : e3.startsWith(t2) ? z2.STARTS_WITH : e3.includes(` ${t2}`) ? z2.WORD_STARTS_WITH : e3.includes(t2) ? z2.CONTAINS : t2.length === 1 ? z2.NO_MATCH : Ae2(e3).includes(t2) ? z2.ACRONYM : je2(e3, t2));
  }
  function Ae2(e3) {
    let t2 = ``;
    return e3.split(` `).forEach((e4) => {
      e4.split(`-`).forEach((e5) => {
        t2 += e5.substr(0, 1);
      });
    }), t2;
  }
  function je2(e3, t2) {
    let n2 = 0, r2 = 0;
    function i2(e4, t3, r3) {
      for (let i3 = r3, a3 = t3.length; i3 < a3; i3++) if (t3[i3] === e4) return n2 += 1, i3 + 1;
      return -1;
    }
    function a2(e4) {
      let r3 = 1 / e4, i3 = n2 / t2.length;
      return z2.MATCHES + i3 * r3;
    }
    let o2 = i2(t2[0], e3, 0);
    if (o2 < 0) return z2.NO_MATCH;
    r2 = o2;
    for (let n3 = 1, a3 = t2.length; n3 < a3; n3++) {
      let a4 = t2[n3];
      if (r2 = i2(a4, e3, r2), !(r2 > -1)) return z2.NO_MATCH;
    }
    return a2(r2 - o2);
  }
  function Me2(e3, t2) {
    let { keepDiacritics: n2 } = t2;
    return e3 = `${e3}`, n2 || (e3 = De2(e3)), e3;
  }
  function Ne2(e3, t2) {
    let n2 = t2;
    typeof t2 == `object` && (n2 = t2.accessor);
    let r2 = n2(e3);
    return r2 == null ? [] : Array.isArray(r2) ? r2 : [String(r2)];
  }
  function Pe2(e3, t2) {
    let n2 = [];
    for (let r2 = 0, i2 = t2.length; r2 < i2; r2++) {
      let i3 = t2[r2], a2 = Ie2(i3), o2 = Ne2(e3, i3);
      for (let e4 = 0, t3 = o2.length; e4 < t3; e4++) n2.push({ itemValue: o2[e4], attributes: a2 });
    }
    return n2;
  }
  function Ie2(e3) {
    return typeof e3 == `function` ? Fe2 : { ...Fe2, ...e3 };
  }
  function B2(e3) {
    let t2 = this || {}, n2 = e3.call ? e3(t2.p) : e3;
    return Ge2(n2.unshift ? n2.raw ? Ke2(n2, [].slice.call(arguments, 1), t2.p) : n2.reduce((e4, n3) => Object.assign(e4, n3 && n3.call ? n3(t2.p) : n3), {}) : n2, Re2(t2.target), t2.g, t2.o, t2.k);
  }
  function qe2(e3) {
    var t2, n2, r2 = ``;
    if (typeof e3 == `string` || typeof e3 == `number`) r2 += e3;
    else if (typeof e3 == `object`) {
      if (Array.isArray(e3)) {
        var i2 = e3.length;
        for (t2 = 0; t2 < i2; t2++) e3[t2] && (n2 = qe2(e3[t2])) && (r2 && (r2 += ` `), r2 += n2);
      } else for (n2 in e3) e3[n2] && (r2 && (r2 += ` `), r2 += n2);
    }
    return r2;
  }
  function V2() {
    for (var e3, t2, n2 = 0, r2 = ``, i2 = arguments.length; n2 < i2; n2++) (e3 = arguments[n2]) && (t2 = qe2(e3)) && (r2 && (r2 += ` `), r2 += t2);
    return r2;
  }
  function H2(...e3) {
    return me2(e3);
  }
  function at2(e3) {
    for (let t2 of e3) t2.dispose();
  }
  function ot2(n2, r2, i2, a2 = {}) {
    let o2 = /* @__PURE__ */ new Map();
    return T(() => at2(o2.values())), () => {
      let i3 = n2() || [];
      return i3[o], w(() => {
        if (!i3.length) return at2(o2.values()), o2.clear(), a2.fallback ? [_((e4) => (o2.set(it2, { dispose: e4 }), a2.fallback()))] : [];
        let e3 = Array(i3.length), t2 = o2.get(it2);
        if (!o2.size || t2) {
          t2?.dispose(), o2.delete(it2);
          for (let t3 = 0; t3 < i3.length; t3++) {
            let n4 = i3[t3], a3 = r2(n4, t3);
            s3(e3, n4, t3, a3);
          }
          return e3;
        }
        let n3 = new Set(o2.keys());
        for (let t3 = 0; t3 < i3.length; t3++) {
          let a3 = i3[t3], c2 = r2(a3, t3);
          n3.delete(c2);
          let l3 = o2.get(c2);
          l3 ? (e3[t3] = l3.mapped, l3.setIndex?.(t3), l3.setItem(() => a3)) : s3(e3, a3, t3, c2);
        }
        for (let e4 of n3) o2.get(e4)?.dispose(), o2.delete(e4);
        return e3;
      });
    };
    function s3(e3, t2, n3, r3) {
      _((a3) => {
        let [s4, c2] = v(t2), l3 = { setItem: c2, dispose: a3 };
        if (i2.length > 1) {
          let [e4, t3] = v(n3);
          l3.setIndex = t3, l3.mapped = i2(s4, e4);
        } else l3.mapped = i2(s4);
        o2.set(r3, l3), e3[n3] = l3.mapped;
      });
    }
  }
  function st2(e3) {
    let { by: t2 } = e3;
    return S(ot2(() => e3.each, typeof t2 == `function` ? t2 : (e4) => e4[t2], e3.children, `fallback` in e3 ? { fallback: () => e3.fallback } : void 0));
  }
  function ct2(e3, t2, n2, r2) {
    return e3.addEventListener(t2, n2, r2), _e2(e3.removeEventListener.bind(e3, t2, n2, r2));
  }
  function lt2(e3, t2, r2, i2) {
    let a2 = () => {
      he2(R2(e3)).forEach((e4) => {
        e4 && he2(R2(t2)).forEach((t3) => ct2(e4, t3, r2, i2));
      });
    };
    typeof e3 == `function` ? x(a2) : b(a2);
  }
  function ut2(e3, t2) {
    let n2 = new ResizeObserver(e3);
    return T(n2.disconnect.bind(n2)), { observe: (e4) => n2.observe(e4, t2), unobserve: n2.unobserve.bind(n2) };
  }
  function dt2(e3, t2, r2) {
    let i2 = /* @__PURE__ */ new WeakMap(), { observe: a2, unobserve: o2 } = ut2((e4) => {
      for (let n2 of e4) {
        let { contentRect: e5, target: r3 } = n2, a3 = Math.round(e5.width), o3 = Math.round(e5.height), s3 = i2.get(r3);
        (!s3 || s3.width !== a3 || s3.height !== o3) && (t2(e5, r3, n2), i2.set(r3, { width: a3, height: o3 }));
      }
    }, r2);
    x((t3) => {
      let n2 = pe2(he2(R2(e3)));
      return ve2(n2, t3, a2, o2), n2;
    }, []);
  }
  function pt2(e3) {
    let t2 = {}, n2;
    for (; n2 = ft2.exec(e3); ) t2[n2[1]] = n2[2];
    return t2;
  }
  function mt2(e3, t2) {
    if (typeof e3 == `string`) {
      if (typeof t2 == `string`) return `${e3};${t2}`;
      e3 = pt2(e3);
    } else typeof t2 == `string` && (t2 = pt2(t2));
    return { ...e3, ...t2 };
  }
  function ht2(e3, t2, n2 = -1) {
    return n2 in e3 ? [...e3.slice(0, n2), t2, ...e3.slice(n2)] : [...e3, t2];
  }
  function gt2(e3, t2) {
    let n2 = [...e3], r2 = n2.indexOf(t2);
    return r2 !== -1 && n2.splice(r2, 1), n2;
  }
  function _t2(e3) {
    return typeof e3 == `number`;
  }
  function vt2(e3) {
    return Object.prototype.toString.call(e3) === `[object String]`;
  }
  function yt2(e3) {
    return typeof e3 == `function`;
  }
  function bt2(e3) {
    return (t2) => `${e3()}-${t2}`;
  }
  function xt2(e3, t2) {
    return e3 ? e3 === t2 || e3.contains(t2) : false;
  }
  function St2(e3, t2 = false) {
    let { activeElement: n2 } = wt2(e3);
    if (!n2?.nodeName) return null;
    if (Tt2(n2) && n2.contentDocument) return St2(n2.contentDocument.body, t2);
    if (t2) {
      let e4 = n2.getAttribute(`aria-activedescendant`);
      if (e4) {
        let t3 = wt2(n2).getElementById(e4);
        if (t3) return t3;
      }
    }
    return n2;
  }
  function Ct2(e3) {
    return wt2(e3).defaultView || window;
  }
  function wt2(e3) {
    return e3 ? e3.ownerDocument || e3 : document;
  }
  function Tt2(e3) {
    return e3.tagName === `IFRAME`;
  }
  function Dt2(e3) {
    return typeof window < `u` && window.navigator != null && e3.test(window.navigator.userAgentData?.platform || window.navigator.platform);
  }
  function Ot2() {
    return Dt2(/^Mac/i);
  }
  function kt2() {
    return Dt2(/^iPhone/i);
  }
  function At2() {
    return Dt2(/^iPad/i) || Ot2() && navigator.maxTouchPoints > 1;
  }
  function jt2() {
    return kt2() || At2();
  }
  function Mt2() {
    return Ot2() || jt2();
  }
  function U2(e3, t2) {
    return t2 && (yt2(t2) ? t2(e3) : t2[0](t2[1], e3)), e3?.defaultPrevented;
  }
  function W2(e3) {
    return (t2) => {
      for (let n2 of e3) U2(t2, n2);
    };
  }
  function Nt2(e3) {
    return Ot2() ? e3.metaKey && !e3.ctrlKey : e3.ctrlKey && !e3.metaKey;
  }
  function G2(e3) {
    if (e3) {
      if (Ft2()) e3.focus({ preventScroll: true });
      else {
        let t2 = It2(e3);
        e3.focus(), Lt2(t2);
      }
    }
  }
  function Ft2() {
    if (Pt2 == null) {
      Pt2 = false;
      try {
        document.createElement(`div`).focus({ get preventScroll() {
          return Pt2 = true, true;
        } });
      } catch {
      }
    }
    return Pt2;
  }
  function It2(e3) {
    let t2 = e3.parentNode, n2 = [], r2 = document.scrollingElement || document.documentElement;
    for (; t2 instanceof HTMLElement && t2 !== r2; ) (t2.offsetHeight < t2.scrollHeight || t2.offsetWidth < t2.scrollWidth) && n2.push({ element: t2, scrollTop: t2.scrollTop, scrollLeft: t2.scrollLeft }), t2 = t2.parentNode;
    return r2 instanceof HTMLElement && n2.push({ element: r2, scrollTop: r2.scrollTop, scrollLeft: r2.scrollLeft }), n2;
  }
  function Lt2(e3) {
    for (let { element: t2, scrollTop: n2, scrollLeft: r2 } of e3) t2.scrollTop = n2, t2.scrollLeft = r2;
  }
  function Ht2(e3, t2) {
    let n2 = Array.from(e3.querySelectorAll(Bt2)).filter(Ut2);
    return t2 && Ut2(e3) && n2.unshift(e3), n2.forEach((e4, t3) => {
      if (Tt2(e4) && e4.contentDocument) {
        let r2 = e4.contentDocument.body, i2 = Ht2(r2, false);
        n2.splice(t3, 1, ...i2);
      }
    }), n2;
  }
  function Ut2(e3) {
    return Wt2(e3) && !Gt2(e3);
  }
  function Wt2(e3) {
    return e3.matches(Bt2) && Kt2(e3);
  }
  function Gt2(e3) {
    return Number.parseInt(e3.getAttribute(`tabindex`) || `0`, 10) < 0;
  }
  function Kt2(e3, t2) {
    return e3.nodeName !== `#comment` && qt2(e3) && Jt2(e3, t2) && (!e3.parentElement || Kt2(e3.parentElement, e3));
  }
  function qt2(e3) {
    if (!(e3 instanceof HTMLElement) && !(e3 instanceof SVGElement)) return false;
    let { display: t2, visibility: n2 } = e3.style, r2 = t2 !== `none` && n2 !== `hidden` && n2 !== `collapse`;
    if (r2) {
      if (!e3.ownerDocument.defaultView) return r2;
      let { getComputedStyle: t3 } = e3.ownerDocument.defaultView, { display: n3, visibility: i2 } = t3(e3);
      r2 = n3 !== `none` && i2 !== `hidden` && i2 !== `collapse`;
    }
    return r2;
  }
  function Jt2(e3, t2) {
    return !e3.hasAttribute(`hidden`) && (e3.nodeName === `DETAILS` && t2 && t2.nodeName !== `SUMMARY` ? e3.hasAttribute(`open`) : true);
  }
  function Yt2(e3, t2) {
    return t2.some((t3) => t3.contains(e3));
  }
  function Xt2(e3, t2, n2) {
    let r2 = t2?.tabbable ? Vt2 : Bt2, i2 = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, { acceptNode(e4) {
      return t2?.from?.contains(e4) ? NodeFilter.FILTER_REJECT : e4.matches(r2) && Kt2(e4) && (!n2 || Yt2(e4, n2)) && (!t2?.accept || t2.accept(e4)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    } });
    return t2?.from && (i2.currentNode = t2.from), i2;
  }
  function Zt2(e3) {
    let t2 = e3;
    for (; t2 && !Qt2(t2); ) t2 = t2.parentElement;
    return t2 || document.scrollingElement || document.documentElement;
  }
  function Qt2(e3) {
    let t2 = window.getComputedStyle(e3);
    return /(auto|scroll)/.test(t2.overflow + t2.overflowX + t2.overflowY);
  }
  function $t2() {
  }
  function en2(e3, t2) {
    let [n2, r2] = e3, i2 = false, a2 = t2.length;
    for (let e4 = a2, o2 = 0, s3 = e4 - 1; o2 < e4; s3 = o2++) {
      let [a3, c2] = t2[o2], [l3, u2] = t2[s3], [, d2] = t2[s3 === 0 ? e4 - 1 : s3 - 1] || [0, 0], f2 = (c2 - u2) * (n2 - a3) - (a3 - l3) * (r2 - c2);
      if (u2 < c2) {
        if (r2 >= u2 && r2 < c2) {
          if (f2 === 0) return true;
          f2 > 0 && (r2 === u2 ? r2 > d2 && (i2 = !i2) : i2 = !i2);
        }
      } else if (c2 < u2) {
        if (r2 > c2 && r2 <= u2) {
          if (f2 === 0) return true;
          f2 < 0 && (r2 === u2 ? r2 < d2 && (i2 = !i2) : i2 = !i2);
        }
      } else if (r2 === c2 && (n2 >= l3 && n2 <= a3 || n2 >= a3 && n2 <= l3)) return true;
    }
    return i2;
  }
  function K2(e3, t2) {
    return Ae(e3, t2);
  }
  function rn2() {
    if (typeof window > `u`) return;
    let e3 = (e4) => {
      if (!e4.target) return;
      let n2 = tn2.get(e4.target);
      n2 || (n2 = /* @__PURE__ */ new Set(), tn2.set(e4.target, n2), e4.target.addEventListener(`transitioncancel`, t2)), n2.add(e4.propertyName);
    }, t2 = (e4) => {
      if (!e4.target) return;
      let n2 = tn2.get(e4.target);
      if (n2 && (n2.delete(e4.propertyName), n2.size === 0 && (e4.target.removeEventListener(`transitioncancel`, t2), tn2.delete(e4.target)), tn2.size === 0)) {
        for (let e5 of nn2) e5();
        nn2.clear();
      }
    };
    document.body.addEventListener(`transitionrun`, e3), document.body.addEventListener(`transitionend`, t2);
  }
  function an2(e3, t2) {
    let n2 = on2(e3, t2, `left`), r2 = on2(e3, t2, `top`), i2 = t2.offsetWidth, a2 = t2.offsetHeight, o2 = e3.scrollLeft, s3 = e3.scrollTop, c2 = o2 + e3.offsetWidth, l3 = s3 + e3.offsetHeight;
    n2 <= o2 ? o2 = n2 : n2 + i2 > c2 && (o2 += n2 + i2 - c2), r2 <= s3 ? s3 = r2 : r2 + a2 > l3 && (s3 += r2 + a2 - l3), e3.scrollLeft = o2, e3.scrollTop = s3;
  }
  function on2(e3, t2, n2) {
    let r2 = n2 === `left` ? `offsetLeft` : `offsetTop`, i2 = 0;
    for (; t2.offsetParent && (i2 += t2[r2], t2.offsetParent !== e3); ) {
      if (t2.offsetParent.contains(e3)) {
        i2 -= e3[r2];
        break;
      }
      t2 = t2.offsetParent;
    }
    return i2;
  }
  function sn2(e3, t2) {
    if (document.contains(e3)) {
      let n2 = document.scrollingElement || document.documentElement;
      if (window.getComputedStyle(n2).overflow !== `hidden`) {
        let { left: n3, top: r2 } = e3.getBoundingClientRect();
        e3?.scrollIntoView?.({ block: `nearest` });
        let { left: i2, top: a2 } = e3.getBoundingClientRect();
        (Math.abs(n3 - i2) > 1 || Math.abs(r2 - a2) > 1) && (t2?.containingElement?.scrollIntoView?.({ block: `center`, inline: `center` }), e3.scrollIntoView?.({ block: `nearest` }));
      } else {
        let t3 = Zt2(e3);
        for (; e3 && t3 && e3 !== n2 && t3 !== n2; ) an2(t3, e3), e3 = t3, t3 = Zt2(e3);
      }
    }
  }
  function ln2(e3, t2) {
    let [r2, i2] = v(un2(t2?.()));
    return x(() => {
      i2(e3()?.tagName.toLowerCase() || un2(t2?.()));
    }), r2;
  }
  function un2(e3) {
    return vt2(e3) ? e3 : void 0;
  }
  function q2(e3) {
    let [t2, n2] = je(e3, [`as`]);
    if (!t2.as) throw Error("[kobalte]: Polymorphic is missing the required `as` prop.");
    return Te(St, Ae(n2, { get component() {
      return t2.as;
    } }));
  }
  function mn2(e3) {
    let t2 = e3.tagName.toLowerCase();
    return t2 === `button` ? true : t2 === `input` && e3.type ? pn2.indexOf(e3.type) !== -1 : false;
  }
  function hn2(e3) {
    let t2, n2 = K2({ type: `button` }, e3), [r2, i2] = je(n2, [`ref`, `type`, `disabled`]), a2 = ln2(() => t2, () => `button`), o2 = S(() => {
      let e4 = a2();
      return e4 != null && mn2({ tagName: e4, type: r2.type });
    }), s3 = S(() => a2() === `input`), c2 = S(() => a2() === `a` && t2?.getAttribute(`href`) != null);
    return Te(q2, Ae({ as: `button`, ref(e4) {
      let n3 = H2((e5) => t2 = e5, r2.ref);
      typeof n3 == `function` && n3(e4);
    }, get type() {
      return o2() || s3() ? r2.type : void 0;
    }, get role() {
      return !o2() && !c2() ? `button` : void 0;
    }, get tabIndex() {
      return !o2() && !c2() && !r2.disabled ? 0 : void 0;
    }, get disabled() {
      return o2() || s3() ? r2.disabled : void 0;
    }, get "aria-disabled"() {
      return !o2() && !s3() && r2.disabled ? true : void 0;
    }, get "data-disabled"() {
      return r2.disabled ? `` : void 0;
    } }, i2));
  }
  function _n2(t2) {
    let [n2, r2] = v(t2.defaultValue?.()), i2 = S(() => t2.value?.() !== void 0), a2 = S(() => i2() ? t2.value?.() : n2());
    return [a2, (n3) => {
      w(() => {
        let e3 = ge2(n3, a2());
        return Object.is(e3, a2()) || (i2() || r2(e3), t2.onChange?.(e3)), e3;
      });
    }];
  }
  function vn2(e3) {
    let [t2, n2] = _n2(e3);
    return [() => t2() ?? false, n2];
  }
  function yn2(e3) {
    let [t2, n2] = _n2(e3);
    return [() => t2() ?? [], n2];
  }
  function bn2(e3 = {}) {
    let [t2, n2] = vn2({ value: () => R2(e3.isSelected), defaultValue: () => !!R2(e3.defaultIsSelected), onChange: (t3) => e3.onSelectedChange?.(t3) });
    return { isSelected: t2, setIsSelected: (t3) => {
      !R2(e3.isReadOnly) && !R2(e3.isDisabled) && n2(t3);
    }, toggle: () => {
      !R2(e3.isReadOnly) && !R2(e3.isDisabled) && n2(!t2());
    } };
  }
  function xn2(e3) {
    let t2 = e3.startIndex ?? 0, n2 = e3.startLevel ?? 0, r2 = [], i2 = (t3) => {
      if (t3 == null) return ``;
      let n3 = e3.getKey ?? `key`, r3 = vt2(n3) ? t3[n3] : n3(t3);
      return r3 == null ? `` : String(r3);
    }, a2 = (t3) => {
      if (t3 == null) return ``;
      let n3 = e3.getTextValue ?? `textValue`, r3 = vt2(n3) ? t3[n3] : n3(t3);
      return r3 == null ? `` : String(r3);
    }, o2 = (t3) => {
      if (t3 == null) return false;
      let n3 = e3.getDisabled ?? `disabled`;
      return (vt2(n3) ? t3[n3] : n3(t3)) ?? false;
    }, s3 = (t3) => {
      if (t3 != null) return vt2(e3.getSectionChildren) ? t3[e3.getSectionChildren] : e3.getSectionChildren?.(t3);
    };
    for (let c2 of e3.dataSource) {
      if (vt2(c2) || _t2(c2)) {
        r2.push({ type: `item`, rawValue: c2, key: String(c2), textValue: String(c2), disabled: o2(c2), level: n2, index: t2 }), t2++;
        continue;
      }
      if (s3(c2) != null) {
        r2.push({ type: `section`, rawValue: c2, key: ``, textValue: ``, disabled: false, level: n2, index: t2 }), t2++;
        let i3 = s3(c2) ?? [];
        if (i3.length > 0) {
          let a3 = xn2({ dataSource: i3, getKey: e3.getKey, getTextValue: e3.getTextValue, getDisabled: e3.getDisabled, getSectionChildren: e3.getSectionChildren, startIndex: t2, startLevel: n2 + 1 });
          r2.push(...a3), t2 += a3.length;
        }
      } else r2.push({ type: `item`, rawValue: c2, key: i2(c2), textValue: a2(c2), disabled: o2(c2), level: n2, index: t2 }), t2++;
    }
    return r2;
  }
  function Sn2(e3, t2 = []) {
    return S(() => {
      let n2 = xn2({ dataSource: R2(e3.dataSource), getKey: R2(e3.getKey), getTextValue: R2(e3.getTextValue), getDisabled: R2(e3.getDisabled), getSectionChildren: R2(e3.getSectionChildren) });
      for (let e4 = 0; e4 < t2.length; e4++) t2[e4]();
      return e3.factory(n2);
    });
  }
  function Tn2(e3) {
    if (Intl.Locale) {
      let t3 = new Intl.Locale(e3).maximize().script ?? ``;
      return Cn2.has(t3);
    }
    let t2 = e3.split(`-`)[0];
    return wn2.has(t2);
  }
  function En2(e3) {
    return Tn2(e3) ? `rtl` : `ltr`;
  }
  function Dn2() {
    let e3 = typeof navigator < `u` && (navigator.language || navigator.userLanguage) || `en-US`;
    return { locale: e3, direction: En2(e3) };
  }
  function An2() {
    On2 = Dn2();
    for (let e3 of kn2) e3(On2);
  }
  function jn2() {
    let [e3, t2] = v(On2), n2 = S(() => e3());
    return re(() => {
      kn2.size === 0 && window.addEventListener(`languagechange`, An2), kn2.add(t2), T(() => {
        kn2.delete(t2), kn2.size === 0 && window.removeEventListener(`languagechange`, An2);
      });
    }), { locale: () => n2().locale, direction: () => n2().direction };
  }
  function Nn2() {
    let e3 = jn2();
    return oe(Mn2) || e3;
  }
  function Fn2(e3) {
    let { locale: t2 } = Nn2(), n2 = S(() => t2() + (e3 ? Object.entries(e3).sort((e4, t3) => e4[0] < t3[0] ? -1 : 1).join() : ``));
    return S(() => {
      let r2 = n2(), i2;
      return Pn2.has(r2) && (i2 = Pn2.get(r2)), i2 || (i2 = new Intl.Collator(t2(), e3), Pn2.set(r2, i2)), i2;
    });
  }
  function Ln2(e3) {
    let [t2, n2] = _n2(e3);
    return [() => t2() ?? new In2(), n2];
  }
  function Rn2(e3) {
    return Mt2() ? e3.altKey : e3.ctrlKey;
  }
  function zn2(e3) {
    return Ot2() ? e3.metaKey : e3.ctrlKey;
  }
  function Bn2(e3) {
    return new In2(e3);
  }
  function Vn2(e3, t2) {
    if (e3.size !== t2.size) return false;
    for (let n2 of e3) if (!t2.has(n2)) return false;
    return true;
  }
  function Hn2(e3) {
    let t2 = K2({ selectionMode: `none`, selectionBehavior: `toggle` }, e3), [r2, i2] = v(false), [a2, o2] = v(), [s3, c2] = Ln2({ value: S(() => {
      let e4 = R2(t2.selectedKeys);
      return e4 == null ? e4 : Bn2(e4);
    }), defaultValue: S(() => {
      let e4 = R2(t2.defaultSelectedKeys);
      return e4 == null ? new In2() : Bn2(e4);
    }), onChange: (e4) => t2.onSelectionChange?.(e4) }), [l3, u2] = v(R2(t2.selectionBehavior));
    return x(() => {
      let e4 = s3();
      R2(t2.selectionBehavior) === `replace` && l3() === `toggle` && typeof e4 == `object` && e4.size === 0 && u2(`replace`);
    }), x(() => {
      u2(R2(t2.selectionBehavior) ?? `toggle`);
    }), { selectionMode: () => R2(t2.selectionMode), disallowEmptySelection: () => R2(t2.disallowEmptySelection) ?? false, selectionBehavior: l3, setSelectionBehavior: u2, isFocused: r2, setFocused: i2, focusedKey: a2, setFocusedKey: o2, selectedKeys: s3, setSelectedKeys: (e4) => {
      (R2(t2.allowDuplicateSelectionEvents) || !Vn2(e4, s3())) && c2(e4);
    } };
  }
  function Un(e3) {
    let [t2, n2] = v(``), [r2, i2] = v(-1);
    return { typeSelectHandlers: { onKeyDown: (a2) => {
      if (R2(e3.isDisabled)) return;
      let o2 = R2(e3.keyboardDelegate), s3 = R2(e3.selectionManager);
      if (!o2.getKeyForSearch) return;
      let c2 = Wn(a2.key);
      if (!c2 || a2.ctrlKey || a2.metaKey) return;
      c2 === ` ` && t2().trim().length > 0 && (a2.preventDefault(), a2.stopPropagation());
      let l3 = n2((e4) => e4 + c2), u2 = o2.getKeyForSearch(l3, s3.focusedKey()) ?? o2.getKeyForSearch(l3);
      u2 == null && Gn(l3) && (l3 = l3[0], u2 = o2.getKeyForSearch(l3, s3.focusedKey()) ?? o2.getKeyForSearch(l3)), u2 != null && (s3.setFocusedKey(u2), e3.onTypeSelect?.(u2)), clearTimeout(r2()), i2(window.setTimeout(() => n2(``), 500));
    } } };
  }
  function Wn(e3) {
    return e3.length === 1 || !/^[A-Z]/i.test(e3) ? e3 : ``;
  }
  function Gn(e3) {
    return e3.split(``).every((t2) => t2 === e3[0]);
  }
  function Kn(e3, t2, r2) {
    let i2 = Ae({ selectOnFocus: () => R2(e3.selectionManager).selectionBehavior() === `replace` }, e3), a2 = () => r2?.() ?? t2(), { direction: o2 } = Nn2(), s3 = { top: 0, left: 0 };
    lt2(() => R2(i2.isVirtualized) ? void 0 : a2(), `scroll`, () => {
      let e4 = a2();
      e4 && (s3 = { top: e4.scrollTop, left: e4.scrollLeft });
    });
    let { typeSelectHandlers: c2 } = Un({ isDisabled: () => R2(i2.disallowTypeAhead), keyboardDelegate: () => R2(i2.keyboardDelegate), selectionManager: () => R2(i2.selectionManager) }), l3 = () => R2(i2.orientation) ?? `vertical`, d2 = (e4) => {
      U2(e4, c2.onKeyDown), e4.altKey && e4.key === `Tab` && e4.preventDefault();
      let n2 = t2();
      if (!n2?.contains(e4.target)) return;
      let r3 = R2(i2.selectionManager), a3 = R2(i2.selectOnFocus), s4 = (t3) => {
        t3 != null && (r3.setFocusedKey(t3), e4.shiftKey && r3.selectionMode() === `multiple` ? r3.extendSelection(t3) : a3 && !Rn2(e4) && r3.replaceSelection(t3));
      }, u2 = R2(i2.keyboardDelegate), d3 = R2(i2.shouldFocusWrap), f3 = r3.focusedKey();
      switch (e4.key) {
        case (l3() === `vertical` ? `ArrowDown` : `ArrowRight`):
          if (u2.getKeyBelow) {
            e4.preventDefault();
            let t3;
            t3 = f3 == null ? u2.getFirstKey?.() : u2.getKeyBelow(f3), t3 == null && d3 && (t3 = u2.getFirstKey?.(f3)), s4(t3);
          }
          break;
        case (l3() === `vertical` ? `ArrowUp` : `ArrowLeft`):
          if (u2.getKeyAbove) {
            e4.preventDefault();
            let t3;
            t3 = f3 == null ? u2.getLastKey?.() : u2.getKeyAbove(f3), t3 == null && d3 && (t3 = u2.getLastKey?.(f3)), s4(t3);
          }
          break;
        case (l3() === `vertical` ? `ArrowLeft` : `ArrowUp`):
          if (u2.getKeyLeftOf) {
            e4.preventDefault();
            let t3 = o2() === `rtl`, n3;
            n3 = f3 == null ? t3 ? u2.getFirstKey?.() : u2.getLastKey?.() : u2.getKeyLeftOf(f3), s4(n3);
          }
          break;
        case (l3() === `vertical` ? `ArrowRight` : `ArrowDown`):
          if (u2.getKeyRightOf) {
            e4.preventDefault();
            let t3 = o2() === `rtl`, n3;
            n3 = f3 == null ? t3 ? u2.getLastKey?.() : u2.getFirstKey?.() : u2.getKeyRightOf(f3), s4(n3);
          }
          break;
        case `Home`:
          if (u2.getFirstKey) {
            e4.preventDefault();
            let t3 = u2.getFirstKey(f3, zn2(e4));
            t3 != null && (r3.setFocusedKey(t3), zn2(e4) && e4.shiftKey && r3.selectionMode() === `multiple` ? r3.extendSelection(t3) : a3 && r3.replaceSelection(t3));
          }
          break;
        case `End`:
          if (u2.getLastKey) {
            e4.preventDefault();
            let t3 = u2.getLastKey(f3, zn2(e4));
            t3 != null && (r3.setFocusedKey(t3), zn2(e4) && e4.shiftKey && r3.selectionMode() === `multiple` ? r3.extendSelection(t3) : a3 && r3.replaceSelection(t3));
          }
          break;
        case `PageDown`:
          u2.getKeyPageBelow && f3 != null && (e4.preventDefault(), s4(u2.getKeyPageBelow(f3)));
          break;
        case `PageUp`:
          u2.getKeyPageAbove && f3 != null && (e4.preventDefault(), s4(u2.getKeyPageAbove(f3)));
          break;
        case `a`:
          zn2(e4) && r3.selectionMode() === `multiple` && R2(i2.disallowSelectAll) !== true && (e4.preventDefault(), r3.selectAll());
          break;
        case `Escape`:
          e4.defaultPrevented || (e4.preventDefault(), R2(i2.disallowEmptySelection) || r3.clearSelection());
          break;
        case `Tab`:
          if (!R2(i2.allowsTabNavigation)) {
            if (e4.shiftKey) n2.focus();
            else {
              let e5 = Xt2(n2, { tabbable: true }), t3, r4;
              do
                r4 = e5.lastChild(), r4 && (t3 = r4);
              while (r4);
              t3 && !t3.contains(document.activeElement) && G2(t3);
            }
            break;
          }
      }
    }, f2 = (e4) => {
      let t3 = R2(i2.selectionManager), n2 = R2(i2.keyboardDelegate), r3 = R2(i2.selectOnFocus);
      if (t3.isFocused()) {
        e4.currentTarget.contains(e4.target) || t3.setFocused(false);
        return;
      }
      if (e4.currentTarget.contains(e4.target)) {
        if (t3.setFocused(true), t3.focusedKey() == null) {
          let i3 = (e5) => {
            e5 != null && (t3.setFocusedKey(e5), r3 && t3.replaceSelection(e5));
          }, a3 = e4.relatedTarget;
          a3 && e4.currentTarget.compareDocumentPosition(a3) & Node.DOCUMENT_POSITION_FOLLOWING ? i3(t3.lastSelectedKey() ?? n2.getLastKey?.()) : i3(t3.firstSelectedKey() ?? n2.getFirstKey?.());
        } else if (!R2(i2.isVirtualized)) {
          let e5 = a2();
          if (e5) {
            e5.scrollTop = s3.top, e5.scrollLeft = s3.left;
            let n3 = e5.querySelector(`[data-key="${t3.focusedKey()}"]`);
            n3 && (G2(n3), an2(e5, n3));
          }
        }
      }
    }, p3 = (e4) => {
      let t3 = R2(i2.selectionManager);
      e4.currentTarget.contains(e4.relatedTarget) || t3.setFocused(false);
    }, m2 = (e4) => {
      a2() === e4.target && e4.preventDefault();
    }, h3 = () => {
      let e4 = R2(i2.autoFocus);
      if (!e4) return;
      let n2 = R2(i2.selectionManager), r3 = R2(i2.keyboardDelegate), a3;
      e4 === `first` && (a3 = r3.getFirstKey?.()), e4 === `last` && (a3 = r3.getLastKey?.());
      let o3 = n2.selectedKeys();
      o3.size && (a3 = o3.values().next().value), n2.setFocused(true), n2.setFocusedKey(a3);
      let s4 = t2();
      s4 && a3 == null && !R2(i2.shouldUseVirtualFocus) && G2(s4);
    };
    return re(() => {
      i2.deferAutoFocus ? setTimeout(h3, 0) : h3();
    }), x(ne([a2, () => R2(i2.isVirtualized), () => R2(i2.selectionManager).focusedKey()], (e4) => {
      let [t3, n2, r3] = e4;
      if (n2) r3 && i2.scrollToKey?.(r3);
      else if (r3 && t3) {
        let e5 = t3.querySelector(`[data-key="${r3}"]`);
        e5 && an2(t3, e5);
      }
    })), { tabIndex: S(() => {
      if (!R2(i2.shouldUseVirtualFocus)) return R2(i2.selectionManager).focusedKey() == null ? 0 : -1;
    }), onKeyDown: d2, onMouseDown: m2, onFocusIn: f2, onFocusOut: p3 };
  }
  function qn(e3, t2) {
    let r2 = () => R2(e3.selectionManager), i2 = () => R2(e3.key), a2 = () => R2(e3.shouldUseVirtualFocus), o2 = (e4) => {
      r2().selectionMode() !== `none` && (r2().selectionMode() === `single` ? r2().isSelected(i2()) && !r2().disallowEmptySelection() ? r2().toggleSelection(i2()) : r2().replaceSelection(i2()) : e4?.shiftKey ? r2().extendSelection(i2()) : r2().selectionBehavior() === `toggle` || zn2(e4) || `pointerType` in e4 && e4.pointerType === `touch` ? r2().toggleSelection(i2()) : r2().replaceSelection(i2()));
    }, s3 = () => r2().isSelected(i2()), c2 = () => R2(e3.disabled) || r2().isDisabled(i2()), l3 = () => !c2() && r2().canSelectItem(i2()), u2 = null, d2 = (t3) => {
      l3() && (u2 = t3.pointerType, t3.pointerType === `mouse` && t3.button === 0 && !R2(e3.shouldSelectOnPressUp) && o2(t3));
    }, f2 = (t3) => {
      l3() && t3.pointerType === `mouse` && t3.button === 0 && R2(e3.shouldSelectOnPressUp) && R2(e3.allowsDifferentPressOrigin) && o2(t3);
    }, p3 = (t3) => {
      l3() && (R2(e3.shouldSelectOnPressUp) && !R2(e3.allowsDifferentPressOrigin) || u2 !== `mouse`) && o2(t3);
    }, m2 = (e4) => {
      !l3() || ![`Enter`, ` `].includes(e4.key) || (Rn2(e4) ? r2().toggleSelection(i2()) : o2(e4));
    }, h3 = (e4) => {
      c2() && e4.preventDefault();
    }, g2 = (e4) => {
      let n2 = t2();
      a2() || c2() || !n2 || e4.target === n2 && r2().setFocusedKey(i2());
    }, _2 = S(() => {
      if (!(a2() || c2())) return i2() === r2().focusedKey() ? 0 : -1;
    }), v2 = S(() => R2(e3.virtualized) ? void 0 : i2());
    return x(ne([t2, i2, a2, () => r2().focusedKey(), () => r2().isFocused()], ([t3, n2, r3, i3, a3]) => {
      t3 && n2 === i3 && a3 && !r3 && document.activeElement !== t3 && (e3.focus ? e3.focus() : G2(t3));
    })), { isSelected: s3, isDisabled: c2, allowsSelection: l3, tabIndex: _2, dataKey: v2, onPointerDown: d2, onPointerUp: f2, onClick: p3, onKeyDown: m2, onMouseDown: h3, onFocus: g2 };
  }
  function Xn(e3) {
    let t2 = Hn2(e3), n2 = Sn2({ dataSource: () => R2(e3.dataSource), getKey: () => R2(e3.getKey), getTextValue: () => R2(e3.getTextValue), getDisabled: () => R2(e3.getDisabled), getSectionChildren: () => R2(e3.getSectionChildren), factory: (t3) => e3.filter ? new Yn(e3.filter(t3)) : new Yn(t3) }, [() => e3.filter]), r2 = new Jn(n2, t2);
    return y(() => {
      let e4 = t2.focusedKey();
      e4 != null && !n2().getItem(e4) && t2.setFocusedKey(void 0);
    }), { collection: n2, selectionManager: () => r2 };
  }
  function Qn() {
    return oe(Zn);
  }
  function $n() {
    let e3 = Qn();
    if (e3 === void 0) throw Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");
    return e3;
  }
  function er(e3, t2) {
    return !!(t2.compareDocumentPosition(e3) & Node.DOCUMENT_POSITION_PRECEDING);
  }
  function tr(e3, t2) {
    let n2 = t2.ref();
    if (!n2) return -1;
    let r2 = e3.length;
    if (!r2) return -1;
    for (; r2--; ) {
      let t3 = e3[r2]?.ref();
      if (t3 && er(t3, n2)) return r2 + 1;
    }
    return 0;
  }
  function nr(e3) {
    let t2 = e3.map((e4, t3) => [t3, e4]), n2 = false;
    return t2.sort(([e4, t3], [r2, i2]) => {
      let a2 = t3.ref(), o2 = i2.ref();
      return a2 === o2 || !a2 || !o2 ? 0 : er(a2, o2) ? (e4 > r2 && (n2 = true), -1) : (e4 < r2 && (n2 = true), 1);
    }), n2 ? t2.map(([e4, t3]) => t3) : e3;
  }
  function rr(e3, t2) {
    let n2 = nr(e3);
    e3 !== n2 && t2(n2);
  }
  function ir(e3) {
    let t2 = e3[0], n2 = e3[e3.length - 1]?.ref(), r2 = t2?.ref()?.parentElement;
    for (; r2; ) {
      if (n2 && r2.contains(n2)) return r2;
      r2 = r2.parentElement;
    }
    return wt2(r2).body;
  }
  function ar(e3, t2) {
    x(() => {
      let n2 = setTimeout(() => {
        rr(e3(), t2);
      });
      T(() => clearTimeout(n2));
    });
  }
  function or(e3, t2) {
    if (typeof IntersectionObserver != `function`) {
      ar(e3, t2);
      return;
    }
    let r2 = [];
    x(() => {
      let n2 = () => {
        let n3 = !!r2.length;
        r2 = e3(), n3 && rr(e3(), t2);
      }, i2 = ir(e3()), a2 = new IntersectionObserver(n2, { root: i2 });
      for (let t3 of e3()) {
        let e4 = t3.ref();
        e4 && a2.observe(e4);
      }
      T(() => a2.disconnect());
    });
  }
  function sr(e3 = {}) {
    let [t2, n2] = yn2({ value: () => R2(e3.items), onChange: (t3) => e3.onItemsChange?.(t3) });
    or(t2, n2);
    let r2 = (e4) => (n2((t3) => ht2(t3, e4, tr(t3, e4))), () => {
      n2((t3) => {
        let n3 = t3.filter((t4) => t4.ref() !== e4.ref());
        return t3.length === n3.length ? t3 : n3;
      });
    });
    return { DomCollectionProvider: (e4) => Te(Zn.Provider, { value: { registerItem: r2 }, get children() {
      return e4.children;
    } }) };
  }
  function cr(e3) {
    let t2 = $n(), r2 = K2({ shouldRegisterItem: true }, e3);
    x(() => {
      if (!r2.shouldRegisterItem) return;
      let e4 = t2.registerItem(r2.getItem());
      T(e4);
    });
  }
  function gr(e3, t2, n2) {
    return dr(e3, ur(t2, n2));
  }
  function _r(e3, t2) {
    return typeof e3 == `function` ? e3(t2) : e3;
  }
  function vr(e3) {
    return e3.split(`-`)[0];
  }
  function yr(e3) {
    return e3.split(`-`)[1];
  }
  function br(e3) {
    return e3 === `x` ? `y` : `x`;
  }
  function xr(e3) {
    return e3 === `y` ? `height` : `width`;
  }
  function Sr(e3) {
    let t2 = e3[0];
    return t2 === `t` || t2 === `b` ? `y` : `x`;
  }
  function Cr(e3) {
    return br(Sr(e3));
  }
  function wr(e3, t2, n2) {
    n2 === void 0 && (n2 = false);
    let r2 = yr(e3), i2 = Cr(e3), a2 = xr(i2), o2 = i2 === `x` ? r2 === (n2 ? `end` : `start`) ? `right` : `left` : r2 === `start` ? `bottom` : `top`;
    return t2.reference[a2] > t2.floating[a2] && (o2 = Nr(o2)), [o2, Nr(o2)];
  }
  function Tr(e3) {
    let t2 = Nr(e3);
    return [Er(e3), t2, Er(t2)];
  }
  function Er(e3) {
    return e3.includes(`start`) ? e3.replace(`start`, `end`) : e3.replace(`end`, `start`);
  }
  function jr(e3, t2, n2) {
    switch (e3) {
      case `top`:
      case `bottom`:
        return n2 ? t2 ? Or : Dr : t2 ? Dr : Or;
      case `left`:
      case `right`:
        return t2 ? kr : Ar;
      default:
        return [];
    }
  }
  function Mr(e3, t2, n2, r2) {
    let i2 = yr(e3), a2 = jr(vr(e3), n2 === `start`, r2);
    return i2 && (a2 = a2.map((e4) => e4 + `-` + i2), t2 && (a2 = a2.concat(a2.map(Er)))), a2;
  }
  function Nr(e3) {
    let t2 = vr(e3);
    return hr[t2] + e3.slice(t2.length);
  }
  function Pr(e3) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e3 };
  }
  function Fr(e3) {
    return typeof e3 == `number` ? { top: e3, right: e3, bottom: e3, left: e3 } : Pr(e3);
  }
  function Ir(e3) {
    let { x: t2, y: n2, width: r2, height: i2 } = e3;
    return { width: r2, height: i2, top: n2, left: t2, right: t2 + r2, bottom: n2 + i2, x: t2, y: n2 };
  }
  function Lr(e3, t2, n2) {
    let { reference: r2, floating: i2 } = e3, a2 = Sr(t2), o2 = Cr(t2), s3 = xr(o2), c2 = vr(t2), l3 = a2 === `y`, u2 = r2.x + r2.width / 2 - i2.width / 2, d2 = r2.y + r2.height / 2 - i2.height / 2, f2 = r2[s3] / 2 - i2[s3] / 2, p3;
    switch (c2) {
      case `top`:
        p3 = { x: u2, y: r2.y - i2.height };
        break;
      case `bottom`:
        p3 = { x: u2, y: r2.y + r2.height };
        break;
      case `right`:
        p3 = { x: r2.x + r2.width, y: d2 };
        break;
      case `left`:
        p3 = { x: r2.x - i2.width, y: d2 };
        break;
      default:
        p3 = { x: r2.x, y: r2.y };
    }
    switch (yr(t2)) {
      case `start`:
        p3[o2] -= f2 * (n2 && l3 ? -1 : 1);
        break;
      case `end`:
        p3[o2] += f2 * (n2 && l3 ? -1 : 1);
    }
    return p3;
  }
  async function Rr(e3, t2) {
    t2 === void 0 && (t2 = {});
    let { x: n2, y: r2, platform: i2, rects: a2, elements: o2, strategy: s3 } = e3, { boundary: c2 = `clippingAncestors`, rootBoundary: l3 = `viewport`, elementContext: u2 = `floating`, altBoundary: d2 = false, padding: f2 = 0 } = _r(t2, e3), p3 = Fr(f2), m2 = o2[d2 ? u2 === `floating` ? `reference` : `floating` : u2], h3 = Ir(await i2.getClippingRect({ element: await (i2.isElement == null ? void 0 : i2.isElement(m2)) ?? true ? m2 : m2.contextElement || await (i2.getDocumentElement == null ? void 0 : i2.getDocumentElement(o2.floating)), boundary: c2, rootBoundary: l3, strategy: s3 })), g2 = u2 === `floating` ? { x: n2, y: r2, width: a2.floating.width, height: a2.floating.height } : a2.reference, _2 = await (i2.getOffsetParent == null ? void 0 : i2.getOffsetParent(o2.floating)), v2 = await (i2.isElement == null ? void 0 : i2.isElement(_2)) && await (i2.getScale == null ? void 0 : i2.getScale(_2)) || { x: 1, y: 1 }, y2 = Ir(i2.convertOffsetParentRelativeRectToViewportRelativeRect ? await i2.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: o2, rect: g2, offsetParent: _2, strategy: s3 }) : g2);
    return { top: (h3.top - y2.top + p3.top) / v2.y, bottom: (y2.bottom - h3.bottom + p3.bottom) / v2.y, left: (h3.left - y2.left + p3.left) / v2.x, right: (y2.right - h3.right + p3.right) / v2.x };
  }
  function Hr(e3, t2) {
    return { top: e3.top - t2.height, right: e3.right - t2.width, bottom: e3.bottom - t2.height, left: e3.left - t2.width };
  }
  function Ur(e3) {
    return lr.some((t2) => e3[t2] >= 0);
  }
  async function Kr(e3, t2) {
    let { placement: n2, platform: r2, elements: i2 } = e3, a2 = await (r2.isRTL == null ? void 0 : r2.isRTL(i2.floating)), o2 = vr(n2), s3 = yr(n2), c2 = Sr(n2) === `y`, l3 = Gr.has(o2) ? -1 : 1, u2 = a2 && c2 ? -1 : 1, d2 = _r(t2, e3), { mainAxis: f2, crossAxis: p3, alignmentAxis: m2 } = typeof d2 == `number` ? { mainAxis: d2, crossAxis: 0, alignmentAxis: null } : { mainAxis: d2.mainAxis || 0, crossAxis: d2.crossAxis || 0, alignmentAxis: d2.alignmentAxis };
    return s3 && typeof m2 == `number` && (p3 = s3 === `end` ? m2 * -1 : m2), c2 ? { x: p3 * u2, y: f2 * l3 } : { x: f2 * l3, y: p3 * u2 };
  }
  function Xr() {
    return typeof window < `u`;
  }
  function Zr(e3) {
    return ei(e3) ? (e3.nodeName || ``).toLowerCase() : `#document`;
  }
  function Qr(e3) {
    var t2;
    return (e3 == null || (t2 = e3.ownerDocument) == null ? void 0 : t2.defaultView) || window;
  }
  function $r(e3) {
    return ((ei(e3) ? e3.ownerDocument : e3.document) || window.document)?.documentElement;
  }
  function ei(e3) {
    return Xr() ? e3 instanceof Node || e3 instanceof Qr(e3).Node : false;
  }
  function ti(e3) {
    return Xr() ? e3 instanceof Element || e3 instanceof Qr(e3).Element : false;
  }
  function ni(e3) {
    return Xr() ? e3 instanceof HTMLElement || e3 instanceof Qr(e3).HTMLElement : false;
  }
  function ri(e3) {
    return !Xr() || typeof ShadowRoot > `u` ? false : e3 instanceof ShadowRoot || e3 instanceof Qr(e3).ShadowRoot;
  }
  function ii(e3) {
    let { overflow: t2, overflowX: n2, overflowY: r2, display: i2 } = hi(e3);
    return /auto|scroll|overlay|hidden|clip/.test(t2 + r2 + n2) && i2 !== `inline` && i2 !== `contents`;
  }
  function ai(e3) {
    return /^(table|td|th)$/.test(Zr(e3));
  }
  function oi(e3) {
    try {
      if (e3.matches(`:popover-open`)) return true;
    } catch {
    }
    try {
      return e3.matches(`:modal`);
    } catch {
      return false;
    }
  }
  function di(e3) {
    let t2 = ti(e3) ? hi(e3) : e3;
    return li(t2.transform) || li(t2.translate) || li(t2.scale) || li(t2.rotate) || li(t2.perspective) || !pi() && (li(t2.backdropFilter) || li(t2.filter)) || si.test(t2.willChange || ``) || ci.test(t2.contain || ``);
  }
  function fi(e3) {
    let t2 = _i(e3);
    for (; ni(t2) && !mi(t2); ) {
      if (di(t2)) return t2;
      if (oi(t2)) return null;
      t2 = _i(t2);
    }
    return null;
  }
  function pi() {
    return ui ??= typeof CSS < `u` && CSS.supports && CSS.supports(`-webkit-backdrop-filter`, `none`), ui;
  }
  function mi(e3) {
    return /^(html|body|#document)$/.test(Zr(e3));
  }
  function hi(e3) {
    return Qr(e3).getComputedStyle(e3);
  }
  function gi(e3) {
    return ti(e3) ? { scrollLeft: e3.scrollLeft, scrollTop: e3.scrollTop } : { scrollLeft: e3.scrollX, scrollTop: e3.scrollY };
  }
  function _i(e3) {
    if (Zr(e3) === `html`) return e3;
    let t2 = e3.assignedSlot || e3.parentNode || ri(e3) && e3.host || $r(e3);
    return ri(t2) ? t2.host : t2;
  }
  function vi(e3) {
    let t2 = _i(e3);
    return mi(t2) ? e3.ownerDocument ? e3.ownerDocument.body : e3.body : ni(t2) && ii(t2) ? t2 : vi(t2);
  }
  function yi(e3, t2, n2) {
    t2 === void 0 && (t2 = []), n2 === void 0 && (n2 = true);
    let r2 = vi(e3), i2 = r2 === e3.ownerDocument?.body, a2 = Qr(r2);
    if (i2) {
      let e4 = bi(a2);
      return t2.concat(a2, a2.visualViewport || [], ii(r2) ? r2 : [], e4 && n2 ? yi(e4) : []);
    }
    return t2.concat(r2, yi(r2, [], n2));
  }
  function bi(e3) {
    return e3.parent && Object.getPrototypeOf(e3.parent) ? e3.frameElement : null;
  }
  function xi(e3) {
    let t2 = hi(e3), n2 = parseFloat(t2.width) || 0, r2 = parseFloat(t2.height) || 0, i2 = ni(e3), a2 = i2 ? e3.offsetWidth : n2, o2 = i2 ? e3.offsetHeight : r2, s3 = fr(n2) !== a2 || fr(r2) !== o2;
    return s3 && (n2 = a2, r2 = o2), { width: n2, height: r2, $: s3 };
  }
  function Si(e3) {
    return ti(e3) ? e3 : e3.contextElement;
  }
  function Ci(e3) {
    let t2 = Si(e3);
    if (!ni(t2)) return mr(1);
    let n2 = t2.getBoundingClientRect(), { width: r2, height: i2, $: a2 } = xi(t2), o2 = (a2 ? fr(n2.width) : n2.width) / r2, s3 = (a2 ? fr(n2.height) : n2.height) / i2;
    return (!o2 || !Number.isFinite(o2)) && (o2 = 1), (!s3 || !Number.isFinite(s3)) && (s3 = 1), { x: o2, y: s3 };
  }
  function Ti(e3) {
    let t2 = Qr(e3);
    return !pi() || !t2.visualViewport ? wi : { x: t2.visualViewport.offsetLeft, y: t2.visualViewport.offsetTop };
  }
  function Ei(e3, t2, n2) {
    return t2 === void 0 && (t2 = false), !n2 || t2 && n2 !== Qr(e3) ? false : t2;
  }
  function Di(e3, t2, n2, r2) {
    t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
    let i2 = e3.getBoundingClientRect(), a2 = Si(e3), o2 = mr(1);
    t2 && (r2 ? ti(r2) && (o2 = Ci(r2)) : o2 = Ci(e3));
    let s3 = Ei(a2, n2, r2) ? Ti(a2) : mr(0), c2 = (i2.left + s3.x) / o2.x, l3 = (i2.top + s3.y) / o2.y, u2 = i2.width / o2.x, d2 = i2.height / o2.y;
    if (a2) {
      let e4 = Qr(a2), t3 = r2 && ti(r2) ? Qr(r2) : r2, n3 = e4, i3 = bi(n3);
      for (; i3 && r2 && t3 !== n3; ) {
        let e5 = Ci(i3), t4 = i3.getBoundingClientRect(), r3 = hi(i3), a3 = t4.left + (i3.clientLeft + parseFloat(r3.paddingLeft)) * e5.x, o3 = t4.top + (i3.clientTop + parseFloat(r3.paddingTop)) * e5.y;
        c2 *= e5.x, l3 *= e5.y, u2 *= e5.x, d2 *= e5.y, c2 += a3, l3 += o3, n3 = Qr(i3), i3 = bi(n3);
      }
    }
    return Ir({ width: u2, height: d2, x: c2, y: l3 });
  }
  function Oi(e3, t2) {
    let n2 = gi(e3).scrollLeft;
    return t2 ? t2.left + n2 : Di($r(e3)).left + n2;
  }
  function ki(e3, t2) {
    let n2 = e3.getBoundingClientRect();
    return { x: n2.left + t2.scrollLeft - Oi(e3, n2), y: n2.top + t2.scrollTop };
  }
  function Ai(e3) {
    let { elements: t2, rect: n2, offsetParent: r2, strategy: i2 } = e3, a2 = i2 === `fixed`, o2 = $r(r2), s3 = t2 ? oi(t2.floating) : false;
    if (r2 === o2 || s3 && a2) return n2;
    let c2 = { scrollLeft: 0, scrollTop: 0 }, l3 = mr(1), u2 = mr(0), d2 = ni(r2);
    if ((d2 || !d2 && !a2) && ((Zr(r2) !== `body` || ii(o2)) && (c2 = gi(r2)), d2)) {
      let e4 = Di(r2);
      l3 = Ci(r2), u2.x = e4.x + r2.clientLeft, u2.y = e4.y + r2.clientTop;
    }
    let f2 = o2 && !d2 && !a2 ? ki(o2, c2) : mr(0);
    return { width: n2.width * l3.x, height: n2.height * l3.y, x: n2.x * l3.x - c2.scrollLeft * l3.x + u2.x + f2.x, y: n2.y * l3.y - c2.scrollTop * l3.y + u2.y + f2.y };
  }
  function ji(e3) {
    return Array.from(e3.getClientRects());
  }
  function Mi(e3) {
    let t2 = $r(e3), n2 = gi(e3), r2 = e3.ownerDocument.body, i2 = dr(t2.scrollWidth, t2.clientWidth, r2.scrollWidth, r2.clientWidth), a2 = dr(t2.scrollHeight, t2.clientHeight, r2.scrollHeight, r2.clientHeight), o2 = -n2.scrollLeft + Oi(e3), s3 = -n2.scrollTop;
    return hi(r2).direction === `rtl` && (o2 += dr(t2.clientWidth, r2.clientWidth) - i2), { width: i2, height: a2, x: o2, y: s3 };
  }
  function Ni(e3, t2) {
    let n2 = Qr(e3), r2 = $r(e3), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s3 = 0, c2 = 0;
    if (i2) {
      a2 = i2.width, o2 = i2.height;
      let e4 = pi();
      (!e4 || e4 && t2 === `fixed`) && (s3 = i2.offsetLeft, c2 = i2.offsetTop);
    }
    let l3 = Oi(r2);
    if (l3 <= 0) {
      let e4 = r2.ownerDocument, t3 = e4.body, n3 = getComputedStyle(t3), i3 = e4.compatMode === `CSS1Compat` && parseFloat(n3.marginLeft) + parseFloat(n3.marginRight) || 0, o3 = Math.abs(r2.clientWidth - t3.clientWidth - i3);
      o3 <= 25 && (a2 -= o3);
    } else l3 <= 25 && (a2 += l3);
    return { width: a2, height: o2, x: s3, y: c2 };
  }
  function Pi(e3, t2) {
    let n2 = Di(e3, true, t2 === `fixed`), r2 = n2.top + e3.clientTop, i2 = n2.left + e3.clientLeft, a2 = ni(e3) ? Ci(e3) : mr(1);
    return { width: e3.clientWidth * a2.x, height: e3.clientHeight * a2.y, x: i2 * a2.x, y: r2 * a2.y };
  }
  function Fi(e3, t2, n2) {
    let r2;
    if (t2 === `viewport`) r2 = Ni(e3, n2);
    else if (t2 === `document`) r2 = Mi($r(e3));
    else if (ti(t2)) r2 = Pi(t2, n2);
    else {
      let n3 = Ti(e3);
      r2 = { x: t2.x - n3.x, y: t2.y - n3.y, width: t2.width, height: t2.height };
    }
    return Ir(r2);
  }
  function Ii(e3, t2) {
    let n2 = _i(e3);
    return n2 === t2 || !ti(n2) || mi(n2) ? false : hi(n2).position === `fixed` || Ii(n2, t2);
  }
  function Li(e3, t2) {
    let n2 = t2.get(e3);
    if (n2) return n2;
    let r2 = yi(e3, [], false).filter((e4) => ti(e4) && Zr(e4) !== `body`), i2 = null, a2 = hi(e3).position === `fixed`, o2 = a2 ? _i(e3) : e3;
    for (; ti(o2) && !mi(o2); ) {
      let t3 = hi(o2), n3 = di(o2);
      !n3 && t3.position === `fixed` && (i2 = null), (a2 ? !n3 && !i2 : !n3 && t3.position === `static` && i2 && (i2.position === `absolute` || i2.position === `fixed`) || ii(o2) && !n3 && Ii(e3, o2)) ? r2 = r2.filter((e4) => e4 !== o2) : i2 = t3, o2 = _i(o2);
    }
    return t2.set(e3, r2), r2;
  }
  function Ri(e3) {
    let { element: t2, boundary: n2, rootBoundary: r2, strategy: i2 } = e3, a2 = [...n2 === `clippingAncestors` ? oi(t2) ? [] : Li(t2, this._c) : [].concat(n2), r2], o2 = Fi(t2, a2[0], i2), s3 = o2.top, c2 = o2.right, l3 = o2.bottom, u2 = o2.left;
    for (let e4 = 1; e4 < a2.length; e4++) {
      let n3 = Fi(t2, a2[e4], i2);
      s3 = dr(n3.top, s3), c2 = ur(n3.right, c2), l3 = ur(n3.bottom, l3), u2 = dr(n3.left, u2);
    }
    return { width: c2 - u2, height: l3 - s3, x: u2, y: s3 };
  }
  function zi(e3) {
    let { width: t2, height: n2 } = xi(e3);
    return { width: t2, height: n2 };
  }
  function Bi(e3, t2, n2) {
    let r2 = ni(t2), i2 = $r(t2), a2 = n2 === `fixed`, o2 = Di(e3, true, a2, t2), s3 = { scrollLeft: 0, scrollTop: 0 }, c2 = mr(0);
    function l3() {
      c2.x = Oi(i2);
    }
    if (r2 || !r2 && !a2) {
      if ((Zr(t2) !== `body` || ii(i2)) && (s3 = gi(t2)), r2) {
        let e4 = Di(t2, true, a2, t2);
        c2.x = e4.x + t2.clientLeft, c2.y = e4.y + t2.clientTop;
      } else i2 && l3();
    }
    a2 && !r2 && i2 && l3();
    let u2 = i2 && !r2 && !a2 ? ki(i2, s3) : mr(0);
    return { x: o2.left + s3.scrollLeft - c2.x - u2.x, y: o2.top + s3.scrollTop - c2.y - u2.y, width: o2.width, height: o2.height };
  }
  function Vi(e3) {
    return hi(e3).position === `static`;
  }
  function Hi(e3, t2) {
    if (!ni(e3) || hi(e3).position === `fixed`) return null;
    if (t2) return t2(e3);
    let n2 = e3.offsetParent;
    return $r(e3) === n2 && (n2 = n2.ownerDocument.body), n2;
  }
  function Ui(e3, t2) {
    let n2 = Qr(e3);
    if (oi(e3)) return n2;
    if (!ni(e3)) {
      let t3 = _i(e3);
      for (; t3 && !mi(t3); ) {
        if (ti(t3) && !Vi(t3)) return t3;
        t3 = _i(t3);
      }
      return n2;
    }
    let r2 = Hi(e3, t2);
    for (; r2 && ai(r2) && Vi(r2); ) r2 = Hi(r2, t2);
    return r2 && mi(r2) && Vi(r2) && !di(r2) ? n2 : r2 || fi(e3) || n2;
  }
  function Gi(e3) {
    return hi(e3).direction === `rtl`;
  }
  function qi(e3, t2) {
    return e3.x === t2.x && e3.y === t2.y && e3.width === t2.width && e3.height === t2.height;
  }
  function Ji(e3, t2) {
    let n2 = null, r2, i2 = $r(e3);
    function a2() {
      var e4;
      clearTimeout(r2), (e4 = n2) == null || e4.disconnect(), n2 = null;
    }
    function o2(s3, c2) {
      s3 === void 0 && (s3 = false), c2 === void 0 && (c2 = 1), a2();
      let l3 = e3.getBoundingClientRect(), { left: u2, top: d2, width: f2, height: p3 } = l3;
      if (s3 || t2(), !f2 || !p3) return;
      let m2 = pr(d2), h3 = pr(i2.clientWidth - (u2 + f2)), g2 = pr(i2.clientHeight - (d2 + p3)), _2 = pr(u2), v2 = { rootMargin: -m2 + `px ` + -h3 + `px ` + -g2 + `px ` + -_2 + `px`, threshold: dr(0, ur(1, c2)) || 1 }, y2 = true;
      function b2(t3) {
        let n3 = t3[0].intersectionRatio;
        if (n3 !== c2) {
          if (!y2) return o2();
          n3 ? o2(false, n3) : r2 = setTimeout(() => {
            o2(false, 1e-7);
          }, 1e3);
        }
        n3 === 1 && !qi(l3, e3.getBoundingClientRect()) && o2(), y2 = false;
      }
      try {
        n2 = new IntersectionObserver(b2, { ...v2, root: i2.ownerDocument });
      } catch {
        n2 = new IntersectionObserver(b2, v2);
      }
      n2.observe(e3);
    }
    return o2(true), a2;
  }
  function Yi(e3, t2, n2, r2) {
    r2 === void 0 && (r2 = {});
    let { ancestorScroll: i2 = true, ancestorResize: a2 = true, elementResize: o2 = typeof ResizeObserver == `function`, layoutShift: s3 = typeof IntersectionObserver == `function`, animationFrame: c2 = false } = r2, l3 = Si(e3), u2 = i2 || a2 ? [...l3 ? yi(l3) : [], ...t2 ? yi(t2) : []] : [];
    u2.forEach((e4) => {
      i2 && e4.addEventListener(`scroll`, n2, { passive: true }), a2 && e4.addEventListener(`resize`, n2);
    });
    let d2 = l3 && s3 ? Ji(l3, n2) : null, f2 = -1, p3 = null;
    o2 && (p3 = new ResizeObserver((e4) => {
      let [r3] = e4;
      r3 && r3.target === l3 && p3 && t2 && (p3.unobserve(t2), cancelAnimationFrame(f2), f2 = requestAnimationFrame(() => {
        var e5;
        (e5 = p3) == null || e5.observe(t2);
      })), n2();
    }), l3 && !c2 && p3.observe(l3), t2 && p3.observe(t2));
    let m2, h3 = c2 ? Di(e3) : null;
    c2 && g2();
    function g2() {
      let t3 = Di(e3);
      h3 && !qi(h3, t3) && n2(), h3 = t3, m2 = requestAnimationFrame(g2);
    }
    return n2(), () => {
      var e4;
      u2.forEach((e5) => {
        i2 && e5.removeEventListener(`scroll`, n2), a2 && e5.removeEventListener(`resize`, n2);
      }), d2?.(), (e4 = p3) == null || e4.disconnect(), p3 = null, c2 && cancelAnimationFrame(m2);
    };
  }
  function ia() {
    let e3 = oe(ra);
    if (e3 === void 0) throw Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
    return e3;
  }
  function la(e3) {
    let t2 = ia(), n2 = K2({ size: oa }, e3), [r2, i2] = je(n2, [`ref`, `style`, `size`]), a2 = () => t2.currentPlacement().split(`-`)[0], o2 = ua(t2.contentRef), s3 = () => o2()?.getPropertyValue(`background-color`) || `none`, l3 = () => o2()?.getPropertyValue(`border-${a2()}-color`) || `none`, f2 = () => o2()?.getPropertyValue(`border-${a2()}-width`) || `0px`, p3 = () => Number.parseInt(f2()) * 2 * (oa / r2.size), m2 = () => `rotate(${ca[a2()]} ${sa} ${sa}) translate(0 2)`;
    return Te(q2, Ae({ as: `div`, ref(e4) {
      let n3 = H2(t2.setArrowRef, r2.ref);
      typeof n3 == `function` && n3(e4);
    }, "aria-hidden": `true`, get style() {
      return mt2({ position: `absolute`, "font-size": `${r2.size}px`, width: `1em`, height: `1em`, "pointer-events": `none`, fill: s3(), stroke: l3(), "stroke-width": p3() }, r2.style);
    } }, i2, { get children() {
      let e4 = aa(), t3 = e4.firstChild;
      return b(() => R(t3, `transform`, m2())), e4;
    } }));
  }
  function ua(e3) {
    let [t2, r2] = v();
    return x(() => {
      let t3 = e3();
      t3 && r2(Ct2(t3).getComputedStyle(t3));
    }), t2;
  }
  function da(e3) {
    let t2 = ia(), [n2, r2] = je(e3, [`ref`, `style`]);
    return Te(q2, Ae({ as: `div`, ref(e4) {
      let r3 = H2(t2.setPositionerRef, n2.ref);
      typeof r3 == `function` && r3(e4);
    }, "data-popper-positioner": ``, get style() {
      return mt2({ position: `absolute`, top: 0, left: 0, "min-width": `max-content` }, n2.style);
    } }, r2));
  }
  function fa(e3) {
    let { x: t2 = 0, y: n2 = 0, width: r2 = 0, height: i2 = 0 } = e3 ?? {};
    if (typeof DOMRect == `function`) return new DOMRect(t2, n2, r2, i2);
    let a2 = { x: t2, y: n2, width: r2, height: i2, top: n2, right: t2 + r2, bottom: n2 + i2, left: t2 };
    return { ...a2, toJSON: () => a2 };
  }
  function pa(e3, t2) {
    return { contextElement: e3, getBoundingClientRect: () => {
      let n2 = t2(e3);
      return n2 ? fa(n2) : e3 ? e3.getBoundingClientRect() : fa();
    } };
  }
  function ma(e3) {
    return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e3);
  }
  function ga(e3, t2) {
    let [n2, r2] = e3.split(`-`), i2 = ha[n2];
    return r2 ? n2 === `left` || n2 === `right` ? `${i2} ${r2 === `start` ? `top` : `bottom`}` : r2 === `start` ? `${i2} ${t2 === `rtl` ? `right` : `left`}` : `${i2} ${t2 === `rtl` ? `left` : `right`}` : `${i2} center`;
  }
  function _a(e3) {
    let t2 = K2({ getAnchorRect: (e4) => e4?.getBoundingClientRect(), placement: `bottom`, gutter: 0, shift: 0, flip: true, slide: true, overlap: false, sameWidth: false, fitViewport: false, hideWhenDetached: false, detachedPadding: 0, arrowPadding: 4, overflowPadding: 8 }, e3), [r2, i2] = v(), [a2, o2] = v(), [s3, c2] = v(t2.placement), l3 = () => pa(t2.anchorRef?.(), t2.getAnchorRect), { direction: u2 } = Nn2();
    async function f2() {
      let e4 = l3(), n2 = r2(), i3 = a2();
      if (!e4 || !n2) return;
      let o3 = (i3?.clientHeight || 0) / 2, s4 = typeof t2.gutter == `number` ? t2.gutter + o3 : t2.gutter ?? o3;
      n2.style.setProperty(`--kb-popper-content-overflow-padding`, `${t2.overflowPadding}px`), e4.getBoundingClientRect();
      let d2 = [Xi(({ placement: e5 }) => {
        let n3 = !!e5.split(`-`)[1];
        return { mainAxis: s4, crossAxis: n3 ? void 0 : t2.shift, alignmentAxis: t2.shift };
      })];
      if (t2.flip !== false) {
        let e5 = typeof t2.flip == `string` ? t2.flip.split(` `) : void 0;
        if (e5 !== void 0 && !e5.every(ma)) throw Error("`flip` expects a spaced-delimited list of placements");
        d2.push(Qi({ padding: t2.overflowPadding, fallbackPlacements: e5 }));
      }
      (t2.slide || t2.overlap) && d2.push(Zi({ mainAxis: t2.slide, crossAxis: t2.overlap, padding: t2.overflowPadding })), d2.push($i({ padding: t2.overflowPadding, apply({ availableWidth: e5, availableHeight: r3, rects: i4 }) {
        let a3 = Math.round(i4.reference.width);
        e5 = Math.floor(e5), r3 = Math.floor(r3), n2.style.setProperty(`--kb-popper-anchor-width`, `${a3}px`), n2.style.setProperty(`--kb-popper-content-available-width`, `${e5}px`), n2.style.setProperty(`--kb-popper-content-available-height`, `${r3}px`), t2.sameWidth && (n2.style.width = `${a3}px`), t2.fitViewport && (n2.style.maxWidth = `${e5}px`, n2.style.maxHeight = `${r3}px`);
      } })), t2.hideWhenDetached && d2.push(ea({ padding: t2.detachedPadding })), i3 && d2.push(ta({ element: i3, padding: t2.arrowPadding }));
      let f3 = await na(e4, n2, { placement: t2.placement, strategy: `absolute`, middleware: d2, platform: { ...Ki, isRTL: () => u2() === `rtl` } });
      if (c2(f3.placement), t2.onCurrentPlacementChange?.(f3.placement), !n2) return;
      n2.style.setProperty(`--kb-popper-content-transform-origin`, ga(f3.placement, u2()));
      let p4 = Math.round(f3.x), m2 = Math.round(f3.y), h3;
      if (t2.hideWhenDetached && (h3 = f3.middlewareData.hide?.referenceHidden ? `hidden` : `visible`), Object.assign(n2.style, { top: `0`, left: `0`, transform: `translate3d(${p4}px, ${m2}px, 0)`, visibility: h3 }), i3 && f3.middlewareData.arrow) {
        let { x: e5, y: t3 } = f3.middlewareData.arrow, n3 = f3.placement.split(`-`)[0];
        Object.assign(i3.style, { left: e5 == null ? `` : `${e5}px`, top: t3 == null ? `` : `${t3}px`, [n3]: `100%` });
      }
    }
    x(() => {
      let e4 = l3(), t3 = r2();
      if (!e4 || !t3) return;
      let n2 = Yi(e4, t3, f2, { elementResize: typeof ResizeObserver == `function` });
      T(n2);
    }), x(() => {
      let e4 = r2(), n2 = t2.contentRef?.();
      !e4 || !n2 || queueMicrotask(() => {
        e4.style.zIndex = getComputedStyle(n2).zIndex;
      });
    });
    let p3 = { currentPlacement: s3, contentRef: () => t2.contentRef?.(), setPositionerRef: i2, setArrowRef: o2 };
    return Te(ra.Provider, { value: p3, get children() {
      return t2.children;
    } });
  }
  function Ca(e3) {
    return Sa.findIndex((t2) => t2.node === e3);
  }
  function wa(e3) {
    return Sa[Ca(e3)];
  }
  function Ta(e3) {
    return Sa[Sa.length - 1].node === e3;
  }
  function Ea() {
    return Sa.filter((e3) => e3.isPointerBlocking);
  }
  function Da() {
    return [...Ea()].slice(-1)[0];
  }
  function Oa() {
    return Ea().length > 0;
  }
  function ka(e3) {
    let t2 = Ca(Da()?.node);
    return Ca(e3) < t2;
  }
  function Aa(e3) {
    Sa.push(e3);
  }
  function ja(e3) {
    let t2 = Ca(e3);
    t2 < 0 || Sa.splice(t2, 1);
  }
  function Ma() {
    for (let { node: e3 } of Sa) e3.style.pointerEvents = ka(e3) ? `none` : `auto`;
  }
  function Na(e3) {
    if (Oa() && !xa) {
      let t2 = wt2(e3);
      ba = document.body.style.pointerEvents, t2.body.style.pointerEvents = `none`, xa = true;
    }
  }
  function Pa(e3) {
    if (Oa()) return;
    let t2 = wt2(e3);
    t2.body.style.pointerEvents = ba, t2.body.style.length === 0 && t2.body.removeAttribute(`style`), xa = false;
  }
  function Ra(e3, t2) {
    let r2, i2 = $t2, a2 = () => wt2(t2()), o2 = (t3) => e3.onPointerDownOutside?.(t3), s3 = (t3) => e3.onFocusOutside?.(t3), c2 = (t3) => e3.onInteractOutside?.(t3), l3 = (n2) => {
      let r3 = n2.target;
      return !(r3 instanceof Element) || r3.closest(`[data-kb-top-layer]`) || !xt2(a2(), r3) || xt2(t2(), r3) ? false : !e3.shouldExcludeElement?.(r3);
    }, u2 = (e4) => {
      function n2() {
        let n3 = t2(), r3 = e4.target;
        if (!n3 || !r3 || !l3(e4)) return;
        let i3 = W2([o2, c2]);
        r3.addEventListener(Ia, i3, { once: true });
        let a3 = new CustomEvent(Ia, { bubbles: false, cancelable: true, detail: { originalEvent: e4, isContextMenu: e4.button === 2 || Nt2(e4) && e4.button === 0 } });
        r3.dispatchEvent(a3);
      }
      e4.pointerType === `touch` ? (a2().removeEventListener(`click`, n2), i2 = n2, a2().addEventListener(`click`, n2, { once: true })) : n2();
    }, d2 = (e4) => {
      let n2 = t2(), r3 = e4.target;
      if (!n2 || !r3 || !l3(e4)) return;
      let i3 = W2([s3, c2]);
      r3.addEventListener(La, i3, { once: true });
      let a3 = new CustomEvent(La, { bubbles: false, cancelable: true, detail: { originalEvent: e4, isContextMenu: false } });
      r3.dispatchEvent(a3);
    };
    x(() => {
      R2(e3.isDisabled) || (r2 = window.setTimeout(() => {
        a2().addEventListener(`pointerdown`, u2, true);
      }, 0), a2().addEventListener(`focusin`, d2, true), T(() => {
        window.clearTimeout(r2), a2().removeEventListener(`click`, i2), a2().removeEventListener(`pointerdown`, u2, true), a2().removeEventListener(`focusin`, d2, true);
      }));
    });
  }
  function za(e3) {
    let t2 = (t3) => {
      t3.key === Et2.Escape && e3.onEscapeKeyDown?.(t3);
    };
    x(() => {
      if (R2(e3.isDisabled)) return;
      let n2 = e3.ownerDocument?.() ?? wt2();
      n2.addEventListener(`keydown`, t2), T(() => {
        n2.removeEventListener(`keydown`, t2);
      });
    });
  }
  function Va() {
    return oe(Ba);
  }
  function Ha(e3) {
    let t2, r2 = Va(), [i2, a2] = je(e3, [`ref`, `disableOutsidePointerEvents`, `excludedElements`, `onEscapeKeyDown`, `onPointerDownOutside`, `onFocusOutside`, `onInteractOutside`, `onDismiss`, `bypassTopMostLayerCheck`]), o2 = /* @__PURE__ */ new Set([]), s3 = (e4) => {
      o2.add(e4);
      let t3 = r2?.registerNestedLayer(e4);
      return () => {
        o2.delete(e4), t3?.();
      };
    };
    Ra({ shouldExcludeElement: (e4) => t2 ? i2.excludedElements?.some((t3) => xt2(t3(), e4)) || [...o2].some((t3) => xt2(t3, e4)) : false, onPointerDownOutside: (e4) => {
      !t2 || Fa.isBelowPointerBlockingLayer(t2) || !i2.bypassTopMostLayerCheck && !Fa.isTopMostLayer(t2) || (i2.onPointerDownOutside?.(e4), i2.onInteractOutside?.(e4), e4.defaultPrevented || i2.onDismiss?.());
    }, onFocusOutside: (e4) => {
      i2.onFocusOutside?.(e4), i2.onInteractOutside?.(e4), e4.defaultPrevented || i2.onDismiss?.();
    } }, () => t2), za({ ownerDocument: () => wt2(t2), onEscapeKeyDown: (e4) => {
      !t2 || !Fa.isTopMostLayer(t2) || (i2.onEscapeKeyDown?.(e4), !e4.defaultPrevented && i2.onDismiss && (e4.preventDefault(), i2.onDismiss()));
    } }), re(() => {
      if (!t2) return;
      Fa.addLayer({ node: t2, isPointerBlocking: i2.disableOutsidePointerEvents, dismiss: i2.onDismiss });
      let e4 = r2?.registerNestedLayer(t2);
      Fa.assignPointerEventToLayers(), Fa.disableBodyPointerEvents(t2), T(() => {
        t2 && (Fa.removeLayer(t2), e4?.(), Fa.assignPointerEventToLayers(), Fa.restoreBodyPointerEvents(t2));
      });
    }), x(ne([() => t2, () => i2.disableOutsidePointerEvents], ([e4, t3]) => {
      if (!e4) return;
      let n2 = Fa.find(e4);
      n2 && n2.isPointerBlocking !== t3 && (n2.isPointerBlocking = t3, Fa.assignPointerEventToLayers()), t3 && Fa.disableBodyPointerEvents(e4), T(() => {
        Fa.restoreBodyPointerEvents(e4);
      });
    }, { defer: true }));
    let c2 = { registerNestedLayer: s3 };
    return Te(Ba.Provider, { value: c2, get children() {
      return Te(q2, Ae({ as: `div`, ref(e4) {
        let n2 = H2((e5) => t2 = e5, i2.ref);
        typeof n2 == `function` && n2(e4);
      } }, a2));
    } });
  }
  function Ua(e3 = {}) {
    let [t2, n2] = vn2({ value: () => R2(e3.open), defaultValue: () => !!R2(e3.defaultOpen), onChange: (t3) => e3.onOpenChange?.(t3) }), r2 = () => {
      n2(true);
    }, i2 = () => {
      n2(false);
    };
    return { isOpen: t2, setIsOpen: n2, open: r2, close: i2, toggle: () => {
      t2() ? i2() : r2();
    } };
  }
  function Wa(e3) {
    return (t2) => (e3(t2), () => e3(void 0));
  }
  function qa(e3) {
    let t2 = K2({ id: `form-control-${Pe()}` }, e3), [n2, r2] = v(), [i2, a2] = v(), [o2, c2] = v(), [l3, u2] = v();
    return { formControlContext: { name: () => R2(t2.name) ?? R2(t2.id), dataset: S(() => ({ "data-valid": R2(t2.validationState) === `valid` ? `` : void 0, "data-invalid": R2(t2.validationState) === `invalid` ? `` : void 0, "data-required": R2(t2.required) ? `` : void 0, "data-disabled": R2(t2.disabled) ? `` : void 0, "data-readonly": R2(t2.readOnly) ? `` : void 0 })), validationState: () => R2(t2.validationState), isRequired: () => R2(t2.required), isDisabled: () => R2(t2.disabled), isReadOnly: () => R2(t2.readOnly), labelId: n2, fieldId: i2, descriptionId: o2, errorMessageId: l3, getAriaLabelledBy: (e4, t3, r3) => {
      let i3 = r3 != null || n2() != null;
      return [r3, n2(), i3 && t3 != null ? e4 : void 0].filter(Boolean).join(` `) || void 0;
    }, getAriaDescribedBy: (e4) => [o2(), l3(), e4].filter(Boolean).join(` `) || void 0, generateId: bt2(() => R2(t2.id)), registerLabel: Wa(r2), registerField: Wa(a2), registerDescription: Wa(c2), registerErrorMessage: Wa(u2) } };
  }
  function Ya() {
    let e3 = oe(Ja);
    if (e3 === void 0) throw Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
    return e3;
  }
  function Xa(e3) {
    let t2 = Ya(), r2 = K2({ id: t2.generateId(`description`) }, e3);
    return x(() => T(t2.registerDescription(r2.id))), Te(q2, Ae({ as: `div` }, () => t2.dataset(), r2));
  }
  function Za(e3) {
    let t2, i2 = Ya(), a2 = K2({ id: i2.generateId(`label`) }, e3), [o2, s3] = je(a2, [`ref`]), c2 = ln2(() => t2, () => `label`);
    return x(() => T(i2.registerLabel(s3.id))), Te(q2, Ae({ as: `label`, ref(e4) {
      let n2 = H2((e5) => t2 = e5, o2.ref);
      typeof n2 == `function` && n2(e4);
    }, get for() {
      return Ye(() => c2() === `label`)() ? i2.fieldId() : void 0;
    } }, () => i2.dataset(), s3));
  }
  function Qa(e3, t2) {
    x(ne(e3, (e4) => {
      if (e4 == null) return;
      let n2 = $a(e4);
      n2 != null && (n2.addEventListener(`reset`, t2, { passive: true }), T(() => {
        n2.removeEventListener(`reset`, t2);
      }));
    }));
  }
  function $a(e3) {
    return eo(e3) ? e3.form : e3.closest(`form`);
  }
  function eo(e3) {
    return e3.matches(`textarea, input, select, button`);
  }
  function to(e3) {
    let t2 = Ya(), r2 = K2({ id: t2.generateId(`error-message`) }, e3), [i2, a2] = je(r2, [`forceMount`]), o2 = () => t2.validationState() === `invalid`;
    return x(() => {
      o2() && T(t2.registerErrorMessage(a2.id));
    }), Te(Re, { get when() {
      return i2.forceMount || o2();
    }, get children() {
      return Te(q2, Ae({ as: `div` }, () => t2.dataset(), a2));
    } });
  }
  function oo(e3, t2) {
    let [r2, i2] = v(false), a2 = { pause() {
      i2(true);
    }, resume() {
      i2(false);
    } }, o2 = null, s3 = (t3) => e3.onMountAutoFocus?.(t3), c2 = (t3) => e3.onUnmountAutoFocus?.(t3), l3 = () => wt2(t2()), u2 = () => {
      let e4 = l3().createElement(`span`);
      return e4.setAttribute(`data-focus-trap`, ``), e4.tabIndex = 0, Object.assign(e4.style, cn2), e4;
    }, d2 = () => {
      let e4 = t2();
      return e4 ? Ht2(e4, true).filter((e5) => !e5.hasAttribute(`data-focus-trap`)) : [];
    }, f2 = () => {
      let e4 = d2();
      return e4.length > 0 ? e4[0] : null;
    }, p3 = () => {
      let e4 = d2();
      return e4.length > 0 ? e4[e4.length - 1] : null;
    }, m2 = () => {
      let e4 = t2();
      if (!e4) return false;
      let n2 = St2(e4);
      return !n2 || xt2(e4, n2) ? false : Wt2(n2);
    };
    x(() => {
      let e4 = t2();
      if (!e4) return;
      ao.add(a2);
      let n2 = St2(e4);
      if (!xt2(e4, n2)) {
        let t3 = new CustomEvent(no, io);
        e4.addEventListener(no, s3), e4.dispatchEvent(t3), t3.defaultPrevented || setTimeout(() => {
          G2(f2()), St2(e4) === n2 && G2(e4);
        }, 0);
      }
      T(() => {
        e4.removeEventListener(no, s3), setTimeout(() => {
          let t3 = new CustomEvent(ro, io);
          m2() && t3.preventDefault(), e4.addEventListener(ro, c2), e4.dispatchEvent(t3), t3.defaultPrevented || G2(n2 ?? l3().body), e4.removeEventListener(ro, c2), ao.remove(a2);
        }, 0);
      });
    }), x(() => {
      let n2 = t2();
      if (!n2 || !R2(e3.trapFocus) || r2()) return;
      let i3 = (e4) => {
        let t3 = e4.target;
        t3?.closest(`[data-kb-top-layer]`) || (xt2(n2, t3) ? o2 = t3 : G2(o2));
      }, a3 = (e4) => {
        let t3 = e4.relatedTarget ?? St2(n2);
        t3?.closest(`[data-kb-top-layer]`) || xt2(n2, t3) || G2(o2);
      };
      l3().addEventListener(`focusin`, i3), l3().addEventListener(`focusout`, a3), T(() => {
        l3().removeEventListener(`focusin`, i3), l3().removeEventListener(`focusout`, a3);
      });
    }), x(() => {
      let n2 = t2();
      if (!n2 || !R2(e3.trapFocus) || r2()) return;
      let i3 = u2();
      n2.insertAdjacentElement(`afterbegin`, i3);
      let a3 = u2();
      n2.insertAdjacentElement(`beforeend`, a3);
      function o3(e4) {
        let t3 = f2(), n3 = p3();
        e4.relatedTarget === t3 ? G2(n3) : G2(t3);
      }
      i3.addEventListener(`focusin`, o3), a3.addEventListener(`focusin`, o3);
      let s4 = new MutationObserver((e4) => {
        for (let t3 of e4) t3.previousSibling === a3 && (a3.remove(), n2.insertAdjacentElement(`beforeend`, a3)), t3.nextSibling === i3 && (i3.remove(), n2.insertAdjacentElement(`afterbegin`, i3));
      });
      s4.observe(n2, { childList: true, subtree: false }), T(() => {
        i3.removeEventListener(`focusin`, o3), a3.removeEventListener(`focusin`, o3), i3.remove(), a3.remove(), s4.disconnect();
      });
    });
  }
  function co(e3) {
    x(() => {
      R2(e3.isDisabled) || T(fo(R2(e3.targets), R2(e3.root)));
    });
  }
  function fo(e3, t2 = document.body) {
    let n2 = new Set(e3), r2 = /* @__PURE__ */ new Set(), i2 = (e4) => {
      for (let t4 of e4.querySelectorAll(`[${so}], [${ya}]`)) n2.add(t4);
      let t3 = (e5) => {
        if (n2.has(e5) || e5.parentElement && r2.has(e5.parentElement) && e5.parentElement.getAttribute(`role`) !== `row`) return NodeFilter.FILTER_REJECT;
        for (let t4 of n2) if (e5.contains(t4)) return NodeFilter.FILTER_SKIP;
        return NodeFilter.FILTER_ACCEPT;
      }, i3 = document.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, { acceptNode: t3 }), o3 = t3(e4);
      if (o3 === NodeFilter.FILTER_ACCEPT && a2(e4), o3 !== NodeFilter.FILTER_REJECT) {
        let e5 = i3.nextNode();
        for (; e5 != null; ) a2(e5), e5 = i3.nextNode();
      }
    }, a2 = (e4) => {
      let t3 = lo.get(e4) ?? 0;
      (e4.getAttribute(`aria-hidden`) !== `true` || t3 !== 0) && (t3 === 0 && e4.setAttribute(`aria-hidden`, `true`), r2.add(e4), lo.set(e4, t3 + 1));
    };
    uo.length && uo[uo.length - 1].disconnect(), i2(t2);
    let o2 = new MutationObserver((e4) => {
      for (let t3 of e4) if (t3.type === `childList` && t3.addedNodes.length !== 0 && ![...n2, ...r2].some((e5) => e5.contains(t3.target))) {
        for (let e5 of t3.removedNodes) e5 instanceof Element && (n2.delete(e5), r2.delete(e5));
        for (let e5 of t3.addedNodes) (e5 instanceof HTMLElement || e5 instanceof SVGElement) && (e5.dataset.liveAnnouncer === `true` || e5.dataset.reactAriaTopLayer === `true`) ? n2.add(e5) : e5 instanceof Element && i2(e5);
      }
    });
    o2.observe(t2, { childList: true, subtree: true });
    let s3 = { observe() {
      o2.observe(t2, { childList: true, subtree: true });
    }, disconnect() {
      o2.disconnect();
    } };
    return uo.push(s3), () => {
      o2.disconnect();
      for (let e4 of r2) {
        let t3 = lo.get(e4);
        if (t3 == null) return;
        t3 === 1 ? (e4.removeAttribute(`aria-hidden`), lo.delete(e4)) : lo.set(e4, t3 - 1);
      }
      s3 === uo[uo.length - 1] ? (uo.pop(), uo.length && uo[uo.length - 1].observe()) : uo.splice(uo.indexOf(s3), 1);
    };
  }
  function ko() {
    let e3 = oe(Oo);
    if (e3 === void 0) throw Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");
    return e3;
  }
  function jo() {
    let e3 = oe(Ao);
    if (e3 === void 0) throw Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");
    return e3;
  }
  function Mo(e3) {
    let t2 = Ya(), n2 = ko(), r2 = K2({ id: `${t2.generateId(`item`)}-${Pe()}` }, e3), [i2, a2] = je(r2, [`value`, `disabled`, `onPointerDown`]), [o2, c2] = v(), [l3, f2] = v(), [p3, m2] = v(), [h3, _2] = v(), [v2, y2] = v(false), b2 = S(() => n2.isDefaultValue(i2.value)), C2 = S(() => n2.isSelectedValue(i2.value)), w2 = S(() => i2.disabled || t2.isDisabled() || false), T2 = (e4) => {
      U2(e4, i2.onPointerDown), v2() && e4.preventDefault();
    }, E2 = S(() => ({ ...t2.dataset(), "data-disabled": w2() ? `` : void 0, "data-checked": C2() ? `` : void 0 })), D2 = { value: () => i2.value, dataset: E2, isDefault: b2, isSelected: C2, isDisabled: w2, inputId: o2, labelId: l3, descriptionId: p3, inputRef: h3, select: () => n2.setSelectedValue(i2.value), generateId: bt2(() => a2.id), registerInput: Wa(c2), registerLabel: Wa(f2), registerDescription: Wa(m2), setIsFocused: y2, setInputRef: _2 };
    return Te(Ao.Provider, { value: D2, get children() {
      return Te(q2, Ae({ as: `div`, role: `group`, onPointerDown: T2 }, E2, a2));
    } });
  }
  function No(e3) {
    let t2 = jo(), n2 = K2({ id: t2.generateId(`control`) }, e3), [r2, i2] = je(n2, [`onClick`, `onKeyDown`]);
    return Te(q2, Ae({ as: `div`, onClick: (e4) => {
      U2(e4, r2.onClick), t2.select(), t2.inputRef()?.focus();
    }, onKeyDown: (e4) => {
      U2(e4, r2.onKeyDown), e4.key === Et2.Space && (t2.select(), t2.inputRef()?.focus());
    } }, () => t2.dataset(), i2));
  }
  function Po(e3) {
    let t2 = jo(), r2 = K2({ id: t2.generateId(`description`) }, e3);
    return x(() => T(t2.registerDescription(r2.id))), Te(q2, Ae({ as: `div` }, () => t2.dataset(), r2));
  }
  function Fo(e3) {
    let t2 = jo(), n2 = K2({ id: t2.generateId(`indicator`) }, e3), [r2, i2] = je(n2, [`ref`, `forceMount`]), [a2, o2] = v(), { present: s3 } = Ga({ show: () => r2.forceMount || t2.isSelected(), element: () => a2() ?? null });
    return Te(Re, { get when() {
      return s3();
    }, get children() {
      return Te(q2, Ae({ as: `div`, ref(e4) {
        let t3 = H2(o2, r2.ref);
        typeof t3 == `function` && t3(e4);
      } }, () => t2.dataset(), i2));
    } });
  }
  function Io(e3) {
    let t2 = Ya(), r2 = ko(), i2 = jo(), a2 = K2({ id: i2.generateId(`input`) }, e3), [o2, s3] = je(a2, [`ref`, `style`, `aria-labelledby`, `aria-describedby`, `onChange`, `onFocus`, `onBlur`]), c2 = () => [o2[`aria-labelledby`], i2.labelId(), o2[`aria-labelledby`] != null && s3[`aria-label`] != null ? s3.id : void 0].filter(Boolean).join(` `) || void 0, l3 = () => [o2[`aria-describedby`], i2.descriptionId(), r2.ariaDescribedBy()].filter(Boolean).join(` `) || void 0, [f2, p3] = v(false);
    return x(ne([() => i2.isSelected(), () => i2.value()], (e4) => {
      if (!e4[0] && e4[1] === i2.value()) return;
      p3(true);
      let t3 = i2.inputRef();
      t3?.dispatchEvent(new Event(`input`, { bubbles: true, cancelable: true })), t3?.dispatchEvent(new Event(`change`, { bubbles: true, cancelable: true }));
    }, { defer: true })), x(() => T(i2.registerInput(s3.id))), Te(q2, Ae({ as: `input`, ref(e4) {
      let t3 = H2(i2.setInputRef, o2.ref);
      typeof t3 == `function` && t3(e4);
    }, type: `radio`, get name() {
      return t2.name();
    }, get value() {
      return i2.value();
    }, get checked() {
      return i2.isSelected();
    }, get required() {
      return t2.isRequired();
    }, get disabled() {
      return i2.isDisabled();
    }, get readonly() {
      return t2.isReadOnly();
    }, get style() {
      return mt2({ ...cn2 }, o2.style);
    }, get "aria-labelledby"() {
      return c2();
    }, get "aria-describedby"() {
      return l3();
    }, onChange: (e4) => {
      if (U2(e4, o2.onChange), e4.stopPropagation(), !f2()) {
        r2.setSelectedValue(i2.value());
        let t3 = e4.target;
        t3.checked = i2.isSelected();
      }
      p3(false);
    }, onFocus: (e4) => {
      U2(e4, o2.onFocus), i2.setIsFocused(true);
    }, onBlur: (e4) => {
      U2(e4, o2.onBlur), i2.setIsFocused(false);
    } }, () => i2.dataset(), s3));
  }
  function Lo(e3) {
    let t2 = jo(), r2 = K2({ id: t2.generateId(`label`) }, e3);
    return x(() => T(t2.registerLabel(r2.id))), Te(q2, Ae({ as: `label`, get for() {
      return t2.inputId();
    } }, () => t2.dataset(), r2));
  }
  function Ro(e3) {
    return Te(Za, Ae({ as: `span` }, e3));
  }
  function zo(e3) {
    let t2, n2 = K2({ id: `radiogroup-${Pe()}`, orientation: `vertical` }, e3), [r2, i2, a2] = je(n2, [`ref`, `value`, `defaultValue`, `onChange`, `orientation`, `aria-labelledby`, `aria-describedby`], Ka), [o2, c2] = _n2({ value: () => r2.value, defaultValue: () => r2.defaultValue, onChange: (e4) => r2.onChange?.(e4) }), { formControlContext: l3 } = qa(i2);
    Qa(() => t2, () => c2(r2.defaultValue ?? ``));
    let f2 = () => l3.getAriaLabelledBy(R2(i2.id), a2[`aria-label`], r2[`aria-labelledby`]), p3 = () => l3.getAriaDescribedBy(r2[`aria-describedby`]), m2 = (t3) => t3 === e3.defaultValue, h3 = (e4) => e4 === o2(), _2 = { ariaDescribedBy: p3, isDefaultValue: m2, isSelectedValue: h3, setSelectedValue: (e4) => {
      if (!(l3.isReadOnly() || l3.isDisabled()) && (c2(e4), t2)) for (let e5 of t2.querySelectorAll(`[type='radio']`)) {
        let t3 = e5;
        t3.checked = h3(t3.value);
      }
    } };
    return Te(Ja.Provider, { value: l3, get children() {
      return Te(Oo.Provider, { value: _2, get children() {
        return Te(q2, Ae({ as: `div`, ref(e4) {
          let n3 = H2((e5) => t2 = e5, r2.ref);
          typeof n3 == `function` && n3(e4);
        }, role: `radiogroup`, get id() {
          return R2(i2.id);
        }, get "aria-invalid"() {
          return l3.validationState() === `invalid` || void 0;
        }, get "aria-required"() {
          return l3.isRequired() || void 0;
        }, get "aria-disabled"() {
          return l3.isDisabled() || void 0;
        }, get "aria-readonly"() {
          return l3.isReadOnly() || void 0;
        }, get "aria-orientation"() {
          return r2.orientation;
        }, get "aria-labelledby"() {
          return f2();
        }, get "aria-describedby"() {
          return p3();
        } }, () => l3.dataset(), a2));
      } });
    } });
  }
  function Ho(e3, t2, n2) {
    let r2 = Fn2({ usage: `search`, sensitivity: `base` });
    return Kn({ selectionManager: () => R2(e3.selectionManager), keyboardDelegate: S(() => R2(e3.keyboardDelegate) || new Vo(e3.collection, t2, r2)), autoFocus: () => R2(e3.autoFocus), deferAutoFocus: () => R2(e3.deferAutoFocus), shouldFocusWrap: () => R2(e3.shouldFocusWrap), disallowEmptySelection: () => R2(e3.disallowEmptySelection), selectOnFocus: () => R2(e3.selectOnFocus), disallowTypeAhead: () => R2(e3.disallowTypeAhead), shouldUseVirtualFocus: () => R2(e3.shouldUseVirtualFocus), allowsTabNavigation: () => R2(e3.allowsTabNavigation), isVirtualized: () => R2(e3.isVirtualized), scrollToKey: (t3) => R2(e3.scrollToKey)?.(t3), orientation: () => R2(e3.orientation) }, t2, n2);
  }
  function Wo() {
    return oe(Uo);
  }
  function Ko() {
    return oe(Go);
  }
  function Jo() {
    return oe(qo);
  }
  function Yo() {
    let e3 = Jo();
    if (e3 === void 0) throw Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");
    return e3;
  }
  function Zo() {
    let e3 = oe(Xo);
    if (e3 === void 0) throw Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");
    return e3;
  }
  function $o() {
    let e3 = oe(Qo);
    if (e3 === void 0) throw Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");
    return e3;
  }
  function es(e3) {
    let t2, n2 = $o(), r2 = Yo(), i2 = K2({ id: n2.generateId(`item-${Pe()}`) }, e3), [a2, o2] = je(i2, [`ref`, `textValue`, `disabled`, `closeOnSelect`, `checked`, `indeterminate`, `onSelect`, `onPointerMove`, `onPointerLeave`, `onPointerDown`, `onPointerUp`, `onClick`, `onKeyDown`, `onMouseDown`, `onFocus`]), [c2, l3] = v(), [f2, p3] = v(), [m2, h3] = v(), _2 = () => r2.listState().selectionManager(), v2 = () => o2.id, y2 = () => _2().focusedKey() === v2(), b2 = () => {
      a2.onSelect?.(), a2.closeOnSelect && setTimeout(() => {
        r2.close(true);
      });
    };
    cr({ getItem: () => ({ ref: () => t2, type: `item`, key: v2(), textValue: a2.textValue ?? m2()?.textContent ?? t2?.textContent ?? ``, disabled: a2.disabled ?? false }) });
    let C2 = qn({ key: v2, selectionManager: _2, shouldSelectOnPressUp: true, allowsDifferentPressOrigin: true, disabled: () => a2.disabled }, () => t2), w2 = (e4) => {
      U2(e4, a2.onPointerMove), e4.pointerType === `mouse` && (a2.disabled ? r2.onItemLeave(e4) : (r2.onItemEnter(e4), e4.defaultPrevented || (G2(e4.currentTarget), r2.listState().selectionManager().setFocused(true), r2.listState().selectionManager().setFocusedKey(v2()))));
    }, T2 = (e4) => {
      U2(e4, a2.onPointerLeave), e4.pointerType === `mouse` && r2.onItemLeave(e4);
    }, E2 = (e4) => {
      U2(e4, a2.onPointerUp), !a2.disabled && e4.button === 0 && b2();
    }, D2 = (e4) => {
      if (U2(e4, a2.onKeyDown), !e4.repeat && !a2.disabled) switch (e4.key) {
        case `Enter`:
        case ` `:
          b2();
      }
    }, O2 = S(() => {
      if (a2.indeterminate) return `mixed`;
      if (a2.checked != null) return a2.checked;
    }), k2 = S(() => ({ "data-indeterminate": a2.indeterminate ? `` : void 0, "data-checked": a2.checked && !a2.indeterminate ? `` : void 0, "data-disabled": a2.disabled ? `` : void 0, "data-highlighted": y2() ? `` : void 0 })), A2 = { isChecked: () => a2.checked, dataset: k2, setLabelRef: h3, generateId: bt2(() => o2.id), registerLabel: Wa(l3), registerDescription: Wa(p3) };
    return Te(Xo.Provider, { value: A2, get children() {
      return Te(q2, Ae({ as: `div`, ref(e4) {
        let n3 = H2((e5) => t2 = e5, a2.ref);
        typeof n3 == `function` && n3(e4);
      }, get tabIndex() {
        return C2.tabIndex();
      }, get "aria-checked"() {
        return O2();
      }, get "aria-disabled"() {
        return a2.disabled;
      }, get "aria-labelledby"() {
        return c2();
      }, get "aria-describedby"() {
        return f2();
      }, get "data-key"() {
        return C2.dataKey();
      }, get onPointerDown() {
        return W2([a2.onPointerDown, C2.onPointerDown]);
      }, get onPointerUp() {
        return W2([E2, C2.onPointerUp]);
      }, get onClick() {
        return W2([a2.onClick, C2.onClick]);
      }, get onKeyDown() {
        return W2([D2, C2.onKeyDown]);
      }, get onMouseDown() {
        return W2([a2.onMouseDown, C2.onMouseDown]);
      }, get onFocus() {
        return W2([a2.onFocus, C2.onFocus]);
      }, onPointerMove: w2, onPointerLeave: T2 }, k2, o2));
    } });
  }
  function ts(e3) {
    let t2 = K2({ closeOnSelect: false }, e3), [n2, r2] = je(t2, [`checked`, `defaultChecked`, `onChange`, `onSelect`]), i2 = bn2({ isSelected: () => n2.checked, defaultIsSelected: () => n2.defaultChecked, onSelectedChange: (e4) => n2.onChange?.(e4), isDisabled: () => r2.disabled });
    return Te(es, Ae({ role: `menuitemcheckbox`, get checked() {
      return i2.isSelected();
    }, onSelect: () => {
      n2.onSelect?.(), i2.toggle();
    } }, r2));
  }
  function is(e3) {
    let t2 = $o(), i2 = Yo(), a2 = Wo(), { direction: o2 } = Nn2(), s3 = K2({ id: t2.generateId(`trigger`) }, e3), [c2, l3] = je(s3, [`ref`, `id`, `disabled`, `onPointerDown`, `onClick`, `onKeyDown`, `onMouseOver`, `onFocus`]), f2 = () => t2.value();
    a2 !== void 0 && (f2 = () => t2.value() ?? c2.id, a2.lastValue() === void 0 && a2.setLastValue(f2));
    let p3 = ln2(() => i2.triggerRef(), () => `button`), m2 = S(() => p3() === `a` && i2.triggerRef()?.getAttribute(`href`) != null);
    x(ne(() => a2?.value(), (e4) => {
      m2() && e4 === f2() && i2.triggerRef()?.focus();
    }));
    let h3 = () => {
      a2 === void 0 ? i2.toggle(true) : i2.isOpen() ? a2.value() === f2() && a2.closeMenu() : (a2.autoFocusMenu() || a2.setAutoFocusMenu(true), i2.open(false));
    };
    return x(() => T(i2.registerTriggerId(c2.id))), Te(hn2, Ae({ ref(e4) {
      let t3 = H2(i2.setTriggerRef, c2.ref);
      typeof t3 == `function` && t3(e4);
    }, get "data-kb-menu-value-trigger"() {
      return t2.value();
    }, get id() {
      return c2.id;
    }, get disabled() {
      return c2.disabled;
    }, "aria-haspopup": `true`, get "aria-expanded"() {
      return i2.isOpen();
    }, get "aria-controls"() {
      return Ye(() => !!i2.isOpen())() ? i2.contentId() : void 0;
    }, get "data-highlighted"() {
      return f2() !== void 0 && a2?.value() === f2() || void 0;
    }, get tabIndex() {
      return a2 === void 0 ? void 0 : a2.value() === f2() || a2.lastValue() === f2() ? 0 : -1;
    }, onPointerDown: (e4) => {
      U2(e4, c2.onPointerDown), e4.currentTarget.dataset.pointerType = e4.pointerType, !c2.disabled && e4.pointerType !== `touch` && e4.button === 0 && h3();
    }, onMouseOver: (e4) => {
      U2(e4, c2.onMouseOver), i2.triggerRef()?.dataset.pointerType !== `touch` && !c2.disabled && a2 !== void 0 && a2.value() !== void 0 && a2.setValue(f2);
    }, onClick: (e4) => {
      U2(e4, c2.onClick), c2.disabled || e4.currentTarget.dataset.pointerType === `touch` && h3();
    }, onKeyDown: (e4) => {
      if (U2(e4, c2.onKeyDown), !c2.disabled) {
        if (m2()) switch (e4.key) {
          case `Enter`:
          case ` `:
            return;
        }
        switch (e4.key) {
          case `Enter`:
          case ` `:
          case rs.first(t2.orientation()):
            e4.stopPropagation(), e4.preventDefault(), sn2(e4.currentTarget), i2.open(`first`), a2?.setAutoFocusMenu(true), a2?.setValue(f2);
            break;
          case rs.last(t2.orientation()):
            e4.stopPropagation(), e4.preventDefault(), i2.open(`last`);
            break;
          case ns.next(o2(), t2.orientation()):
            if (a2 === void 0) break;
            e4.stopPropagation(), e4.preventDefault(), a2.nextMenu();
            break;
          case ns.previous(o2(), t2.orientation()):
            if (a2 === void 0) break;
            e4.stopPropagation(), e4.preventDefault(), a2.previousMenu();
        }
      }
    }, onFocus: (e4) => {
      U2(e4, c2.onFocus), a2 !== void 0 && e4.currentTarget.dataset.pointerType !== `touch` && a2.setValue(f2);
    }, role: a2 === void 0 ? void 0 : `menuitem` }, () => i2.dataset(), l3));
  }
  function as(e3) {
    let t2, i2 = $o(), a2 = Yo(), o2 = Wo(), c2 = Ko(), { direction: l3 } = Nn2(), f2 = K2({ id: i2.generateId(`content-${Pe()}`) }, e3), [p3, m2] = je(f2, [`ref`, `id`, `style`, `onOpenAutoFocus`, `onCloseAutoFocus`, `onEscapeKeyDown`, `onFocusOutside`, `onPointerEnter`, `onPointerMove`, `onKeyDown`, `onMouseDown`, `onFocusIn`, `onFocusOut`]), _2 = 0, v2 = () => a2.parentMenuContext() == null && o2 === void 0 && i2.isModal(), y2 = Ho({ selectionManager: a2.listState().selectionManager, collection: a2.listState().collection, autoFocus: a2.autoFocus, deferAutoFocus: true, shouldFocusWrap: true, disallowTypeAhead: () => !a2.listState().selectionManager().isFocused(), orientation: () => i2.orientation() === `horizontal` ? `vertical` : `horizontal` }, () => t2);
    oo({ trapFocus: () => v2() && a2.isOpen(), onMountAutoFocus: (e4) => {
      o2 === void 0 && p3.onOpenAutoFocus?.(e4);
    }, onUnmountAutoFocus: p3.onCloseAutoFocus }, () => t2);
    let b2 = (e4) => {
      if (xt2(e4.currentTarget, e4.target) && (e4.key === `Tab` && a2.isOpen() && e4.preventDefault(), o2 !== void 0 && e4.currentTarget.getAttribute(`aria-haspopup`) !== `true`)) switch (e4.key) {
        case ns.next(l3(), i2.orientation()):
          e4.stopPropagation(), e4.preventDefault(), a2.close(true), o2.setAutoFocusMenu(true), o2.nextMenu();
          break;
        case ns.previous(l3(), i2.orientation()):
          if (e4.currentTarget.hasAttribute(`data-closed`)) break;
          e4.stopPropagation(), e4.preventDefault(), a2.close(true), o2.setAutoFocusMenu(true), o2.previousMenu();
          break;
      }
    }, x2 = (e4) => {
      p3.onEscapeKeyDown?.(e4), o2?.setAutoFocusMenu(false), a2.close(true);
    }, S2 = (e4) => {
      p3.onFocusOutside?.(e4), i2.isModal() && e4.preventDefault();
    }, w2 = (e4) => {
      U2(e4, p3.onPointerEnter), a2.isOpen() && (a2.parentMenuContext()?.listState().selectionManager().setFocused(false), a2.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0));
    }, T2 = (e4) => {
      if (U2(e4, p3.onPointerMove), e4.pointerType !== `mouse`) return;
      let t3 = e4.target, n2 = _2 !== e4.clientX;
      xt2(e4.currentTarget, t3) && n2 && (a2.setPointerDir(e4.clientX > _2 ? `right` : `left`), _2 = e4.clientX);
    };
    x(() => T(a2.registerContentId(p3.id))), T(() => a2.setContentRef(void 0));
    let E2 = { ref: H2((e4) => {
      a2.setContentRef(e4), t2 = e4;
    }, p3.ref), role: `menu`, get id() {
      return p3.id;
    }, get tabIndex() {
      return y2.tabIndex();
    }, get "aria-labelledby"() {
      return a2.triggerId();
    }, onKeyDown: W2([p3.onKeyDown, y2.onKeyDown, b2]), onMouseDown: W2([p3.onMouseDown, y2.onMouseDown]), onFocusIn: W2([p3.onFocusIn, y2.onFocusIn]), onFocusOut: W2([p3.onFocusOut, y2.onFocusOut]), onPointerEnter: w2, onPointerMove: T2, get "data-orientation"() {
      return i2.orientation();
    } };
    return Te(Re, { get when() {
      return a2.contentPresent();
    }, get children() {
      return Te(Re, { get when() {
        return c2 === void 0 || a2.parentMenuContext() != null;
      }, get fallback() {
        return Te(q2, Ae({ as: `div` }, () => a2.dataset(), E2, m2));
      }, get children() {
        return Te(va.Positioner, { get children() {
          return Te(Ha, Ae({ get disableOutsidePointerEvents() {
            return Ye(() => !!v2())() && a2.isOpen();
          }, get excludedElements() {
            return [a2.triggerRef];
          }, bypassTopMostLayerCheck: true, get style() {
            return mt2({ "--kb-menu-content-transform-origin": `var(--kb-popper-content-transform-origin)`, position: `relative` }, p3.style);
          }, onEscapeKeyDown: x2, onFocusOutside: S2, get onDismiss() {
            return a2.close;
          } }, () => a2.dataset(), E2, m2));
        } });
      } });
    } });
  }
  function os(e3) {
    let t2, n2 = $o(), r2 = Yo(), [i2, a2] = je(e3, [`ref`]);
    return Eo({ element: () => t2 ?? null, enabled: () => r2.contentPresent() && n2.preventScroll() }), Te(as, Ae({ ref(e4) {
      let n3 = H2((e5) => {
        t2 = e5;
      }, i2.ref);
      typeof n3 == `function` && n3(e4);
    } }, a2));
  }
  function cs() {
    let e3 = oe(ss);
    if (e3 === void 0) throw Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");
    return e3;
  }
  function ls(e3) {
    let t2 = K2({ id: $o().generateId(`group-${Pe()}`) }, e3), [n2, r2] = v(), i2 = { generateId: bt2(() => t2.id), registerLabelId: Wa(r2) };
    return Te(ss.Provider, { value: i2, get children() {
      return Te(q2, Ae({ as: `div`, role: `group`, get "aria-labelledby"() {
        return n2();
      } }, t2));
    } });
  }
  function us(e3) {
    let t2 = cs(), r2 = K2({ id: t2.generateId(`label`) }, e3), [i2, a2] = je(r2, [`id`]);
    return x(() => T(t2.registerLabelId(i2.id))), Te(q2, Ae({ as: `span`, get id() {
      return i2.id;
    }, "aria-hidden": `true` }, a2));
  }
  function ds(e3) {
    let t2 = Yo(), n2 = K2({ children: `\u25BC` }, e3);
    return Te(q2, Ae({ as: `span`, "aria-hidden": `true` }, () => t2.dataset(), n2));
  }
  function fs(e3) {
    return Te(es, Ae({ role: `menuitem`, closeOnSelect: true }, e3));
  }
  function ps(e3) {
    let t2 = Zo(), r2 = K2({ id: t2.generateId(`description`) }, e3), [i2, a2] = je(r2, [`id`]);
    return x(() => T(t2.registerDescription(i2.id))), Te(q2, Ae({ as: `div`, get id() {
      return i2.id;
    } }, () => t2.dataset(), a2));
  }
  function ms(e3) {
    let t2 = Zo(), n2 = K2({ id: t2.generateId(`indicator`) }, e3), [r2, i2] = je(n2, [`forceMount`]);
    return Te(Re, { get when() {
      return r2.forceMount || t2.isChecked();
    }, get children() {
      return Te(q2, Ae({ as: `div` }, () => t2.dataset(), i2));
    } });
  }
  function hs(e3) {
    let t2 = Zo(), r2 = K2({ id: t2.generateId(`label`) }, e3), [i2, a2] = je(r2, [`ref`, `id`]);
    return x(() => T(t2.registerLabel(i2.id))), Te(q2, Ae({ as: `div`, ref(e4) {
      let n2 = H2(t2.setLabelRef, i2.ref);
      typeof n2 == `function` && n2(e4);
    }, get id() {
      return i2.id;
    } }, () => t2.dataset(), a2));
  }
  function gs(e3) {
    let t2 = Yo();
    return Te(Re, { get when() {
      return t2.contentPresent();
    }, get children() {
      return Te(bt, e3);
    } });
  }
  function vs() {
    let e3 = oe(_s);
    if (e3 === void 0) throw Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");
    return e3;
  }
  function ys(e3) {
    let t2 = K2({ id: $o().generateId(`radiogroup-${Pe()}`) }, e3), [n2, r2] = je(t2, [`value`, `defaultValue`, `onChange`, `disabled`]), [i2, a2] = _n2({ value: () => n2.value, defaultValue: () => n2.defaultValue, onChange: (e4) => n2.onChange?.(e4) });
    return Te(_s.Provider, { value: { isDisabled: () => n2.disabled, isSelectedValue: (e4) => e4 === i2(), setSelectedValue: (e4) => a2(e4) }, get children() {
      return Te(ls, r2);
    } });
  }
  function bs(e3) {
    let t2 = vs(), n2 = K2({ closeOnSelect: false }, e3), [r2, i2] = je(n2, [`value`, `onSelect`]);
    return Te(es, Ae({ role: `menuitemradio`, get checked() {
      return t2.isSelectedValue(r2.value);
    }, onSelect: () => {
      r2.onSelect?.(), t2.setSelectedValue(r2.value);
    } }, i2));
  }
  function xs(e3, t2, n2) {
    let r2 = e3.split(`-`)[0], i2 = n2.getBoundingClientRect(), a2 = [], o2 = t2.clientX, s3 = t2.clientY;
    switch (r2) {
      case `top`:
        a2.push([o2, s3 + 5]), a2.push([i2.left, i2.bottom]), a2.push([i2.left, i2.top]), a2.push([i2.right, i2.top]), a2.push([i2.right, i2.bottom]);
        break;
      case `right`:
        a2.push([o2 - 5, s3]), a2.push([i2.left, i2.top]), a2.push([i2.right, i2.top]), a2.push([i2.right, i2.bottom]), a2.push([i2.left, i2.bottom]);
        break;
      case `bottom`:
        a2.push([o2, s3 - 5]), a2.push([i2.right, i2.top]), a2.push([i2.right, i2.bottom]), a2.push([i2.left, i2.bottom]), a2.push([i2.left, i2.top]);
        break;
      case `left`:
        a2.push([o2 + 5, s3]), a2.push([i2.right, i2.bottom]), a2.push([i2.left, i2.bottom]), a2.push([i2.left, i2.top]), a2.push([i2.right, i2.top]);
    }
    return a2;
  }
  function Ss(e3, t2) {
    return t2 ? en2([e3.clientX, e3.clientY], t2) : false;
  }
  function Cs(e3) {
    let t2 = $o(), r2 = Qn(), i2 = Jo(), a2 = Wo(), o2 = Ko(), s3 = K2({ placement: t2.orientation() === `horizontal` ? `bottom-start` : `right-start` }, e3), [c2, l3] = je(s3, [`open`, `defaultOpen`, `onOpenChange`]), f2 = 0, p3 = null, m2 = `right`, [_2, v2] = v(), [y2, b2] = v(), [w2, T2] = v(), [E2, D2] = v(), [O2, k2] = v(true), [A2, j2] = v(l3.placement), [M2, N2] = v([]), [ee2, te2] = v([]), { DomCollectionProvider: ne2 } = sr({ items: ee2, onItemsChange: te2 }), P2 = Ua({ open: () => c2.open, defaultOpen: () => c2.defaultOpen, onOpenChange: (e4) => c2.onOpenChange?.(e4) }), { present: re2 } = Ga({ show: () => t2.forceMount() || P2.isOpen(), element: () => E2() ?? null }), ie2 = Xn({ selectionMode: `none`, dataSource: ee2 }), ae = (e4) => {
      k2(e4), P2.open();
    }, oe2 = (e4 = false) => {
      P2.close(), e4 && i2 && i2.close(true);
    }, se2 = (e4) => {
      k2(e4), P2.toggle();
    }, F2 = () => {
      let e4 = E2();
      e4 && (G2(e4), ie2.selectionManager().setFocused(true), ie2.selectionManager().setFocusedKey(void 0));
    }, ce2 = () => {
      o2 == null ? F2() : setTimeout(() => F2());
    }, le2 = (e4) => {
      N2((t4) => [...t4, e4]);
      let t3 = i2?.registerNestedMenu(e4);
      return () => {
        N2((t4) => gt2(t4, e4)), t3?.();
      };
    }, ue2 = (e4) => m2 === p3?.side && Ss(e4, p3?.area), de2 = (e4) => {
      ue2(e4) && e4.preventDefault();
    }, I2 = (e4) => {
      ue2(e4) || ce2();
    }, L2 = (e4) => {
      ue2(e4) && e4.preventDefault();
    };
    co({ isDisabled: () => !(i2 == null && P2.isOpen() && t2.isModal()), targets: () => [E2(), ...M2()].filter(Boolean) }), x(() => {
      let e4 = E2();
      if (!e4 || !i2) return;
      let t3 = i2.registerNestedMenu(e4);
      T(() => {
        t3();
      });
    }), x(() => {
      i2 === void 0 && a2?.registerMenu(t2.value(), [E2(), ...M2()]);
    }), x(() => {
      i2 === void 0 && a2 !== void 0 && (a2.value() === t2.value() ? (w2()?.focus(), a2.autoFocusMenu() && ae(true)) : oe2());
    }), x(() => {
      i2 === void 0 && a2 !== void 0 && P2.isOpen() && a2.setValue(t2.value());
    }), T(() => {
      i2 === void 0 && a2?.unregisterMenu(t2.value());
    });
    let fe3 = { dataset: S(() => ({ "data-expanded": P2.isOpen() ? `` : void 0, "data-closed": P2.isOpen() ? void 0 : `` })), isOpen: P2.isOpen, contentPresent: re2, nestedMenus: M2, currentPlacement: A2, pointerGraceTimeoutId: () => f2, autoFocus: O2, listState: () => ie2, parentMenuContext: () => i2, triggerRef: w2, contentRef: E2, triggerId: _2, contentId: y2, setTriggerRef: T2, setContentRef: D2, open: ae, close: oe2, toggle: se2, focusContent: ce2, onItemEnter: de2, onItemLeave: I2, onTriggerLeave: L2, setPointerDir: (e4) => m2 = e4, setPointerGraceTimeoutId: (e4) => f2 = e4, setPointerGraceIntent: (e4) => p3 = e4, registerNestedMenu: le2, registerItemToParentDomCollection: r2?.registerItem, registerTriggerId: Wa(v2), registerContentId: Wa(b2) };
    return Te(ne2, { get children() {
      return Te(qo.Provider, { value: fe3, get children() {
        return Te(Re, { when: o2 === void 0, get fallback() {
          return l3.children;
        }, get children() {
          return Te(va, Ae({ anchorRef: w2, contentRef: E2, onCurrentPlacementChange: j2 }, l3));
        } });
      } });
    } });
  }
  function ws(e3) {
    let { direction: t2 } = Nn2();
    return Te(Cs, Ae({ get placement() {
      return t2() === `rtl` ? `left-start` : `right-start`;
    }, flip: true }, e3));
  }
  function Es(e3) {
    let t2 = Yo(), n2 = $o(), [r2, i2] = je(e3, [`onFocusOutside`, `onKeyDown`]), { direction: a2 } = Nn2();
    return Te(as, Ae({ onOpenAutoFocus: (e4) => {
      e4.preventDefault();
    }, onCloseAutoFocus: (e4) => {
      e4.preventDefault();
    }, onFocusOutside: (e4) => {
      r2.onFocusOutside?.(e4);
      let n3 = e4.target;
      xt2(t2.triggerRef(), n3) || t2.close();
    }, onKeyDown: (e4) => {
      U2(e4, r2.onKeyDown);
      let i3 = xt2(e4.currentTarget, e4.target), o2 = Ts.close(a2(), n2.orientation()).includes(e4.key), s3 = t2.parentMenuContext() != null;
      i3 && o2 && s3 && (t2.close(), G2(t2.triggerRef()));
    } }, i2));
  }
  function ks(e3) {
    let t2, i2 = $o(), a2 = Yo(), o2 = K2({ id: i2.generateId(`sub-trigger-${Pe()}`) }, e3), [c2, l3] = je(o2, [`ref`, `id`, `textValue`, `disabled`, `onPointerMove`, `onPointerLeave`, `onPointerDown`, `onPointerUp`, `onClick`, `onKeyDown`, `onMouseDown`, `onFocus`]), f2 = null, p3 = () => {
      f2 && window.clearTimeout(f2), f2 = null;
    }, { direction: m2 } = Nn2(), h3 = () => c2.id, _2 = () => {
      let e4 = a2.parentMenuContext();
      if (e4 == null) throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
      return e4.listState().selectionManager();
    }, v2 = () => a2.listState().collection(), y2 = () => _2().focusedKey() === h3(), b2 = qn({ key: h3, selectionManager: _2, shouldSelectOnPressUp: true, allowsDifferentPressOrigin: true, disabled: () => c2.disabled }, () => t2), x2 = (e4) => {
      U2(e4, c2.onClick), !a2.isOpen() && !c2.disabled && a2.open(true);
    }, S2 = (e4) => {
      if (U2(e4, c2.onPointerMove), e4.pointerType !== `mouse`) return;
      let t3 = a2.parentMenuContext();
      if (t3?.onItemEnter(e4), !e4.defaultPrevented) {
        if (c2.disabled) {
          t3?.onItemLeave(e4);
          return;
        }
        !a2.isOpen() && !f2 && (a2.parentMenuContext()?.setPointerGraceIntent(null), f2 = window.setTimeout(() => {
          a2.open(false), p3();
        }, 100)), t3?.onItemEnter(e4), e4.defaultPrevented || (a2.listState().selectionManager().isFocused() && (a2.listState().selectionManager().setFocused(false), a2.listState().selectionManager().setFocusedKey(void 0)), G2(e4.currentTarget), t3?.listState().selectionManager().setFocused(true), t3?.listState().selectionManager().setFocusedKey(h3()));
      }
    }, T2 = (e4) => {
      if (U2(e4, c2.onPointerLeave), e4.pointerType !== `mouse`) return;
      p3();
      let t3 = a2.parentMenuContext(), n2 = a2.contentRef();
      if (n2) {
        t3?.setPointerGraceIntent({ area: xs(a2.currentPlacement(), e4, n2), side: a2.currentPlacement().split(`-`)[0] }), window.clearTimeout(t3?.pointerGraceTimeoutId());
        let r2 = window.setTimeout(() => {
          t3?.setPointerGraceIntent(null);
        }, 300);
        t3?.setPointerGraceTimeoutId(r2);
      } else {
        if (t3?.onTriggerLeave(e4), e4.defaultPrevented) return;
        t3?.setPointerGraceIntent(null);
      }
      t3?.onItemLeave(e4);
    }, E2 = (e4) => {
      U2(e4, c2.onKeyDown), !e4.repeat && (c2.disabled || Os.open(m2(), i2.orientation()).includes(e4.key) && (e4.stopPropagation(), e4.preventDefault(), _2().setFocused(false), _2().setFocusedKey(void 0), a2.isOpen() || a2.open(`first`), a2.focusContent(), a2.listState().selectionManager().setFocused(true), a2.listState().selectionManager().setFocusedKey(v2().getFirstKey())));
    };
    return x(() => {
      if (a2.registerItemToParentDomCollection == null) throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");
      let e4 = a2.registerItemToParentDomCollection({ ref: () => t2, type: `item`, key: h3(), textValue: c2.textValue ?? t2?.textContent ?? ``, disabled: c2.disabled ?? false });
      T(e4);
    }), x(ne(() => a2.parentMenuContext()?.pointerGraceTimeoutId(), (e4) => {
      T(() => {
        window.clearTimeout(e4), a2.parentMenuContext()?.setPointerGraceIntent(null);
      });
    })), x(() => T(a2.registerTriggerId(c2.id))), T(() => {
      p3();
    }), Te(q2, Ae({ as: `div`, ref(e4) {
      let n2 = H2((e5) => {
        a2.setTriggerRef(e5), t2 = e5;
      }, c2.ref);
      typeof n2 == `function` && n2(e4);
    }, get id() {
      return c2.id;
    }, role: `menuitem`, get tabIndex() {
      return b2.tabIndex();
    }, "aria-haspopup": `true`, get "aria-expanded"() {
      return a2.isOpen();
    }, get "aria-controls"() {
      return Ye(() => !!a2.isOpen())() ? a2.contentId() : void 0;
    }, get "aria-disabled"() {
      return c2.disabled;
    }, get "data-key"() {
      return b2.dataKey();
    }, get "data-highlighted"() {
      return y2() ? `` : void 0;
    }, get "data-disabled"() {
      return c2.disabled ? `` : void 0;
    }, get onPointerDown() {
      return W2([c2.onPointerDown, b2.onPointerDown]);
    }, get onPointerUp() {
      return W2([c2.onPointerUp, b2.onPointerUp]);
    }, get onClick() {
      return W2([x2, b2.onClick]);
    }, get onKeyDown() {
      return W2([E2, b2.onKeyDown]);
    }, get onMouseDown() {
      return W2([c2.onMouseDown, b2.onMouseDown]);
    }, get onFocus() {
      return W2([c2.onFocus, b2.onFocus]);
    }, onPointerMove: S2, onPointerLeave: T2 }, () => a2.dataset(), l3));
  }
  function As(e3) {
    let t2 = Wo(), n2 = K2({ id: `menu-${Pe()}`, modal: true }, e3), [r2, i2] = je(n2, [`id`, `modal`, `preventScroll`, `forceMount`, `open`, `defaultOpen`, `onOpenChange`, `value`, `orientation`]), a2 = Ua({ open: () => r2.open, defaultOpen: () => r2.defaultOpen, onOpenChange: (e4) => r2.onOpenChange?.(e4) }), o2 = { isModal: () => r2.modal ?? true, preventScroll: () => r2.preventScroll ?? o2.isModal(), forceMount: () => r2.forceMount ?? false, generateId: bt2(() => r2.id), value: () => r2.value, orientation: () => r2.orientation ?? t2?.orientation() ?? `horizontal` };
    return Te(Qo.Provider, { value: o2, get children() {
      return Te(Cs, Ae({ get open() {
        return a2.isOpen();
      }, get onOpenChange() {
        return a2.setIsOpen;
      } }, i2));
    } });
  }
  function js(e3) {
    let t2, n2 = K2({ orientation: `horizontal` }, e3), [r2, i2] = je(n2, [`ref`, `orientation`]), a2 = ln2(() => t2, () => `hr`);
    return Te(q2, Ae({ as: `hr`, ref(e4) {
      let n3 = H2((e5) => t2 = e5, r2.ref);
      typeof n3 == `function` && n3(e4);
    }, get role() {
      return a2() === `hr` ? void 0 : `separator`;
    }, get "aria-orientation"() {
      return r2.orientation === `vertical` ? `vertical` : void 0;
    }, get "data-orientation"() {
      return r2.orientation;
    } }, i2));
  }
  function Ns(e3) {
    let t2 = $o(), n2 = Yo(), [r2, i2] = je(e3, [`onCloseAutoFocus`, `onInteractOutside`]), a2 = false;
    return Te(os, Ae({ onCloseAutoFocus: (e4) => {
      r2.onCloseAutoFocus?.(e4), a2 || G2(n2.triggerRef()), a2 = false, e4.preventDefault();
    }, onInteractOutside: (e4) => {
      r2.onInteractOutside?.(e4), (!t2.isModal() || e4.detail.isContextMenu) && (a2 = true);
    } }, i2));
  }
  function Ps(e3) {
    let t2 = K2({ id: `dropdownmenu-${Pe()}` }, e3);
    return Te(As, t2);
  }
  function sc() {
    return Is();
  }
  function cc() {
    return Ls();
  }
  function lc() {
    return Rs();
  }
  function uc() {
    return zs();
  }
  function dc() {
    return Bs();
  }
  function fc() {
    return Vs();
  }
  function pc() {
    return Hs();
  }
  function mc() {
    return Us();
  }
  function hc() {
    return Ws();
  }
  function gc() {
    return Gs();
  }
  function _c() {
    return Ks();
  }
  function vc() {
    return qs();
  }
  function yc() {
    return Js();
  }
  function bc() {
    return Ys();
  }
  function xc() {
    return Xs();
  }
  function Sc() {
    return Zs();
  }
  function Cc(e3) {
    return (() => {
      var t2 = Qs(), n2 = t2.firstChild;
      return b(() => R(n2, `stroke`, e3.theme === `dark` ? `#12B76A` : `#027A48`)), t2;
    })();
  }
  function wc() {
    return $s();
  }
  function Tc() {
    return ec();
  }
  function Ec(e3) {
    return [Te(Re, { get when() {
      return e3.checked;
    }, get children() {
      var t2 = Qs(), n2 = t2.firstChild;
      return b(() => R(n2, `stroke`, e3.theme === `dark` ? `#9B8AFB` : `#6938EF`)), t2;
    } }), Te(Re, { get when() {
      return !e3.checked;
    }, get children() {
      var t2 = tc(), n2 = t2.firstChild;
      return b(() => R(n2, `stroke`, e3.theme === `dark` ? `#9B8AFB` : `#6938EF`)), t2;
    } })];
  }
  function Dc() {
    return nc();
  }
  function Oc() {
    return rc();
  }
  function kc() {
    return ic();
  }
  function Ac() {
    return ac();
  }
  function Z2() {
    return oe(Fc);
  }
  function Q2() {
    return oe(Bc);
  }
  function $c(e3, t2) {
    if (t2 < 1) return [];
    let n2 = 0, r2 = [];
    for (; n2 < e3.length; ) r2.push(e3.slice(n2, n2 + t2)), n2 += t2;
    return r2;
  }
  function al(e3) {
    return Symbol.iterator in e3;
  }
  function ol(e3) {
    let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, i2 = S(() => t2() === `dark` ? ll(n2) : cl(n2)), a2 = Z2().client, [o2, l3] = v((e3.defaultExpanded || []).includes(e3.label)), u2 = () => l3((e4) => !e4), [p3, m2] = v([]), g2 = S(() => Array.isArray(e3.value) ? e3.value.map((e4, t3) => ({ label: t3.toString(), value: e4 })) : e3.value !== null && typeof e3.value == `object` && al(e3.value) && typeof e3.value[Symbol.iterator] == `function` ? e3.value instanceof Map ? Array.from(e3.value, ([e4, t3]) => ({ label: e4, value: t3 })) : Array.from(e3.value, (e4, t3) => ({ label: t3.toString(), value: e4 })) : typeof e3.value == `object` && e3.value !== null ? Object.entries(e3.value).map(([e4, t3]) => ({ label: e4, value: t3 })) : []), _2 = S(() => Array.isArray(e3.value) ? `array` : e3.value !== null && typeof e3.value == `object` && al(e3.value) && typeof e3.value[Symbol.iterator] == `function` ? `Iterable` : typeof e3.value == `object` && e3.value !== null ? `object` : typeof e3.value), b2 = S(() => $c(g2(), 100)), C2 = e3.dataPath ?? [], w2 = Pe();
    return (() => {
      var t3 = qc();
      return z(t3, Te(Re, { get when() {
        return b2().length;
      }, get children() {
        return [(() => {
          var t4 = Jc(), n3 = t4.firstChild, a3 = n3.firstChild, s3 = a3.nextSibling, l4 = s3.nextSibling.nextSibling, f2 = l4.firstChild;
          return n3.$$click = () => u2(), z(n3, Te(el, { get expanded() {
            return o2();
          } }), a3), z(s3, () => e3.label), z(l4, () => String(_2()).toLowerCase() === `iterable` ? `(Iterable) ` : ``, f2), z(l4, () => g2().length, f2), z(l4, () => g2().length > 1 ? `items` : `item`, null), z(t4, Te(Re, { get when() {
            return e3.editable;
          }, get children() {
            var t5 = qc();
            return z(t5, Te(tl, { get value() {
              return e3.value;
            } }), null), z(t5, Te(Re, { get when() {
              return Ye(() => !!e3.itemsDeletable)() && e3.activeQuery !== void 0;
            }, get children() {
              return Te(rl, { get activeQuery() {
                return e3.activeQuery;
              }, dataPath: C2 });
            } }), null), z(t5, Te(Re, { get when() {
              return Ye(() => _2() === `array`)() && e3.activeQuery !== void 0;
            }, get children() {
              return Te(nl, { get activeQuery() {
                return e3.activeQuery;
              }, dataPath: C2 });
            } }), null), z(t5, Te(Re, { get when() {
              return Ye(() => !!e3.onEdit)() && !Tn(e3.value).meta;
            }, get children() {
              var t6 = Kc();
              return t6.$$click = () => {
                e3.onEdit?.();
              }, z(t6, Te(Sc, {})), b(() => rt(t6, i2().actionButton)), t6;
            } }), null), b(() => rt(t5, i2().actions)), t5;
          } }), null), b((e4) => {
            var r2 = i2().expanderButtonContainer, a4 = i2().expanderButton, s4 = o2() ? `true` : `false`, c2 = i2().info;
            return r2 !== e4.e && rt(t4, e4.e = r2), a4 !== e4.t && rt(n3, e4.t = a4), s4 !== e4.a && R(n3, `aria-expanded`, e4.a = s4), c2 !== e4.o && rt(l4, e4.o = c2), e4;
          }, { e: void 0, t: void 0, a: void 0, o: void 0 }), t4;
        })(), Te(Re, { get when() {
          return o2();
        }, get children() {
          return [Te(Re, { get when() {
            return b2().length === 1;
          }, get children() {
            var t4 = qc();
            return z(t4, Te(st2, { get each() {
              return g2();
            }, by: (e4) => e4.label, children: (t5) => Te(ol, { get defaultExpanded() {
              return e3.defaultExpanded;
            }, get label() {
              return t5().label;
            }, get value() {
              return t5().value;
            }, get editable() {
              return e3.editable;
            }, get dataPath() {
              return [...C2, t5().label];
            }, get activeQuery() {
              return e3.activeQuery;
            }, get itemsDeletable() {
              return _2() === `array` || _2() === `Iterable` || _2() === `object`;
            } }) })), b(() => rt(t4, i2().subEntry)), t4;
          } }), Te(Re, { get when() {
            return b2().length > 1;
          }, get children() {
            var t4 = qc();
            return z(t4, Te(Le, { get each() {
              return b2();
            }, children: (t5, n3) => (() => {
              var r2 = Qc(), a3 = r2.firstChild, o3 = a3.firstChild, s3 = o3.firstChild, l4 = s3.nextSibling, u3 = l4.nextSibling.nextSibling;
              return u3.nextSibling, o3.$$click = () => m2((e4) => e4.includes(n3) ? e4.filter((e5) => e5 !== n3) : [...e4, n3]), z(o3, Te(el, { get expanded() {
                return p3().includes(n3);
              } }), s3), z(o3, n3 * 100, l4), z(o3, n3 * 100 + 100 - 1, u3), z(a3, Te(Re, { get when() {
                return p3().includes(n3);
              }, get children() {
                var n4 = qc();
                return z(n4, Te(st2, { get each() {
                  return t5();
                }, by: (e4) => e4.label, children: (t6) => Te(ol, { get defaultExpanded() {
                  return e3.defaultExpanded;
                }, get label() {
                  return t6().label;
                }, get value() {
                  return t6().value;
                }, get editable() {
                  return e3.editable;
                }, get dataPath() {
                  return [...C2, t6().label];
                }, get activeQuery() {
                  return e3.activeQuery;
                } }) })), b(() => rt(n4, i2().subEntry)), n4;
              } }), null), b((e4) => {
                var t6 = i2().entry, n4 = i2().expanderButton;
                return t6 !== e4.e && rt(a3, e4.e = t6), n4 !== e4.t && rt(o3, e4.t = n4), e4;
              }, { e: void 0, t: void 0 }), r2;
            })() })), b(() => rt(t4, i2().subEntry)), t4;
          } })];
        } })];
      } }), null), z(t3, Te(Re, { get when() {
        return b2().length === 0;
      }, get children() {
        var t4 = Zc(), n3 = t4.firstChild, o3 = n3.firstChild;
        return R(n3, `for`, w2), z(n3, () => e3.label, o3), z(t4, Te(Re, { get when() {
          return Ye(() => !!(e3.editable && e3.activeQuery !== void 0))() && (_2() === `string` || _2() === `number` || _2() === `boolean`);
        }, get fallback() {
          return (() => {
            var t5 = Xc();
            return z(t5, () => Mn(e3.value)), b(() => rt(t5, i2().value)), t5;
          })();
        }, get children() {
          return [Te(Re, { get when() {
            return Ye(() => !!(e3.editable && e3.activeQuery !== void 0))() && (_2() === `string` || _2() === `number`);
          }, get children() {
            var t5 = Yc();
            return t5.addEventListener(`change`, (t6) => {
              let n4 = e3.activeQuery.state.data, r2 = Q(n4, C2, _2() === `number` ? t6.target.valueAsNumber : t6.target.value);
              a2.setQueryData(e3.activeQuery.queryKey, r2);
            }), R(t5, `id`, w2), b((e4) => {
              var n4 = _2() === `number` ? `number` : `text`, r2 = V2(i2().value, i2().editableInput);
              return n4 !== e4.e && R(t5, `type`, e4.e = n4), r2 !== e4.t && rt(t5, e4.t = r2), e4;
            }, { e: void 0, t: void 0 }), b(() => t5.value = e3.value), t5;
          } }), Te(Re, { get when() {
            return _2() === `boolean`;
          }, get children() {
            var t5 = Xc();
            return z(t5, Te(il, { get activeQuery() {
              return e3.activeQuery;
            }, dataPath: C2, get value() {
              return e3.value;
            } }), null), z(t5, () => Mn(e3.value), null), b(() => rt(t5, V2(i2().value, i2().actions, i2().editableInput))), t5;
          } })];
        } }), null), z(t4, Te(Re, { get when() {
          return Ye(() => !!(e3.editable && e3.itemsDeletable))() && e3.activeQuery !== void 0;
        }, get children() {
          return Te(rl, { get activeQuery() {
            return e3.activeQuery;
          }, dataPath: C2 });
        } }), null), b((e4) => {
          var r2 = i2().row, a3 = i2().label;
          return r2 !== e4.e && rt(t4, e4.e = r2), a3 !== e4.t && rt(n3, e4.t = a3), e4;
        }, { e: void 0, t: void 0 }), t4;
      } }), null), b(() => rt(t3, i2().entry)), t3;
    })();
  }
  var fe2, pe2, R2, he2, _e2, be2, xe2, Se2, Ce2, we2, Te2, Ee2, z2, Fe2, Le2, Re2, ze2, Be2, Ve2, He2, Ue2, We2, Ge2, Ke2, it2, ft2, Et2, Pt2, Rt2, zt2, Bt2, Vt2, tn2, nn2, cn2, dn2, fn2, pn2, gn2, Cn2, wn2, On2, kn2, Mn2, Pn2, In2, Jn, Yn, Zn, lr, ur, dr, fr, pr, mr, hr, Dr, Or, kr, Ar, zr, Br, Vr, Wr, Gr, qr, Jr, Yr, si, ci, li, ui, wi, Wi, Ki, Xi, Zi, Qi, $i, ea, ta, na, ra, aa, oa, sa, ca, ha, va, ya, ba, xa, Sa, Fa, Ia, La, Ba, J2, Ga, Ka, Ja, no, ro, io, ao, so, lo, uo, po, mo, ho, go, _o, vo, yo, bo, xo, So, Co, wo, To, Eo, Do, Oo, Ao, Bo, Vo, Uo, Go, qo, Xo, Qo, ns, rs, ss, _s, Ts, Ds, Os, Ms, Y2, Fs, X2, Is, Ls, Rs, zs, Bs, Vs, Hs, Us, Ws, Gs, Ks, qs, Js, Ys, Xs, Zs, Qs, $s, ec, tc, nc, rc, ic, ac, oc, Nc, Pc, Fc, Ic, Lc, Rc, zc, Bc, Vc, Hc, Uc, Wc, Gc, Kc, qc, Jc, Yc, Xc, Zc, Qc, el, tl, nl, rl, il, sl, cl, ll, ul, dl, fl, pl, ml, hl, gl, _l, vl, yl, bl, xl, Sl, Cl, wl, Tl, El, Dl, Ol, kl, Al, jl, Ml, Nl, Pl, Fl, Il, Ll, Rl, zl, Bl, Vl, Hl, Ul, Wl, Gl, Kl, ql, Jl, Yl, Xl, Zl, Ql, $l, eu, tu, nu, ru, ou, cu, lu, uu, du, fu, pu, mu, hu, gu, _u, $2, vu, yu, bu, xu, Su, Cu, wu;
  var init_Devtools_CFKbGy8Z = __esm({
    "../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/Devtools-CFKbGy8Z.js"() {
      init_utils_BPMMmTje();
      fe2 = (e3) => e3 != null;
      pe2 = (e3) => e3.filter(fe2);
      R2 = (e3) => typeof e3 == `function` && !e3.length ? e3() : e3;
      he2 = (e3) => Array.isArray(e3) ? e3 : e3 ? [e3] : [];
      _e2 = T;
      be2 = ye2;
      xe2 = (e3) => (typeof e3.clear == `function` || (e3.clear = () => {
        let t2;
        for (; t2 = e3.key(0); ) e3.removeItem(t2);
      }), e3);
      Se2 = (e3) => {
        if (!e3) return ``;
        let t2 = ``;
        for (let n2 in e3) {
          if (!e3.hasOwnProperty(n2)) continue;
          let r2 = e3[n2];
          t2 += r2 instanceof Date ? `; ${n2}=${r2.toUTCString()}` : typeof r2 == `boolean` ? `; ${n2}` : `; ${n2}=${r2}`;
        }
        return t2;
      };
      Ce2 = xe2({ _cookies: [globalThis.document, `cookie`], getItem: (e3) => Ce2._cookies[0][Ce2._cookies[1]].match(`(^|;)\\s*` + e3 + `\\s*=\\s*([^;]+)`)?.pop() ?? null, setItem: (e3, t2, n2) => {
        let r2 = Ce2.getItem(e3);
        Ce2._cookies[0][Ce2._cookies[1]] = `${e3}=${t2}${Se2(n2)}`;
        let i2 = Object.assign(new Event(`storage`), { key: e3, oldValue: r2, newValue: t2, url: globalThis.document.URL, storageArea: Ce2 });
        window.dispatchEvent(i2);
      }, removeItem: (e3) => {
        Ce2._cookies[0][Ce2._cookies[1]] = `${e3}=deleted${Se2({ expires: /* @__PURE__ */ new Date(0) })}`;
      }, key: (e3) => {
        let t2 = null, n2 = 0;
        return Ce2._cookies[0][Ce2._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g, (r2, i2) => (!t2 && i2 && n2++ === e3 && (t2 = i2), ``)), t2;
      }, get length() {
        let e3 = 0;
        return Ce2._cookies[0][Ce2._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g, (t2) => (e3 += +!!t2, ``)), e3;
      } });
      we2 = { \u00C0: `A`, \u00C1: `A`, \u00C2: `A`, \u00C3: `A`, \u00C4: `A`, \u00C5: `A`, \u1EA4: `A`, \u1EAE: `A`, \u1EB2: `A`, \u1EB4: `A`, \u1EB6: `A`, \u00C6: `AE`, \u1EA6: `A`, \u1EB0: `A`, \u0202: `A`, \u00C7: `C`, \u1E08: `C`, \u00C8: `E`, \u00C9: `E`, \u00CA: `E`, \u00CB: `E`, \u1EBE: `E`, \u1E16: `E`, \u1EC0: `E`, \u1E14: `E`, \u1E1C: `E`, \u0206: `E`, \u00CC: `I`, \u00CD: `I`, \u00CE: `I`, \u00CF: `I`, \u1E2E: `I`, \u020A: `I`, \u00D0: `D`, \u00D1: `N`, \u00D2: `O`, \u00D3: `O`, \u00D4: `O`, \u00D5: `O`, \u00D6: `O`, \u00D8: `O`, \u1ED0: `O`, \u1E4C: `O`, \u1E52: `O`, \u020E: `O`, \u00D9: `U`, \u00DA: `U`, \u00DB: `U`, \u00DC: `U`, \u00DD: `Y`, \u00E0: `a`, \u00E1: `a`, \u00E2: `a`, \u00E3: `a`, \u00E4: `a`, \u00E5: `a`, \u1EA5: `a`, \u1EAF: `a`, \u1EB3: `a`, \u1EB5: `a`, \u1EB7: `a`, \u00E6: `ae`, \u1EA7: `a`, \u1EB1: `a`, \u0203: `a`, \u00E7: `c`, \u1E09: `c`, \u00E8: `e`, \u00E9: `e`, \u00EA: `e`, \u00EB: `e`, \u1EBF: `e`, \u1E17: `e`, \u1EC1: `e`, \u1E15: `e`, \u1E1D: `e`, \u0207: `e`, \u00EC: `i`, \u00ED: `i`, \u00EE: `i`, \u00EF: `i`, \u1E2F: `i`, \u020B: `i`, \u00F0: `d`, \u00F1: `n`, \u00F2: `o`, \u00F3: `o`, \u00F4: `o`, \u00F5: `o`, \u00F6: `o`, \u00F8: `o`, \u1ED1: `o`, \u1E4D: `o`, \u1E53: `o`, \u020F: `o`, \u00F9: `u`, \u00FA: `u`, \u00FB: `u`, \u00FC: `u`, \u00FD: `y`, \u00FF: `y`, \u0100: `A`, \u0101: `a`, \u0102: `A`, \u0103: `a`, \u0104: `A`, \u0105: `a`, \u0106: `C`, \u0107: `c`, \u0108: `C`, \u0109: `c`, \u010A: `C`, \u010B: `c`, \u010C: `C`, \u010D: `c`, C\u0306: `C`, c\u0306: `c`, \u010E: `D`, \u010F: `d`, \u0110: `D`, \u0111: `d`, \u0112: `E`, \u0113: `e`, \u0114: `E`, \u0115: `e`, \u0116: `E`, \u0117: `e`, \u0118: `E`, \u0119: `e`, \u011A: `E`, \u011B: `e`, \u011C: `G`, \u01F4: `G`, \u011D: `g`, \u01F5: `g`, \u011E: `G`, \u011F: `g`, \u0120: `G`, \u0121: `g`, \u0122: `G`, \u0123: `g`, \u0124: `H`, \u0125: `h`, \u0126: `H`, \u0127: `h`, \u1E2A: `H`, \u1E2B: `h`, \u0128: `I`, \u0129: `i`, \u012A: `I`, \u012B: `i`, \u012C: `I`, \u012D: `i`, \u012E: `I`, \u012F: `i`, \u0130: `I`, \u0131: `i`, \u0132: `IJ`, \u0133: `ij`, \u0134: `J`, \u0135: `j`, \u0136: `K`, \u0137: `k`, \u1E30: `K`, \u1E31: `k`, K\u0306: `K`, k\u0306: `k`, \u0139: `L`, \u013A: `l`, \u013B: `L`, \u013C: `l`, \u013D: `L`, \u013E: `l`, \u013F: `L`, \u0140: `l`, \u0141: `l`, \u0142: `l`, \u1E3E: `M`, \u1E3F: `m`, M\u0306: `M`, m\u0306: `m`, \u0143: `N`, \u0144: `n`, \u0145: `N`, \u0146: `n`, \u0147: `N`, \u0148: `n`, \u0149: `n`, N\u0306: `N`, n\u0306: `n`, \u014C: `O`, \u014D: `o`, \u014E: `O`, \u014F: `o`, \u0150: `O`, \u0151: `o`, \u0152: `OE`, \u0153: `oe`, P\u0306: `P`, p\u0306: `p`, \u0154: `R`, \u0155: `r`, \u0156: `R`, \u0157: `r`, \u0158: `R`, \u0159: `r`, R\u0306: `R`, r\u0306: `r`, \u0212: `R`, \u0213: `r`, \u015A: `S`, \u015B: `s`, \u015C: `S`, \u015D: `s`, \u015E: `S`, \u0218: `S`, \u0219: `s`, \u015F: `s`, \u0160: `S`, \u0161: `s`, \u0162: `T`, \u0163: `t`, \u021B: `t`, \u021A: `T`, \u0164: `T`, \u0165: `t`, \u0166: `T`, \u0167: `t`, T\u0306: `T`, t\u0306: `t`, \u0168: `U`, \u0169: `u`, \u016A: `U`, \u016B: `u`, \u016C: `U`, \u016D: `u`, \u016E: `U`, \u016F: `u`, \u0170: `U`, \u0171: `u`, \u0172: `U`, \u0173: `u`, \u0216: `U`, \u0217: `u`, V\u0306: `V`, v\u0306: `v`, \u0174: `W`, \u0175: `w`, \u1E82: `W`, \u1E83: `w`, X\u0306: `X`, x\u0306: `x`, \u0176: `Y`, \u0177: `y`, \u0178: `Y`, Y\u0306: `Y`, y\u0306: `y`, \u0179: `Z`, \u017A: `z`, \u017B: `Z`, \u017C: `z`, \u017D: `Z`, \u017E: `z`, \u017F: `s`, \u0192: `f`, \u01A0: `O`, \u01A1: `o`, \u01AF: `U`, \u01B0: `u`, \u01CD: `A`, \u01CE: `a`, \u01CF: `I`, \u01D0: `i`, \u01D1: `O`, \u01D2: `o`, \u01D3: `U`, \u01D4: `u`, \u01D5: `U`, \u01D6: `u`, \u01D7: `U`, \u01D8: `u`, \u01D9: `U`, \u01DA: `u`, \u01DB: `U`, \u01DC: `u`, \u1EE8: `U`, \u1EE9: `u`, \u1E78: `U`, \u1E79: `u`, \u01FA: `A`, \u01FB: `a`, \u01FC: `AE`, \u01FD: `ae`, \u01FE: `O`, \u01FF: `o`, \u00DE: `TH`, \u00FE: `th`, \u1E54: `P`, \u1E55: `p`, \u1E64: `S`, \u1E65: `s`, X\u0301: `X`, x\u0301: `x`, \u0403: `\u0413`, \u0453: `\u0433`, \u040C: `\u041A`, \u045C: `\u043A`, A\u030B: `A`, a\u030B: `a`, E\u030B: `E`, e\u030B: `e`, I\u030B: `I`, i\u030B: `i`, \u01F8: `N`, \u01F9: `n`, \u1ED2: `O`, \u1ED3: `o`, \u1E50: `O`, \u1E51: `o`, \u1EEA: `U`, \u1EEB: `u`, \u1E80: `W`, \u1E81: `w`, \u1EF2: `Y`, \u1EF3: `y`, \u0200: `A`, \u0201: `a`, \u0204: `E`, \u0205: `e`, \u0208: `I`, \u0209: `i`, \u020C: `O`, \u020D: `o`, \u0210: `R`, \u0211: `r`, \u0214: `U`, \u0215: `u`, B\u030C: `B`, b\u030C: `b`, \u010C\u0323: `C`, \u010D\u0323: `c`, \u00CA\u030C: `E`, \u00EA\u030C: `e`, F\u030C: `F`, f\u030C: `f`, \u01E6: `G`, \u01E7: `g`, \u021E: `H`, \u021F: `h`, J\u030C: `J`, \u01F0: `j`, \u01E8: `K`, \u01E9: `k`, M\u030C: `M`, m\u030C: `m`, P\u030C: `P`, p\u030C: `p`, Q\u030C: `Q`, q\u030C: `q`, \u0158\u0329: `R`, \u0159\u0329: `r`, \u1E66: `S`, \u1E67: `s`, V\u030C: `V`, v\u030C: `v`, W\u030C: `W`, w\u030C: `w`, X\u030C: `X`, x\u030C: `x`, Y\u030C: `Y`, y\u030C: `y`, A\u0327: `A`, a\u0327: `a`, B\u0327: `B`, b\u0327: `b`, \u1E10: `D`, \u1E11: `d`, \u0228: `E`, \u0229: `e`, \u0190\u0327: `E`, \u025B\u0327: `e`, \u1E28: `H`, \u1E29: `h`, I\u0327: `I`, i\u0327: `i`, \u0197\u0327: `I`, \u0268\u0327: `i`, M\u0327: `M`, m\u0327: `m`, O\u0327: `O`, o\u0327: `o`, Q\u0327: `Q`, q\u0327: `q`, U\u0327: `U`, u\u0327: `u`, X\u0327: `X`, x\u0327: `x`, Z\u0327: `Z`, z\u0327: `z` };
      Te2 = Object.keys(we2).join(`|`);
      Ee2 = new RegExp(Te2, `g`);
      z2 = { CASE_SENSITIVE_EQUAL: 7, EQUAL: 6, STARTS_WITH: 5, WORD_STARTS_WITH: 4, CONTAINS: 3, ACRONYM: 2, MATCHES: 1, NO_MATCH: 0 };
      Fe2 = { maxRanking: 1 / 0, minRanking: -1 / 0 };
      Le2 = { data: `` };
      Re2 = (e3) => {
        if (typeof window == `object`) {
          let t2 = (e3 ? e3.querySelector(`#_goober`) : window._goober) || Object.assign(document.createElement(`style`), { innerHTML: ` `, id: `_goober` });
          return t2.nonce = window.__nonce__, t2.parentNode || (e3 || document.head).appendChild(t2), t2.firstChild;
        }
        return e3 || Le2;
      };
      ze2 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
      Be2 = /\/\*[^]*?\*\/|  +/g;
      Ve2 = /\n+/g;
      He2 = (e3, t2) => {
        let n2 = ``, r2 = ``, i2 = ``;
        for (let a2 in e3) {
          let o2 = e3[a2];
          a2[0] == `@` ? a2[1] == `i` ? n2 = a2 + ` ` + o2 + `;` : r2 += a2[1] == `f` ? He2(o2, a2) : a2 + `{` + He2(o2, a2[1] == `k` ? `` : t2) + `}` : typeof o2 == `object` ? r2 += He2(o2, t2 ? t2.replace(/([^,])+/g, (e4) => a2.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e4) : e4 ? e4 + ` ` + t3 : t3)) : a2) : o2 != null && (a2 = /^--/.test(a2) ? a2 : a2.replace(/[A-Z]/g, `-$&`).toLowerCase(), i2 += He2.p ? He2.p(a2, o2) : a2 + `:` + o2 + `;`);
        }
        return n2 + (t2 && i2 ? t2 + `{` + i2 + `}` : i2) + r2;
      };
      Ue2 = {};
      We2 = (e3) => {
        if (typeof e3 == `object`) {
          let t2 = ``;
          for (let n2 in e3) t2 += n2 + We2(e3[n2]);
          return t2;
        }
        return e3;
      };
      Ge2 = (e3, t2, n2, r2, i2) => {
        let a2 = We2(e3), o2 = Ue2[a2] || (Ue2[a2] = ((e4) => {
          let t3 = 0, n3 = 11;
          for (; t3 < e4.length; ) n3 = 101 * n3 + e4.charCodeAt(t3++) >>> 0;
          return `go` + n3;
        })(a2));
        if (!Ue2[o2]) {
          let t3 = a2 === e3 ? ((e4) => {
            let t4, n3, r3 = [{}];
            for (; t4 = ze2.exec(e4.replace(Be2, ``)); ) t4[4] ? r3.shift() : t4[3] ? (n3 = t4[3].replace(Ve2, ` `).trim(), r3.unshift(r3[0][n3] = r3[0][n3] || {})) : r3[0][t4[1]] = t4[2].replace(Ve2, ` `).trim();
            return r3[0];
          })(e3) : e3;
          Ue2[o2] = He2(i2 ? { [`@keyframes ` + o2]: t3 } : t3, n2 ? `` : `.` + o2);
        }
        let s3 = n2 && Ue2.g ? Ue2.g : null;
        return n2 && (Ue2.g = Ue2[o2]), ((e4, t3, n3, r3) => {
          r3 ? t3.data = t3.data.replace(r3, e4) : t3.data.indexOf(e4) === -1 && (t3.data = n3 ? e4 + t3.data : t3.data + e4);
        })(Ue2[o2], t2, r2, s3), o2;
      };
      Ke2 = (e3, t2, n2) => e3.reduce((e4, r2, i2) => {
        let a2 = t2[i2];
        if (a2 && a2.call) {
          let e5 = a2(n2), t3 = e5 && e5.props && e5.props.className || /^go/.test(e5) && e5;
          a2 = t3 ? `.` + t3 : e5 && typeof e5 == `object` ? e5.props ? `` : He2(e5, ``) : false === e5 ? `` : e5;
        }
        return e4 + r2 + (a2 ?? ``);
      }, ``);
      B2.bind({ g: 1 }), B2.bind({ k: 1 });
      it2 = Symbol(`fallback`);
      ft2 = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
      Et2 = ((e3) => (e3.Escape = `Escape`, e3.Enter = `Enter`, e3.Tab = `Tab`, e3.Space = ` `, e3.ArrowDown = `ArrowDown`, e3.ArrowLeft = `ArrowLeft`, e3.ArrowRight = `ArrowRight`, e3.ArrowUp = `ArrowUp`, e3.End = `End`, e3.Home = `Home`, e3.PageDown = `PageDown`, e3.PageUp = `PageUp`, e3))(Et2 || {});
      Pt2 = null;
      Rt2 = [`input:not([type='hidden']):not([disabled])`, `select:not([disabled])`, `textarea:not([disabled])`, `button:not([disabled])`, `a[href]`, `area[href]`, `[tabindex]`, `iframe`, `object`, `embed`, `audio[controls]`, `video[controls]`, `[contenteditable]:not([contenteditable='false'])`];
      zt2 = [...Rt2, `[tabindex]:not([tabindex="-1"]):not([disabled])`];
      Bt2 = `${Rt2.join(`:not([hidden]),`)},[tabindex]:not([disabled]):not([hidden])`;
      Vt2 = zt2.join(`:not([hidden]):not([tabindex="-1"]),`);
      tn2 = /* @__PURE__ */ new Map();
      nn2 = /* @__PURE__ */ new Set();
      typeof document < `u` && (document.readyState === `loading` ? document.addEventListener(`DOMContentLoaded`, rn2) : rn2());
      cn2 = { border: `0`, clip: `rect(0 0 0 0)`, "clip-path": `inset(50%)`, height: `1px`, margin: `0 -1px -1px 0`, overflow: `hidden`, padding: `0`, position: `absolute`, width: `1px`, "white-space": `nowrap` };
      dn2 = Object.defineProperty;
      fn2 = (e3, t2) => {
        for (var n2 in t2) dn2(e3, n2, { get: t2[n2], enumerable: true });
      };
      fn2({}, { Button: () => gn2, Root: () => hn2 });
      pn2 = [`button`, `color`, `file`, `image`, `reset`, `submit`];
      gn2 = hn2;
      Cn2 = /* @__PURE__ */ new Set([`Avst`, `Arab`, `Armi`, `Syrc`, `Samr`, `Mand`, `Thaa`, `Mend`, `Nkoo`, `Adlm`, `Rohg`, `Hebr`]);
      wn2 = /* @__PURE__ */ new Set([`ae`, `ar`, `arc`, `bcc`, `bqi`, `ckb`, `dv`, `fa`, `glk`, `he`, `ku`, `mzn`, `nqo`, `pnb`, `ps`, `sd`, `ug`, `ur`, `yi`]);
      On2 = Dn2();
      kn2 = /* @__PURE__ */ new Set();
      Mn2 = A();
      Pn2 = /* @__PURE__ */ new Map();
      In2 = class e2 extends Set {
        anchorKey;
        currentKey;
        constructor(t2, n2, r2) {
          super(t2), t2 instanceof e2 ? (this.anchorKey = n2 || t2.anchorKey, this.currentKey = r2 || t2.currentKey) : (this.anchorKey = n2, this.currentKey = r2);
        }
      };
      Jn = class {
        collection;
        state;
        constructor(e3, t2) {
          this.collection = e3, this.state = t2;
        }
        selectionMode() {
          return this.state.selectionMode();
        }
        disallowEmptySelection() {
          return this.state.disallowEmptySelection();
        }
        selectionBehavior() {
          return this.state.selectionBehavior();
        }
        setSelectionBehavior(e3) {
          this.state.setSelectionBehavior(e3);
        }
        isFocused() {
          return this.state.isFocused();
        }
        setFocused(e3) {
          this.state.setFocused(e3);
        }
        focusedKey() {
          return this.state.focusedKey();
        }
        setFocusedKey(e3) {
          (e3 == null || this.collection().getItem(e3)) && this.state.setFocusedKey(e3);
        }
        selectedKeys() {
          return this.state.selectedKeys();
        }
        isSelected(e3) {
          if (this.state.selectionMode() === `none`) return false;
          let t2 = this.getKey(e3);
          return t2 != null && this.state.selectedKeys().has(t2);
        }
        isEmpty() {
          return this.state.selectedKeys().size === 0;
        }
        isSelectAll() {
          if (this.isEmpty()) return false;
          let e3 = this.state.selectedKeys();
          return this.getAllSelectableKeys().every((t2) => e3.has(t2));
        }
        firstSelectedKey() {
          let e3;
          for (let t2 of this.state.selectedKeys()) {
            let n2 = this.collection().getItem(t2), r2 = n2?.index != null && e3?.index != null && n2.index < e3.index;
            (!e3 || r2) && (e3 = n2);
          }
          return e3?.key;
        }
        lastSelectedKey() {
          let e3;
          for (let t2 of this.state.selectedKeys()) {
            let n2 = this.collection().getItem(t2), r2 = n2?.index != null && e3?.index != null && n2.index > e3.index;
            (!e3 || r2) && (e3 = n2);
          }
          return e3?.key;
        }
        extendSelection(e3) {
          if (this.selectionMode() === `none`) return;
          if (this.selectionMode() === `single`) {
            this.replaceSelection(e3);
            return;
          }
          let t2 = this.getKey(e3);
          if (t2 == null) return;
          let n2 = this.state.selectedKeys(), r2 = n2.anchorKey || t2, i2 = new In2(n2, r2, t2);
          for (let e4 of this.getKeyRange(r2, n2.currentKey || t2)) i2.delete(e4);
          for (let e4 of this.getKeyRange(t2, r2)) this.canSelectItem(e4) && i2.add(e4);
          this.state.setSelectedKeys(i2);
        }
        getKeyRange(e3, t2) {
          let n2 = this.collection().getItem(e3), r2 = this.collection().getItem(t2);
          return n2 && r2 ? n2.index != null && r2.index != null && n2.index <= r2.index ? this.getKeyRangeInternal(e3, t2) : this.getKeyRangeInternal(t2, e3) : [];
        }
        getKeyRangeInternal(e3, t2) {
          let n2 = [], r2 = e3;
          for (; r2 != null; ) {
            let e4 = this.collection().getItem(r2);
            if (e4 && e4.type === `item` && n2.push(r2), r2 === t2) return n2;
            r2 = this.collection().getKeyAfter(r2);
          }
          return [];
        }
        getKey(e3) {
          let t2 = this.collection().getItem(e3);
          return t2 ? !t2 || t2.type !== `item` ? null : t2.key : e3;
        }
        toggleSelection(e3) {
          if (this.selectionMode() === `none`) return;
          if (this.selectionMode() === `single` && !this.isSelected(e3)) {
            this.replaceSelection(e3);
            return;
          }
          let t2 = this.getKey(e3);
          if (t2 == null) return;
          let n2 = new In2(this.state.selectedKeys());
          n2.has(t2) ? n2.delete(t2) : this.canSelectItem(t2) && (n2.add(t2), n2.anchorKey = t2, n2.currentKey = t2), !(this.disallowEmptySelection() && n2.size === 0) && this.state.setSelectedKeys(n2);
        }
        replaceSelection(e3) {
          if (this.selectionMode() === `none`) return;
          let t2 = this.getKey(e3);
          if (t2 == null) return;
          let n2 = this.canSelectItem(t2) ? new In2([t2], t2, t2) : new In2();
          this.state.setSelectedKeys(n2);
        }
        setSelectedKeys(e3) {
          if (this.selectionMode() === `none`) return;
          let t2 = new In2();
          for (let n2 of e3) {
            let e4 = this.getKey(n2);
            if (e4 != null && (t2.add(e4), this.selectionMode() === `single`)) break;
          }
          this.state.setSelectedKeys(t2);
        }
        selectAll() {
          this.selectionMode() === `multiple` && this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()));
        }
        clearSelection() {
          let e3 = this.state.selectedKeys();
          !this.disallowEmptySelection() && e3.size > 0 && this.state.setSelectedKeys(new In2());
        }
        toggleSelectAll() {
          this.isSelectAll() ? this.clearSelection() : this.selectAll();
        }
        select(e3, t2) {
          this.selectionMode() !== `none` && (this.selectionMode() === `single` ? this.isSelected(e3) && !this.disallowEmptySelection() ? this.toggleSelection(e3) : this.replaceSelection(e3) : this.selectionBehavior() === `toggle` || t2 && t2.pointerType === `touch` ? this.toggleSelection(e3) : this.replaceSelection(e3));
        }
        isSelectionEqual(e3) {
          if (e3 === this.state.selectedKeys()) return true;
          let t2 = this.selectedKeys();
          if (e3.size !== t2.size) return false;
          for (let n2 of e3) if (!t2.has(n2)) return false;
          for (let n2 of t2) if (!e3.has(n2)) return false;
          return true;
        }
        canSelectItem(e3) {
          if (this.state.selectionMode() === `none`) return false;
          let t2 = this.collection().getItem(e3);
          return t2 != null && !t2.disabled;
        }
        isDisabled(e3) {
          let t2 = this.collection().getItem(e3);
          return !t2 || t2.disabled;
        }
        getAllSelectableKeys() {
          let e3 = [];
          return ((t2) => {
            for (; t2 != null; ) {
              if (this.canSelectItem(t2)) {
                let n2 = this.collection().getItem(t2);
                if (!n2) continue;
                n2.type === `item` && e3.push(t2);
              }
              t2 = this.collection().getKeyAfter(t2);
            }
          })(this.collection().getFirstKey()), e3;
        }
      };
      Yn = class {
        keyMap = /* @__PURE__ */ new Map();
        iterable;
        firstKey;
        lastKey;
        constructor(e3) {
          this.iterable = e3;
          for (let t3 of e3) this.keyMap.set(t3.key, t3);
          if (this.keyMap.size === 0) return;
          let t2, n2 = 0;
          for (let [e4, r2] of this.keyMap) t2 ? (t2.nextKey = e4, r2.prevKey = t2.key) : (this.firstKey = e4, r2.prevKey = void 0), r2.type === `item` && (r2.index = n2++), t2 = r2, t2.nextKey = void 0;
          this.lastKey = t2.key;
        }
        *[Symbol.iterator]() {
          yield* this.iterable;
        }
        getSize() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        getKeyBefore(e3) {
          return this.keyMap.get(e3)?.prevKey;
        }
        getKeyAfter(e3) {
          return this.keyMap.get(e3)?.nextKey;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          return this.lastKey;
        }
        getItem(e3) {
          return this.keyMap.get(e3);
        }
        at(e3) {
          let t2 = [...this.getKeys()];
          return this.getItem(t2[e3]);
        }
      };
      Zn = A();
      lr = [`top`, `right`, `bottom`, `left`];
      ur = Math.min;
      dr = Math.max;
      fr = Math.round;
      pr = Math.floor;
      mr = (e3) => ({ x: e3, y: e3 });
      hr = { left: `right`, right: `left`, bottom: `top`, top: `bottom` };
      Dr = [`left`, `right`];
      Or = [`right`, `left`];
      kr = [`top`, `bottom`];
      Ar = [`bottom`, `top`];
      zr = async (e3, t2, n2) => {
        let { placement: r2 = `bottom`, strategy: i2 = `absolute`, middleware: a2 = [], platform: o2 } = n2, s3 = o2.detectOverflow ? o2 : { ...o2, detectOverflow: Rr }, c2 = await (o2.isRTL == null ? void 0 : o2.isRTL(t2)), l3 = await o2.getElementRects({ reference: e3, floating: t2, strategy: i2 }), { x: u2, y: d2 } = Lr(l3, r2, c2), f2 = r2, p3 = 0, m2 = {};
        for (let n3 = 0; n3 < a2.length; n3++) {
          let h3 = a2[n3];
          if (!h3) continue;
          let { name: g2, fn: _2 } = h3, { x: v2, y: y2, data: b2, reset: x2 } = await _2({ x: u2, y: d2, initialPlacement: r2, placement: f2, strategy: i2, middlewareData: m2, rects: l3, platform: s3, elements: { reference: e3, floating: t2 } });
          u2 = v2 ?? u2, d2 = y2 ?? d2, m2[g2] = { ...m2[g2], ...b2 }, x2 && p3 < 50 && (p3++, typeof x2 == `object` && (x2.placement && (f2 = x2.placement), x2.rects && (l3 = x2.rects === true ? await o2.getElementRects({ reference: e3, floating: t2, strategy: i2 }) : x2.rects), { x: u2, y: d2 } = Lr(l3, f2, c2)), n3 = -1);
        }
        return { x: u2, y: d2, placement: f2, strategy: i2, middlewareData: m2 };
      };
      Br = (e3) => ({ name: `arrow`, options: e3, async fn(t2) {
        let { x: n2, y: r2, placement: i2, rects: a2, platform: o2, elements: s3, middlewareData: c2 } = t2, { element: l3, padding: u2 = 0 } = _r(e3, t2) || {};
        if (l3 == null) return {};
        let d2 = Fr(u2), f2 = { x: n2, y: r2 }, p3 = Cr(i2), m2 = xr(p3), h3 = await o2.getDimensions(l3), g2 = p3 === `y`, _2 = g2 ? `top` : `left`, v2 = g2 ? `bottom` : `right`, y2 = g2 ? `clientHeight` : `clientWidth`, b2 = a2.reference[m2] + a2.reference[p3] - f2[p3] - a2.floating[m2], x2 = f2[p3] - a2.reference[p3], S2 = await (o2.getOffsetParent == null ? void 0 : o2.getOffsetParent(l3)), C2 = S2 ? S2[y2] : 0;
        (!C2 || !await (o2.isElement == null ? void 0 : o2.isElement(S2))) && (C2 = s3.floating[y2] || a2.floating[m2]);
        let w2 = b2 / 2 - x2 / 2, T2 = C2 / 2 - h3[m2] / 2 - 1, E2 = ur(d2[_2], T2), D2 = ur(d2[v2], T2), O2 = E2, k2 = C2 - h3[m2] - D2, A2 = C2 / 2 - h3[m2] / 2 + w2, j2 = gr(O2, A2, k2), M2 = !c2.arrow && yr(i2) != null && A2 !== j2 && a2.reference[m2] / 2 - (A2 < O2 ? E2 : D2) - h3[m2] / 2 < 0, N2 = M2 ? A2 < O2 ? A2 - O2 : A2 - k2 : 0;
        return { [p3]: f2[p3] + N2, data: { [p3]: j2, centerOffset: A2 - j2 - N2, ...M2 && { alignmentOffset: N2 } }, reset: M2 };
      } });
      Vr = function(e3) {
        return e3 === void 0 && (e3 = {}), { name: `flip`, options: e3, async fn(t2) {
          var n2;
          let { placement: r2, middlewareData: i2, rects: a2, initialPlacement: o2, platform: s3, elements: c2 } = t2, { mainAxis: l3 = true, crossAxis: u2 = true, fallbackPlacements: d2, fallbackStrategy: f2 = `bestFit`, fallbackAxisSideDirection: p3 = `none`, flipAlignment: m2 = true, ...h3 } = _r(e3, t2);
          if ((n2 = i2.arrow) != null && n2.alignmentOffset) return {};
          let g2 = vr(r2), _2 = Sr(o2), v2 = vr(o2) === o2, y2 = await (s3.isRTL == null ? void 0 : s3.isRTL(c2.floating)), b2 = d2 || (v2 || !m2 ? [Nr(o2)] : Tr(o2)), x2 = p3 !== `none`;
          !d2 && x2 && b2.push(...Mr(o2, m2, p3, y2));
          let S2 = [o2, ...b2], C2 = await s3.detectOverflow(t2, h3), w2 = [], T2 = i2.flip?.overflows || [];
          if (l3 && w2.push(C2[g2]), u2) {
            let e4 = wr(r2, a2, y2);
            w2.push(C2[e4[0]], C2[e4[1]]);
          }
          if (T2 = [...T2, { placement: r2, overflows: w2 }], !w2.every((e4) => e4 <= 0)) {
            let e4 = (i2.flip?.index || 0) + 1, t3 = S2[e4];
            if (t3 && (u2 !== `alignment` || _2 === Sr(t3) || T2.every((e5) => Sr(e5.placement) !== _2 || e5.overflows[0] > 0))) return { data: { index: e4, overflows: T2 }, reset: { placement: t3 } };
            let n3 = T2.filter((e5) => e5.overflows[0] <= 0).sort((e5, t4) => e5.overflows[1] - t4.overflows[1])[0]?.placement;
            if (!n3) switch (f2) {
              case `bestFit`: {
                let e5 = T2.filter((e6) => {
                  if (x2) {
                    let t4 = Sr(e6.placement);
                    return t4 === _2 || t4 === `y`;
                  }
                  return true;
                }).map((e6) => [e6.placement, e6.overflows.filter((e7) => e7 > 0).reduce((e7, t4) => e7 + t4, 0)]).sort((e6, t4) => e6[1] - t4[1])[0]?.[0];
                e5 && (n3 = e5);
                break;
              }
              case `initialPlacement`:
                n3 = o2;
            }
            if (r2 !== n3) return { reset: { placement: n3 } };
          }
          return {};
        } };
      };
      Wr = function(e3) {
        return e3 === void 0 && (e3 = {}), { name: `hide`, options: e3, async fn(t2) {
          let { rects: n2, platform: r2 } = t2, { strategy: i2 = `referenceHidden`, ...a2 } = _r(e3, t2);
          switch (i2) {
            case `referenceHidden`: {
              let e4 = Hr(await r2.detectOverflow(t2, { ...a2, elementContext: `reference` }), n2.reference);
              return { data: { referenceHiddenOffsets: e4, referenceHidden: Ur(e4) } };
            }
            case `escaped`: {
              let e4 = Hr(await r2.detectOverflow(t2, { ...a2, altBoundary: true }), n2.floating);
              return { data: { escapedOffsets: e4, escaped: Ur(e4) } };
            }
            default:
              return {};
          }
        } };
      };
      Gr = /* @__PURE__ */ new Set([`left`, `top`]);
      qr = function(e3) {
        return e3 === void 0 && (e3 = 0), { name: `offset`, options: e3, async fn(t2) {
          var n2;
          let { x: r2, y: i2, placement: a2, middlewareData: o2 } = t2, s3 = await Kr(t2, e3);
          return a2 === o2.offset?.placement && (n2 = o2.arrow) != null && n2.alignmentOffset ? {} : { x: r2 + s3.x, y: i2 + s3.y, data: { ...s3, placement: a2 } };
        } };
      };
      Jr = function(e3) {
        return e3 === void 0 && (e3 = {}), { name: `shift`, options: e3, async fn(t2) {
          let { x: n2, y: r2, placement: i2, platform: a2 } = t2, { mainAxis: o2 = true, crossAxis: s3 = false, limiter: c2 = { fn: (e4) => {
            let { x: t3, y: n3 } = e4;
            return { x: t3, y: n3 };
          } }, ...l3 } = _r(e3, t2), u2 = { x: n2, y: r2 }, d2 = await a2.detectOverflow(t2, l3), f2 = Sr(vr(i2)), p3 = br(f2), m2 = u2[p3], h3 = u2[f2];
          if (o2) {
            let e4 = p3 === `y` ? `top` : `left`, t3 = p3 === `y` ? `bottom` : `right`, n3 = m2 + d2[e4], r3 = m2 - d2[t3];
            m2 = gr(n3, m2, r3);
          }
          if (s3) {
            let e4 = f2 === `y` ? `top` : `left`, t3 = f2 === `y` ? `bottom` : `right`, n3 = h3 + d2[e4], r3 = h3 - d2[t3];
            h3 = gr(n3, h3, r3);
          }
          let g2 = c2.fn({ ...t2, [p3]: m2, [f2]: h3 });
          return { ...g2, data: { x: g2.x - n2, y: g2.y - r2, enabled: { [p3]: o2, [f2]: s3 } } };
        } };
      };
      Yr = function(e3) {
        return e3 === void 0 && (e3 = {}), { name: `size`, options: e3, async fn(t2) {
          var n2, r2;
          let { placement: i2, rects: a2, platform: o2, elements: s3 } = t2, { apply: c2 = () => {
          }, ...l3 } = _r(e3, t2), u2 = await o2.detectOverflow(t2, l3), d2 = vr(i2), f2 = yr(i2), p3 = Sr(i2) === `y`, { width: m2, height: h3 } = a2.floating, g2, _2;
          d2 === `top` || d2 === `bottom` ? (g2 = d2, _2 = f2 === (await (o2.isRTL == null ? void 0 : o2.isRTL(s3.floating)) ? `start` : `end`) ? `left` : `right`) : (_2 = d2, g2 = f2 === `end` ? `top` : `bottom`);
          let v2 = h3 - u2.top - u2.bottom, y2 = m2 - u2.left - u2.right, b2 = ur(h3 - u2[g2], v2), x2 = ur(m2 - u2[_2], y2), S2 = !t2.middlewareData.shift, C2 = b2, w2 = x2;
          if ((n2 = t2.middlewareData.shift) != null && n2.enabled.x && (w2 = y2), (r2 = t2.middlewareData.shift) != null && r2.enabled.y && (C2 = v2), S2 && !f2) {
            let e4 = dr(u2.left, 0), t3 = dr(u2.right, 0), n3 = dr(u2.top, 0), r3 = dr(u2.bottom, 0);
            p3 ? w2 = m2 - 2 * (e4 !== 0 || t3 !== 0 ? e4 + t3 : dr(u2.left, u2.right)) : C2 = h3 - 2 * (n3 !== 0 || r3 !== 0 ? n3 + r3 : dr(u2.top, u2.bottom));
          }
          await c2({ ...t2, availableWidth: w2, availableHeight: C2 });
          let T2 = await o2.getDimensions(s3.floating);
          return m2 !== T2.width || h3 !== T2.height ? { reset: { rects: true } } : {};
        } };
      };
      si = /transform|translate|scale|rotate|perspective|filter/;
      ci = /paint|layout|strict|content/;
      li = (e3) => !!e3 && e3 !== `none`;
      wi = mr(0);
      Wi = async function(e3) {
        let t2 = this.getOffsetParent || Ui, n2 = this.getDimensions, r2 = await n2(e3.floating);
        return { reference: Bi(e3.reference, await t2(e3.floating), e3.strategy), floating: { x: 0, y: 0, width: r2.width, height: r2.height } };
      };
      Ki = { convertOffsetParentRelativeRectToViewportRelativeRect: Ai, getDocumentElement: $r, getClippingRect: Ri, getOffsetParent: Ui, getElementRects: Wi, getClientRects: ji, getDimensions: zi, getScale: Ci, isElement: ti, isRTL: Gi };
      Xi = qr;
      Zi = Jr;
      Qi = Vr;
      $i = Yr;
      ea = Wr;
      ta = Br;
      na = (e3, t2, n2) => {
        let r2 = /* @__PURE__ */ new Map(), i2 = { platform: Ki, ...n2 }, a2 = { ...i2.platform, _c: r2 };
        return zr(e3, t2, { ...i2, platform: a2 });
      };
      ra = A();
      aa = Qe(`<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">`);
      oa = 30;
      sa = oa / 2;
      ca = { top: 180, right: -90, bottom: 0, left: 90 };
      ha = { top: `bottom`, right: `left`, bottom: `top`, left: `right` };
      va = Object.assign(_a, { Arrow: la, Context: ra, usePopperContext: ia, Positioner: da });
      ya = `data-kb-top-layer`;
      xa = false;
      Sa = [];
      Fa = { layers: Sa, isTopMostLayer: Ta, hasPointerBlockingLayer: Oa, isBelowPointerBlockingLayer: ka, addLayer: Aa, removeLayer: ja, indexOf: Ca, find: wa, assignPointerEventToLayers: Ma, disableBodyPointerEvents: Na, restoreBodyPointerEvents: Pa };
      Ia = `interactOutside.pointerDownOutside`;
      La = `interactOutside.focusOutside`;
      Ba = A();
      J2 = (e3) => typeof e3 == `function` ? e3() : e3;
      Ga = (t2) => {
        let r2 = S(() => {
          let e3 = J2(t2.element);
          if (e3) return getComputedStyle(e3);
        }), i2 = () => r2()?.animationName ?? `none`, [a2, o2] = v(J2(t2.show) ? `present` : `hidden`), s3 = `none`;
        return x((n2) => {
          let a3 = J2(t2.show);
          return w(() => {
            if (n2 === a3) return a3;
            let e3 = s3, t3 = i2();
            a3 ? o2(`present`) : t3 === `none` || r2()?.display === `none` ? o2(`hidden`) : o2(n2 === true && e3 !== t3 ? `hiding` : `hidden`);
          }), a3;
        }), x(() => {
          let e3 = J2(t2.element);
          if (!e3) return;
          let n2 = (t3) => {
            t3.target === e3 && (s3 = i2());
          }, r3 = (t3) => {
            let n3 = i2().includes(t3.animationName);
            t3.target === e3 && n3 && a2() === `hiding` && o2(`hidden`);
          };
          e3.addEventListener(`animationstart`, n2), e3.addEventListener(`animationcancel`, r3), e3.addEventListener(`animationend`, r3), T(() => {
            e3.removeEventListener(`animationstart`, n2), e3.removeEventListener(`animationcancel`, r3), e3.removeEventListener(`animationend`, r3);
          });
        }), { present: () => a2() === `present` || a2() === `hiding`, state: a2, setState: o2 };
      };
      Ka = [`id`, `name`, `validationState`, `required`, `disabled`, `readOnly`];
      Ja = A();
      no = `focusScope.autoFocusOnMount`;
      ro = `focusScope.autoFocusOnUnmount`;
      io = { bubbles: false, cancelable: true };
      ao = { stack: [], active() {
        return this.stack[0];
      }, add(e3) {
        e3 !== this.active() && this.active()?.pause(), this.stack = gt2(this.stack, e3), this.stack.unshift(e3);
      }, remove(e3) {
        this.stack = gt2(this.stack, e3), this.active()?.resume();
      } };
      so = `data-live-announcer`;
      lo = /* @__PURE__ */ new WeakMap();
      uo = [];
      po = (e3, t2) => {
        if (e3.contains(t2)) return true;
        let n2 = t2;
        for (; n2; ) {
          if (n2 === e3) return true;
          n2 = n2._$host ?? n2.parentElement;
        }
        return false;
      };
      mo = /* @__PURE__ */ new Map();
      ho = (e3) => {
        x(() => {
          let t2 = J2(e3.style) ?? {}, n2 = J2(e3.properties) ?? [], r2 = {};
          for (let n3 in t2) r2[n3] = e3.element.style[n3];
          let i2 = mo.get(e3.key);
          i2 ? i2.activeCount++ : mo.set(e3.key, { activeCount: 1, originalStyles: r2, properties: n2.map((e4) => e4.key) }), Object.assign(e3.element.style, e3.style);
          for (let t3 of n2) e3.element.style.setProperty(t3.key, t3.value);
          T(() => {
            let t3 = mo.get(e3.key);
            if (t3) {
              if (t3.activeCount !== 1) {
                t3.activeCount--;
                return;
              }
              mo.delete(e3.key);
              for (let [n3, r3] of Object.entries(t3.originalStyles)) e3.element.style[n3] = r3;
              for (let n3 of t3.properties) e3.element.style.removeProperty(n3);
              e3.element.style.length === 0 && e3.element.removeAttribute(`style`), e3.cleanup?.();
            }
          });
        });
      };
      go = (e3, t2) => {
        switch (t2) {
          case `x`:
            return [e3.clientWidth, e3.scrollLeft, e3.scrollWidth];
          case `y`:
            return [e3.clientHeight, e3.scrollTop, e3.scrollHeight];
        }
      };
      _o = (e3, t2) => {
        let n2 = getComputedStyle(e3), r2 = t2 === `x` ? n2.overflowX : n2.overflowY;
        return r2 === `auto` || r2 === `scroll` || e3.tagName === `HTML` && r2 === `visible`;
      };
      vo = (e3, t2, n2) => {
        let r2 = t2 === `x` && window.getComputedStyle(e3).direction === `rtl` ? -1 : 1, i2 = e3, a2 = 0, o2 = 0, s3 = false;
        do {
          let [e4, c2, l3] = go(i2, t2), u2 = l3 - e4 - r2 * c2;
          (c2 !== 0 || u2 !== 0) && _o(i2, t2) && (a2 += u2, o2 += c2), i2 === (n2 ?? document.documentElement) ? s3 = true : i2 = i2._$host ?? i2.parentElement;
        } while (i2 && !s3);
        return [a2, o2];
      };
      [yo, bo] = v([]);
      xo = (e3) => yo().indexOf(e3) === yo().length - 1;
      So = (e3) => {
        let t2 = Ae({ element: null, enabled: true, hideScrollbar: true, preventScrollbarShift: true, preventScrollbarShiftMode: `padding`, restoreScrollPosition: true, allowPinchZoom: false }, e3), r2 = Pe(), i2 = [0, 0], a2 = null, o2 = null;
        x(() => {
          J2(t2.enabled) && (bo((e4) => [...e4, r2]), T(() => {
            bo((e4) => e4.filter((e5) => e5 !== r2));
          }));
        }), x(() => {
          if (!J2(t2.enabled) || !J2(t2.hideScrollbar)) return;
          let { body: e4 } = document, n2 = window.innerWidth - e4.offsetWidth;
          if (J2(t2.preventScrollbarShift)) {
            let r3 = { overflow: `hidden` }, i3 = [];
            n2 > 0 && (J2(t2.preventScrollbarShiftMode) === `padding` ? r3.paddingRight = `calc(${window.getComputedStyle(e4).paddingRight} + ${n2}px)` : r3.marginRight = `calc(${window.getComputedStyle(e4).marginRight} + ${n2}px)`, i3.push({ key: `--scrollbar-width`, value: `${n2}px` }));
            let a3 = window.scrollY, o3 = window.scrollX;
            ho({ key: `prevent-scroll`, element: e4, style: r3, properties: i3, cleanup: () => {
              J2(t2.restoreScrollPosition) && n2 > 0 && window.scrollTo(o3, a3);
            } });
          } else ho({ key: `prevent-scroll`, element: e4, style: { overflow: `hidden` } });
        }), x(() => {
          !xo(r2) || !J2(t2.enabled) || (document.addEventListener(`wheel`, l3, { passive: false }), document.addEventListener(`touchstart`, c2, { passive: false }), document.addEventListener(`touchmove`, d2, { passive: false }), T(() => {
            document.removeEventListener(`wheel`, l3), document.removeEventListener(`touchstart`, c2), document.removeEventListener(`touchmove`, d2);
          }));
        });
        let c2 = (e4) => {
          i2 = wo(e4), a2 = null, o2 = null;
        }, l3 = (e4) => {
          let n2 = e4.target, r3 = J2(t2.element), i3 = Co(e4), a3 = Math.abs(i3[0]) > Math.abs(i3[1]) ? `x` : `y`, o3 = To(n2, a3, a3 === `x` ? i3[0] : i3[1], r3), s3;
          s3 = r3 && po(r3, n2) ? !o3 : true, s3 && e4.cancelable && e4.preventDefault();
        }, d2 = (e4) => {
          let n2 = J2(t2.element), r3 = e4.target, s3;
          if (e4.touches.length === 2) s3 = !J2(t2.allowPinchZoom);
          else {
            if (a2 == null || o2 === null) {
              let t3 = wo(e4).map((e5, t4) => i2[t4] - e5), n3 = Math.abs(t3[0]) > Math.abs(t3[1]) ? `x` : `y`;
              a2 = n3, o2 = n3 === `x` ? t3[0] : t3[1];
            }
            if (r3.type === `range`) s3 = false;
            else {
              let e5 = To(r3, a2, o2, n2);
              s3 = n2 && po(n2, r3) ? !e5 : true;
            }
          }
          s3 && e4.cancelable && e4.preventDefault();
        };
      };
      Co = (e3) => [e3.deltaX, e3.deltaY];
      wo = (e3) => e3.changedTouches[0] ? [e3.changedTouches[0].clientX, e3.changedTouches[0].clientY] : [0, 0];
      To = (e3, t2, n2, r2) => {
        let [i2, a2] = vo(e3, t2, r2 !== null && po(r2, e3) ? r2 : void 0);
        return !(n2 > 0 && Math.abs(i2) <= 1 || n2 < 0 && Math.abs(a2) < 1);
      };
      Eo = So;
      Do = {};
      fn2(Do, { Description: () => Xa, ErrorMessage: () => to, Item: () => Mo, ItemControl: () => No, ItemDescription: () => Po, ItemIndicator: () => Fo, ItemInput: () => Io, ItemLabel: () => Lo, Label: () => Ro, RadioGroup: () => Bo, Root: () => zo, useRadioGroupContext: () => ko });
      Oo = A();
      Ao = A();
      Bo = Object.assign(zo, { Description: Xa, ErrorMessage: to, Item: Mo, ItemControl: No, ItemDescription: Po, ItemIndicator: Fo, ItemInput: Io, ItemLabel: Lo, Label: Ro });
      Vo = class {
        collection;
        ref;
        collator;
        constructor(e3, t2, n2) {
          this.collection = e3, this.ref = t2, this.collator = n2;
        }
        getKeyBelow(e3) {
          let t2 = this.collection().getKeyAfter(e3);
          for (; t2 != null; ) {
            let e4 = this.collection().getItem(t2);
            if (e4 && e4.type === `item` && !e4.disabled) return t2;
            t2 = this.collection().getKeyAfter(t2);
          }
        }
        getKeyAbove(e3) {
          let t2 = this.collection().getKeyBefore(e3);
          for (; t2 != null; ) {
            let e4 = this.collection().getItem(t2);
            if (e4 && e4.type === `item` && !e4.disabled) return t2;
            t2 = this.collection().getKeyBefore(t2);
          }
        }
        getFirstKey() {
          let e3 = this.collection().getFirstKey();
          for (; e3 != null; ) {
            let t2 = this.collection().getItem(e3);
            if (t2 && t2.type === `item` && !t2.disabled) return e3;
            e3 = this.collection().getKeyAfter(e3);
          }
        }
        getLastKey() {
          let e3 = this.collection().getLastKey();
          for (; e3 != null; ) {
            let t2 = this.collection().getItem(e3);
            if (t2 && t2.type === `item` && !t2.disabled) return e3;
            e3 = this.collection().getKeyBefore(e3);
          }
        }
        getItem(e3) {
          return this.ref?.()?.querySelector(`[data-key="${e3}"]`) ?? null;
        }
        getKeyPageAbove(e3) {
          let t2 = this.ref?.(), n2 = this.getItem(e3);
          if (!t2 || !n2) return;
          let r2 = Math.max(0, n2.offsetTop + n2.offsetHeight - t2.offsetHeight), i2 = e3;
          for (; i2 && n2 && n2.offsetTop > r2; ) i2 = this.getKeyAbove(i2), n2 = i2 == null ? null : this.getItem(i2);
          return i2;
        }
        getKeyPageBelow(e3) {
          let t2 = this.ref?.(), n2 = this.getItem(e3);
          if (!t2 || !n2) return;
          let r2 = Math.min(t2.scrollHeight, n2.offsetTop - n2.offsetHeight + t2.offsetHeight), i2 = e3;
          for (; i2 && n2 && n2.offsetTop < r2; ) i2 = this.getKeyBelow(i2), n2 = i2 == null ? null : this.getItem(i2);
          return i2;
        }
        getKeyForSearch(e3, t2) {
          let n2 = this.collator?.();
          if (!n2) return;
          let r2 = t2 == null ? this.getFirstKey() : this.getKeyBelow(t2);
          for (; r2 != null; ) {
            let t3 = this.collection().getItem(r2);
            if (t3) {
              let i2 = t3.textValue.slice(0, e3.length);
              if (t3.textValue && n2.compare(i2, e3) === 0) return r2;
            }
            r2 = this.getKeyBelow(r2);
          }
        }
      };
      Uo = A();
      Go = A();
      qo = A();
      Xo = A();
      Qo = A();
      ns = { next: (e3, t2) => e3 === `ltr` ? t2 === `horizontal` ? `ArrowRight` : `ArrowDown` : t2 === `horizontal` ? `ArrowLeft` : `ArrowUp`, previous: (e3, t2) => ns.next(e3 === `ltr` ? `rtl` : `ltr`, t2) };
      rs = { first: (e3) => e3 === `horizontal` ? `ArrowDown` : `ArrowRight`, last: (e3) => e3 === `horizontal` ? `ArrowUp` : `ArrowLeft` };
      ss = A();
      _s = A();
      Ts = { close: (e3, t2) => e3 === `ltr` ? [t2 === `horizontal` ? `ArrowLeft` : `ArrowUp`] : [t2 === `horizontal` ? `ArrowRight` : `ArrowDown`] };
      Ds = [`Enter`, ` `];
      Os = { open: (e3, t2) => e3 === `ltr` ? [...Ds, t2 === `horizontal` ? `ArrowRight` : `ArrowDown`] : [...Ds, t2 === `horizontal` ? `ArrowLeft` : `ArrowUp`] };
      fn2({}, { Root: () => js, Separator: () => Ms });
      Ms = js;
      Y2 = {};
      fn2(Y2, { Arrow: () => la, CheckboxItem: () => ts, Content: () => Ns, DropdownMenu: () => Fs, Group: () => ls, GroupLabel: () => us, Icon: () => ds, Item: () => fs, ItemDescription: () => ps, ItemIndicator: () => ms, ItemLabel: () => hs, Portal: () => gs, RadioGroup: () => ys, RadioItem: () => bs, Root: () => Ps, Separator: () => js, Sub: () => ws, SubContent: () => Es, SubTrigger: () => ks, Trigger: () => is });
      Fs = Object.assign(Ps, { Arrow: la, CheckboxItem: ts, Content: Ns, Group: ls, GroupLabel: us, Icon: ds, Item: fs, ItemDescription: ps, ItemIndicator: ms, ItemLabel: hs, Portal: gs, RadioGroup: ys, RadioItem: bs, Separator: js, Sub: ws, SubContent: Es, SubTrigger: ks, Trigger: is });
      X2 = { colors: { inherit: `inherit`, current: `currentColor`, transparent: `transparent`, black: `#000000`, white: `#ffffff`, neutral: { 50: `#f9fafb`, 100: `#f2f4f7`, 200: `#eaecf0`, 300: `#d0d5dd`, 400: `#98a2b3`, 500: `#667085`, 600: `#475467`, 700: `#344054`, 800: `#1d2939`, 900: `#101828` }, darkGray: { 50: `#525c7a`, 100: `#49536e`, 200: `#414962`, 300: `#394056`, 400: `#313749`, 500: `#292e3d`, 600: `#212530`, 700: `#191c24`, 800: `#111318`, 900: `#0b0d10` }, gray: { 50: `#f9fafb`, 100: `#f2f4f7`, 200: `#eaecf0`, 300: `#d0d5dd`, 400: `#98a2b3`, 500: `#667085`, 600: `#475467`, 700: `#344054`, 800: `#1d2939`, 900: `#101828` }, blue: { 25: `#F5FAFF`, 50: `#EFF8FF`, 100: `#D1E9FF`, 200: `#B2DDFF`, 300: `#84CAFF`, 400: `#53B1FD`, 500: `#2E90FA`, 600: `#1570EF`, 700: `#175CD3`, 800: `#1849A9`, 900: `#194185` }, green: { 25: `#F6FEF9`, 50: `#ECFDF3`, 100: `#D1FADF`, 200: `#A6F4C5`, 300: `#6CE9A6`, 400: `#32D583`, 500: `#12B76A`, 600: `#039855`, 700: `#027A48`, 800: `#05603A`, 900: `#054F31` }, red: { 50: `#fef2f2`, 100: `#fee2e2`, 200: `#fecaca`, 300: `#fca5a5`, 400: `#f87171`, 500: `#ef4444`, 600: `#dc2626`, 700: `#b91c1c`, 800: `#991b1b`, 900: `#7f1d1d`, 950: `#450a0a` }, yellow: { 25: `#FFFCF5`, 50: `#FFFAEB`, 100: `#FEF0C7`, 200: `#FEDF89`, 300: `#FEC84B`, 400: `#FDB022`, 500: `#F79009`, 600: `#DC6803`, 700: `#B54708`, 800: `#93370D`, 900: `#7A2E0E` }, purple: { 25: `#FAFAFF`, 50: `#F4F3FF`, 100: `#EBE9FE`, 200: `#D9D6FE`, 300: `#BDB4FE`, 400: `#9B8AFB`, 500: `#7A5AF8`, 600: `#6938EF`, 700: `#5925DC`, 800: `#4A1FB8`, 900: `#3E1C96` }, teal: { 25: `#F6FEFC`, 50: `#F0FDF9`, 100: `#CCFBEF`, 200: `#99F6E0`, 300: `#5FE9D0`, 400: `#2ED3B7`, 500: `#15B79E`, 600: `#0E9384`, 700: `#107569`, 800: `#125D56`, 900: `#134E48` }, pink: { 25: `#fdf2f8`, 50: `#fce7f3`, 100: `#fbcfe8`, 200: `#f9a8d4`, 300: `#f472b6`, 400: `#ec4899`, 500: `#db2777`, 600: `#be185d`, 700: `#9d174d`, 800: `#831843`, 900: `#500724` }, cyan: { 25: `#ecfeff`, 50: `#cffafe`, 100: `#a5f3fc`, 200: `#67e8f9`, 300: `#22d3ee`, 400: `#06b6d4`, 500: `#0891b2`, 600: `#0e7490`, 700: `#155e75`, 800: `#164e63`, 900: `#083344` } }, alpha: { 100: `ff`, 90: `e5`, 80: `cc`, 70: `b3`, 60: `99`, 50: `80`, 40: `66`, 30: `4d`, 20: `33`, 10: `1a`, 0: `00` }, font: { size: { "2xs": `calc(var(--tsqd-font-size) * 0.625)`, xs: `calc(var(--tsqd-font-size) * 0.75)`, sm: `calc(var(--tsqd-font-size) * 0.875)`, md: `var(--tsqd-font-size)`, lg: `calc(var(--tsqd-font-size) * 1.125)`, xl: `calc(var(--tsqd-font-size) * 1.25)`, "2xl": `calc(var(--tsqd-font-size) * 1.5)`, "3xl": `calc(var(--tsqd-font-size) * 1.875)`, "4xl": `calc(var(--tsqd-font-size) * 2.25)`, "5xl": `calc(var(--tsqd-font-size) * 3)`, "6xl": `calc(var(--tsqd-font-size) * 3.75)`, "7xl": `calc(var(--tsqd-font-size) * 4.5)`, "8xl": `calc(var(--tsqd-font-size) * 6)`, "9xl": `calc(var(--tsqd-font-size) * 8)` }, lineHeight: { xs: `calc(var(--tsqd-font-size) * 1)`, sm: `calc(var(--tsqd-font-size) * 1.25)`, md: `calc(var(--tsqd-font-size) * 1.5)`, lg: `calc(var(--tsqd-font-size) * 1.75)`, xl: `calc(var(--tsqd-font-size) * 2)`, "2xl": `calc(var(--tsqd-font-size) * 2.25)`, "3xl": `calc(var(--tsqd-font-size) * 2.5)`, "4xl": `calc(var(--tsqd-font-size) * 2.75)`, "5xl": `calc(var(--tsqd-font-size) * 3)`, "6xl": `calc(var(--tsqd-font-size) * 3.25)`, "7xl": `calc(var(--tsqd-font-size) * 3.5)`, "8xl": `calc(var(--tsqd-font-size) * 3.75)`, "9xl": `calc(var(--tsqd-font-size) * 4)` }, weight: { thin: `100`, extralight: `200`, light: `300`, normal: `400`, medium: `500`, semibold: `600`, bold: `700`, extrabold: `800`, black: `900` } }, breakpoints: { xs: `320px`, sm: `640px`, md: `768px`, lg: `1024px`, xl: `1280px`, "2xl": `1536px` }, border: { radius: { none: `0px`, xs: `calc(var(--tsqd-font-size) * 0.125)`, sm: `calc(var(--tsqd-font-size) * 0.25)`, md: `calc(var(--tsqd-font-size) * 0.375)`, lg: `calc(var(--tsqd-font-size) * 0.5)`, xl: `calc(var(--tsqd-font-size) * 0.75)`, "2xl": `calc(var(--tsqd-font-size) * 1)`, "3xl": `calc(var(--tsqd-font-size) * 1.5)`, full: `9999px` } }, size: { 0: `0px`, 0.25: `calc(var(--tsqd-font-size) * 0.0625)`, 0.5: `calc(var(--tsqd-font-size) * 0.125)`, 1: `calc(var(--tsqd-font-size) * 0.25)`, 1.5: `calc(var(--tsqd-font-size) * 0.375)`, 2: `calc(var(--tsqd-font-size) * 0.5)`, 2.5: `calc(var(--tsqd-font-size) * 0.625)`, 3: `calc(var(--tsqd-font-size) * 0.75)`, 3.5: `calc(var(--tsqd-font-size) * 0.875)`, 4: `calc(var(--tsqd-font-size) * 1)`, 4.5: `calc(var(--tsqd-font-size) * 1.125)`, 5: `calc(var(--tsqd-font-size) * 1.25)`, 5.5: `calc(var(--tsqd-font-size) * 1.375)`, 6: `calc(var(--tsqd-font-size) * 1.5)`, 6.5: `calc(var(--tsqd-font-size) * 1.625)`, 7: `calc(var(--tsqd-font-size) * 1.75)`, 8: `calc(var(--tsqd-font-size) * 2)`, 9: `calc(var(--tsqd-font-size) * 2.25)`, 10: `calc(var(--tsqd-font-size) * 2.5)`, 11: `calc(var(--tsqd-font-size) * 2.75)`, 12: `calc(var(--tsqd-font-size) * 3)`, 14: `calc(var(--tsqd-font-size) * 3.5)`, 16: `calc(var(--tsqd-font-size) * 4)`, 20: `calc(var(--tsqd-font-size) * 5)`, 24: `calc(var(--tsqd-font-size) * 6)`, 28: `calc(var(--tsqd-font-size) * 7)`, 32: `calc(var(--tsqd-font-size) * 8)`, 36: `calc(var(--tsqd-font-size) * 9)`, 40: `calc(var(--tsqd-font-size) * 10)`, 44: `calc(var(--tsqd-font-size) * 11)`, 48: `calc(var(--tsqd-font-size) * 12)`, 52: `calc(var(--tsqd-font-size) * 13)`, 56: `calc(var(--tsqd-font-size) * 14)`, 60: `calc(var(--tsqd-font-size) * 15)`, 64: `calc(var(--tsqd-font-size) * 16)`, 72: `calc(var(--tsqd-font-size) * 18)`, 80: `calc(var(--tsqd-font-size) * 20)`, 96: `calc(var(--tsqd-font-size) * 24)` }, shadow: { xs: (e3 = `rgb(0 0 0 / 0.1)`) => `0 1px 2px 0 rgb(0 0 0 / 0.05)`, sm: (e3 = `rgb(0 0 0 / 0.1)`) => `0 1px 3px 0 ${e3}, 0 1px 2px -1px ${e3}`, md: (e3 = `rgb(0 0 0 / 0.1)`) => `0 4px 6px -1px ${e3}, 0 2px 4px -2px ${e3}`, lg: (e3 = `rgb(0 0 0 / 0.1)`) => `0 10px 15px -3px ${e3}, 0 4px 6px -4px ${e3}`, xl: (e3 = `rgb(0 0 0 / 0.1)`) => `0 20px 25px -5px ${e3}, 0 8px 10px -6px ${e3}`, "2xl": (e3 = `rgb(0 0 0 / 0.25)`) => `0 25px 50px -12px ${e3}`, inner: (e3 = `rgb(0 0 0 / 0.05)`) => `inset 0 2px 4px 0 ${e3}`, none: () => `none` }, zIndices: { hide: -1, auto: `auto`, base: 0, docked: 10, dropdown: 1e3, sticky: 1100, banner: 1200, overlay: 1300, modal: 1400, popover: 1500, skipLink: 1600, toast: 1700, tooltip: 1800 } };
      Is = Qe(`<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`);
      Ls = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Rs = Qe(`<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`);
      zs = Qe(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`);
      Bs = Qe(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`);
      Vs = Qe(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg style=transform:rotate(90deg)><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`);
      Hs = Qe(`<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg style=transform:rotate(-90deg)><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>`);
      Us = Qe(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Ws = Qe(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Gs = Qe(`<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Ks = Qe(`<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">`);
      qs = Qe(`<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">`);
      Js = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Ys = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Xs = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>`);
      Zs = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Qs = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      $s = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      ec = Qe(`<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>`);
      tc = Qe(`<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      nc = Qe(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      rc = Qe(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>`);
      ic = Qe(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      ac = Qe(`<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      oc = Qe(`<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>`);
      Nc = Object.keys(In)[0];
      Pc = Object.keys(zn)[0];
      Fc = A({ client: void 0, onlineManager: void 0, queryFlavor: ``, version: ``, shadowDOMTarget: void 0 });
      Ic = class extends Error {
      };
      Lc = A(void 0);
      Rc = (e3) => {
        let [t2, r2] = v(null), i2 = () => {
          let n2 = t2();
          n2 != null && (n2.close(), e3.setLocalStore(`pip_open`, `false`), r2(null));
        }, a2 = (n2, i3) => {
          if (t2() != null) return;
          let a3 = window.open(``, `TSQD-Devtools-Panel`, `width=${n2},height=${i3},popup`);
          if (!a3) throw new Ic(`Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.`);
          a3.document.head.innerHTML = ``, a3.document.body.innerHTML = ``, et(a3.document), a3.document.title = `TanStack Query Devtools`, a3.document.body.style.margin = `0`, a3.addEventListener(`pagehide`, () => {
            e3.setLocalStore(`pip_open`, `false`), r2(null);
          }), [...(Z2().shadowDOMTarget || document).styleSheets].forEach((e4) => {
            try {
              let t3 = [...e4.cssRules].map((e5) => e5.cssText).join(``), n3 = document.createElement(`style`), r3 = e4.ownerNode, i4 = ``;
              r3 && `id` in r3 && (i4 = r3.id), i4 && n3.setAttribute(`id`, i4), n3.textContent = t3, a3.document.head.appendChild(n3);
            } catch {
              let t3 = document.createElement(`link`);
              if (e4.href == null) return;
              t3.rel = `stylesheet`, t3.type = e4.type, t3.media = e4.media.toString(), t3.href = e4.href, a3.document.head.appendChild(t3);
            }
          }), $e([`focusin`, `focusout`, `pointermove`, `keydown`, `pointerdown`, `pointerup`, `click`, `mousedown`, `input`], a3.document), e3.setLocalStore(`pip_open`, `true`), r2(a3);
        };
        x(() => {
          if ((e3.localStore.pip_open ?? `false`) === `true` && !e3.disabled) try {
            a2(Number(window.innerWidth), Number(e3.localStore.height || 500));
          } catch (t3) {
            if (t3 instanceof Ic) {
              e3.setLocalStore(`pip_open`, `false`), e3.setLocalStore(`open`, `false`);
              return;
            }
            throw t3;
          }
        }), x(() => {
          let e4 = (Z2().shadowDOMTarget || document).querySelector(`#_goober`), n2 = t2();
          if (e4 && n2) {
            let t3 = new MutationObserver(() => {
              let t4 = (Z2().shadowDOMTarget || n2.document).querySelector(`#_goober`);
              t4 && (t4.textContent = e4.textContent);
            });
            t3.observe(e4, { childList: true, subtree: true, characterDataOldValue: true }), T(() => {
              t3.disconnect();
            });
          }
        });
        let o2 = S(() => ({ pipWindow: t2(), requestPipWindow: a2, closePipWindow: i2, disabled: e3.disabled ?? false }));
        return Te(Lc.Provider, { value: o2, get children() {
          return e3.children;
        } });
      };
      zc = () => S(() => {
        let e3 = oe(Lc);
        if (!e3) throw Error(`usePiPWindow must be used within a PiPProvider`);
        return e3();
      });
      Bc = A(() => `dark`);
      Vc = Qe(`<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
      Hc = Qe(`<button title="Copy object to clipboard">`);
      Uc = Qe(`<button title="Remove all items"aria-label="Remove all items">`);
      Wc = Qe(`<button title="Delete item"aria-label="Delete item">`);
      Gc = Qe(`<button title="Toggle value"aria-label="Toggle value">`);
      Kc = Qe(`<button title="Bulk Edit Data"aria-label="Bulk Edit Data">`);
      qc = Qe(`<div>`);
      Jc = Qe(`<div><button> <span></span> <span> `);
      Yc = Qe(`<input>`);
      Xc = Qe(`<span>`);
      Zc = Qe(`<div><label>:`);
      Qc = Qe(`<div><div><button> [<!>...<!>]`);
      el = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? ll(n2) : cl(n2));
        return (() => {
          var t3 = Vc();
          return b(() => rt(t3, V2(r2().expander, n2`
          transform: rotate(${e3.expanded ? 90 : 0}deg);
        `, e3.expanded && n2`
            & svg {
              top: -1px;
            }
          `))), t3;
        })();
      };
      tl = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? ll(n2) : cl(n2)), [i2, a2] = v(`NoCopy`);
        return (() => {
          var n3 = Hc();
          return it(n3, `click`, i2() === `NoCopy` ? () => {
            navigator.clipboard.writeText(En(e3.value)).then(() => {
              a2(`SuccessCopy`), setTimeout(() => {
                a2(`NoCopy`);
              }, 1500);
            }, (e4) => {
              a2(`ErrorCopy`), setTimeout(() => {
                a2(`NoCopy`);
              }, 1500);
            });
          } : void 0, true), z(n3, Te(ze, { get children() {
            return [Te(Be, { get when() {
              return i2() === `NoCopy`;
            }, get children() {
              return Te(xc, {});
            } }), Te(Be, { get when() {
              return i2() === `SuccessCopy`;
            }, get children() {
              return Te(Cc, { get theme() {
                return t2();
              } });
            } }), Te(Be, { get when() {
              return i2() === `ErrorCopy`;
            }, get children() {
              return Te(wc, {});
            } })];
          } })), b((e4) => {
            var t3 = r2().actionButton, a3 = `${i2() === `NoCopy` ? `Copy object to clipboard` : i2() === `SuccessCopy` ? `Object copied to clipboard` : `Error copying object to clipboard`}`;
            return t3 !== e4.e && rt(n3, e4.e = t3), a3 !== e4.t && R(n3, `aria-label`, e4.t = a3), e4;
          }, { e: void 0, t: void 0 }), n3;
        })();
      };
      nl = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? ll(n2) : cl(n2)), i2 = Z2().client;
        return (() => {
          var t3 = Uc();
          return t3.$$click = () => {
            let t4 = e3.activeQuery.state.data, n3 = Q(t4, e3.dataPath, []);
            i2.setQueryData(e3.activeQuery.queryKey, n3);
          }, z(t3, Te(Tc, {})), b(() => rt(t3, r2().actionButton)), t3;
        })();
      };
      rl = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? ll(n2) : cl(n2)), i2 = Z2().client;
        return (() => {
          var t3 = Wc();
          return t3.$$click = () => {
            let t4 = e3.activeQuery.state.data, n3 = $(t4, e3.dataPath);
            i2.setQueryData(e3.activeQuery.queryKey, n3);
          }, z(t3, Te(cc, {})), b(() => rt(t3, V2(r2().actionButton))), t3;
        })();
      };
      il = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? ll(n2) : cl(n2)), i2 = Z2().client;
        return (() => {
          var a2 = Gc();
          return a2.$$click = () => {
            let t3 = e3.activeQuery.state.data, n3 = Q(t3, e3.dataPath, !e3.value);
            i2.setQueryData(e3.activeQuery.queryKey, n3);
          }, z(a2, Te(Ec, { get theme() {
            return t2();
          }, get checked() {
            return e3.value;
          } })), b(() => rt(a2, V2(r2().actionButton, n2`
          width: ${X2.size[3.5]};
          height: ${X2.size[3.5]};
        `))), a2;
        })();
      };
      sl = (e3, t2) => {
        let { colors: n2, font: r2, size: i2, border: a2 } = X2, o2 = (t3, n3) => e3 === `light` ? t3 : n3;
        return { entry: t2`
      & * {
        font-size: ${r2.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `, subEntry: t2`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${o2(n2.gray[300], n2.darkGray[400])};
      /* outline: 1px solid ${n2.teal[400]}; */
    `, expander: t2`
      & path {
        stroke: ${n2.gray[400]};
      }
      & svg {
        width: ${i2[3]};
        height: ${i2[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n2.blue[400]}; */
    `, expanderButtonContainer: t2`
      display: flex;
      align-items: center;
      line-height: ${i2[4]};
      min-height: ${i2[4]};
      gap: ${i2[2]};
    `, expanderButton: t2`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${i2[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${i2[1]};
      position: relative;
      /* outline: 1px solid ${n2.green[400]}; */

      &:focus-visible {
        border-radius: ${a2.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `, info: t2`
      color: ${o2(n2.gray[500], n2.gray[500])};
      font-size: ${r2.size.xs};
      margin-left: ${i2[1]};
      /* outline: 1px solid ${n2.yellow[400]}; */
    `, label: t2`
      color: ${o2(n2.gray[700], n2.gray[300])};
      white-space: nowrap;
    `, value: t2`
      color: ${o2(n2.purple[600], n2.purple[400])};
      flex-grow: 1;
    `, actions: t2`
      display: inline-flex;
      gap: ${i2[2]};
      align-items: center;
    `, row: t2`
      display: inline-flex;
      gap: ${i2[2]};
      width: 100%;
      margin: ${i2[0.25]} 0px;
      line-height: ${i2[4.5]};
      align-items: center;
    `, editableInput: t2`
      border: none;
      padding: ${i2[0.5]} ${i2[1]} ${i2[0.5]} ${i2[1.5]};
      flex-grow: 1;
      border-radius: ${a2.radius.xs};
      background-color: ${o2(n2.gray[200], n2.darkGray[500])};

      &:hover {
        background-color: ${o2(n2.gray[300], n2.darkGray[600])};
      }
    `, actionButton: t2`
      background-color: transparent;
      color: ${o2(n2.gray[500], n2.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${i2[3]};
      height: ${i2[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${o2(n2.gray[600], n2.gray[400])};
      }

      &:focus-visible {
        border-radius: ${a2.radius.xs};
        outline: 2px solid ${n2.blue[800]};
        outline-offset: 2px;
      }
    ` };
      };
      cl = (e3) => sl(`light`, e3);
      ll = (e3) => sl(`dark`, e3);
      $e([`click`]);
      ul = Qe(`<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>`);
      dl = Qe(`<div>`);
      fl = Qe(`<div style=--tsqd-font-size:16px;max-height:100vh;height:100vh;width:100vw>`);
      pl = Qe(`<div style=--tsqd-font-size:16px>`);
      ml = Qe(`<aside aria-label="Tanstack query devtools"><div role=separator aria-label="Resize devtools panel"tabindex=0></div><button aria-label="Close tanstack query devtools">`);
      hl = Qe(`<select name=tsqd-queries-filter-sort aria-label="Sort queries by">`);
      gl = Qe(`<select name=tsqd-mutations-filter-sort aria-label="Sort mutations by">`);
      _l = Qe(`<span>Asc`);
      vl = Qe(`<span>Desc`);
      yl = Qe(`<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">`);
      bl = Qe(`<div>Settings`);
      xl = Qe(`<span>Position`);
      Sl = Qe(`<span>Top`);
      Cl = Qe(`<span>Bottom`);
      wl = Qe(`<span>Left`);
      Tl = Qe(`<span>Right`);
      El = Qe(`<span>Theme`);
      Dl = Qe(`<span>Light`);
      Ol = Qe(`<span>Dark`);
      kl = Qe(`<span>System`);
      Al = Qe(`<span>Disabled Queries`);
      jl = Qe(`<span>Show`);
      Ml = Qe(`<span>Hide`);
      Nl = Qe(`<div><div class=tsqd-queries-container>`);
      Pl = Qe(`<div><div class=tsqd-mutations-container>`);
      Fl = Qe(`<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>`);
      Il = Qe(`<option>Sort by `);
      Ll = Qe(`<div class=tsqd-query-disabled-indicator aria-hidden=true>disabled`);
      Rl = Qe(`<div class=tsqd-query-static-indicator aria-hidden=true>static`);
      zl = Qe(`<button><div></div><code class=tsqd-query-hash>`);
      Bl = Qe(`<div role=tooltip id=tsqd-status-tooltip>`);
      Vl = Qe(`<span>`);
      Hl = Qe(`<button><span aria-hidden=true></span><span>`);
      Ul = Qe(`<button><span aria-hidden=true></span> Error`);
      Wl = Qe(`<div><span aria-hidden=true></span>Trigger Error<select aria-label="Select error type to trigger"><option value disabled selected>`);
      Gl = Qe(`<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">`);
      Kl = Qe(`<form><textarea name=data aria-label="Edit query data as JSON"></textarea><div><span></span><div><button type=button>Cancel</button><button>Save`);
      ql = Qe(`<div><div role=heading aria-level=2>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div role=heading aria-level=2>Actions</div><div><button><span aria-hidden=true></span>Refetch</button><button><span aria-hidden=true></span>Invalidate</button><button><span aria-hidden=true></span>Reset</button><button><span aria-hidden=true></span>Remove</button><button><span aria-hidden=true></span> Loading</button></div><div role=heading aria-level=2>Data </div><div role=heading aria-level=2>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`);
      Jl = Qe(`<option>`);
      Yl = Qe(`<div><div role=heading aria-level=2>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div role=heading aria-level=2>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">`);
      [Xl, Zl] = v(null);
      [Ql, $l] = v(null);
      [eu, tu] = v(0);
      [nu, ru] = v(false);
      ou = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? wu(n2) : Cu(n2)), i2;
        re(() => {
          dt2(i2, ({ width: e4 }, t3) => {
            t3 === i2 && tu(e4);
          });
        });
        let a2 = () => {
          let { colors: e4 } = X2, r3 = (e5, n3) => t2() === `dark` ? n3 : e5;
          return eu() < 796 ? n2`
        flex-direction: column;
        background-color: ${r3(e4.gray[300], e4.gray[600])};
      ` : n2`
      flex-direction: row;
      background-color: ${r3(e4.gray[200], e4.darkGray[900])};
    `;
        };
        return (() => {
          var t3 = pl(), o2 = i2;
          return typeof o2 == `function` ? lt(o2, t3) : i2 = t3, z(t3, () => e3.children), b(() => rt(t3, V2(r2().parentPanel, a2(), { [n2`
            min-width: min-content;
          `]: eu() < 700 }, `tsqd-main-panel`))), t3;
        })();
      };
      cu = (e3) => {
        _u(), yu();
        let t2, n2 = Q2(), i2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, a2 = S(() => n2() === `dark` ? wu(i2) : Cu(i2)), o2 = zc(), [s3, l3] = v(`queries`), u2 = S(() => e3.localStore.sort || Nc), f2 = S(() => Number(e3.localStore.sortOrder) || 1), p3 = S(() => e3.localStore.mutationSort || Pc), m2 = S(() => Number(e3.localStore.mutationSortOrder) || 1), g2 = S(() => In[u2()]), _2 = S(() => zn[p3()]), b2 = S(() => Z2().onlineManager), C2 = S(() => Z2().client.getQueryCache()), T2 = S(() => Z2().client.getMutationCache()), E2 = $2((e4) => e4().getAll().length, false), D2 = S(ne(() => [E2(), e3.localStore.filter, u2(), f2(), e3.localStore.hideDisabledQueries], () => {
          let t3 = C2().getAll(), n3 = e3.localStore.filter ? t3.filter((t4) => Oe2(t4.queryHash, e3.localStore.filter || ``).passed) : [...t3];
          return e3.localStore.hideDisabledQueries === `true` && (n3 = n3.filter((e4) => !e4.isDisabled())), g2() ? n3.sort((e4, t4) => g2()(e4, t4) * f2()) : n3;
        })), O2 = bu((e4) => e4().getAll().length, false), k2 = S(ne(() => [O2(), e3.localStore.mutationFilter, p3(), m2()], () => {
          let t3 = T2().getAll(), n3 = e3.localStore.mutationFilter ? t3.filter((t4) => Oe2(`${t4.options.mutationKey ? JSON.stringify(t4.options.mutationKey) + ` - ` : ``}${new Date(t4.state.submittedAt).toLocaleString()}`, e3.localStore.mutationFilter || ``).passed) : [...t3];
          return _2() ? n3.sort((e4, t4) => _2()(e4, t4) * m2()) : n3;
        })), j2 = (t3) => {
          e3.setLocalStore(`position`, t3);
        }, M2 = (e4) => {
          let n3 = getComputedStyle(t2).getPropertyValue(`--tsqd-font-size`);
          e4.style.setProperty(`--tsqd-font-size`, n3);
        };
        return [(() => {
          var n3 = Fl(), g3 = n3.firstChild, _3 = g3.firstChild, x2 = _3.firstChild, S2 = x2.firstChild, w2 = S2.nextSibling, E3 = w2.firstChild, O3 = g3.nextSibling, N2 = O3.firstChild, ee2 = N2.firstChild, ne2 = ee2.firstChild, P2 = ee2.nextSibling, re2 = P2.nextSibling, ie2 = N2.nextSibling, ae = ie2.firstChild, oe2 = ae.nextSibling, se2 = t2;
          return typeof se2 == `function` ? lt(se2, n3) : t2 = n3, x2.$$click = () => {
            if (!o2().pipWindow && !e3.showPanelViewOnly) {
              e3.setLocalStore(`open`, `false`);
              return;
            }
            e3.onClose && e3.onClose();
          }, z(w2, () => Z2().queryFlavor, E3), z(w2, () => Z2().version, null), z(_3, Te(Do.Root, { get class() {
            return V2(a2().viewToggle);
          }, get value() {
            return s3();
          }, "aria-label": `Toggle between queries and mutations view`, onChange: (e4) => {
            l3(e4), Zl(null), $l(null);
          }, get children() {
            return [Te(Do.Item, { value: `queries`, class: `tsqd-radio-toggle`, get children() {
              return [Te(Do.ItemInput, {}), Te(Do.ItemControl, { get children() {
                return Te(Do.ItemIndicator, {});
              } }), Te(Do.ItemLabel, { title: `Toggle Queries View`, children: `Queries` })];
            } }), Te(Do.Item, { value: `mutations`, class: `tsqd-radio-toggle`, get children() {
              return [Te(Do.ItemInput, {}), Te(Do.ItemControl, { get children() {
                return Te(Do.ItemIndicator, {});
              } }), Te(Do.ItemLabel, { title: `Toggle Mutations View`, children: `Mutations` })];
            } })];
          } }), null), z(g3, Te(Re, { get when() {
            return s3() === `queries`;
          }, get children() {
            return Te(du, {});
          } }), null), z(g3, Te(Re, { get when() {
            return s3() === `mutations`;
          }, get children() {
            return Te(fu, {});
          } }), null), z(ee2, Te(sc, {}), ne2), ne2.$$input = (t3) => {
            s3() === `queries` ? e3.setLocalStore(`filter`, t3.currentTarget.value) : e3.setLocalStore(`mutationFilter`, t3.currentTarget.value);
          }, z(P2, Te(Re, { get when() {
            return s3() === `queries`;
          }, get children() {
            var t3 = hl();
            return t3.addEventListener(`change`, (t4) => {
              e3.setLocalStore(`sort`, t4.currentTarget.value);
            }), z(t3, () => Object.keys(In).map((e4) => (() => {
              var t4 = Il();
              return t4.firstChild, t4.value = e4, z(t4, e4, null), t4;
            })())), b(() => t3.value = u2()), t3;
          } }), null), z(P2, Te(Re, { get when() {
            return s3() === `mutations`;
          }, get children() {
            var t3 = gl();
            return t3.addEventListener(`change`, (t4) => {
              e3.setLocalStore(`mutationSort`, t4.currentTarget.value);
            }), z(t3, () => Object.keys(zn).map((e4) => (() => {
              var t4 = Il();
              return t4.firstChild, t4.value = e4, z(t4, e4, null), t4;
            })())), b(() => t3.value = p3()), t3;
          } }), null), z(P2, Te(lc, {}), null), re2.$$click = () => {
            s3() === `queries` ? e3.setLocalStore(`sortOrder`, String(f2() * -1)) : e3.setLocalStore(`mutationSortOrder`, String(m2() * -1));
          }, z(re2, Te(Re, { get when() {
            return (s3() === `queries` ? f2() : m2()) === 1;
          }, get children() {
            return [_l(), Te(uc, {})];
          } }), null), z(re2, Te(Re, { get when() {
            return (s3() === `queries` ? f2() : m2()) === -1;
          }, get children() {
            return [vl(), Te(dc, {})];
          } }), null), ae.$$click = () => {
            s3() === `queries` ? (xu({ type: `CLEAR_QUERY_CACHE` }), C2().clear()) : (xu({ type: `CLEAR_MUTATION_CACHE` }), T2().clear());
          }, z(ae, Te(cc, {})), oe2.$$click = () => {
            b2().setOnline(!b2().isOnline());
          }, z(oe2, (() => {
            var e4 = Ye(() => !!nu());
            return () => e4() ? Te(vc, {}) : Te(_c, {});
          })()), z(ie2, Te(Re, { get when() {
            return Ye(() => !o2().pipWindow)() && !o2().disabled;
          }, get children() {
            var t3 = yl();
            return t3.$$click = () => {
              o2().requestPipWindow(Number(window.innerWidth), Number(e3.localStore.height ?? 500));
            }, z(t3, Te(bc, {})), b(() => rt(t3, V2(a2().actionsBtn, `tsqd-actions-btn`, `tsqd-action-open-pip`))), t3;
          } }), null), z(ie2, Te(Y2.Root, { gutter: 4, get children() {
            return [Te(Y2.Trigger, { get class() {
              return V2(a2().actionsBtn, `tsqd-actions-btn`, `tsqd-action-settings`);
            }, "aria-label": `Open settings menu`, title: `Open settings menu`, get children() {
              return Te(yc, {});
            } }), Te(Y2.Portal, { ref: (e4) => M2(e4), get mount() {
              return Ye(() => !!o2().pipWindow)() ? o2().pipWindow.document.body : document.body;
            }, get children() {
              return Te(Y2.Content, { get class() {
                return V2(a2().settingsMenu, `tsqd-settings-menu`);
              }, get children() {
                return [(() => {
                  var e4 = bl();
                  return b(() => rt(e4, V2(a2().settingsMenuHeader, `tsqd-settings-menu-header`))), e4;
                })(), Te(Re, { get when() {
                  return !e3.showPanelViewOnly;
                }, get children() {
                  return Te(Y2.Sub, { overlap: true, gutter: 8, shift: -4, get children() {
                    return [Te(Y2.SubTrigger, { get class() {
                      return V2(a2().settingsSubTrigger, `tsqd-settings-menu-sub-trigger`, `tsqd-settings-menu-sub-trigger-position`);
                    }, get children() {
                      return [xl(), Te(lc, {})];
                    } }), Te(Y2.Portal, { ref: (e4) => M2(e4), get mount() {
                      return Ye(() => !!o2().pipWindow)() ? o2().pipWindow.document.body : document.body;
                    }, get children() {
                      return Te(Y2.SubContent, { get class() {
                        return V2(a2().settingsMenu, `tsqd-settings-submenu`);
                      }, get children() {
                        return Te(Y2.RadioGroup, { "aria-label": `Position settings`, get value() {
                          return e3.localStore.position;
                        }, onChange: (e4) => j2(e4), get children() {
                          return [Te(Y2.RadioItem, { value: `top`, get class() {
                            return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-top`);
                          }, get children() {
                            return [Sl(), Te(uc, {})];
                          } }), Te(Y2.RadioItem, { value: `bottom`, get class() {
                            return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-bottom`);
                          }, get children() {
                            return [Cl(), Te(dc, {})];
                          } }), Te(Y2.RadioItem, { value: `left`, get class() {
                            return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-left`);
                          }, get children() {
                            return [wl(), Te(fc, {})];
                          } }), Te(Y2.RadioItem, { value: `right`, get class() {
                            return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-right`);
                          }, get children() {
                            return [Tl(), Te(pc, {})];
                          } })];
                        } });
                      } });
                    } })];
                  } });
                } }), Te(Y2.Sub, { overlap: true, gutter: 8, shift: -4, get children() {
                  return [Te(Y2.SubTrigger, { get class() {
                    return V2(a2().settingsSubTrigger, `tsqd-settings-menu-sub-trigger`, `tsqd-settings-menu-sub-trigger-theme`);
                  }, get children() {
                    return [El(), Te(lc, {})];
                  } }), Te(Y2.Portal, { ref: (e4) => M2(e4), get mount() {
                    return Ye(() => !!o2().pipWindow)() ? o2().pipWindow.document.body : document.body;
                  }, get children() {
                    return Te(Y2.SubContent, { get class() {
                      return V2(a2().settingsMenu, `tsqd-settings-submenu`);
                    }, get children() {
                      return Te(Y2.RadioGroup, { get value() {
                        return e3.localStore.theme_preference;
                      }, onChange: (t3) => {
                        e3.setLocalStore(`theme_preference`, t3);
                      }, "aria-label": `Theme preference`, get children() {
                        return [Te(Y2.RadioItem, { value: `light`, get class() {
                          return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-top`);
                        }, get children() {
                          return [Dl(), Te(mc, {})];
                        } }), Te(Y2.RadioItem, { value: `dark`, get class() {
                          return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-bottom`);
                        }, get children() {
                          return [Ol(), Te(hc, {})];
                        } }), Te(Y2.RadioItem, { value: `system`, get class() {
                          return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-left`);
                        }, get children() {
                          return [kl(), Te(gc, {})];
                        } })];
                      } });
                    } });
                  } })];
                } }), Te(Y2.Sub, { overlap: true, gutter: 8, shift: -4, get children() {
                  return [Te(Y2.SubTrigger, { get class() {
                    return V2(a2().settingsSubTrigger, `tsqd-settings-menu-sub-trigger`, `tsqd-settings-menu-sub-trigger-disabled-queries`);
                  }, get children() {
                    return [Al(), Te(lc, {})];
                  } }), Te(Y2.Portal, { ref: (e4) => M2(e4), get mount() {
                    return Ye(() => !!o2().pipWindow)() ? o2().pipWindow.document.body : document.body;
                  }, get children() {
                    return Te(Y2.SubContent, { get class() {
                      return V2(a2().settingsMenu, `tsqd-settings-submenu`);
                    }, get children() {
                      return Te(Y2.RadioGroup, { get value() {
                        return e3.localStore.hideDisabledQueries;
                      }, "aria-label": `Hide disabled queries setting`, onChange: (t3) => e3.setLocalStore(`hideDisabledQueries`, t3), get children() {
                        return [Te(Y2.RadioItem, { value: `false`, get class() {
                          return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-show`);
                        }, get children() {
                          return [jl(), Te(Re, { get when() {
                            return e3.localStore.hideDisabledQueries !== `true`;
                          }, get children() {
                            return Te(Dc, {});
                          } })];
                        } }), Te(Y2.RadioItem, { value: `true`, get class() {
                          return V2(a2().settingsSubButton, `tsqd-settings-menu-position-btn`, `tsqd-settings-menu-position-btn-hide`);
                        }, get children() {
                          return [Ml(), Te(Re, { get when() {
                            return e3.localStore.hideDisabledQueries === `true`;
                          }, get children() {
                            return Te(Dc, {});
                          } })];
                        } })];
                      } });
                    } });
                  } })];
                } })];
              } });
            } })];
          } }), null), z(n3, Te(Re, { get when() {
            return s3() === `queries`;
          }, get children() {
            var e4 = Nl(), t3 = e4.firstChild;
            return z(t3, Te(st2, { by: (e5) => e5.queryHash, get each() {
              return D2();
            }, children: (e5) => Te(lu, { get query() {
              return e5();
            } }) })), b(() => rt(e4, V2(a2().overflowQueryContainer, `tsqd-queries-overflow-container`))), e4;
          } }), null), z(n3, Te(Re, { get when() {
            return s3() === `mutations`;
          }, get children() {
            var e4 = Pl(), t3 = e4.firstChild;
            return z(t3, Te(st2, { by: (e5) => e5.mutationId, get each() {
              return k2();
            }, children: (e5) => Te(uu, { get mutation() {
              return e5();
            } }) })), b(() => rt(e4, V2(a2().overflowQueryContainer, `tsqd-mutations-overflow-container`))), e4;
          } }), null), b((e4) => {
            var t3 = V2(a2().queriesContainer, eu() < 796 && (Xl() || Ql()) && i2`
              height: 50%;
              max-height: 50%;
            `, eu() < 796 && !(Xl() || Ql()) && i2`
              height: 100%;
              max-height: 100%;
            `, `tsqd-queries-container`), r2 = V2(a2().row, `tsqd-header`), o3 = a2().logoAndToggleContainer, c2 = V2(a2().logo, `tsqd-text-logo-container`), l4 = V2(a2().tanstackLogo, `tsqd-text-logo-tanstack`), u3 = V2(a2().queryFlavorLogo, `tsqd-text-logo-query-flavor`), d2 = V2(a2().row, `tsqd-filters-actions-container`), p4 = V2(a2().filtersContainer, `tsqd-filters-container`), h3 = V2(a2().filterInput, `tsqd-query-filter-textfield-container`), v2 = V2(`tsqd-query-filter-textfield`), b3 = V2(a2().filterSelect, `tsqd-query-filter-sort-container`), C3 = `Sort order ${(s3() === `queries` ? f2() : m2()) === -1 ? `descending` : `ascending`}`, T3 = (s3() === `queries` ? f2() : m2()) === -1, E4 = V2(a2().actionsContainer, `tsqd-actions-container`), D3 = V2(a2().actionsBtn, `tsqd-actions-btn`, `tsqd-action-clear-cache`), k3 = `Clear ${s3()} cache`, A2 = V2(a2().actionsBtn, nu() && a2().actionsBtnOffline, `tsqd-actions-btn`, `tsqd-action-mock-offline-behavior`), j3 = `${nu() ? `Unset offline mocking behavior` : `Mock offline behavior`}`, M3 = nu(), te2 = `${nu() ? `Unset offline mocking behavior` : `Mock offline behavior`}`;
            return t3 !== e4.e && rt(n3, e4.e = t3), r2 !== e4.t && rt(g3, e4.t = r2), o3 !== e4.a && rt(_3, e4.a = o3), c2 !== e4.o && rt(x2, e4.o = c2), l4 !== e4.i && rt(S2, e4.i = l4), u3 !== e4.n && rt(w2, e4.n = u3), d2 !== e4.s && rt(O3, e4.s = d2), p4 !== e4.h && rt(N2, e4.h = p4), h3 !== e4.r && rt(ee2, e4.r = h3), v2 !== e4.d && rt(ne2, e4.d = v2), b3 !== e4.l && rt(P2, e4.l = b3), C3 !== e4.u && R(re2, `aria-label`, e4.u = C3), T3 !== e4.c && R(re2, `aria-pressed`, e4.c = T3), E4 !== e4.w && rt(ie2, e4.w = E4), D3 !== e4.m && rt(ae, e4.m = D3), k3 !== e4.f && R(ae, `title`, e4.f = k3), A2 !== e4.y && rt(oe2, e4.y = A2), j3 !== e4.g && R(oe2, `aria-label`, e4.g = j3), M3 !== e4.p && R(oe2, `aria-pressed`, e4.p = M3), te2 !== e4.b && R(oe2, `title`, e4.b = te2), e4;
          }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0, m: void 0, f: void 0, y: void 0, g: void 0, p: void 0, b: void 0 }), b(() => ne2.value = s3() === `queries` ? e3.localStore.filter || `` : e3.localStore.mutationFilter || ``), n3;
        })(), Te(Re, { get when() {
          return Ye(() => s3() === `queries`)() && Xl();
        }, get children() {
          return Te(mu, {});
        } }), Te(Re, { get when() {
          return Ye(() => s3() === `mutations`)() && Ql();
        }, get children() {
          return Te(hu, {});
        } })];
      };
      lu = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, r2 = S(() => t2() === `dark` ? wu(n2) : Cu(n2)), { colors: i2, alpha: a2 } = X2, o2 = (e4, n3) => t2() === `dark` ? n3 : e4, s3 = $2((t3) => t3().get(e3.query.queryHash)?.state, true, (t3) => t3.query.queryHash === e3.query.queryHash), l3 = $2((t3) => t3().get(e3.query.queryHash)?.isDisabled() ?? false, true, (t3) => t3.query.queryHash === e3.query.queryHash), u2 = $2((t3) => t3().get(e3.query.queryHash)?.isStatic() ?? false, true, (t3) => t3.query.queryHash === e3.query.queryHash), f2 = $2((t3) => t3().get(e3.query.queryHash)?.isStale() ?? false, true, (t3) => t3.query.queryHash === e3.query.queryHash), p3 = $2((t3) => t3().get(e3.query.queryHash)?.getObserversCount() ?? 0, true, (t3) => t3.query.queryHash === e3.query.queryHash), m2 = S(() => kn({ queryState: s3(), observerCount: p3(), isStale: f2() })), g2 = () => m2() === `gray` ? n2`
        background-color: ${o2(i2[m2()][200], i2[m2()][700])};
        color: ${o2(i2[m2()][700], i2[m2()][300])};
      ` : n2`
      background-color: ${o2(i2[m2()][200] + a2[80], i2[m2()][900])};
      color: ${o2(i2[m2()][800], i2[m2()][300])};
    `;
        return Te(Re, { get when() {
          return s3();
        }, get children() {
          var t3 = zl(), n3 = t3.firstChild, i3 = n3.nextSibling;
          return t3.$$click = () => Zl(e3.query.queryHash === Xl() ? null : e3.query.queryHash), z(n3, p3), z(i3, () => e3.query.queryHash), z(t3, Te(Re, { get when() {
            return l3();
          }, get children() {
            return Ll();
          } }), null), z(t3, Te(Re, { get when() {
            return u2();
          }, get children() {
            return Rl();
          } }), null), b((i4) => {
            var a3 = V2(r2().queryRow, Xl() === e3.query.queryHash && r2().selectedQueryRow, `tsqd-query-row`), o3 = `Query key ${e3.query.queryHash}${l3() ? `, disabled` : ``}${u2() ? `, static` : ``}`, s4 = V2(g2(), `tsqd-query-observer-count`);
            return a3 !== i4.e && rt(t3, i4.e = a3), o3 !== i4.t && R(t3, `aria-label`, i4.t = o3), s4 !== i4.a && rt(n3, i4.a = s4), i4;
          }, { e: void 0, t: void 0, a: void 0 }), t3;
        } });
      };
      uu = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, i2 = S(() => t2() === `dark` ? wu(n2) : Cu(n2)), { colors: a2, alpha: o2 } = X2, s3 = (e4, n3) => t2() === `dark` ? n3 : e4, l3 = bu((t3) => t3().getAll().find((t4) => t4.mutationId === e3.mutation.mutationId)?.state), u2 = bu((t3) => {
          let n3 = t3().getAll().find((t4) => t4.mutationId === e3.mutation.mutationId);
          return n3 ? n3.state.isPaused : false;
        }), f2 = bu((t3) => {
          let n3 = t3().getAll().find((t4) => t4.mutationId === e3.mutation.mutationId);
          return n3 ? n3.state.status : `idle`;
        }), p3 = S(() => An({ isPaused: u2(), status: f2() })), m2 = () => p3() === `gray` ? n2`
        background-color: ${s3(a2[p3()][200], a2[p3()][700])};
        color: ${s3(a2[p3()][700], a2[p3()][300])};
      ` : n2`
      background-color: ${s3(a2[p3()][200] + o2[80], a2[p3()][900])};
      color: ${s3(a2[p3()][800], a2[p3()][300])};
    `;
        return Te(Re, { get when() {
          return l3();
        }, get children() {
          var t3 = zl(), n3 = t3.firstChild, a3 = n3.nextSibling;
          return t3.$$click = () => {
            $l(e3.mutation.mutationId === Ql() ? null : e3.mutation.mutationId);
          }, z(n3, Te(Re, { get when() {
            return p3() === `purple`;
          }, get children() {
            return Te(Ac, {});
          } }), null), z(n3, Te(Re, { get when() {
            return p3() === `green`;
          }, get children() {
            return Te(Dc, {});
          } }), null), z(n3, Te(Re, { get when() {
            return p3() === `red`;
          }, get children() {
            return Te(kc, {});
          } }), null), z(n3, Te(Re, { get when() {
            return p3() === `yellow`;
          }, get children() {
            return Te(Oc, {});
          } }), null), z(a3, Te(Re, { get when() {
            return e3.mutation.options.mutationKey;
          }, get children() {
            return [Ye(() => JSON.stringify(e3.mutation.options.mutationKey)), ` -`, ` `];
          } }), null), z(a3, () => new Date(e3.mutation.state.submittedAt).toLocaleString(), null), b((r2) => {
            var a4 = V2(i2().queryRow, Ql() === e3.mutation.mutationId && i2().selectedQueryRow, `tsqd-query-row`), o3 = `Mutation submitted at ${new Date(e3.mutation.state.submittedAt).toLocaleString()}`, s4 = V2(m2(), `tsqd-query-observer-count`);
            return a4 !== r2.e && rt(t3, r2.e = a4), o3 !== r2.t && R(t3, `aria-label`, r2.t = o3), s4 !== r2.a && rt(n3, r2.a = s4), r2;
          }, { e: void 0, t: void 0, a: void 0 }), t3;
        } });
      };
      du = () => {
        let e3 = $2((e4) => e4().getAll().filter((e5) => Dn(e5) === `stale`).length), t2 = $2((e4) => e4().getAll().filter((e5) => Dn(e5) === `fresh`).length), n2 = $2((e4) => e4().getAll().filter((e5) => Dn(e5) === `fetching`).length), r2 = $2((e4) => e4().getAll().filter((e5) => Dn(e5) === `paused`).length), i2 = $2((e4) => e4().getAll().filter((e5) => Dn(e5) === `inactive`).length), a2 = Q2(), o2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, s3 = S(() => a2() === `dark` ? wu(o2) : Cu(o2));
        return (() => {
          var a3 = dl();
          return z(a3, Te(pu, { label: `Fresh`, color: `green`, get count() {
            return t2();
          } }), null), z(a3, Te(pu, { label: `Fetching`, color: `blue`, get count() {
            return n2();
          } }), null), z(a3, Te(pu, { label: `Paused`, color: `purple`, get count() {
            return r2();
          } }), null), z(a3, Te(pu, { label: `Stale`, color: `yellow`, get count() {
            return e3();
          } }), null), z(a3, Te(pu, { label: `Inactive`, color: `gray`, get count() {
            return i2();
          } }), null), b(() => rt(a3, V2(s3().queryStatusContainer, `tsqd-query-status-container`))), a3;
        })();
      };
      fu = () => {
        let e3 = bu((e4) => e4().getAll().filter((e5) => An({ isPaused: e5.state.isPaused, status: e5.state.status }) === `green`).length), t2 = bu((e4) => e4().getAll().filter((e5) => An({ isPaused: e5.state.isPaused, status: e5.state.status }) === `yellow`).length), n2 = bu((e4) => e4().getAll().filter((e5) => An({ isPaused: e5.state.isPaused, status: e5.state.status }) === `purple`).length), r2 = bu((e4) => e4().getAll().filter((e5) => An({ isPaused: e5.state.isPaused, status: e5.state.status }) === `red`).length), i2 = Q2(), a2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, o2 = S(() => i2() === `dark` ? wu(a2) : Cu(a2));
        return (() => {
          var i3 = dl();
          return z(i3, Te(pu, { label: `Paused`, color: `purple`, get count() {
            return n2();
          } }), null), z(i3, Te(pu, { label: `Pending`, color: `yellow`, get count() {
            return t2();
          } }), null), z(i3, Te(pu, { label: `Success`, color: `green`, get count() {
            return e3();
          } }), null), z(i3, Te(pu, { label: `Error`, color: `red`, get count() {
            return r2();
          } }), null), b(() => rt(i3, V2(o2().queryStatusContainer, `tsqd-query-status-container`))), i3;
        })();
      };
      pu = (e3) => {
        let t2 = Q2(), n2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, a2 = S(() => t2() === `dark` ? wu(n2) : Cu(n2)), { colors: o2, alpha: s3 } = X2, l3 = (e4, n3) => t2() === `dark` ? n3 : e4, f2, [p3, m2] = v(false), [g2, _2] = v(false), y2 = S(() => !(Xl() && eu() < 1024 && eu() > 796 || eu() < 796));
        return (() => {
          var t3 = Hl(), b2 = t3.firstChild, x2 = b2.nextSibling, S2 = f2;
          return typeof S2 == `function` ? lt(S2, t3) : f2 = t3, t3.addEventListener(`mouseleave`, () => {
            m2(false), _2(false);
          }), t3.addEventListener(`mouseenter`, () => m2(true)), t3.addEventListener(`blur`, () => _2(false)), t3.addEventListener(`focus`, () => _2(true)), ct(t3, Ae({ get disabled() {
            return y2();
          }, get "aria-label"() {
            return `${e3.label}: ${e3.count}`;
          }, get class() {
            return V2(a2().queryStatusTag, !y2() && n2`
            cursor: pointer;
            &:hover {
              background: ${l3(o2.gray[200], o2.darkGray[400])}${s3[80]};
            }
          `, `tsqd-query-status-tag`, `tsqd-query-status-tag-${e3.label.toLowerCase()}`);
          } }, () => p3() || g2() ? { "aria-describedby": `tsqd-status-tooltip` } : {}), false, true), z(t3, Te(Re, { get when() {
            return Ye(() => !y2())() && (p3() || g2());
          }, get children() {
            var t4 = Bl();
            return z(t4, () => e3.label), b(() => rt(t4, V2(a2().statusTooltip, `tsqd-query-status-tooltip`))), t4;
          } }), b2), z(t3, Te(Re, { get when() {
            return y2();
          }, get children() {
            var t4 = Vl();
            return z(t4, () => e3.label), b(() => rt(t4, V2(a2().queryStatusTagLabel, `tsqd-query-status-tag-label`))), t4;
          } }), x2), z(x2, () => e3.count), b((t4) => {
            var r2 = V2(n2`
            width: ${X2.size[1.5]};
            height: ${X2.size[1.5]};
            border-radius: ${X2.border.radius.full};
            background-color: ${X2.colors[e3.color][500]};
          `, `tsqd-query-status-tag-dot`), i2 = V2(a2().queryStatusCount, e3.count > 0 && e3.color !== `gray` && n2`
              background-color: ${l3(o2[e3.color][100], o2[e3.color][900])};
              color: ${l3(o2[e3.color][700], o2[e3.color][300])};
            `, `tsqd-query-status-tag-count`);
            return r2 !== t4.e && rt(b2, t4.e = r2), i2 !== t4.t && rt(x2, t4.t = i2), t4;
          }, { e: void 0, t: void 0 }), t3;
        })();
      };
      mu = () => {
        let e3 = Q2(), t2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, i2 = S(() => e3() === `dark` ? wu(t2) : Cu(t2)), { colors: o2 } = X2, s3 = (t3, n2) => e3() === `dark` ? n2 : t3, l3 = Z2().client, [u2, f2] = v(false), [p3, m2] = v(`view`), [g2, _2] = v(false), b2 = S(() => Z2().errorTypes || []), C2 = $2((e4) => e4().getAll().find((e5) => e5.queryHash === Xl()), false), w2 = $2((e4) => e4().getAll().find((e5) => e5.queryHash === Xl()), false), T2 = $2((e4) => e4().getAll().find((e5) => e5.queryHash === Xl())?.state, false), E2 = $2((e4) => e4().getAll().find((e5) => e5.queryHash === Xl())?.state.data, false), D2 = $2((e4) => {
          let t3 = e4().getAll().find((e5) => e5.queryHash === Xl());
          return t3 ? Dn(t3) : `inactive`;
        }), k2 = $2((e4) => {
          let t3 = e4().getAll().find((e5) => e5.queryHash === Xl());
          return t3 ? t3.state.status : `pending`;
        }), A2 = $2((e4) => e4().getAll().find((e5) => e5.queryHash === Xl())?.getObserversCount() ?? 0), j2 = S(() => jn(D2())), M2 = () => {
          xu({ type: `REFETCH`, queryHash: C2()?.queryHash }), C2()?.fetch()?.catch(() => {
          });
        }, N2 = (e4) => {
          let t3 = C2();
          if (!t3) return;
          xu({ type: `TRIGGER_ERROR`, queryHash: t3.queryHash, metadata: { error: e4?.name } });
          let n2 = e4?.initializer(t3) ?? Error(`Unknown error from devtools`), r2 = t3.options;
          t3.setState({ data: void 0, status: `error`, error: n2, fetchMeta: { ...t3.state.fetchMeta, __previousQueryOptions: r2 } });
        }, te2 = () => {
          let e4 = C2();
          if (!e4) return;
          xu({ type: `RESTORE_LOADING`, queryHash: e4.queryHash });
          let t3 = e4.state, n2 = e4.state.fetchMeta ? e4.state.fetchMeta.__previousQueryOptions : null;
          e4.cancel({ silent: true }), e4.setState({ ...t3, fetchStatus: `idle`, fetchMeta: null }), n2 && e4.fetch(n2);
        };
        x(() => {
          D2() !== `fetching` && f2(false);
        });
        let ne2 = () => j2() === `gray` ? t2`
        background-color: ${s3(o2[j2()][200], o2[j2()][700])};
        color: ${s3(o2[j2()][700], o2[j2()][300])};
        border-color: ${s3(o2[j2()][400], o2[j2()][600])};
      ` : t2`
      background-color: ${s3(o2[j2()][100], o2[j2()][900])};
      color: ${s3(o2[j2()][700], o2[j2()][300])};
      border-color: ${s3(o2[j2()][400], o2[j2()][600])};
    `;
        return Te(Re, { get when() {
          return Ye(() => !!C2())() && T2();
        }, get children() {
          var e4 = ql(), n2 = e4.firstChild, r2 = n2.nextSibling, x2 = r2.firstChild, S2 = x2.firstChild, O2 = S2.firstChild, j3 = S2.nextSibling, P2 = x2.nextSibling, re2 = P2.firstChild.nextSibling, ie2 = P2.nextSibling.firstChild.nextSibling, ae = r2.nextSibling, se2 = ae.nextSibling, F2 = se2.firstChild, ce2 = F2.firstChild, le2 = F2.nextSibling, ue2 = le2.firstChild, de2 = le2.nextSibling, L2 = de2.firstChild, fe3 = de2.nextSibling, pe3 = fe3.firstChild, me3 = fe3.nextSibling, R3 = me3.firstChild, he3 = R3.nextSibling, ge3 = se2.nextSibling;
          ge3.firstChild;
          var _e3 = ge3.nextSibling, ve3 = _e3.nextSibling;
          return z(O2, () => Mn(C2().queryKey, true)), z(j3, D2), z(re2, A2), z(ie2, () => new Date(T2().dataUpdatedAt).toLocaleTimeString()), F2.$$click = M2, le2.$$click = () => {
            xu({ type: `INVALIDATE`, queryHash: C2()?.queryHash }), l3.invalidateQueries({ queryKey: C2()?.queryKey, exact: true });
          }, de2.$$click = () => {
            xu({ type: `RESET`, queryHash: C2()?.queryHash }), l3.resetQueries({ queryKey: C2()?.queryKey, exact: true });
          }, fe3.$$click = () => {
            xu({ type: `REMOVE`, queryHash: C2()?.queryHash }), l3.removeQueries({ queryKey: C2()?.queryKey, exact: true }), Zl(null);
          }, me3.$$click = () => {
            if (C2()?.state.data === void 0) f2(true), te2();
            else {
              let e5 = C2();
              if (!e5) return;
              xu({ type: `TRIGGER_LOADING`, queryHash: e5.queryHash });
              let t3 = e5.options;
              e5.fetch({ ...t3, queryFn: () => new Promise(() => {
              }), gcTime: -1 }), e5.setState({ data: void 0, status: `pending`, fetchMeta: { ...e5.state.fetchMeta, __previousQueryOptions: t3 } });
            }
          }, z(me3, () => k2() === `pending` ? `Restore` : `Trigger`, he3), z(se2, Te(Re, { get when() {
            return b2().length === 0 || k2() === `error`;
          }, get children() {
            var e5 = Ul(), n3 = e5.firstChild, r3 = n3.nextSibling;
            return e5.$$click = () => {
              C2().state.error ? (xu({ type: `RESTORE_ERROR`, queryHash: C2()?.queryHash }), l3.resetQueries({ queryKey: C2()?.queryKey })) : N2();
            }, z(e5, () => k2() === `error` ? `Restore` : `Trigger`, r3), b((r4) => {
              var i3 = V2(t2`
                  color: ${s3(o2.red[500], o2.red[400])};
                `, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-error`), a2 = k2() === `pending`, c2 = t2`
                  background-color: ${s3(o2.red[500], o2.red[400])};
                `;
              return i3 !== r4.e && rt(e5, r4.e = i3), a2 !== r4.t && (e5.disabled = r4.t = a2), c2 !== r4.a && rt(n3, r4.a = c2), r4;
            }, { e: void 0, t: void 0, a: void 0 }), e5;
          } }), null), z(se2, Te(Re, { get when() {
            return b2().length !== 0 && k2() !== `error`;
          }, get children() {
            var e5 = Wl(), n3 = e5.firstChild, r3 = n3.nextSibling.nextSibling;
            return r3.firstChild, r3.addEventListener(`change`, (e6) => {
              let t3 = b2().find((t4) => t4.name === e6.currentTarget.value);
              N2(t3);
            }), z(r3, Te(Ie, { get each() {
              return b2();
            }, children: (e6) => (() => {
              var t3 = Jl();
              return z(t3, () => e6.name), b(() => t3.value = e6.name), t3;
            })() }), null), z(e5, Te(lc, {}), null), b((a2) => {
              var o3 = V2(i2().actionsSelect, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-error-multiple`), s4 = t2`
                  background-color: ${X2.colors.red[400]};
                `, c2 = k2() === `pending`;
              return o3 !== a2.e && rt(e5, a2.e = o3), s4 !== a2.t && rt(n3, a2.t = s4), c2 !== a2.a && (r3.disabled = a2.a = c2), a2;
            }, { e: void 0, t: void 0, a: void 0 }), e5;
          } }), null), z(ge3, () => p3() === `view` ? `Explorer` : `Editor`, null), z(e4, Te(Re, { get when() {
            return p3() === `view`;
          }, get children() {
            var e5 = Gl();
            return z(e5, Te(ol, { label: `Data`, defaultExpanded: [`Data`], get value() {
              return E2();
            }, editable: true, onEdit: () => m2(`edit`), get activeQuery() {
              return C2();
            } })), b((t3) => st(e5, `padding`, X2.size[2])), e5;
          } }), _e3), z(e4, Te(Re, { get when() {
            return p3() === `edit`;
          }, get children() {
            var e5 = Kl(), n3 = e5.firstChild, r3 = n3.nextSibling, a2 = r3.firstChild, l4 = a2.nextSibling, u3 = l4.firstChild, d2 = u3.nextSibling;
            return e5.addEventListener(`submit`, (e6) => {
              e6.preventDefault();
              let t3 = new FormData(e6.currentTarget).get(`data`);
              try {
                let e7 = JSON.parse(t3);
                C2().setState({ ...C2().state, data: e7 }), m2(`view`);
              } catch {
                _2(true);
              }
            }), n3.addEventListener(`focus`, () => _2(false)), z(a2, () => g2() ? `Invalid Value` : ``), u3.$$click = () => m2(`view`), b((c2) => {
              var f3 = V2(i2().devtoolsEditForm, `tsqd-query-details-data-editor`), p4 = i2().devtoolsEditTextarea, m3 = g2(), h3 = i2().devtoolsEditFormActions, _3 = i2().devtoolsEditFormError, v2 = i2().devtoolsEditFormActionContainer, b3 = V2(i2().devtoolsEditFormAction, t2`
                      color: ${s3(o2.gray[600], o2.gray[300])};
                    `), x3 = V2(i2().devtoolsEditFormAction, t2`
                      color: ${s3(o2.blue[600], o2.blue[400])};
                    `);
              return f3 !== c2.e && rt(e5, c2.e = f3), p4 !== c2.t && rt(n3, c2.t = p4), m3 !== c2.a && R(n3, `data-error`, c2.a = m3), h3 !== c2.o && rt(r3, c2.o = h3), _3 !== c2.i && rt(a2, c2.i = _3), v2 !== c2.n && rt(l4, c2.n = v2), b3 !== c2.s && rt(u3, c2.s = b3), x3 !== c2.h && rt(d2, c2.h = x3), c2;
            }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0 }), b(() => n3.value = JSON.stringify(E2(), null, 2)), e5;
          } }), _e3), z(ve3, Te(ol, { label: `Query`, defaultExpanded: [`Query`, `queryKey`], get value() {
            return w2();
          } })), b((c2) => {
            var l4 = V2(i2().detailsContainer, `tsqd-query-details-container`), d2 = V2(i2().detailsHeader, `tsqd-query-details-header`), f3 = V2(i2().detailsBody, `tsqd-query-details-summary-container`), p4 = V2(i2().queryDetailsStatus, ne2()), m3 = V2(i2().detailsHeader, `tsqd-query-details-header`), h3 = V2(i2().actionsBody, `tsqd-query-details-actions-container`), g3 = V2(t2`
                color: ${s3(o2.blue[600], o2.blue[400])};
              `, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-refetch`), _3 = D2() === `fetching`, v2 = t2`
                background-color: ${s3(o2.blue[600], o2.blue[400])};
              `, y2 = V2(t2`
                color: ${s3(o2.yellow[600], o2.yellow[400])};
              `, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-invalidate`), b3 = k2() === `pending`, x3 = t2`
                background-color: ${s3(o2.yellow[600], o2.yellow[400])};
              `, S3 = V2(t2`
                color: ${s3(o2.gray[600], o2.gray[300])};
              `, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-reset`), C3 = k2() === `pending`, w3 = t2`
                background-color: ${s3(o2.gray[600], o2.gray[400])};
              `, T3 = V2(t2`
                color: ${s3(o2.pink[500], o2.pink[400])};
              `, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-remove`), E3 = D2() === `fetching`, O3 = t2`
                background-color: ${s3(o2.pink[500], o2.pink[400])};
              `, A3 = V2(t2`
                color: ${s3(o2.cyan[500], o2.cyan[400])};
              `, `tsqd-query-details-actions-btn`, `tsqd-query-details-action-loading`), M3 = u2(), N3 = t2`
                background-color: ${s3(o2.cyan[500], o2.cyan[400])};
              `, ee2 = V2(i2().detailsHeader, `tsqd-query-details-header`), te3 = V2(i2().detailsHeader, `tsqd-query-details-header`), P3 = X2.size[2];
            return l4 !== c2.e && rt(e4, c2.e = l4), d2 !== c2.t && rt(n2, c2.t = d2), f3 !== c2.a && rt(r2, c2.a = f3), p4 !== c2.o && rt(j3, c2.o = p4), m3 !== c2.i && rt(ae, c2.i = m3), h3 !== c2.n && rt(se2, c2.n = h3), g3 !== c2.s && rt(F2, c2.s = g3), _3 !== c2.h && (F2.disabled = c2.h = _3), v2 !== c2.r && rt(ce2, c2.r = v2), y2 !== c2.d && rt(le2, c2.d = y2), b3 !== c2.l && (le2.disabled = c2.l = b3), x3 !== c2.u && rt(ue2, c2.u = x3), S3 !== c2.c && rt(de2, c2.c = S3), C3 !== c2.w && (de2.disabled = c2.w = C3), w3 !== c2.m && rt(L2, c2.m = w3), T3 !== c2.f && rt(fe3, c2.f = T3), E3 !== c2.y && (fe3.disabled = c2.y = E3), O3 !== c2.g && rt(pe3, c2.g = O3), A3 !== c2.p && rt(me3, c2.p = A3), M3 !== c2.b && (me3.disabled = c2.b = M3), N3 !== c2.T && rt(R3, c2.T = N3), ee2 !== c2.A && rt(ge3, c2.A = ee2), te3 !== c2.O && rt(_e3, c2.O = te3), P3 !== c2.I && st(ve3, `padding`, c2.I = P3), c2;
          }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0, c: void 0, w: void 0, m: void 0, f: void 0, y: void 0, g: void 0, p: void 0, b: void 0, T: void 0, A: void 0, O: void 0, I: void 0 }), e4;
        } });
      };
      hu = () => {
        let e3 = Q2(), t2 = Z2().shadowDOMTarget ? B2.bind({ target: Z2().shadowDOMTarget }) : B2, n2 = S(() => e3() === `dark` ? wu(t2) : Cu(t2)), { colors: r2 } = X2, i2 = (t3, n3) => e3() === `dark` ? n3 : t3, o2 = bu((e4) => {
          let t3 = e4().getAll().find((e5) => e5.mutationId === Ql());
          return t3 ? t3.state.isPaused : false;
        }), s3 = bu((e4) => {
          let t3 = e4().getAll().find((e5) => e5.mutationId === Ql());
          return t3 ? t3.state.status : `idle`;
        }), l3 = S(() => An({ isPaused: o2(), status: s3() })), u2 = bu((e4) => e4().getAll().find((e5) => e5.mutationId === Ql()), false), f2 = () => l3() === `gray` ? t2`
        background-color: ${i2(r2[l3()][200], r2[l3()][700])};
        color: ${i2(r2[l3()][700], r2[l3()][300])};
        border-color: ${i2(r2[l3()][400], r2[l3()][600])};
      ` : t2`
      background-color: ${i2(r2[l3()][100], r2[l3()][900])};
      color: ${i2(r2[l3()][700], r2[l3()][300])};
      border-color: ${i2(r2[l3()][400], r2[l3()][600])};
    `;
        return Te(Re, { get when() {
          return u2();
        }, get children() {
          var e4 = Yl(), t3 = e4.firstChild, r3 = t3.nextSibling, i3 = r3.firstChild, o3 = i3.firstChild, p3 = o3.firstChild, m2 = o3.nextSibling, g2 = i3.nextSibling.firstChild.nextSibling, _2 = r3.nextSibling, y2 = _2.nextSibling, b2 = y2.nextSibling, x2 = b2.nextSibling, S2 = x2.nextSibling, C2 = S2.nextSibling, w2 = C2.nextSibling, T2 = w2.nextSibling;
          return z(p3, Te(Re, { get when() {
            return u2().options.mutationKey;
          }, fallback: `No mutationKey found`, get children() {
            return Mn(u2().options.mutationKey, true);
          } })), z(m2, Te(Re, { get when() {
            return l3() === `purple`;
          }, children: `pending` }), null), z(m2, Te(Re, { get when() {
            return l3() !== `purple`;
          }, get children() {
            return s3();
          } }), null), z(g2, () => new Date(u2().state.submittedAt).toLocaleTimeString()), z(y2, Te(ol, { label: `Variables`, defaultExpanded: [`Variables`], get value() {
            return u2().state.variables;
          } })), z(x2, Te(ol, { label: `Context`, defaultExpanded: [`Context`], get value() {
            return u2().state.context;
          } })), z(C2, Te(ol, { label: `Data`, defaultExpanded: [`Data`], get value() {
            return u2().state.data;
          } })), z(T2, Te(ol, { label: `Mutation`, defaultExpanded: [`Mutation`], get value() {
            return u2();
          } })), b((i4) => {
            var o4 = V2(n2().detailsContainer, `tsqd-query-details-container`), s4 = V2(n2().detailsHeader, `tsqd-query-details-header`), c2 = V2(n2().detailsBody, `tsqd-query-details-summary-container`), l4 = V2(n2().queryDetailsStatus, f2()), u3 = V2(n2().detailsHeader, `tsqd-query-details-header`), d2 = X2.size[2], p4 = V2(n2().detailsHeader, `tsqd-query-details-header`), h3 = X2.size[2], g3 = V2(n2().detailsHeader, `tsqd-query-details-header`), v2 = X2.size[2], E2 = V2(n2().detailsHeader, `tsqd-query-details-header`), D2 = X2.size[2];
            return o4 !== i4.e && rt(e4, i4.e = o4), s4 !== i4.t && rt(t3, i4.t = s4), c2 !== i4.a && rt(r3, i4.a = c2), l4 !== i4.o && rt(m2, i4.o = l4), u3 !== i4.i && rt(_2, i4.i = u3), d2 !== i4.n && st(y2, `padding`, i4.n = d2), p4 !== i4.s && rt(b2, i4.s = p4), h3 !== i4.h && st(x2, `padding`, i4.h = h3), g3 !== i4.r && rt(S2, i4.r = g3), v2 !== i4.d && st(C2, `padding`, i4.d = v2), E2 !== i4.l && rt(w2, i4.l = E2), D2 !== i4.u && st(T2, `padding`, i4.u = D2), i4;
          }, { e: void 0, t: void 0, a: void 0, o: void 0, i: void 0, n: void 0, s: void 0, h: void 0, r: void 0, d: void 0, l: void 0, u: void 0 }), e4;
        } });
      };
      gu = /* @__PURE__ */ new Map();
      _u = () => {
        let e3 = S(() => Z2().client.getQueryCache()), t2 = e3().subscribe((t3) => {
          C(() => {
            for (let [n2, r2] of gu.entries()) r2.shouldUpdate(t3) && r2.setter(n2(e3));
          });
        });
        return T(() => {
          gu.clear(), t2();
        }), t2;
      };
      $2 = (e3, t2 = true, r2 = () => true) => {
        let i2 = S(() => Z2().client.getQueryCache()), [a2, o2] = v(e3(i2), t2 ? void 0 : { equals: false });
        return x(() => {
          o2(e3(i2));
        }), gu.set(e3, { setter: o2, shouldUpdate: r2 }), T(() => {
          gu.delete(e3);
        }), a2;
      };
      vu = /* @__PURE__ */ new Map();
      yu = () => {
        let e3 = S(() => Z2().client.getMutationCache()), t2 = e3().subscribe(() => {
          for (let [t3, n2] of vu.entries()) queueMicrotask(() => {
            n2(t3(e3));
          });
        });
        return T(() => {
          vu.clear(), t2();
        }), t2;
      };
      bu = (e3, t2 = true) => {
        let r2 = S(() => Z2().client.getMutationCache()), [i2, a2] = v(e3(r2), t2 ? void 0 : { equals: false });
        return x(() => {
          a2(e3(r2));
        }), vu.set(e3, a2), T(() => {
          vu.delete(e3);
        }), i2;
      };
      xu = ({ type: e3, queryHash: t2, metadata: n2 }) => {
        let r2 = new CustomEvent(`@tanstack/query-devtools-event`, { detail: { type: e3, queryHash: t2, metadata: n2 }, bubbles: true, cancelable: true });
        window.dispatchEvent(r2);
      };
      Su = (e3, t2) => {
        let { colors: n2, font: r2, size: i2, alpha: a2, shadow: o2, border: s3 } = X2, c2 = (t3, n3) => e3 === `light` ? t3 : n3;
        return { devtoolsBtn: t2`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${o2.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n2.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `, panel: t2`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${X2.size[0.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c2(n2.gray[300], n2.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c2(n2.gray[400], n2.darkGray[300])};
      }
    `, parentPanel: t2`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${X2.size[0.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${c2(n2.gray[300], n2.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${c2(n2.gray[400], n2.darkGray[300])};
      }
    `, "devtoolsBtn-position-bottom-right": t2`
      bottom: 12px;
      right: 12px;
    `, "devtoolsBtn-position-bottom-left": t2`
      bottom: 12px;
      left: 12px;
    `, "devtoolsBtn-position-top-left": t2`
      top: 12px;
      left: 12px;
    `, "devtoolsBtn-position-top-right": t2`
      top: 12px;
      right: 12px;
    `, "devtoolsBtn-position-relative": t2`
      position: relative;
    `, "panel-position-top": t2`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i2[14]};
      border-bottom: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
    `, "panel-position-bottom": t2`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${i2[14]};
      border-top: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
    `, "panel-position-right": t2`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      max-width: 90%;
    `, "panel-position-left": t2`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      max-width: 90%;
    `, closeBtn: t2`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${c2(n2.gray[50], n2.darkGray[700])};
      &:hover {
        background-color: ${c2(n2.gray[200], n2.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n2.blue[600]};
      }
      & svg {
        color: ${c2(n2.gray[600], n2.gray[400])};
        width: ${i2[2]};
        height: ${i2[2]};
      }
    `, "closeBtn-position-top": t2`
      bottom: 0;
      right: ${i2[2]};
      transform: translate(0, 100%);
      border-right: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-left: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${s3.radius.sm} ${s3.radius.sm};
      padding: ${i2[0.5]} ${i2[1.5]} ${i2[1]} ${i2[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${i2[2.5]};
        height: ${i2[1.5]};
        width: calc(100% + ${i2[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `, "closeBtn-position-bottom": t2`
      top: 0;
      right: ${i2[2]};
      transform: translate(0, -100%);
      border-right: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-left: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-top: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${s3.radius.sm} ${s3.radius.sm} 0px 0px;
      padding: ${i2[1]} ${i2[1.5]} ${i2[0.5]} ${i2[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${i2[2.5]};
        height: ${i2[1.5]};
        width: calc(100% + ${i2[5]});
      }
    `, "closeBtn-position-right": t2`
      bottom: ${i2[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-top: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-bottom: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-radius: ${s3.radius.sm} 0px 0px ${s3.radius.sm};
      padding: ${i2[1.5]} ${i2[0.5]} ${i2[1.5]} ${i2[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${i2[5]});
        width: ${i2[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `, "closeBtn-position-left": t2`
      bottom: ${i2[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-top: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-bottom: ${c2(n2.gray[400], n2.darkGray[300])} 1px solid;
      border-radius: 0px ${s3.radius.sm} ${s3.radius.sm} 0px;
      padding: ${i2[1.5]} ${i2[1]} ${i2[1.5]} ${i2[0.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${i2[5]});
        width: ${i2[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `, queriesContainer: t2`
      flex: 1 1 700px;
      background-color: ${c2(n2.gray[50], n2.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `, dragHandle: t2`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n2.purple[400]}${c2(``, a2[90])};
      }
      &:focus {
        outline: none;
        background-color: ${n2.purple[400]}${c2(``, a2[90])};
      }
      &:focus-visible {
        outline: 2px solid ${n2.blue[800]};
        outline-offset: -2px;
        background-color: ${n2.purple[400]}${c2(``, a2[90])};
      }
      z-index: 4;
    `, "dragHandle-position-top": t2`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `, "dragHandle-position-bottom": t2`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `, "dragHandle-position-right": t2`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `, "dragHandle-position-left": t2`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `, row: t2`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${X2.size[2]} ${X2.size[2.5]};
      gap: ${X2.size[2.5]};
      border-bottom: ${c2(n2.gray[300], n2.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${i2[0.5]};
        flex-direction: column;
      }
    `, logoAndToggleContainer: t2`
      display: flex;
      gap: ${X2.size[3]};
      align-items: center;
    `, logo: t2`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${X2.size[0.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
    `, tanstackLogo: t2`
      font-size: ${r2.size.md};
      font-weight: ${r2.weight.bold};
      line-height: ${r2.lineHeight.xs};
      white-space: nowrap;
      color: ${c2(n2.gray[600], n2.gray[300])};
    `, queryFlavorLogo: t2`
      font-weight: ${r2.weight.semibold};
      font-size: ${r2.size.xs};
      background: linear-gradient(
        to right,
        ${c2(`#ea4037, #ff9b11`, `#dd524b, #e9a03b`)}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `, queryStatusContainer: t2`
      display: flex;
      gap: ${X2.size[2]};
      height: min-content;
    `, queryStatusTag: t2`
      display: flex;
      gap: ${X2.size[1.5]};
      box-sizing: border-box;
      height: ${X2.size[6.5]};
      background: ${c2(n2.gray[50], n2.darkGray[500])};
      color: ${c2(n2.gray[700], n2.gray[300])};
      border-radius: ${X2.border.radius.sm};
      font-size: ${r2.size.sm};
      padding: ${X2.size[1]};
      padding-left: ${X2.size[1.5]};
      align-items: center;
      font-weight: ${r2.weight.medium};
      border: ${c2(`1px solid ` + n2.gray[300], `1px solid transparent`)};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n2.blue[800]};
      }
    `, queryStatusTagLabel: t2`
      font-size: ${r2.size.xs};
    `, queryStatusCount: t2`
      font-size: ${r2.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${c2(n2.gray[500], n2.gray[400])};
      background-color: ${c2(n2.gray[200], n2.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${X2.size[4.5]};
    `, statusTooltip: t2`
      position: absolute;
      z-index: 1;
      background-color: ${c2(n2.gray[50], n2.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${X2.size[2]}));
      padding: ${X2.size[0.5]} ${X2.size[2]};
      border-radius: ${X2.border.radius.sm};
      font-size: ${r2.size.xs};
      border: 1px solid ${c2(n2.gray[400], n2.gray[600])};
      color: ${c2(n2.gray[600], n2.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${c2(n2.gray[400], n2.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${c2(n2.gray[100], n2.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `, filtersContainer: t2`
      display: flex;
      gap: ${X2.size[2]};
      & > button {
        cursor: pointer;
        padding: ${X2.size[0.5]} ${X2.size[1.5]} ${X2.size[0.5]}
          ${X2.size[2]};
        border-radius: ${X2.border.radius.sm};
        background-color: ${c2(n2.gray[100], n2.darkGray[400])};
        border: 1px solid ${c2(n2.gray[300], n2.darkGray[200])};
        color: ${c2(n2.gray[700], n2.gray[300])};
        font-size: ${r2.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r2.lineHeight.sm};
        gap: ${X2.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s3.radius.xs};
          outline: 2px solid ${n2.blue[800]};
        }
        & svg {
          width: ${X2.size[3]};
          height: ${X2.size[3]};
          color: ${c2(n2.gray[500], n2.gray[400])};
        }
      }
    `, filterInput: t2`
      padding: ${i2[0.5]} ${i2[2]};
      border-radius: ${X2.border.radius.sm};
      background-color: ${c2(n2.gray[100], n2.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${X2.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${c2(n2.gray[300], n2.darkGray[200])};
      height: min-content;
      color: ${c2(n2.gray[600], n2.gray[400])};
      & > svg {
        width: ${i2[3]};
        height: ${i2[3]};
      }
      & input {
        font-size: ${r2.size.xs};
        width: 100%;
        background-color: ${c2(n2.gray[100], n2.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r2.lineHeight.sm};
        color: ${c2(n2.gray[700], n2.gray[300])};
        &::placeholder {
          color: ${c2(n2.gray[700], n2.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
    `, filterSelect: t2`
      padding: ${X2.size[0.5]} ${X2.size[2]};
      border-radius: ${X2.border.radius.sm};
      background-color: ${c2(n2.gray[100], n2.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${X2.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${c2(n2.gray[300], n2.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${c2(n2.gray[600], n2.gray[400])};
        width: ${X2.size[2]};
        height: ${X2.size[2]};
      }
      & > select {
        appearance: none;
        color: ${c2(n2.gray[700], n2.gray[300])};
        min-width: 100px;
        line-height: ${r2.lineHeight.sm};
        font-size: ${r2.size.xs};
        background-color: ${c2(n2.gray[100], n2.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
    `, actionsContainer: t2`
      display: flex;
      gap: ${X2.size[2]};
    `, actionsBtn: t2`
      border-radius: ${X2.border.radius.sm};
      background-color: ${c2(n2.gray[100], n2.darkGray[400])};
      border: 1px solid ${c2(n2.gray[300], n2.darkGray[200])};
      width: ${X2.size[6.5]};
      height: ${X2.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${X2.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${c2(n2.gray[200], n2.darkGray[500])};
      }
      & svg {
        color: ${c2(n2.gray[700], n2.gray[300])};
        width: ${X2.size[3]};
        height: ${X2.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
    `, actionsBtnOffline: t2`
      & svg {
        stroke: ${c2(n2.yellow[700], n2.yellow[500])};
        fill: ${c2(n2.yellow[700], n2.yellow[500])};
      }
    `, overflowQueryContainer: t2`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `, queryRow: t2`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${c2(n2.gray[700], n2.gray[300])};
      background-color: ${c2(n2.gray[50], n2.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${c2(n2.gray[200], n2.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${X2.size[1]};
        user-select: none;
        min-width: ${X2.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r2.size.xs};
        font-weight: ${r2.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${c2(n2.gray[300], n2.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r2.size.xs};
        display: flex;
        align-items: center;
        min-height: ${X2.size[6]};
        flex: 1;
        padding: ${X2.size[1]} ${X2.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${c2(n2.gray[300], n2.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${X2.size[2]};
        color: ${c2(n2.gray[800], n2.gray[300])};
        background-color: ${c2(n2.gray[300], n2.darkGray[600])};
        border-bottom: 1px solid ${c2(n2.gray[300], n2.darkGray[400])};
        font-size: ${r2.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${X2.size[2]};
        color: ${c2(n2.teal[800], n2.teal[300])};
        background-color: ${c2(n2.teal[100], n2.teal[900])};
        border-bottom: 1px solid ${c2(n2.teal[300], n2.teal[700])};
        font-size: ${r2.size.xs};
      }
    `, selectedQueryRow: t2`
      background-color: ${c2(n2.gray[200], n2.darkGray[500])};
    `, detailsContainer: t2`
      flex: 1 1 700px;
      background-color: ${c2(n2.gray[50], n2.darkGray[700])};
      color: ${c2(n2.gray[700], n2.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `, detailsHeader: t2`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${c2(n2.gray[200], n2.darkGray[600])};
      padding: ${X2.size[1.5]} ${X2.size[2]};
      font-weight: ${r2.weight.medium};
      font-size: ${r2.size.xs};
      line-height: ${r2.lineHeight.xs};
      text-align: left;
    `, detailsBody: t2`
      margin: ${X2.size[1.5]} 0px ${X2.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${X2.size[2]};
        line-height: ${r2.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r2.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${X2.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r2.size.xs};
        line-height: ${r2.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `, queryDetailsStatus: t2`
      border: 1px solid ${n2.darkGray[200]};
      border-radius: ${X2.border.radius.sm};
      font-weight: ${r2.weight.medium};
      padding: ${X2.size[1]} ${X2.size[2.5]};
    `, actionsBody: t2`
      flex-wrap: wrap;
      margin: ${X2.size[2]} 0px ${X2.size[2]} 0px;
      display: flex;
      gap: ${X2.size[2]};
      padding: 0px ${X2.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r2.size.xs};
        padding: ${X2.size[1]} ${X2.size[2]};
        display: flex;
        border-radius: ${X2.border.radius.sm};
        background-color: ${c2(n2.gray[100], n2.darkGray[600])};
        border: 1px solid ${c2(n2.gray[300], n2.darkGray[400])};
        align-items: center;
        gap: ${X2.size[2]};
        font-weight: ${r2.weight.medium};
        line-height: ${r2.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${s3.radius.xs};
          outline: 2px solid ${n2.blue[800]};
        }
        &:hover {
          background-color: ${c2(n2.gray[200], n2.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${i2[1.5]};
          height: ${i2[1.5]};
          border-radius: ${X2.border.radius.full};
        }
      }
    `, actionsSelect: t2`
      font-size: ${r2.size.xs};
      padding: ${X2.size[0.5]} ${X2.size[2]};
      display: flex;
      border-radius: ${X2.border.radius.sm};
      overflow: hidden;
      background-color: ${c2(n2.gray[100], n2.darkGray[600])};
      border: 1px solid ${c2(n2.gray[300], n2.darkGray[400])};
      align-items: center;
      gap: ${X2.size[2]};
      font-weight: ${r2.weight.medium};
      line-height: ${r2.lineHeight.sm};
      color: ${c2(n2.red[500], n2.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${c2(n2.gray[200], n2.darkGray[500])};
      }
      & > span {
        width: ${i2[1.5]};
        height: ${i2[1.5]};
        border-radius: ${X2.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${X2.colors.red[400]};
      }
      & svg {
        width: ${X2.size[2]};
        height: ${X2.size[2]};
      }
    `, settingsMenu: t2`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${i2[0.5]};
      border-radius: ${X2.border.radius.sm};
      border: 1px solid ${c2(n2.gray[300], n2.gray[700])};
      background-color: ${c2(n2.gray[50], n2.darkGray[600])};
      font-size: ${r2.size.xs};
      color: ${c2(n2.gray[700], n2.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${i2[0.5]};
    `, settingsSubTrigger: t2`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${X2.border.radius.xs};
      padding: ${X2.size[1]} ${X2.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${c2(n2.gray[700], n2.gray[300])};
      & svg {
        color: ${c2(n2.gray[600], n2.gray[400])};
        transform: rotate(-90deg);
        width: ${X2.size[2]};
        height: ${X2.size[2]};
      }
      &:hover {
        background-color: ${c2(n2.gray[200], n2.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n2.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `, settingsMenuHeader: t2`
      padding: ${X2.size[1]} ${X2.size[1]};
      font-weight: ${r2.weight.medium};
      border-bottom: 1px solid ${c2(n2.gray[300], n2.darkGray[400])};
      color: ${c2(n2.gray[500], n2.gray[400])};
      font-size: ${r2.size.xs};
    `, settingsSubButton: t2`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${c2(n2.gray[700], n2.gray[300])};
      font-size: ${r2.size.xs};
      border-radius: ${X2.border.radius.xs};
      padding: ${X2.size[1]} ${X2.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${c2(n2.gray[600], n2.gray[400])};
      }
      &:hover {
        background-color: ${c2(n2.gray[200], n2.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n2.blue[800]};
      }
      &[data-checked] {
        background-color: ${c2(n2.purple[100], n2.purple[900])};
        color: ${c2(n2.purple[700], n2.purple[300])};
        & svg {
          color: ${c2(n2.purple[700], n2.purple[300])};
        }
        &:hover {
          background-color: ${c2(n2.purple[100], n2.purple[900])};
        }
      }
    `, viewToggle: t2`
      border-radius: ${X2.border.radius.sm};
      background-color: ${c2(n2.gray[200], n2.darkGray[600])};
      border: 1px solid ${c2(n2.gray[300], n2.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r2.size.xs};
      color: ${c2(n2.gray[700], n2.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n2.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r2.lineHeight.md};
        }

        & label:hover {
          background-color: ${c2(n2.gray[100], n2.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${c2(n2.gray[100], n2.darkGray[400])};
        & label:hover {
          background-color: ${c2(n2.gray[100], n2.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${X2.size[1.5]} 0 ${X2.size[2]};
        }
        border-right: 1px solid ${c2(n2.gray[300], n2.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${X2.size[2]} 0 ${X2.size[1.5]};
        }
      }
    `, devtoolsEditForm: t2`
      padding: ${i2[2]};
      & > [data-error='true'] {
        outline: 2px solid ${c2(n2.red[200], n2.red[800])};
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
      }
    `, devtoolsEditTextarea: t2`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r2.size.xs};
      border-radius: ${s3.radius.sm};
      field-sizing: content;
      padding: ${i2[2]};
      background-color: ${c2(n2.gray[100], n2.darkGray[800])};
      color: ${c2(n2.gray[900], n2.gray[100])};
      border: 1px solid ${c2(n2.gray[200], n2.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${c2(n2.blue[200], n2.blue[800])};
      }
    `, devtoolsEditFormActions: t2`
      display: flex;
      justify-content: space-between;
      gap: ${i2[2]};
      align-items: center;
      padding-top: ${i2[1]};
      font-size: ${r2.size.xs};
    `, devtoolsEditFormError: t2`
      color: ${c2(n2.red[700], n2.red[500])};
    `, devtoolsEditFormActionContainer: t2`
      display: flex;
      gap: ${i2[2]};
    `, devtoolsEditFormAction: t2`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r2.size.xs};
      padding: ${i2[1]} ${X2.size[2]};
      display: flex;
      border-radius: ${s3.radius.sm};
      background-color: ${c2(n2.gray[100], n2.darkGray[600])};
      border: 1px solid ${c2(n2.gray[300], n2.darkGray[400])};
      align-items: center;
      gap: ${i2[2]};
      font-weight: ${r2.weight.medium};
      line-height: ${r2.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${s3.radius.xs};
        outline: 2px solid ${n2.blue[800]};
      }
      &:hover {
        background-color: ${c2(n2.gray[200], n2.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    ` };
      };
      Cu = (e3) => Su(`light`, e3);
      wu = (e3) => Su(`dark`, e3);
      $e([`click`, `mousedown`, `keydown`, `input`]);
    }
  });

  // ../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/DevtoolsPanelComponent-Be8narGM.js
  var DevtoolsPanelComponent_Be8narGM_exports = {};
  __export(DevtoolsPanelComponent_Be8narGM_exports, {
    default: () => l2
  });
  var l2;
  var init_DevtoolsPanelComponent_Be8narGM = __esm({
    "../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/DevtoolsPanelComponent-Be8narGM.js"() {
      init_utils_BPMMmTje();
      init_Devtools_CFKbGy8Z();
      l2 = (l3) => {
        let [u2, d2] = be2({ prefix: `TanstackQueryDevtools` }), f2 = Vn(), p3 = S(() => {
          let e3 = l3.theme || u2.theme_preference || `system`;
          return e3 === `system` ? f2() : e3;
        });
        return Te(Fc.Provider, { value: l3, get children() {
          return Te(Rc, { disabled: true, localStore: u2, setLocalStore: d2, get children() {
            return Te(Bc.Provider, { value: p3, get children() {
              return Te(ou, { get children() {
                return Te(cu, { localStore: u2, setLocalStore: d2, get onClose() {
                  return l3.onClose;
                }, showPanelViewOnly: true });
              } });
            } });
          } });
        } });
      };
    }
  });

  // ../../node_modules/.pnpm/@vue+shared@3.5.43/node_modules/@vue/shared/dist/shared.esm-bundler.js
  // @__NO_SIDE_EFFECTS__
  function makeMap(str) {
    const map2 = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(",")) map2[key] = 1;
    return (val) => val in map2;
  }
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var NOOP = () => {
  };
  var NO = () => false;
  var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el2) => {
    const i2 = arr.indexOf(el2);
    if (i2 > -1) {
      arr.splice(i2, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => toTypeString(val) === "[object Date]";
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  var isBuiltInDirective = /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  );
  var cacheStringFunction = (fn3) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return ((str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn3(str));
    });
  };
  var camelizeRE = /-\w/g;
  var camelize = cacheStringFunction(
    (str) => {
      return str.replace(camelizeRE, (c2) => c2.slice(1).toUpperCase());
    }
  );
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction(
    (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
  );
  var capitalize = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  var toHandlerKey = cacheStringFunction(
    (str) => {
      const s3 = str ? `on${capitalize(str)}` : ``;
      return s3;
    }
  );
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  var invokeArrayFns = (fns, ...arg) => {
    for (let i2 = 0; i2 < fns.length; i2++) {
      fns[i2](...arg);
    }
  };
  var def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  var looseToNumber = (val) => {
    const n2 = parseFloat(val);
    return isNaN(n2) ? val : n2;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i2 = 0; i2 < value.length; i2++) {
        const item = value[i2];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:([^]+)/;
  var styleCommentRE = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, (match) => match.startsWith("/*") ? "" : match).split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        const normalized = normalizeClass(value[i2]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function looseCompareArrays(a2, b2, seen) {
    if (a2.length !== b2.length) return false;
    let equal = true;
    for (let i2 = 0; equal && i2 < a2.length; i2++) {
      equal = looseEqual(a2[i2], b2[i2], seen);
    }
    return equal;
  }
  function looseCompareCollections(a2, b2, seen) {
    if (a2.size !== b2.size) return false;
    const candidates = Array.from(b2);
    const matched = new Uint8Array(candidates.length);
    for (const item of a2) {
      let index = -1;
      for (let i2 = 0; i2 < candidates.length; i2++) {
        if (!matched[i2] && looseEqual(item, candidates[i2], seen)) {
          index = i2;
          break;
        }
      }
      if (index < 0) return false;
      matched[index] = 1;
    }
    return true;
  }
  function looseCompareObjects(a2, b2, seen) {
    let aValidType = isMap(a2);
    let bValidType = isMap(b2);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareCollections(a2, b2, seen) : false;
    }
    aValidType = isSet(a2);
    bValidType = isSet(b2);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareCollections(a2, b2, seen) : false;
    }
    const aKeysCount = Object.keys(a2).length;
    const bKeysCount = Object.keys(b2).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a2) {
      const aHasKey = a2.hasOwnProperty(key);
      const bHasKey = b2.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a2[key], b2[key], seen)) {
        return false;
      }
    }
    return String(a2) === String(b2);
  }
  function looseCompareNested(a2, b2, seen, compare) {
    if (!seen) {
      seen = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()];
    }
    const [seenA, seenB] = seen;
    if (seenA.has(a2) || seenB.has(b2)) {
      return seenA.get(a2) === b2 && seenB.get(b2) === a2;
    }
    seenA.set(a2, b2);
    seenB.set(b2, a2);
    const equal = compare(a2, b2, seen);
    seenA.delete(a2);
    seenB.delete(b2);
    return equal;
  }
  function looseEqual(a2, b2, seen) {
    if (a2 === b2) return true;
    let aValidType = isDate(a2);
    let bValidType = isDate(b2);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a2.getTime() === b2.getTime() : false;
    }
    aValidType = isSymbol(a2);
    bValidType = isSymbol(b2);
    if (aValidType || bValidType) {
      return a2 === b2;
    }
    aValidType = isArray(a2);
    bValidType = isArray(b2);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareNested(a2, b2, seen, looseCompareArrays) : false;
    }
    aValidType = isObject(a2);
    bValidType = isObject(b2);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      return looseCompareNested(a2, b2, seen, looseCompareObjects);
    }
    return String(a2) === String(b2);
  }

  // ../../node_modules/.pnpm/@vue+reactivity@3.5.43/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
  function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
  }
  var activeEffectScope;
  var EffectScope = class {
    // TODO isolatedDeclarations "__v_skip"
    constructor(detached = false) {
      this.detached = detached;
      this._active = true;
      this._on = 0;
      this.effects = [];
      this.cleanups = [];
      this._isPaused = false;
      this._warnOnRun = true;
      this.__v_skip = true;
      if (!detached && activeEffectScope) {
        if (activeEffectScope.active) {
          this.parent = activeEffectScope;
          this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
            this
          ) - 1;
        } else {
          this._active = false;
          this._warnOnRun = false;
        }
      }
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i2, l3;
        if (this.scopes) {
          const scopes = this.scopes.slice();
          for (i2 = 0, l3 = scopes.length; i2 < l3; i2++) {
            scopes[i2].pause();
          }
        }
        for (i2 = 0, l3 = this.effects.length; i2 < l3; i2++) {
          this.effects[i2].pause();
        }
      }
    }
    /**
     * Resumes the effect scope, including all child scopes and effects.
     */
    resume() {
      if (this._active) {
        if (this._isPaused) {
          this._isPaused = false;
          let i2, l3;
          if (this.scopes) {
            const scopes = this.scopes.slice();
            for (i2 = 0, l3 = scopes.length; i2 < l3; i2++) {
              scopes[i2].resume();
            }
          }
          const effects = this.effects.slice();
          for (i2 = 0, l3 = effects.length; i2 < l3; i2++) {
            effects[i2].resume();
          }
        }
      }
    }
    run(fn3) {
      if (this._active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn3();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (this._warnOnRun) {
        warn(`cannot run an inactive effect scope.`);
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      if (++this._on === 1) {
        this.prevScope = activeEffectScope;
        activeEffectScope = this;
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      if (this._on > 0 && --this._on === 0) {
        if (activeEffectScope === this) {
          activeEffectScope = this.prevScope;
        } else {
          let current = activeEffectScope;
          while (current) {
            if (current.prevScope === this) {
              current.prevScope = this.prevScope;
              break;
            }
            current = current.prevScope;
          }
        }
        this.prevScope = void 0;
      }
    }
    stop(fromParent) {
      if (this._active) {
        this._active = false;
        let i2, l3;
        for (i2 = 0, l3 = this.effects.length; i2 < l3; i2++) {
          this.effects[i2].stop();
        }
        this.effects.length = 0;
        for (i2 = 0, l3 = this.cleanups.length; i2 < l3; i2++) {
          this.cleanups[i2]();
        }
        this.cleanups.length = 0;
        if (this.scopes) {
          const scopes = this.scopes.slice();
          for (i2 = 0, l3 = scopes.length; i2 < l3; i2++) {
            scopes[i2].stop(true);
          }
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
      }
    }
  };
  function getCurrentScope() {
    return activeEffectScope;
  }
  function onScopeDispose(fn3, failSilently = false) {
    if (activeEffectScope) {
      activeEffectScope.cleanups.push(fn3);
    } else if (!failSilently) {
      warn(
        `onScopeDispose() is called when there is no active effect scope to be associated with.`
      );
    }
  }
  var activeSub;
  var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
  var ReactiveEffect = class {
    constructor(fn3) {
      this.fn = fn3;
      this.deps = void 0;
      this.depsTail = void 0;
      this.flags = 1 | 4;
      this.next = void 0;
      this.cleanup = void 0;
      this.scheduler = void 0;
      if (activeEffectScope) {
        if (activeEffectScope.active) {
          activeEffectScope.effects.push(this);
        } else {
          this.flags &= -2;
        }
      }
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      if (this.flags & 64) {
        this.flags &= -65;
        if (pausedQueueEffects.has(this)) {
          pausedQueueEffects.delete(this);
          this.trigger();
        }
      }
    }
    /**
     * @internal
     */
    notify() {
      if (this.flags & 2 && !(this.flags & 32)) {
        return;
      }
      if (!(this.flags & 8)) {
        batch(this);
      }
    }
    run() {
      if (!(this.flags & 1)) {
        return this.fn();
      }
      this.flags |= 2;
      cleanupEffect(this);
      prepareDeps(this);
      const prevEffect = activeSub;
      const prevShouldTrack = shouldTrack;
      activeSub = this;
      shouldTrack = true;
      try {
        return this.fn();
      } finally {
        if (activeSub !== this) {
          warn(
            "Active effect was not restored correctly - this is likely a Vue internal bug."
          );
        }
        cleanupDeps(this);
        activeSub = prevEffect;
        shouldTrack = prevShouldTrack;
        this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let link = this.deps; link; link = link.nextDep) {
          removeSub(link);
        }
        this.deps = this.depsTail = void 0;
        cleanupEffect(this);
        this.onStop && this.onStop();
        this.flags &= -2;
      }
    }
    trigger() {
      if (this.flags & 64) {
        pausedQueueEffects.add(this);
      } else if (this.scheduler) {
        this.scheduler();
      } else {
        this.runIfDirty();
      }
    }
    /**
     * @internal
     */
    runIfDirty() {
      if (isDirty(this)) {
        this.run();
      }
    }
    get dirty() {
      return isDirty(this);
    }
  };
  var batchDepth = 0;
  var batchedSub;
  var batchedComputed;
  function batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
      sub.next = batchedComputed;
      batchedComputed = sub;
      return;
    }
    sub.next = batchedSub;
    batchedSub = sub;
  }
  function startBatch() {
    batchDepth++;
  }
  function endBatch() {
    if (--batchDepth > 0) {
      return;
    }
    if (batchedComputed) {
      let e3 = batchedComputed;
      batchedComputed = void 0;
      while (e3) {
        const next = e3.next;
        e3.next = void 0;
        e3.flags &= -9;
        e3 = next;
      }
    }
    let error;
    while (batchedSub) {
      let e3 = batchedSub;
      batchedSub = void 0;
      while (e3) {
        const next = e3.next;
        e3.next = void 0;
        e3.flags &= -9;
        if (e3.flags & 1) {
          try {
            ;
            e3.trigger();
          } catch (err) {
            if (!error) error = err;
          }
        }
        e3 = next;
      }
    }
    if (error) throw error;
  }
  function prepareDeps(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      link.version = -1;
      link.prevActiveLink = link.dep.activeLink;
      link.dep.activeLink = link;
    }
  }
  function cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while (link) {
      const prev = link.prevDep;
      if (link.version === -1) {
        if (link === tail) tail = prev;
        removeSub(link);
        removeDep(link);
      } else {
        head = link;
      }
      link.dep.activeLink = link.prevActiveLink;
      link.prevActiveLink = void 0;
      link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
  }
  function isDirty(sub) {
    for (let link = sub.deps; link; link = link.nextDep) {
      if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
        return true;
      }
    }
    if (sub._dirty) {
      return true;
    }
    return false;
  }
  function refreshComputed(computed3) {
    if (computed3.flags & 4 && !(computed3.flags & 16)) {
      return;
    }
    computed3.flags &= -17;
    if (computed3.globalVersion === globalVersion) {
      return;
    }
    computed3.globalVersion = globalVersion;
    if (!computed3.isSSR && computed3.flags & 128 && (!computed3.deps && !computed3._dirty || !isDirty(computed3))) {
      return;
    }
    computed3.flags |= 2;
    const dep = computed3.dep;
    const prevSub = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = computed3;
    shouldTrack = true;
    try {
      prepareDeps(computed3);
      const value = computed3.fn(computed3._value);
      if (dep.version === 0 || hasChanged(value, computed3._value)) {
        computed3.flags |= 128;
        computed3._value = value;
        dep.version++;
      }
    } catch (err) {
      dep.version++;
      throw err;
    } finally {
      activeSub = prevSub;
      shouldTrack = prevShouldTrack;
      cleanupDeps(computed3);
      computed3.flags &= -3;
    }
  }
  function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link;
    if (prevSub) {
      prevSub.nextSub = nextSub;
      link.prevSub = void 0;
    }
    if (nextSub) {
      nextSub.prevSub = prevSub;
      link.nextSub = void 0;
    }
    if (dep.subsHead === link) {
      dep.subsHead = nextSub;
    }
    if (dep.subs === link) {
      dep.subs = prevSub;
      if (!prevSub && dep.computed) {
        dep.computed.flags &= -5;
        for (let l3 = dep.computed.deps; l3; l3 = l3.nextDep) {
          removeSub(l3, true);
        }
      }
    }
    if (!soft && !--dep.sc && dep.map) {
      dep.map.delete(dep.key);
    }
  }
  function removeDep(link) {
    const { prevDep, nextDep } = link;
    if (prevDep) {
      prevDep.nextDep = nextDep;
      link.prevDep = void 0;
    }
    if (nextDep) {
      nextDep.prevDep = prevDep;
      link.nextDep = void 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function cleanupEffect(e3) {
    const { cleanup } = e3;
    e3.cleanup = void 0;
    if (cleanup) {
      const prevSub = activeSub;
      activeSub = void 0;
      try {
        cleanup();
      } finally {
        activeSub = prevSub;
      }
    }
  }
  var globalVersion = 0;
  var Link = class {
    constructor(sub, dep) {
      this.sub = sub;
      this.dep = dep;
      this.version = dep.version;
      this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var Dep = class {
    // TODO isolatedDeclarations "__v_skip"
    constructor(computed3) {
      this.computed = computed3;
      this.version = 0;
      this.activeLink = void 0;
      this.subs = void 0;
      this.map = void 0;
      this.key = void 0;
      this.sc = 0;
      this.__v_skip = true;
      if (true) {
        this.subsHead = void 0;
      }
    }
    track(debugInfo) {
      if (!activeSub || !shouldTrack || activeSub === this.computed) {
        return;
      }
      let link = this.activeLink;
      if (link === void 0 || link.sub !== activeSub) {
        link = this.activeLink = new Link(activeSub, this);
        if (!activeSub.deps) {
          activeSub.deps = activeSub.depsTail = link;
        } else {
          link.prevDep = activeSub.depsTail;
          activeSub.depsTail.nextDep = link;
          activeSub.depsTail = link;
        }
        addSub(link);
      } else if (link.version === -1) {
        link.version = this.version;
        if (link.nextDep) {
          const next = link.nextDep;
          next.prevDep = link.prevDep;
          if (link.prevDep) {
            link.prevDep.nextDep = next;
          }
          link.prevDep = activeSub.depsTail;
          link.nextDep = void 0;
          activeSub.depsTail.nextDep = link;
          activeSub.depsTail = link;
          if (activeSub.deps === link) {
            activeSub.deps = next;
          }
        }
      }
      if (activeSub.onTrack) {
        activeSub.onTrack(
          extend(
            {
              effect: activeSub
            },
            debugInfo
          )
        );
      }
      return link;
    }
    trigger(debugInfo) {
      this.version++;
      globalVersion++;
      this.notify(debugInfo);
    }
    notify(debugInfo) {
      startBatch();
      try {
        if (true) {
          for (let head = this.subsHead; head; head = head.nextSub) {
            if (head.sub.onTrigger && !(head.sub.flags & 8)) {
              head.sub.onTrigger(
                extend(
                  {
                    effect: head.sub
                  },
                  debugInfo
                )
              );
            }
          }
        }
        for (let link = this.subs; link; link = link.prevSub) {
          if (link.sub.notify()) {
            ;
            link.sub.dep.notify();
          }
        }
      } finally {
        endBatch();
      }
    }
  };
  function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
      const computed3 = link.dep.computed;
      if (computed3 && !link.dep.subs) {
        computed3.flags |= 4 | 16;
        for (let l3 = computed3.deps; l3; l3 = l3.nextDep) {
          addSub(l3);
        }
      }
      const currentTail = link.dep.subs;
      if (currentTail !== link) {
        link.prevSub = currentTail;
        if (currentTail) currentTail.nextSub = link;
      }
      if (link.dep.subsHead === void 0) {
        link.dep.subsHead = link;
      }
      link.dep.subs = link;
    }
  }
  var targetMap = /* @__PURE__ */ new WeakMap();
  var ITERATE_KEY = /* @__PURE__ */ Symbol(
    true ? "Object iterate" : ""
  );
  var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
    true ? "Map keys iterate" : ""
  );
  var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
    true ? "Array iterate" : ""
  );
  function track(target, type, key) {
    if (shouldTrack && activeSub) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = new Dep());
        dep.map = depsMap;
        dep.key = key;
      }
      if (true) {
        dep.track({
          target,
          type,
          key
        });
      } else {
        dep.track();
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      globalVersion++;
      return;
    }
    const run = (dep) => {
      if (dep) {
        if (true) {
          dep.trigger({
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
          });
        } else {
          dep.trigger();
        }
      }
    };
    startBatch();
    if (type === "clear") {
      depsMap.forEach(run);
    } else {
      const targetIsArray = isArray(target);
      const isArrayIndex = targetIsArray && isIntegerKey(key);
      if (targetIsArray && key === "length") {
        const newLength = Number(newValue);
        depsMap.forEach((dep, key2) => {
          if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
            run(dep);
          }
        });
      } else {
        if (key !== void 0 || depsMap.has(void 0)) {
          run(depsMap.get(key));
        }
        if (isArrayIndex) {
          run(depsMap.get(ARRAY_ITERATE_KEY));
        }
        switch (type) {
          case "add":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            } else if (isArrayIndex) {
              run(depsMap.get("length"));
            }
            break;
          case "delete":
            if (!targetIsArray) {
              run(depsMap.get(ITERATE_KEY));
              if (isMap(target)) {
                run(depsMap.get(MAP_KEY_ITERATE_KEY));
              }
            }
            break;
          case "set":
            if (isMap(target)) {
              run(depsMap.get(ITERATE_KEY));
            }
            break;
        }
      }
    }
    endBatch();
  }
  function reactiveReadArray(array) {
    const raw = /* @__PURE__ */ toRaw(array);
    if (raw === array) return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    if (/* @__PURE__ */ isShallow(array)) return raw;
    if (!/* @__PURE__ */ isReadonly(array)) return raw.map(toReactive);
    return /* @__PURE__ */ isReactive(array) ? raw.map((item) => toReadonly(toReactive(item))) : raw.map(toReadonly);
  }
  function shallowReadArray(arr) {
    track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
  }
  function toWrapped(target, item) {
    if (/* @__PURE__ */ isReadonly(target)) {
      return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
    }
    return toReactive(item);
  }
  var arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator]() {
      return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
    },
    concat(...args) {
      return reactiveReadArray(this).concat(
        ...args.map((x2) => isArray(x2) ? reactiveReadArray(x2) : x2)
      );
    },
    entries() {
      return iterator(this, "entries", (value) => {
        value[1] = toWrapped(this, value[1]);
        return value;
      });
    },
    every(fn3, thisArg) {
      return apply(this, "every", fn3, thisArg, void 0, arguments);
    },
    filter(fn3, thisArg) {
      return apply(
        this,
        "filter",
        fn3,
        thisArg,
        (v2) => v2.map((item) => toWrapped(this, item)),
        arguments
      );
    },
    find(fn3, thisArg) {
      return apply(
        this,
        "find",
        fn3,
        thisArg,
        (item) => toWrapped(this, item),
        arguments
      );
    },
    findIndex(fn3, thisArg) {
      return apply(this, "findIndex", fn3, thisArg, void 0, arguments);
    },
    findLast(fn3, thisArg) {
      return apply(
        this,
        "findLast",
        fn3,
        thisArg,
        (item) => toWrapped(this, item),
        arguments
      );
    },
    findLastIndex(fn3, thisArg) {
      return apply(this, "findLastIndex", fn3, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach(fn3, thisArg) {
      return apply(this, "forEach", fn3, thisArg, void 0, arguments);
    },
    includes(...args) {
      return searchProxy(this, "includes", args);
    },
    indexOf(...args) {
      return searchProxy(this, "indexOf", args);
    },
    join(separator) {
      return reactiveReadArray(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimization required
    lastIndexOf(...args) {
      return searchProxy(this, "lastIndexOf", args);
    },
    map(fn3, thisArg) {
      return apply(this, "map", fn3, thisArg, void 0, arguments);
    },
    pop() {
      return noTracking(this, "pop");
    },
    push(...args) {
      return noTracking(this, "push", args);
    },
    reduce(fn3, ...args) {
      return reduce(this, "reduce", fn3, args);
    },
    reduceRight(fn3, ...args) {
      return reduce(this, "reduceRight", fn3, args);
    },
    shift() {
      return noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some(fn3, thisArg) {
      return apply(this, "some", fn3, thisArg, void 0, arguments);
    },
    splice(...args) {
      return noTracking(this, "splice", args);
    },
    toReversed() {
      return reactiveReadArray(this).toReversed();
    },
    toSorted(comparer) {
      return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced(...args) {
      return reactiveReadArray(this).toSpliced(...args);
    },
    unshift(...args) {
      return noTracking(this, "unshift", args);
    },
    values() {
      return iterator(this, "values", (item) => toWrapped(this, item));
    }
  };
  function iterator(self2, method, wrapValue) {
    const arr = shallowReadArray(self2);
    const iter = arr[method]();
    if (arr !== self2 && !/* @__PURE__ */ isShallow(self2)) {
      iter._next = iter.next;
      iter.next = () => {
        const result = iter._next();
        if (!result.done) {
          result.value = wrapValue(result.value);
        }
        return result;
      };
    }
    return iter;
  }
  var arrayProto = Array.prototype;
  function apply(self2, method, fn3, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self2);
    const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
    const methodFn = arr[method];
    if (methodFn !== arrayProto[method]) {
      const result2 = methodFn.apply(self2, args);
      return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn = fn3;
    if (arr !== self2) {
      if (needsWrap) {
        wrappedFn = function(item, index) {
          return fn3.call(this, toWrapped(self2, item), index, self2);
        };
      } else if (fn3.length > 2) {
        wrappedFn = function(item, index) {
          return fn3.call(this, item, index, self2);
        };
      }
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
  }
  function reduce(self2, method, fn3, args) {
    const arr = shallowReadArray(self2);
    const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
    let wrappedFn = fn3;
    let wrapInitialAccumulator = false;
    if (arr !== self2) {
      if (needsWrap) {
        wrapInitialAccumulator = args.length === 0;
        wrappedFn = function(acc, item, index) {
          if (wrapInitialAccumulator) {
            wrapInitialAccumulator = false;
            acc = toWrapped(self2, acc);
          }
          return fn3.call(this, acc, toWrapped(self2, item), index, self2);
        };
      } else if (fn3.length > 3) {
        wrappedFn = function(acc, item, index) {
          return fn3.call(this, acc, item, index, self2);
        };
      }
    }
    const result = arr[method](wrappedFn, ...args);
    return wrapInitialAccumulator ? toWrapped(self2, result) : result;
  }
  function searchProxy(self2, method, args) {
    const arr = /* @__PURE__ */ toRaw(self2);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
      args[0] = /* @__PURE__ */ toRaw(args[0]);
      return arr[method](...args);
    }
    return res;
  }
  function noTracking(self2, method, args = []) {
    pauseTracking();
    startBatch();
    const res = (/* @__PURE__ */ toRaw(self2))[method].apply(self2, args);
    endBatch();
    resetTracking();
    return res;
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  function hasOwnProperty2(key) {
    if (!isSymbol(key)) key = String(key);
    const obj = /* @__PURE__ */ toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  var BaseReactiveHandler = class {
    constructor(_isReadonly = false, _isShallow = false) {
      this._isReadonly = _isReadonly;
      this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
      if (key === "__v_skip") return target["__v_skip"];
      const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return isShallow2;
      } else if (key === "__v_raw") {
        if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
        // this means the receiver is a user proxy of the reactive proxy
        Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
          return target;
        }
        return;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2) {
        let fn3;
        if (targetIsArray && (fn3 = arrayInstrumentations[key])) {
          return fn3;
        }
        if (key === "hasOwnProperty") {
          return hasOwnProperty2;
        }
      }
      const res = Reflect.get(
        target,
        key,
        // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        /* @__PURE__ */ isRef(target) ? target : receiver
      );
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (isShallow2) {
        return res;
      }
      if (/* @__PURE__ */ isRef(res)) {
        const value = targetIsArray && isIntegerKey(key) ? res : res.value;
        return isReadonly2 && isObject(value) ? /* @__PURE__ */ readonly(value) : value;
      }
      if (isObject(res)) {
        return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
      }
      return res;
    }
  };
  var MutableReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(false, isShallow2);
    }
    set(target, key, value, receiver) {
      let oldValue = target[key];
      const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
      if (!this._isShallow) {
        const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
        if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
          oldValue = /* @__PURE__ */ toRaw(oldValue);
          value = /* @__PURE__ */ toRaw(value);
        }
        if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
          if (isOldValueReadonly) {
            if (true) {
              warn(
                `Set operation on key "${String(key)}" failed: target is readonly.`,
                target[key]
              );
            }
            return true;
          } else {
            oldValue.value = value;
            return true;
          }
        }
      }
      const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(
        target,
        key,
        value,
        /* @__PURE__ */ isRef(target) ? target : receiver
      );
      if (target === /* @__PURE__ */ toRaw(receiver) && result) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    }
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    has(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    ownKeys(target) {
      track(
        target,
        "iterate",
        isArray(target) ? "length" : ITERATE_KEY
      );
      return Reflect.ownKeys(target);
    }
  };
  var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(true, isShallow2);
    }
    set(target, key) {
      if (true) {
        warn(
          `Set operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
    deleteProperty(target, key) {
      if (true) {
        warn(
          `Delete operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
  };
  var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
  var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
  var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
  var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
  var toShallow = (value) => value;
  var getProto = (v2) => Reflect.getPrototypeOf(v2);
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
      return extend(
        // inheriting all iterator properties
        Object.create(innerIterator),
        {
          // iterator protocol
          next() {
            const { value, done } = innerIterator.next();
            return done ? { value, done } : {
              value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
              done
            };
          }
        }
      );
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        warn(
          `${capitalize(type)} operation ${key}failed: target is readonly.`,
          /* @__PURE__ */ toRaw(this)
        );
      }
      return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
  }
  function createInstrumentations(readonly2, shallow) {
    const instrumentations = {
      get(key) {
        const target = this["__v_raw"];
        const rawTarget = /* @__PURE__ */ toRaw(target);
        const rawKey = /* @__PURE__ */ toRaw(key);
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "get", key);
          }
          track(rawTarget, "get", rawKey);
        }
        const { has } = getProto(rawTarget);
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
        if (has.call(rawTarget, key)) {
          return wrap(target.get(key));
        } else if (has.call(rawTarget, rawKey)) {
          return wrap(target.get(rawKey));
        } else if (target !== rawTarget) {
          target.get(key);
        }
      },
      get size() {
        const target = this["__v_raw"];
        !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
        return target.size;
      },
      has(key) {
        const target = this["__v_raw"];
        const rawTarget = /* @__PURE__ */ toRaw(target);
        const rawKey = /* @__PURE__ */ toRaw(key);
        if (!readonly2) {
          if (hasChanged(key, rawKey)) {
            track(rawTarget, "has", key);
          }
          track(rawTarget, "has", rawKey);
        }
        return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
      },
      forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = /* @__PURE__ */ toRaw(target);
        const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
        !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key) => {
          return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
      }
    };
    extend(
      instrumentations,
      readonly2 ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
      } : {
        add(value) {
          const target = /* @__PURE__ */ toRaw(this);
          const proto = getProto(target);
          const rawValue = /* @__PURE__ */ toRaw(value);
          const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
          const hadKey = proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue);
          if (!hadKey) {
            target.add(valueToAdd);
            trigger(target, "add", valueToAdd, valueToAdd);
          }
          return this;
        },
        set(key, value) {
          if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
            value = /* @__PURE__ */ toRaw(value);
          }
          const target = /* @__PURE__ */ toRaw(this);
          const { has, get } = getProto(target);
          let hadKey = has.call(target, key);
          if (!hadKey) {
            key = /* @__PURE__ */ toRaw(key);
            hadKey = has.call(target, key);
          } else if (true) {
            checkIdentityKeys(target, has, key);
          }
          const oldValue = get.call(target, key);
          target.set(key, value);
          if (!hadKey) {
            trigger(target, "add", key, value);
          } else if (hasChanged(value, oldValue)) {
            trigger(target, "set", key, value, oldValue);
          }
          return this;
        },
        delete(key) {
          const target = /* @__PURE__ */ toRaw(this);
          const { has, get } = getProto(target);
          let hadKey = has.call(target, key);
          if (!hadKey) {
            key = /* @__PURE__ */ toRaw(key);
            hadKey = has.call(target, key);
          } else if (true) {
            checkIdentityKeys(target, has, key);
          }
          const oldValue = get ? get.call(target, key) : void 0;
          const result = target.delete(key);
          if (hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
          }
          return result;
        },
        clear() {
          const target = /* @__PURE__ */ toRaw(this);
          const hadItems = target.size !== 0;
          const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
          const result = target.clear();
          if (hadItems) {
            trigger(
              target,
              "clear",
              void 0,
              void 0,
              oldTarget
            );
          }
          return result;
        }
      }
    );
    const iteratorMethods = [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ];
    iteratorMethods.forEach((method) => {
      instrumentations[method] = createIterableMethod(method, readonly2, shallow);
    });
    return instrumentations;
  }
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(
        hasOwn(instrumentations, key) && key in target ? instrumentations : target,
        key,
        receiver
      );
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has, key) {
    const rawKey = /* @__PURE__ */ toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
      const type = toRawType(target);
      warn(
        `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function reactive(target) {
    if (/* @__PURE__ */ isReadonly(target)) {
      return target;
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap
    );
  }
  // @__NO_SIDE_EFFECTS__
  function shallowReactive(target) {
    return createReactiveObject(
      target,
      false,
      shallowReactiveHandlers,
      shallowCollectionHandlers,
      shallowReactiveMap
    );
  }
  // @__NO_SIDE_EFFECTS__
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap
    );
  }
  // @__NO_SIDE_EFFECTS__
  function shallowReadonly(target) {
    return createReactiveObject(
      target,
      true,
      shallowReadonlyHandlers,
      shallowReadonlyCollectionHandlers,
      shallowReadonlyMap
    );
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        warn(
          `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
            target
          )}`
        );
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    if (target["__v_skip"] || !Object.isExtensible(target)) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = targetTypeMap(toRawType(target));
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(
      target,
      targetType === 2 ? collectionHandlers : baseHandlers
    );
    proxyMap.set(target, proxy);
    return proxy;
  }
  // @__NO_SIDE_EFFECTS__
  function isReactive(value) {
    if (/* @__PURE__ */ isReadonly(value)) {
      return /* @__PURE__ */ isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  // @__NO_SIDE_EFFECTS__
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  // @__NO_SIDE_EFFECTS__
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  // @__NO_SIDE_EFFECTS__
  function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
  }
  // @__NO_SIDE_EFFECTS__
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? /* @__PURE__ */ toRaw(raw) : observed;
  }
  function markRaw(value) {
    if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
      def(value, "__v_skip", true);
    }
    return value;
  }
  var toReactive = (value) => isObject(value) ? /* @__PURE__ */ reactive(value) : value;
  var toReadonly = (value) => isObject(value) ? /* @__PURE__ */ readonly(value) : value;
  // @__NO_SIDE_EFFECTS__
  function isRef(r2) {
    return r2 ? r2["__v_isRef"] === true : false;
  }
  // @__NO_SIDE_EFFECTS__
  function ref(value) {
    return createRef(value, false);
  }
  function createRef(rawValue, shallow) {
    if (/* @__PURE__ */ isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  var RefImpl = class {
    constructor(value, isShallow2) {
      this.dep = new Dep();
      this["__v_isRef"] = true;
      this["__v_isShallow"] = false;
      this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
      this._value = isShallow2 ? value : toReactive(value);
      this["__v_isShallow"] = isShallow2;
    }
    get value() {
      if (true) {
        this.dep.track({
          target: this,
          type: "get",
          key: "value"
        });
      } else {
        this.dep.track();
      }
      return this._value;
    }
    set value(newValue) {
      const oldValue = this._rawValue;
      const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
      newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
      if (hasChanged(newValue, oldValue)) {
        this._rawValue = newValue;
        this._value = useDirectValue ? newValue : toReactive(newValue);
        if (true) {
          this.dep.trigger({
            target: this,
            type: "set",
            key: "value",
            newValue,
            oldValue
          });
        } else {
          this.dep.trigger();
        }
      }
    }
  };
  function unref(ref2) {
    return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var ComputedRefImpl = class {
    constructor(fn3, setter, isSSR) {
      this.fn = fn3;
      this.setter = setter;
      this._value = void 0;
      this.dep = new Dep(this);
      this.__v_isRef = true;
      this.deps = void 0;
      this.depsTail = void 0;
      this.flags = 16;
      this.globalVersion = globalVersion - 1;
      this.next = void 0;
      this.effect = this;
      this["__v_isReadonly"] = !setter;
      this.isSSR = isSSR;
    }
    /**
     * @internal
     */
    notify() {
      this.flags |= 16;
      if (!(this.flags & 8) && // avoid infinite self recursion
      activeSub !== this) {
        batch(this, true);
        return true;
      } else if (true) ;
    }
    get value() {
      const link = true ? this.dep.track({
        target: this,
        type: "get",
        key: "value"
      }) : this.dep.track();
      refreshComputed(this);
      if (link) {
        link.version = this.dep.version;
      }
      return this._value;
    }
    set value(newValue) {
      if (this.setter) {
        this.setter(newValue);
      } else if (true) {
        warn("Write operation failed: computed value is readonly");
      }
    }
  };
  // @__NO_SIDE_EFFECTS__
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if (isFunction(getterOrOptions)) {
      getter = getterOrOptions;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR);
    if (debugOptions && !isSSR) {
      cRef.onTrack = debugOptions.onTrack;
      cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  var INITIAL_WATCHER_VALUE = {};
  var cleanupMap = /* @__PURE__ */ new WeakMap();
  var activeWatcher = void 0;
  function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
    if (owner) {
      let cleanups = cleanupMap.get(owner);
      if (!cleanups) cleanupMap.set(owner, cleanups = []);
      cleanups.push(cleanupFn);
    } else if (!failSilently) {
      warn(
        `onWatcherCleanup() was called when there was no active watcher to associate with.`
      );
    }
  }
  function watch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options;
    const warnInvalidSource = (s3) => {
      (options.onWarn || warn)(
        `Invalid watch source: `,
        s3,
        `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
      );
    };
    const reactiveGetter = (source2) => {
      if (deep) return source2;
      if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0)
        return traverse(source2, 1);
      return traverse(source2);
    };
    let effect2;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if (/* @__PURE__ */ isRef(source)) {
      getter = () => source.value;
      forceTrigger = /* @__PURE__ */ isShallow(source);
    } else if (/* @__PURE__ */ isReactive(source)) {
      getter = () => reactiveGetter(source);
      forceTrigger = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s3) => /* @__PURE__ */ isReactive(s3) || /* @__PURE__ */ isShallow(s3));
      getter = () => source.map((s3) => {
        if (/* @__PURE__ */ isRef(s3)) {
          return s3.value;
        } else if (/* @__PURE__ */ isReactive(s3)) {
          return reactiveGetter(s3);
        } else if (isFunction(s3)) {
          return call ? call(s3, 2) : s3();
        } else {
          warnInvalidSource(s3);
        }
      });
    } else if (isFunction(source)) {
      if (cb) {
        getter = call ? () => call(source, 2) : source;
      } else {
        getter = () => {
          if (cleanup) {
            pauseTracking();
            try {
              cleanup();
            } finally {
              resetTracking();
            }
          }
          const currentEffect = activeWatcher;
          activeWatcher = effect2;
          try {
            return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
          } finally {
            activeWatcher = currentEffect;
          }
        };
      }
    } else {
      getter = NOOP;
      warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      const depth = deep === true ? Infinity : deep;
      getter = () => traverse(baseGetter(), depth);
    }
    const scope = getCurrentScope();
    const watchHandle = () => {
      effect2.stop();
      if (scope && scope.active) {
        remove(scope.effects, effect2);
      }
    };
    if (once && cb) {
      const _cb = cb;
      cb = (...args) => {
        const res = _cb(...args);
        watchHandle();
        return res;
      };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun) => {
      if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (immediateFirstRun || deep || forceTrigger || (isMultiSource ? newValue.some((v2, i2) => hasChanged(v2, oldValue[i2])) : hasChanged(newValue, oldValue))) {
          if (cleanup) {
            cleanup();
          }
          const currentWatcher = activeWatcher;
          activeWatcher = effect2;
          try {
            const args = [
              newValue,
              // pass undefined as the old value when it's changed for the first time
              oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
              boundCleanup
            ];
            oldValue = newValue;
            call ? call(cb, 3, args) : (
              // @ts-expect-error
              cb(...args)
            );
          } finally {
            activeWatcher = currentWatcher;
          }
        }
      } else {
        effect2.run();
      }
    };
    if (augmentJob) {
      augmentJob(job);
    }
    effect2 = new ReactiveEffect(getter);
    effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
    boundCleanup = (fn3) => onWatcherCleanup(fn3, false, effect2);
    cleanup = effect2.onStop = () => {
      const cleanups = cleanupMap.get(effect2);
      if (cleanups) {
        if (call) {
          call(cleanups, 4);
        } else {
          for (const cleanup2 of cleanups) cleanup2();
        }
        cleanupMap.delete(effect2);
      }
    };
    if (true) {
      effect2.onTrack = options.onTrack;
      effect2.onTrigger = options.onTrigger;
    }
    if (cb) {
      if (immediate) {
        job(true);
      } else {
        oldValue = effect2.run();
      }
    } else if (scheduler) {
      scheduler(job.bind(null, true), true);
    } else {
      effect2.run();
    }
    watchHandle.pause = effect2.pause.bind(effect2);
    watchHandle.resume = effect2.resume.bind(effect2);
    watchHandle.stop = watchHandle;
    return watchHandle;
  }
  function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen = seen || /* @__PURE__ */ new Map();
    if ((seen.get(value) || 0) >= depth) {
      return value;
    }
    seen.set(value, depth);
    depth--;
    if (/* @__PURE__ */ isRef(value)) {
      traverse(value.value, depth, seen);
    } else if (isArray(value)) {
      for (let i2 = 0; i2 < value.length; i2++) {
        traverse(value[i2], depth, seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v2) => {
        traverse(v2, depth, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen);
      }
      for (const key of Object.getOwnPropertySymbols(value)) {
        if (Object.prototype.propertyIsEnumerable.call(value, key)) {
          traverse(value[key], depth, seen);
        }
      }
    }
    return value;
  }

  // ../../node_modules/.pnpm/@vue+runtime-core@3.5.43/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  var stack = [];
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  var isWarning = false;
  function warn$1(msg, ...args) {
    if (isWarning) return;
    isWarning = true;
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(
        appWarnHandler,
        instance,
        11,
        [
          // eslint-disable-next-line no-restricted-syntax
          msg + args.map((a2) => {
            var _a2, _b;
            return (_b = (_a2 = a2.toString) == null ? void 0 : _a2.call(a2)) != null ? _b : JSON.stringify(a2);
          }).join(""),
          instance && instance.proxy,
          trace.map(
            ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
          ).join("\n"),
          trace
        ]
      );
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && // avoid spamming console during tests
      true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
      console.warn(...warnArgs);
    }
    resetTracking();
    isWarning = false;
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i2) => {
      logs.push(...i2 === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(
      vnode.component,
      vnode.type,
      isRoot
    )}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  var ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush",
    [15]: "component update",
    [16]: "app unmount cleanup function"
  };
  function callWithErrorHandling(fn3, instance, type, args) {
    try {
      return args ? fn3(...args) : fn3();
    } catch (err) {
      handleError(err, instance, type);
    }
  }
  function callWithAsyncErrorHandling(fn3, instance, type, args) {
    if (isFunction(fn3)) {
      const res = callWithErrorHandling(fn3, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    if (isArray(fn3)) {
      const values = [];
      for (let i2 = 0; i2 < fn3.length; i2++) {
        values.push(callWithAsyncErrorHandling(fn3[i2], instance, type, args));
      }
      return values;
    } else if (true) {
      warn$1(
        `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn3}`
      );
    }
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = true ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i2 = 0; i2 < errorCapturedHooks.length; i2++) {
            if (errorCapturedHooks[i2](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      if (errorHandler) {
        pauseTracking();
        callWithErrorHandling(errorHandler, null, 10, [
          err,
          exposedInstance,
          errorInfo
        ]);
        resetTracking();
        return;
      }
    }
    logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
  }
  function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
    if (true) {
      const info = ErrorTypeStrings$1[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
        console.error(err);
      }
    } else if (throwInProd) {
      throw err;
    } else {
      console.error(err);
    }
  }
  var queue = [];
  var flushIndex = -1;
  var pendingPostFlushCbs = [];
  var activePostFlushCbs = null;
  var postFlushIndex = 0;
  var resolvedPromise = /* @__PURE__ */ Promise.resolve();
  var currentFlushPromise = null;
  var RECURSION_LIMIT = 100;
  function nextTick(fn3) {
    const p3 = currentFlushPromise || resolvedPromise;
    return fn3 ? p3.then(this ? fn3.bind(this) : fn3) : p3;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJob = queue[middle];
      const middleJobId = getId(middleJob);
      if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }
    return start;
  }
  function queueJob(job) {
    if (!(job.flags & 1)) {
      const jobId = getId(job);
      const lastJob = queue[queue.length - 1];
      if (!lastJob || // fast path when the job id is larger than the tail
      !(job.flags & 2) && jobId >= getId(lastJob)) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(jobId), 0, job);
      }
      job.flags |= 1;
      queueFlush();
    }
  }
  function queueFlush() {
    if (!currentFlushPromise) {
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (activePostFlushCbs && cb.id === -1) {
        activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
      } else if (!(cb.flags & 1)) {
        pendingPostFlushCbs.push(cb);
        cb.flags |= 1;
      }
    } else {
      for (let i2 = 0; i2 < cb.length; i2++) {
        pendingPostFlushCbs.push(cb[i2]);
      }
    }
    queueFlush();
  }
  function flushPreFlushCbs(instance, seen, i2 = flushIndex + 1) {
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (; i2 < queue.length; i2++) {
      const cb = queue[i2];
      if (cb && cb.flags & 2) {
        if (instance && cb.id !== instance.uid) {
          continue;
        }
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        queue.splice(i2, 1);
        i2--;
        if (cb.flags & 4) {
          cb.flags &= -2;
        }
        cb();
        if (!(cb.flags & 4)) {
          cb.flags &= -2;
        }
      }
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)].sort(
        (a2, b2) => getId(a2) - getId(b2)
      );
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        for (let i2 = 0; i2 < deduped.length; i2++) {
          activePostFlushCbs.push(deduped[i2]);
        }
        return;
      }
      activePostFlushCbs = deduped;
      if (true) {
        seen = seen || /* @__PURE__ */ new Map();
      }
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        const cb = activePostFlushCbs[postFlushIndex];
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        if (cb.flags & 4) {
          cb.flags &= -2;
        }
        if (!(cb.flags & 8)) cb();
        cb.flags &= -2;
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
  function flushJobs(seen) {
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    const check = true ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && !(job.flags & 8)) {
          if (check(job)) {
            continue;
          }
          if (job.flags & 4) {
            job.flags &= ~1;
          }
          callWithErrorHandling(
            job,
            job.i,
            job.i ? 15 : 14
          );
          if (!(job.flags & 4)) {
            job.flags &= ~1;
          }
        }
      }
    } finally {
      for (; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job) {
          job.flags &= -2;
        }
      }
      flushIndex = -1;
      queue.length = 0;
      flushPostFlushCbs(seen);
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  function checkRecursiveUpdates(seen, fn3) {
    const count = seen.get(fn3) || 0;
    if (count > RECURSION_LIMIT) {
      const instance = fn3.i;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    }
    seen.set(fn3, count + 1);
    return false;
  }
  var isHmrUpdating = false;
  var setHmrUpdating = (v2) => {
    try {
      return isHmrUpdating;
    } finally {
      isHmrUpdating = v2;
    }
  };
  var hmrDirtyComponents = /* @__PURE__ */ new Map();
  if (true) {
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  var map = /* @__PURE__ */ new Map();
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render = newRender;
    [...record.instances].forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
        normalizeClassComponent(instance.type).render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      if (!(instance.job.flags & 8)) {
        instance.update();
      }
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record) return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [...record.instances];
    for (let i2 = 0; i2 < instances.length; i2++) {
      const instance = instances[i2];
      const oldComp = normalizeClassComponent(instance.type);
      let dirtyInstances = hmrDirtyComponents.get(oldComp);
      if (!dirtyInstances) {
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
      }
      dirtyInstances.add(instance);
      instance.appContext.propsCache.delete(instance.type);
      instance.appContext.emitsCache.delete(instance.type);
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        dirtyInstances.add(instance);
        instance.ceReload(newComp.styles);
        dirtyInstances.delete(instance);
      } else if (instance.parent) {
        queueJob(() => {
          if (!(instance.job.flags & 8)) {
            isHmrUpdating = true;
            instance.parent.update();
            isHmrUpdating = false;
            dirtyInstances.delete(instance);
          }
        });
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
        console.warn(
          "[HMR] Root or manually mounted instance modified. Full reload required."
        );
      }
      if (instance.root.ce && instance !== instance.root) {
        instance.root.ce._removeChildStyle(oldComp);
      }
    }
    queuePostFlushCb(() => {
      hmrDirtyComponents.clear();
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !== "__file" && !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn3) {
    return (id, arg) => {
      try {
        return fn3(id, arg);
      } catch (e3) {
        console.error(e3);
        console.warn(
          `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
        );
      }
    };
  }
  var devtools$1;
  var buffer = [];
  var devtoolsNotInstalled = false;
  function emit$1(event, ...args) {
    if (devtools$1) {
      devtools$1.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook$1(hook, target) {
    var _a2, _b;
    devtools$1 = hook;
    if (devtools$1) {
      devtools$1.enabled = true;
      buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
      buffer = [];
    } else if (
      // handle late devtools injection - only do this if we are in an actual
      // browser environment to avoid the timer handle stalling test runner exit
      // (#4815)
      typeof window !== "undefined" && // some envs mock window but not fully
      window.HTMLElement && // also exclude jsdom
      // eslint-disable-next-line no-restricted-syntax
      !((_b = (_a2 = window.navigator) == null ? void 0 : _a2.userAgent) == null ? void 0 : _b.includes("jsdom"))
    ) {
      const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) => {
        setDevtoolsHook$1(newHook, target);
      });
      setTimeout(() => {
        if (!devtools$1) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled = true;
      buffer = [];
    }
  }
  function devtoolsInitApp(app, version2) {
    emit$1("app:init", app, version2, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    emit$1("app:unmount", app);
  }
  var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:added"
    /* COMPONENT_ADDED */
  );
  var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:updated"
    /* COMPONENT_UPDATED */
  );
  var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:removed"
    /* COMPONENT_REMOVED */
  );
  var devtoolsComponentRemoved = (component) => {
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) {
      _devtoolsComponentRemoved(component);
    }
  };
  // @__NO_SIDE_EFFECTS__
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      emit$1(
        hook,
        component.appContext.app,
        component.uid,
        component.parent ? component.parent.uid : void 0,
        component
      );
    };
  }
  var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
    "perf:start"
    /* PERFORMANCE_START */
  );
  var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
    "perf:end"
    /* PERFORMANCE_END */
  );
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit$1(
      "component:emit",
      component.appContext.app,
      component,
      event,
      params
    );
  }
  var currentRenderingInstance = null;
  var currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function withCtx(fn3, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx) return fn3;
    if (fn3._n) {
      return fn3;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      const prevStackSize = blockStack.length;
      let res;
      try {
        res = fn3(...args);
      } finally {
        for (let i2 = blockStack.length; i2 > prevStackSize; i2--) closeBlock();
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      if (true) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn$1("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i2 = 0; i2 < bindings.length; i2++) {
      const binding = bindings[i2];
      if (oldBindings) {
        binding.oldValue = oldBindings[i2].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  function provide(key, value) {
    if (true) {
      if (!currentInstance || currentInstance.isMounted) {
        warn$1(`provide() can only be used inside setup().`);
      }
    }
    if (currentInstance) {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = getCurrentInstance();
    if (instance || currentApp) {
      let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
      } else if (true) {
        warn$1(`injection "${String(key)}" not found.`);
      }
    } else if (true) {
      warn$1(`inject() can only be used inside setup() or functional components.`);
    }
  }
  function hasInjectionContext() {
    return !!(getCurrentInstance() || currentApp);
  }
  var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
  var useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      if (!ctx) {
        warn$1(
          `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
        );
      }
      return ctx;
    }
  };
  function watchEffect(effect2, options) {
    return doWatch(effect2, null, options);
  }
  function watch2(source, cb, options) {
    if (!isFunction(cb)) {
      warn$1(
        `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
      );
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, options = EMPTY_OBJ) {
    const { immediate, deep, flush, once } = options;
    if (!cb) {
      if (immediate !== void 0) {
        warn$1(
          `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (deep !== void 0) {
        warn$1(
          `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (once !== void 0) {
        warn$1(
          `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
    }
    const baseWatchOptions = extend({}, options);
    if (true) baseWatchOptions.onWarn = warn$1;
    const runsImmediately = cb && immediate || !cb && flush !== "post";
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else if (!runsImmediately) {
        const watchStopHandle = () => {
        };
        watchStopHandle.stop = NOOP;
        watchStopHandle.resume = NOOP;
        watchStopHandle.pause = NOOP;
        return watchStopHandle;
      }
    }
    const instance = currentInstance;
    baseWatchOptions.call = (fn3, type, args) => callWithAsyncErrorHandling(fn3, instance, type, args);
    let isPre = false;
    if (flush === "post") {
      baseWatchOptions.scheduler = (job) => {
        queuePostRenderEffect(job, instance && instance.suspense);
      };
    } else if (flush !== "sync") {
      isPre = true;
      baseWatchOptions.scheduler = (job, isFirstRun) => {
        if (isFirstRun) {
          job();
        } else {
          queueJob(job);
        }
      };
    }
    baseWatchOptions.augmentJob = (job) => {
      if (cb) {
        job.flags |= 4;
      }
      if (isPre) {
        job.flags |= 2;
        if (instance) {
          job.id = instance.uid;
          job.i = instance;
        }
      }
    };
    const watchHandle = watch(source, cb, baseWatchOptions);
    if (isInSSRComponentSetup) {
      if (ssrCleanup) {
        ssrCleanup.push(watchHandle);
      } else if (runsImmediately) {
        watchHandle();
      }
    }
    return watchHandle;
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i2 = 0; i2 < segments.length && cur; i2++) {
        cur = cur[segments[i2]];
      }
      return cur;
    };
  }
  var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
  var isTeleport = (type) => type.__isTeleport;
  var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
  function findNonCommentChild(children) {
    let child = children[0];
    if (children.length > 1) {
      let hasFound = false;
      for (const c2 of children) {
        if (c2.type !== Comment) {
          if (hasFound) {
            warn$1(
              "<transition> can only be used on a single element or component. Use <transition-group> for lists."
            );
            break;
          }
          child = c2;
          hasFound = true;
          if (false) break;
        }
      }
    }
    return child;
  }
  function getInnerChild$1(vnode) {
    if (!isKeepAlive(vnode)) {
      if (isTeleport(vnode.type) && vnode.children) {
        return findNonCommentChild(vnode.children);
      }
      return vnode;
    }
    if (vnode.component) {
      return vnode.component.subTree;
    }
    const { shapeFlag, children } = vnode;
    if (children) {
      if (shapeFlag & 16) {
        return children[0];
      }
      if (shapeFlag & 32 && isFunction(children.default)) {
        return children.default();
      }
    }
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      vnode.transition = hooks;
      const subTree = vnode.component.subTree;
      setTransitionHooks(
        isTeleport(subTree.type) ? getInnerChild$1(subTree) || subTree : subTree,
        hooks
      );
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  // @__NO_SIDE_EFFECTS__
  function defineComponent(options, extraOptions) {
    return isFunction(options) ? (
      // #8236: extend call and options.name access are considered side-effects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
    ) : options;
  }
  function markAsyncBoundary(instance) {
    instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
  }
  var knownTemplateRefs = /* @__PURE__ */ new WeakSet();
  function isTemplateRefKey(refs, key) {
    let desc;
    return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
  }
  var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach(
        (r2, i2) => setRef(
          r2,
          oldRawRef && (isArray(oldRawRef) ? oldRawRef[i2] : oldRawRef),
          parentSuspense,
          vnode,
          isUnmount
        )
      );
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
        setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
      }
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (!owner) {
      warn$1(
        `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
      );
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    const rawSetupState = toRaw(setupState);
    const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
      if (true) {
        if (hasOwn(rawSetupState, key) && !isRef(rawSetupState[key])) {
          warn$1(
            `Template ref "${key}" used on a non-ref value. It will not work in the production build.`
          );
        }
        if (knownTemplateRefs.has(rawSetupState[key])) {
          return false;
        }
      }
      if (isTemplateRefKey(refs, key)) {
        return false;
      }
      return hasOwn(rawSetupState, key);
    };
    const canSetRef = (ref22, key) => {
      if (knownTemplateRefs.has(ref22)) {
        return false;
      }
      if (key && isTemplateRefKey(refs, key)) {
        return false;
      }
      return true;
    };
    if (oldRef != null && oldRef !== ref2) {
      invalidatePendingSetRef(oldRawRef);
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (canSetSetupRef(oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        const oldRawRefAtom = oldRawRef;
        if (canSetRef(oldRef, oldRawRefAtom.k)) {
          oldRef.value = null;
        }
        if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
      }
    }
    if (isFunction(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : canSetRef(ref2) || !rawRef.k ? ref2.value : refs[rawRef.k];
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (canSetSetupRef(ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  const newVal = [refValue];
                  if (canSetRef(ref2, rawRef.k)) {
                    ref2.value = newVal;
                  }
                  if (rawRef.k) refs[rawRef.k] = newVal;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (canSetSetupRef(ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            if (canSetRef(ref2, rawRef.k)) {
              ref2.value = value;
            }
            if (rawRef.k) refs[rawRef.k] = value;
          } else if (true) {
            warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
          }
        };
        if (value) {
          const job = () => {
            doSet();
            pendingSetRefMap.delete(rawRef);
          };
          job.id = -1;
          pendingSetRefMap.set(rawRef, job);
          queuePostRenderEffect(job, parentSuspense);
        } else {
          invalidatePendingSetRef(rawRef);
          doSet();
        }
      } else if (true) {
        warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
      }
    }
  }
  function invalidatePendingSetRef(rawRef) {
    const pendingSetRef = pendingSetRefMap.get(rawRef);
    if (pendingSetRef) {
      pendingSetRef.flags |= 8;
      pendingSetRefMap.delete(rawRef);
    }
  }
  var requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
  var cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
  var isAsyncWrapper = (i2) => !!i2.type.__asyncLoader;
  var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        pauseTracking();
        const reset = setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        reset();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (true) {
      const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
      warn$1(
        `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
      );
    }
  }
  var createHook = (lifecycle) => (hook, target = currentInstance) => {
    if (!isInSSRComponentSetup || lifecycle === "sp") {
      injectHook(lifecycle, (...args) => hook(...args), target);
    }
  };
  var onBeforeMount = createHook("bm");
  var onMounted = createHook("m");
  var onBeforeUpdate = createHook(
    "bu"
  );
  var onUpdated = createHook("u");
  var onBeforeUnmount = createHook(
    "bum"
  );
  var onUnmounted = createHook("um");
  var onServerPrefetch = createHook(
    "sp"
  );
  var onRenderTriggered = createHook("rtg");
  var onRenderTracked = createHook("rtc");
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
  var getPublicInstance = (i2) => {
    if (!i2) return null;
    if (isStatefulComponent(i2)) return getComponentPublicInstance(i2);
    return getPublicInstance(i2.parent);
  };
  var resolveDevRootEl = (vnode) => {
    let found = false;
    while (true) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048) {
        const root = filterSingleRoot(vnode.children);
        if (!root) {
          return;
        }
        vnode = root;
        found = true;
        continue;
      }
      const component = vnode.component;
      if (component && component.subTree) {
        vnode = component.subTree;
        continue;
      }
      const suspense = vnode.suspense;
      if (suspense && suspense.activeBranch) {
        vnode = suspense.activeBranch;
        continue;
      }
      return found ? vnode.el : void 0;
    }
  };
  var getDevRootFragmentEl = (i2) => {
    const el2 = i2.subTree && resolveDevRootEl(i2.subTree);
    return el2 === void 0 ? i2.vnode.el : el2;
  };
  var publicPropertiesMap = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
      $: (i2) => i2,
      $el: (i2) => true ? getDevRootFragmentEl(i2) : i2.vnode.el,
      $data: (i2) => i2.data,
      $props: (i2) => true ? shallowReadonly(i2.props) : i2.props,
      $attrs: (i2) => true ? shallowReadonly(i2.attrs) : i2.attrs,
      $slots: (i2) => true ? shallowReadonly(i2.slots) : i2.slots,
      $refs: (i2) => true ? shallowReadonly(i2.refs) : i2.refs,
      $parent: (i2) => getPublicInstance(i2.parent),
      $root: (i2) => getPublicInstance(i2.root),
      $host: (i2) => i2.ce,
      $emit: (i2) => i2.emit,
      $options: (i2) => __VUE_OPTIONS_API__ ? resolveMergedOptions(i2) : i2.type,
      $forceUpdate: (i2) => i2.f || (i2.f = () => {
        queueJob(i2.update);
      }),
      $nextTick: (i2) => i2.n || (i2.n = nextTick.bind(i2.proxy)),
      $watch: (i2) => __VUE_OPTIONS_API__ ? instanceWatch.bind(i2) : NOOP
    })
  );
  var isReservedPrefix = (key) => key === "_" || key === "$";
  var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
  var PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      if (key === "__v_skip") {
        return true;
      }
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      if (key === "__isVue") {
        return true;
      }
      if (key[0] !== "$") {
        const n2 = accessCache[key];
        if (n2 !== void 0) {
          switch (n2) {
            case 1:
              return setupState[key];
            case 2:
              return data[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (__VUE_OPTIONS_API__ && data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 2;
          return data[key];
        } else if (hasOwn(props, key)) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (!__VUE_OPTIONS_API__ || shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance.attrs, "get", "");
          markAttrsAccessed();
        } else if (key === "$slots") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])
      ) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (
        // global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
      ) {
        {
          return globalProperties[key];
        }
      } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      key.indexOf("__v") !== 0)) {
        if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
          warn$1(
            `Property ${JSON.stringify(
              key
            )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
          );
        } else if (instance === currentRenderingInstance) {
          warn$1(
            `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
          );
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
        warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
        return false;
      } else if (__VUE_OPTIONS_API__ && data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        warn$1(
          `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
        );
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({
      _: { data, setupState, accessCache, ctx, appContext, props, type }
    }, key) {
      let cssModules;
      return !!(accessCache[key] || __VUE_OPTIONS_API__ && data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn$1(
        `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
      );
      return Reflect.ownKeys(target);
    };
  }
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const {
      ctx,
      propsOptions: [propsOptions]
    } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn$1(
            `setup() return property ${JSON.stringify(
              key
            )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
          );
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => setupState[key],
          set: NOOP
        });
      }
    });
  }
  function normalizePropsOrEmits(props) {
    return isArray(props) ? props.reduce(
      (normalized, p3) => (normalized[p3] = null, normalized),
      {}
    ) : props;
  }
  function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  var shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance, "bc");
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = true ? createDuplicateChecker() : null;
    if (true) {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction(methodHandler)) {
          if (true) {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            ctx[key] = methodHandler.bind(publicThis);
          }
          if (true) {
            checkDuplicateProperties("Methods", key);
          }
        } else if (true) {
          warn$1(
            `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
          );
        }
      }
    }
    if (dataOptions) {
      if (!isFunction(dataOptions)) {
        warn$1(
          `The data option must be a function. Plain object usage is no longer supported.`
        );
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1(
          `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
        );
      }
      if (!isObject(data)) {
        warn$1(`data() should return an object.`);
      } else {
        instance.data = reactive(data);
        if (true) {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get === NOOP) {
          warn$1(`Computed property "${key}" has no getter.`);
        }
        const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : true ? () => {
          warn$1(
            `Write operation failed: computed property "${key}" is readonly.`
          );
        } : NOOP;
        const c2 = computed2({
          get,
          set
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c2.value,
          set: (v2) => c2.value = v2
        });
        if (true) {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val,
            enumerable: true
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render && instance.render === NOOP) {
      instance.render = render;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components) instance.components = components;
    if (directives) instance.directives = directives;
    if (serverPrefetch) {
      markAsyncBoundary(instance);
    }
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v2) => injected.value = v2
        });
      } else {
        ctx[key] = injected;
      }
      if (true) {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(
      isArray(hook) ? hook.map((h3) => h3.bind(instance.proxy)) : hook.bind(instance.proxy),
      instance,
      type
    );
  }
  function createWatcher(raw, ctx, publicThis, key) {
    let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction(handler)) {
        {
          watch2(getter, handler);
        }
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction(raw)) {
      {
        watch2(getter, raw.bind(publicThis));
      }
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r2) => createWatcher(r2, ctx, publicThis, key));
      } else {
        const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction(handler)) {
          watch2(getter, handler, raw);
        } else if (true) {
          warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else if (true) {
      warn$1(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const {
      mixins: globalMixins,
      optionsCache: cache,
      config: { optionMergeStrategies }
    } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach(
          (m2) => mergeOptions(resolved, m2, optionMergeStrategies, true)
        );
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions(to2, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to2, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach(
        (m2) => mergeOptions(to2, m2, strats, true)
      );
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
        warn$1(
          `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
        );
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to2[key] = strat ? strat(to2[key], from[key]) : from[key];
      }
    }
    return to2;
  }
  var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to2, from) {
    if (!from) {
      return to2;
    }
    if (!to2) {
      return from;
    }
    return function mergedDataFn() {
      return extend(
        isFunction(to2) ? to2.call(this, this) : to2,
        isFunction(from) ? from.call(this, this) : from
      );
    };
  }
  function mergeInject(to2, from) {
    return mergeObjectOptions(normalizeInject(to2), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i2 = 0; i2 < raw.length; i2++) {
        res[raw[i2]] = raw[i2];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to2, from) {
    return to2 ? [...new Set([].concat(to2, from))] : from;
  }
  function mergeObjectOptions(to2, from) {
    return to2 ? extend(/* @__PURE__ */ Object.create(null), to2, from) : from;
  }
  function mergeEmitsOrPropsOptions(to2, from) {
    if (to2) {
      if (isArray(to2) && isArray(from)) {
        return [.../* @__PURE__ */ new Set([...to2, ...from])];
      }
      return extend(
        /* @__PURE__ */ Object.create(null),
        normalizePropsOrEmits(to2),
        normalizePropsOrEmits(from != null ? from : {})
      );
    } else {
      return from;
    }
  }
  function mergeWatchOptions(to2, from) {
    if (!to2) return from;
    if (!from) return to2;
    const merged = extend(/* @__PURE__ */ Object.create(null), to2);
    for (const key in from) {
      merged[key] = mergeAsArray(to2[key], from[key]);
    }
    return merged;
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  var uid$1 = 0;
  function createAppAPI(render, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction(rootComponent)) {
        rootComponent = extend({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        warn$1(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new WeakSet();
      const pluginCleanupFns = [];
      let isMounted = false;
      const app = context.app = {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v2) {
          if (true) {
            warn$1(
              `app.config cannot be replaced. Modify individual options instead.`
            );
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn$1(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else if (true) {
            warn$1(
              `A plugin must either be a function or an object with an "install" function.`
            );
          }
          return app;
        },
        mixin(mixin) {
          if (__VUE_OPTIONS_API__) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (true) {
              warn$1(
                "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
              );
            }
          } else if (true) {
            warn$1("Mixins are only available in builds supporting Options API");
          }
          return app;
        },
        component(name, component) {
          if (true) {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn$1(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (true) {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn$1(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, namespace) {
          if (!isMounted) {
            if (rootContainer.__vue_app__) {
              warn$1(
                `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
              );
            }
            const vnode = app._ceVNode || createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (namespace === true) {
              namespace = "svg";
            } else if (namespace === false) {
              namespace = void 0;
            }
            if (true) {
              context.reload = () => {
                const cloned = cloneVNode(vnode);
                cloned.el = null;
                render(cloned, rootContainer, namespace);
              };
            }
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render(vnode, rootContainer, namespace);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            if (true) {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return getComponentPublicInstance(vnode.component);
          } else if (true) {
            warn$1(
              `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
            );
          }
        },
        onUnmount(cleanupFn) {
          if (typeof cleanupFn !== "function") {
            warn$1(
              `Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`
            );
          }
          pluginCleanupFns.push(cleanupFn);
        },
        unmount() {
          if (isMounted) {
            callWithAsyncErrorHandling(
              pluginCleanupFns,
              app._instance,
              16
            );
            render(null, app._container);
            if (true) {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else if (true) {
            warn$1(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            if (hasOwn(context.provides, key)) {
              warn$1(
                `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
              );
            } else {
              warn$1(
                `App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`
              );
            }
          }
          context.provides[key] = value;
          return app;
        },
        runWithContext(fn3) {
          const lastApp = currentApp;
          currentApp = app;
          try {
            return fn3();
          } finally {
            currentApp = lastApp;
          }
        }
      };
      return app;
    };
  }
  var currentApp = null;
  var getModelModifiers = (props, modelName) => {
    return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
  };
  function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted) return;
    const props = instance.vnode.props || EMPTY_OBJ;
    if (true) {
      const {
        emitsOptions,
        propsOptions: [propsOptions]
      } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
            warn$1(
              `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`
            );
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn$1(
                `Invalid event arguments: event validation failed for event "${event}".`
              );
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
    if (modifiers) {
      if (modifiers.trim) {
        args = rawArgs.map((a2) => isString(a2) ? a2.trim() : a2);
      }
      if (modifiers.number) {
        args = args.map(looseToNumber);
      }
    }
    if (true) {
      devtoolsComponentEmit(instance, event, args);
    }
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn$1(
          `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
            instance,
            instance.type
          )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
            event
          )}" instead of "${event}".`
        );
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(
        handler,
        instance,
        6,
        args
      );
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(
        onceHandler,
        instance,
        6,
        args
      );
    }
  }
  var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = __VUE_OPTIONS_API__ && asMixin ? mixinEmitsCache : appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2);
    key = key === "Once" ? key : key.replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  var accessedAttrs = false;
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const {
      type: Component,
      vnode,
      proxy,
      withProxy,
      propsOptions: [propsOptions],
      slots,
      attrs,
      emit: emit2,
      render,
      renderCache,
      props,
      data,
      setupState,
      ctx,
      inheritAttrs
    } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    if (true) {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
          get(target, key, receiver) {
            warn$1(
              `Property '${String(
                key
              )}' was accessed via 'this'. Avoid using 'this' in templates.`
            );
            return Reflect.get(target, key, receiver);
          }
        }) : proxyToUse;
        result = normalizeVNode(
          render.call(
            thisProxy,
            proxyToUse,
            renderCache,
            true ? shallowReadonly(props) : props,
            setupState,
            data,
            ctx
          )
        );
        fallthroughAttrs = attrs;
      } else {
        const render2 = Component;
        if (attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(
          render2.length > 1 ? render2(
            true ? shallowReadonly(props) : props,
            true ? {
              get attrs() {
                markAttrsAccessed();
                return shallowReadonly(attrs);
              },
              slots,
              emit: emit2
            } : { attrs, slots, emit: emit2 }
          ) : render2(
            true ? shallowReadonly(props) : props,
            null
          )
        );
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1);
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(
              fallthroughAttrs,
              propsOptions
            );
          }
          root = cloneVNode(root, fallthroughAttrs, false, true);
        } else if (!accessedAttrs && root.type !== Comment) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i2 = 0, l3 = allAttrs.length; i2 < l3; i2++) {
            const key = allAttrs[i2];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn$1(
              `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
            );
          }
          if (eventAttrs.length) {
            warn$1(
              `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
          }
        }
      }
    }
    if (vnode.dirs) {
      if (!isElementRoot(root)) {
        warn$1(
          `Runtime directive used on component with non-element root node. The directives will not function as intended.`
        );
      }
      root = cloneVNode(root, null, false, true);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      const child = isTeleport(root.type) ? getInnerChild$1(root) || root : root;
      if (!isElementRoot(child)) {
        warn$1(
          `Component inside <Transition> renders non-element root node that cannot be animated.`
        );
      }
      setTransitionHooks(child, vnode.transition);
    }
    if (setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  var getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) {
      return [vnode, void 0];
    } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
      return getChildRoot(childRoot);
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
      rawChildren[index] = updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex > -1) {
          dynamicChildren[dynamicIndex] = updatedRoot;
        } else if (updatedRoot.patchFlag > 0) {
          vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for (let i2 = 0; i2 < children.length; i2++) {
      const child = children[i2];
      if (isVNode(child)) {
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
            if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
              return filterSingleRoot(singleRoot.children);
            }
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  var getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  var filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  var isElementRoot = (vnode) => {
    return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i2 = 0; i2 < dynamicProps.length; i2++) {
          const key = dynamicProps[i2];
          if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i2 = 0; i2 < nextKeys.length; i2++) {
      const key = nextKeys[i2];
      if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function hasPropValueChanged(nextProps, prevProps, key) {
    const nextProp = nextProps[key];
    const prevProp = prevProps[key];
    if (key === "style" && isObject(nextProp) && isObject(prevProp)) {
      return !looseEqual(nextProp, prevProp);
    }
    return nextProp !== prevProp;
  }
  function updateHOCHostEl({ vnode, parent, suspense }, el2) {
    while (parent) {
      const root = parent.subTree;
      if (root.suspense && root.suspense.activeBranch === vnode) {
        root.suspense.vnode.el = root.el = el2;
        vnode = root;
      }
      if (root === vnode) {
        (vnode = parent.vnode).el = el2;
        parent = parent.parent;
      } else {
        break;
      }
    }
    if (suspense && suspense.activeBranch === vnode) {
      suspense.vnode.el = el2;
    }
  }
  var internalObjectProto = {};
  var createInternalObject = () => Object.create(internalObjectProto);
  var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function isInHmrContext(instance) {
    while (instance) {
      if (instance.type.__hmrId) return true;
      instance = instance.parent;
    }
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const {
      props,
      attrs,
      vnode: { patchFlag }
    } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
    ) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
          let key = propsToUpdate[i2];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && // for camelCase
            (rawPrevProps[key] !== void 0 || // for kebab-case
            rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance.attrs, "set", "");
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i2 = 0; i2 < needCastKeys.length; i2++) {
        const key = needCastKeys[i2];
        props[key] = resolvePropValue(
          options,
          rawCurrentProps,
          key,
          castValues[key],
          instance,
          !hasOwn(castValues, key)
        );
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            const reset = setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(
              null,
              props
            );
            reset();
          }
        } else {
          value = defaultValue;
        }
        if (instance.ce) {
          instance.ce._setProp(key, value);
        }
      }
      if (opt[
        0
        /* shouldCast */
      ]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[
          1
          /* shouldCastTrue */
        ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  var mixinPropsCache = /* @__PURE__ */ new WeakMap();
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = __VUE_OPTIONS_API__ && asMixin ? mixinPropsCache : appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (__VUE_OPTIONS_API__ && !isFunction(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys) needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i2 = 0; i2 < raw.length; i2++) {
        if (!isString(raw[i2])) {
          warn$1(`props must be strings when using array syntax.`, raw[i2]);
        }
        const normalizedKey = camelize(raw[i2]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn$1(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
          const propType = prop.type;
          let shouldCast = false;
          let shouldCastTrue = true;
          if (isArray(propType)) {
            for (let index = 0; index < propType.length; ++index) {
              const type = propType[index];
              const typeName = isFunction(type) && type.name;
              if (typeName === "Boolean") {
                shouldCast = true;
                break;
              } else if (typeName === "String") {
                shouldCastTrue = false;
              }
            }
          } else {
            shouldCast = isFunction(propType) && propType.name === "Boolean";
          }
          prop[
            0
            /* shouldCast */
          ] = shouldCast;
          prop[
            1
            /* shouldCastTrue */
          ] = shouldCastTrue;
          if (shouldCast || hasOwn(prop, "default")) {
            needCastKeys.push(normalizedKey);
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$" && !isReservedProp(key)) {
      return true;
    } else if (true) {
      warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    if (ctor === null) {
      return "null";
    }
    if (typeof ctor === "function") {
      return ctor.name || "";
    } else if (typeof ctor === "object") {
      const name = ctor.constructor && ctor.constructor.name;
      return name || "";
    }
    return "";
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    const camelizePropsKey = Object.keys(rawProps).map((key) => camelize(key));
    for (const key in options) {
      let opt = options[key];
      if (opt == null) continue;
      validateProp(
        key,
        resolvedValues[key],
        opt,
        true ? shallowReadonly(resolvedValues) : resolvedValues,
        !camelizePropsKey.includes(key)
      );
    }
  }
  function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
      warn$1('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !required) {
      return;
    }
    if (type != null && type !== true && !skipCheck) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i2 = 0; i2 < types.length && !isValid; i2++) {
        const { valid, expectedType } = assertType(value, types[i2]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn$1(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value, props)) {
      warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  var isSimpleType = /* @__PURE__ */ makeMap(
    "String,Number,Boolean,Function,Symbol,BigInt"
  );
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (expectedType === "null") {
      valid = value === null;
    } else if (isSimpleType(expectedType)) {
      const t2 = typeof value;
      valid = t2 === expectedType.toLowerCase();
      if (!valid && t2 === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) {
      return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    }
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && isCoercible(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (isSymbol(value)) {
      return value.toString();
    } else if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isCoercible(...args) {
    return args.every((elem) => {
      const value = elem.toLowerCase();
      return value !== "boolean" && value !== "symbol";
    });
  }
  var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
  var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  var normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized = withCtx((...args) => {
      if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
        warn$1(
          `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
        );
      }
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  var normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key)) continue;
      const value = rawSlots[key];
      if (isFunction(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        if (true) {
          warn$1(
            `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
          );
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  var normalizeVNodeSlots = (instance, children) => {
    if (!isKeepAlive(instance.vnode) && true) {
      warn$1(
        `Non-function value encountered for default slot. Prefer function slots for better performance.`
      );
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  var assignSlots = (slots, children, optimized) => {
    for (const key in children) {
      if (optimized || !isInternalKey(key)) {
        slots[key] = children[key];
      }
    }
  };
  var initSlots = (instance, children, optimized) => {
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        assignSlots(slots, children, optimized);
        if (optimized) {
          def(slots, "_", type, true);
        }
      } else {
        normalizeObjectSlots(children, slots);
      }
    } else if (children) {
      normalizeVNodeSlots(instance, children);
    }
  };
  var updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (isHmrUpdating) {
          assignSlots(slots, children, optimized);
          trigger(instance, "set", "$slots");
        } else if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          assignSlots(slots, children, optimized);
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
          delete slots[key];
        }
      }
    }
  };
  var supported;
  var perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (true) {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      const measureName = `<${formatComponentName(instance, instance.type)}> ${type}`;
      perf.mark(endTag);
      perf.measure(measureName, startTag, endTag);
      perf.clearMeasures(measureName);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    if (true) {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function initFeatureFlags() {
    const needWarn = [];
    if (typeof __VUE_OPTIONS_API__ !== "boolean") {
      needWarn.push(`__VUE_OPTIONS_API__`);
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (typeof __VUE_PROD_DEVTOOLS__ !== "boolean") {
      needWarn.push(`__VUE_PROD_DEVTOOLS__`);
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__ !== "boolean") {
      needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
      getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (needWarn.length) {
      const multi = needWarn.length > 1;
      console.warn(
        `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
      );
    }
  }
  var queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (true) {
      setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const {
      insert: hostInsert,
      remove: hostRemove,
      patchProp: hostPatchProp,
      createElement: hostCreateElement,
      createText: hostCreateText,
      createComment: hostCreateComment,
      setText: hostSetText,
      setElementText: hostSetElementText,
      parentNode: hostParentNode,
      nextSibling: hostNextSibling,
      setScopeId: hostSetScopeId = NOOP,
      insertStaticContent: hostInsertStaticContent
    } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      if (n2.dynamicChildren && n1 && n1.dynamicChildren && n1.dynamicChildren.hasOnce) {
        if (n2.dynamicChildren === EMPTY_ARR) {
          n2.dynamicChildren = [];
        }
        n2.dynamicChildren.hasOnce = true;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, namespace);
          } else if (true) {
            patchStaticNode(n1, n2, container, namespace);
          }
          break;
        case Fragment:
          processFragment(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          break;
        default:
          if (shapeFlag & 1) {
            processElement(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 6) {
            processComponent(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 64) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (shapeFlag & 128) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (true) {
            warn$1("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      } else if (ref2 == null && n1 && n1.ref != null) {
        setRef(n1.ref, null, parentSuspense, n1, true);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateText(n2.children),
          container,
          anchor
        );
      } else {
        const el2 = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el2, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateComment(n2.children || ""),
          container,
          anchor
        );
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, namespace) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace,
        n2.el,
        n2.anchor
      );
    };
    const patchStaticNode = (n1, n2, container, namespace) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          namespace
        );
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el: el2, anchor }, container, nextSibling) => {
      let next;
      while (el2 && el2 !== anchor) {
        next = hostNextSibling(el2);
        hostInsert(el2, container, nextSibling);
        el2 = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el: el2, anchor }) => {
      let next;
      while (el2 && el2 !== anchor) {
        next = hostNextSibling(el2);
        hostRemove(el2);
        el2 = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      if (n2.type === "svg") {
        namespace = "svg";
      } else if (n2.type === "math") {
        namespace = "mathml";
      }
      if (n1 == null) {
        mountElement(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
        try {
          if (customElement) {
            customElement._beginPatch();
          }
          patchElement(
            n1,
            n2,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } finally {
          if (customElement) {
            customElement._endPatch();
          }
        }
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let el2;
      let vnodeHook;
      const { props, shapeFlag, transition, dirs } = vnode;
      el2 = vnode.el = hostCreateElement(
        vnode.type,
        namespace,
        props && props.is,
        props
      );
      if (shapeFlag & 8) {
        hostSetElementText(el2, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(
          vnode.children,
          el2,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(vnode, namespace),
          slotScopeIds,
          optimized
        );
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      setScopeId(el2, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(el2, key, null, props[key], namespace, parentComponent);
          }
        }
        if ("value" in props) {
          hostPatchProp(el2, "value", null, props.value, namespace);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      if (true) {
        def(el2, "__vnode", vnode, true);
        def(el2, "__vueParentComponent", parentComponent, true);
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = needTransition(parentSuspense, transition);
      if (needCallTransitionHooks) {
        transition.beforeEnter(el2);
      }
      hostInsert(el2, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        const isHmr = isHmrUpdating;
        queuePostRenderEffect(() => {
          let prev;
          if (true) prev = setHmrUpdating(isHmr);
          try {
            vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
            needCallTransitionHooks && transition.enter(el2);
            dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
          } finally {
            if (true) setHmrUpdating(prev);
          }
        }, parentSuspense);
      }
    };
    const setScopeId = (el2, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el2, scopeId);
      }
      if (slotScopeIds) {
        for (let i2 = 0; i2 < slotScopeIds.length; i2++) {
          hostSetScopeId(el2, slotScopeIds[i2]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
          const parentVNode = parentComponent.vnode;
          setScopeId(
            el2,
            parentVNode,
            parentVNode.scopeId,
            parentVNode.slotScopeIds,
            parentComponent.parent
          );
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
      for (let i2 = start; i2 < children.length; i2++) {
        const child = children[i2] = optimized ? cloneIfMounted(children[i2]) : normalizeVNode(children[i2]);
        patch(
          null,
          child,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const el2 = n2.el = n1.el;
      if (true) {
        el2.__vnode = n2;
      }
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (
        // HMR updated, force full diff
        isHmrUpdating || // #6385 the old vnode may be a user-wrapped non-isomorphic block
        // Force full diff when block metadata is unstable.
        dynamicChildren && (!n1.dynamicChildren || n1.dynamicChildren.length !== dynamicChildren.length)
      ) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
        hostSetElementText(el2, "");
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          el2,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          el2,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds,
          false
        );
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(el2, oldProps, newProps, parentComponent, namespace);
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el2, "class", null, newProps.class, namespace);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el2, "style", oldProps.style, newProps.style, namespace);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i2 = 0; i2 < propsToUpdate.length; i2++) {
              const key = propsToUpdate[i2];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(el2, key, prev, next, namespace, parentComponent);
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el2, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(el2, oldProps, newProps, parentComponent, namespace);
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
      for (let i2 = 0; i2 < newChildren.length; i2++) {
        const oldVNode = oldChildren[i2];
        const newVNode = newChildren[i2];
        const container = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer
          )
        );
        patch(
          oldVNode,
          newVNode,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          true
        );
      }
    };
    const patchProps = (el2, oldProps, newProps, parentComponent, namespace) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(
                el2,
                key,
                oldProps[key],
                null,
                namespace,
                parentComponent
              );
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key)) continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(el2, key, prev, next, namespace, parentComponent);
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el2, "value", oldProps.value, newProps.value, namespace);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (
        // #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048
      ) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(
          // #10007
          // such fragment like `<></>` will be compiled into
          // a fragment which doesn't have a children.
          // In this case fallback to an empty array
          n2.children || [],
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            container,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          if (true) {
            traverseStaticChildren(n1, n2);
          } else if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree
          ) {
            traverseStaticChildren(
              n1,
              n2,
              true
              /* shallow */
            );
          }
        } else {
          patchChildren(
            n1,
            n2,
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(
            n2,
            container,
            anchor,
            namespace,
            optimized
          );
        } else {
          mountComponent(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            optimized
          );
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
      const instance = initialVNode.component = createComponentInstance(
        initialVNode,
        parentComponent,
        parentSuspense
      );
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      if (true) {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        if (true) {
          startMeasure(instance, `init`);
        }
        setupComponent(instance, false, optimized);
        if (true) {
          endMeasure(instance, `init`);
        }
      }
      if (isHmrUpdating) initialVNode.el = null;
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
          initialVNode.placeholder = placeholder.el;
        }
      } else {
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          namespace,
          optimized
        );
      }
      if (true) {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          if (true) {
            pushWarningContext(n2);
          }
          n2.el = n1.el;
          updateComponentPreRender(instance, n2, optimized);
          if (true) {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el: el2, props } = initialVNode;
          const { bm, m: m2, parent, root, type } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el2 && hydrateNode) {
            const hydrateSubTree = () => {
              if (true) {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              if (true) {
                endMeasure(instance, `render`);
              }
              if (true) {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(
                el2,
                instance.subTree,
                instance,
                parentSuspense,
                null
              );
              if (true) {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode && type.__asyncHydrate) {
              type.__asyncHydrate(
                el2,
                instance,
                hydrateSubTree
              );
            } else {
              hydrateSubTree();
            }
          } else {
            if (root.ce && root.ce._hasShadowRoot()) {
              root.ce._injectChildStyle(
                type,
                instance.parent ? instance.parent.type : void 0
              );
            }
            if (true) {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `patch`);
            }
            patch(
              null,
              subTree,
              container,
              anchor,
              instance,
              parentSuspense,
              namespace
            );
            if (true) {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m2) {
            queuePostRenderEffect(m2, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
              parentSuspense
            );
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          if (true) {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu: bu2, u: u2, parent, vnode } = instance;
          {
            const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
            if (nonHydratedAsyncRoot) {
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              }
              nonHydratedAsyncRoot.asyncDep.then(() => {
                queuePostRenderEffect(() => {
                  if (!instance.isUnmounted) update();
                }, parentSuspense);
              });
              return;
            }
          }
          let originNext = next;
          let vnodeHook;
          if (true) {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu2) {
            invokeArrayFns(bu2);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          if (true) {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u2) {
            queuePostRenderEffect(u2, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, next, vnode),
              parentSuspense
            );
          }
          if (true) {
            devtoolsComponentUpdated(instance);
          }
          if (true) {
            popWarningContext();
          }
        }
      };
      instance.scope.on();
      const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
      instance.scope.off();
      const update = instance.update = effect2.run.bind(effect2);
      const job = instance.job = effect2.runIfDirty.bind(effect2);
      job.i = instance;
      job.id = instance.uid;
      effect2.scheduler = () => queueJob(job);
      toggleRecurse(instance, true);
      if (true) {
        effect2.onTrack = instance.rtc ? (e3) => invokeArrayFns(instance.rtc, e3) : void 0;
        effect2.onTrigger = instance.rtg ? (e3) => invokeArrayFns(instance.rtg, e3) : void 0;
      }
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(instance);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i2;
      for (i2 = 0; i2 < commonLength; i2++) {
        const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        patch(
          c1[i2],
          nextChild,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
      if (oldLength > newLength) {
        unmountChildren(
          c1,
          parentComponent,
          parentSuspense,
          true,
          false,
          commonLength
        );
      } else {
        mountChildren(
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          commonLength
        );
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let i2 = 0;
      const l22 = c2.length;
      let e1 = c1.length - 1;
      let e22 = l22 - 1;
      while (i2 <= e1 && i2 <= e22) {
        const n1 = c1[i2];
        const n2 = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        i2++;
      }
      while (i2 <= e1 && i2 <= e22) {
        const n1 = c1[e1];
        const n2 = c2[e22] = optimized ? cloneIfMounted(c2[e22]) : normalizeVNode(c2[e22]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        e1--;
        e22--;
      }
      if (i2 > e1) {
        if (i2 <= e22) {
          const nextPos = e22 + 1;
          const anchor = nextPos < l22 ? c2[nextPos].el : parentAnchor;
          while (i2 <= e22) {
            patch(
              null,
              c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]),
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            i2++;
          }
        }
      } else if (i2 > e22) {
        while (i2 <= e1) {
          unmount(c1[i2], parentComponent, parentSuspense, true);
          i2++;
        }
      } else {
        const s1 = i2;
        const s22 = i2;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i2 = s22; i2 <= e22; i2++) {
          const nextChild = c2[i2] = optimized ? cloneIfMounted(c2[i2]) : normalizeVNode(c2[i2]);
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn$1(
                `Duplicate keys found during update:`,
                JSON.stringify(nextChild.key),
                `Make sure keys are unique.`
              );
            }
            keyToNewIndexMap.set(nextChild.key, i2);
          }
        }
        let j2;
        let patched = 0;
        const toBePatched = e22 - s22 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i2 = 0; i2 < toBePatched; i2++) newIndexToOldIndexMap[i2] = 0;
        for (i2 = s1; i2 <= e1; i2++) {
          const prevChild = c1[i2];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j2 = s22; j2 <= e22; j2++) {
              if (newIndexToOldIndexMap[j2 - s22] === 0 && isSameVNodeType(prevChild, c2[j2])) {
                newIndex = j2;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s22] = i2 + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(
              prevChild,
              c2[newIndex],
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j2 = increasingNewIndexSequence.length - 1;
        for (i2 = toBePatched - 1; i2 >= 0; i2--) {
          const nextIndex = s22 + i2;
          const nextChild = c2[nextIndex];
          const anchorVNode = c2[nextIndex + 1];
          const anchor = nextIndex + 1 < l22 ? (
            // #13559, #14173 fallback to el placeholder for unresolved async component
            anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode)
          ) : parentAnchor;
          if (newIndexToOldIndexMap[i2] === 0) {
            patch(
              null,
              nextChild,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (moved) {
            if (j2 < 0 || i2 !== increasingNewIndexSequence[j2]) {
              move(nextChild, container, anchor, 2);
            } else {
              j2--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el: el2, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el2, container, anchor);
        for (let i2 = 0; i2 < children.length; i2++) {
          move(children[i2], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition2) {
        if (moveType === 0) {
          if (transition.persisted && !el2[leaveCbKey]) {
            hostInsert(el2, container, anchor);
          } else {
            transition.beforeEnter(el2);
            hostInsert(el2, container, anchor);
            queuePostRenderEffect(() => transition.enter(el2), parentSuspense);
          }
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove22 = () => {
            if (vnode.ctx.isUnmounted) {
              hostRemove(el2);
            } else {
              hostInsert(el2, container, anchor);
            }
          };
          const performLeave = () => {
            const wasLeaving = el2._isLeaving || !!el2[leaveCbKey];
            if (el2._isLeaving) {
              el2[leaveCbKey](
                true
                /* cancelled */
              );
            }
            if (transition.persisted && !wasLeaving) {
              remove22();
            } else {
              leave(el2, () => {
                remove22();
                afterLeave && afterLeave();
              });
            }
          };
          if (delayLeave) {
            delayLeave(el2, remove22, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el2, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const {
        type,
        props,
        ref: ref2,
        children,
        dynamicChildren,
        shapeFlag,
        patchFlag,
        dirs,
        cacheIndex,
        memo
      } = vnode;
      if (patchFlag === -2 || dynamicChildren && dynamicChildren.hasOnce) {
        optimized = false;
      }
      if (ref2 != null) {
        pauseTracking();
        setRef(ref2, null, parentSuspense, vnode, true);
        resetTracking();
      }
      if (cacheIndex != null && (!vnode.ctx || vnode.ctx === parentComponent)) {
        parentComponent.renderCache[cacheIndex] = void 0;
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(
            vnode,
            parentComponent,
            parentSuspense,
            internals,
            doRemove
          );
        } else if (dynamicChildren && // #5154
        // when v-once is used inside a block, setBlockTracking(-1) marks the
        // parent block with hasOnce: true
        // so that it doesn't take the fast path during unmount - otherwise
        // components nested in v-once are never unmounted.
        !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(
            dynamicChildren,
            parentComponent,
            parentSuspense,
            false,
            true
          );
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      const shouldInvalidateMemo = memo != null && cacheIndex == null;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs || shouldInvalidateMemo) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
          if (shouldInvalidateMemo) {
            vnode.el = null;
          }
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el: el2, anchor, transition } = vnode;
      if (type === Fragment) {
        if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el2, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
        return;
      }
      const performRemove = () => {
        hostRemove(el2);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el2, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, scope, job, subTree, um, m: m2, a: a2 } = instance;
      invalidateMount(m2);
      invalidateMount(a2);
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (job) {
        job.flags |= 8;
        unmount(subTree, instance, parentSuspense, doRemove);
      } else if (instance.vnode.el && subTree) {
        subTree.transition = instance.vnode.transition;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (true) {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i2 = start; i2 < children.length; i2++) {
        unmount(children[i2], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      const el2 = hostNextSibling(vnode.anchor || vnode.el);
      const teleportEnd = el2 && el2[TeleportEndKey];
      return teleportEnd ? hostNextSibling(teleportEnd) : el2;
    };
    let isFlushing = false;
    const render = (vnode, container, namespace) => {
      let instance;
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
          instance = container._vnode.component;
        }
      } else {
        patch(
          container._vnode || null,
          vnode,
          container,
          null,
          null,
          null,
          namespace
        );
      }
      container._vnode = vnode;
      if (!isFlushing) {
        isFlushing = true;
        flushPreFlushCbs(instance);
        flushPostFlushCbs();
        isFlushing = false;
      }
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(
        internals
      );
    }
    return {
      render,
      hydrate,
      createApp: createAppAPI(render, hydrate)
    };
  }
  function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
  }
  function toggleRecurse({ effect: effect2, job }, allowed) {
    if (allowed) {
      effect2.flags |= 32;
      job.flags |= 4;
    } else {
      effect2.flags &= -33;
      job.flags &= -5;
    }
  }
  function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i2 = 0; i2 < ch1.length; i2++) {
        const c1 = ch1[i2];
        let c2 = ch2[i2];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i2] = cloneIfMounted(ch2[i2]);
            c2.el = c1.el;
          }
          if (!shallow && c2.patchFlag !== -2)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) {
          if (c2.patchFlag === -1) {
            c2 = ch2[i2] = cloneIfMounted(c2);
          }
          c2.el = c1.el;
        }
        if (c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
        if (true) {
          c2.el && (c2.el.__vnode = c2);
        }
      }
    }
  }
  function getSequence(arr) {
    const p3 = arr.slice();
    const result = [0];
    let i2, j2, u2, v2, c2;
    const len = arr.length;
    for (i2 = 0; i2 < len; i2++) {
      const arrI = arr[i2];
      if (arrI !== 0) {
        j2 = result[result.length - 1];
        if (arr[j2] < arrI) {
          p3[i2] = j2;
          result.push(i2);
          continue;
        }
        u2 = 0;
        v2 = result.length - 1;
        while (u2 < v2) {
          c2 = u2 + v2 >> 1;
          if (arr[result[c2]] < arrI) {
            u2 = c2 + 1;
          } else {
            v2 = c2;
          }
        }
        if (arrI < arr[result[u2]]) {
          if (u2 > 0) {
            p3[i2] = result[u2 - 1];
          }
          result[u2] = i2;
        }
      }
    }
    u2 = result.length;
    v2 = result[u2 - 1];
    while (u2-- > 0) {
      result[u2] = v2;
      v2 = p3[v2];
    }
    return result;
  }
  function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
      if (subComponent.asyncDep && !subComponent.asyncResolved) {
        return subComponent;
      } else {
        return locateNonHydratedAsyncRoot(subComponent);
      }
    }
  }
  function invalidateMount(hooks) {
    if (hooks) {
      for (let i2 = 0; i2 < hooks.length; i2++)
        hooks[i2].flags |= 8;
    }
  }
  function resolveAsyncComponentPlaceholder(anchorVnode) {
    if (anchorVnode.placeholder) {
      return anchorVnode.placeholder;
    }
    const instance = anchorVnode.component;
    if (instance) {
      return resolveAsyncComponentPlaceholder(instance.subTree);
    }
    return null;
  }
  var isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn3, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn3)) {
        suspense.effects.push(...fn3);
      } else {
        suspense.effects.push(fn3);
      }
    } else {
      queuePostFlushCb(fn3);
    }
  }
  var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
  var Text = /* @__PURE__ */ Symbol.for("v-txt");
  var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
  var Static = /* @__PURE__ */ Symbol.for("v-stc");
  var blockStack = [];
  var currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  var isBlockTreeEnabled = 1;
  function setBlockTracking(value, inVOnce = false) {
    isBlockTreeEnabled += value;
    if (value < 0 && currentBlock && inVOnce) {
      currentBlock.hasOnce = true;
    }
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(
      createBaseVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        true
      )
    );
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && n1.component) {
      const dirtyInstances = hmrDirtyComponents.get(n2.type);
      if (dirtyInstances && dirtyInstances.has(n1.component)) {
        n1.shapeFlag &= -257;
        n2.shapeFlag &= -513;
        return false;
      }
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  var vnodeArgsTransformer;
  var createVNodeWithArgsTransform = (...args) => {
    return _createVNode(
      ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
    );
  };
  var normalizeKey = ({ key }) => key != null ? key : null;
  var normalizeRef = ({
    ref: ref2,
    ref_key,
    ref_for
  }) => {
    if (typeof ref2 === "number") {
      ref2 = "" + ref2;
    }
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (vnode.key !== vnode.key) {
      warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (props && vnode.shapeFlag & 1) {
      const overwritingProp = props.innerHTML != null ? "innerHTML" : props.textContent != null ? "textContent" : null;
      if (overwritingProp && hasContentChildren(vnode.children)) {
        warn$1(
          `The \`${overwritingProp}\` prop on <${vnode.type}> will override its children. Remove either the \`${overwritingProp}\` prop or the children.`
        );
      }
    }
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function hasContentChildren(children) {
    if (isString(children)) return children !== "";
    if (isArray(children)) return children.length > 0;
    return false;
  }
  var createVNode = true ? createVNodeWithArgsTransform : _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn$1(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag = -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn$1(
        `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
        `
Component that was made reactive: `,
        type
      );
    }
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    );
  }
  function guardReactiveProps(props) {
    if (!props) return null;
    return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref: ref2, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetStart: vnode.targetStart,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      placeholder: vnode.placeholder,
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce,
      cacheIndex: vnode.cacheIndex
    };
    if (transition && cloneTransition) {
      setTransitionHooks(
        cloned,
        transition.clone(cloned)
      );
    }
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (isVNode(child)) {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !isInternalObject(children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction(children)) {
      if (shapeFlag & (1 | 64)) {
        normalizeChildren(vnode, { default: children });
        return;
      }
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i2 = 0; i2 < args.length; i2++) {
      const toMerge = args[i2];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          } else if (incoming == null && existing == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
          // the model listener.
          !isModelListener(key)) {
            ret[key] = incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  var emptyAppContext = createAppContext();
  var uid = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      // to be immediately set
      next: null,
      subTree: null,
      // will be set synchronously right after creation
      effect: null,
      update: null,
      // will be set synchronously right after creation
      job: null,
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      ids: parent ? parent.ids : ["", 0, 0],
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      // to be set immediately
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (true) {
      instance.ctx = createDevRenderContext(instance);
    } else {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  var currentInstance = null;
  var getCurrentInstance = () => currentInstance || currentRenderingInstance;
  var internalSetCurrentInstance;
  var setInSSRSetupState;
  {
    const g2 = getGlobalThis();
    const registerGlobalSetter = (key, setter) => {
      let setters;
      if (!(setters = g2[key])) setters = g2[key] = [];
      setters.push(setter);
      return (v2) => {
        if (setters.length > 1) setters.forEach((set) => set(v2));
        else setters[0](v2);
      };
    };
    internalSetCurrentInstance = registerGlobalSetter(
      `__VUE_INSTANCE_SETTERS__`,
      (v2) => currentInstance = v2
    );
    setInSSRSetupState = registerGlobalSetter(
      `__VUE_SSR_SETTERS__`,
      (v2) => isInSSRComponentSetup = v2
    );
  }
  var setCurrentInstance = (instance) => {
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return () => {
      instance.scope.off();
      internalSetCurrentInstance(prev);
    };
  };
  var unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
  };
  var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
  function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) {
      warn$1(
        "Do not use built-in or reserved HTML elements as component id: " + name
      );
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  var isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false, optimized = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children, optimized || isSSR);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    const Component = instance.type;
    if (true) {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i2 = 0; i2 < names.length; i2++) {
          validateComponentName(names[i2], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i2 = 0; i2 < names.length; i2++) {
          validateDirectiveName(names[i2]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn$1(
          `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
        );
      }
    }
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if (true) {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      pauseTracking();
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      const reset = setCurrentInstance(instance);
      const setupResult = callWithErrorHandling(
        setup,
        instance,
        0,
        [
          true ? shallowReadonly(instance.props) : instance.props,
          setupContext
        ]
      );
      const isAsyncSetup = isPromise(setupResult);
      resetTracking();
      reset();
      if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
        markAsyncBoundary(instance);
      }
      if (isAsyncSetup) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            setInSSRSetupState(true);
            try {
              handleSetupResult(instance, resolvedResult, isSSR);
            } finally {
              setInSSRSetupState(false);
            }
          }).catch((e3) => {
            handleError(e3, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
          if (!instance.suspense) {
            const name = formatComponentName(instance, Component);
            warn$1(
              `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
            );
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn$1(
          `setup() should not return VNodes directly - return a render function instead.`
        );
      }
      if (true) {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      if (true) {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== void 0) {
      warn$1(
        `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
      );
    }
    finishComponentSetup(instance, isSSR);
  }
  var compile;
  var installWithProxy;
  var isRuntimeOnly = () => !compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template || __VUE_OPTIONS_API__ && resolveMergedOptions(instance).template;
        if (template) {
          if (true) {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(
            extend(
              {
                isCustomElement,
                delimiters
              },
              compilerOptions
            ),
            componentCompilerOptions
          );
          Component.render = compile(template, finalCompilerOptions);
          if (true) {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    if (__VUE_OPTIONS_API__ && true) {
      const reset = setCurrentInstance(instance);
      pauseTracking();
      try {
        applyOptions(instance);
      } finally {
        resetTracking();
        reset();
      }
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
      if (!compile && Component.template) {
        warn$1(
          `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
        );
      } else {
        warn$1(`Component is missing template or render function: `, Component);
      }
    }
  }
  var attrsProxyHandlers = true ? {
    get(target, key) {
      markAttrsAccessed();
      track(target, "get", "");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  } : {
    get(target, key) {
      track(target, "get", "");
      return target[key];
    }
  };
  function getSlotsProxy(instance) {
    return new Proxy(instance.slots, {
      get(target, key) {
        track(instance, "get", "$slots");
        return target[key];
      }
    });
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (true) {
        if (instance.exposed) {
          warn$1(`expose() should be called only once per setup().`);
        }
        if (exposed != null) {
          let exposedType = typeof exposed;
          if (exposedType === "object") {
            if (isArray(exposed)) {
              exposedType = "array";
            } else if (isRef(exposed)) {
              exposedType = "ref";
            }
          }
          if (exposedType !== "object") {
            warn$1(
              `expose() should be passed a plain object, received ${exposedType}.`
            );
          }
        }
      }
      instance.exposed = exposed || {};
    };
    if (true) {
      let attrsProxy;
      let slotsProxy;
      return Object.freeze({
        get attrs() {
          return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
        },
        get slots() {
          return slotsProxy || (slotsProxy = getSlotsProxy(instance));
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        attrs: new Proxy(instance.attrs, attrsProxyHandlers),
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getComponentPublicInstance(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    } else {
      return instance.proxy;
    }
  }
  var classifyRE = /(?:^|[-_])\w/g;
  var classify = (str) => str.replace(classifyRE, (c2) => c2.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component, includeInferred = true) {
    return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(
        instance.parent.type.components
      ) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction(value) && "__vccOpts" in value;
  }
  var computed2 = (getterOrOptions, debugOptions) => {
    const c2 = computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
    if (true) {
      const i2 = getCurrentInstance();
      if (i2 && i2.appContext.config.warnRecursiveComputed) {
        c2._warnRecursive = true;
      }
    }
    return c2;
  };
  function h(type, propsOrChildren, children) {
    try {
      setBlockTracking(-1);
      const l3 = arguments.length;
      if (l3 === 2) {
        if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
          if (isVNode(propsOrChildren)) {
            return createVNode(type, null, [propsOrChildren]);
          }
          return createVNode(type, propsOrChildren);
        } else {
          return createVNode(type, null, propsOrChildren);
        }
      } else {
        if (l3 > 3) {
          children = Array.prototype.slice.call(arguments, 2);
        } else if (l3 === 3 && isVNode(children)) {
          children = [children];
        }
        return createVNode(type, propsOrChildren, children);
      }
    } finally {
      setBlockTracking(1);
    }
  }
  function initCustomFormatter() {
    if (typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#1677ff" };
    const stringStyle = { style: "color:#f5222d" };
    const keywordStyle = { style: "color:#eb2f96" };
    const formatter = {
      __vue_custom_formatter: true,
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef(obj)) {
          pauseTracking();
          const value = obj.value;
          resetTracking();
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed3 = extractKeys(instance, "computed");
      if (computed3) {
        blocks.push(createInstanceBlock("computed", computed3));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v2, asRaw = true) {
      if (typeof v2 === "number") {
        return ["span", numberStyle, v2];
      } else if (typeof v2 === "string") {
        return ["span", stringStyle, JSON.stringify(v2)];
      } else if (typeof v2 === "boolean") {
        return ["span", keywordStyle, v2];
      } else if (isObject(v2)) {
        return ["object", { object: asRaw ? toRaw(v2) : v2 }];
      } else {
        return ["span", stringStyle, String(v2)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m2) => isKeyOfType(m2, key, type))) {
        return true;
      }
    }
    function genRefFlag(v2) {
      if (isShallow(v2)) {
        return `ShallowRef`;
      }
      if (v2.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  var version = "3.5.43";
  var warn2 = true ? warn$1 : NOOP;

  // ../../node_modules/.pnpm/@vue+runtime-dom@3.5.43/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var policy = void 0;
  var tt = typeof window !== "undefined" && window.trustedTypes;
  if (tt) {
    try {
      policy = /* @__PURE__ */ tt.createPolicy("vue", {
        createHTML: (val) => val
      });
    } catch (e3) {
      warn2(`Error creating trusted types policy: ${e3}`);
    }
  }
  var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
  var svgNS = "http://www.w3.org/2000/svg";
  var mathmlNS = "http://www.w3.org/1998/Math/MathML";
  var doc = typeof document !== "undefined" ? document : null;
  var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  var nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, namespace, is2, props) => {
      const el2 = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is2 ? doc.createElement(tag, { is: is2 }) : doc.createElement(tag);
      if (tag === "select" && props && props.multiple != null) {
        el2.setAttribute("multiple", props.multiple);
      }
      return el2;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el2, text) => {
      el2.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el2, id) {
      el2.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, namespace, start, end) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start && (start === end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start === end || !(start = start.nextSibling)) break;
        }
      } else {
        templateContainer.innerHTML = unsafeToTrustedHTML(
          namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
        );
        const template = templateContainer.content;
        if (namespace === "svg" || namespace === "mathml") {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        // first
        before ? before.nextSibling : parent.firstChild,
        // last
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  var vtcKey = /* @__PURE__ */ Symbol("_vtc");
  function patchClass(el2, value, isSVG) {
    const transitionClasses = el2[vtcKey];
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el2.removeAttribute("class");
    } else if (isSVG) {
      el2.setAttribute("class", value);
    } else {
      el2.className = value;
    }
  }
  var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
  var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
  var CSS_VAR_TEXT = /* @__PURE__ */ Symbol(true ? "CSS_VAR_TEXT" : "");
  var displayRE = /(?:^|;)\s*display\s*:/;
  function patchStyle(el2, prev, next) {
    const style = el2.style;
    const isCssString = isString(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
      if (prev) {
        if (!isString(prev)) {
          for (const key in prev) {
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        } else {
          for (const prevStyle of prev.split(";")) {
            const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        }
      }
      for (const key in next) {
        if (key === "display") {
          hasControlledDisplay = true;
        }
        const value = next[key];
        if (value != null) {
          if (!shouldPreserveTextareaResizeStyle(
            el2,
            key,
            !isString(prev) && prev ? prev[key] : void 0,
            value
          )) {
            setStyle(style, key, value);
          }
        } else {
          setStyle(style, key, "");
        }
      }
    } else {
      if (isCssString) {
        if (prev !== next) {
          const cssVarText = style[CSS_VAR_TEXT];
          if (cssVarText) {
            next += ";" + cssVarText;
          }
          style.cssText = next;
          hasControlledDisplay = displayRE.test(next);
        }
      } else if (prev) {
        el2.removeAttribute("style");
      }
    }
    if (vShowOriginalDisplay in el2) {
      el2[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
      if (el2[vShowHidden]) {
        style.display = "none";
      }
    }
  }
  var semicolonRE = /[^\\];\s*$/;
  var importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v2) => setStyle(style, name, v2));
    } else {
      if (val == null) val = "";
      if (true) {
        if (semicolonRE.test(val)) {
          warn2(
            `Unexpected semicolon at the end of '${name}' style value: '${val}'`
          );
        }
      }
      if (name.startsWith("--")) {
        if (importantRE.test(val)) {
          style.setProperty(name, val.replace(importantRE, ""), "important");
        } else {
          style.setProperty(name, val);
        }
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(
            hyphenate(prefixed),
            val.replace(importantRE, ""),
            "important"
          );
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  var prefixes = ["Webkit", "Moz", "ms"];
  var prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i2 = 0; i2 < prefixes.length; i2++) {
      const prefixed = prefixes[i2] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  function shouldPreserveTextareaResizeStyle(el2, key, prev, next) {
    return el2.tagName === "TEXTAREA" && (key === "width" || key === "height") && isString(next) && prev === next;
  }
  var xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el2, key, value, isSVG, instance, isBoolean = isSpecialBooleanAttr(key)) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el2.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el2.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      if (value == null || isBoolean && !includeBooleanAttr(value)) {
        el2.removeAttribute(key);
      } else {
        el2.setAttribute(
          key,
          isBoolean ? "" : isSymbol(value) ? String(value) : value
        );
      }
    }
  }
  function patchDOMProp(el2, key, value, parentComponent, attrName) {
    if (key === "innerHTML" || key === "textContent") {
      if (value != null) {
        el2[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
      }
      return;
    }
    const tag = el2.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
      const oldValue = tag === "OPTION" ? el2.getAttribute("value") || "" : el2.value;
      const newValue = value == null ? (
        // #11647: value should be set as empty string for null and undefined,
        // but <input type="checkbox"> should be set as 'on'.
        el2.type === "checkbox" ? "on" : ""
      ) : String(value);
      if (oldValue !== newValue || !("_value" in el2)) {
        el2.value = newValue;
      }
      if (value == null) {
        el2.removeAttribute(key);
      }
      el2._value = value;
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el2[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el2[key] = value;
    } catch (e3) {
      if (!needRemove) {
        warn2(
          `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
          e3
        );
      }
    }
    needRemove && el2.removeAttribute(attrName || key);
  }
  function addEventListener(el2, event, handler, options) {
    el2.addEventListener(event, handler, options);
  }
  function removeEventListener(el2, event, handler, options) {
    el2.removeEventListener(event, handler, options);
  }
  var veiKey = /* @__PURE__ */ Symbol("_vei");
  function patchEvent(el2, rawName, prevValue, nextValue, instance = null) {
    const invokers = el2[veiKey] || (el2[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = true ? sanitizeEventValue(nextValue, rawName) : nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(
          true ? sanitizeEventValue(nextValue, rawName) : nextValue,
          instance
        );
        addEventListener(el2, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el2, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  var optionsModifierRE = /(Once|Passive|Capture)$/;
  var optionsModifierEventRE = /^on:?(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    let m2;
    while ((m2 = name.match(optionsModifierRE)) && !optionsModifierEventRE.test(name)) {
      if (!options) options = {};
      name = name.slice(0, name.length - m2[1].length);
      options[m2[1].toLowerCase()] = true;
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  var cachedNow = 0;
  var p = /* @__PURE__ */ Promise.resolve();
  var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
  function createInvoker(initialValue, instance) {
    const invoker = (e3) => {
      if (!e3._vts) {
        e3._vts = Date.now();
      } else if (e3._vts <= invoker.attached) {
        return;
      }
      const value = invoker.value;
      if (isArray(value)) {
        const originalStop = e3.stopImmediatePropagation;
        e3.stopImmediatePropagation = () => {
          originalStop.call(e3);
          e3._stopped = true;
        };
        const handlers = value.slice();
        const args = [e3];
        for (let i2 = 0; i2 < handlers.length; i2++) {
          if (e3._stopped) {
            break;
          }
          const handler = handlers[i2];
          if (handler) {
            callWithAsyncErrorHandling(
              handler,
              instance,
              5,
              args
            );
          }
        }
      } else {
        callWithAsyncErrorHandling(
          value,
          instance,
          5,
          [e3]
        );
      }
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function sanitizeEventValue(value, propName) {
    if (isFunction(value) || isArray(value)) {
      return value;
    }
    warn2(
      `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
    );
    return NOOP;
  }
  var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
  key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
  var patchProp = (el2, key, prevValue, nextValue, namespace, parentComponent) => {
    const isSVG = namespace === "svg";
    if (key === "class") {
      patchClass(el2, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el2, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el2, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el2, key, nextValue, isSVG)) {
      patchDOMProp(el2, key, nextValue);
      if (!el2.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
        patchAttr(el2, key, nextValue, isSVG, parentComponent, key !== "value");
      }
    } else if (
      // #11081 force set props for possible async custom element
      el2._isVueCE && // #12408 check if it's declared prop or it's async custom element
      (shouldSetAsPropForVueCE(el2, key) || // @ts-expect-error _def is private
      el2._def.__asyncLoader && (/[A-Z]/.test(key) || !isString(nextValue)))
    ) {
      patchDOMProp(el2, camelize(key), nextValue, parentComponent, key);
    } else {
      if (key === "true-value") {
        el2._trueValue = nextValue;
      } else if (key === "false-value") {
        el2._falseValue = nextValue;
      }
      patchAttr(el2, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el2, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el2 && isNativeOn(key) && isFunction(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
      return false;
    }
    if (key === "sandbox" && el2.tagName === "IFRAME") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el2.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el2.tagName === "TEXTAREA") {
      return false;
    }
    if (key === "width" || key === "height") {
      const tag = el2.tagName;
      if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
        return false;
      }
    }
    if (isNativeOn(key) && isString(value)) {
      return false;
    }
    return key in el2;
  }
  function shouldSetAsPropForVueCE(el2, key) {
    const props = (
      // @ts-expect-error _def is private
      el2._def.props
    );
    if (!props) {
      return false;
    }
    const camelKey = camelize(key);
    return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
  }
  var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  var renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  var createApp = ((...args) => {
    const app = ensureRenderer().createApp(...args);
    if (true) {
      injectNativeTagCheck(app);
      injectCompilerOptionsCheck(app);
    }
    const { mount: mount2 } = app;
    app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container) return;
      const component = app._component;
      if (!isFunction(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      if (container.nodeType === 1) {
        container.textContent = "";
      }
      const proxy = mount2(container, false, resolveRootNamespace(container));
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app;
  });
  function resolveRootNamespace(container) {
    if (container instanceof SVGElement) {
      return "svg";
    }
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
      return "mathml";
    }
  }
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn2(
            `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
          );
        }
      });
      const compilerOptions = app.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn2(msg);
          return compilerOptions;
        },
        set() {
          warn2(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn2(
          `Failed to mount app: mount target selector "${container}" returned null.`
        );
      }
      return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn2(
        `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
      );
    }
    return container;
  }

  // ../../node_modules/.pnpm/vue@3.5.43_typescript@5.9.3/node_modules/vue/dist/vue.runtime.esm-bundler.js
  function initDev() {
    {
      initCustomFormatter();
    }
  }
  if (true) {
    initDev();
  }

  // ../../node_modules/.pnpm/@tanstack+vue-query@5.103.1_vue@3.5.43_typescript@5.9.3_/node_modules/@tanstack/vue-query/build/modern/utils.js
  var VUE_QUERY_CLIENT = "VUE_QUERY_CLIENT";
  function getClientKey(key) {
    const suffix = key ? `:${key}` : "";
    return `${VUE_QUERY_CLIENT}${suffix}`;
  }

  // ../../node_modules/.pnpm/@tanstack+vue-query@5.103.1_vue@3.5.43_typescript@5.9.3_/node_modules/@tanstack/vue-query/build/modern/useQueryClient.js
  function useQueryClient(id = "") {
    if (!hasInjectionContext()) throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");
    const key = getClientKey(id);
    const queryClient = inject(key);
    if (!queryClient) throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");
    return queryClient;
  }

  // ../../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/subscribable.js
  var Subscribable = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Set();
      this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
      this.listeners.add(listener);
      this.onSubscribe();
      return () => {
        this.listeners.delete(listener);
        this.onUnsubscribe();
      };
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {
    }
    onUnsubscribe() {
    }
  };

  // ../../node_modules/.pnpm/@tanstack+query-core@5.103.1/node_modules/@tanstack/query-core/build/modern/onlineManager.js
  var OnlineManager = class extends Subscribable {
    #online = true;
    #cleanup;
    #setup;
    constructor() {
      super();
      this.#setup = (onOnline) => {
        if (typeof window !== "undefined" && window.addEventListener) {
          const onlineListener = () => onOnline(true);
          const offlineListener = () => onOnline(false);
          window.addEventListener("online", onlineListener, false);
          window.addEventListener("offline", offlineListener, false);
          return () => {
            window.removeEventListener("online", onlineListener);
            window.removeEventListener("offline", offlineListener);
          };
        }
      };
    }
    onSubscribe() {
      if (!this.#cleanup) this.setEventListener(this.#setup);
    }
    onUnsubscribe() {
      if (!this.hasListeners()) {
        this.#cleanup?.();
        this.#cleanup = void 0;
      }
    }
    /**
    * `setEventListener` can be used to set a custom event listener that will
    * be used to determine the online state. The provided `setup` function
    * receives a `setOnline` callback that should be called with a `boolean`
    * whenever the online state changes.
    *
    * @example
    * ```ts
    * import NetInfo from '@react-native-community/netinfo'
    * import { onlineManager } from '@tanstack/query-core'
    *
    * onlineManager.setEventListener((setOnline) => {
    *   return NetInfo.addEventListener((state) => {
    *     setOnline(!!state.isConnected)
    *   })
    * })
    * ```
    */
    setEventListener(setup) {
      this.#setup = setup;
      this.#cleanup?.();
      this.#cleanup = setup(this.setOnline.bind(this));
    }
    /**
    * `setOnline` can be used to manually set the online state.
    *
    * @example
    * ```ts
    * import { onlineManager } from '@tanstack/query-core'
    *
    * // Set to online
    * onlineManager.setOnline(true)
    *
    * // Set to offline
    * onlineManager.setOnline(false)
    * ```
    */
    setOnline(online) {
      if (this.#online !== online) {
        this.#online = online;
        this.listeners.forEach((listener) => {
          listener(online);
        });
      }
    }
    /**
    * `isOnline` can be used to get the current online state.
    */
    isOnline() {
      return this.#online;
    }
  };
  var onlineManager = new OnlineManager();

  // ../../node_modules/.pnpm/@tanstack+query-devtools@5.103.1_csstype@3.2.3/node_modules/@tanstack/query-devtools/build/index.js
  init_utils_BPMMmTje();
  var s2 = class {
    #e;
    #t;
    #n;
    #r;
    #i = false;
    #a;
    #o;
    #s;
    #c;
    #l;
    #u;
    #d;
    #f;
    #p;
    #m;
    #h;
    constructor(e3) {
      let { client: t2, queryFlavor: r2, version: i2, onlineManager: a2, buttonPosition: o2, position: s3, initialIsOpen: c2, errorTypes: l3, styleNonce: u2, shadowDOMTarget: d2, onClose: f2, hideDisabledQueries: p3, theme: m2 } = e3;
      this.#e = v(t2), this.#n = r2, this.#r = i2, this.#t = a2, this.#a = u2, this.#o = d2, this.#s = v(o2), this.#c = v(s3), this.#l = v(c2), this.#u = v(l3), this.#d = v(p3), this.#f = v(f2), this.#m = v(m2);
    }
    setButtonPosition(e3) {
      this.#s[1](e3);
    }
    setPosition(e3) {
      this.#c[1](e3);
    }
    setInitialIsOpen(e3) {
      this.#l[1](e3);
    }
    setErrorTypes(e3) {
      this.#u[1](e3);
    }
    setClient(e3) {
      this.#e[1](e3);
    }
    setOnClose(e3) {
      this.#f[1](() => e3);
    }
    setTheme(e3) {
      this.#m[1](e3);
    }
    mount(n2) {
      if (this.#i) throw Error(`Devtools is already mounted`);
      let o2 = Ze(() => {
        let n3 = this, [a2] = this.#s, [o3] = this.#c, [s3] = this.#l, [c2] = this.#u, [l3] = this.#d, [u2] = this.#e, [d2] = this.#f, [f2] = this.#m, p3;
        return this.#p ? p3 = this.#p : (p3 = Me(() => Promise.resolve().then(() => (init_DevtoolsPanelComponent_Be8narGM(), DevtoolsPanelComponent_Be8narGM_exports))), this.#p = p3), Hn(this.#a, this.#o), Te(p3, Ae({ get queryFlavor() {
          return n3.#n;
        }, get version() {
          return n3.#r;
        }, get onlineManager() {
          return n3.#t;
        }, get shadowDOMTarget() {
          return n3.#o;
        } }, { get client() {
          return u2();
        }, get buttonPosition() {
          return a2();
        }, get position() {
          return o3();
        }, get initialIsOpen() {
          return s3();
        }, get errorTypes() {
          return c2();
        }, get hideDisabledQueries() {
          return l3();
        }, get onClose() {
          return d2();
        }, get theme() {
          return f2();
        } }));
      }, n2);
      this.#i = true, this.#h = o2;
    }
    unmount() {
      if (!this.#i) throw Error(`Devtools is not mounted`);
      this.#h?.(), this.#i = false;
    }
  };

  // ../../node_modules/.pnpm/@tanstack+vue-query-devtools@6.2.1_@tanstack+vue-query@5.103.1_vue@3.5.43_typescript@5._e0a63ead2957ec70f7f47e5234911b8f/node_modules/@tanstack/vue-query-devtools/dist/esm/devtoolsPanel.vue.js
  var _sfc_main = /* @__PURE__ */ defineComponent({
    __name: "devtoolsPanel",
    props: {
      client: {},
      errorTypes: {},
      styleNonce: {},
      shadowDOMTarget: {},
      style: {},
      onClose: { type: Function },
      hideDisabledQueries: { type: Boolean },
      theme: {}
    },
    setup(__props) {
      const props = __props;
      const style = computed2(() => {
        return {
          height: "500px",
          ...props.style
        };
      });
      const div = ref();
      const client = props.client || useQueryClient();
      const devtools = new s2({
        client,
        queryFlavor: "Vue Query",
        version: "5",
        onlineManager,
        buttonPosition: "bottom-left",
        position: "bottom",
        initialIsOpen: true,
        errorTypes: props.errorTypes,
        styleNonce: props.styleNonce,
        shadowDOMTarget: props.shadowDOMTarget,
        hideDisabledQueries: props.hideDisabledQueries,
        onClose: props.onClose,
        theme: props.theme
      });
      watchEffect(() => {
        devtools.setOnClose(props.onClose ?? (() => {
        }));
        devtools.setErrorTypes(props.errorTypes || []);
        devtools.setTheme(props.theme);
      });
      onMounted(() => {
        devtools.mount(div.value);
        onScopeDispose(() => {
          devtools.unmount();
        });
      });
      return (_ctx, _cache) => {
        return openBlock(), createElementBlock("div", {
          style: normalizeStyle(style.value),
          class: "tsqd-parent-container",
          ref_key: "div",
          ref: div
        }, null, 4);
      };
    }
  });

  // ../../node_modules/.pnpm/@tanstack+vue-query-devtools@6.2.1_@tanstack+vue-query@5.103.1_vue@3.5.43_typescript@5._e0a63ead2957ec70f7f47e5234911b8f/node_modules/@tanstack/vue-query-devtools/dist/esm/index.js
  var VueQueryDevtoolsPanel = false ? function() {
    return null;
  } : _sfc_main;

  // client/hub-client.ts
  var config = globalThis.__DEVFRAME_CONFIG__ ?? {};
  var clientKey = config.clientKey ?? "__TANSTACK_QUERY_CLIENT__";
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
  var readClient = () => readFromAncestors((win) => win[clientKey]);
  var mount = document.getElementById("app");
  if (!mount) {
    document.body.textContent = "Query panel root is missing.";
  } else {
    const client = readClient();
    if (!client) {
      mount.className = "empty";
      mount.textContent = `QueryClient is not on this page (key: ${clientKey}). Call publishQueryClient from the host app.`;
    } else {
      createApp({
        render: () => h(VueQueryDevtoolsPanel, {
          client,
          style: { height: "100%", width: "100%" }
        })
      }).mount(mount);
    }
  }
})();
/*! Bundled license information:

@tanstack/query-devtools/build/Devtools-CFKbGy8Z.js:
  (**
  * match-sorter-utils
  *
  * Copyright (c) TanStack
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  *)
  (**
  * @name match-sorter
  * @license MIT license.
  * @copyright (c) 2099 Kent C. Dodds
  * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
  *)

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

vue/dist/vue.runtime.esm-bundler.js:
  (**
  * vue v3.5.43
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
