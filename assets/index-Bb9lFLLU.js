(async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver((r) => {
      for (const i of r) if (i.type === "childList") for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(r) {
      const i = {};
      return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
    }
    function s(r) {
      if (r.ep) return;
      r.ep = true;
      const i = n(r);
      fetch(r.href, i);
    }
  })();
  function Nn(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  const V = {}, ot = [], Te = () => {
  }, zs = () => false, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), jn = (e) => e.startsWith("onUpdate:"), Q = Object.assign, Bn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, li = Object.prototype.hasOwnProperty, j = (e, t) => li.call(e, t), M = Array.isArray, lt = (e) => Rt(e) === "[object Map]", Ys = (e) => Rt(e) === "[object Set]", ps = (e) => Rt(e) === "[object Date]", R = (e) => typeof e == "function", Y = (e) => typeof e == "string", ye = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Zs = (e) => (W(e) || R(e)) && R(e.then) && R(e.catch), Qs = Object.prototype.toString, Rt = (e) => Qs.call(e), ci = (e) => Rt(e).slice(8, -1), Xs = (e) => Rt(e) === "[object Object]", Hn = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, At = Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), nn = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return ((n) => t[n] || (t[n] = e(n)));
  }, ui = /-\w/g, qe = nn((e) => e.replace(ui, (t) => t.slice(1).toUpperCase())), fi = /\B([A-Z])/g, nt = nn((e) => e.replace(fi, "-$1").toLowerCase()), er = nn((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = nn((e) => e ? `on${er(e)}` : ""), We = (e, t) => !Object.is(e, t), Wt = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  }, tr = (e, t, n, s = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: s,
      value: n
    });
  }, Un = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  let gs;
  const sn = () => gs || (gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Kn(e) {
    if (M(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const s = e[n], r = Y(s) ? pi(s) : Kn(s);
        if (r) for (const i in r) t[i] = r[i];
      }
      return t;
    } else if (Y(e) || W(e)) return e;
  }
  const ai = /;(?![^(]*\))/g, di = /:([^]+)/, hi = /\/\*[^]*?\*\//g;
  function pi(e) {
    const t = {};
    return e.replace(hi, "").split(ai).forEach((n) => {
      if (n) {
        const s = n.split(di);
        s.length > 1 && (t[s[0].trim()] = s[1].trim());
      }
    }), t;
  }
  function rn(e) {
    let t = "";
    if (Y(e)) t = e;
    else if (M(e)) for (let n = 0; n < e.length; n++) {
      const s = rn(e[n]);
      s && (t += s + " ");
    }
    else if (W(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  }
  const gi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", mi = Nn(gi);
  function nr(e) {
    return !!e || e === "";
  }
  function _i(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let s = 0; n && s < e.length; s++) n = Vn(e[s], t[s]);
    return n;
  }
  function Vn(e, t) {
    if (e === t) return true;
    let n = ps(e), s = ps(t);
    if (n || s) return n && s ? e.getTime() === t.getTime() : false;
    if (n = ye(e), s = ye(t), n || s) return e === t;
    if (n = M(e), s = M(t), n || s) return n && s ? _i(e, t) : false;
    if (n = W(e), s = W(t), n || s) {
      if (!n || !s) return false;
      const r = Object.keys(e).length, i = Object.keys(t).length;
      if (r !== i) return false;
      for (const o in e) {
        const l = e.hasOwnProperty(o), u = t.hasOwnProperty(o);
        if (l && !u || !l && u || !Vn(e[o], t[o])) return false;
      }
    }
    return String(e) === String(t);
  }
  const sr = (e) => !!(e && e.__v_isRef === true), Le = (e) => Y(e) ? e : e == null ? "" : M(e) || W(e) && (e.toString === Qs || !R(e.toString)) ? sr(e) ? Le(e.value) : JSON.stringify(e, rr, 2) : String(e), rr = (e, t) => sr(t) ? rr(e, t.value) : lt(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [s, r], i) => (n[gn(s, i) + " =>"] = r, n), {})
  } : Ys(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => gn(n))
  } : ye(t) ? gn(t) : W(t) && !M(t) && !Xs(t) ? String(t) : t, gn = (e, t = "") => {
    var n;
    return ye(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let de;
  class bi {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.__v_skip = true, this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = de;
        try {
          return de = this, t();
        } finally {
          de = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = de, de = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (de = this.prevScope, this.prevScope = void 0);
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, s;
        for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  function yi() {
    return de;
  }
  let J;
  const mn = /* @__PURE__ */ new WeakSet();
  class ir {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, de && de.active && de.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, mn.has(this) && (mn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lr(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, ms(this), cr(this);
      const t = J, n = be;
      J = this, be = true;
      try {
        return this.fn();
      } finally {
        ur(this), J = t, be = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) qn(t);
        this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Fn(this) && this.run();
    }
    get dirty() {
      return Fn(this);
    }
  }
  let or = 0, St, Ct;
  function lr(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Ct, Ct = e;
      return;
    }
    e.next = St, St = e;
  }
  function Wn() {
    or++;
  }
  function kn() {
    if (--or > 0) return;
    if (Ct) {
      let t = Ct;
      for (Ct = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; St; ) {
      let t = St;
      for (St = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function cr(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function ur(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
      const r = s.prevDep;
      s.version === -1 ? (s === n && (n = r), qn(s), vi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
    }
    e.deps = t, e.depsTail = n;
  }
  function Fn(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (fr(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function fr(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Tt) || (e.globalVersion = Tt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Fn(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = J, s = be;
    J = e, be = true;
    try {
      cr(e);
      const r = e.fn(e._value);
      (t.version === 0 || We(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
    } catch (r) {
      throw t.version++, r;
    } finally {
      J = n, be = s, ur(e), e.flags &= -3;
    }
  }
  function qn(e, t = false) {
    const { dep: n, prevSub: s, nextSub: r } = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
      n.computed.flags &= -5;
      for (let i = n.computed.deps; i; i = i.nextDep) qn(i, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function vi(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let be = true;
  const ar = [];
  function Ne() {
    ar.push(be), be = false;
  }
  function je() {
    const e = ar.pop();
    be = e === void 0 ? true : e;
  }
  function ms(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = J;
      J = void 0;
      try {
        t();
      } finally {
        J = n;
      }
    }
  }
  let Tt = 0;
  class xi {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Jn {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(t) {
      if (!J || !be || J === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== J) n = this.activeLink = new xi(J, this), J.deps ? (n.prevDep = J.depsTail, J.depsTail.nextDep = n, J.depsTail = n) : J.deps = J.depsTail = n, dr(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const s = n.nextDep;
        s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = J.depsTail, n.nextDep = void 0, J.depsTail.nextDep = n, J.depsTail = n, J.deps === n && (J.deps = s);
      }
      return n;
    }
    trigger(t) {
      this.version++, Tt++, this.notify(t);
    }
    notify(t) {
      Wn();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        kn();
      }
    }
  }
  function dr(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let s = t.deps; s; s = s.nextDep) dr(s);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const En = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ Symbol(""), wn = /* @__PURE__ */ Symbol(""), Dt = /* @__PURE__ */ Symbol("");
  function te(e, t, n) {
    if (be && J) {
      let s = En.get(e);
      s || En.set(e, s = /* @__PURE__ */ new Map());
      let r = s.get(n);
      r || (s.set(n, r = new Jn()), r.map = s, r.key = n), r.track();
    }
  }
  function Ie(e, t, n, s, r, i) {
    const o = En.get(e);
    if (!o) {
      Tt++;
      return;
    }
    const l = (u) => {
      u && u.trigger();
    };
    if (Wn(), t === "clear") o.forEach(l);
    else {
      const u = M(e), d = u && Hn(n);
      if (u && n === "length") {
        const f = Number(s);
        o.forEach((h, y) => {
          (y === "length" || y === Dt || !ye(y) && y >= f) && l(h);
        });
      } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Dt)), t) {
        case "add":
          u ? d && l(o.get("length")) : (l(o.get(Xe)), lt(e) && l(o.get(wn)));
          break;
        case "delete":
          u || (l(o.get(Xe)), lt(e) && l(o.get(wn)));
          break;
        case "set":
          lt(e) && l(o.get(Xe));
          break;
      }
    }
    kn();
  }
  function st(e) {
    const t = L(e);
    return t === e ? t : (te(t, "iterate", Dt), me(e) ? t : t.map(ve));
  }
  function on(e) {
    return te(e = L(e), "iterate", Dt), e;
  }
  function Ke(e, t) {
    return Be(e) ? dt(et(e) ? ve(t) : t) : ve(t);
  }
  const Ai = {
    __proto__: null,
    [Symbol.iterator]() {
      return _n(this, Symbol.iterator, (e) => Ke(this, e));
    },
    concat(...e) {
      return st(this).concat(...e.map((t) => M(t) ? st(t) : t));
    },
    entries() {
      return _n(this, "entries", (e) => (e[1] = Ke(this, e[1]), e));
    },
    every(e, t) {
      return Pe(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Pe(this, "filter", e, t, (n) => n.map((s) => Ke(this, s)), arguments);
    },
    find(e, t) {
      return Pe(this, "find", e, t, (n) => Ke(this, n), arguments);
    },
    findIndex(e, t) {
      return Pe(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Pe(this, "findLast", e, t, (n) => Ke(this, n), arguments);
    },
    findLastIndex(e, t) {
      return Pe(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Pe(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return bn(this, "includes", e);
    },
    indexOf(...e) {
      return bn(this, "indexOf", e);
    },
    join(e) {
      return st(this).join(e);
    },
    lastIndexOf(...e) {
      return bn(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Pe(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return yt(this, "pop");
    },
    push(...e) {
      return yt(this, "push", e);
    },
    reduce(e, ...t) {
      return _s(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return _s(this, "reduceRight", e, t);
    },
    shift() {
      return yt(this, "shift");
    },
    some(e, t) {
      return Pe(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return yt(this, "splice", e);
    },
    toReversed() {
      return st(this).toReversed();
    },
    toSorted(e) {
      return st(this).toSorted(e);
    },
    toSpliced(...e) {
      return st(this).toSpliced(...e);
    },
    unshift(...e) {
      return yt(this, "unshift", e);
    },
    values() {
      return _n(this, "values", (e) => Ke(this, e));
    }
  };
  function _n(e, t, n) {
    const s = on(e), r = s[t]();
    return s !== e && !me(e) && (r._next = r.next, r.next = () => {
      const i = r._next();
      return i.done || (i.value = n(i.value)), i;
    }), r;
  }
  const Si = Array.prototype;
  function Pe(e, t, n, s, r, i) {
    const o = on(e), l = o !== e && !me(e), u = o[t];
    if (u !== Si[t]) {
      const h = u.apply(e, i);
      return l ? ve(h) : h;
    }
    let d = n;
    o !== e && (l ? d = function(h, y) {
      return n.call(this, Ke(e, h), y, e);
    } : n.length > 2 && (d = function(h, y) {
      return n.call(this, h, y, e);
    }));
    const f = u.call(o, d, s);
    return l && r ? r(f) : f;
  }
  function _s(e, t, n, s) {
    const r = on(e);
    let i = n;
    return r !== e && (me(e) ? n.length > 3 && (i = function(o, l, u) {
      return n.call(this, o, l, u, e);
    }) : i = function(o, l, u) {
      return n.call(this, o, Ke(e, l), u, e);
    }), r[t](i, ...s);
  }
  function bn(e, t, n) {
    const s = L(e);
    te(s, "iterate", Dt);
    const r = s[t](...n);
    return (r === -1 || r === false) && Zn(n[0]) ? (n[0] = L(n[0]), s[t](...n)) : r;
  }
  function yt(e, t, n = []) {
    Ne(), Wn();
    const s = L(e)[t].apply(e, n);
    return kn(), je(), s;
  }
  const Ci = Nn("__proto__,__v_isRef,__isVue"), hr = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ye));
  function Fi(e) {
    ye(e) || (e = String(e));
    const t = L(this);
    return te(t, "has", e), t.hasOwnProperty(e);
  }
  class pr {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, s) {
      if (n === "__v_skip") return t.__v_skip;
      const r = this._isReadonly, i = this._isShallow;
      if (n === "__v_isReactive") return !r;
      if (n === "__v_isReadonly") return r;
      if (n === "__v_isShallow") return i;
      if (n === "__v_raw") return s === (r ? i ? $i : br : i ? _r : mr).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
      const o = M(t);
      if (!r) {
        let u;
        if (o && (u = Ai[n])) return u;
        if (n === "hasOwnProperty") return Fi;
      }
      const l = Reflect.get(t, n, se(t) ? t : s);
      if ((ye(n) ? hr.has(n) : Ci(n)) || (r || te(t, "get", n), i)) return l;
      if (se(l)) {
        const u = o && Hn(n) ? l : l.value;
        return r && W(u) ? Dn(u) : u;
      }
      return W(l) ? r ? Dn(l) : zn(l) : l;
    }
  }
  class gr extends pr {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, s, r) {
      let i = t[n];
      const o = M(t) && Hn(n);
      if (!this._isShallow) {
        const d = Be(i);
        if (!me(s) && !Be(s) && (i = L(i), s = L(s)), !o && se(i) && !se(s)) return d || (i.value = s), true;
      }
      const l = o ? Number(n) < t.length : j(t, n), u = Reflect.set(t, n, s, se(t) ? t : r);
      return t === L(r) && (l ? We(s, i) && Ie(t, "set", n, s) : Ie(t, "add", n, s)), u;
    }
    deleteProperty(t, n) {
      const s = j(t, n);
      t[n];
      const r = Reflect.deleteProperty(t, n);
      return r && s && Ie(t, "delete", n, void 0), r;
    }
    has(t, n) {
      const s = Reflect.has(t, n);
      return (!ye(n) || !hr.has(n)) && te(t, "has", n), s;
    }
    ownKeys(t) {
      return te(t, "iterate", M(t) ? "length" : Xe), Reflect.ownKeys(t);
    }
  }
  class Ei extends pr {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const wi = new gr(), Ti = new Ei(), Di = new gr(true);
  const Tn = (e) => e, Ut = (e) => Reflect.getPrototypeOf(e);
  function Oi(e, t, n) {
    return function(...s) {
      const r = this.__v_raw, i = L(r), o = lt(i), l = e === "entries" || e === Symbol.iterator && o, u = e === "keys" && o, d = r[e](...s), f = n ? Tn : t ? dt : ve;
      return !t && te(i, "iterate", u ? wn : Xe), Q(Object.create(d), {
        next() {
          const { value: h, done: y } = d.next();
          return y ? {
            value: h,
            done: y
          } : {
            value: l ? [
              f(h[0]),
              f(h[1])
            ] : f(h),
            done: y
          };
        }
      });
    };
  }
  function Kt(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Pi(e, t) {
    const n = {
      get(r) {
        const i = this.__v_raw, o = L(i), l = L(r);
        e || (We(r, l) && te(o, "get", r), te(o, "get", l));
        const { has: u } = Ut(o), d = t ? Tn : e ? dt : ve;
        if (u.call(o, r)) return d(i.get(r));
        if (u.call(o, l)) return d(i.get(l));
        i !== o && i.get(r);
      },
      get size() {
        const r = this.__v_raw;
        return !e && te(L(r), "iterate", Xe), r.size;
      },
      has(r) {
        const i = this.__v_raw, o = L(i), l = L(r);
        return e || (We(r, l) && te(o, "has", r), te(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
      },
      forEach(r, i) {
        const o = this, l = o.__v_raw, u = L(l), d = t ? Tn : e ? dt : ve;
        return !e && te(u, "iterate", Xe), l.forEach((f, h) => r.call(i, d(f), d(h), o));
      }
    };
    return Q(n, e ? {
      add: Kt("add"),
      set: Kt("set"),
      delete: Kt("delete"),
      clear: Kt("clear")
    } : {
      add(r) {
        !t && !me(r) && !Be(r) && (r = L(r));
        const i = L(this);
        return Ut(i).has.call(i, r) || (i.add(r), Ie(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !me(i) && !Be(i) && (i = L(i));
        const o = L(this), { has: l, get: u } = Ut(o);
        let d = l.call(o, r);
        d || (r = L(r), d = l.call(o, r));
        const f = u.call(o, r);
        return o.set(r, i), d ? We(i, f) && Ie(o, "set", r, i) : Ie(o, "add", r, i), this;
      },
      delete(r) {
        const i = L(this), { has: o, get: l } = Ut(i);
        let u = o.call(i, r);
        u || (r = L(r), u = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return u && Ie(i, "delete", r, void 0), d;
      },
      clear() {
        const r = L(this), i = r.size !== 0, o = r.clear();
        return i && Ie(r, "clear", void 0, void 0), o;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((r) => {
      n[r] = Oi(r, e, t);
    }), n;
  }
  function Gn(e, t) {
    const n = Pi(e, t);
    return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(j(n, r) && r in s ? n : s, r, i);
  }
  const Mi = {
    get: Gn(false, false)
  }, Ri = {
    get: Gn(false, true)
  }, Ii = {
    get: Gn(true, false)
  };
  const mr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), $i = /* @__PURE__ */ new WeakMap();
  function Li(e) {
    switch (e) {
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
  function Ni(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Li(ci(e));
  }
  function zn(e) {
    return Be(e) ? e : Yn(e, false, wi, Mi, mr);
  }
  function ji(e) {
    return Yn(e, false, Di, Ri, _r);
  }
  function Dn(e) {
    return Yn(e, true, Ti, Ii, br);
  }
  function Yn(e, t, n, s, r) {
    if (!W(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = Ni(e);
    if (i === 0) return e;
    const o = r.get(e);
    if (o) return o;
    const l = new Proxy(e, i === 2 ? s : n);
    return r.set(e, l), l;
  }
  function et(e) {
    return Be(e) ? et(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Be(e) {
    return !!(e && e.__v_isReadonly);
  }
  function me(e) {
    return !!(e && e.__v_isShallow);
  }
  function Zn(e) {
    return e ? !!e.__v_raw : false;
  }
  function L(e) {
    const t = e && e.__v_raw;
    return t ? L(t) : e;
  }
  function Bi(e) {
    return !j(e, "__v_skip") && Object.isExtensible(e) && tr(e, "__v_skip", true), e;
  }
  const ve = (e) => W(e) ? zn(e) : e, dt = (e) => W(e) ? Dn(e) : e;
  function se(e) {
    return e ? e.__v_isRef === true : false;
  }
  function ke(e) {
    return yr(e, false);
  }
  function Hi(e) {
    return yr(e, true);
  }
  function yr(e, t) {
    return se(e) ? e : new Ui(e, t);
  }
  class Ui {
    constructor(t, n) {
      this.dep = new Jn(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : L(t), this._value = n ? t : ve(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, s = this.__v_isShallow || me(t) || Be(t);
      t = s ? t : L(t), We(t, n) && (this._rawValue = t, this._value = s ? t : ve(t), this.dep.trigger());
    }
  }
  function Ki(e) {
    return se(e) ? e.value : e;
  }
  const Vi = {
    get: (e, t, n) => t === "__v_raw" ? e : Ki(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
      const r = e[t];
      return se(r) && !se(n) ? (r.value = n, true) : Reflect.set(e, t, n, s);
    }
  };
  function vr(e) {
    return et(e) ? e : new Proxy(e, Vi);
  }
  class Wi {
    constructor(t, n, s) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Jn(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Tt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && J !== this) return lr(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return fr(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function ki(e, t, n = false) {
    let s, r;
    return R(e) ? s = e : (s = e.get, r = e.set), new Wi(s, r, n);
  }
  const Vt = {}, Gt = /* @__PURE__ */ new WeakMap();
  let Qe;
  function qi(e, t = false, n = Qe) {
    if (n) {
      let s = Gt.get(n);
      s || Gt.set(n, s = []), s.push(e);
    }
  }
  function Ji(e, t, n = V) {
    const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: u } = n, d = (w) => r ? w : me(w) || r === false || r === 0 ? $e(w, 1) : $e(w);
    let f, h, y, A, T = false, C = false;
    if (se(e) ? (h = () => e.value, T = me(e)) : et(e) ? (h = () => d(e), T = true) : M(e) ? (C = true, T = e.some((w) => et(w) || me(w)), h = () => e.map((w) => {
      if (se(w)) return w.value;
      if (et(w)) return d(w);
      if (R(w)) return u ? u(w, 2) : w();
    })) : R(e) ? t ? h = u ? () => u(e, 2) : e : h = () => {
      if (y) {
        Ne();
        try {
          y();
        } finally {
          je();
        }
      }
      const w = Qe;
      Qe = f;
      try {
        return u ? u(e, 3, [
          A
        ]) : e(A);
      } finally {
        Qe = w;
      }
    } : h = Te, t && r) {
      const w = h, K = r === true ? 1 / 0 : r;
      h = () => $e(w(), K);
    }
    const B = yi(), U = () => {
      f.stop(), B && B.active && Bn(B.effects, f);
    };
    if (i && t) {
      const w = t;
      t = (...K) => {
        w(...K), U();
      };
    }
    let E = C ? new Array(e.length).fill(Vt) : Vt;
    const I = (w) => {
      if (!(!(f.flags & 1) || !f.dirty && !w)) if (t) {
        const K = f.run();
        if (r || T || (C ? K.some((X, ee) => We(X, E[ee])) : We(K, E))) {
          y && y();
          const X = Qe;
          Qe = f;
          try {
            const ee = [
              K,
              E === Vt ? void 0 : C && E[0] === Vt ? [] : E,
              A
            ];
            E = K, u ? u(t, 3, ee) : t(...ee);
          } finally {
            Qe = X;
          }
        }
      } else f.run();
    };
    return l && l(I), f = new ir(h), f.scheduler = o ? () => o(I, false) : I, A = (w) => qi(w, false, f), y = f.onStop = () => {
      const w = Gt.get(f);
      if (w) {
        if (u) u(w, 4);
        else for (const K of w) K();
        Gt.delete(f);
      }
    }, t ? s ? I(true) : E = f.run() : o ? o(I.bind(null, true), true) : f.run(), U.pause = f.pause.bind(f), U.resume = f.resume.bind(f), U.stop = U, U;
  }
  function $e(e, t = 1 / 0, n) {
    if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, se(e)) $e(e.value, t, n);
    else if (M(e)) for (let s = 0; s < e.length; s++) $e(e[s], t, n);
    else if (Ys(e) || lt(e)) e.forEach((s) => {
      $e(s, t, n);
    });
    else if (Xs(e)) {
      for (const s in e) $e(e[s], t, n);
      for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && $e(e[s], t, n);
    }
    return e;
  }
  function It(e, t, n, s) {
    try {
      return s ? e(...s) : e();
    } catch (r) {
      ln(r, t, n);
    }
  }
  function De(e, t, n, s) {
    if (R(e)) {
      const r = It(e, t, n, s);
      return r && Zs(r) && r.catch((i) => {
        ln(i, t, n);
      }), r;
    }
    if (M(e)) {
      const r = [];
      for (let i = 0; i < e.length; i++) r.push(De(e[i], t, n, s));
      return r;
    }
  }
  function ln(e, t, n, s = true) {
    const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || V;
    if (t) {
      let l = t.parent;
      const u = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; l; ) {
        const f = l.ec;
        if (f) {
          for (let h = 0; h < f.length; h++) if (f[h](e, u, d) === false) return;
        }
        l = l.parent;
      }
      if (i) {
        Ne(), It(i, null, 10, [
          e,
          u,
          d
        ]), je();
        return;
      }
    }
    Gi(e, n, r, s, o);
  }
  function Gi(e, t, n, s = true, r = false) {
    if (r) throw e;
    console.error(e);
  }
  const le = [];
  let Ee = -1;
  const ct = [];
  let Ve = null, rt = 0;
  const xr = Promise.resolve();
  let zt = null;
  function zi(e) {
    const t = zt || xr;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Yi(e) {
    let t = Ee + 1, n = le.length;
    for (; t < n; ) {
      const s = t + n >>> 1, r = le[s], i = Ot(r);
      i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
    }
    return t;
  }
  function Qn(e) {
    if (!(e.flags & 1)) {
      const t = Ot(e), n = le[le.length - 1];
      !n || !(e.flags & 2) && t >= Ot(n) ? le.push(e) : le.splice(Yi(t), 0, e), e.flags |= 1, Ar();
    }
  }
  function Ar() {
    zt || (zt = xr.then(Cr));
  }
  function Zi(e) {
    M(e) ? ct.push(...e) : Ve && e.id === -1 ? Ve.splice(rt + 1, 0, e) : e.flags & 1 || (ct.push(e), e.flags |= 1), Ar();
  }
  function bs(e, t, n = Ee + 1) {
    for (; n < le.length; n++) {
      const s = le[n];
      if (s && s.flags & 2) {
        if (e && s.id !== e.uid) continue;
        le.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
      }
    }
  }
  function Sr(e) {
    if (ct.length) {
      const t = [
        ...new Set(ct)
      ].sort((n, s) => Ot(n) - Ot(s));
      if (ct.length = 0, Ve) {
        Ve.push(...t);
        return;
      }
      for (Ve = t, rt = 0; rt < Ve.length; rt++) {
        const n = Ve[rt];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      Ve = null, rt = 0;
    }
  }
  const Ot = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function Cr(e) {
    try {
      for (Ee = 0; Ee < le.length; Ee++) {
        const t = le[Ee];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), It(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Ee < le.length; Ee++) {
        const t = le[Ee];
        t && (t.flags &= -2);
      }
      Ee = -1, le.length = 0, Sr(), zt = null, (le.length || ct.length) && Cr();
    }
  }
  let ne = null, Fr = null;
  function Yt(e) {
    const t = ne;
    return ne = e, Fr = e && e.type.__scopeId || null, t;
  }
  function Xn(e, t = ne, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
      s._d && Ds(-1);
      const i = Yt(t);
      let o;
      try {
        o = e(...r);
      } finally {
        Yt(i), s._d && Ds(1);
      }
      return o;
    };
    return s._n = true, s._c = true, s._d = true, s;
  }
  function Er(e, t) {
    if (ne === null) return e;
    const n = an(ne), s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
      let [i, o, l, u = V] = t[r];
      i && (R(i) && (i = {
        mounted: i,
        updated: i
      }), i.deep && $e(o), s.push({
        dir: i,
        instance: n,
        value: o,
        oldValue: void 0,
        arg: l,
        modifiers: u
      }));
    }
    return e;
  }
  function Ye(e, t, n, s) {
    const r = e.dirs, i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      i && (l.oldValue = i[o].value);
      let u = l.dir[s];
      u && (Ne(), De(u, n, 8, [
        e.el,
        l,
        e,
        t
      ]), je());
    }
  }
  function Qi(e, t) {
    if (ce) {
      let n = ce.provides;
      const s = ce.parent && ce.parent.provides;
      s === n && (n = ce.provides = Object.create(s)), n[e] = t;
    }
  }
  function kt(e, t, n = false) {
    const s = Xr();
    if (s || at) {
      let r = at ? at._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
      if (r && e in r) return r[e];
      if (arguments.length > 1) return n && R(t) ? t.call(s && s.proxy) : t;
    }
  }
  const Xi = /* @__PURE__ */ Symbol.for("v-scx"), eo = () => kt(Xi);
  function ut(e, t, n) {
    return wr(e, t, n);
  }
  function wr(e, t, n = V) {
    const { immediate: s, deep: r, flush: i, once: o } = n, l = Q({}, n), u = t && s || !t && i !== "post";
    let d;
    if (Mt) {
      if (i === "sync") {
        const A = eo();
        d = A.__watcherHandles || (A.__watcherHandles = []);
      } else if (!u) {
        const A = () => {
        };
        return A.stop = Te, A.resume = Te, A.pause = Te, A;
      }
    }
    const f = ce;
    l.call = (A, T, C) => De(A, f, T, C);
    let h = false;
    i === "post" ? l.scheduler = (A) => {
      ae(A, f && f.suspense);
    } : i !== "sync" && (h = true, l.scheduler = (A, T) => {
      T ? A() : Qn(A);
    }), l.augmentJob = (A) => {
      t && (A.flags |= 4), h && (A.flags |= 2, f && (A.id = f.uid, A.i = f));
    };
    const y = Ji(e, t, l);
    return Mt && (d ? d.push(y) : u && y()), y;
  }
  function to(e, t, n) {
    const s = this.proxy, r = Y(e) ? e.includes(".") ? Tr(s, e) : () => s[e] : e.bind(s, s);
    let i;
    R(t) ? i = t : (i = t.handler, n = t);
    const o = Lt(this), l = wr(r, i.bind(s), n);
    return o(), l;
  }
  function Tr(e, t) {
    const n = t.split(".");
    return () => {
      let s = e;
      for (let r = 0; r < n.length && s; r++) s = s[n[r]];
      return s;
    };
  }
  const no = /* @__PURE__ */ Symbol("_vte"), so = (e) => e.__isTeleport, ro = /* @__PURE__ */ Symbol("_leaveCb");
  function es(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, es(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function $t(e, t) {
    return R(e) ? Q({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  }
  function Dr(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  function io(e) {
    const t = Xr(), n = Hi(null);
    if (t) {
      const r = t.refs === V ? t.refs = {} : t.refs;
      Object.defineProperty(r, e, {
        enumerable: true,
        get: () => n.value,
        set: (i) => n.value = i
      });
    }
    return n;
  }
  function ys(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
  }
  const Zt = /* @__PURE__ */ new WeakMap();
  function Ft(e, t, n, s, r = false) {
    if (M(e)) {
      e.forEach((C, B) => Ft(C, t && (M(t) ? t[B] : t), n, s, r));
      return;
    }
    if (ft(s) && !r) {
      s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ft(e, t, n, s.component.subTree);
      return;
    }
    const i = s.shapeFlag & 4 ? an(s.component) : s.el, o = r ? null : i, { i: l, r: u } = e, d = t && t.r, f = l.refs === V ? l.refs = {} : l.refs, h = l.setupState, y = L(h), A = h === V ? zs : (C) => ys(f, C) ? false : j(y, C), T = (C, B) => !(B && ys(f, B));
    if (d != null && d !== u) {
      if (vs(t), Y(d)) f[d] = null, A(d) && (h[d] = null);
      else if (se(d)) {
        const C = t;
        T(d, C.k) && (d.value = null), C.k && (f[C.k] = null);
      }
    }
    if (R(u)) It(u, l, 12, [
      o,
      f
    ]);
    else {
      const C = Y(u), B = se(u);
      if (C || B) {
        const U = () => {
          if (e.f) {
            const E = C ? A(u) ? h[u] : f[u] : T() || !e.k ? u.value : f[e.k];
            if (r) M(E) && Bn(E, i);
            else if (M(E)) E.includes(i) || E.push(i);
            else if (C) f[u] = [
              i
            ], A(u) && (h[u] = f[u]);
            else {
              const I = [
                i
              ];
              T(u, e.k) && (u.value = I), e.k && (f[e.k] = I);
            }
          } else C ? (f[u] = o, A(u) && (h[u] = o)) : B && (T(u, e.k) && (u.value = o), e.k && (f[e.k] = o));
        };
        if (o) {
          const E = () => {
            U(), Zt.delete(e);
          };
          E.id = -1, Zt.set(e, E), ae(E, n);
        } else vs(e), U();
      }
    }
  }
  function vs(e) {
    const t = Zt.get(e);
    t && (t.flags |= 8, Zt.delete(e));
  }
  sn().requestIdleCallback;
  sn().cancelIdleCallback;
  const ft = (e) => !!e.type.__asyncLoader, Or = (e) => e.type.__isKeepAlive;
  function oo(e, t) {
    Pr(e, "a", t);
  }
  function lo(e, t) {
    Pr(e, "da", t);
  }
  function Pr(e, t, n = ce) {
    const s = e.__wdc || (e.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return e();
    });
    if (cn(t, s, n), n) {
      let r = n.parent;
      for (; r && r.parent; ) Or(r.parent.vnode) && co(s, t, n, r), r = r.parent;
    }
  }
  function co(e, t, n, s) {
    const r = cn(t, e, s, true);
    Mr(() => {
      Bn(s[t], r);
    }, n);
  }
  function cn(e, t, n = ce, s = false) {
    if (n) {
      const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
        Ne();
        const l = Lt(n), u = De(t, n, e, o);
        return l(), je(), u;
      });
      return s ? r.unshift(i) : r.push(i), i;
    }
  }
  const Ue = (e) => (t, n = ce) => {
    (!Mt || e === "sp") && cn(e, (...s) => t(...s), n);
  }, uo = Ue("bm"), ts = Ue("m"), fo = Ue("bu"), ao = Ue("u"), ho = Ue("bum"), Mr = Ue("um"), po = Ue("sp"), go = Ue("rtg"), mo = Ue("rtc");
  function _o(e, t = ce) {
    cn("ec", e, t);
  }
  const bo = /* @__PURE__ */ Symbol.for("v-ndc");
  function Qt(e, t, n, s) {
    let r;
    const i = n, o = M(e);
    if (o || Y(e)) {
      const l = o && et(e);
      let u = false, d = false;
      l && (u = !me(e), d = Be(e), e = on(e)), r = new Array(e.length);
      for (let f = 0, h = e.length; f < h; f++) r[f] = t(u ? d ? dt(ve(e[f])) : ve(e[f]) : e[f], f, void 0, i);
    } else if (typeof e == "number") {
      r = new Array(e);
      for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
    } else if (W(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, u) => t(l, u, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u];
        r[u] = t(e[f], f, u, i);
      }
    }
    else r = [];
    return r;
  }
  function yo(e, t, n = {}, s, r) {
    if (ne.ce || ne.parent && ft(ne.parent) && ne.parent.ce) {
      const d = Object.keys(n).length > 0;
      return z(), tt(Z, null, [
        _e("slot", n, s)
      ], d ? -2 : 64);
    }
    let i = e[t];
    i && i._c && (i._d = false), z();
    const o = i && Rr(i(n)), l = n.key || o && o.key, u = tt(Z, {
      key: (l && !ye(l) ? l : `_${t}`) + (!o && s ? "_fb" : "")
    }, o || [], o && e._ === 1 ? 64 : -2);
    return i && i._c && (i._d = true), u;
  }
  function Rr(e) {
    return e.some((t) => rs(t) ? !(t.type === He || t.type === Z && !Rr(t.children)) : true) ? e : null;
  }
  const On = (e) => e ? ei(e) ? an(e) : On(e.parent) : null, Et = Q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => On(e.parent),
    $root: (e) => On(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $r(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zi.bind(e.proxy)),
    $watch: (e) => to.bind(e)
  }), yn = (e, t) => e !== V && !e.__isScriptSetup && j(e, t), vo = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: u } = e;
      if (t[0] !== "$") {
        const y = o[t];
        if (y !== void 0) switch (y) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
        else {
          if (yn(s, t)) return o[t] = 1, s[t];
          if (r !== V && j(r, t)) return o[t] = 2, r[t];
          if (j(i, t)) return o[t] = 3, i[t];
          if (n !== V && j(n, t)) return o[t] = 4, n[t];
          Pn && (o[t] = 0);
        }
      }
      const d = Et[t];
      let f, h;
      if (d) return t === "$attrs" && te(e.attrs, "get", ""), d(e);
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (n !== V && j(n, t)) return o[t] = 4, n[t];
      if (h = u.config.globalProperties, j(h, t)) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: r, ctx: i } = e;
      return yn(r, t) ? (r[t] = n, true) : s !== V && j(s, t) ? (s[t] = n, true) : j(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (i[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o } }, l) {
      let u;
      return !!(n[l] || e !== V && l[0] !== "$" && j(e, l) || yn(t, l) || j(i, l) || j(s, l) || j(Et, l) || j(r.config.globalProperties, l) || (u = o.__cssModules) && u[l]);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : j(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  function xs(e) {
    return M(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  let Pn = true;
  function xo(e) {
    const t = $r(e), n = e.proxy, s = e.ctx;
    Pn = false, t.beforeCreate && As(t.beforeCreate, e, "bc");
    const { data: r, computed: i, methods: o, watch: l, provide: u, inject: d, created: f, beforeMount: h, mounted: y, beforeUpdate: A, updated: T, activated: C, deactivated: B, beforeDestroy: U, beforeUnmount: E, destroyed: I, unmounted: w, render: K, renderTracked: X, renderTriggered: ee, errorCaptured: he, serverPrefetch: Je, expose: Oe, inheritAttrs: gt, components: Nt, directives: jt, filters: dn } = t;
    if (d && Ao(d, s, null), o) for (const G in o) {
      const k = o[G];
      R(k) && (s[G] = k.bind(n));
    }
    if (r) {
      const G = r.call(n, n);
      W(G) && (e.data = zn(G));
    }
    if (Pn = true, i) for (const G in i) {
      const k = i[G], Ge = R(k) ? k.bind(n, n) : R(k.get) ? k.get.bind(n, n) : Te, Bt = !R(k) && R(k.set) ? k.set.bind(n) : Te, ze = ls({
        get: Ge,
        set: Bt
      });
      Object.defineProperty(s, G, {
        enumerable: true,
        configurable: true,
        get: () => ze.value,
        set: (xe) => ze.value = xe
      });
    }
    if (l) for (const G in l) Ir(l[G], s, n, G);
    if (u) {
      const G = R(u) ? u.call(n) : u;
      Reflect.ownKeys(G).forEach((k) => {
        Qi(k, G[k]);
      });
    }
    f && As(f, e, "c");
    function re(G, k) {
      M(k) ? k.forEach((Ge) => G(Ge.bind(n))) : k && G(k.bind(n));
    }
    if (re(uo, h), re(ts, y), re(fo, A), re(ao, T), re(oo, C), re(lo, B), re(_o, he), re(mo, X), re(go, ee), re(ho, E), re(Mr, w), re(po, Je), M(Oe)) if (Oe.length) {
      const G = e.exposed || (e.exposed = {});
      Oe.forEach((k) => {
        Object.defineProperty(G, k, {
          get: () => n[k],
          set: (Ge) => n[k] = Ge,
          enumerable: true
        });
      });
    } else e.exposed || (e.exposed = {});
    K && e.render === Te && (e.render = K), gt != null && (e.inheritAttrs = gt), Nt && (e.components = Nt), jt && (e.directives = jt), Je && Dr(e);
  }
  function Ao(e, t, n = Te) {
    M(e) && (e = Mn(e));
    for (const s in e) {
      const r = e[s];
      let i;
      W(r) ? "default" in r ? i = kt(r.from || s, r.default, true) : i = kt(r.from || s) : i = kt(r), se(i) ? Object.defineProperty(t, s, {
        enumerable: true,
        configurable: true,
        get: () => i.value,
        set: (o) => i.value = o
      }) : t[s] = i;
    }
  }
  function As(e, t, n) {
    De(M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Ir(e, t, n, s) {
    let r = s.includes(".") ? Tr(n, s) : () => n[s];
    if (Y(e)) {
      const i = t[e];
      R(i) && ut(r, i);
    } else if (R(e)) ut(r, e.bind(n));
    else if (W(e)) if (M(e)) e.forEach((i) => Ir(i, t, n, s));
    else {
      const i = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(i) && ut(r, i, e);
    }
  }
  function $r(e) {
    const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, l = i.get(t);
    let u;
    return l ? u = l : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((d) => Xt(u, d, o, true)), Xt(u, t, o)), W(t) && i.set(t, u), u;
  }
  function Xt(e, t, n, s = false) {
    const { mixins: r, extends: i } = t;
    i && Xt(e, i, n, true), r && r.forEach((o) => Xt(e, o, n, true));
    for (const o in t) if (!(s && o === "expose")) {
      const l = So[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
    return e;
  }
  const So = {
    data: Ss,
    props: Cs,
    emits: Cs,
    methods: xt,
    computed: xt,
    beforeCreate: ie,
    created: ie,
    beforeMount: ie,
    mounted: ie,
    beforeUpdate: ie,
    updated: ie,
    beforeDestroy: ie,
    beforeUnmount: ie,
    destroyed: ie,
    unmounted: ie,
    activated: ie,
    deactivated: ie,
    errorCaptured: ie,
    serverPrefetch: ie,
    components: xt,
    directives: xt,
    watch: Fo,
    provide: Ss,
    inject: Co
  };
  function Ss(e, t) {
    return t ? e ? function() {
      return Q(R(e) ? e.call(this, this) : e, R(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Co(e, t) {
    return xt(Mn(e), Mn(t));
  }
  function Mn(e) {
    if (M(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function ie(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function xt(e, t) {
    return e ? Q(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Cs(e, t) {
    return e ? M(e) && M(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Q(/* @__PURE__ */ Object.create(null), xs(e), xs(t ?? {})) : t;
  }
  function Fo(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Q(/* @__PURE__ */ Object.create(null), e);
    for (const s in t) n[s] = ie(e[s], t[s]);
    return n;
  }
  function Lr() {
    return {
      app: null,
      config: {
        isNativeTag: zs,
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
  let Eo = 0;
  function wo(e, t) {
    return function(s, r = null) {
      R(s) || (s = Q({}, s)), r != null && !W(r) && (r = null);
      const i = Lr(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let u = false;
      const d = i.app = {
        _uid: Eo++,
        _component: s,
        _props: r,
        _container: null,
        _context: i,
        _instance: null,
        version: rl,
        get config() {
          return i.config;
        },
        set config(f) {
        },
        use(f, ...h) {
          return o.has(f) || (f && R(f.install) ? (o.add(f), f.install(d, ...h)) : R(f) && (o.add(f), f(d, ...h))), d;
        },
        mixin(f) {
          return i.mixins.includes(f) || i.mixins.push(f), d;
        },
        component(f, h) {
          return h ? (i.components[f] = h, d) : i.components[f];
        },
        directive(f, h) {
          return h ? (i.directives[f] = h, d) : i.directives[f];
        },
        mount(f, h, y) {
          if (!u) {
            const A = d._ceVNode || _e(s, r);
            return A.appContext = i, y === true ? y = "svg" : y === false && (y = void 0), e(A, f, y), u = true, d._container = f, f.__vue_app__ = d, an(A.component);
          }
        },
        onUnmount(f) {
          l.push(f);
        },
        unmount() {
          u && (De(l, d._instance, 16), e(null, d._container), delete d._container.__vue_app__);
        },
        provide(f, h) {
          return i.provides[f] = h, d;
        },
        runWithContext(f) {
          const h = at;
          at = d;
          try {
            return f();
          } finally {
            at = h;
          }
        }
      };
      return d;
    };
  }
  let at = null;
  const To = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${qe(t)}Modifiers`] || e[`${nt(t)}Modifiers`];
  function Do(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || V;
    let r = n;
    const i = t.startsWith("update:"), o = i && To(s, t.slice(7));
    o && (o.trim && (r = n.map((f) => Y(f) ? f.trim() : f)), o.number && (r = n.map(Un)));
    let l, u = s[l = pn(t)] || s[l = pn(qe(t))];
    !u && i && (u = s[l = pn(nt(t))]), u && De(u, e, 6, r);
    const d = s[l + "Once"];
    if (d) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[l]) return;
      e.emitted[l] = true, De(d, e, 6, r);
    }
  }
  const Oo = /* @__PURE__ */ new WeakMap();
  function Nr(e, t, n = false) {
    const s = n ? Oo : t.emitsCache, r = s.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {}, l = false;
    if (!R(e)) {
      const u = (d) => {
        const f = Nr(d, t, true);
        f && (l = true, Q(o, f));
      };
      !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
    }
    return !i && !l ? (W(e) && s.set(e, null), null) : (M(i) ? i.forEach((u) => o[u] = null) : Q(o, i), W(e) && s.set(e, o), o);
  }
  function un(e, t) {
    return !e || !tn(t) ? false : (t = t.slice(2).replace(/Once$/, ""), j(e, t[0].toLowerCase() + t.slice(1)) || j(e, nt(t)) || j(e, t));
  }
  function Fs(e) {
    const { type: t, vnode: n, proxy: s, withProxy: r, propsOptions: [i], slots: o, attrs: l, emit: u, render: d, renderCache: f, props: h, data: y, setupState: A, ctx: T, inheritAttrs: C } = e, B = Yt(e);
    let U, E;
    try {
      if (n.shapeFlag & 4) {
        const w = r || s, K = w;
        U = we(d.call(K, w, f, h, A, y, T)), E = l;
      } else {
        const w = t;
        U = we(w.length > 1 ? w(h, {
          attrs: l,
          slots: o,
          emit: u
        }) : w(h, null)), E = t.props ? l : Po(l);
      }
    } catch (w) {
      wt.length = 0, ln(w, e, 1), U = _e(He);
    }
    let I = U;
    if (E && C !== false) {
      const w = Object.keys(E), { shapeFlag: K } = I;
      w.length && K & 7 && (i && w.some(jn) && (E = Mo(E, i)), I = ht(I, E, false, true));
    }
    return n.dirs && (I = ht(I, null, false, true), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && es(I, n.transition), U = I, Yt(B), U;
  }
  const Po = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || tn(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Mo = (e, t) => {
    const n = {};
    for (const s in e) (!jn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
  function Ro(e, t, n) {
    const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: u } = t, d = i.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && u >= 0) {
      if (u & 1024) return true;
      if (u & 16) return s ? Es(s, o, d) : !!o;
      if (u & 8) {
        const f = t.dynamicProps;
        for (let h = 0; h < f.length; h++) {
          const y = f[h];
          if (jr(o, s, y) && !un(d, y)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : s === o ? false : s ? o ? Es(s, o, d) : true : !!o;
    return false;
  }
  function Es(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return true;
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      if (jr(t, e, i) && !un(n, i)) return true;
    }
    return false;
  }
  function jr(e, t, n) {
    const s = e[n], r = t[n];
    return n === "style" && W(s) && W(r) ? !Vn(s, r) : s !== r;
  }
  function Io({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const s = t.subTree;
      if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Br = {}, Hr = () => Object.create(Br), Ur = (e) => Object.getPrototypeOf(e) === Br;
  function $o(e, t, n, s = false) {
    const r = {}, i = Hr();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Kr(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n ? e.props = s ? r : ji(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
  }
  function Lo(e, t, n, s) {
    const { props: r, attrs: i, vnode: { patchFlag: o } } = e, l = L(r), [u] = e.propsOptions;
    let d = false;
    if ((s || o > 0) && !(o & 16)) {
      if (o & 8) {
        const f = e.vnode.dynamicProps;
        for (let h = 0; h < f.length; h++) {
          let y = f[h];
          if (un(e.emitsOptions, y)) continue;
          const A = t[y];
          if (u) if (j(i, y)) A !== i[y] && (i[y] = A, d = true);
          else {
            const T = qe(y);
            r[T] = Rn(u, l, T, A, e, false);
          }
          else A !== i[y] && (i[y] = A, d = true);
        }
      }
    } else {
      Kr(e, t, r, i) && (d = true);
      let f;
      for (const h in l) (!t || !j(t, h) && ((f = nt(h)) === h || !j(t, f))) && (u ? n && (n[h] !== void 0 || n[f] !== void 0) && (r[h] = Rn(u, l, h, void 0, e, true)) : delete r[h]);
      if (i !== l) for (const h in i) (!t || !j(t, h)) && (delete i[h], d = true);
    }
    d && Ie(e.attrs, "set", "");
  }
  function Kr(e, t, n, s) {
    const [r, i] = e.propsOptions;
    let o = false, l;
    if (t) for (let u in t) {
      if (At(u)) continue;
      const d = t[u];
      let f;
      r && j(r, f = qe(u)) ? !i || !i.includes(f) ? n[f] = d : (l || (l = {}))[f] = d : un(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d, o = true);
    }
    if (i) {
      const u = L(n), d = l || V;
      for (let f = 0; f < i.length; f++) {
        const h = i[f];
        n[h] = Rn(r, u, h, d[h], e, !j(d, h));
      }
    }
    return o;
  }
  function Rn(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
      const l = j(o, "default");
      if (l && s === void 0) {
        const u = o.default;
        if (o.type !== Function && !o.skipFactory && R(u)) {
          const { propsDefaults: d } = r;
          if (n in d) s = d[n];
          else {
            const f = Lt(r);
            s = d[n] = u.call(null, t), f();
          }
        } else s = u;
        r.ce && r.ce._setProp(n, s);
      }
      o[0] && (i && !l ? s = false : o[1] && (s === "" || s === nt(n)) && (s = true));
    }
    return s;
  }
  const No = /* @__PURE__ */ new WeakMap();
  function Vr(e, t, n = false) {
    const s = n ? No : t.propsCache, r = s.get(e);
    if (r) return r;
    const i = e.props, o = {}, l = [];
    let u = false;
    if (!R(e)) {
      const f = (h) => {
        u = true;
        const [y, A] = Vr(h, t, true);
        Q(o, y), A && l.push(...A);
      };
      !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
    }
    if (!i && !u) return W(e) && s.set(e, ot), ot;
    if (M(i)) for (let f = 0; f < i.length; f++) {
      const h = qe(i[f]);
      ws(h) && (o[h] = V);
    }
    else if (i) for (const f in i) {
      const h = qe(f);
      if (ws(h)) {
        const y = i[f], A = o[h] = M(y) || R(y) ? {
          type: y
        } : Q({}, y), T = A.type;
        let C = false, B = true;
        if (M(T)) for (let U = 0; U < T.length; ++U) {
          const E = T[U], I = R(E) && E.name;
          if (I === "Boolean") {
            C = true;
            break;
          } else I === "String" && (B = false);
        }
        else C = R(T) && T.name === "Boolean";
        A[0] = C, A[1] = B, (C || j(A, "default")) && l.push(h);
      }
    }
    const d = [
      o,
      l
    ];
    return W(e) && s.set(e, d), d;
  }
  function ws(e) {
    return e[0] !== "$" && !At(e);
  }
  const ns = (e) => e === "_" || e === "_ctx" || e === "$stable", ss = (e) => M(e) ? e.map(we) : [
    we(e)
  ], jo = (e, t, n) => {
    if (t._n) return t;
    const s = Xn((...r) => ss(t(...r)), n);
    return s._c = false, s;
  }, Wr = (e, t, n) => {
    const s = e._ctx;
    for (const r in e) {
      if (ns(r)) continue;
      const i = e[r];
      if (R(i)) t[r] = jo(r, i, s);
      else if (i != null) {
        const o = ss(i);
        t[r] = () => o;
      }
    }
  }, kr = (e, t) => {
    const n = ss(t);
    e.slots.default = () => n;
  }, qr = (e, t, n) => {
    for (const s in t) (n || !ns(s)) && (e[s] = t[s]);
  }, Bo = (e, t, n) => {
    const s = e.slots = Hr();
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (qr(s, t, n), n && tr(s, "_", r, true)) : Wr(t, s);
    } else t && kr(e, t);
  }, Ho = (e, t, n) => {
    const { vnode: s, slots: r } = e;
    let i = true, o = V;
    if (s.shapeFlag & 32) {
      const l = t._;
      l ? n && l === 1 ? i = false : qr(r, t, n) : (i = !t.$stable, Wr(t, r)), o = t;
    } else t && (kr(e, t), o = {
      default: 1
    });
    if (i) for (const l in r) !ns(l) && o[l] == null && delete r[l];
  }, ae = ko;
  function Uo(e) {
    return Ko(e);
  }
  function Ko(e, t) {
    const n = sn();
    n.__VUE__ = true;
    const { insert: s, remove: r, patchProp: i, createElement: o, createText: l, createComment: u, setText: d, setElementText: f, parentNode: h, nextSibling: y, setScopeId: A = Te, insertStaticContent: T } = e, C = (c, a, p, b = null, g = null, m = null, S = void 0, x = null, v = !!a.dynamicChildren) => {
      if (c === a) return;
      c && !vt(c, a) && (b = Ht(c), xe(c, g, m, true), c = null), a.patchFlag === -2 && (v = false, a.dynamicChildren = null);
      const { type: _, ref: O, shapeFlag: F } = a;
      switch (_) {
        case fn:
          B(c, a, p, b);
          break;
        case He:
          U(c, a, p, b);
          break;
        case xn:
          c == null && E(a, p, b, S);
          break;
        case Z:
          Nt(c, a, p, b, g, m, S, x, v);
          break;
        default:
          F & 1 ? K(c, a, p, b, g, m, S, x, v) : F & 6 ? jt(c, a, p, b, g, m, S, x, v) : (F & 64 || F & 128) && _.process(c, a, p, b, g, m, S, x, v, _t);
      }
      O != null && g ? Ft(O, c && c.ref, m, a || c, !a) : O == null && c && c.ref != null && Ft(c.ref, null, m, c, true);
    }, B = (c, a, p, b) => {
      if (c == null) s(a.el = l(a.children), p, b);
      else {
        const g = a.el = c.el;
        a.children !== c.children && d(g, a.children);
      }
    }, U = (c, a, p, b) => {
      c == null ? s(a.el = u(a.children || ""), p, b) : a.el = c.el;
    }, E = (c, a, p, b) => {
      [c.el, c.anchor] = T(c.children, a, p, b, c.el, c.anchor);
    }, I = ({ el: c, anchor: a }, p, b) => {
      let g;
      for (; c && c !== a; ) g = y(c), s(c, p, b), c = g;
      s(a, p, b);
    }, w = ({ el: c, anchor: a }) => {
      let p;
      for (; c && c !== a; ) p = y(c), r(c), c = p;
      r(a);
    }, K = (c, a, p, b, g, m, S, x, v) => {
      if (a.type === "svg" ? S = "svg" : a.type === "math" && (S = "mathml"), c == null) X(a, p, b, g, m, S, x, v);
      else {
        const _ = c.el && c.el._isVueCE ? c.el : null;
        try {
          _ && _._beginPatch(), Je(c, a, g, m, S, x, v);
        } finally {
          _ && _._endPatch();
        }
      }
    }, X = (c, a, p, b, g, m, S, x) => {
      let v, _;
      const { props: O, shapeFlag: F, transition: D, dirs: P } = c;
      if (v = c.el = o(c.type, m, O && O.is, O), F & 8 ? f(v, c.children) : F & 16 && he(c.children, v, null, b, g, vn(c, m), S, x), P && Ye(c, null, b, "created"), ee(v, c, c.scopeId, S, b), O) {
        for (const q in O) q !== "value" && !At(q) && i(v, q, null, O[q], m, b);
        "value" in O && i(v, "value", null, O.value, m), (_ = O.onVnodeBeforeMount) && Fe(_, b, c);
      }
      P && Ye(c, null, b, "beforeMount");
      const $ = Vo(g, D);
      $ && D.beforeEnter(v), s(v, a, p), ((_ = O && O.onVnodeMounted) || $ || P) && ae(() => {
        _ && Fe(_, b, c), $ && D.enter(v), P && Ye(c, null, b, "mounted");
      }, g);
    }, ee = (c, a, p, b, g) => {
      if (p && A(c, p), b) for (let m = 0; m < b.length; m++) A(c, b[m]);
      if (g) {
        let m = g.subTree;
        if (a === m || Yr(m.type) && (m.ssContent === a || m.ssFallback === a)) {
          const S = g.vnode;
          ee(c, S, S.scopeId, S.slotScopeIds, g.parent);
        }
      }
    }, he = (c, a, p, b, g, m, S, x, v = 0) => {
      for (let _ = v; _ < c.length; _++) {
        const O = c[_] = x ? Re(c[_]) : we(c[_]);
        C(null, O, a, p, b, g, m, S, x);
      }
    }, Je = (c, a, p, b, g, m, S) => {
      const x = a.el = c.el;
      let { patchFlag: v, dynamicChildren: _, dirs: O } = a;
      v |= c.patchFlag & 16;
      const F = c.props || V, D = a.props || V;
      let P;
      if (p && Ze(p, false), (P = D.onVnodeBeforeUpdate) && Fe(P, p, a, c), O && Ye(a, c, p, "beforeUpdate"), p && Ze(p, true), (F.innerHTML && D.innerHTML == null || F.textContent && D.textContent == null) && f(x, ""), _ ? Oe(c.dynamicChildren, _, x, p, b, vn(a, g), m) : S || k(c, a, x, null, p, b, vn(a, g), m, false), v > 0) {
        if (v & 16) gt(x, F, D, p, g);
        else if (v & 2 && F.class !== D.class && i(x, "class", null, D.class, g), v & 4 && i(x, "style", F.style, D.style, g), v & 8) {
          const $ = a.dynamicProps;
          for (let q = 0; q < $.length; q++) {
            const H = $[q], ue = F[H], fe = D[H];
            (fe !== ue || H === "value") && i(x, H, ue, fe, g, p);
          }
        }
        v & 1 && c.children !== a.children && f(x, a.children);
      } else !S && _ == null && gt(x, F, D, p, g);
      ((P = D.onVnodeUpdated) || O) && ae(() => {
        P && Fe(P, p, a, c), O && Ye(a, c, p, "updated");
      }, b);
    }, Oe = (c, a, p, b, g, m, S) => {
      for (let x = 0; x < a.length; x++) {
        const v = c[x], _ = a[x], O = v.el && (v.type === Z || !vt(v, _) || v.shapeFlag & 198) ? h(v.el) : p;
        C(v, _, O, null, b, g, m, S, true);
      }
    }, gt = (c, a, p, b, g) => {
      if (a !== p) {
        if (a !== V) for (const m in a) !At(m) && !(m in p) && i(c, m, a[m], null, g, b);
        for (const m in p) {
          if (At(m)) continue;
          const S = p[m], x = a[m];
          S !== x && m !== "value" && i(c, m, x, S, g, b);
        }
        "value" in p && i(c, "value", a.value, p.value, g);
      }
    }, Nt = (c, a, p, b, g, m, S, x, v) => {
      const _ = a.el = c ? c.el : l(""), O = a.anchor = c ? c.anchor : l("");
      let { patchFlag: F, dynamicChildren: D, slotScopeIds: P } = a;
      P && (x = x ? x.concat(P) : P), c == null ? (s(_, p, b), s(O, p, b), he(a.children || [], p, O, g, m, S, x, v)) : F > 0 && F & 64 && D && c.dynamicChildren && c.dynamicChildren.length === D.length ? (Oe(c.dynamicChildren, D, p, g, m, S, x), (a.key != null || g && a === g.subTree) && Jr(c, a, true)) : k(c, a, p, O, g, m, S, x, v);
    }, jt = (c, a, p, b, g, m, S, x, v) => {
      a.slotScopeIds = x, c == null ? a.shapeFlag & 512 ? g.ctx.activate(a, p, b, S, v) : dn(a, p, b, g, m, S, v) : cs(c, a, v);
    }, dn = (c, a, p, b, g, m, S) => {
      const x = c.component = Qo(c, b, g);
      if (Or(c) && (x.ctx.renderer = _t), Xo(x, false, S), x.asyncDep) {
        if (g && g.registerDep(x, re, S), !c.el) {
          const v = x.subTree = _e(He);
          U(null, v, a, p), c.placeholder = v.el;
        }
      } else re(x, c, a, p, g, m, S);
    }, cs = (c, a, p) => {
      const b = a.component = c.component;
      if (Ro(c, a, p)) if (b.asyncDep && !b.asyncResolved) {
        G(b, a, p);
        return;
      } else b.next = a, b.update();
      else a.el = c.el, b.vnode = a;
    }, re = (c, a, p, b, g, m, S) => {
      const x = () => {
        if (c.isMounted) {
          let { next: F, bu: D, u: P, parent: $, vnode: q } = c;
          {
            const Se = Gr(c);
            if (Se) {
              F && (F.el = q.el, G(c, F, S)), Se.asyncDep.then(() => {
                ae(() => {
                  c.isUnmounted || _();
                }, g);
              });
              return;
            }
          }
          let H = F, ue;
          Ze(c, false), F ? (F.el = q.el, G(c, F, S)) : F = q, D && Wt(D), (ue = F.props && F.props.onVnodeBeforeUpdate) && Fe(ue, $, F, q), Ze(c, true);
          const fe = Fs(c), Ae = c.subTree;
          c.subTree = fe, C(Ae, fe, h(Ae.el), Ht(Ae), c, g, m), F.el = fe.el, H === null && Io(c, fe.el), P && ae(P, g), (ue = F.props && F.props.onVnodeUpdated) && ae(() => Fe(ue, $, F, q), g);
        } else {
          let F;
          const { el: D, props: P } = a, { bm: $, m: q, parent: H, root: ue, type: fe } = c, Ae = ft(a);
          Ze(c, false), $ && Wt($), !Ae && (F = P && P.onVnodeBeforeMount) && Fe(F, H, a), Ze(c, true);
          {
            ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(fe);
            const Se = c.subTree = Fs(c);
            C(null, Se, p, b, c, g, m), a.el = Se.el;
          }
          if (q && ae(q, g), !Ae && (F = P && P.onVnodeMounted)) {
            const Se = a;
            ae(() => Fe(F, H, Se), g);
          }
          (a.shapeFlag & 256 || H && ft(H.vnode) && H.vnode.shapeFlag & 256) && c.a && ae(c.a, g), c.isMounted = true, a = p = b = null;
        }
      };
      c.scope.on();
      const v = c.effect = new ir(x);
      c.scope.off();
      const _ = c.update = v.run.bind(v), O = c.job = v.runIfDirty.bind(v);
      O.i = c, O.id = c.uid, v.scheduler = () => Qn(O), Ze(c, true), _();
    }, G = (c, a, p) => {
      a.component = c;
      const b = c.vnode.props;
      c.vnode = a, c.next = null, Lo(c, a.props, b, p), Ho(c, a.children, p), Ne(), bs(c), je();
    }, k = (c, a, p, b, g, m, S, x, v = false) => {
      const _ = c && c.children, O = c ? c.shapeFlag : 0, F = a.children, { patchFlag: D, shapeFlag: P } = a;
      if (D > 0) {
        if (D & 128) {
          Bt(_, F, p, b, g, m, S, x, v);
          return;
        } else if (D & 256) {
          Ge(_, F, p, b, g, m, S, x, v);
          return;
        }
      }
      P & 8 ? (O & 16 && mt(_, g, m), F !== _ && f(p, F)) : O & 16 ? P & 16 ? Bt(_, F, p, b, g, m, S, x, v) : mt(_, g, m, true) : (O & 8 && f(p, ""), P & 16 && he(F, p, b, g, m, S, x, v));
    }, Ge = (c, a, p, b, g, m, S, x, v) => {
      c = c || ot, a = a || ot;
      const _ = c.length, O = a.length, F = Math.min(_, O);
      let D;
      for (D = 0; D < F; D++) {
        const P = a[D] = v ? Re(a[D]) : we(a[D]);
        C(c[D], P, p, null, g, m, S, x, v);
      }
      _ > O ? mt(c, g, m, true, false, F) : he(a, p, b, g, m, S, x, v, F);
    }, Bt = (c, a, p, b, g, m, S, x, v) => {
      let _ = 0;
      const O = a.length;
      let F = c.length - 1, D = O - 1;
      for (; _ <= F && _ <= D; ) {
        const P = c[_], $ = a[_] = v ? Re(a[_]) : we(a[_]);
        if (vt(P, $)) C(P, $, p, null, g, m, S, x, v);
        else break;
        _++;
      }
      for (; _ <= F && _ <= D; ) {
        const P = c[F], $ = a[D] = v ? Re(a[D]) : we(a[D]);
        if (vt(P, $)) C(P, $, p, null, g, m, S, x, v);
        else break;
        F--, D--;
      }
      if (_ > F) {
        if (_ <= D) {
          const P = D + 1, $ = P < O ? a[P].el : b;
          for (; _ <= D; ) C(null, a[_] = v ? Re(a[_]) : we(a[_]), p, $, g, m, S, x, v), _++;
        }
      } else if (_ > D) for (; _ <= F; ) xe(c[_], g, m, true), _++;
      else {
        const P = _, $ = _, q = /* @__PURE__ */ new Map();
        for (_ = $; _ <= D; _++) {
          const pe = a[_] = v ? Re(a[_]) : we(a[_]);
          pe.key != null && q.set(pe.key, _);
        }
        let H, ue = 0;
        const fe = D - $ + 1;
        let Ae = false, Se = 0;
        const bt = new Array(fe);
        for (_ = 0; _ < fe; _++) bt[_] = 0;
        for (_ = P; _ <= F; _++) {
          const pe = c[_];
          if (ue >= fe) {
            xe(pe, g, m, true);
            continue;
          }
          let Ce;
          if (pe.key != null) Ce = q.get(pe.key);
          else for (H = $; H <= D; H++) if (bt[H - $] === 0 && vt(pe, a[H])) {
            Ce = H;
            break;
          }
          Ce === void 0 ? xe(pe, g, m, true) : (bt[Ce - $] = _ + 1, Ce >= Se ? Se = Ce : Ae = true, C(pe, a[Ce], p, null, g, m, S, x, v), ue++);
        }
        const as = Ae ? Wo(bt) : ot;
        for (H = as.length - 1, _ = fe - 1; _ >= 0; _--) {
          const pe = $ + _, Ce = a[pe], ds = a[pe + 1], hs = pe + 1 < O ? ds.el || zr(ds) : b;
          bt[_] === 0 ? C(null, Ce, p, hs, g, m, S, x, v) : Ae && (H < 0 || _ !== as[H] ? ze(Ce, p, hs, 2) : H--);
        }
      }
    }, ze = (c, a, p, b, g = null) => {
      const { el: m, type: S, transition: x, children: v, shapeFlag: _ } = c;
      if (_ & 6) {
        ze(c.component.subTree, a, p, b);
        return;
      }
      if (_ & 128) {
        c.suspense.move(a, p, b);
        return;
      }
      if (_ & 64) {
        S.move(c, a, p, _t);
        return;
      }
      if (S === Z) {
        s(m, a, p);
        for (let F = 0; F < v.length; F++) ze(v[F], a, p, b);
        s(c.anchor, a, p);
        return;
      }
      if (S === xn) {
        I(c, a, p);
        return;
      }
      if (b !== 2 && _ & 1 && x) if (b === 0) x.beforeEnter(m), s(m, a, p), ae(() => x.enter(m), g);
      else {
        const { leave: F, delayLeave: D, afterLeave: P } = x, $ = () => {
          c.ctx.isUnmounted ? r(m) : s(m, a, p);
        }, q = () => {
          m._isLeaving && m[ro](true), F(m, () => {
            $(), P && P();
          });
        };
        D ? D(m, $, q) : q();
      }
      else s(m, a, p);
    }, xe = (c, a, p, b = false, g = false) => {
      const { type: m, props: S, ref: x, children: v, dynamicChildren: _, shapeFlag: O, patchFlag: F, dirs: D, cacheIndex: P } = c;
      if (F === -2 && (g = false), x != null && (Ne(), Ft(x, null, p, c, true), je()), P != null && (a.renderCache[P] = void 0), O & 256) {
        a.ctx.deactivate(c);
        return;
      }
      const $ = O & 1 && D, q = !ft(c);
      let H;
      if (q && (H = S && S.onVnodeBeforeUnmount) && Fe(H, a, c), O & 6) oi(c.component, p, b);
      else {
        if (O & 128) {
          c.suspense.unmount(p, b);
          return;
        }
        $ && Ye(c, null, a, "beforeUnmount"), O & 64 ? c.type.remove(c, a, p, _t, b) : _ && !_.hasOnce && (m !== Z || F > 0 && F & 64) ? mt(_, a, p, false, true) : (m === Z && F & 384 || !g && O & 16) && mt(v, a, p), b && us(c);
      }
      (q && (H = S && S.onVnodeUnmounted) || $) && ae(() => {
        H && Fe(H, a, c), $ && Ye(c, null, a, "unmounted");
      }, p);
    }, us = (c) => {
      const { type: a, el: p, anchor: b, transition: g } = c;
      if (a === Z) {
        ii(p, b);
        return;
      }
      if (a === xn) {
        w(c);
        return;
      }
      const m = () => {
        r(p), g && !g.persisted && g.afterLeave && g.afterLeave();
      };
      if (c.shapeFlag & 1 && g && !g.persisted) {
        const { leave: S, delayLeave: x } = g, v = () => S(p, m);
        x ? x(c.el, m, v) : v();
      } else m();
    }, ii = (c, a) => {
      let p;
      for (; c !== a; ) p = y(c), r(c), c = p;
      r(a);
    }, oi = (c, a, p) => {
      const { bum: b, scope: g, job: m, subTree: S, um: x, m: v, a: _ } = c;
      Ts(v), Ts(_), b && Wt(b), g.stop(), m && (m.flags |= 8, xe(S, c, a, p)), x && ae(x, a), ae(() => {
        c.isUnmounted = true;
      }, a);
    }, mt = (c, a, p, b = false, g = false, m = 0) => {
      for (let S = m; S < c.length; S++) xe(c[S], a, p, b, g);
    }, Ht = (c) => {
      if (c.shapeFlag & 6) return Ht(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const a = y(c.anchor || c.el), p = a && a[no];
      return p ? y(p) : a;
    };
    let hn = false;
    const fs = (c, a, p) => {
      let b;
      c == null ? a._vnode && (xe(a._vnode, null, null, true), b = a._vnode.component) : C(a._vnode || null, c, a, null, null, null, p), a._vnode = c, hn || (hn = true, bs(b), Sr(), hn = false);
    }, _t = {
      p: C,
      um: xe,
      m: ze,
      r: us,
      mt: dn,
      mc: he,
      pc: k,
      pbc: Oe,
      n: Ht,
      o: e
    };
    return {
      render: fs,
      hydrate: void 0,
      createApp: wo(fs)
    };
  }
  function vn({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function Ze({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Vo(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Jr(e, t, n = false) {
    const s = e.children, r = t.children;
    if (M(s) && M(r)) for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Re(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Jr(o, l)), l.type === fn && (l.patchFlag === -1 && (l = r[i] = Re(l)), l.el = o.el), l.type === He && !l.el && (l.el = o.el);
    }
  }
  function Wo(e) {
    const t = e.slice(), n = [
      0
    ];
    let s, r, i, o, l;
    const u = e.length;
    for (s = 0; s < u; s++) {
      const d = e[s];
      if (d !== 0) {
        if (r = n[n.length - 1], e[r] < d) {
          t[s] = r, n.push(s);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; ) l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
        d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; ) n[i] = o, o = t[o];
    return n;
  }
  function Gr(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Gr(t);
  }
  function Ts(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  function zr(e) {
    if (e.placeholder) return e.placeholder;
    const t = e.component;
    return t ? zr(t.subTree) : null;
  }
  const Yr = (e) => e.__isSuspense;
  function ko(e, t) {
    t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Zi(e);
  }
  const Z = /* @__PURE__ */ Symbol.for("v-fgt"), fn = /* @__PURE__ */ Symbol.for("v-txt"), He = /* @__PURE__ */ Symbol.for("v-cmt"), xn = /* @__PURE__ */ Symbol.for("v-stc"), wt = [];
  let ge = null;
  function z(e = false) {
    wt.push(ge = e ? null : []);
  }
  function qo() {
    wt.pop(), ge = wt[wt.length - 1] || null;
  }
  let Pt = 1;
  function Ds(e, t = false) {
    Pt += e, e < 0 && ge && t && (ge.hasOnce = true);
  }
  function Zr(e) {
    return e.dynamicChildren = Pt > 0 ? ge || ot : null, qo(), Pt > 0 && ge && ge.push(e), e;
  }
  function oe(e, t, n, s, r, i) {
    return Zr(N(e, t, n, s, r, i, true));
  }
  function tt(e, t, n, s, r) {
    return Zr(_e(e, t, n, s, r, true));
  }
  function rs(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function vt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Qr = ({ key: e }) => e ?? null, qt = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || se(e) || R(e) ? {
    i: ne,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  function N(e, t = null, n = null, s = 0, r = null, i = e === Z ? 0 : 1, o = false, l = false) {
    const u = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Qr(t),
      ref: t && qt(t),
      scopeId: Fr,
      slotScopeIds: null,
      children: n,
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
      shapeFlag: i,
      patchFlag: s,
      dynamicProps: r,
      dynamicChildren: null,
      appContext: null,
      ctx: ne
    };
    return l ? (os(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= Y(n) ? 8 : 16), Pt > 0 && !o && ge && (u.patchFlag > 0 || i & 6) && u.patchFlag !== 32 && ge.push(u), u;
  }
  const _e = Jo;
  function Jo(e, t = null, n = null, s = 0, r = null, i = false) {
    if ((!e || e === bo) && (e = He), rs(e)) {
      const l = ht(e, t, true);
      return n && os(l, n), Pt > 0 && !i && ge && (l.shapeFlag & 6 ? ge[ge.indexOf(e)] = l : ge.push(l)), l.patchFlag = -2, l;
    }
    if (sl(e) && (e = e.__vccOpts), t) {
      t = Go(t);
      let { class: l, style: u } = t;
      l && !Y(l) && (t.class = rn(l)), W(u) && (Zn(u) && !M(u) && (u = Q({}, u)), t.style = Kn(u));
    }
    const o = Y(e) ? 1 : Yr(e) ? 128 : so(e) ? 64 : W(e) ? 4 : R(e) ? 2 : 0;
    return N(e, t, n, s, r, o, i, true);
  }
  function Go(e) {
    return e ? Zn(e) || Ur(e) ? Q({}, e) : e : null;
  }
  function ht(e, t, n = false, s = false) {
    const { props: r, ref: i, patchFlag: o, children: l, transition: u } = e, d = t ? zo(r || {}, t) : r, f = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: d,
      key: d && Qr(d),
      ref: t && t.ref ? n && i ? M(i) ? i.concat(qt(t)) : [
        i,
        qt(t)
      ] : qt(t) : i,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Z ? o === -1 ? 16 : o | 16 : o,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: u,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ht(e.ssContent),
      ssFallback: e.ssFallback && ht(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return u && s && es(f, u.clone(f)), f;
  }
  function is(e = " ", t = 0) {
    return _e(fn, null, e, t);
  }
  function Os(e = "", t = false) {
    return t ? (z(), tt(He, null, e)) : _e(He, null, e);
  }
  function we(e) {
    return e == null || typeof e == "boolean" ? _e(He) : M(e) ? _e(Z, null, e.slice()) : rs(e) ? Re(e) : _e(fn, null, String(e));
  }
  function Re(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ht(e);
  }
  function os(e, t) {
    let n = 0;
    const { shapeFlag: s } = e;
    if (t == null) t = null;
    else if (M(t)) n = 16;
    else if (typeof t == "object") if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = false), os(e, r()), r._c && (r._d = true));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ur(t) ? t._ctx = ne : r === 3 && ne && (ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else R(t) ? (t = {
      default: t,
      _ctx: ne
    }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [
      is(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function zo(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n];
      for (const r in s) if (r === "class") t.class !== s.class && (t.class = rn([
        t.class,
        s.class
      ]));
      else if (r === "style") t.style = Kn([
        t.style,
        s.style
      ]);
      else if (tn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(M(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
    }
    return t;
  }
  function Fe(e, t, n, s = null) {
    De(e, t, 7, [
      n,
      s
    ]);
  }
  const Yo = Lr();
  let Zo = 0;
  function Qo(e, t, n) {
    const s = e.type, r = (t ? t.appContext : e.appContext) || Yo, i = {
      uid: Zo++,
      vnode: e,
      type: s,
      parent: t,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new bi(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(r.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Vr(s, r),
      emitsOptions: Nr(s, r),
      emit: null,
      emitted: null,
      propsDefaults: V,
      inheritAttrs: s.inheritAttrs,
      ctx: V,
      data: V,
      props: V,
      attrs: V,
      slots: V,
      refs: V,
      setupState: V,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
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
    return i.ctx = {
      _: i
    }, i.root = t ? t.root : i, i.emit = Do.bind(null, i), e.ce && e.ce(i), i;
  }
  let ce = null;
  const Xr = () => ce || ne;
  let en, In;
  {
    const e = sn(), t = (n, s) => {
      let r;
      return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
        r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
      };
    };
    en = t("__VUE_INSTANCE_SETTERS__", (n) => ce = n), In = t("__VUE_SSR_SETTERS__", (n) => Mt = n);
  }
  const Lt = (e) => {
    const t = ce;
    return en(e), e.scope.on(), () => {
      e.scope.off(), en(t);
    };
  }, Ps = () => {
    ce && ce.scope.off(), en(null);
  };
  function ei(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Mt = false;
  function Xo(e, t = false, n = false) {
    t && In(t);
    const { props: s, children: r } = e.vnode, i = ei(e);
    $o(e, s, i, t), Bo(e, r, n || t);
    const o = i ? el(e, t) : void 0;
    return t && In(false), o;
  }
  function el(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vo);
    const { setup: s } = n;
    if (s) {
      Ne();
      const r = e.setupContext = s.length > 1 ? nl(e) : null, i = Lt(e), o = It(s, e, 0, [
        e.props,
        r
      ]), l = Zs(o);
      if (je(), i(), (l || e.sp) && !ft(e) && Dr(e), l) {
        if (o.then(Ps, Ps), t) return o.then((u) => {
          Ms(e, u);
        }).catch((u) => {
          ln(u, e, 0);
        });
        e.asyncDep = o;
      } else Ms(e, o);
    } else ti(e);
  }
  function Ms(e, t, n) {
    R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) && (e.setupState = vr(t)), ti(e);
  }
  function ti(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Te);
    {
      const r = Lt(e);
      Ne();
      try {
        xo(e);
      } finally {
        je(), r();
      }
    }
  }
  const tl = {
    get(e, t) {
      return te(e, "get", ""), e[t];
    }
  };
  function nl(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, tl),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function an(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vr(Bi(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Et) return Et[n](e);
      },
      has(t, n) {
        return n in t || n in Et;
      }
    })) : e.proxy;
  }
  function sl(e) {
    return R(e) && "__vccOpts" in e;
  }
  const ls = (e, t) => ki(e, t, Mt), rl = "3.5.29";
  let $n;
  const Rs = typeof window < "u" && window.trustedTypes;
  if (Rs) try {
    $n = Rs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  const ni = $n ? (e) => $n.createHTML(e) : (e) => e, il = "http://www.w3.org/2000/svg", ol = "http://www.w3.org/1998/Math/MathML", Me = typeof document < "u" ? document : null, Is = Me && Me.createElement("template"), ll = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const r = t === "svg" ? Me.createElementNS(il, e) : t === "mathml" ? Me.createElementNS(ol, e) : n ? Me.createElement(e, {
        is: n
      }) : Me.createElement(e);
      return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
    },
    createText: (e) => Me.createTextNode(e),
    createComment: (e) => Me.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Me.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, r, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (r && (r === i || r.nextSibling)) for (; t.insertBefore(r.cloneNode(true), n), !(r === i || !(r = r.nextSibling)); ) ;
      else {
        Is.innerHTML = ni(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
        const l = Is.content;
        if (s === "svg" || s === "mathml") {
          const u = l.firstChild;
          for (; u.firstChild; ) l.appendChild(u.firstChild);
          l.removeChild(u);
        }
        t.insertBefore(l, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  }, cl = /* @__PURE__ */ Symbol("_vtc");
  function ul(e, t, n) {
    const s = e[cl];
    s && (t = (t ? [
      t,
      ...s
    ] : [
      ...s
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  const $s = /* @__PURE__ */ Symbol("_vod"), fl = /* @__PURE__ */ Symbol("_vsh"), al = /* @__PURE__ */ Symbol(""), dl = /(?:^|;)\s*display\s*:/;
  function hl(e, t, n) {
    const s = e.style, r = Y(n);
    let i = false;
    if (n && !r) {
      if (t) if (Y(t)) for (const o of t.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        n[l] == null && Jt(s, l, "");
      }
      else for (const o in t) n[o] == null && Jt(s, o, "");
      for (const o in n) o === "display" && (i = true), Jt(s, o, n[o]);
    } else if (r) {
      if (t !== n) {
        const o = s[al];
        o && (n += ";" + o), s.cssText = n, i = dl.test(n);
      }
    } else t && e.removeAttribute("style");
    $s in e && (e[$s] = i ? s.display : "", e[fl] && (s.display = "none"));
  }
  const Ls = /\s*!important$/;
  function Jt(e, t, n) {
    if (M(n)) n.forEach((s) => Jt(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const s = pl(e, t);
      Ls.test(n) ? e.setProperty(nt(s), n.replace(Ls, ""), "important") : e[s] = n;
    }
  }
  const Ns = [
    "Webkit",
    "Moz",
    "ms"
  ], An = {};
  function pl(e, t) {
    const n = An[t];
    if (n) return n;
    let s = qe(t);
    if (s !== "filter" && s in e) return An[t] = s;
    s = er(s);
    for (let r = 0; r < Ns.length; r++) {
      const i = Ns[r] + s;
      if (i in e) return An[t] = i;
    }
    return t;
  }
  const js = "http://www.w3.org/1999/xlink";
  function Bs(e, t, n, s, r, i = mi(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(js, t.slice(6, t.length)) : e.setAttributeNS(js, t, n) : n == null || i && !nr(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : ye(n) ? String(n) : n);
  }
  function Hs(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? ni(n) : n);
      return;
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
      const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let o = false;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = nr(n) : n == null && l === "string" ? (n = "", o = true) : l === "number" && (n = 0, o = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    o && e.removeAttribute(r || t);
  }
  function it(e, t, n, s) {
    e.addEventListener(t, n, s);
  }
  function gl(e, t, n, s) {
    e.removeEventListener(t, n, s);
  }
  const Us = /* @__PURE__ */ Symbol("_vei");
  function ml(e, t, n, s, r = null) {
    const i = e[Us] || (e[Us] = {}), o = i[t];
    if (s && o) o.value = s;
    else {
      const [l, u] = _l(t);
      if (s) {
        const d = i[t] = vl(s, r);
        it(e, l, d, u);
      } else o && (gl(e, l, o, u), i[t] = void 0);
    }
  }
  const Ks = /(?:Once|Passive|Capture)$/;
  function _l(e) {
    let t;
    if (Ks.test(e)) {
      t = {};
      let s;
      for (; s = e.match(Ks); ) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : nt(e.slice(2)),
      t
    ];
  }
  let Sn = 0;
  const bl = Promise.resolve(), yl = () => Sn || (bl.then(() => Sn = 0), Sn = Date.now());
  function vl(e, t) {
    const n = (s) => {
      if (!s._vts) s._vts = Date.now();
      else if (s._vts <= n.attached) return;
      De(xl(s, n.value), t, 5, [
        s
      ]);
    };
    return n.value = e, n.attached = yl(), n;
  }
  function xl(e, t) {
    if (M(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((s) => (r) => !r._stopped && s && s(r));
    } else return t;
  }
  const Vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Al = (e, t, n, s, r, i) => {
    const o = r === "svg";
    t === "class" ? ul(e, s, o) : t === "style" ? hl(e, n, s) : tn(t) ? jn(t) || ml(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Sl(e, t, s, o)) ? (Hs(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bs(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Y(s)) ? Hs(e, qe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Bs(e, t, s, o));
  };
  function Sl(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && Vs(t) && R(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const r = e.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Vs(t) && Y(n) ? false : t in e;
  }
  const Ws = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return M(t) ? (n) => Wt(t, n) : t;
  };
  function Cl(e) {
    e.target.composing = true;
  }
  function ks(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  const Cn = /* @__PURE__ */ Symbol("_assign");
  function qs(e, t, n) {
    return t && (e = e.trim()), n && (e = Un(e)), e;
  }
  const si = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
      e[Cn] = Ws(r);
      const i = s || r.props && r.props.type === "number";
      it(e, t ? "change" : "input", (o) => {
        o.target.composing || e[Cn](qs(e.value, n, i));
      }), (n || i) && it(e, "change", () => {
        e.value = qs(e.value, n, i);
      }), t || (it(e, "compositionstart", Cl), it(e, "compositionend", ks), it(e, "change", ks));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
      if (e[Cn] = Ws(o), e.composing) return;
      const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Un(e.value) : e.value, u = t ?? "";
      l !== u && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === u) || (e.value = u));
    }
  }, Fl = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ], El = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => Fl.some((n) => e[`${n}Key`] && !t.includes(n))
  }, Ln = (e, t) => {
    if (!e) return e;
    const n = e._withMods || (e._withMods = {}), s = t.join(".");
    return n[s] || (n[s] = ((r, ...i) => {
      for (let o = 0; o < t.length; o++) {
        const l = El[t[o]];
        if (l && l(r, t)) return;
      }
      return e(r, ...i);
    }));
  }, wl = Q({
    patchProp: Al
  }, ll);
  let Js;
  function Tl() {
    return Js || (Js = Uo(wl));
  }
  const Dl = ((...e) => {
    const t = Tl().createApp(...e), { mount: n } = t;
    return t.mount = (s) => {
      const r = Pl(s);
      if (!r) return;
      const i = t._component;
      !R(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = n(r, false, Ol(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, t;
  });
  function Ol(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Pl(e) {
    return Y(e) ? document.querySelector(e) : e;
  }
  const Ml = [
    "onClick"
  ], Rl = $t({
    __name: "TopBar",
    emits: [
      "selected"
    ],
    setup(e) {
      const t = [
        {
          text: "Import new article",
          value: "import"
        },
        {
          text: "Imported articles",
          value: "switch"
        }
      ];
      return (n, s) => (z(), oe("div", null, [
        (z(), oe(Z, null, Qt(t, (r) => N("button", {
          onClick: (i) => n.$emit("selected", r.value),
          key: r.value
        }, Le(r.text), 9, Ml)), 64))
      ]));
    }
  }), pt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, r] of t) n[s] = r;
    return n;
  }, Il = pt(Rl, [
    [
      "__scopeId",
      "data-v-828a6968"
    ]
  ]), $l = "modulepreload", Ll = function(e) {
    return "/wikipedia-typing/" + e;
  }, Gs = {}, Nl = function(t, n, s) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
      let d = function(f) {
        return Promise.all(f.map((h) => Promise.resolve(h).then((y) => ({
          status: "fulfilled",
          value: y
        }), (y) => ({
          status: "rejected",
          reason: y
        }))));
      };
      var o = d;
      document.getElementsByTagName("link");
      const l = document.querySelector("meta[property=csp-nonce]"), u = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      r = d(n.map((f) => {
        if (f = Ll(f), f in Gs) return;
        Gs[f] = true;
        const h = f.endsWith(".css"), y = h ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${f}"]${y}`)) return;
        const A = document.createElement("link");
        if (A.rel = h ? "stylesheet" : $l, h || (A.as = "script"), A.crossOrigin = "", A.href = f, u && A.setAttribute("nonce", u), document.head.appendChild(A), h) return new Promise((T, C) => {
          A.addEventListener("load", T), A.addEventListener("error", () => C(new Error(`Unable to preload CSS for ${f}`)));
        });
      }));
    }
    function i(l) {
      const u = new Event("vite:preloadError", {
        cancelable: true
      });
      if (u.payload = l, window.dispatchEvent(u), !u.defaultPrevented) throw l;
    }
    return r.then((l) => {
      for (const u of l || []) u.status === "rejected" && i(u.reason);
      return t().catch(i);
    });
  }, jl = {}, Bl = {
    class: "modal"
  };
  function Hl(e, t) {
    return z(), oe("div", {
      class: "modal-mask",
      onClick: t[1] || (t[1] = Ln((n) => e.$emit("close"), [
        "self"
      ]))
    }, [
      N("div", Bl, [
        N("button", {
          class: "close-button",
          onClick: t[0] || (t[0] = (n) => e.$emit("close"))
        }, "\xD7"),
        yo(e.$slots, "default", {}, void 0)
      ])
    ]);
  }
  const ri = pt(jl, [
    [
      "render",
      Hl
    ],
    [
      "__scopeId",
      "data-v-c0eb46e1"
    ]
  ]), Ul = {
    style: {
      color: "red",
      "font-size": "0.8rem"
    }
  }, Kl = [
    "disabled"
  ], Vl = $t({
    __name: "ImportModal",
    emits: [
      "importText",
      "close"
    ],
    setup(e, { emit: t }) {
      const n = t, s = ke(""), r = ke(false), i = io("url-box"), o = ke(" ");
      function l(d) {
        var _a;
        const f = new URL(d).host, h = (_a = d.split("/").pop()) == null ? void 0 : _a.replace(/_/g, " ");
        return `https://${f}/w/api.php?origin=*&action=query&format=json&prop=extracts&explaintext=true&titles=${h}`;
      }
      document.addEventListener("keydown", (d) => {
        d.key === "Enter" && u();
      });
      async function u() {
        r.value = true;
        try {
          const d = l(s.value);
          fetch(d).then((f) => f.json()).then((f) => {
            const h = Object.values(f.query.pages)[0], y = h.title, A = h.extract, T = `${y}

${A}`, C = new URL(s.value).hostname.split(".")[0];
            if (console.log(C), C === "zh") {
              const B = new URL(s.value).pathname.split("/")[1] || "zh-hant";
              Nl(() => import("./zhconv-WIE1FxMX.js").then(async (m) => {
                await m.__tla;
                return m;
              }), []).then((U) => {
                const E = U.zhconv(T, B);
                E ? n("importText", E) : (console.error("Error converting text"), n("importText", T)), r.value = false;
              });
            } else n("importText", T), r.value = false;
          }).catch((f) => {
            console.error("Error fetching data:", f), o.value = "Failed to fetch data from the URL", r.value = false;
          });
        } catch (d) {
          console.error(d), o.value = "Invalid URL", r.value = false;
        }
      }
      return ts(() => {
        var _a;
        (_a = i == null ? void 0 : i.value) == null ? void 0 : _a.focus();
      }), (d, f) => (z(), tt(ri, {
        onClose: f[1] || (f[1] = (h) => d.$emit("close"))
      }, {
        default: Xn(() => [
          f[2] || (f[2] = is(" Paste a wikipedia article URL: ", -1)),
          Er(N("input", {
            "onUpdate:modelValue": f[0] || (f[0] = (h) => s.value = h),
            ref: "url-box",
            placeholder: "Example: https://en.wikipedia.org/wiki/Laid-Back_Camp"
          }, null, 512), [
            [
              si,
              s.value
            ]
          ]),
          N("span", Ul, Le(o.value), 1),
          N("button", {
            onClick: u,
            disabled: r.value
          }, Le(r.value ? "Loading..." : "Submit"), 9, Kl)
        ]),
        _: 1
      }));
    }
  }), Wl = pt(Vl, [
    [
      "__scopeId",
      "data-v-185121b6"
    ]
  ]), kl = {
    key: 0
  }, ql = {
    key: 1
  }, Jl = {
    class: "actions-cell"
  }, Gl = [
    "onClick"
  ], zl = [
    "onClick"
  ], Yl = $t({
    __name: "SwitchModal",
    props: {
      articles: {}
    },
    emits: [
      "selectArticle",
      "close",
      "deleteArticle"
    ],
    setup(e, { emit: t }) {
      const n = (s) => {
        if (!s.typedData || s.typedData.length === 0) return 0;
        const r = s.parsedData.reduce((o, l) => o + l.length, 0), i = s.typedData.reduce((o, l) => o + l.length, 0);
        return Math.round(i / r * 100);
      };
      return (s, r) => (z(), tt(ri, {
        onClose: r[0] || (r[0] = (i) => s.$emit("close"))
      }, {
        default: Xn(() => [
          r[2] || (r[2] = is(" Select an imported article: ", -1)),
          N("table", null, [
            r[1] || (r[1] = N("thead", null, [
              N("tr", null, [
                N("th", null, "Title"),
                N("th", null, "Creation Date"),
                N("th", null, "Progress"),
                N("th", null, "Actions")
              ])
            ], -1)),
            N("tbody", null, [
              (z(true), oe(Z, null, Qt(e.articles, (i, o) => (z(), oe("tr", {
                key: o
              }, [
                N("td", null, Le(i.title), 1),
                N("td", null, [
                  i.creationDate ? (z(), oe("div", kl, Le(i.creationDate.toLocaleDateString()), 1)) : (z(), oe("div", ql, " N/A "))
                ]),
                N("td", null, Le(n(i)) + "%", 1),
                N("td", Jl, [
                  N("button", {
                    onClick: Ln((l) => s.$emit("selectArticle", o), [
                      "stop"
                    ])
                  }, "Select", 8, Gl),
                  N("button", {
                    onClick: Ln((l) => s.$emit("deleteArticle", o), [
                      "stop"
                    ])
                  }, "Delete", 8, zl)
                ])
              ]))), 128))
            ])
          ])
        ]),
        _: 1
      }));
    }
  }), Zl = pt(Yl, [
    [
      "__scopeId",
      "data-v-77b4bb2f"
    ]
  ]), Ql = {
    key: 0
  }, Xl = {
    class: "text-display"
  }, ec = {
    class: "input-container"
  }, tc = [
    "onUpdate:modelValue",
    "onKeydown"
  ], nc = {
    key: 1
  }, sc = $t({
    __name: "TypingTab",
    props: {
      parsedData: {},
      typedData: {}
    },
    emits: [
      "updateTypedData"
    ],
    setup(e, { emit: t }) {
      const n = e, s = t, r = ls(() => n.parsedData.length > 0), i = ke([]), o = ke([]), l = /\s/, u = (h) => l.test(h), d = (h, y, A) => {
        const T = i.value[h];
        return !T || y >= T.length ? "" : T[y] === A ? "correct" : "incorrect";
      }, f = (h, y) => {
        var _a, _b, _c, _d, _e2;
        const A = ((_a = n.parsedData[y]) == null ? void 0 : _a.length) ?? 0, T = ((_b = i.value[y]) == null ? void 0 : _b.length) ?? 0;
        if (h.key.length === 1 && T >= A) {
          h.preventDefault();
          const C = y + 1;
          C < o.value.length && ((_c = o.value[C]) == null ? void 0 : _c.focus());
          return;
        }
        if (h.key === "Enter") {
          h.preventDefault();
          const C = y + 1;
          C < o.value.length && ((_d = o.value[C]) == null ? void 0 : _d.focus());
        } else if (h.key === "Backspace" && i.value[y] === "") {
          h.preventDefault();
          const C = y - 1;
          C >= 0 && ((_e2 = o.value[C]) == null ? void 0 : _e2.focus());
        }
      };
      return ut(i, (h) => {
        JSON.stringify(h) !== JSON.stringify(n.typedData) && s("updateTypedData", h);
      }, {
        deep: true
      }), ut(() => n.typedData, (h) => {
        i.value = h;
      }, {
        immediate: true
      }), (h, y) => (z(), oe("div", null, [
        r.value ? (z(), oe("div", Ql, [
          N("table", null, [
            (z(true), oe(Z, null, Qt(e.parsedData, (A, T) => (z(), oe("tr", {
              key: T
            }, [
              N("td", null, [
                N("div", Xl, [
                  (z(true), oe(Z, null, Qt(A, (C, B) => (z(), oe("span", {
                    key: B,
                    class: rn({
                      correct: d(T, B, C) === "correct",
                      incorrect: d(T, B, C) === "incorrect",
                      "space-incorrect": u(C) && d(T, B, C) === "incorrect"
                    })
                  }, Le(C), 3))), 128))
                ]),
                N("div", ec, [
                  Er(N("input", {
                    type: "text",
                    "onUpdate:modelValue": (C) => i.value[T] = C,
                    ref_for: true,
                    ref_key: "inputRefs",
                    ref: o,
                    onKeydown: (C) => f(C, T)
                  }, null, 40, tc), [
                    [
                      si,
                      i.value[T]
                    ]
                  ])
                ])
              ])
            ]))), 128))
          ])
        ])) : (z(), oe("div", nc, " Import a wikipedia article or choose an existing article to start typing! "))
      ]));
    }
  }), rc = pt(sc, [
    [
      "__scopeId",
      "data-v-4d6586cf"
    ]
  ]), ic = {
    class: "article-info"
  }, oc = 80, lc = $t({
    __name: "App",
    setup(e) {
      const t = ke([]), n = ke(-1), s = ke("");
      function r(E) {
        s.value = E;
      }
      function i() {
        s.value = "";
      }
      function o(E) {
        const I = E, w = y(I), ee = {
          title: E.split(`
`)[0] || "N/A",
          creationDate: /* @__PURE__ */ new Date(),
          rawText: I,
          parsedData: w,
          typedData: w.map((he) => "")
        };
        t.value.push(ee), n.value = t.value.length - 1, i();
      }
      const l = /\n+/g, u = /\s+/g, d = /^==+(.+?)==+$/g, f = /[^\x00-\xff]/, h = /[^a-zA-Z0-9!-#%-\x2A,-/:;\x3F@\x5B-\x5D_\x7B}\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
      function y(E) {
        const I = E.replace(l, `
`).split(`
`).map((K) => K.trim().replace(u, " ").replace(d, "$1").trim()).filter((K) => K.length > 0), w = [];
        for (const K of I) {
          let X = "", ee = 0;
          for (const he of K) {
            const Je = f.test(he) ? 1.8 : 1, Oe = h.test(he);
            ee + Je > oc && Oe && (w.push(X.trimEnd()), X = "", ee = 0), ee += Je, X += he;
          }
          X.length > 0 && w.push(X.trimEnd());
        }
        return w.map((K) => K.trim().split(""));
      }
      function A() {
        return {
          title: "N/A",
          creationDate: void 0,
          rawText: "",
          parsedData: [],
          typedData: []
        };
      }
      const T = ls(() => {
        const E = t.value[n.value];
        return E || A();
      });
      function C(E) {
        n.value = E, i();
      }
      function B(E) {
        if (E < 0 || E >= t.value.length) return;
        const I = t.value[E];
        if (!I) return;
        const w = I.title;
        confirm(`Are you sure you want to delete the article "${w}"? This action cannot be undone.`) && (t.value.splice(E, 1), n.value === E ? n.value = -1 : n.value > E && n.value--);
      }
      const U = (E) => {
        T.value.typedData = JSON.parse(JSON.stringify(E));
      };
      return ts(() => {
        console.log("App mounted");
        const E = localStorage.getItem("articles");
        if (E) {
          const I = JSON.parse(E);
          I.forEach((w) => {
            w.creationDate && (w.creationDate = new Date(w.creationDate));
          }), t.value = I;
        }
      }), ut(t, (E) => {
        console.log("Articles updated:", E), localStorage.setItem("articles", JSON.stringify(E));
      }, {
        deep: true
      }), (E, I) => (z(), oe(Z, null, [
        I[0] || (I[0] = N("header", null, " Wikipedia Typing ", -1)),
        N("main", null, [
          _e(Il, {
            onSelected: r,
            class: "top-bar"
          }),
          s.value == "import" ? (z(), tt(Wl, {
            key: 0,
            onImportText: o,
            onClose: i
          })) : Os("", true),
          s.value == "switch" ? (z(), tt(Zl, {
            key: 1,
            articles: t.value,
            onSelectArticle: C,
            onDeleteArticle: B,
            onClose: i
          }, null, 8, [
            "articles"
          ])) : Os("", true),
          N("div", ic, " Current Article: " + Le(T.value.title), 1),
          _e(rc, {
            "parsed-data": T.value.parsedData,
            "typed-data": T.value.typedData,
            onUpdateTypedData: U,
            class: "typing-tab"
          }, null, 8, [
            "parsed-data",
            "typed-data"
          ])
        ])
      ], 64));
    }
  }), cc = pt(lc, [
    [
      "__scopeId",
      "data-v-e7b8a960"
    ]
  ]);
  Dl(cc).mount("#app");
})();
