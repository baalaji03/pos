import { createSupplier ,getSupplier} from "../controllers/supplierController.js";

import express from "express"

const supplierRoute = express.Router();

supplierRoute
  .post("/createsupplier", createSupplier)
  .get("/getsupplier", getSupplier)
//   .put("/updateadjuststock/:id", updateAdjustStock)
//   .delete("/deleteadjuststock/:id", deleteAdjustStock);



export default supplierRoute;