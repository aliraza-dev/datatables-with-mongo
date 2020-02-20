// mongoose for node;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema(
  {
    Race: { type: String, required: true },
    EntryStaff: { type: String, required: false },
    LastAddEditStaff: { type: String, required: false }
  },
  { timestamps: true }
);

const Race = mongoose.model("race", RaceSchema);
module.exports = Race;
