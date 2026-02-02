let lastCmd = "O"; // default OFF

export default function handler(req, res) {
  const { cmd } = req.query;

  if (cmd === "P" || cmd === "O") {
    lastCmd = cmd;
    return res.status(200).send("OK");
  }

  res.status(400).send("Invalid cmd");
}

export { lastCmd };
