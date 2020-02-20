// import framework for node;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Tell express to use these things
app.use(express.json());
app.use(cors());

const url = process.env.ATLAS_URI;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err =>
    console.log("Couldnt connect, probably server uri is incorrect")
  );

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("handshake with ATLAS successfull");
  })
  .catch(err => console.log("Neural Handshake failed"));

const RaceRouter = require("./Routes/Race");
const PropellRouter = require("./Routes/Propell");
const VehTypeRouter = require("./Routes/PurType");
app.use("/race", RaceRouter);
app.use("/PROPELL", PropellRouter);
app.use("/vehtype", VehTypeRouter);
app.listen(port, () => {
  console.log(`Server at PORT ${port}`);
});
