import { createPayment,getPayment,updatePayment,deletePayment } from "../controllers/settingPaymentController.js";
import express, { Router } from "express";
const paymentRoute = express.Router();

paymentRoute.post("/createpayment", createPayment);
paymentRoute.get("/getpayment", getPayment);
paymentRoute.put("/updatepayment/:id", updatePayment);
paymentRoute.delete("/deletepayment/:id", deletePayment);

export default paymentRoute;
