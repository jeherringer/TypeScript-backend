import { Schema } from "mongoose";
import { setLastUpdated, sameHue, getColorData } from "./color.methods";
const ColorSchema = new Schema({
  _id: Number,
  colorName: String,
  colorHue: String,
  colorGroup: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  },
  lastUpdated: {
    type: Date,
    default: new Date()
  }
});

ColorSchema.methods.setLastUpdated = setLastUpdated;
ColorSchema.methods.sameHue = sameHue;
ColorSchema.methods.getColorData = getColorData;

export default ColorSchema;