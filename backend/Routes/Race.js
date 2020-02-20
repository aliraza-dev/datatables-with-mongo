// Express router for node;
const router = require("express").Router();
let model = require("../Models/Race.model");

router.route("/").get((req, res) => {
  model
    .find()
    .then(model => res.json(model))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const Race = String(req.body.race);
  const EntryStaff = String(req.body.EntryStaff);
  const LastAddEditStaff = String(req.body.LastAddEditStaff);

  const raceEdit = new model({ Race, EntryStaff, LastAddEditStaff });
  raceEdit
    .save()
    .then(() => res.json("Race added"))
    .catch(er => err.status(400).json("Error" + er));
});

router.route("/bulkAdd").post((req, res) => {
  const bulk = res.body;

  // const raceEdit = new model({ Race, EntryStaff, LastAddEditStaff });
  model
    .insertMany(req.body)
    .then(() => res.json("Race added"))
    .catch(er => err.status(400).json("Error" + er));
});
module.exports = router;
