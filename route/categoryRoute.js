import {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getcategoryById,
} from "../controllers/categoryController.js";
import express, { Router } from "express"
const categoryrouter = express.Router();

categoryrouter.post("/createcategory", createCategory);
categoryrouter.get("/getcategory", getCategory);
categoryrouter.put("/updatecategory/:id", updateCategory);
categoryrouter.delete("/deletecategory/:id", deleteCategory);
categoryrouter.get("/getbyidcategory/:id", getcategoryById);




export default categoryrouter;