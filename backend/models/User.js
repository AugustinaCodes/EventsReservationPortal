import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      default: 500,
    },
    authProvider: {
      type: String,
      required: true,
    },
    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservation",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
