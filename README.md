# Yellowstone 2026 🏔️ — The Pioneers

Trip site for the Yellowstone + Grand Tetons expedition — 8 adults, 4 kids, 1 baby · June 20–28, 2026.

**Live site:** https://dbrocha.github.io/yellowstone2026/

## Editing

Plain static HTML/CSS/JS served by GitHub Pages — no build step. **All trip content lives in [`js/trip-data.js`](js/trip-data.js)**: map pins, day-by-day itinerary, restaurants/stores per base, breweries, flights and dinner reservations. Edit that one file, push, done.

## Live data

- **Weather** — fetched client-side from [Open-Meteo](https://open-meteo.com) for each home base. No key, updates on every page load.
- **Park alerts** — [`.github/workflows/alerts.yml`](.github/workflows/alerts.yml) runs daily and writes `data/alerts.json` from the NPS API. It needs a repo secret named `NPS_API_KEY`:
  1. Get a free key (instant, email only): https://www.nps.gov/subjects/developer/get-started.htm
  2. Add it: repo → Settings → Secrets and variables → Actions → New repository secret → name `NPS_API_KEY`
  3. Trigger the first run: Actions tab → "Refresh NPS park alerts" → Run workflow

  Until then, the Alerts section falls back to official NPS condition links.
