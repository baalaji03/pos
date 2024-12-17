import { createRolePermission } from "../controllers/rolePermissionController.js";
import express from "express";

const roleRoute = express.Router();

roleRoute.post("/createrolepermission", createRolePermission);

export default roleRoute;
