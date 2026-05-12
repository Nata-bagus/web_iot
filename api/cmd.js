// /api/sensor.js
// GET  /api/sensor          → ambil data sensor terakhir (JSON)
// POST /api/sensor?distance=XX&unit=cm → simpan data dari ESP32

let lastSensor = {
  distance: null,
  unit: "cm",
  updatedAt: null,
};

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "POST" || (req.method === "GET" && req.query.distance !== undefined)) {
    const raw = req.query.distance ?? req.body?.distance;
    const distance = parseFloat(raw);

    if (isNaN(distance)) {
      return res.status(400).json({ error: "Parameter 'distance' tidak valid" });
    }

    lastSensor = {
      distance,
      unit: req.query.unit ?? "cm",
      updatedAt: new Date().toISOString(),
    };

    return res.status(200).json({ ok: true, saved: lastSensor });
  }

  // GET biasa → kembalikan data terakhir
  res.status(200).json(lastSensor);
}
