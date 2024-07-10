import mongoose from "mongoose";
const { Schema, model } = mongoose;

const clientTransformationSchema = new Schema(
  {
    trainerId: {
      type: Schema.ObjectId,
      ref: "Trainer",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    beforeImage: {
      type: String,
      required: [true, "beforeImage  is required"],
    },
    afterImage: {
      type: String,
      required: [true, "afterImage  is required"],
    },
  },
  { timestamps: true }
);

export const ClientTransformationModel = model(
  "ClientTransformation",
  clientTransformationSchema
);
