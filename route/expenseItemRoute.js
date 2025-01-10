import { createExpenseItem ,getExpenseItem , updateExpenseItem , deleteExpenseItem} from "../controllers/expenseItemController.js";
import express from "express"

const expenseItemRoute = express.Router();

expenseItemRoute
  .post("/createexpenseitem", createExpenseItem)
  .get("/getexpenseitem", getExpenseItem)
  .put("/updateexpenseitem/:id", updateExpenseItem)
  .delete("/deleteexpenseitem/:id", deleteExpenseItem);



export default expenseItemRoute;