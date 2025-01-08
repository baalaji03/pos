import { getLowStock } from "../controllers/lowStockController.js";

import express from "express"

const lowStockRoute = express.Router();

lowStockRoute.get("/getlowstock", getLowStock);
  



export default lowStockRoute;