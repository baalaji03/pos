import Payment from "../model/settingPaymentModel.js";

/**
 * @description API endpoint to create a new payment 
 * @method POST
 * @protected
 * @route /api/v1/createpayment
 * @param {Name, Description} req.body
 **/

export const createPayment = async (req, res) => {
    const { Name, Description } = req.body; 
    
    try {
        const newPayment = new Payment({ Name, Description });
        const result = await newPayment.save();
        res.json({
          status: "Created Successfully",
          statucCode: 200,
          error: null,
          success: true,
          result
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
}


/**
 * @description API endpoint to get a payment 
 * @method GET
 * @protected
 * @route /api/v1/getpayment
 * @param { id } req.params
 **/

export const getPayment = async (req, res) => {
    
    const { id } = req.params

    try {

        const result = await Payment.find()
        
        res.json({
          status: "Successfully",
          statucCode: 200,
          error: null,
          success: true,
          result
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
}

/**
 * @description API endpoint to update a payment 
 * @method PUT
 * @protected
 * @route /api/v1/updatepayment
 * @param { id } req.params
 * @param {Name, description} req.body
 * 
 **/

export const updatePayment = async (req, res) => {
    const { id } = req.params
    const { Name, Description } = req.body;
    
    try {
        
        await Payment.findByIdAndUpdate(id, { Name, Description })
        
        const result = await Payment.findById(id)

        res.json({
          status: "Updated Successfully",
          statucCode: 200,
          error: null,
          success: true,
          result
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
}

/**
 * @description API endpoint to delete a payment 
 * @method delete
 * @protected
 * @route /api/v1/deletepayment
 * @param { id } req.params
 **/

export const deletePayment = async (req, res) => {
    const { id } = req.params
    
    try {
        const result = await Payment.findByIdAndDelete(id) 
        
        res.json({
          status: "Deleted Successfully",
          statucCode: 200,
          error: null,
          success: true,
          result
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
}
