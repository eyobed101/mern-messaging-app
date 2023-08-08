import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import dbModel from "./models/dbModel.js";
//App Config
const app = express();
const port = process.env.PORT || 9000;

const connection_url = "mongodb://localhost:27017/messaging-app";

//Middleware
app.use(Cors());
app.use(express.json());

//DB Config
const connect = async () => {
  try {
    await mongoose.connect(connection_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongo is disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongo is connected!");
});

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello Chat"));

app.post("/message/new", async (req, res) => {
  const dbMsg = new dbModel(req.body);

  console.log(dbMsg);
  try {
    const savedMsg = await dbMsg.save();
    res.status(200).json(savedMsg);
  } catch (err) {
    console.log(err);
  }
});

app.get("/message/sync", async (req, res) => {
  try {
    const GetMsg = await dbModel.find();
    res.status(200).json(GetMsg);
  } catch (err) {
    console.log(err);
  }
});
//Listener
app.listen(port, () => {
  connect();
  console.log(`Listening on localhost: ${port}`);
});
