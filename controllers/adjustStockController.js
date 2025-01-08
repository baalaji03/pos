import adjustStock from "../model/adjustStockModel.js";


export const createAdjustStock = async (req, res) => {
    
    try {
        const newAdjust = new adjustStock(req.body);
        const result = await newAdjust.save();

         res.json({
           status: "Created Successfully",
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

export const getAdjustStock = async (req, res) => {
    
    try {

        const result = await adjustStock
          .find()
          .populate("stockName", "name")
            .populate("quantity", "quantity");
        
        const formattedresult = result.map((adjustStock) => ({
          _id: adjustStock.id,
          stockName: `${adjustStock.stockName.name}(${adjustStock.code})`,
          currentStocks: adjustStock.currentStocks,
          date: adjustStock.date,
          quantity: adjustStock.quantity.quantity,
          responsiblePerson: adjustStock.responsiblePerson,
          consumptionStatus: adjustStock.consumptionStatus,
        }));
        
        
         res.json({
           status: "Successfully",
           statusCode: 200,
           error: null,
           success: true,
           result: formattedresult
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

export const updateAdjustStock = async (req, res) => {
    
    const { id } = req.params

    try {

        await adjustStock.findById({ _id: id })
        
        const result = await adjustStock.updateOne({ _id: id }, req.body)
        
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
           result: null,
         });
    }
}

export const deleteAdjustStock = async (req, res) => {
    
    const { id } = req.params

    try {

            const result = await adjustStock.deleteOne({_id:id})

          res.json({
            status: "Deleted Successfully",
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