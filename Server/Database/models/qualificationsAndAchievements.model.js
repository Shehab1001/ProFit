import { Schema, model } from "mongoose";

const QualificationAndAchievementSchema = new Schema({
  photo: {
    type: String,
    required: [
      function () {
        return this.status !== "incomplete";
      },
      "Photo is required for qualifications and achievements.",
    ],
  },
  trainer: {
    type: Schema.Types.ObjectId,
    ref: "Trainer",
  },
});

export const QualificationAndAchievementModel = model(
  "QualificationAndAchievement",
  QualificationAndAchievementSchema
);
