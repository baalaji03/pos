import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import { sign } from "crypto";

const port = 8000;
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const token = jwt.sign(
  { id: "001", role: "admin", username: "hari bujii" },
  "secret",
  { expiresIn: "120s" }
);

app.get("/api/v1/auth/login", (req, res) => {
  res.status(200).json({
    status: "SUCCESS",
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
