import { createPurchase } from "../controllers/purchaseController.js";
import express from "express"

const purchaseRoute = express.Router();

purchaseRoute.post("/createpurchase", createPurchase);
// purchaseRoute.get("/getuser", getUser);
// purchaseRoute.put("/updateuser/:id", updateUser);
// purchaseRoute.delete("/deleteuser/:id", deleteuser);



export default purchaseRoute;