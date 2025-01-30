import {
  createCustomer,
  getCustomer,
  uploadCustomer,
} from "../controllers/customerController.js";
import multer from "multer";

import express from "express";
const upload = multer();
const customerRoute = express.Router();

customerRoute
  .post("/create-customer", createCustomer)
  .post("/upload-customer", upload.single("upload"), uploadCustomer)
  .get("/get-customer", getCustomer);
//   .put("/updatesupplier/:id", updateSupplier)
//   .delete("/deletesupplier/:id", deleteSupplier);

export default customerRoute;
