import { createIngredient, getIngredient ,updateIngredient,deleteIngredient , getUnitById} from "../controllers/unitController.js";
import express, { Router } from "express"
const route = express.Router();


route.post("/createingredient", createIngredient);
route.get("/getingredient", getIngredient);
route.put("/updateingredient/:id",updateIngredient);
route.delete("/deleteingredient/:id", deleteIngredient);
route.get("/getingredientbyid/:id",getUnitById);

export default route;
 
