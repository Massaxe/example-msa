"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var feed_1 = __importDefault(require("./routes/feed"));
app.use(body_parser_1.default.json());
app.use("/feed", feed_1.default);
console.log("It's on!");
app.listen(1800);
