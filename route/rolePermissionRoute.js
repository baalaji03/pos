import {
  createRolePermission,
  getRolePermission,
} from "../controllers/rolePermissionController.js";
import express from "express";

const roleRoute = express.Router();

roleRoute.post("/createrolepermission", createRolePermission);
roleRoute.get("/getrolepermission",getRolePermission);

export default roleRoute;
