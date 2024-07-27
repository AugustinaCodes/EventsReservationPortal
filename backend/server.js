import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "eventsReservationPortal" })
  .then(() => console.log("Connected to Mongo DB"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
