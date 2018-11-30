"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var client;
try {
    client = redis_1.default.createClient();
}
catch (e) {
    client = null;
}
function Insert(key, data, cb) {
    if (client) {
        client.set(key, data, function () {
            cb(true);
        });
    }
    else
        cb(false);
}
exports.Insert = Insert;
function Get(key, cb) {
    if (client) {
        client.get(key, function (err, data) {
            if (err)
                cb(false);
            else
                cb(data);
        });
    }
    else
        cb(false);
}
exports.Get = Get;
