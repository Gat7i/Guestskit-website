/**
 * Capture les écrans publics de www.guestskit.app en mobile (390×844, 3×)
 * et les compresse avec sharp (≤100 Ko) vers public/captures/.
 *
 * Prérequis (une seule fois) :
 *   cd scripts/capture && npm install && npx playwright install chromium
 *
 * Usage :
 *   node scripts/capture-app.js
 *
 * Pour re-capturer un seul écran :
 *   ONLY=c-restaurants node scripts/capture-app.js
 */

const path = require("path");
const fs = require("fs");
const { chromium } = require(path.join(__dirname, "capture/node_modules/playwright"));

const BASE = "https://www.guestskit.app";
const OUT = path.join(__dirname, "../public/captures");
// cookie_consent = "accepted" masque le CookieBanner (clé lue dans CookieBanner.tsx)
const COOKIE_CONSENT = { key: "cookie_consent", value: "accepted" };

const VIEWPORT = { width: 390, height: 844, deviceScaleFactor: 3 };
const UA =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

/** Écrans à capturer — correspondance route → fichier de sortie */
const SCREENS = [
  { name: "c-accueil",     url: "/",            scrollY: 0,   label: "Accueil" },
  { name: "c-restaurants", url: "/restaurants", scrollY: 0,   label: "Restaurants" },
  { name: "c-animation",   url: "/activities",  scrollY: 0,   label: "Activités / animations" },
  { name: "c-spectacles",  url: "/shows",       scrollY: 0,   label: "Spectacles" },
  { name: "c-plan",        url: "/map",         scrollY: 0,   label: "Plan interactif" },
  { name: "c-decouvertes", url: "/suggestions", scrollY: 0,   label: "Découvertes / suggestions" },
];

const ONLY = process.env.ONLY;
const targets = ONLY ? SCREENS.filter((s) => s.name === ONLY) : SCREENS;

async function capture() {
  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    // Try to load from website node_modules
    sharp = require(path.join(__dirname, "../node_modules/sharp"));
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: VIEWPORT.width, height: VIEWPORT.height },
    deviceScaleFactor: VIEWPORT.deviceScaleFactor,
    userAgent: UA,
    locale: "fr-FR",
  });
  const page = await context.newPage();

  // Pré-enregistre le consentement pour masquer le CookieBanner sur toutes les pages
  await page.addInitScript(
    ({ key, value }) => { localStorage.setItem(key, value); },
    COOKIE_CONSENT
  );

  const results = [];

  for (const screen of targets) {
    console.log(`→ ${screen.label} (${screen.url})`);
    try {
      await page.goto(BASE + screen.url, { waitUntil: "networkidle", timeout: 20000 });

      // Masquer la barre de navigation fixe du bas si elle couvre le contenu
      // shortcut: on la garde visible — c'est l'interface réelle (cahier des charges §4)
      if (screen.scrollY > 0) {
        await page.evaluate((y) => window.scrollTo(0, y), screen.scrollY);
        await page.waitForTimeout(300);
      }

      const tmpPath = path.join(OUT, screen.name + ".tmp.png");
      const outPath = path.join(OUT, screen.name + ".jpg");
      const beforeSize = fs.existsSync(outPath) ? fs.statSync(outPath).size : 0;

      await page.screenshot({ path: tmpPath, type: "png" });

      // Redimensionner à 780px de large (2×) : bon rendu sur les maquettes du site
      const compressed = await sharp(tmpPath)
        .resize({ width: 780 })
        .jpeg({ quality: 82, mozjpeg: true })
        .toBuffer();

      fs.writeFileSync(outPath, compressed);
      fs.unlinkSync(tmpPath);

      const kbAfter = Math.round(fs.statSync(outPath).size / 1024);
      const kbBefore = beforeSize ? Math.round(beforeSize / 1024) + " Ko → " : "";
      console.log(`   ✓ ${screen.name}.jpg — ${kbBefore}${kbAfter} Ko`);
      results.push({ name: screen.name, label: screen.label, url: screen.url, kb: kbAfter });
    } catch (err) {
      console.error(`   ✗ ${screen.name}: ${err.message.slice(0, 120)}`);
      results.push({ name: screen.name, label: screen.label, url: screen.url, kb: null, error: err.message.slice(0, 120) });
    }
  }

  await browser.close();

  console.log("\n── Résumé ──────────────────────────────────");
  for (const r of results) {
    if (r.kb !== null) console.log(`  ✓ ${r.name}.jpg — ${r.kb} Ko`);
    else console.log(`  ✗ ${r.name} — ÉCHEC: ${r.error}`);
  }
  console.log("\nCaptures dans public/captures/ — vérifiez le rendu sur le site.");
}

capture().catch((e) => { console.error(e); process.exit(1); });
