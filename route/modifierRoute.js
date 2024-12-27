import { createModifier , getModifier , updateModifier} from "../controllers/modifierController.js";

import express from "express"

const modifierRoute = express.Router();

modifierRoute.post("/createmodifier", createModifier);
modifierRoute.get("/getmodifier", getModifier);
modifierRoute.put("/updatemodifier/:id", updateModifier);
// modifierRoute.delete("/deleteuser/:id", deleteuser);



export default modifierRoute;
