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
import Role from "./model/rolePermissionModel.js";

dotenv.config();

const port = 8000;
const host = "192.168.0.129";
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
  { role: "admin", username: "admin@gmail.com", password: "admin@123" },
];

const waiterToken = jwt.sign(
  { role: "waiter", username: " waiter@gmail.com", password: "waiter@123" },
  "secret",
  { expiresIn: "120s" }
);
const KotToken = jwt.sign(
  { role: "Kot", username: "kot@gmail.com", password: "kot@123" },
  "secret",
  { expiresIn: "120s" }
);

app.use("/api/v1", route);
app.use("/api/v1", categoryRoute);
app.use("/api/v1", printerRoute);
app.use("/api/v1", kitchenRoute);
app.use("/api/v1", arearoute);
app.use("/api/v1", tableRoute);
app.use("/api/v1", roleRoute);
app.use("/api/v1", settingRoute);
app.use("/api/v1", counterRoute);
app.use("/api/v1", currencyRoute);

connectDB();

// Helper function to convert Map to plain object or handle if it's already an object
function convertMapToObject(map) {
  // Check if the value is a Map instance
  if (map instanceof Map) {
    const result = {};
    map.forEach((value, key) => {
      result[key] = value.toObject ? value.toObject() : value; // Convert sub-documents to plain objects
    });
    return result;
  } else if (typeof map === "object") {
    // If it's already an object, return as is (no conversion needed)
    return map;
  }
  // Return empty object if map is not valid
  return {};
}



app.post("/api/v1/auth/login", (req, res) => {
  const { username, password } = req.body;

  const users = [
    { role: "Admin", username: "admin@gmail.com", password: "admin@123" },
    { role: "waiter", username: "waiter@gmail.com", password: "waiter@123" },
    { role: "kot", username: "kot@gmail.com", password: "kot@123" },
  ];
  try {
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
      { expiresIn: "1d" }
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
});

app.get("/api/v1/permissions", (req, res) => {
  try {
    // Step 1: Extract the Bearer token from the header
    const authHeader = req.headers["authorization"];

    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        status: 401,
        message: "Authorization header missing or malformed",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1]; // Get the token part

    // Step 2: Decode the JWT token
    jwt.verify(
      token,
      process.env.JWT_SECRET || "secret",
      async (err, decoded) => {
        if (err) {
          return res.status(403).json({
            status: 403,
            message: "Invalid or expired token",
            success: false,
          });
        }

        const { role } = decoded;
        console.log("Decoded role:", role);

        const dbRole = await Role.findOne({ role_name: role }).lean();
        

         const permissions = dbRole.permissions
           ? convertMapToObject(dbRole.permissions)
           : {};
        
        
        
        console.log("Database Role:", dbRole);
        // Step 4: Respond with success if credentials are valid
        res.json({
          status: 200,
          message: "Token validated successfully",
          success: true,
          data: {
            role_name: dbRole.role_name,
            description: dbRole.description,
            permissions: permissions,
          }
        });
      }
    );
  } catch (error) {
    console.error("Error during token validation:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      success: false,
    });
  }
});

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




app.listen(port, host, () => {
  console.log(`server is running on port ${host} :${port}`);
});
