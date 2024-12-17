import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import route from "./route/unitRoute.js";
import categoryRoute from "./route/categoryRoute.js";
import printerRoute from "./route/printerRoute.js";
import kitchenRoute from "./route/kitchenRoute.js";
import arearoute from "./route/areaFloorRoute.js";
import tableRoute from "./route/tableRoute.js";
import roleRoute from "./route/rolePermissionRoute.js";
import settingRoute from "./route/settingsRoute.js";
import counterRoute from "./route/settingCounterRoute.js";
import currencyRoute from "./route/settingCurrencyRoute.js";
import dotenv from "dotenv";
import connectDB from "./database/config.js";

dotenv.config();

const port = 8000;
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Token = jwt.sign(
  { role: "admin", username: "hari", password: "admin@123" },
  "secret",
  { expiresIn: "120s" }
);

const users = [
  { role: "admin", username: "admin@gmail.com", password: "admin@123" }
];
  

const waiterToken = jwt.sign(
  { role: "waiter", username: " waiter@gmail.com",password:"waiter@123" },
  "secret",
  { expiresIn: "120s" }
);
const KotToken = jwt.sign(
  { role: "Kot", username: "kot@gmail.com",password:"kot@123" },
  "secret",
  { expiresIn: "120s" }
);


app.use("/api/v1", route);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", printerRoute);
app.use("/api/v1", kitchenRoute);
app.use("/api/v1",arearoute)
app.use("/api/v1", tableRoute);
app.use("/api/v1", roleRoute)
app.use("/api/v1", settingRoute);
app.use("/api/v1", counterRoute);
app.use("/api/v1", currencyRoute);




connectDB();

app.post("/api/v1/auth/login", (req, res) => {
  const { username, password } = req.body;
  
const users = [
  { role: "admin", username: "admin@gmail.com", password: "admin@123" },
  { role: "waiter", username: "waiter@gmail.com", password: "waiter@123" },
  { role:"kot" , username:"kot@gmail.com",password:"kot@123"}
];
try{
 const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return res.status(400).json({
        status: 400,
        message: "Invalid username or password",
        success: false,
      });
    }

    // Generate JWT token for the valid user
    const token = jwt.sign(
      { role: user.role, username: user.username },
      process.env.JWT_SECRET || "secret", // Use a secure JWT secret from environment
      { expiresIn: "120s" }
    );

    // Return the response
    res.json({
      status: 200,
      message: "Login Successfully",
      statusCode: 200,
      data: {
        token,
      },
      error: null,
      success: true,
    });
  } catch (error) {
    console.log(error);
    
  }


})


// app.post("/api/v1/auth/login", (req, res) => {
//   res.status(200).json({
//     status: "Login Successfully",
//     statucCode: 200,
//     data: {
//       token: Token,
//     },
//     error: null,
//     success: true,
//   });
// });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
