import { createCategory , getCategory, updateCategory,deleteCategory} from "../controllers/categoryController.js";
import express, { Router } from "express"
const router = express.Router();

router.post("/createcategory", createCategory);
router.get("/getcategory", getCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);



export default router;