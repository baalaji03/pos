import lowStock from "../model/lowStockModel.js";
import Category from "../model/categoryModel.js";
import Stock from "../model/stockModel.js";
import { Ingredient} from "../model/ingredientModel.js"

export const getLowStock = async (req, res) => {
  try {
      // Fetch all lowStock records
      const lowStockRecord = new lowStock({
        stockName: "Tomato",
        code: "TOM123",
        category: "Vegetables",
        stockQuantityAmount: 50,
        lowQuantityAmount: 10,
      });

      await lowStockRecord.save();

    const lowStocks = await lowStock.find();

    // Log the fetched lowStock records
    console.log("Fetched lowStock Records:", lowStocks);

    if (lowStocks.length === 0) {
      return res.status(404).json({
        status: "No Records Found",
        statusCode: 404,
        error: null,
        success: true,
        result: [],
      });
    }

    // Process each lowStock record and manually fetch related data
    const result = await Promise.all(
      lowStocks.map(async (stock) => {
        // Manually fetch related Ingredient data using the stockName (e.g., "Tomato")
        const ingredient = await Ingredient.findOne({
          name: stock.stockName,
        }).select("name");
        console.log("Ingredient for StockName:", stock.stockName, ingredient);

        // Manually fetch related Category data using the category (e.g., "Vegetables")
        const category = await Category.findOne({
          Category: stock.category,
        }).select("Category");
        console.log("Category for:", stock.category, category);

        // Manually fetch related Stock data using the code (e.g., "TOM123")
        const stockDetails = await Stock.findOne({ code: stock.code }).select(
          "quantity"
        );
        console.log("Stock Details for Code:", stock.code, stockDetails);

        // Construct response with all necessary data
        return {
          _id: stock._id,
          stockName: ingredient ? ingredient.name : stock.stockName, // Name of the ingredient
          category: category ? category.Category : stock.category, // Name of the category
          stockQuantityAmount: stockDetails ? stockDetails.quantity : 0, // Quantity of stock
          lowQuantityAmount: stock.lowQuantityAmount, // Low quantity amount
        };
      })
    );

    // Send the final result in the response
    res.json({
      status: "Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.error("Error Fetching Low Stock:", error);
    return res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
};
