const router = require("express").Router();
let model = require("../Models/Propell.model");

router.route("/").get((req, res) => {
  model
    .find()
    .then(model => res.json(model))
    .catch(err => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const PETROL = String(req.body.PETROL);
  const DIESEL = String(req.body.DIESEL);
  const CNG = String(req.body.CNG);
  const ELECTRIC = String(req.body.ELECTRIC);

  const PropellModel = new model({ PETROL, DIESEL, CNG, ELECTRIC });
  PropellModel.save()
    .then(() => res.json("Propell"))
    .catch(er => err.status(400).json("Error" + er));
});
// router.route("/add").post((req, res) => {
//     const Race = String(req.body.race);
//     const EntryStaff = String(req.body.EntryStaff);
//     const LastAddEditStaff = String(req.body.LastAddEditStaff);

//     const raceEdit = new model({ Race, EntryStaff, LastAddEditStaff });
//     raceEdit
//       .save()
//       .then(() => res.json("Race added"))
//       .catch(er => err.status(400).json("Error" + er));
//   });
module.exports = router;
