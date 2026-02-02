let lastCmd = "O";

export default function handler(req, res) {
  const { cmd } = req.query;

  // kalau ada cmd → SET
  if (cmd === "P" || cmd === "O") {
    lastCmd = cmd;
    return res.status(200).send("OK");
  }

  // kalau tidak ada cmd → GET
  res.status(200).send(lastCmd);
}
