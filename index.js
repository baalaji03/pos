import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import route from "./route/unitRoute.js";
import categoryRoute from "./route/categoryRoute.js";
import printerRoute from "./route/printerRoute.js";
import kitchenRoute from "./route/kitchenRoute.js";
import arearoute from "./route/areaFloorRoute.js";
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

const token = jwt.sign(
  { id: "001", role: "admin", username: "hari bujii" },
  "secret",
  { expiresIn: "120s" }
);


app.use("/api/v1", route);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", printerRoute);
app.use("/api/v1", kitchenRoute);
app.use("/api/v1",arearoute)




connectDB();

app.post("/api/v1/auth/login", (req, res) => {
  res.status(200).json({
    status: "Login Successfully",
    statucCode: 200,
    data: {
      token: token,
    },
    error: null,
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
