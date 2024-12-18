(function () {

  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) d(e);
  new MutationObserver((e) => {
    for (const i of e)
      if (i.type === "childList")
        for (const r of i.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && d(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const i = {};
    return (
      e.integrity && (i.integrity = e.integrity),
      e.referrerPolicy && (i.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function d(e) {
    if (e.ep) return;
    e.ep = !0;
    const i = n(e);
    fetch(e.href, i);
  }
})();
const l = [
    { date: "01.12.2024", img: "/img/calendar/box.webp" },
    { date: "02.12.2024", img: "/img/calendar/cup.webp" },
    { date: "03.12.2024", img: "/img/calendar/box.webp" },
    { date: "04.12.2024", img: "/img/calendar/coins.webp" },
    { date: "05.12.2024", img: "/img/calendar/cup.webp" },
    { date: "06.12.2024", img: "/img/calendar/box.webp" },
    { date: "07.12.2024", img: "/img/calendar/box.webp" },
    { date: "08.12.2024", img: "/img/calendar/box.webp" },
    { date: "09.12.2024", img: "/img/calendar/box.webp" },
    { date: "10.12.2024", img: "/img/calendar/box.webp" },
    { date: "11.12.2024", img: "/img/calendar/box.webp" },
    { date: "12.12.2024", img: "/img/calendar/box.webp" },
    { date: "13.12.2024", img: "/img/calendar/box.webp" },
    { date: "14.12.2024", img: "/img/calendar/box.webp" },
    { date: "15.12.2024", img: "/img/calendar/box.webp" },
    { date: "16.12.2024", img: "/img/calendar/box.webp" },
    { date: "17.12.2024", img: "/img/calendar/box.webp" },
    { date: "18.12.2024", img: "/img/calendar/box.webp" },
    { date: "19.12.2024", img: "/img/calendar/box.webp" },
    { date: "20.12.2024", img: "/img/calendar/box.webp" },
    { date: "21.12.2024", img: "/img/calendar/box.webp" },
    { date: "22.12.2024", img: "/img/calendar/box.webp" },
    { date: "23.12.2024", img: "/img/calendar/box.webp" },
    { date: "24.12.2024", img: "/img/calendar/box.webp" },
    { date: "25.12.2024", img: "/img/calendar/box.webp" },
    { date: "26.12.2024", img: "/img/calendar/box.webp" },
    { date: "27.12.2024", img: "/img/calendar/box.webp" },
    { date: "28.12.2024", img: "/img/calendar/box.webp" },
    { date: "29.12.2024", img: "/img/calendar/box.webp" },
    { date: "30.12.2024", img: "/img/calendar/box.webp" },
    { date: "31.12.2024", img: "/img/calendar/box.webp" },
  ],
  g = new Date(),
  o = g.toLocaleDateString("en-GB").replace(/\//g, "."),
  m = document.querySelector(".calendar__items");
l.forEach((a) => {
  let t = "locked";
  a.date === o
    ? (t = "active")
    : new Date(a.date.split(".").reverse().join("-")) < g && (t = "completed");
  const n = a.date.split(".")[0],
    d = `
      <div class="calendar__item ${t}" data-date="${a.date}">
        <div class="calendar__item-bg--lock">
          <img src="./img/calendar/icelock.webp" alt="lock">
        </div>
        <div class="calendar__item-bg">
          <img src="./img/calendar/ice.webp" alt="ice">
        </div>
  
        <div class="calendar__item-status">${
          t === "locked" ? "Locked" : t.charAt(0).toUpperCase() + t.slice(1)
        }</div>
        <div class="calendar__item-gift">
          <img src=".${a.img}" alt="gift">
        </div>
        <div class="calendar__item-day">${n}/</div>
        <a href="https://million.ro/ro" class="calendar__item-btn" target="_blank">Open</a>
      </div>
    `;
  m.innerHTML += d;
});
let c = 0;
function s() {
  const a = document.querySelectorAll(
    ".calendar__item.completed .calendar__item-gift, .calendar__item.active .calendar__item-gift"
  );
  if (a.length === 0) return;
  a.forEach((n) => n.classList.remove("shake")),
    a[c].classList.add("shake"),
    (c = (c + 1) % a.length);
}
setInterval(s, 2e3);
