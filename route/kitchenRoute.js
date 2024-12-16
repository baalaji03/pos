import {
  createKitcken,
  getKitcken,
  updateKitcken,
  deleteKitcken,
  getKitckenById,
} from "../controllers/kitchenController.js";
import express, { Router } from "express"
const routed = express.Router();

routed.post("/createkitcken", createKitcken);
routed.get("/getkitcken", getKitcken);
routed.put("/updatekitcken/:id", updateKitcken);
routed.delete("/deletekitcken/:id", deleteKitcken);
routed.get("/getbyidkitcken/:id", getKitckenById);


export default routed;