
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "public/audio");
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(500).json({ error: "Unable to read audio directory" });
    } else {
      const songs = files.filter((f) => /\.(mp3|wav|ogg)$/i.test(f));
      res.status(200).json(songs);
    }
  });
}
