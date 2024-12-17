
import Counter from "../model/settingCounterModel.js";
/**
 * @description API endpoint to create a new settings counter
 * @method POST
 * @protected
 * @route /api/v1/createcounter
 * @param {counterName,invoicePrinter,billPrinter,Description} req.body
 **/


export const createCounter = async (req, res) => {
    
    const { counterName, invoicePrinter, billPrinter, Description } = req.body
    
    try {
        
        const newCounter = new Counter({
          counterName,
          invoicePrinter,
          billPrinter,
          Description,
        });
        
        const result = await newCounter.save();

        res.json({
          status: "Created Successfully",
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
 * @description API endpoint to  get settings counter
 * @method GET
 * @protected
 * @route /api/v1/getCounter
 * @param {id} req.params
 **/

export const getCounter = async (req, res) => {
    
    const { id } = req.params

    try {

        const result = await Counter.find();

        res.json({
          status: "Success",
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
 * @description API endpoint to  update settings counter
 * @method PUT
 * @protected
 * @route /api/v1/updateCounter
 * @param {id} req.params
 * @param {counterName,invoicePrinter,billPrinter,Description } req.body
 **/

export const updateCounter = async (req, res) => {
    const { id } = req.params
    const { counterName, invoicePrinter, billPrinter, Description } = req.body;

    try {

        await Counter.findByIdAndUpdate(id, {
          counterName,
          invoicePrinter,
          billPrinter,
          Description,
        });

        const result = await Counter.findById(id)
        
        res.json({
          status: "Success",
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
 * @description API endpoint to  delete settings counter
 * @method Delete
 * @protected
 * @route /api/v1/deleteCounter
 * @param {id} req.params
 **/

export const deleteCounter = async (req, res) => {
    const { id } = req.params
    try {
        
        const result = await Counter.findByIdAndDelete(id)

        res.json({
          status: "Success",
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