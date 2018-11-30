"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_http_proxy_1 = __importDefault(require("express-http-proxy"));
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config"));
var app = express_1.default();
app.use("/feed", express_http_proxy_1.default("http://" + config_1.default.host + ":" + config_1.default.ports.feed));
app.use("/python", express_http_proxy_1.default("http://" + config_1.default.host + ":" + config_1.default.ports.python));
console.log("It's on!");
app.listen(1800);
