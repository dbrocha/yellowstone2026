/* ============================================================
   Renders the page from TRIP data + live weather + NPS alerts
   ============================================================ */

const TIER_LABEL = {
  hike: "Big Hike", easy: "Easy / Baby OK", mustsee: "Must-See",
  brewery: "Beer", musthave: "Locked In"
};

/* ---------- day cards ---------- */
function renderDays() {
  const el = document.getElementById("days-list");
  el.innerHTML = TRIP.days.map(d => `
    <article class="day-card reveal" id="day-${d.num}" style="--r:${d.num % 2 ? -0.35 : 0.35}deg">
      <header class="day-card__head">
        <span class="day-card__num">${String(d.num).padStart(2, "0")}</span>
        <span class="day-card__date">${d.date}</span>
        ${d.special ? `<span class="day-card__special">${d.special}</span>` : ""}
        <h3 class="day-card__title">${d.title}</h3>
      </header>
      <p class="day-card__blurb">${d.blurb}</p>
      <div class="day-card__meta">
        <span data-ico="🛏">${d.base}</span>
        <span data-ico="🚗">${d.drive}</span>
      </div>
      <div class="day-card__options">
        ${d.options.map(o => `
          <div class="option option--${o.tier}">
            <span class="option__tag">${TIER_LABEL[o.tier] || o.tier}</span>
            <span class="option__title">${o.icon} ${o.title}</span>
            <p class="option__body">${o.body}</p>
          </div>`).join("")}
      </div>
      <footer class="day-card__foot">
        <p><span class="lbl">Rendezvous</span>${d.rendezvous}</p>
        <p><span class="lbl">Fuel &amp; supplies</span>${d.fuel}</p>
        <button class="day-card__mapbtn" onclick="flyToDay(${d.num})">→ trace day ${d.num} on the board</button>
      </footer>
    </article>`).join("");
}

/* ---------- tier key ---------- */
function renderTierKey() {
  document.getElementById("tier-key").innerHTML =
    Object.entries(TIER_LABEL).map(([k, v]) => `<span class="tier-chip tier-chip--${k}">${v}</span>`).join("");
}

/* ---------- bases ---------- */
function renderBases() {
  document.getElementById("bases-grid").innerHTML = TRIP.bases.map(b => `
    <article class="base-card reveal">
      <span class="base-card__stamp">CAMP<br>${b.id.toUpperCase()}</span>
      <h3>${b.name}</h3>
      <p class="base-card__nights">${b.nights} · ${b.weather.elev}</p>
      <p class="base-card__vibe">${b.vibe}</p>
      <h4>🍽 Eat</h4>
      <ul>${b.eat.map(x => `<li>${x}</li>`).join("")}</ul>
      <h4>🛒 Stores &amp; supplies</h4>
      <ul>${b.shop.map(x => `<li>${x}</li>`).join("")}</ul>
    </article>`).join("");
}

/* ---------- breweries ---------- */
function renderBeer() {
  document.getElementById("beer-grid").innerHTML = TRIP.breweries.map(b => `
    <div class="coaster reveal">
      <div>
        <h3>${b.name}</h3>
        <p class="town">${b.town}</p>
        <p class="desc">${b.desc}</p>
        <p class="meta">${b.when} · kids: ${b.kid}</p>
      </div>
    </div>`).join("");
}

/* ---------- logistics ---------- */
function renderLogistics() {
  document.getElementById("flights-list").innerHTML = TRIP.meta.flights.map(f =>
    `<li><span class="when">${f.date}</span><strong>${f.what}</strong>${f.detail}</li>`).join("");
  document.getElementById("dinners-list").innerHTML = TRIP.meta.dinners.map(d =>
    `<li><span class="when">${d.date}</span><strong>${d.where}</strong>${d.note}</li>`).join("");
  document.getElementById("closures-list").innerHTML = TRIP.knownClosures.map(c => `<li>${c}</li>`).join("");
}

/* ---------- live weather (Open-Meteo, no key, client-side) ---------- */
const WMO_ICON = [
  [0, "☀️"], [1, "🌤️"], [2, "⛅"], [3, "☁️"], [45, "🌫️"], [48, "🌫️"],
  [51, "🌦️"], [55, "🌧️"], [61, "🌦️"], [63, "🌧️"], [65, "🌧️"],
  [71, "🌨️"], [75, "❄️"], [77, "❄️"], [80, "🌦️"], [82, "⛈️"],
  [85, "🌨️"], [95, "⛈️"], [99, "⛈️"]
];
function wmoIcon(code) {
  let icon = "☀️";
  for (const [c, i] of WMO_ICON) { if (code >= c) icon = i; }
  return icon;
}

async function loadWeather() {
  const grid = document.getElementById("weather-grid");
  grid.innerHTML = TRIP.bases.map(b => `
    <div class="weather-card reveal" id="wx-${b.id}">
      <h3>${b.name}</h3>
      <p class="weather-card__sub">${b.weather.elev} · ${b.nights}</p>
      <div class="weather-days"><span class="err">checking the sky…</span></div>
    </div>`).join("");
  document.getElementById("weather-note").textContent = "📌 " + TRIP.weatherNote;

  const tripStart = "2026-06-20", tripEnd = "2026-06-28";
  await Promise.all(TRIP.bases.map(async b => {
    const box = document.querySelector(`#wx-${b.id} .weather-days`);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${b.weather.lat}&longitude=${b.weather.lon}` +
        `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code` +
        `&temperature_unit=fahrenheit&timezone=America%2FDenver&forecast_days=7`;
      const r = await fetch(url);
      if (!r.ok) throw new Error(r.status);
      const j = await r.json();
      const d = j.daily;
      box.innerHTML = d.time.map((t, i) => {
        const inTrip = t >= tripStart && t <= tripEnd;
        const day = new Date(t + "T12:00:00").toLocaleDateString("en-US", { weekday: "short" });
        return `<div class="weather-day ${inTrip ? "weather-day--trip" : ""}" title="${t}">
          <div class="d">${day}</div>
          <div class="i">${wmoIcon(d.weather_code[i])}</div>
          <div class="hi">${Math.round(d.temperature_2m_max[i])}°</div>
          <div class="lo">${Math.round(d.temperature_2m_min[i])}°</div>
          <div class="p">${d.precipitation_probability_max[i] ?? 0}%</div>
        </div>`;
      }).join("");
    } catch (e) {
      box.innerHTML = `<span class="err">weather machine napping — try a refresh</span>`;
    }
  }));
}

/* ---------- NPS alerts (from data/alerts.json, refreshed daily by GitHub Action) ---------- */
async function loadAlerts() {
  const board = document.getElementById("alerts-board");
  try {
    const r = await fetch("data/alerts.json", { cache: "no-store" });
    if (!r.ok) throw new Error(r.status);
    const data = await r.json();
    const alerts = (data.alerts || []).slice(0, 14);
    const updated = data.updated ? new Date(data.updated).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : null;
    if (!alerts.length) {
      board.innerHTML = `<p class="alerts-empty">🎉 No active alerts from the NPS right now${updated ? ` (checked ${updated})` : ""}. The parks are behaving.</p>`;
      return;
    }
    board.innerHTML = alerts.map(a => {
      const kind = /closure/i.test(a.category) ? "closure" : (/danger|caution/i.test(a.category) ? "" : "info");
      return `<div class="alert-note alert-note--${kind} reveal">
        <span class="park">${a.park} · ${a.category}</span>
        <h4>${a.title}</h4>
        <p>${a.description || ""} ${a.url ? `<a href="${a.url}" target="_blank" rel="noopener">more ↗</a>` : ""}</p>
      </div>`;
    }).join("") + (updated ? `<p class="section-sub" style="margin:0">last fetched ${updated}</p>` : "");
  } catch (e) {
    board.innerHTML = `<p class="alerts-empty">📡 Live alerts not wired up yet — use the official links below for closures &amp; conditions. (Known biggies: Biscuit Basin is closed.)</p>`;
  }
}

/* ---------- scroll reveal ---------- */
function setupReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(n => io.observe(n));
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderDays();
  renderTierKey();
  renderBases();
  renderBeer();
  renderLogistics();
  initMap();
  loadWeather();
  loadAlerts();
  setupReveal();
});
