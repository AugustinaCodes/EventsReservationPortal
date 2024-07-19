import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { MONGO_URI, PORT } = process.env;

mongoose
  .connect(MONGO_URI, { dbName: "EventsReservationPortal" })
  .then(() => console.log("Connected to MONGO DB"))
  .catch((err) => console.log(err));

const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
