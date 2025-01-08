import { createAdjustStock , getAdjustStock , updateAdjustStock , deleteAdjustStock} from "../controllers/adjustStockController.js";
import express from "express"

const adjustStockRoute = express.Router();

adjustStockRoute
  .post("/createadjuststock", createAdjustStock)
  .get("/getadjuststock", getAdjustStock)
  .put("/updateadjuststock/:id", updateAdjustStock)
  .delete("/deleteadjuststock/:id", deleteAdjustStock);



export default adjustStockRoute;