import Supplier from "../model/supplierModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

// Multer setup for image uploads
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

// Create a supplier
export const createSupplier = async (req, res) => {
  upload.fields([{ name: "image", maxCount: 1 }])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const image = req.files?.image?.[0]?.path || null;

      const supplierData = {
        ...req.body,
        image,
      };

      const newSupplier = new Supplier(supplierData);
      const result = await newSupplier.save();

      res.status(200).json({
        status: "Supplier created successfully",
        statusCode: 200,
        error: null,
        success: true,
        result,
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        statusCode: 500,
        error: error.message,
        success: false,
        result: null,
      });
    }
  });
};

// Get all suppliers
export const getSupplier = async (req, res) => {
  try {
    const result = await Supplier.find().select(
      "-companyAddress -billingAddress -sameAsCompanyAddress -description -image"
    );

    res.status(200).json({
      status: "Fetched suppliers successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
};

export const updateSupplier = async (req, res) => {
  const { id } = req.params;

  try {
    await Supplier.updateOne({ _id: id }, req.body);

    const result = await Supplier.findById({ _id: id });

    res.status(200).json({
      status: "Updated purchases successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
};

export const deleteSupplier = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Supplier.deleteOne({ _id: id });

    res.status(200).json({
      status: "Deleted purchases successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,   
      success: false,
      result: null,
    });
  }
};
 