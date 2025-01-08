import { getslowStock } from "../controllers/slowStockController.js";

import express from "express"

const slowStockRoute = express.Router();

slowStockRoute.get("/getslowstock", getslowStock);




export default slowStockRoute;