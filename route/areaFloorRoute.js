import { areaFloorCreate, areaFloorget , areaFloorupdate , areaFloordelete} from "../controllers/areaFloorController.js";
import express from "express"

const arearoute = express.Router();

arearoute.post("/areafloorcreate", areaFloorCreate);
arearoute.get("/areafloorget", areaFloorget);
arearoute.put("/areafloorupdate/:id", areaFloorupdate);
arearoute.delete("/areafloordelete/:id", areaFloordelete);



export default arearoute;