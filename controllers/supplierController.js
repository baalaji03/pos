import Supplier from "../model/supplierModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
const uuidNo = uuidv4();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadFolder = path.resolve("uploads", uuidNo);
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder, { recursive: true });
    }
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

export const createSupplier = async (req, res) => {
  upload.fields([{ name: "image", maxCount: 1 }])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const image = req.files?.image?.[0]?.path || null;

      const supplier = {
        ...req.body,
        image: image,
      };

      const newSupplier = new Supplier(supplier);

      const result = await newSupplier.save();

      res.json({
        status: "Created Successfully",
        statusCode: 200,
        error: null,
        success: true,
        result,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        statusCode: 500,
        error: error.message,
        success: false,
        result: null,
      });
    }
  });
};

// before get create purchase from there we have to put due payment here

export const getSupplier = async (req, res) => {
  try {
    const result = await Supplier.find({}).select("balance");

    res.json({
      status: "Created Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
};
