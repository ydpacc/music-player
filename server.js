
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// Serve static files (HTML, CSS, audio, dll) dari folder public
app.use(express.static("public"));

// Endpoint API untuk daftar lagu
app.get("/api/songs", (req, res) => {
  const audioDir = path.join(__dirname, "public/audio");
  fs.readdir(audioDir, (err, files) => {
    if (err) return res.status(500).send("Error reading directory");
    const songs = files.filter((f) =>
      /\.(mp3|wav|ogg)$/i.test(f)
    );
    res.json(songs);
  });
});

// Jalankan server di port 3000
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
