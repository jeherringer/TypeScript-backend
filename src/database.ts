import * as Mongoose from "mongoose";
import { ColorModel } from "./database/color.model";

var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://JonHerringer:Xxtgwsmztsb@helpfulhumandb.1bm9h.mongodb.net/<colorDatabase>?retryWrites=true&w=majority";

let database: Mongoose.Connection;
export const connect = () => {
  const uri = "<ENTER YOUR URI CONNECTION HERE";
  if (database) {
    return;
  }
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};

