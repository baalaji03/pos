import { createPreMadeFood , getpreMadeFood ,updatePreFood,deletePreFood} from "../controllers/preFoodController.js";

import express from "express"

const preFoodRoute = express.Router();

preFoodRoute
  .post("/createprefood", createPreMadeFood)
  .get("/getprefood", getpreMadeFood)
  .put("/updateprefood/:id", updatePreFood)
  .delete("/deleteprefood/:id", deletePreFood);



export default preFoodRoute; 
 