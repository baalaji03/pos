import SelfOrderSettings from "../model/settingSelfModel.js";
import QRCode from "qrcode"
/**
 * @description API endpoint to create a new self
 * @method POST
 * @protected
 * @route /api/v1/createself
 * @param {enableSelfOrder, qrCodeUrl} req.body
 **/

export const createSelf = async (req, res) => {
  const { enableSelfOrder } = req.body; // Get enableSelfOrder value from the request body

  try {
    // Generate QR Code data
    const qrData = {
      message: "Welcome to Self-Order!",
      enableSelfOrder,
    };

    // Generate the QR Code URL (using the qrcode library)
    const qrCodeUrl = await QRCode.toDataURL(JSON.stringify(qrData));

    // Save the enableSelfOrder and QR Code URL to the database
    const newSelf = new SelfOrderSettings({ enableSelfOrder, qrCodeUrl });
    const result = await newSelf.save();

    // Respond to the client
    res.json({
      status: "Created Successfully",
      statusCode: 201,
      error: null,
      success: true,
      result,
      qrCodeUrl
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


/**
 * @description API endpoint to get a self
 * @method GET
 * @protected
 * @route /api/v1/getself
 * @param { id } req.params
 **/

export const getSelf = async (req, res) => {
    const { id } = req.params 

    try {
        
        const result = await SelfOrderSettings.find();

        res.json({
          status: "Successfull",
          statusCode: 201,
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
 * @description API endpoint to update a self
 * @method PUT
 * @protected
 * @route /api/v1/updateself
 * @param { id } req.params
 * @param {  enableSelfOrder } req.body
 **/

export const updateSelf = async (req, res) => {
    const { id } = req.params
    const { enableSelfOrder } = req.body 
    
    try {

        await SelfOrderSettings.findByIdAndUpdate(id, { enableSelfOrder });

        const result = await SelfOrderSettings.findById(id);

        res.json({
          status: " Updated Successfull",
          statusCode: 201,
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
}

/**
 * @description API endpoint to delete a self
 * @method delete
 * @protected
 * @route /api/v1/deleteself
 * @param { id } req.params
 **/

export const deleteSelf = async (req, res) => {
    const { id } = req.params
    try {
        const result = await SelfOrderSettings.findByIdAndDelete(id);

        res.json({
          status: " Deleted Successfull",
          statusCode: 201,
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