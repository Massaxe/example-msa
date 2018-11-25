import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

const router = express.Router();

router.get("/get", (req: Request, res: Response) => {
  if (!req.query.key) {
    res.status(500).send("Key not found as querystring variable!");
    return;
  }

  console.log(req.path);

  axios
    .get("http://localhost:1801/get?key=" + req.query.key)
    .then((value: AxiosResponse) => {
      res.status(200).send(value.data.toString());
    })
    .catch((err: any) => {
      res.status(500).send({
        status: err.response.status || null,
        data: err.response.data
      });
    });
});

router.post("/insert", (req: Request, res: Response) => {
  axios
    .post("http://localhost:1801/insert", req.body)
    .then((value: AxiosResponse) => {
      res.status(200).send(value.data);
    })
    .catch((err: any) => {
      res
        .status(500)
        .send({ status: err.response.status, data: err.response.data });
      console.log(err);
    });
});

export default router;
