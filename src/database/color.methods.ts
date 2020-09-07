import { Document } from "mongoose";
import { IColorDocument } from "./color.types";
export async function setLastUpdated(this: IColorDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
export async function sameHue(this: IColorDocument): Promise<Document[]> {
  return this.model("color").find({ colorHue: this.colorHue });
}

export async function getColorData(this: IColorDocument): Promise<Document[]> {
  return this.model("color").find({});
}