import { createfoodMenuCategory ,getFoodMenuCategory } from "../controllers/foodMenuCategoryController.js";
import express from "express"

const foodMenuCategoryRoute = express.Router();

foodMenuCategoryRoute.post("/createfoodmenucategory",createfoodMenuCategory );
foodMenuCategoryRoute.get("/getfoodmenucategory", getFoodMenuCategory);
// foodMenuCategoryRoute.put("/updateuser/:id", updateUser);
// foodMenuCategoryRoute.delete("/deleteuser/:id", deleteuser);



export default foodMenuCategoryRoute;