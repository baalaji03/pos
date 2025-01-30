import formidable from "formidable";
import { Customer, uploads } from "../model/customerModel.js";
import XLSX from "xlsx";

export const createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);

    const result = await newCustomer.save();

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

export const getCustomer = async (req, res) => {
  try {
    const [customers, uploadedFiles] = await Promise.all([
      Customer.find(),
      uploads.find(),
    ]);

    res.json({
      status: "Successfully",
      statusCode: 200,
      error: null,
      success: true,
      customers, // Customers data
      uploadedFiles, // Uploaded files data
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

export const uploadCustomer = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({
        status: "Error",
        statusCode: 400,
        error: "No file uploaded",
        success: false,
      });
    }

    // Parse the Excel file from the uploaded buffer
    const { buffer } = req.file; // Get the uploaded file buffer
    const workbook = XLSX.read(buffer, { type: "buffer" }); // Read Excel from buffer
    const sheetName = workbook.SheetNames[0]; // Get the first sheet name
    const sheet = workbook.Sheets[sheetName];
    const parsedData = XLSX.utils.sheet_to_json(sheet); // Convert sheet to JSON

    // Save the Excel data as a new record in your database
    const newUpload = new uploads({ upload: parsedData }); // Save the parsed JSON
    const result = await newUpload.save();

    // Respond with success
    res.json({
      status: "Created Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    // Handle errors
    res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
    });
  }
};
