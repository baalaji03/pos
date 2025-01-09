import { createSupplier ,getSupplier , updateSupplier , deleteSupplier} from "../controllers/supplierController.js";

import express from "express"

const supplierRoute = express.Router();

supplierRoute
  .post("/createsupplier", createSupplier)
  .get("/getsupplier", getSupplier)
  .put("/updatesupplier/:id", updateSupplier)
  .delete("/deletesupplier/:id", deleteSupplier);



export default supplierRoute;