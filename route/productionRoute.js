import express from "express"

import { createProduction , getProduction , updateProduction , deleteProduction} from "../controllers/productionController.js";

const productionRoute = express.Router();

productionRoute
  .post("/createproduction", createProduction)
  .get("/getproduction", getProduction)
  .put("/updateproduction/:id", updateProduction)
  .delete("/deleteproduction/:id", deleteProduction);



export default productionRoute;