import proxy from "express-http-proxy";
import express, { Response, Request } from "express";

import config from "./config";

const app = express();

app.use("/feed", proxy(`http://${config.host}:${config.ports.feed}`));

app.use("/python", proxy(`http://${config.host}:${config.ports.python}`));

console.log("It's on!");
app.listen(1800);
