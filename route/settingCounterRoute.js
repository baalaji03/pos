import {
  createCounter,
  getCounter,
  updateCounter,
  deleteCounter,
} from "../controllers/settingCounterController.js";
import express, { Router } from "express"
const counterRoute = express.Router();


counterRoute.post("/createcounter", createCounter);
counterRoute.get("/getcounter", getCounter);
counterRoute.put("/updatecounter/:id", updateCounter);
counterRoute.delete("/deletecounter/:id", deleteCounter);


export default counterRoute;