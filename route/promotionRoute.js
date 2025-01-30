

import { createPromotion , getPromotion ,updatePromotion ,deletePromotion} from "../controllers/promotionController.js";

import express from "express"

const promotionRoute = express.Router();

promotionRoute
  .post("/create-promotion", createPromotion)
  .get("/get-promotion", getPromotion)
  .put("/update-promotion/:id", updatePromotion)
  .delete("/delete-promotion/:id", deletePromotion);



export default promotionRoute;