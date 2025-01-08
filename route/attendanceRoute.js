import express from "express"

import { createAttendance ,getAttendance , updateAttendance , deleteAttendance} from "../controllers/attendanceController.js";
const attendanceRoute = express.Router();

attendanceRoute
    .post("/createattendance", createAttendance)
    .get("/getattendance", getAttendance)
    .put("/updateattendance/:id", updateAttendance)
    .delete("/deleteattendance/:id", deleteAttendance);



export default attendanceRoute;