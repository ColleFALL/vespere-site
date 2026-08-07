// === SERVEUR EXPRESS MINIMAL ===
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Sert le dossier public/ en statique (index.html, videos/, images/)
app.use(express.static(path.join(__dirname, "public")));

// Route racine explicite
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Vespere running at http://localhost:${PORT}`);
});
