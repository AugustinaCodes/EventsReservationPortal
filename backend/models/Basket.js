import mongoose, { mongo } from "mongoose";

const basketSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
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
    },
  ],
  totalCost: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Basket", basketSchema);
