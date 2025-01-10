import {
  createExpense,
  getExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.js";
import express from "express";

const expenseRoute = express.Router();

expenseRoute
  .post("/createexpense", createExpense)
  .get("/getexpense", getExpense)
  .put("/updateexpense/:id", updateExpense)
  .delete("/deleteexpense/:id", deleteExpense);

export default expenseRoute;


