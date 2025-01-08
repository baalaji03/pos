import purchasePurchase from "../model/purchasePurchaseModel.js";

export const createPurchases = async (req, res) => {
    try {

        const newPurchase = new purchasePurchase(req.body);

        

        const result = await newPurchase.save();

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

export const getPurchases = async (req, res) => {
    try {

        const result = await purchasePurchase
          .find()
          .populate("supplier", "name")
          .populate("category", "name")
          .populate("addedBy", "Username");

         res.json({
           status: "Successfully",
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