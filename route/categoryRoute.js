import {
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getcategoryById,
} from "../controllers/categoryController.js";
import express, { Router } from "express"
const router = express.Router();

router.post("/createcategory", createCategory);
router.get("/getcategory", getCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);
router.get("/getbyidcategory/:id", getcategoryById);




export default router;