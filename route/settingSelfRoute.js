import { createSelf,getSelf,updateSelf,deleteSelf } from "../controllers/settingSelfController.js";
import express from "express";

const selfRoute = express.Router();

selfRoute.post("/createself", createSelf);
selfRoute.get("/getself", getSelf);
selfRoute.put("/updateself/:id", updateSelf);
selfRoute.delete("/deleteself/:id", deleteSelf);



export default selfRoute;
