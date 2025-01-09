import express from "express";

import {
  createPurchases,
  getPurchases,
  updatePurchases,
  deletePurchases,
} from "../controllers/purchasePurchaseContoller.js";
const purchasesRoute = express.Router();

purchasesRoute
    .post("/createpurchases", createPurchases)
    .get("/getpurchases", getPurchases)
  .put("/updatepurchases/:id", updatePurchases )
  .delete("/deletepurchases/:id", deletePurchases);

export default purchasesRoute;
