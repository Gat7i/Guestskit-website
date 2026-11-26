#!/usr/bin/env node
// Échoue si [À CONFIRMER] ou TODO-DEMO apparaît dans du texte rendu (pas dans les commentaires).
// Les commentaires JSX {/* */} et JS // sont exclus.
const { execSync } = require("child_process");

let raw = "";
try {
  raw = execSync('grep -rn "\\[À CONFIRMER\\]\\|TODO-DEMO" src/', { encoding: "utf8" });
} catch (e) {
  if (e.status === 1) { // grep exit 1 = aucun résultat
    console.log("✓ Aucun marqueur [À CONFIRMER] ni TODO-DEMO dans src/");
    process.exit(0);
  }
  process.exit(1);
}

// Filtrer les lignes de commentaires (JSX {/* */} et JS //)
const rendered = raw
  .split("\n")
  .filter((l) => l.trim() && !/^\S+:\d+:\s*\/\//.test(l) && !/^\S+:\d+:\s*\{\/\*/.test(l));

if (rendered.length) {
  console.error("\n❌ Marqueurs interdits en texte rendu :\n");
  console.error(rendered.join("\n"));
  process.exit(1);
}
console.log("✓ Aucun marqueur [À CONFIRMER] ni TODO-DEMO dans le texte rendu.");
