import { Ingredient, upload } from "../model/ingredientModel.js";
import XLSX from "xlsx";

/**
 * @description API endpoint to create a new ingredient
 * @method POST
 * @protected
 * @route /api/v1/createingredient
 * @param {name, code,purchaseUnit,consumptionUnit,conversionRate,purchasePrice,costPerUnit,lowQuantity} req.body
 */

export const createIngredient = async (req, res) => {
  const {
    name,
    code,
    purchaseUnit,
    consumptionUnit,
    conversionRate,
    purchasePrice,
    costPerUnit,
    lowQuantity,
    addedBy,
  } = req.body;

  try {
    const newIngredient = new Ingredient({
      name,
      code,
      purchaseUnit,
      consumptionUnit,
      conversionRate,
      purchasePrice,
      costPerUnit,
      lowQuantity,
      addedBy,
    });

    const result = await newIngredient.save();

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

/**
 * @description API endpoint to get  ingredient
 * @method GET
 * @protected
 * @route /api/v1/getredient
 * @param { id}  req.params
 */

export const getIngredient = async (req, res) => {
  const { id } = req.params;

  try {
    
    const result = await Ingredient.find().populate("addedBy", "Username");

    res.json({
      status: "Successfully",
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
    });
  }
};

/**
 * @description API endpoint to update ingredient
 * @method PUT
 * @protected
 * @route /api/v1/updateredient
 * @param { id}  req.params
 * @param {name, code,purchaseUnit,consumptionUnit,conversionRate,purchasePrice,costPerUnit,lowQuantity} req.body
 */

export const updateIngredient = async (req, res) => {
  const { id } = req.params;

  try {
    await Ingredient.findByIdAndUpdate(id, req.body);

    const result = await Ingredient.findById(id);

    res.json({
      status: "Updated Successfully",
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
    });
  }
};

/**
 * @description API endpoint to delete ingredient
 * @method Delete
 * @protected
 * @route /api/v1/deleteredient
 * @param { id}  req.params
 */

export const deleteIngredient = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Ingredient.findById(id);
    await result.deleteOne();

    res.json({
      status: "Deleted Successfully",
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
    });
  }
};


/**
 * @description API endpoint to create a upload file
 * @method POST
 * @protected
 * @route /api/v1/upload
 */

export const uploadIngredient = async (req, res) => {
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
    const newUpload = new upload({ upload: parsedData }); // Save the parsed JSON
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

/**
 * @description API endpoint to get a upload file
 * @method GET
 * @protected
 * @route /api/v1/getupload
 */

export const getUpload = async (req, res) => {
  try {
    const file = await upload.find();

    res.json({
      status: "Successfully",
      statusCode: 200,
      error: null,
      success: true,
      file,
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
    });
  }
};
