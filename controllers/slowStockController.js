import slowStock from "../model/slowStockModel.js";
import Category from "../model/categoryModel.js";
import Stock from "../model/stockModel.js";
import { Ingredient } from "../model/ingredientModel.js";

export const getslowStock = async (req, res) => {
  try {
    // Fetch all records from their respective tables
    const ingredients = await Ingredient.find({}, "name code"); // Fetch only stockName and code
    const categories = await Category.find({}, "category"); // Fetch only category field
    const stocks = await Stock.find({}, "quantity"); // Fetch only quantity field

    // Combine the fetched data (assuming sequential usage for now)
    const result = ingredients.map((ingredient, index) => ({
      stockName: `${ingredient.name}(${ingredient.code || "N/A"})`,
      category: categories[index]?.category?`${categories[index].category}` : "Unknown", // Fallback to "Unknown"
      quantity: stocks[index]?.quantity
        ? `${stocks[index].quantity} pcs`
        : "Out of Stock",
    }));

      // Send a successful response
      
    res.json({
      status: "Success",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    // Handle server errors
    return res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
};

