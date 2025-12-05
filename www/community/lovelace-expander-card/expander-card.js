var Hi = Object.defineProperty;
var ur = (e) => {
  throw TypeError(e);
};
var Yi = (e, t, n) => t in e ? Hi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var P = (e, t, n) => Yi(e, typeof t != "symbol" ? t + "" : t, n), Nn = (e, t, n) => t.has(e) || ur("Cannot " + n);
var c = (e, t, n) => (Nn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), S = (e, t, n) => t.has(e) ? ur("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), y = (e, t, n, i) => (Nn(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), O = (e, t, n) => (Nn(e, t, "access private method"), n);
var Sr;
typeof window < "u" && ((Sr = window.__svelte ?? (window.__svelte = {})).v ?? (Sr.v = /* @__PURE__ */ new Set())).add("5");
const Ui = {
  icon: "",
  "arrow-color": "",
  "icon-rotate-degree": "",
  "header-color": "",
  "button-background": "",
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  "storage-id": "",
  "expander-card-id": "",
  "show-button-users": [],
  "start-expanded-users": [],
  "expander-card-background": "",
  "expander-card-background-expanded": "",
  "expander-card-display": "",
  gap: "",
  padding: "",
  "expanded-gap": "",
  "child-padding": "",
  "child-margin-top": "",
  "overlay-margin": "",
  "title-card-padding": "",
  style: ""
}, Vi = { icon: {} }, Ji = { text: {} }, Wi = { text: { multiline: !0 } }, Gi = { boolean: {} }, Ki = { object: {} }, Xi = (e) => ({
  number: {
    unit_of_measurement: e
  }
}), Zi = (e, t) => ({
  name: e,
  label: t,
  selector: Vi
}), Y = (e, t) => ({
  name: e,
  label: t,
  selector: Ji
}), Qi = (e, t) => ({
  name: e,
  label: t,
  selector: Wi
}), Nt = (e, t) => ({
  name: e,
  label: t,
  selector: Gi
}), ea = (e, t) => ({
  name: e,
  label: t,
  selector: Ki
}), dr = (e, t, n) => ({
  name: e,
  label: t,
  selector: Xi(n)
}), ta = (e) => ({
  label: e,
  type: "constant"
}), na = [
  {
    type: "expandable",
    label: "Expander Card Settings",
    icon: "mdi:arrow-down-bold-box-outline",
    schema: [
      {
        ...Y("title", "Title")
      },
      {
        ...Zi("icon", "Icon")
      },
      {
        type: "expandable",
        label: "Expander control",
        icon: "mdi:cog-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...Nt("expanded", "Start expanded")
              },
              {
                ...Nt("animation", "Enable animation")
              },
              {
                ...dr("min-width-expanded", "Min width expanded", "px")
              },
              {
                ...dr("max-width-expanded", "Max width expanded", "px")
              },
              {
                ...Y("storage-id", "Storage ID")
              },
              {
                ...Y("expander-card-id", "Expander card ID")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Expander styling",
        icon: "mdi:palette-swatch",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...Y("arrow-color", "Icon color")
              },
              {
                ...Y("icon-rotate-degree", "Icon rotate degree")
              },
              {
                ...Y("header-color", "Header color")
              },
              {
                ...Y("button-background", "Button background color")
              },
              {
                ...Y("expander-card-background", "Background")
              },
              {
                ...Y("expander-card-background-expanded", "Background when expanded")
              },
              {
                ...Y("expander-card-display", "Expander card display")
              },
              {
                ...Nt("clear", "Clear border and background")
              },
              {
                ...Y("gap", "Gap")
              },
              {
                ...Y("padding", "Padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Card styling",
        icon: "mdi:palette-swatch-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...Y("expanded-gap", "Card gap")
              },
              {
                ...Y("child-padding", "Card padding")
              },
              {
                ...Y("child-margin-top", "Card margin top")
              },
              {
                ...Nt("clear-children", "Clear card border and background")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Title card",
        icon: "mdi:subtitles-outline",
        schema: [
          {
            ...ta("Use YAML to specify a title card to replace the expander title")
          },
          {
            ...ea("title-card", "")
          },
          {
            type: "grid",
            schema: [
              {
                ...Nt("title-card-clickable", "Make title card clickable to expand/collapse")
              },
              {
                ...Nt("title-card-button-overlay", "Overlay expand button on title card")
              },
              {
                ...Y("overlay-margin", "Overlay margin")
              },
              {
                ...Y("title-card-padding", "Title card padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "User settings",
        icon: "mdi:account-multiple-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                name: "show-button-users",
                label: "Show button users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              },
              {
                name: "start-expanded-users",
                label: "Start expanded users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Advanced styling",
        icon: "mdi:brush-outline",
        schema: [
          {
            ...Qi("style", "Custom CSS style")
          }
        ]
      }
    ]
  }
], Jt = window;
let fn = Jt.cardHelpers;
const ra = new Promise((e) => {
  fn && e(), Jt.loadCardHelpers && Jt.loadCardHelpers().then((t) => {
    fn = t, Jt.cardHelpers = fn, e();
  });
});
async function ia() {
  const e = document.querySelector("home-assistant"), t = e == null ? void 0 : e.hass;
  return t ? (await t.callWS({ type: "config/auth/list" })).filter((i) => !i.system_generated).map((i) => i.name) : void 0;
}
const aa = async () => {
  const t = await (await ra.then(() => fn.createCardElement({ type: "vertical-stack", cards: [] }))).constructor.getConfigElement(), n = await ia();
  return class extends t.constructor {
    constructor() {
      super(), this._computeLabelCallback = (r) => r.label ?? r.name ?? "", this._valueChanged = (r) => {
        const a = r.detail.value, o = Object.entries(Ui);
        for (const [s, l] of o) {
          if (typeof l == "object" && Array.isArray(l) && Array.isArray(a[s])) {
            JSON.stringify(a[s]) === JSON.stringify(l) && delete a[s];
            continue;
          }
          a[s] === l && delete a[s];
        }
        this._config = a, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
      }, this._users = n;
    }
    // override setConfig to store config only and not assert stack editor config
    // we also upgrade any old config here if needed
    setConfig(r) {
      this._config = r;
    }
    // define _schema getter to return our own schema
    get _schema() {
      const a = JSON.stringify(na), o = this._users.map((f) => f.replace(/\\/g, "\\\\").replace(/"/g, '\\"')).join('","'), s = a.replace(/\[\[users\]\]/g, o);
      return JSON.parse(s);
    }
    // _schema setter does nothing as we want to use our own schema
    set _schema(r) {
    }
  };
}, sa = (async () => {
  for (; customElements.get("home-assistant") === void 0; )
    await new Promise((e) => Jt.setTimeout(e, 100));
  if (!customElements.get("expander-card-editor")) {
    const e = await aa();
    customElements.define("expander-card-editor", e);
  }
}), oa = 1, la = 2, fa = 16, ca = 1, ua = 2, Cr = "[", En = "[!", Wn = "]", Et = {}, J = Symbol(), da = "http://www.w3.org/1999/xhtml", Rn = !1;
var Tr = Array.isArray, ha = Array.prototype.indexOf, xn = Array.from, pn = Object.keys, vn = Object.defineProperty, zt = Object.getOwnPropertyDescriptor, pa = Object.getOwnPropertyDescriptors, va = Object.prototype, ga = Array.prototype, qr = Object.getPrototypeOf, hr = Object.isExtensible;
function _a(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Ar() {
  var e, t, n = new Promise((i, r) => {
    e = i, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const U = 2, Gn = 4, Kn = 8, ma = 1 << 24, Ye = 16, Ue = 32, st = 64, kn = 128, Te = 512, W = 1024, ie = 2048, Ve = 4096, fe = 8192, He = 16384, Sn = 32768, Dt = 65536, pr = 1 << 17, Or = 1 << 18, Ct = 1 << 19, ya = 1 << 20, nt = 1 << 25, xt = 32768, jn = 1 << 21, Xn = 1 << 22, rt = 1 << 23, cn = Symbol("$state"), wa = Symbol("legacy props"), ba = Symbol(""), jt = new class extends Error {
  constructor() {
    super(...arguments);
    P(this, "name", "StaleReactionError");
    P(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Zn = 3, Tt = 8;
function $a(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ea() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function xa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Sa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ca() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ta() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function qa() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Aa() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oa() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Na() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function an(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function Ra() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let C = !1;
function Se(e) {
  C = e;
}
let k;
function ee(e) {
  if (e === null)
    throw an(), Et;
  return k = e;
}
function Lt() {
  return ee(/* @__PURE__ */ qe(k));
}
function Ie(e) {
  if (C) {
    if (/* @__PURE__ */ qe(k) !== null)
      throw an(), Et;
    k = e;
  }
}
function ja(e = 1) {
  if (C) {
    for (var t = e, n = k; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ qe(n);
    k = n;
  }
}
function gn(e = !0) {
  for (var t = 0, n = k; ; ) {
    if (n.nodeType === Tt) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === Wn) {
        if (t === 0) return n;
        t -= 1;
      } else (i === Cr || i === En) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qe(n)
    );
    e && n.remove(), n = r;
  }
}
function Nr(e) {
  if (!e || e.nodeType !== Tt)
    throw an(), Et;
  return (
    /** @type {Comment} */
    e.data
  );
}
function Rr(e) {
  return e === this.v;
}
function za(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function jr(e) {
  return !za(e, this.v);
}
let Pa = !1, ce = null;
function Bt(e) {
  ce = e;
}
function Qn(e, t = !1, n) {
  ce = {
    p: ce,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function er(e) {
  var t = (
    /** @type {ComponentContext} */
    ce
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      ni(i);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ce = t.p, e ?? /** @type {T} */
  {};
}
function zr() {
  return !0;
}
let dt = [];
function Pr() {
  var e = dt;
  dt = [], _a(e);
}
function Cn(e) {
  if (dt.length === 0 && !Wt) {
    var t = dt;
    queueMicrotask(() => {
      t === dt && Pr();
    });
  }
  dt.push(e);
}
function Fa() {
  for (; dt.length > 0; )
    Pr();
}
function Fr(e) {
  var t = T;
  if (t === null)
    return x.f |= rt, e;
  if ((t.f & Sn) === 0) {
    if ((t.f & kn) === 0)
      throw e;
    t.b.error(e);
  } else
    Ht(e, t);
}
function Ht(e, t) {
  for (; t !== null; ) {
    if ((t.f & kn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const on = /* @__PURE__ */ new Set();
let q = null, F = null, me = [], Tn = null, zn = !1, Wt = !1;
var Pt, Ft, pt, vt, en, Mt, It, D, Pn, ut, Fn, Mr, Ir;
const wn = class wn {
  constructor() {
    S(this, D);
    P(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    P(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    P(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    S(this, Pt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    S(this, Ft, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    S(this, pt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    S(this, vt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    S(this, en, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    S(this, Mt, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    S(this, It, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    P(this, "skipped_effects", /* @__PURE__ */ new Set());
    P(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || c(this, vt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    me = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const r of t)
      O(this, D, Pn).call(this, r, n);
    this.is_fork || O(this, D, Mr).call(this), this.is_deferred() ? (O(this, D, ut).call(this, n.effects), O(this, D, ut).call(this, n.render_effects), O(this, D, ut).call(this, n.block_effects)) : (q = null, vr(n.render_effects), vr(n.effects), (i = c(this, en)) == null || i.resolve()), F = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & rt) === 0 && (this.current.set(t, t.v), F == null || F.set(t, t.v));
  }
  activate() {
    q = this, this.apply();
  }
  deactivate() {
    q === this && (q = null, F = null);
  }
  flush() {
    if (this.activate(), me.length > 0) {
      if (Dr(), q !== null && q !== this)
        return;
    } else c(this, pt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of c(this, Ft)) t(this);
    c(this, Ft).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    y(this, pt, c(this, pt) + 1), t && y(this, vt, c(this, vt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    y(this, pt, c(this, pt) - 1), t && y(this, vt, c(this, vt) - 1), this.revive();
  }
  revive() {
    for (const t of c(this, Mt))
      K(t, ie), kt(t);
    for (const t of c(this, It))
      K(t, Ve), kt(t);
    y(this, Mt, []), y(this, It, []), this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    c(this, Pt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    c(this, Ft).add(t);
  }
  settled() {
    return (c(this, en) ?? y(this, en, Ar())).promise;
  }
  static ensure() {
    if (q === null) {
      const t = q = new wn();
      on.add(q), Wt || wn.enqueue(() => {
        q === t && t.flush();
      });
    }
    return q;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Cn(t);
  }
  apply() {
  }
};
Pt = new WeakMap(), Ft = new WeakMap(), pt = new WeakMap(), vt = new WeakMap(), en = new WeakMap(), Mt = new WeakMap(), It = new WeakMap(), D = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Pn = function(t, n) {
  var u;
  t.f ^= W;
  for (var i = t.first; i !== null; ) {
    var r = i.f, a = (r & (Ue | st)) !== 0, o = a && (r & W) !== 0, s = o || (r & fe) !== 0 || this.skipped_effects.has(i);
    if ((i.f & kn) !== 0 && ((u = i.b) != null && u.is_pending()) && (n = {
      parent: n,
      effect: i,
      effects: [],
      render_effects: [],
      block_effects: []
    }), !s && i.fn !== null) {
      a ? i.f ^= W : (r & Gn) !== 0 ? n.effects.push(i) : sn(i) && ((i.f & Ye) !== 0 && n.block_effects.push(i), Qt(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var f = i.parent;
    for (i = i.next; i === null && f !== null; )
      f === n.effect && (O(this, D, ut).call(this, n.effects), O(this, D, ut).call(this, n.render_effects), O(this, D, ut).call(this, n.block_effects), n = /** @type {EffectTarget} */
      n.parent), i = f.next, f = f.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ut = function(t) {
  for (const n of t)
    ((n.f & ie) !== 0 ? c(this, Mt) : c(this, It)).push(n), O(this, D, Fn).call(this, n.deps), K(n, W);
}, /**
 * @param {Value[] | null} deps
 */
Fn = function(t) {
  if (t !== null)
    for (const n of t)
      (n.f & U) === 0 || (n.f & xt) === 0 || (n.f ^= xt, O(this, D, Fn).call(
        this,
        /** @type {Derived} */
        n.deps
      ));
}, Mr = function() {
  if (c(this, vt) === 0) {
    for (const t of c(this, Pt)) t();
    c(this, Pt).clear();
  }
  c(this, pt) === 0 && O(this, D, Ir).call(this);
}, Ir = function() {
  var a;
  if (on.size > 1) {
    this.previous.clear();
    var t = F, n = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: [],
      block_effects: []
    };
    for (const o of on) {
      if (o === this) {
        n = !1;
        continue;
      }
      const s = [];
      for (const [f, u] of this.current) {
        if (o.current.has(f))
          if (n && u !== o.current.get(f))
            o.current.set(f, u);
          else
            continue;
        s.push(f);
      }
      if (s.length === 0)
        continue;
      const l = [...o.current.keys()].filter((f) => !this.current.has(f));
      if (l.length > 0) {
        var r = me;
        me = [];
        const f = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const h of s)
          Lr(h, l, f, u);
        if (me.length > 0) {
          q = o, o.apply();
          for (const h of me)
            O(a = o, D, Pn).call(a, h, i);
          o.deactivate();
        }
        me = r;
      }
    }
    q = null, F = t;
  }
  this.committed = !0, on.delete(this);
};
let Pe = wn;
function _e(e) {
  var t = Wt;
  Wt = !0;
  try {
    for (var n; ; ) {
      if (Fa(), me.length === 0 && (q == null || q.flush(), me.length === 0))
        return Tn = null, /** @type {T} */
        n;
      Dr();
    }
  } finally {
    Wt = t;
  }
}
function Dr() {
  var e = bt;
  zn = !0;
  var t = null;
  try {
    var n = 0;
    for (mn(!0); me.length > 0; ) {
      var i = Pe.ensure();
      if (n++ > 1e3) {
        var r, a;
        Ma();
      }
      i.process(me), it.clear();
    }
  } finally {
    zn = !1, mn(e), Tn = null;
  }
}
function Ma() {
  try {
    Ca();
  } catch (e) {
    Ht(e, Tn);
  }
}
let Ee = null;
function vr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (He | fe)) === 0 && sn(i) && (Ee = /* @__PURE__ */ new Set(), Qt(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? oi(i) : i.fn = null), (Ee == null ? void 0 : Ee.size) > 0)) {
        it.clear();
        for (const r of Ee) {
          if ((r.f & (He | fe)) !== 0) continue;
          const a = [r];
          let o = r.parent;
          for (; o !== null; )
            Ee.has(o) && (Ee.delete(o), a.push(o)), o = o.parent;
          for (let s = a.length - 1; s >= 0; s--) {
            const l = a[s];
            (l.f & (He | fe)) === 0 && Qt(l);
          }
        }
        Ee.clear();
      }
    }
    Ee = null;
  }
}
function Lr(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const a = r.f;
      (a & U) !== 0 ? Lr(
        /** @type {Derived} */
        r,
        t,
        n,
        i
      ) : (a & (Xn | Ye)) !== 0 && (a & ie) === 0 && Br(r, t, i) && (K(r, ie), kt(
        /** @type {Effect} */
        r
      ));
    }
}
function Br(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (t.includes(r))
        return !0;
      if ((r.f & U) !== 0 && Br(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function kt(e) {
  for (var t = Tn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (zn && t === T && (n & Ye) !== 0 && (n & Or) === 0)
      return;
    if ((n & (st | Ue)) !== 0) {
      if ((n & W) === 0) return;
      t.f ^= W;
    }
  }
  me.push(t);
}
function Ia(e) {
  let t = 0, n = St(0), i;
  return () => {
    Xt() && (d(n), nr(() => (t === 0 && (i = ar(() => e(() => Gt(n)))), t += 1, () => {
      Cn(() => {
        t -= 1, t === 0 && (i == null || i(), i = void 0, Gt(n));
      });
    })));
  };
}
var Da = Dt | Ct | kn;
function La(e, t, n) {
  new Ba(e, t, n);
}
var pe, oe, tn, Ne, gt, Re, ve, re, je, Le, Qe, _t, et, mt, tt, bn, M, Hr, Yr, Mn, un, dn, In;
class Ba {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    S(this, M);
    /** @type {Boundary | null} */
    P(this, "parent");
    S(this, pe, !1);
    /** @type {TemplateNode} */
    S(this, oe);
    /** @type {TemplateNode | null} */
    S(this, tn, C ? k : null);
    /** @type {BoundaryProps} */
    S(this, Ne);
    /** @type {((anchor: Node) => void)} */
    S(this, gt);
    /** @type {Effect} */
    S(this, Re);
    /** @type {Effect | null} */
    S(this, ve, null);
    /** @type {Effect | null} */
    S(this, re, null);
    /** @type {Effect | null} */
    S(this, je, null);
    /** @type {DocumentFragment | null} */
    S(this, Le, null);
    /** @type {TemplateNode | null} */
    S(this, Qe, null);
    S(this, _t, 0);
    S(this, et, 0);
    S(this, mt, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    S(this, tt, null);
    S(this, bn, Ia(() => (y(this, tt, St(c(this, _t))), () => {
      y(this, tt, null);
    })));
    y(this, oe, t), y(this, Ne, n), y(this, gt, i), this.parent = /** @type {Effect} */
    T.b, y(this, pe, !!c(this, Ne).pending), y(this, Re, rr(() => {
      if (T.b = this, C) {
        const a = c(this, tn);
        Lt(), /** @type {Comment} */
        a.nodeType === Tt && /** @type {Comment} */
        a.data === En ? O(this, M, Yr).call(this) : O(this, M, Hr).call(this);
      } else {
        var r = O(this, M, Mn).call(this);
        try {
          y(this, ve, ye(() => i(r)));
        } catch (a) {
          this.error(a);
        }
        c(this, et) > 0 ? O(this, M, dn).call(this) : y(this, pe, !1);
      }
      return () => {
        var a;
        (a = c(this, Qe)) == null || a.remove();
      };
    }, Da)), C && y(this, oe, k);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return c(this, pe) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!c(this, Ne).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    O(this, M, In).call(this, t), y(this, _t, c(this, _t) + t), c(this, tt) && Yt(c(this, tt), c(this, _t));
  }
  get_effect_pending() {
    return c(this, bn).call(this), d(
      /** @type {Source<number>} */
      c(this, tt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = c(this, Ne).onerror;
    let i = c(this, Ne).failed;
    if (c(this, mt) || !n && !i)
      throw t;
    c(this, ve) && (te(c(this, ve)), y(this, ve, null)), c(this, re) && (te(c(this, re)), y(this, re, null)), c(this, je) && (te(c(this, je)), y(this, je, null)), C && (ee(
      /** @type {TemplateNode} */
      c(this, tn)
    ), ja(), ee(gn()));
    var r = !1, a = !1;
    const o = () => {
      if (r) {
        Ra();
        return;
      }
      r = !0, a && Na(), Pe.ensure(), y(this, _t, 0), c(this, je) !== null && wt(c(this, je), () => {
        y(this, je, null);
      }), y(this, pe, this.has_pending_snippet()), y(this, ve, O(this, M, un).call(this, () => (y(this, mt, !1), ye(() => c(this, gt).call(this, c(this, oe)))))), c(this, et) > 0 ? O(this, M, dn).call(this) : y(this, pe, !1);
    };
    var s = x;
    try {
      G(null), a = !0, n == null || n(t, o), a = !1;
    } catch (l) {
      Ht(l, c(this, Re) && c(this, Re).parent);
    } finally {
      G(s);
    }
    i && Cn(() => {
      y(this, je, O(this, M, un).call(this, () => {
        Pe.ensure(), y(this, mt, !0);
        try {
          return ye(() => {
            i(
              c(this, oe),
              () => t,
              () => o
            );
          });
        } catch (l) {
          return Ht(
            l,
            /** @type {Effect} */
            c(this, Re).parent
          ), null;
        } finally {
          y(this, mt, !1);
        }
      }));
    });
  }
}
pe = new WeakMap(), oe = new WeakMap(), tn = new WeakMap(), Ne = new WeakMap(), gt = new WeakMap(), Re = new WeakMap(), ve = new WeakMap(), re = new WeakMap(), je = new WeakMap(), Le = new WeakMap(), Qe = new WeakMap(), _t = new WeakMap(), et = new WeakMap(), mt = new WeakMap(), tt = new WeakMap(), bn = new WeakMap(), M = new WeakSet(), Hr = function() {
  try {
    y(this, ve, ye(() => c(this, gt).call(this, c(this, oe))));
  } catch (t) {
    this.error(t);
  }
  y(this, pe, !1);
}, Yr = function() {
  const t = c(this, Ne).pending;
  t && (y(this, re, ye(() => t(c(this, oe)))), Pe.enqueue(() => {
    var n = O(this, M, Mn).call(this);
    y(this, ve, O(this, M, un).call(this, () => (Pe.ensure(), ye(() => c(this, gt).call(this, n))))), c(this, et) > 0 ? O(this, M, dn).call(this) : (wt(
      /** @type {Effect} */
      c(this, re),
      () => {
        y(this, re, null);
      }
    ), y(this, pe, !1));
  }));
}, Mn = function() {
  var t = c(this, oe);
  return c(this, pe) && (y(this, Qe, we()), c(this, oe).before(c(this, Qe)), t = c(this, Qe)), t;
}, /**
 * @param {() => Effect | null} fn
 */
un = function(t) {
  var n = T, i = x, r = ce;
  be(c(this, Re)), G(c(this, Re)), Bt(c(this, Re).ctx);
  try {
    return t();
  } catch (a) {
    return Fr(a), null;
  } finally {
    be(n), G(i), Bt(r);
  }
}, dn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    c(this, Ne).pending
  );
  c(this, ve) !== null && (y(this, Le, document.createDocumentFragment()), c(this, Le).append(
    /** @type {TemplateNode} */
    c(this, Qe)
  ), ci(c(this, ve), c(this, Le))), c(this, re) === null && y(this, re, ye(() => t(c(this, oe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
In = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && O(n = this.parent, M, In).call(n, t);
    return;
  }
  y(this, et, c(this, et) + t), c(this, et) === 0 && (y(this, pe, !1), c(this, re) && wt(c(this, re), () => {
    y(this, re, null);
  }), c(this, Le) && (c(this, oe).before(c(this, Le)), y(this, Le, null)));
};
function Ha(e, t, n, i) {
  const r = qn;
  if (n.length === 0 && e.length === 0) {
    i(t.map(r));
    return;
  }
  var a = q, o = (
    /** @type {Effect} */
    T
  ), s = Ya();
  function l() {
    Promise.all(n.map((f) => /* @__PURE__ */ Ua(f))).then((f) => {
      s();
      try {
        i([...t.map(r), ...f]);
      } catch (u) {
        (o.f & He) === 0 && Ht(u, o);
      }
      a == null || a.deactivate(), _n();
    }).catch((f) => {
      Ht(f, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    s();
    try {
      return l();
    } finally {
      a == null || a.deactivate(), _n();
    }
  }) : l();
}
function Ya() {
  var e = T, t = x, n = ce, i = q;
  return function(a = !0) {
    be(e), G(t), Bt(n), a && (i == null || i.activate());
  };
}
function _n() {
  be(null), G(null), Bt(null);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  var t = U | ie, n = x !== null && (x.f & U) !== 0 ? (
    /** @type {Derived} */
    x
  ) : null;
  return T !== null && (T.f |= Ct), {
    ctx: ce,
    deps: null,
    effects: null,
    equals: Rr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      J
    ),
    wv: 0,
    parent: n ?? T,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ua(e, t) {
  let n = (
    /** @type {Effect | null} */
    T
  );
  n === null && Ea();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = St(
    /** @type {V} */
    J
  ), o = !x, s = /* @__PURE__ */ new Map();
  return ts(() => {
    var v;
    var l = Ar();
    r = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        f === q && f.committed && f.deactivate(), _n();
      });
    } catch (g) {
      l.reject(g), _n();
    }
    var f = (
      /** @type {Batch} */
      q
    );
    if (o) {
      var u = !i.is_pending();
      i.update_pending_count(1), f.increment(u), (v = s.get(f)) == null || v.reject(jt), s.delete(f), s.set(f, l);
    }
    const h = (g, p = void 0) => {
      if (f.activate(), p)
        p !== jt && (a.f |= rt, Yt(a, p));
      else {
        (a.f & rt) !== 0 && (a.f ^= rt), Yt(a, g);
        for (const [E, w] of s) {
          if (s.delete(E), E === f) break;
          w.reject(jt);
        }
      }
      o && (i.update_pending_count(-1), f.decrement(u));
    };
    l.promise.then(h, (g) => h(null, g || "unknown"));
  }), Za(() => {
    for (const l of s.values())
      l.reject(jt);
  }), new Promise((l) => {
    function f(u) {
      function h() {
        u === r ? l(a) : f(r);
      }
      u.then(h, h);
    }
    f(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Va(e) {
  const t = /* @__PURE__ */ qn(e);
  return ui(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ja(e) {
  const t = /* @__PURE__ */ qn(e);
  return t.equals = jr, t;
}
function Ur(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      te(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Wa(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & U) === 0)
      return (t.f & He) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function tr(e) {
  var t, n = T;
  be(Wa(e));
  try {
    e.f &= ~xt, Ur(e), t = vi(e);
  } finally {
    be(n);
  }
  return t;
}
function Vr(e) {
  var t = tr(e);
  if (e.equals(t) || (q != null && q.is_fork || (e.v = t), e.wv = hi()), !qt)
    if (F !== null)
      (Xt() || q != null && q.is_fork) && F.set(e, t);
    else {
      var n = (e.f & Te) === 0 ? Ve : W;
      K(e, n);
    }
}
let Dn = /* @__PURE__ */ new Set();
const it = /* @__PURE__ */ new Map();
let Jr = !1;
function St(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Rr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  const n = St(e);
  return ui(n), n;
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t = !1, n = !0) {
  const i = St(e);
  return t || (i.equals = jr), i;
}
function b(e, t, n = !1) {
  x !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Fe || (x.f & pr) !== 0) && zr() && (x.f & (U | Ye | Xn | pr)) !== 0 && !(ne != null && ne.includes(e)) && Oa();
  let i = n ? ht(t) : t;
  return Yt(e, i);
}
function Yt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    qt ? it.set(e, t) : it.set(e, n), e.v = t;
    var i = Pe.ensure();
    i.capture(e, n), (e.f & U) !== 0 && ((e.f & ie) !== 0 && tr(
      /** @type {Derived} */
      e
    ), K(e, (e.f & Te) !== 0 ? W : Ve)), e.wv = hi(), Gr(e, ie), T !== null && (T.f & W) !== 0 && (T.f & (Ue | st)) === 0 && (de === null ? rs([e]) : de.push(e)), !i.is_fork && Dn.size > 0 && !Jr && Ga();
  }
  return t;
}
function Ga() {
  Jr = !1;
  var e = bt;
  mn(!0);
  const t = Array.from(Dn);
  try {
    for (const n of t)
      (n.f & W) !== 0 && K(n, Ve), sn(n) && Qt(n);
  } finally {
    mn(e);
  }
  Dn.clear();
}
function Gt(e) {
  b(e, e.v + 1);
}
function Gr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, r = 0; r < i; r++) {
      var a = n[r], o = a.f, s = (o & ie) === 0;
      if (s && K(a, t), (o & U) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        F == null || F.delete(l), (o & xt) === 0 && (o & Te && (a.f |= xt), Gr(l, Ve));
      } else s && ((o & Ye) !== 0 && Ee !== null && Ee.add(
        /** @type {Effect} */
        a
      ), kt(
        /** @type {Effect} */
        a
      ));
    }
}
function ht(e) {
  if (typeof e != "object" || e === null || cn in e)
    return e;
  const t = qr(e);
  if (t !== va && t !== ga)
    return e;
  var n = /* @__PURE__ */ new Map(), i = Tr(e), r = /* @__PURE__ */ N(0), a = $t, o = (s) => {
    if ($t === a)
      return s();
    var l = x, f = $t;
    G(null), yr(a);
    var u = s();
    return G(l), yr(f), u;
  };
  return i && n.set("length", /* @__PURE__ */ N(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && qa();
        var u = n.get(l);
        return u === void 0 ? u = o(() => {
          var h = /* @__PURE__ */ N(f.value);
          return n.set(l, h), h;
        }) : b(u, f.value, !0), !0;
      },
      deleteProperty(s, l) {
        var f = n.get(l);
        if (f === void 0) {
          if (l in s) {
            const u = o(() => /* @__PURE__ */ N(J));
            n.set(l, u), Gt(r);
          }
        } else
          b(f, J), Gt(r);
        return !0;
      },
      get(s, l, f) {
        var g;
        if (l === cn)
          return e;
        var u = n.get(l), h = l in s;
        if (u === void 0 && (!h || (g = zt(s, l)) != null && g.writable) && (u = o(() => {
          var p = ht(h ? s[l] : J), E = /* @__PURE__ */ N(p);
          return E;
        }), n.set(l, u)), u !== void 0) {
          var v = d(u);
          return v === J ? void 0 : v;
        }
        return Reflect.get(s, l, f);
      },
      getOwnPropertyDescriptor(s, l) {
        var f = Reflect.getOwnPropertyDescriptor(s, l);
        if (f && "value" in f) {
          var u = n.get(l);
          u && (f.value = d(u));
        } else if (f === void 0) {
          var h = n.get(l), v = h == null ? void 0 : h.v;
          if (h !== void 0 && v !== J)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return f;
      },
      has(s, l) {
        var v;
        if (l === cn)
          return !0;
        var f = n.get(l), u = f !== void 0 && f.v !== J || Reflect.has(s, l);
        if (f !== void 0 || T !== null && (!u || (v = zt(s, l)) != null && v.writable)) {
          f === void 0 && (f = o(() => {
            var g = u ? ht(s[l]) : J, p = /* @__PURE__ */ N(g);
            return p;
          }), n.set(l, f));
          var h = d(f);
          if (h === J)
            return !1;
        }
        return u;
      },
      set(s, l, f, u) {
        var m;
        var h = n.get(l), v = l in s;
        if (i && l === "length")
          for (var g = f; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var p = n.get(g + "");
            p !== void 0 ? b(p, J) : g in s && (p = o(() => /* @__PURE__ */ N(J)), n.set(g + "", p));
          }
        if (h === void 0)
          (!v || (m = zt(s, l)) != null && m.writable) && (h = o(() => /* @__PURE__ */ N(void 0)), b(h, ht(f)), n.set(l, h));
        else {
          v = h.v !== J;
          var E = o(() => ht(f));
          b(h, E);
        }
        var w = Reflect.getOwnPropertyDescriptor(s, l);
        if (w != null && w.set && w.set.call(u, f), !v) {
          if (i && typeof l == "string") {
            var R = (
              /** @type {Source<number>} */
              n.get("length")
            ), I = Number(l);
            Number.isInteger(I) && I >= R.v && b(R, I + 1);
          }
          Gt(r);
        }
        return !0;
      },
      ownKeys(s) {
        d(r);
        var l = Reflect.ownKeys(s).filter((h) => {
          var v = n.get(h);
          return v === void 0 || v.v !== J;
        });
        for (var [f, u] of n)
          u.v !== J && !(f in s) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        Aa();
      }
    }
  );
}
var gr, Kr, Xr, Zr;
function Ln() {
  if (gr === void 0) {
    gr = window, Kr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Xr = zt(t, "firstChild").get, Zr = zt(t, "nextSibling").get, hr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), hr(n) && (n.__t = void 0);
  }
}
function we(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Ce(e) {
  return (
    /** @type {TemplateNode | null} */
    Xr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return (
    /** @type {TemplateNode | null} */
    Zr.call(e)
  );
}
function Ge(e, t) {
  if (!C)
    return /* @__PURE__ */ Ce(e);
  var n = /* @__PURE__ */ Ce(k);
  if (n === null)
    n = k.appendChild(we());
  else if (t && n.nodeType !== Zn) {
    var i = we();
    return n == null || n.before(i), ee(i), i;
  }
  return ee(n), n;
}
function _r(e, t = !1) {
  if (!C) {
    var n = /* @__PURE__ */ Ce(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ qe(n) : n;
  }
  if (t && (k == null ? void 0 : k.nodeType) !== Zn) {
    var i = we();
    return k == null || k.before(i), ee(i), i;
  }
  return k;
}
function ct(e, t = 1, n = !1) {
  let i = C ? k : e;
  for (var r; t--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(i);
  if (!C)
    return i;
  if (n && (i == null ? void 0 : i.nodeType) !== Zn) {
    var a = we();
    return i === null ? r == null || r.after(a) : i.before(a), ee(a), a;
  }
  return ee(i), i;
}
function Qr(e) {
  e.textContent = "";
}
function ei() {
  return !1;
}
function ti(e) {
  var t = x, n = T;
  G(null), be(null);
  try {
    return e();
  } finally {
    G(t), be(n);
  }
}
function Ka(e) {
  T === null && (x === null && Sa(), ka()), qt && xa();
}
function Xa(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Me(e, t, n) {
  var i = T;
  i !== null && (i.f & fe) !== 0 && (e |= fe);
  var r = {
    ctx: ce,
    deps: null,
    nodes: null,
    f: e | ie | Te,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Qt(r), r.f |= Sn;
    } catch (s) {
      throw te(r), s;
    }
  else t !== null && kt(r);
  var a = r;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
  (a.f & Ct) === 0 && (a = a.first, (e & Ye) !== 0 && (e & Dt) !== 0 && a !== null && (a.f |= Dt)), a !== null && (a.parent = i, i !== null && Xa(a, i), x !== null && (x.f & U) !== 0 && (e & st) === 0)) {
    var o = (
      /** @type {Derived} */
      x
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return r;
}
function Xt() {
  return x !== null && !Fe;
}
function Za(e) {
  const t = Me(Kn, null, !1);
  return K(t, W), t.teardown = e, t;
}
function Kt(e) {
  Ka();
  var t = (
    /** @type {Effect} */
    T.f
  ), n = !x && (t & Ue) !== 0 && (t & Sn) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      ce
    );
    (i.e ?? (i.e = [])).push(e);
  } else
    return ni(e);
}
function ni(e) {
  return Me(Gn | ya, e, !1);
}
function Qa(e) {
  Pe.ensure();
  const t = Me(st | Ct, e, !0);
  return () => {
    te(t);
  };
}
function es(e) {
  Pe.ensure();
  const t = Me(st | Ct, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? wt(t, () => {
      te(t), i(void 0);
    }) : (te(t), i(void 0));
  });
}
function ri(e) {
  return Me(Gn, e, !1);
}
function ts(e) {
  return Me(Xn | Ct, e, !0);
}
function nr(e, t = 0) {
  return Me(Kn | t, e, !0);
}
function De(e, t = [], n = [], i = []) {
  Ha(i, t, n, (r) => {
    Me(Kn, () => e(...r.map(d)), !0);
  });
}
function rr(e, t = 0) {
  var n = Me(Ye | t, e, !0);
  return n;
}
function ye(e) {
  return Me(Ue | Ct, e, !0);
}
function ii(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = qt, i = x;
    mr(!0), G(null);
    try {
      t.call(null);
    } finally {
      mr(n), G(i);
    }
  }
}
function ai(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && ti(() => {
      r.abort(jt);
    });
    var i = n.next;
    (n.f & st) !== 0 ? n.parent = null : te(n, t), n = i;
  }
}
function ns(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ue) === 0 && te(t), t = n;
  }
}
function te(e, t = !0) {
  var n = !1;
  (t || (e.f & Or) !== 0) && e.nodes !== null && e.nodes.end !== null && (si(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), ai(e, t && !n), yn(e, 0), K(e, He);
  var i = e.nodes && e.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  ii(e);
  var r = e.parent;
  r !== null && r.first !== null && oi(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function si(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ qe(e);
    e.remove(), e = n;
  }
}
function oi(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function wt(e, t, n = !0) {
  var i = [];
  li(e, i, !0);
  var r = () => {
    n && te(e), t && t();
  }, a = i.length;
  if (a > 0) {
    var o = () => --a || r();
    for (var s of i)
      s.out(o);
  } else
    r();
}
function li(e, t, n) {
  if ((e.f & fe) === 0) {
    e.f ^= fe;
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next, o = (r.f & Dt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Ue) !== 0 && (e.f & Ye) !== 0;
      li(r, t, o ? n : !1), r = a;
    }
  }
}
function ir(e) {
  fi(e, !0);
}
function fi(e, t) {
  if ((e.f & fe) !== 0) {
    e.f ^= fe, (e.f & W) === 0 && (K(e, ie), kt(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, r = (n.f & Dt) !== 0 || (n.f & Ue) !== 0;
      fi(n, r ? t : !1), n = i;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function ci(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end; n !== null; ) {
      var r = n === i ? null : /* @__PURE__ */ qe(n);
      t.append(n), n = r;
    }
}
let bt = !1;
function mn(e) {
  bt = e;
}
let qt = !1;
function mr(e) {
  qt = e;
}
let x = null, Fe = !1;
function G(e) {
  x = e;
}
let T = null;
function be(e) {
  T = e;
}
let ne = null;
function ui(e) {
  x !== null && (ne === null ? ne = [e] : ne.push(e));
}
let Q = null, se = 0, de = null;
function rs(e) {
  de = e;
}
let di = 1, Zt = 0, $t = Zt;
function yr(e) {
  $t = e;
}
function hi() {
  return ++di;
}
function sn(e) {
  var t = e.f;
  if ((t & ie) !== 0)
    return !0;
  if (t & U && (e.f &= ~xt), (t & Ve) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var i = n.length, r = 0; r < i; r++) {
        var a = n[r];
        if (sn(
          /** @type {Derived} */
          a
        ) && Vr(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
      }
    (t & Te) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    F === null && K(e, W);
  }
  return !1;
}
function pi(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !(ne != null && ne.includes(e)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      (a.f & U) !== 0 ? pi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? K(a, ie) : (a.f & W) !== 0 && K(a, Ve), kt(
        /** @type {Effect} */
        a
      ));
    }
}
function vi(e) {
  var p;
  var t = Q, n = se, i = de, r = x, a = ne, o = ce, s = Fe, l = $t, f = e.f;
  Q = /** @type {null | Value[]} */
  null, se = 0, de = null, x = (f & (Ue | st)) === 0 ? e : null, ne = null, Bt(e.ctx), Fe = !1, $t = ++Zt, e.ac !== null && (ti(() => {
    e.ac.abort(jt);
  }), e.ac = null);
  try {
    e.f |= jn;
    var u = (
      /** @type {Function} */
      e.fn
    ), h = u(), v = e.deps;
    if (Q !== null) {
      var g;
      if (yn(e, se), v !== null && se > 0)
        for (v.length = se + Q.length, g = 0; g < Q.length; g++)
          v[se + g] = Q[g];
      else
        e.deps = v = Q;
      if (Xt() && (e.f & Te) !== 0)
        for (g = se; g < v.length; g++)
          ((p = v[g]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && se < v.length && (yn(e, se), v.length = se);
    if (zr() && de !== null && !Fe && v !== null && (e.f & (U | Ve | ie)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      de.length; g++)
        pi(
          de[g],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (Zt++, de !== null && (i === null ? i = de : i.push(.../** @type {Source[]} */
    de))), (e.f & rt) !== 0 && (e.f ^= rt), h;
  } catch (E) {
    return Fr(E);
  } finally {
    e.f ^= jn, Q = t, se = n, de = i, x = r, ne = a, Bt(o), Fe = s, $t = l;
  }
}
function is(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = ha.call(n, e);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (t.f & U) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (K(t, Ve), (t.f & Te) !== 0 && (t.f ^= Te, t.f &= ~xt), Ur(
    /** @type {Derived} **/
    t
  ), yn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function yn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      is(e, n[i]);
}
function Qt(e) {
  var t = e.f;
  if ((t & He) === 0) {
    K(e, W);
    var n = T, i = bt;
    T = e, bt = !0;
    try {
      (t & (Ye | ma)) !== 0 ? ns(e) : ai(e), ii(e);
      var r = vi(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = di;
      var a;
      Rn && Pa && (e.f & ie) !== 0 && e.deps;
    } finally {
      bt = i, T = n;
    }
  }
}
function d(e) {
  var t = e.f, n = (t & U) !== 0;
  if (x !== null && !Fe) {
    var i = T !== null && (T.f & He) !== 0;
    if (!i && !(ne != null && ne.includes(e))) {
      var r = x.deps;
      if ((x.f & jn) !== 0)
        e.rv < Zt && (e.rv = Zt, Q === null && r !== null && r[se] === e ? se++ : Q === null ? Q = [e] : Q.includes(e) || Q.push(e));
      else {
        (x.deps ?? (x.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [x] : a.includes(x) || a.push(x);
      }
    }
  }
  if (qt) {
    if (it.has(e))
      return it.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), s = o.v;
      return ((o.f & W) === 0 && o.reactions !== null || _i(o)) && (s = tr(o)), it.set(o, s), s;
    }
  } else n && (!(F != null && F.has(e)) || q != null && q.is_fork && !Xt()) && (o = /** @type {Derived} */
  e, sn(o) && Vr(o), bt && Xt() && (o.f & Te) === 0 && gi(o));
  if (F != null && F.has(e))
    return F.get(e);
  if ((e.f & rt) !== 0)
    throw e.v;
  return e.v;
}
function gi(e) {
  if (e.deps !== null) {
    e.f ^= Te;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & U) !== 0 && (t.f & Te) === 0 && gi(
        /** @type {Derived} */
        t
      );
  }
}
function _i(e) {
  if (e.v === J) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (it.has(t) || (t.f & U) !== 0 && _i(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ar(e) {
  var t = Fe;
  try {
    return Fe = !0, e();
  } finally {
    Fe = t;
  }
}
const as = -7169;
function K(e, t) {
  e.f = e.f & as | t;
}
const mi = /* @__PURE__ */ new Set(), Bn = /* @__PURE__ */ new Set();
function ss(e) {
  for (var t = 0; t < e.length; t++)
    mi.add(e[t]);
  for (var n of Bn)
    n(e);
}
let wr = null;
function ln(e) {
  var w;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  wr = e;
  var o = 0, s = wr === e && e.__root;
  if (s) {
    var l = r.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = r.indexOf(t);
    if (f === -1)
      return;
    l <= f && (o = l);
  }
  if (a = /** @type {Element} */
  r[o] || e.target, a !== t) {
    vn(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var u = x, h = T;
    G(null), be(null);
    try {
      for (var v, g = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var E = a["__" + i];
          E != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && E.call(a, e);
        } catch (R) {
          v ? g.push(R) : v = R;
        }
        if (e.cancelBubble || p === t || p === null)
          break;
        a = p;
      }
      if (v) {
        for (let R of g)
          queueMicrotask(() => {
            throw R;
          });
        throw v;
      }
    } finally {
      e.__root = t, delete e.currentTarget, G(u), be(h);
    }
  }
}
function yi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function at(e, t) {
  var n = (
    /** @type {Effect} */
    T
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Je(e, t) {
  var n = (t & ca) !== 0, i = (t & ua) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (C)
      return at(k, null), k;
    r === void 0 && (r = yi(a ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(r)));
    var o = (
      /** @type {TemplateNode} */
      i || Kr ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      at(s, l);
    } else
      at(o, o);
    return o;
  };
}
function br() {
  if (C)
    return at(k, null), k;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = we();
  return e.append(t, n), at(t, n), e;
}
function he(e, t) {
  if (C) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      T
    );
    ((n.f & Sn) === 0 || n.nodes.end === null) && (n.nodes.end = k), Lt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const os = ["touchstart", "touchmove"];
function ls(e) {
  return os.includes(e);
}
function fs(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function wi(e, t) {
  return bi(e, t);
}
function cs(e, t) {
  Ln(), t.intro = t.intro ?? !1;
  const n = t.target, i = C, r = k;
  try {
    for (var a = /* @__PURE__ */ Ce(n); a && (a.nodeType !== Tt || /** @type {Comment} */
    a.data !== Cr); )
      a = /* @__PURE__ */ qe(a);
    if (!a)
      throw Et;
    Se(!0), ee(
      /** @type {Comment} */
      a
    );
    const o = bi(e, { ...t, anchor: a });
    return Se(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Et && console.warn("Failed to hydrate: ", o), t.recover === !1 && Ta(), Ln(), Qr(n), Se(!1), wi(e, t);
  } finally {
    Se(i), ee(r);
  }
}
const Rt = /* @__PURE__ */ new Map();
function bi(e, { target: t, anchor: n, props: i = {}, events: r, context: a, intro: o = !0 }) {
  Ln();
  var s = /* @__PURE__ */ new Set(), l = (h) => {
    for (var v = 0; v < h.length; v++) {
      var g = h[v];
      if (!s.has(g)) {
        s.add(g);
        var p = ls(g);
        t.addEventListener(g, ln, { passive: p });
        var E = Rt.get(g);
        E === void 0 ? (document.addEventListener(g, ln, { passive: p }), Rt.set(g, 1)) : Rt.set(g, E + 1);
      }
    }
  };
  l(xn(mi)), Bn.add(l);
  var f = void 0, u = es(() => {
    var h = n ?? t.appendChild(we());
    return La(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (v) => {
        if (a) {
          Qn({});
          var g = (
            /** @type {ComponentContext} */
            ce
          );
          g.c = a;
        }
        if (r && (i.$$events = r), C && at(
          /** @type {TemplateNode} */
          v,
          null
        ), f = e(v, i) || {}, C && (T.nodes.end = k, k === null || k.nodeType !== Tt || /** @type {Comment} */
        k.data !== Wn))
          throw an(), Et;
        a && er();
      }
    ), () => {
      var p;
      for (var v of s) {
        t.removeEventListener(v, ln);
        var g = (
          /** @type {number} */
          Rt.get(v)
        );
        --g === 0 ? (document.removeEventListener(v, ln), Rt.delete(v)) : Rt.set(v, g);
      }
      Bn.delete(l), h !== n && ((p = h.parentNode) == null || p.removeChild(h));
    };
  });
  return Hn.set(f, u), f;
}
let Hn = /* @__PURE__ */ new WeakMap();
function us(e, t) {
  const n = Hn.get(e);
  return n ? (Hn.delete(e), n(t)) : Promise.resolve();
}
var ke, ze, le, yt, nn, rn, $n;
class ds {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    P(this, "anchor");
    /** @type {Map<Batch, Key>} */
    S(this, ke, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    S(this, ze, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    S(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    S(this, yt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    S(this, nn, !0);
    S(this, rn, () => {
      var t = (
        /** @type {Batch} */
        q
      );
      if (c(this, ke).has(t)) {
        var n = (
          /** @type {Key} */
          c(this, ke).get(t)
        ), i = c(this, ze).get(n);
        if (i)
          ir(i), c(this, yt).delete(n);
        else {
          var r = c(this, le).get(n);
          r && (c(this, ze).set(n, r.effect), c(this, le).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, o] of c(this, ke)) {
          if (c(this, ke).delete(a), a === t)
            break;
          const s = c(this, le).get(o);
          s && (te(s.effect), c(this, le).delete(o));
        }
        for (const [a, o] of c(this, ze)) {
          if (a === n || c(this, yt).has(a)) continue;
          const s = () => {
            if (Array.from(c(this, ke).values()).includes(a)) {
              var f = document.createDocumentFragment();
              ci(o, f), f.append(we()), c(this, le).set(a, { effect: o, fragment: f });
            } else
              te(o);
            c(this, yt).delete(a), c(this, ze).delete(a);
          };
          c(this, nn) || !i ? (c(this, yt).add(a), wt(o, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    S(this, $n, (t) => {
      c(this, ke).delete(t);
      const n = Array.from(c(this, ke).values());
      for (const [i, r] of c(this, le))
        n.includes(i) || (te(r.effect), c(this, le).delete(i));
    });
    this.anchor = t, y(this, nn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var i = (
      /** @type {Batch} */
      q
    ), r = ei();
    if (n && !c(this, ze).has(t) && !c(this, le).has(t))
      if (r) {
        var a = document.createDocumentFragment(), o = we();
        a.append(o), c(this, le).set(t, {
          effect: ye(() => n(o)),
          fragment: a
        });
      } else
        c(this, ze).set(
          t,
          ye(() => n(this.anchor))
        );
    if (c(this, ke).set(i, t), r) {
      for (const [s, l] of c(this, ze))
        s === t ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [s, l] of c(this, le))
        s === t ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(c(this, rn)), i.ondiscard(c(this, $n));
    } else
      C && (this.anchor = k), c(this, rn).call(this);
  }
}
ke = new WeakMap(), ze = new WeakMap(), le = new WeakMap(), yt = new WeakMap(), nn = new WeakMap(), rn = new WeakMap(), $n = new WeakMap();
function $i(e) {
  ce === null && $a(), Kt(() => {
    const t = ar(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Ke(e, t, n = !1) {
  C && Lt();
  var i = new ds(e), r = n ? Dt : 0;
  function a(o, s) {
    if (C) {
      const f = Nr(e) === En;
      if (o === f) {
        var l = gn();
        ee(l), i.anchor = l, Se(!1), i.ensure(o, s), Se(!0);
        return;
      }
    }
    i.ensure(o, s);
  }
  rr(() => {
    var o = !1;
    t((s, l = !0) => {
      o = !0, a(l, s);
    }), o || a(!1, null);
  }, r);
}
function hs(e, t, n) {
  for (var i = [], r = t.length, a, o = t.length, s = 0; s < r; s++) {
    let h = t[s];
    wt(
      h,
      () => {
        if (a) {
          if (a.pending.delete(h), a.done.add(h), a.pending.size === 0) {
            var v = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Yn(xn(a.done)), v.delete(a), v.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = i.length === 0 && n !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        n
      ), u = (
        /** @type {Element} */
        f.parentNode
      );
      Qr(u), u.append(f), e.items.clear();
    }
    Yn(t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Yn(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    te(e[n], t);
}
var $r;
function ps(e, t, n, i, r, a = null) {
  var o = e, s = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = C ? ee(/* @__PURE__ */ Ce(l)) : l.appendChild(we());
  }
  C && Lt();
  var f = null, u = /* @__PURE__ */ Ja(() => {
    var w = n();
    return Tr(w) ? w : w == null ? [] : xn(w);
  }), h, v = !0;
  function g() {
    E.fallback = f, vs(E, h, o, t, i), f !== null && (h.length === 0 ? (f.f & nt) === 0 ? ir(f) : (f.f ^= nt, Vt(f, null, o)) : wt(f, () => {
      f = null;
    }));
  }
  var p = rr(() => {
    h = /** @type {V[]} */
    d(u);
    var w = h.length;
    let R = !1;
    if (C) {
      var I = Nr(o) === En;
      I !== (w === 0) && (o = gn(), ee(o), Se(!1), R = !0);
    }
    for (var m = /* @__PURE__ */ new Set(), H = (
      /** @type {Batch} */
      q
    ), X = ei(), z = 0; z < w; z += 1) {
      C && k.nodeType === Tt && /** @type {Comment} */
      k.data === Wn && (o = /** @type {Comment} */
      k, R = !0, Se(!1));
      var L = h[z], Ae = i(L, z), B = v ? null : s.get(Ae);
      B ? (B.v && Yt(B.v, L), B.i && Yt(B.i, z), X && H.skipped_effects.delete(B.e)) : (B = gs(
        s,
        v ? o : $r ?? ($r = we()),
        L,
        Ae,
        z,
        r,
        t,
        n
      ), v || (B.e.f |= nt), s.set(Ae, B)), m.add(Ae);
    }
    if (w === 0 && a && !f && (v ? f = ye(() => a(o)) : (f = ye(() => a($r ?? ($r = we()))), f.f |= nt)), C && w > 0 && ee(gn()), !v)
      if (X) {
        for (const [ot, lt] of s)
          m.has(ot) || H.skipped_effects.add(lt.e);
        H.oncommit(g), H.ondiscard(() => {
        });
      } else
        g();
    R && Se(!0), d(u);
  }), E = { effect: p, items: s, outrogroups: null, fallback: f };
  v = !1, C && (o = k);
}
function vs(e, t, n, i, r) {
  var Ae;
  var a = t.length, o = e.items, s = e.effect.first, l, f = null, u = [], h = [], v, g, p, E;
  for (E = 0; E < a; E += 1) {
    if (v = t[E], g = r(v, E), p = /** @type {EachItem} */
    o.get(g).e, e.outrogroups !== null)
      for (const B of e.outrogroups)
        B.pending.delete(p), B.done.delete(p);
    if ((p.f & nt) !== 0)
      if (p.f ^= nt, p === s)
        Vt(p, null, n);
      else {
        var w = f ? f.next : s;
        p === e.effect.last && (e.effect.last = p.prev), p.prev && (p.prev.next = p.next), p.next && (p.next.prev = p.prev), We(e, f, p), We(e, p, w), Vt(p, w, n), f = p, u = [], h = [], s = f.next;
        continue;
      }
    if ((p.f & fe) !== 0 && ir(p), p !== s) {
      if (l !== void 0 && l.has(p)) {
        if (u.length < h.length) {
          var R = h[0], I;
          f = R.prev;
          var m = u[0], H = u[u.length - 1];
          for (I = 0; I < u.length; I += 1)
            Vt(u[I], R, n);
          for (I = 0; I < h.length; I += 1)
            l.delete(h[I]);
          We(e, m.prev, H.next), We(e, f, m), We(e, H, R), s = R, f = H, E -= 1, u = [], h = [];
        } else
          l.delete(p), Vt(p, s, n), We(e, p.prev, p.next), We(e, p, f === null ? e.effect.first : f.next), We(e, f, p), f = p;
        continue;
      }
      for (u = [], h = []; s !== null && s !== p; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(s), h.push(s), s = s.next;
      if (s === null)
        continue;
    }
    (p.f & nt) === 0 && u.push(p), f = p, s = p.next;
  }
  if (e.outrogroups !== null) {
    for (const B of e.outrogroups)
      B.pending.size === 0 && (Yn(xn(B.done)), (Ae = e.outrogroups) == null || Ae.delete(B));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || l !== void 0) {
    var X = [];
    if (l !== void 0)
      for (p of l)
        (p.f & fe) === 0 && X.push(p);
    for (; s !== null; )
      (s.f & fe) === 0 && s !== e.fallback && X.push(s), s = s.next;
    var z = X.length;
    if (z > 0) {
      var L = a === 0 ? n : null;
      hs(e, X, L);
    }
  }
}
function gs(e, t, n, i, r, a, o, s) {
  var l = (o & oa) !== 0 ? (o & fa) === 0 ? /* @__PURE__ */ Wr(n, !1, !1) : St(n) : null, f = (o & la) !== 0 ? St(r) : null;
  return {
    v: l,
    i: f,
    e: ye(() => (a(t, l ?? n, f ?? r, s), () => {
      e.delete(i);
    }))
  };
}
function Vt(e, t, n) {
  if (e.nodes)
    for (var i = e.nodes.start, r = e.nodes.end, a = t && (t.f & nt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; i !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(i)
      );
      if (a.before(i), i === r)
        return;
      i = o;
    }
}
function We(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function _s(e, t, n = !1, i = !1, r = !1) {
  var a = e, o = "";
  De(() => {
    var s = (
      /** @type {Effect} */
      T
    );
    if (o === (o = t() ?? "")) {
      C && Lt();
      return;
    }
    if (s.nodes !== null && (si(
      s.nodes.start,
      /** @type {TemplateNode} */
      s.nodes.end
    ), s.nodes = null), o !== "") {
      if (C) {
        k.data;
        for (var l = Lt(), f = l; l !== null && (l.nodeType !== Tt || /** @type {Comment} */
        l.data !== ""); )
          f = l, l = /* @__PURE__ */ qe(l);
        if (l === null)
          throw an(), Et;
        at(k, f), a = ee(l);
        return;
      }
      var u = o + "";
      n ? u = `<svg>${u}</svg>` : i && (u = `<math>${u}</math>`);
      var h = yi(u);
      if ((n || i) && (h = /** @type {Element} */
      /* @__PURE__ */ Ce(h)), at(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(h),
        /** @type {TemplateNode} */
        h.lastChild
      ), n || i)
        for (; /* @__PURE__ */ Ce(h); )
          a.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Ce(h)
          );
      else
        a.before(h);
    }
  });
}
function Ei(e, t) {
  ri(() => {
    var n = e.getRootNode(), i = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, i.appendChild(r);
    }
  });
}
function ms(e, t, n) {
  var i = e == null ? "" : "" + e;
  return t && (i = i ? i + " " + t : t), i === "" ? null : i;
}
function ys(e, t) {
  return e == null ? null : String(e);
}
function $e(e, t, n, i, r, a) {
  var o = e.__className;
  if (C || o !== n || o === void 0) {
    var s = ms(n, i);
    (!C || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = n;
  }
  return a;
}
function Xe(e, t, n, i) {
  var r = e.__style;
  if (C || r !== t) {
    var a = ys(t);
    (!C || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  }
  return i;
}
const ws = Symbol("is custom element"), bs = Symbol("is html");
function xi(e, t, n, i) {
  var r = $s(e);
  C && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "loading" && (e[ba] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && ki(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Er(e, t, n) {
  var i = x, r = T;
  let a = C;
  C && Se(!1), G(null), be(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (Un.has(e.getAttribute("is") || e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.getAttribute("is") || e.tagName.toLowerCase()) ? ki(e).includes(t) : n && typeof n == "object") ? e[t] = n : xi(e, t, n == null ? n : String(n));
  } finally {
    G(i), be(r), a && Se(!0);
  }
}
function $s(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [ws]: e.nodeName.includes("-"),
      [bs]: e.namespaceURI === da
    })
  );
}
var Un = /* @__PURE__ */ new Map();
function ki(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Un.get(t);
  if (n) return n;
  Un.set(t, n = []);
  for (var i, r = e, a = Element.prototype; a !== r; ) {
    i = pa(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = qr(r);
  }
  return n;
}
function xr(e, t) {
  return e === t || (e == null ? void 0 : e[cn]) === t;
}
function Ze(e = {}, t, n, i) {
  return ri(() => {
    var r, a;
    return nr(() => {
      r = a, a = [], ar(() => {
        e !== n(...a) && (t(e, ...a), r && xr(n(...r), e) && t(null, ...r));
      });
    }), () => {
      Cn(() => {
        a && xr(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function xe(e, t, n, i) {
  var r = (
    /** @type {V} */
    i
  ), a = !0, o = () => (a && (a = !1, r = /** @type {V} */
  i), r), s;
  s = /** @type {V} */
  e[t], s === void 0 && i !== void 0 && (s = o());
  var l;
  l = () => {
    var v = (
      /** @type {V} */
      e[t]
    );
    return v === void 0 ? o() : (a = !0, v);
  };
  var f = !1, u = /* @__PURE__ */ qn(() => (f = !1, l())), h = (
    /** @type {Effect} */
    T
  );
  return (
    /** @type {() => V} */
    (function(v, g) {
      if (arguments.length > 0) {
        const p = g ? d(u) : v;
        return b(u, p), f = !0, r !== void 0 && (r = p), v;
      }
      return qt && f || (h.f & He) !== 0 ? u.v : d(u);
    })
  );
}
function Es(e) {
  return new xs(e);
}
var Be, ge;
class xs {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    S(this, Be);
    /** @type {Record<string, any>} */
    S(this, ge);
    var a;
    var n = /* @__PURE__ */ new Map(), i = (o, s) => {
      var l = /* @__PURE__ */ Wr(s, !1, !1);
      return n.set(o, l), l;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return d(n.get(s) ?? i(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === wa ? !0 : (d(n.get(s) ?? i(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, l) {
          return b(n.get(s) ?? i(s, l), l), Reflect.set(o, s, l);
        }
      }
    );
    y(this, ge, (t.hydrate ? cs : wi)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && _e(), y(this, Be, r.$$events);
    for (const o of Object.keys(c(this, ge)))
      o === "$set" || o === "$destroy" || o === "$on" || vn(this, o, {
        get() {
          return c(this, ge)[o];
        },
        /** @param {any} value */
        set(s) {
          c(this, ge)[o] = s;
        },
        enumerable: !0
      });
    c(this, ge).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(r, o);
    }, c(this, ge).$destroy = () => {
      us(c(this, ge));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    c(this, ge).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    c(this, Be)[t] = c(this, Be)[t] || [];
    const i = (...r) => n.call(this, ...r);
    return c(this, Be)[t].push(i), () => {
      c(this, Be)[t] = c(this, Be)[t].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    c(this, ge).$destroy();
  }
}
Be = new WeakMap(), ge = new WeakMap();
let Si;
typeof HTMLElement == "function" && (Si = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    P(this, "$$ctor");
    /** Slots */
    P(this, "$$s");
    /** @type {any} The Svelte component instance */
    P(this, "$$c");
    /** Whether or not the custom element is connected */
    P(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    P(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    P(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    P(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    P(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    P(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    P(this, "$$me");
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (a) => {
          const o = document.createElement("slot");
          r !== "default" && (o.name = r), he(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = ks(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = hn(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Es({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Qa(() => {
        nr(() => {
          var r;
          this.$$r = !0;
          for (const a of pn(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = hn(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const a of this.$$l[r]) {
          const o = this.$$c.$on(r, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, i) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = hn(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return pn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function hn(e, t, n, i) {
  var a;
  const r = (a = n[e]) == null ? void 0 : a.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ks(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Ci(e, t, n, i, r, a) {
  let o = class extends Si {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return pn(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return pn(t).forEach((s) => {
    vn(o.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var h;
        l = hn(s, l, t), this.$$d[s] = l;
        var f = this.$$c;
        if (f) {
          var u = (h = zt(f, s)) == null ? void 0 : h.get;
          u ? f[s] = l : f.$set({ [s]: l });
        }
      }
    });
  }), i.forEach((s) => {
    vn(o.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), a && (o = a(o)), e.element = /** @type {any} */
  o, o;
}
class sr extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(t, ...n) {
    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, sr), this.name = "TimeoutError", this.timeout = t, this.message = `Timed out in ${t} ms.`;
  }
}
const Ss = (e, t) => {
  const n = new Promise((i, r) => {
    setTimeout(() => {
      r(new sr(e));
    }, e);
  });
  return Promise.race([t, n]);
}, Ti = (e) => {
  if (typeof e.getCardSize == "function")
    try {
      return Ss(500, e.getCardSize()).catch(
        () => 1
      );
    } catch {
      return 1;
    }
  return customElements.get(e.localName) ? 1 : customElements.whenDefined(e.localName).then(() => Ti(e));
};
var Cs = /* @__PURE__ */ Je('<span class="loading svelte-lv9s7p">Loading...</span>'), Ts = /* @__PURE__ */ Je("<div><!></div>");
const qs = {
  hash: "svelte-lv9s7p",
  code: `.loading.svelte-lv9s7p {padding:1em;display:block;}.animation.svelte-lv9s7p {hui-card {display:flex;flex-direction:column;}}.outer-container.animation.svelte-lv9s7p {transition:margin-bottom 0.35s ease;}.outer-container.animation.open.svelte-lv9s7p,
  .outer-container.animation.opening.svelte-lv9s7p {margin-bottom:inherit;}.outer-container.animation.close.svelte-lv9s7p,
  .outer-container.animation.closing.svelte-lv9s7p {margin-bottom:var(--expander-animation-height, -100%);}.outer-container.animation.opening.svelte-lv9s7p {
    animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;
    -webkit-animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;}.outer-container.animation.closing.svelte-lv9s7p {
      animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;
      -webkit-animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;}
  @keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
    @keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }`
};
function Vn(e, t) {
  Qn(t, !0), Ei(e, qs);
  const n = xe(t, "config"), i = xe(t, "hass"), r = xe(t, "preview"), a = xe(t, "marginTop", 7, "0px"), o = xe(t, "open"), s = xe(t, "animation", 7, !0), l = xe(t, "animationState"), f = xe(t, "clearCardCss", 7, !1);
  let u = null, h = /* @__PURE__ */ N(null), v = /* @__PURE__ */ N(!0), g = /* @__PURE__ */ N(0);
  const p = JSON.parse(JSON.stringify(n()));
  Kt(() => {
    d(h) && (d(h).hass = i());
  }), Kt(() => {
    d(h) && r() !== void 0 && (d(h).preview = r());
  }), Kt(() => {
    var m;
    d(h) && (p.disabled = !o(), (m = d(h)._element) == null || m.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: o() }, bubbles: !0, composed: !1 })));
  }), $i(async () => {
    const m = document.createElement("hui-card");
    m.hass = i(), m.preview = r(), p.disabled = !o(), m.config = p, m.load(), u == null || u.appendChild(m), b(h, m, !0), b(v, !1), d(h).addEventListener(
      "ll-upgrade",
      (H) => {
        var X;
        H.stopPropagation(), (X = d(h)) != null && X._element && i() && (d(h)._element.hass = i());
      },
      { capture: !0 }
    ), f() && (m.style.setProperty("--ha-card-background", "transparent"), m.style.setProperty("--ha-card-box-shadow", "none"), m.style.setProperty("--ha-card-border-color", "transparent"), m.style.setProperty("--ha-card-border-width", "0px"), m.style.setProperty("--ha-card-border-radius", "0px"), m.style.setProperty("--ha-card-backdrop-filter", "none")), s() && (b(g, await Ti(m) * 56), u && b(g, d(g) + (window.getComputedStyle(u).marginTop ? parseFloat(window.getComputedStyle(u).marginTop) : 0)), new ResizeObserver((X) => {
      for (const z of X)
        if (z.contentBoxSize) {
          const L = Array.isArray(z.contentBoxSize) ? z.contentBoxSize[0] : z.contentBoxSize;
          L.blockSize && (b(g, L.blockSize, !0), u && b(g, d(g) + (window.getComputedStyle(u).marginTop ? parseFloat(window.getComputedStyle(u).marginTop) : 0)));
        } else z.contentRect && (b(g, z.contentRect.height, !0), u && b(g, d(g) + (window.getComputedStyle(u).marginTop ? parseFloat(window.getComputedStyle(u).marginTop) : 0)));
    }).observe(m));
  });
  var E = {
    get config() {
      return n();
    },
    set config(m) {
      n(m), _e();
    },
    get hass() {
      return i();
    },
    set hass(m) {
      i(m), _e();
    },
    get preview() {
      return r();
    },
    set preview(m) {
      r(m), _e();
    },
    get marginTop() {
      return a();
    },
    set marginTop(m = "0px") {
      a(m), _e();
    },
    get open() {
      return o();
    },
    set open(m) {
      o(m), _e();
    },
    get animation() {
      return s();
    },
    set animation(m = !0) {
      s(m), _e();
    },
    get animationState() {
      return l();
    },
    set animationState(m) {
      l(m), _e();
    },
    get clearCardCss() {
      return f();
    },
    set clearCardCss(m = !1) {
      f(m), _e();
    }
  }, w = Ts(), R = Ge(w);
  {
    var I = (m) => {
      var H = Cs();
      he(m, H);
    };
    Ke(R, (m) => {
      d(v) && m(I);
    });
  }
  return Ie(w), Ze(w, (m) => u = m, () => u), De(() => {
    $e(w, 1, `outer-container${o() ? " open" : " close"}${s() ? " animation " + l() : ""}`, "svelte-lv9s7p"), Xe(w, `margin-top: ${(o() ? a() : "0px") ?? ""};${d(g) ? ` --expander-animation-height: -${d(g)}px;` : ""}`);
  }), he(e, w), er(E);
}
customElements.define("expander-sub-card", Ci(
  Vn,
  {
    config: {},
    hass: {},
    preview: {},
    marginTop: {},
    open: {},
    animation: {},
    animationState: {},
    clearCardCss: {}
  },
  [],
  [],
  !0
));
const kr = (e, t) => {
  var n;
  (n = e.dispatchEvent) == null || n.call(
    e,
    new CustomEvent(
      "haptic",
      { detail: t, bubbles: !0, composed: !0 }
    )
  );
}, Jn = {
  gap: "0.0em",
  "expanded-gap": "0.6em",
  padding: "1em",
  clear: !1,
  "clear-children": !1,
  title: " ",
  "overlay-margin": "0.0em",
  "child-padding": "0.0em",
  "child-margin-top": "0.0em",
  "button-background": "transparent",
  "expander-card-background": "var(--ha-card-background,var(--card-background-color,#fff))",
  "header-color": "var(--primary-text-color,#fff)",
  "arrow-color": "var(--arrow-color,var(--primary-text-color,#fff))",
  "expander-card-display": "block",
  "title-card-clickable": !1,
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  icon: "mdi:chevron-down",
  "icon-rotate-degree": "180deg",
  animation: !0
};
var As = /* @__PURE__ */ Je("<ha-ripple></ha-ripple>", 2), Os = /* @__PURE__ */ Je('<button aria-label="Toggle button"><ha-icon></ha-icon> <!></button>', 2), Ns = /* @__PURE__ */ Je("<ha-ripple></ha-ripple>", 2), Rs = /* @__PURE__ */ Je('<div id="id1"><div id="id2"><!></div> <!> <!></div>'), js = /* @__PURE__ */ Je("<button><div> </div> <ha-icon></ha-icon> <ha-ripple></ha-ripple></button>", 2), zs = /* @__PURE__ */ Je("<div><div></div></div>"), Ps = /* @__PURE__ */ Je("<ha-card><!> <!> <!></ha-card>", 2);
const Fs = {
  hash: "svelte-1jqiztq",
  code: `.expander-card.svelte-1jqiztq {display:var(--expander-card-display,block);gap:var(--gap);padding:var(--padding);background:var(--card-background,#fff);-webkit-tap-highlight-color:transparent;}.expander-card.animation.svelte-1jqiztq {transition:gap 0.35s ease, background-color var(--background-animation-duration, 0) ease;}.children-wrapper.svelte-1jqiztq {display:flex;flex-direction:column;}.children-wrapper.animation.opening.svelte-1jqiztq,
    .children-wrapper.animation.closing.svelte-1jqiztq {overflow:hidden;}.children-container.animation.svelte-1jqiztq {transition:padding 0.35s ease, gap 0.35s ease;}.children-container.svelte-1jqiztq {padding:var(--child-padding);display:var(--expander-card-display,block);gap:var(--gap);}.clear.svelte-1jqiztq {background:none !important;background-color:transparent !important;border-style:none !important;box-shadow:none !important;}.title-card-header.svelte-1jqiztq {display:flex;align-items:center;justify-content:space-between;flex-direction:row;position:relative;}.title-card-header.clickable.svelte-1jqiztq {cursor:pointer;border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));}.title-card-header-overlay.svelte-1jqiztq {display:block;}.title-card-container.svelte-1jqiztq {width:100%;padding:var(--title-padding);}.header.svelte-1jqiztq {display:flex;flex-direction:row;align-items:center;padding:0.85em 0.85em;background:var(--button-background);border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));width:var(--header-width,auto);color:var(--header-color,#fff);cursor:pointer;position:relative;}.header-overlay.svelte-1jqiztq {position:absolute;top:0;right:0;margin:var(--overlay-margin);}.title-card-header-overlay.clickable.svelte-1jqiztq  > .header-overlay:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);justify-content:flex-end;}.title-card-header-overlay.clickable.svelte-1jqiztq > .title-card-container:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);}.title.svelte-1jqiztq {width:100%;text-align:left;}.ico.animation.svelte-1jqiztq {transition-property:transform;transition-duration:0.35s;}.ico.svelte-1jqiztq {color:var(--arrow-color,var(--primary-text-color,#fff));}.flipped.svelte-1jqiztq {transform:rotate(var(--icon-rotate-degree,180deg));}`
};
function Ms(e, t) {
  Qn(t, !0), Ei(e, Fs);
  const n = xe(t, "hass"), i = xe(t, "preview"), r = xe(t, "config", 7, Jn);
  let a = /* @__PURE__ */ N(!1), o = /* @__PURE__ */ N(null), s = /* @__PURE__ */ N(ht(!!i())), l = /* @__PURE__ */ N(ht(!!i())), f = /* @__PURE__ */ N(!0), u = /* @__PURE__ */ N("idle"), h = /* @__PURE__ */ N(null), v = /* @__PURE__ */ N(0), g = /* @__PURE__ */ N(null), p = /* @__PURE__ */ N(null), E = /* @__PURE__ */ N(null), w = /* @__PURE__ */ N(null);
  const R = r()["storage-id"], I = "expander-open-" + R, m = `<style>${r().style}</style>`;
  b(f, i() || (H(r()["show-button-users"]) ?? !0), !0), Kt(() => {
    i() === d(l) || i() === void 0 || (b(l, i(), !0), d(l) ? (L(!0), b(f, !0)) : (X(), b(f, H(r()["show-button-users"]) ?? !0, !0)));
  });
  function H(_) {
    var $, A, j, ue;
    if (_ !== void 0)
      return ((A = ($ = n()) == null ? void 0 : $.user) == null ? void 0 : A.name) !== void 0 && _.includes((ue = (j = n()) == null ? void 0 : j.user) == null ? void 0 : ue.name);
  }
  function X() {
    if (H(r()["start-expanded-users"]))
      L(!0);
    else if (R !== void 0)
      try {
        const _ = localStorage.getItem(I);
        _ === null ? r().expanded !== void 0 && L(r().expanded) : b(s, _ ? _ === "true" : d(s), !0);
      } catch (_) {
        console.error(_);
      }
    else
      r().expanded !== void 0 ? L(r().expanded) : L(!1);
  }
  function z(_) {
    d(h) && (clearTimeout(d(h)), b(h, null));
    const $ = _ !== void 0 ? _ : !d(s);
    r().animation ? (b(u, $ ? "opening" : "closing", !0), $ ? (L(!0), b(
      h,
      setTimeout(
        () => {
          b(u, "idle"), b(h, null);
        },
        350
      ),
      !0
    )) : b(
      h,
      setTimeout(
        () => {
          L(!1), b(u, "idle"), b(h, null);
        },
        350
      ),
      !0
    )) : L($);
  }
  function L(_) {
    if (b(s, _, !0), R !== void 0)
      try {
        localStorage.setItem(I, d(s) ? "true" : "false");
      } catch ($) {
        console.error($);
      }
    d(s) && d(v) === 0 && b(v, 0.35);
  }
  function Ae(_) {
    var A, j;
    const $ = (j = (A = _.detail) == null ? void 0 : A["expander-card"]) == null ? void 0 : j.data;
    ($ == null ? void 0 : $["expander-card-id"]) === r()["expander-card-id"] && ($.action === "open" && !d(s) ? z(!0) : $.action === "close" && d(s) ? z(!1) : $.action === "toggle" && z());
  }
  function B() {
    document.body.removeEventListener("ll-custom", Ae);
  }
  let ot, lt = !1, or = 0, lr = 0;
  const qi = (_) => {
    d(w) && (d(w).disabled = !0), ot = _.target, or = _.touches[0].clientX, lr = _.touches[0].clientY, lt = !1;
  }, Ai = (_) => {
    const $ = _.touches[0].clientX, A = _.touches[0].clientY;
    (Math.abs($ - or) > 10 || Math.abs(A - lr) > 10) && (lt = !0);
  }, Oi = () => {
    d(w) && (d(w).disabled = !1), ot = void 0, lt = !1;
  }, Ni = () => {
    d(w) && (d(w).disabled = !1);
  }, Ri = (_) => {
    !lt && ot === _.target && r()["title-card-clickable"] && (kr(ot, "light"), z(), b(a, !0), b(
      o,
      window.setTimeout(
        () => {
          b(a, !1), b(o, null);
        },
        100
      ),
      !0
    ), d(w) && (d(w).startPressAnimation(), d(w).endPressAnimation())), ot = void 0, lt = !1;
  };
  $i(() => {
    const _ = r()["min-width-expanded"], $ = r()["max-width-expanded"], A = document.body.offsetWidth;
    _ && $ ? r().expanded = A >= _ && A <= $ : _ ? r().expanded = A >= _ : $ && (r().expanded = A <= $), i() ? L(!0) : X(), document.body.addEventListener("ll-custom", Ae);
    let j;
    return r()["title-card-clickable"] && !r()["title-card-button-overlay"] && d(p) ? j = d(p) : d(E) && (j = d(E)), j && (j.addEventListener("touchstart", qi, { passive: !0, capture: !0 }), j.addEventListener("touchmove", Ai, { passive: !0, capture: !0 }), j.addEventListener("touchcancel", Oi, { passive: !0, capture: !0 }), j.addEventListener("touchend", Ni, { passive: !0, capture: !0 }), j.addEventListener("touchend", Ri, { passive: !1, capture: !1 })), r()["title-card-clickable"] && r()["title-card-button-overlay"] && d(p) && new ResizeObserver(() => {
      if (d(E) && d(p) && d(g)) {
        const ae = d(p).getBoundingClientRect();
        d(E).style.height = `${ae.height - parseFloat(getComputedStyle(d(E)).marginTop) - parseFloat(getComputedStyle(d(E)).marginBottom) + parseFloat(getComputedStyle(d(g)).paddingTop) + parseFloat(getComputedStyle(d(g)).paddingBottom)}px`;
      }
    }).observe(d(p)), B;
  });
  const An = (_) => {
    if (d(a))
      return _.preventDefault(), _.stopImmediatePropagation(), b(a, !1), d(o) && (clearTimeout(d(o)), b(o, null)), !1;
    kr(_.currentTarget, "light"), z();
  };
  var ji = {
    get hass() {
      return n();
    },
    set hass(_) {
      n(_), _e();
    },
    get preview() {
      return i();
    },
    set preview(_) {
      i(_), _e();
    },
    get config() {
      return r();
    },
    set config(_ = Jn) {
      r(_), _e();
    }
  }, At = Ps(), fr = Ge(At);
  {
    var zi = (_) => {
      var $ = Rs();
      $.__click = function(...V) {
        var Z;
        (Z = r()["title-card-clickable"] && !r()["title-card-button-overlay"] ? An : null) == null || Z.apply(this, V);
      };
      var A = Ge($), j = Ge(A);
      Vn(j, {
        get hass() {
          return n();
        },
        get preview() {
          return i();
        },
        get config() {
          return r()["title-card"];
        },
        animation: !1,
        open: !0,
        animationState: "idle",
        get clearCardCss() {
          return r()["clear-children"];
        }
      }), Ie(A);
      var ue = ct(A, 2);
      {
        var ae = (V) => {
          var Z = Os();
          Z.__click = function(...ft) {
            var Ut;
            (Ut = !r()["title-card-clickable"] || r()["title-card-button-overlay"] ? An : null) == null || Ut.apply(this, ft);
          };
          var Oe = Ge(Z);
          De(() => Er(Oe, "icon", r().icon));
          var Di = ct(Oe, 2);
          {
            var Li = (ft) => {
              var Ut = As();
              Ze(Ut, (Bi) => b(w, Bi), () => d(w)), he(ft, Ut);
            };
            Ke(Di, (ft) => {
              (!r()["title-card-clickable"] || r()["title-card-button-overlay"]) && ft(Li);
            });
          }
          Ie(Z), Ze(Z, (ft) => b(E, ft), () => d(E)), De(() => {
            Xe(Z, `--overlay-margin:${r()["overlay-margin"] ?? ""}; --button-background:${r()["button-background"] ?? ""}; --header-color:${r()["header-color"] ?? ""};`), $e(Z, 1, `header ${r()["title-card-button-overlay"] ? " header-overlay" : ""}${d(s) ? " open" : " close"}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq"), Xe(Oe, `--arrow-color:${r()["arrow-color"] ?? ""}`), $e(Oe, 1, `ico${d(s) && d(u) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq");
          }), he(V, Z);
        };
        Ke(ue, (V) => {
          d(f) && V(ae);
        });
      }
      var Ot = ct(ue, 2);
      {
        var On = (V) => {
          var Z = Ns();
          Ze(Z, (Oe) => b(w, Oe), () => d(w)), he(V, Z);
        };
        Ke(Ot, (V) => {
          r()["title-card-clickable"] && !r()["title-card-button-overlay"] && V(On);
        });
      }
      Ie($), Ze($, (V) => b(p, V), () => d(p)), De(() => {
        $e($, 1, `title-card-header${r()["title-card-button-overlay"] ? "-overlay" : ""}${d(s) ? " open" : " close"}${r().animation ? " animation " + d(u) : ""}${r()["title-card-clickable"] ? " clickable" : ""}`, "svelte-1jqiztq"), xi($, "role", r()["title-card-clickable"] && !r()["title-card-button-overlay"] ? "button" : void 0), $e(A, 1, `title-card-container${d(s) ? " open" : " close"}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq"), Xe(A, `--title-padding:${(r()["title-card-padding"] ? r()["title-card-padding"] : "0px") ?? ""};`);
      }), he(_, $);
    }, Pi = (_) => {
      var $ = br(), A = _r($);
      {
        var j = (ue) => {
          var ae = js();
          ae.__click = An;
          var Ot = Ge(ae), On = Ge(Ot, !0);
          Ie(Ot);
          var V = ct(Ot, 2);
          De(() => Er(V, "icon", r().icon));
          var Z = ct(V, 2);
          Ze(Z, (Oe) => b(w, Oe), () => d(w)), Ie(ae), Ze(ae, (Oe) => b(E, Oe), () => d(E)), De(() => {
            $e(ae, 1, `header${d(s) ? " open" : " close"}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq"), Xe(ae, `--header-width:100%; --button-background:${r()["button-background"] ?? ""};--header-color:${r()["header-color"] ?? ""};`), $e(Ot, 1, `primary title${d(s) ? " open" : " close"}`, "svelte-1jqiztq"), fs(On, r().title), Xe(V, `--arrow-color:${r()["arrow-color"] ?? ""}`), $e(V, 1, `ico${d(s) && d(u) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq");
          }), he(ue, ae);
        };
        Ke(A, (ue) => {
          d(f) && ue(j);
        });
      }
      he(_, $);
    };
    Ke(fr, (_) => {
      r()["title-card"] ? _(zi) : _(Pi, !1);
    });
  }
  var cr = ct(fr, 2);
  {
    var Fi = (_) => {
      var $ = zs(), A = Ge($);
      ps(A, 20, () => r().cards, (j) => j, (j, ue) => {
        {
          let ae = /* @__PURE__ */ Va(() => d(s) && i());
          Vn(j, {
            get hass() {
              return n();
            },
            get preview() {
              return d(ae);
            },
            get config() {
              return ue;
            },
            get marginTop() {
              return r()["child-margin-top"];
            },
            get open() {
              return d(s);
            },
            get animation() {
              return r().animation;
            },
            get animationState() {
              return d(u);
            },
            get clearCardCss() {
              return r()["clear-children"];
            }
          });
        }
      }), Ie(A), Ie($), De(() => {
        $e($, 1, `children-wrapper ${r().animation ? "animation " + d(u) : ""}${d(s) ? " open" : " close"}`, "svelte-1jqiztq"), Xe(A, `--expander-card-display:${r()["expander-card-display"] ?? ""};
                --gap:${(d(s) && d(u) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""};
                --child-padding:${(d(s) && d(u) !== "closing" ? r()["child-padding"] : "0px") ?? ""};`), $e(A, 1, `children-container${d(s) ? " open" : " close"}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq");
      }), he(_, $);
    };
    Ke(cr, (_) => {
      r().cards && _(Fi);
    });
  }
  var Mi = ct(cr, 2);
  {
    var Ii = (_) => {
      var $ = br(), A = _r($);
      _s(A, () => m), he(_, $);
    };
    Ke(Mi, (_) => {
      m && _(Ii);
    });
  }
  return Ie(At), Ze(At, (_) => b(g, _), () => d(g)), De(() => {
    $e(At, 1, `expander-card${r().clear ? " clear" : ""}${d(s) ? " open" : " close"} ${d(u)}${r().animation ? " animation " + d(u) : ""}`, "svelte-1jqiztq"), Xe(At, `--expander-card-display:${r()["expander-card-display"] ?? ""};
     --gap:${(d(s) && d(u) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""}; --padding:${r().padding ?? ""};
     --expander-state:${d(s) ?? ""};
     --icon-rotate-degree:${r()["icon-rotate-degree"] ?? ""};
     --card-background:${(d(s) && d(u) !== "closing" && r()["expander-card-background-expanded"] ? r()["expander-card-background-expanded"] : r()["expander-card-background"]) ?? ""};
     --background-animation-duration:${d(v) ?? ""}s;
    `);
  }), he(e, At), er(ji);
}
ss(["click"]);
customElements.define("expander-card", Ci(Ms, { hass: {}, preview: {}, config: {} }, [], [], !0, (e) => class extends e {
  constructor() {
    super(...arguments);
    // re-declare props used in customClass.
    P(this, "config");
  }
  static async getConfigElement() {
    return await sa(), document.createElement("expander-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:expander-card",
      title: "Expander Card",
      cards: []
    };
  }
  setConfig(n = {}) {
    this.config = { ...Jn, ...n };
  }
}));
const Is = "4.0.2";
console.info(
  `%c  Expander-Card 
%c Version ${Is}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "expander-card",
  name: "Expander Card",
  preview: !0,
  description: "Expander card"
});
export {
  Ms as default
};
//# sourceMappingURL=expander-card.js.map
