import express from "express"

import { createWaste , getWaste , updateWaste , deleteWaste} from "../controllers/wasteController.js";

const wasteRoute = express.Router();

wasteRoute
  .post("/createwaste", createWaste)
  .get("/getwaste", getWaste)
  .put("/updatewaste/:id", updateWaste)
  .delete("/deletewaste/:id", deleteWaste);



export default wasteRoute;