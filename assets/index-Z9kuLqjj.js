(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) l(t);
  new MutationObserver((t) => {
    for (const n of t)
      if (n.type === "childList")
        for (const s of n.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && l(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(t) {
    const n = {};
    return (
      t.integrity && (n.integrity = t.integrity),
      t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : t.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function l(t) {
    if (t.ep) return;
    t.ep = !0;
    const n = o(t);
    fetch(t.href, n);
  }
})();
function T(e) {
  function i(B) {
    var E = B.style.transform,
      b = E.match(/rotate\((-?\d+\.?\d*)(deg|rad)?\)/);
    if (b) {
      var y = parseFloat(b[1]),
        L = b[2];
      return L === "rad" && (y = y * (180 / Math.PI)), y;
    } else return null;
  }
  const o = document.getElementById(e.elementId),
    l = i(o);
  let t = e.arm ? e.armAngle : 0,
    n = e.arm ? e.armDuration : 0,
    s = e.beautyStop ? e.beautyStopAngle : 0,
    p = e.beautyStop ? e.beautyStopDuration : 0;
  e.arm &&
    ((o.style.transition = `transform ${n}ms cubic-bezier(.11,.58,.42,1.05)`),
    (o.style.transform = `rotate(${l - t}deg)`)),
    setTimeout(() => {
      (o.style.transition = `transform ${
        e.duration - n - p
      }ms cubic-bezier(.1,.6,.05,1)`),
        (o.style.transform = `rotate(${l + e.angle + s}deg)`);
    }, n),
    e.beautyStop &&
      setTimeout(() => {
        (o.style.transition = `transform ${p}ms ease-in-out`),
          (o.style.transform = `rotate(${l + e.angle}deg)`);
      }, e.duration - p);
}
const f = document.querySelector("#foneMusic"),
  q = document.querySelector("#winSound");
document.addEventListener("visibilitychange", function () {
  document.visibilityState === "hidden" ? f.pause() : f.paused && f.play();
});
let w = 12e3,
  F = 100,
  v = 0.6,
  k = 0.01;
function D() {
  (f.volume = v),
    setTimeout(() => {
      let e = v;
      const i = setInterval(() => {
        e < 0.9 ? ((e += k), (f.volume = e)) : clearInterval(i);
      }, F);
    }, w);
}
const A = document.querySelector("#spenSound"),
  m = document.querySelector("#speenBtn"),
  u = document.querySelector(".title"),
  S = document.querySelector(".btn"),
  I = document.querySelector(".helpBtn"),
  a = document.querySelector(".finalBg"),
  c = document.querySelector(".takeBonus"),
  O = document.querySelector(".finalHelpBtn"),
  M = document.querySelector(".win"),
  N = document.querySelector(".finalWrapper");
let r = "",
  d = [2139, 2049, 2004, 1914, 1822];
function $() {
  const e = Math.random();
  return e < 0.1
    ? d[0]
    : e < 0.2
    ? d[1]
    : e < 0.35
    ? d[2]
    : e < 0.5
    ? d[3]
    : d[4];
}
function h() {
  if (!g) {
    S.classList.remove("opacity"), D(), (g = !0);
    let e = $();
    e == 2139
      ? ((c.src = "./bonus100.png"),
        (a.src = "./finalB100.png"),
        setTimeout(() => {
          u.src = "./titleB100.png";
        }, 12500),
        (r = "BONUS100"))
      : e == 2049
      ? ((c.src = "./freebet100.png"),
        (a.src = "./finalF100.png"),
        (r = "FREEBET100"),
        setTimeout(() => {
          u.src = "./titleF100.png";
        }, 12500))
      : e == 2004
      ? ((c.src = "./bonus50.png"),
        (a.src = "./finalB50.png"),
        setTimeout(() => {
          u.src = "./titleB50.png";
        }, 12500),
        (r = "BONUS50"))
      : e == 1914
      ? ((c.src = "./freebet75.png"),
        (a.src = "./finalF75.png"),
        setTimeout(() => {
          u.src = "./titleF75.png";
        }, 12500),
        (r = "FREEBET75"))
      : e == 1822 &&
        ((c.src = "./freebet50.png"),
        (a.src = "./finalF50.png"),
        setTimeout(() => {
          u.src = "./titleF50.png";
        }, 12500),
        (r = "FREEBET50")),
      console.log(e),
      console.log(r),
      T({
        elementId: "speen",
        angle: e,
        duration: 12e3,
        arm: !0,
        armAngle: 55,
        armDuration: 500,
        beautyStop: !0,
        beautyStopAngle: 20,
        beautyStopDuration: 1300,
      }),
      setTimeout(() => {
        M.classList.add("show"), N.classList.add("final"), q.play();
      }, 13500),
      setTimeout(() => {
        A.play();
      }, 500);
  }
}
let g = !1;
m.addEventListener("click", () => {
  g ||
    (S.classList.remove("hover"),
    m.classList.remove("hover"),
    m.classList.add("click"),
    setTimeout(() => {
      m.classList.remove("click");
    }, 500)),
    h();
});
S.addEventListener("click", () => {
  h();
});
I.addEventListener("click", () => {
  window.open("https://t.me/dobromanager", "_blank");
});
O.addEventListener("click", () => {
  window.open("https://t.me/dobromanager", "_blank");
});
c.addEventListener("click", () => {
  const e = document.createElement("textarea");
  (e.value = r),
    document.body.appendChild(e),
    e.select(),
    document.execCommand("copy"),
    document.body.removeChild(e),
    console.log("Текст скопирован: " + r),
    window.open(
      "https://bkdobro.com/ref_code=0ddce62c-da89-4abb-91ff-17c41ee001a9",
      "_blank"
    );
});
