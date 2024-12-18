import {
  createRolePermission,
  getRolePermission,
  updateRolePermission,
  deleterolepermission
} from "../controllers/rolePermissionController.js";
import express from "express";

const roleRoute = express.Router();

roleRoute.post("/createrolepermission", createRolePermission);
roleRoute.get("/getrolepermission",getRolePermission);
roleRoute.put("/updaterolepermission/:id", updateRolePermission);
roleRoute.delete("/deleterolepermission/:id", deleterolepermission);


export default roleRoute;
