import { createPrinter , getPrinter , updatePrinter ,deletePrinter} from "../controllers/printerController.js";
import express, { Router } from "express"
const routes = express.Router();

routes.get("/printer", (req, res) => {
  res.send("Units route is working");
});

routes.post("/createprinter", createPrinter);
routes.get("/getprinter",getPrinter);
routes.put("/updateprinter/:id",updatePrinter);
routes.delete("/deleteprinter/:id",deletePrinter);


export default routes;

