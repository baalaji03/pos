import {
  createSettings,
  getsettings,
  updatesettings,
  deletesetting,
} from "../controllers/settingsController.js";
import express from "express"

const settingRoute = express.Router();

settingRoute.post("/createsetting", createSettings);
settingRoute.get("/getsetting", getsettings);
settingRoute.put("/updatesetting/:id", updatesettings);
settingRoute.delete("/deletesetting/:id", deletesetting);



export default settingRoute;