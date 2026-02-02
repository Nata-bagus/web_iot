import { lastCmd } from "./set";

export default function handler(req, res) {
  res.status(200).send(lastCmd);
}
