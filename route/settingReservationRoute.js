import { createReservation,getreservation ,updatereservation,deletereservation} from "../controllers/settingReservationController.js";
import express from "express"

const reservationRoute = express.Router();

reservationRoute.post("/createreservation", createReservation)
reservationRoute.get("/getreservation", getreservation);
reservationRoute.get("/updatereservation/:id", updatereservation);
reservationRoute.get("/deletereservation/:id", deletereservation);



export default reservationRoute;