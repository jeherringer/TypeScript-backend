import { model } from "mongoose";
import { IColorDocument } from "./color.types";
import ColorSchema from "./color.schema";
export const ColorModel = model<IColorDocument>("color", ColorSchema);