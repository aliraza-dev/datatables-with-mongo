// mongoose for mongodb schema;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PropellSchema = new Schema(
  {
    PETROL: { type: String },
    DIESEL: { type: String },
    CNG: { type: String },
    ELECTRIC: { type: String }
  }
);

const Propell = mongoose.model("propell", PropellSchema);
module.exports = Propell;
