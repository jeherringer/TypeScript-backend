import { Document, Model } from "mongoose";
export interface IColor {
    colorName: String,
    colorHue: String,
    colorGroup: String,
    dateOfEntry?: Date;
    lastUpdated?: Date;
}
export interface IColorDocument extends IColor, Document {
    setLastUpdated: (this: IColorDocument) => Promise<void>;
    sameHue: (this: IColorDocument) => Promise<Document[]>;
}
export interface IColorModel extends Model<IColorDocument> {
    findOneOrCreate: (
        this: IColorModel,
        {
          colorName,
          colorHue,
          colorGroup,
        }: { colorName: string; colorHue: string; colorGroup: string}
      ) => Promise<IColorDocument>;
}