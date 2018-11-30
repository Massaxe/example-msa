"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cache_1 = require("./src/cache");
var app = express_1.default();
app.use(body_parser_1.default.json());
app.get("/get", function (req, res) {
    if (!req.query.key) {
        res.status(500).send("key missing");
        return;
    }
    cache_1.Get(req.query.key, function (data) {
        if (data)
            res.send(data);
        else
            res.status(500).send("Key not found!");
    });
});
app.post("/insert", function (req, res) {
    console.log(req.body);
    if (!req.body.key) {
        res.status(500).send("key missing");
        return;
    }
    if (!req.body.data) {
        res.status(500).send("data missing");
        return;
    }
    cache_1.Insert(req.body.key, req.body.data, function (success) {
        if (!success) {
            console.log("Insert failed");
            res.status(500).send("Insert failed");
        }
        res.send("Inserted!");
    });
});
console.log("It's on!");
app.listen(1801, "0.0.0.0");
