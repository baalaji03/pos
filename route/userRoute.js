import { createUser , getUser , updateUser ,deleteuser} from "../controllers/userController.js";
import express from "express"

const userRoute = express.Router();

userRoute.post("/createuser", createUser);
userRoute.get("/getuser",getUser)
userRoute.put("/updateuser/:id", updateUser);
userRoute.delete("/deleteuser/:id", deleteuser);



export default userRoute;