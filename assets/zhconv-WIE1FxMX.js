let K, Q, ee, ne, te, _e, ie, re, oe, ce;
let __tla = (async () => {
  const M = "/wikipedia-typing/assets/zhconv_bg-CyRV_uRZ.wasm", S = async (e = {}, n) => {
    let _;
    if (n.startsWith("data:")) {
      const i = n.replace(/^data:.*?base64,/, "");
      let r;
      if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(i, "base64");
      else if (typeof atob == "function") {
        const o = atob(i);
        r = new Uint8Array(o.length);
        for (let c = 0; c < o.length; c++) r[c] = o.charCodeAt(c);
      } else throw new Error("Cannot decode base64-encoded data URL");
      _ = await WebAssembly.instantiate(r, e);
    } else {
      const i = await fetch(n), r = i.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) _ = await WebAssembly.instantiateStreaming(i, e);
      else {
        const o = await i.arrayBuffer();
        _ = await WebAssembly.instantiate(o, e);
      }
    }
    return _.instance.exports;
  };
  K = function() {
    const e = t.get_build_timestamp();
    let n;
    return e[0] !== 0 && (n = d(e[0], e[1]).slice(), t.__wbindgen_free(e[0], e[1] * 1, 1)), n;
  };
  Q = function() {
    const e = t.get_commit();
    let n;
    return e[0] !== 0 && (n = d(e[0], e[1]).slice(), t.__wbindgen_free(e[0], e[1] * 1, 1)), n;
  };
  ee = function() {
    const e = t.get_enabled_target_variants();
    let n;
    return e[0] !== 0 && (n = d(e[0], e[1]).slice(), t.__wbindgen_free(e[0], e[1] * 1, 1)), n;
  };
  ne = function() {
    const e = t.get_mediawiki_commit();
    let n;
    return e[0] !== 0 && (n = d(e[0], e[1]).slice(), t.__wbindgen_free(e[0], e[1] * 1, 1)), n;
  };
  te = function() {
    const e = t.get_opencc_commit();
    let n;
    return e[0] !== 0 && (n = d(e[0], e[1]).slice(), t.__wbindgen_free(e[0], e[1] * 1, 1)), n;
  };
  _e = function(e) {
    let n, _;
    try {
      const i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = f, o = t.infer_variant(i, r);
      return n = o[0], _ = o[1], d(o[0], o[1]);
    } finally {
      t.__wbindgen_free(n, _, 1);
    }
  };
  ie = function(e) {
    let n, _;
    try {
      const i = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), r = f, o = t.infer_variant_confidence(i, r);
      return n = o[0], _ = o[1], d(o[0], o[1]);
    } finally {
      t.__wbindgen_free(n, _, 1);
    }
  };
  re = function(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = f;
    return t.is_hans(n, _) !== 0;
  };
  oe = function(e) {
    const n = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), _ = f;
    return t.is_hans_confidence(n, _);
  };
  ce = function(e, n, _, i) {
    let r, o;
    try {
      const b = l(e, t.__wbindgen_malloc, t.__wbindgen_realloc), T = f, $ = l(n, t.__wbindgen_malloc, t.__wbindgen_realloc), k = f;
      var c = A(i) ? 0 : l(i, t.__wbindgen_malloc, t.__wbindgen_realloc), s = f;
      const m = t.zhconv(b, T, $, k, A(_) ? 16777215 : _ ? 1 : 0, c, s);
      return r = m[0], o = m[1], d(m[0], m[1]);
    } finally {
      t.__wbindgen_free(r, o, 1);
    }
  };
  function W(e, n) {
    let _, i;
    try {
      _ = e, i = n, console.error(d(e, n));
    } finally {
      t.__wbindgen_free(_, i, 1);
    }
  }
  function D() {
    return new Error();
  }
  function E(e, n) {
    const _ = n.stack, i = l(_, t.__wbindgen_malloc, t.__wbindgen_realloc), r = f;
    p().setInt32(e + 4, r, true), p().setInt32(e + 0, i, true);
  }
  function F() {
    const e = t.__wbindgen_externrefs, n = e.grow(4);
    e.set(0, void 0), e.set(n + 0, void 0), e.set(n + 1, null), e.set(n + 2, true), e.set(n + 3, false);
  }
  let g = null;
  function p() {
    return (g === null || g.buffer.detached === true || g.buffer.detached === void 0 && g.buffer !== t.memory.buffer) && (g = new DataView(t.memory.buffer)), g;
  }
  function d(e, n) {
    return e = e >>> 0, B(e, n);
  }
  let w = null;
  function y() {
    return (w === null || w.byteLength === 0) && (w = new Uint8Array(t.memory.buffer)), w;
  }
  function A(e) {
    return e == null;
  }
  function l(e, n, _) {
    if (_ === void 0) {
      const s = u.encode(e), b = n(s.length, 1) >>> 0;
      return y().subarray(b, b + s.length).set(s), f = s.length, b;
    }
    let i = e.length, r = n(i, 1) >>> 0;
    const o = y();
    let c = 0;
    for (; c < i; c++) {
      const s = e.charCodeAt(c);
      if (s > 127) break;
      o[r + c] = s;
    }
    if (c !== i) {
      c !== 0 && (e = e.slice(c)), r = _(r, i, i = c + e.length * 3, 1) >>> 0;
      const s = y().subarray(r + c, r + i), b = u.encodeInto(e, s);
      c += b.written, r = _(r, i, c, 1) >>> 0;
    }
    return f = c, r;
  }
  let h = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  h.decode();
  const z = 2146435072;
  let v = 0;
  function B(e, n) {
    return v += n, v >= z && (h = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), h.decode(), v = n), h.decode(y().subarray(e, e + n));
  }
  const u = new TextEncoder();
  "encodeInto" in u || (u.encodeInto = function(e, n) {
    const _ = u.encode(e);
    return n.set(_), {
      read: e.length,
      written: _.length
    };
  });
  let f = 0, t;
  function C(e) {
    t = e;
  }
  URL = globalThis.URL;
  const a = await S({
    "./zhconv_bg.js": {
      __wbg_new_8a6f238a6ece86ea: D,
      __wbg_stack_0ed75d68575b0f3c: E,
      __wbg_error_7534b8e9a36f1ab4: W,
      __wbindgen_init_externref_table: F
    }
  }, M), U = a.memory, R = a.get_build_timestamp, I = a.get_commit, L = a.get_enabled_target_variants, O = a.get_mediawiki_commit, V = a.get_opencc_commit, j = a.infer_variant, N = a.infer_variant_confidence, P = a.is_hans, X = a.is_hans_confidence, Y = a.zhconv, Z = a.__wbindgen_free, q = a.__wbindgen_malloc, G = a.__wbindgen_realloc, H = a.__wbindgen_externrefs, x = a.__wbindgen_start, J = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbindgen_externrefs: H,
    __wbindgen_free: Z,
    __wbindgen_malloc: q,
    __wbindgen_realloc: G,
    __wbindgen_start: x,
    get_build_timestamp: R,
    get_commit: I,
    get_enabled_target_variants: L,
    get_mediawiki_commit: O,
    get_opencc_commit: V,
    infer_variant: j,
    infer_variant_confidence: N,
    is_hans: P,
    is_hans_confidence: X,
    memory: U,
    zhconv: Y
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  C(J);
  x();
})();
export {
  __tla,
  K as get_build_timestamp,
  Q as get_commit,
  ee as get_enabled_target_variants,
  ne as get_mediawiki_commit,
  te as get_opencc_commit,
  _e as infer_variant,
  ie as infer_variant_confidence,
  re as is_hans,
  oe as is_hans_confidence,
  ce as zhconv
};
