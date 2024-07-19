import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalCost: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Reservation", reservationSchema);
