import express, { Response, Request } from "express";
import bodyParser from "body-parser";
const app = express();

import feed from "./routes/feed";

app.use(bodyParser.json());

app.use("/feed", feed);

console.log("It's on!");
app.listen(1800);
