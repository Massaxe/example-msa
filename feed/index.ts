import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { Insert, Get } from "./src/cache";

const app = express();

app.use(bodyParser.json());

app.get("/get", (req: Request, res: Response) => {
  if (!req.query.key) {
    res.status(500).send("key missing");
    return;
  }
  Get(req.query.key, (data: string | boolean) => {
    if (data) res.send(data);
    else res.status(500).send("Key not found!");
  });
});

app.post("/insert", (req: Request, res: Response) => {
  console.log(req.body);
  if (!req.body.key) {
    res.status(500).send("key missing");
    return;
  }
  if (!req.body.data) {
    res.status(500).send("data missing");
    return;
  }
  Insert(req.body.key, req.body.data, (success: boolean) => {
    if (!success) {
      console.log("Insert failed");
      res.status(500).send("Insert failed");
    }
    res.send("Inserted!");
  });
});

console.log("It's on!");
app.listen(1801, "0.0.0.0");
