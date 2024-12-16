import { createRolePermissison } from "../controllers/rolePermissionController.js";
import express from "express"

const roleRoute = express.Router();

roleRoute.post("/createrolepermission", createRolePermissison);




export default roleRoute;