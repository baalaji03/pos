import { createfoodMenuCategory ,deleteFoodMenuCategory,getFoodMenuCategory ,updateFoodMenuCategory} from "../controllers/foodMenuCategoryController.js";
import express from "express"

const foodMenuCategoryRoute = express.Router();

foodMenuCategoryRoute
  .post("/createfoodmenucategory", createfoodMenuCategory)
  .get("/getfoodmenucategory", getFoodMenuCategory)
  .put("/updatefoodmenucategory/:id", updateFoodMenuCategory)
  .delete("/deletefoodmenucategory/:id", deleteFoodMenuCategory);



export default foodMenuCategoryRoute;