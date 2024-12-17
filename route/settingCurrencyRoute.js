import { createCurrency , getCurrency , updateCurrency , deleteCurrency} from "../controllers/settingCurrencyController.js";

import express, { Router } from "express"
const currencyRoute = express.Router();


currencyRoute.post("/createcurrency", createCurrency);
currencyRoute.get("/getcurrency", getCurrency);
currencyRoute.put("/updatecurrency/:id", updateCurrency);
currencyRoute.delete("/deletecurrency/:id", deleteCurrency);


export default currencyRoute;