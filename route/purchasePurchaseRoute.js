import express from "express";

import { createPurchases ,getPurchases} from "../controllers/purchasePurchaseContoller.js";
const purchasesRoute = express.Router();

purchasesRoute
    .post("/createpurchases", createPurchases)
    .get("/getPurchases", getPurchases)
//   .put("/updatewaste/:id", updateWaste)
//   .delete("/deletewaste/:id", deleteWaste);

export default purchasesRoute;
