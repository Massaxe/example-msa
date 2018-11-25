"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var axios_1 = __importDefault(require("axios"));
var router = express_1.default.Router();
router.get("/get", function (req, res) {
    if (!req.query.key) {
        res.status(500).send("Key not found as querystring variable!");
        return;
    }
    console.log(req.path);
    axios_1.default
        .get("http://localhost:1801/get?key=" + req.query.key)
        .then(function (value) {
        res.status(200).send(value.data.toString());
    })
        .catch(function (err) {
        res.status(500).send({
            status: err.response.status || null,
            data: err.response.data
        });
    });
});
router.post("/insert", function (req, res) {
    axios_1.default
        .post("http://localhost:1801/insert", req.body)
        .then(function (value) {
        res.status(200).send(value.data);
    })
        .catch(function (err) {
        res
            .status(500)
            .send({ status: err.response.status, data: err.response.data });
        console.log(err);
    });
});
exports.default = router;
