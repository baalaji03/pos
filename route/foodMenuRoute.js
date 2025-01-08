import { createFoodMenu , getFoodemenu , updatefoodmenu,deleteFoodMenu} from "../controllers/foodMenuController.js";
import express from "express"

const foodMenuRoute = express.Router();

foodMenuRoute
  .post("/createfoodmenu",createFoodMenu )
  .get("/getfoodmenu", getFoodemenu)
  .put("/updatefoodmenu/:id", updatefoodmenu)
  .delete("/deletefoodmenu/:id", deleteFoodMenu);



export default foodMenuRoute;