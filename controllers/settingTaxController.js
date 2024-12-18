import taxSetting from "../model/settingTaxModel.js";

/**
 * @description API endpoint to create a new tax
 * @method POST
 * @protected
 * @route /api/v1/createtax
 * @param {Tax,taxType,taxTitle,taxRegistrationNumber,isGST,taxFields} req.body
 **/

export const createtax = async (req, res) => {
    
    const { Tax, taxType, taxTitle, taxRegistrationNumber, isGST, taxFields } = req.body
    
    try {

        const newTax = new taxSetting({
          Tax,
          taxType,
          taxTitle,
          taxRegistrationNumber,
          isGST,
          taxFields,
        });

        const result = await newTax.save();

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
 * @description API endpoint to GET a tax
 * @method GET
 * @protected
 * @route /api/v1/gettax
 * @param {id} req.params
 **/

export const getTax = async (req, res) => {
    const { id } = req.params
    
    try {

        const result = await taxSetting.find();

        res.json({
          status: "Successfully",
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
 * @description API endpoint to update a tax
 * @method PUT
 * @protected
 * @route /api/v1/updatetax
 * @param {Tax,taxType,taxTitle,taxRegistrationNumber,isGST,taxFields} req.body
 * @param {id} req.params
 **/

export const updateTax = async (req, res) => {
    const { id } = req.params
    const { Tax, taxType, taxTitle, taxRegistrationNumber, isGST, taxFields } = req.body
    
    try {

        await taxSetting.findByIdAndUpdate(id, {
          Tax,
          taxType,
          taxTitle,
          taxRegistrationNumber,
          isGST,
          taxFields,
        });
        
        const result = await taxSetting.findById(id)
        
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
 * @description API endpoint to delete a tax
 * @method delete
 * @protected
 * @route /api/v1/updatetax
 * @param {id} req.params
 **/

export const deleteTax = async (req, res) => {
    const { id } = req.params 
    try {
        
        const result = await taxSetting.findByIdAndDelete(id)

        res.json({
          status: "Deleted Successfully",
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

