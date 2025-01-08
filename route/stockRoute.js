
import express from "express"
import { createStock , getStock ,updateStock ,deleteStock} from "../controllers/stockController.js";

const stockRoute = express.Router();

stockRoute
  .post("/createstock", createStock)
  .get("/getstock", getStock)
  .put("/updatestock/:id", updateStock)
  .delete("/deleteStock/:id",deleteStock );



export default stockRoute;
