/* ============================================================
   The Board — Leaflet corkboard map: pushpins, yarn, polaroids
   ============================================================ */

const PIN_STYLES = {
  hotel:   { color: "#c0392b", dark: "#7f241a", label: "Home base" },
  geyser:  { color: "#e07b28", dark: "#9c4f12", label: "Thermal stuff" },
  wildlife:{ color: "#3c7a46", dark: "#24512c", label: "Wildlife" },
  hike:    { color: "#2b5d8a", dark: "#173a59", label: "Hikes" },
  scenic:  { color: "#3e9b94", dark: "#23625d", label: "Scenic" },
  food:    { color: "#8e44ad", dark: "#5e2c73", label: "Food" },
  town:    { color: "#8e44ad", dark: "#5e2c73", label: "Town" },
  brewery: { color: "#c8941f", dark: "#8a6313", label: "Breweries" },
  airport: { color: "#5d6d7e", dark: "#36404a", label: "Airports" }
};

const MAP_STATE = { map: null, yarns: {}, markers: {}, activeDay: null };

function initMap() {
  const map = L.map("leaflet-map", { scrollWheelZoom: false });
  MAP_STATE.map = map;

  L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 16,
    attribution: "Tiles © Esri — Esri, USGS, NOAA"
  }).addTo(map);

  // pins
  const bounds = [];
  TRIP.locations.forEach(loc => {
    const style = PIN_STYLES[loc.cat] || PIN_STYLES.scenic;
    const size = loc.cat === "hotel" || loc.star ? 21 : 16;
    const icon = L.divIcon({
      className: "",
      iconSize: [size, size + 10],
      iconAnchor: [size / 2, size + 6],
      popupAnchor: [0, -size - 4],
      html: `<div class="pin ${loc.star ? "pin--star" : ""}" style="--pin-size:${size}px;--pin-color:${style.color};--pin-dark:${style.dark}">
               <span class="pin__needle"></span><span class="pin__head"></span>
             </div>`
    });
    const m = L.marker(loc.coords, { icon, title: loc.name, riseOnHover: true })
      .addTo(map)
      .bindPopup(polaroidHTML(loc, style), { className: "polaroid-popup", maxWidth: 260 });
    MAP_STATE.markers[loc.id] = m;
    bounds.push(loc.coords);
  });

  // open framed on the parks; Bozeman pins are still there when you zoom out
  const parkBounds = TRIP.locations
    .filter(l => !["bzn", "bozeman", "mapBrewing"].includes(l.id))
    .map(l => l.coords);
  map.fitBounds(parkBounds, { padding: [30, 30] });
  map.on("click", () => map.scrollWheelZoom.enable());

  drawYarn();
  buildLegend();
  buildYarnKey();
}

function polaroidHTML(loc, style) {
  const img = loc.photo
    ? `<img class="polaroid__img" src="${loc.photo}" alt="${loc.name}" loading="lazy"
         onerror="this.outerHTML='<div class=\\'polaroid__img--fallback\\'>${loc.emoji || "🏔️"}</div>'">`
    : `<div class="polaroid__img--fallback">${loc.emoji || "🏔️"}</div>`;
  return `${img}
    <div class="polaroid__name">${loc.star ? "★ " : ""}${loc.name}</div>
    <p class="polaroid__caption">${loc.caption}</p>
    <span class="polaroid__cat" style="background:${style.color}">${style.label}</span>
    ${loc.note ? `<p class="polaroid__caption" style="color:#a4452a">${loc.note}</p>` : ""}`;
}

/* --- red yarn: curved bezier between each day's stops --- */
function yarnPoints(a, b) {
  // sample a quadratic bezier with a perpendicular sag, like string pulled between two pins
  const pts = [];
  const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  // perpendicular offset, proportional to distance but capped
  const sag = Math.min(len * 0.18, 0.045);
  const cx = mx - (dy / len) * sag, cy = my + (dx / len) * sag;
  for (let t = 0; t <= 1.0001; t += 1 / 14) {
    const u = 1 - t;
    pts.push([u * u * a[0] + 2 * u * t * cx + t * t * b[0],
              u * u * a[1] + 2 * u * t * cy + t * t * b[1]]);
  }
  return pts;
}

function drawYarn() {
  const locById = Object.fromEntries(TRIP.locations.map(l => [l.id, l]));
  TRIP.days.forEach(day => {
    const stops = day.stops.map(id => locById[id]).filter(Boolean);
    if (stops.length < 2) return;
    let path = [];
    for (let i = 0; i < stops.length - 1; i++) {
      path = path.concat(yarnPoints(stops[i].coords, stops[i + 1].coords));
    }
    const line = L.polyline(path, {
      color: "#c0392b", weight: 3, opacity: 0.85,
      className: "yarn-path",
      dashArray: null, lineCap: "round"
    }).addTo(MAP_STATE.map);
    line.bindTooltip(`Day ${day.num} — ${day.title}`, { sticky: true, direction: "top" });
    MAP_STATE.yarns[day.num] = line;
  });
}

function highlightDay(num) {
  const mapEl = document.getElementById("leaflet-map");
  const all = Object.values(MAP_STATE.yarns);
  if (num === null || MAP_STATE.activeDay === num) {
    MAP_STATE.activeDay = null;
    mapEl.classList.remove("yarn-dim");
    all.forEach(l => l.getElement() && l.getElement().classList.remove("yarn-lit"));
    document.querySelectorAll(".yarn-key button").forEach(b => b.classList.remove("active"));
    return;
  }
  MAP_STATE.activeDay = num;
  mapEl.classList.add("yarn-dim");
  all.forEach(l => l.getElement() && l.getElement().classList.remove("yarn-lit"));
  const lit = MAP_STATE.yarns[num];
  if (lit) {
    const el = lit.getElement();
    if (el) el.classList.add("yarn-lit");
    MAP_STATE.map.fitBounds(lit.getBounds(), { padding: [46, 46] });
  }
  document.querySelectorAll(".yarn-key button").forEach(b =>
    b.classList.toggle("active", +b.dataset.day === num));
}

function buildLegend() {
  const used = [...new Set(TRIP.locations.map(l => l.cat))];
  const el = document.getElementById("map-legend");
  el.innerHTML = used.map(cat => {
    const s = PIN_STYLES[cat];
    return `<span><i style="--c:${s.color}"></i>${s.label}</span>`;
  }).join("");
}

function buildYarnKey() {
  const el = document.getElementById("yarn-key");
  el.innerHTML = `<button data-day="0">🧶 show all strings</button>` +
    TRIP.days.map(d => `<button data-day="${d.num}">Day ${d.num} · ${d.title}</button>`).join("");
  el.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const n = +btn.dataset.day;
    if (n === 0) { highlightDay(null); MAP_STATE.map.fitBounds(Object.values(MAP_STATE.yarns).reduce((b, l) => b.extend(l.getBounds()), L.latLngBounds([])), { padding: [36, 36] }); return; }
    highlightDay(n);
    document.getElementById("map").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function flyToDay(num) {
  highlightDay(num);
  if (MAP_STATE.activeDay === num) {
    document.getElementById("map").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
