import * as express from "express";
import { connect } from "../database";
import { ColorModel } from "../database/color.model";

const app = express();
const port = 5002;
connect();
ColorModel.find({});
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
