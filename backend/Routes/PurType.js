const express = require("express").Router();
const model = require("../Models/PurType.model");

express.route("/").get((req, res) => {
  model
    .find()
    .then(model => res.json(model))
    .catch(err => res.status(400).json("Err" + err));
});

express.route("/add").post((req, res) => {
  const NM = String(req.body.NM);
  const NB = String(req.body.NB);
  const SP = String(req.body.SP);
  const TI = String(req.body.TI);
  const CO = String(req.body.CO);

  const vehTypeModel = new model({ NM, NB, SP, TI, CO });
  vehTypeModel
    .save()
    .then(() => res.json("Added"))
    .catch(er => res.status(400).json("Err" + er));
});

module.exports = express;
