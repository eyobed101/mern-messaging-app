import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
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
//Listener
app.listen(port, () => {
  connect();
  console.log(`Listening on localhost: ${port}`);
});
