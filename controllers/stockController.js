import Stock from "../model/stockModel.js";

/**
 * @description API endpoint to create a new prefood
 * @protected
 * @route /api/v1/createprefood
 * @param {stockName,code,category,unit,conversionRate,purchasePrice,costPerUnit,lowQuantity,stockAvailable,quantity} req.body
 */

export const createStock = async (req, res) => {
    
    try {

        const newStock = new Stock(req.body)

        const result = await newStock.save();

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
}

export const getStock = async (req, res) => {
  try {
    const stocks = await Stock.find({}, "-costPerUnit -purchasePrice") 
      .populate("stockName", "name") 
      .populate("category", "Category")
      .populate("unit", "purchaseUnit")
      .populate("conversionRate", "conversionRate")
      .populate("lowQuantity", "lowQuantity");

    // Map the result to format the response as required
    const formattedResult = stocks.map((stock) => ({
      _id: stock._id,
      stockName: `${stock.stockName.name}(${stock.code})`, 
      category: stock.category.Category,
      unit: stock.unit.purchaseUnit, 
      conversionRate: stock.conversionRate.conversionRate, 
      lowQuantity: stock.lowQuantity.lowQuantity, 
      quantity: stock.quantity, 
    }));

    res.json({
      status: "Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result: formattedResult,
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

export const updateStock = async (req, res) => {
    const { id } = req.params 

    try {

        await Stock.findOne({ _id: id })
        
        const result = await Stock.updateOne({_id:id},req.body)
        
        res.json({
          status: "Updated Successfully",
          statusCode: 200,
          error: null,
          success: true,
          result
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
}

export const deleteStock = async (req, res) => {
    const { id } = req.params 
    try {

        const result = await Stock.deleteOne({ _id: id })
        
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
            result: null,
          });
    }
}
