const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VehTypeSchema = new Schema({
  NM: { type: String },
  NB: { type: String },
  SP: { type: String },
  TI: { type: String },
  CO: { type: String }
});

const VehType = mongoose.model("vehtype", VehTypeSchema);
module.exports = VehType;
