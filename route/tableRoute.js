import { tablecreate ,tableget,tableupdate , tabledelete} from "../controllers/tableController.js";
import express from "express"

const tableRoute = express.Router();

tableRoute.post("/tablecreate", tablecreate);
tableRoute.get("/tableget", tableget);
tableRoute.put("/tableupdate/:id", tableupdate);
tableRoute.delete("/tabledelete/:id", tabledelete);



export default tableRoute;
