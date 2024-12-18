import { createtax,getTax,updateTax, deleteTax} from "../controllers/settingTaxController.js";
import express from "express";

const TaxRoute = express.Router();

TaxRoute.post("/createtax", createtax);
TaxRoute.get("/gettax", getTax);
TaxRoute.put("/updatetax/:id", updateTax);
TaxRoute.delete("/deletetax/:id", deleteTax);



export default TaxRoute;