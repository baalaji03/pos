import Currency from "../model/settingCurrencyModel.js";

/**
 * @description API endpoint to create a new settings
 * @method POST
 * @protected
 * @route /api/v1/createsettings
 * @param {currencySymbol,conversionRate} req.body
 **/

export const createCurrency = async (req, res) => {
    const { currencySymbol, conversionRate } = req.body
    try {
        const newCurrency = new Currency({ currencySymbol, conversionRate });

        const result = await newCurrency.save();

        res.json({
          status: "Created Successfully",
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
 * @description API endpoint to get a new settings
 * @method GET
 * @protected
 * @route /api/v1/getsettings
 * @param { id } req.params
 **/

export const getCurrency = async (req, res) => {
    
    const { id } = req.params
    try {
        const result = await Currency.find();

        res.json({
          status: " Successfully ",
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
 * @description API endpoint to update a new settings
 * @method PUT
 * @protected
 * @route /api/v1/updatesettings
 * @param { id } req.params
 * @param {currencySymbol,conversionRate} req.body
 **/

export const updateCurrency = async (req, res) => {
    const { id } = req.params;
    const { currencySymbol, conversionRate } = req.body;

    try {

        await Currency.findByIdAndUpdate(id, {
          currencySymbol,
          conversionRate,
        });

        const result = await Currency.findById(id);

        res.json({
          status: "Updated Successfully",
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
 * @description API endpoint to delete a new settings
 * @method delete
 * @protected
 * @route /api/v1/deletesettings
 * @param { id } req.params
 **/

export const deleteCurrency = async (req, res) => {
    const { id } = req.params
    try {

        const result = await Currency.findByIdAndDelete(id)

        res.json({
          status: "Deleted Successfully",
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

