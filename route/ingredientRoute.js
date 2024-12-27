import {
  createIngredient,
  getIngredient,
  updateIngredient,
  deleteIngredient,
  uploadIngredient,
  getUpload
} from "../controllers/ingrediantController.js";
import multer from "multer";
import express, { Router } from "express"


const ingredientRouter = express.Router();
const upload = multer();

ingredientRouter.post("/createingredient", createIngredient);
ingredientRouter.get("/getingredient", getIngredient);
ingredientRouter.put("/updateingredient/:id", updateIngredient);
ingredientRouter.delete("/deleteingredient/:id", deleteIngredient);

ingredientRouter.post("/upload", upload.single("upload"), uploadIngredient);

ingredientRouter.get("/getupload", getUpload);



export default ingredientRouter;