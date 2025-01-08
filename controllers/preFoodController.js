import PreMadeFood from "../model/preFoodModel.js";

/**
 * @description API endpoint to create a new prefood
 * @protected
 * @route /api/v1/createprefood
 * @param {name,code,category,ingredientConsumption,consumptionUnit,costPerUnit,lowQuantity} req.body
 */

export const createPreMadeFood = async (req, res) => {
  try {
    const newPreFood = new PreMadeFood(req.body);

    const result = await newPreFood.save();

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
};

/**
 * @description API endpoint to get prefood
 * @protected
 * @route /api/v1/getprefood
 */

export const getpreMadeFood = async (req, res) => {
  try {
      const result = await PreMadeFood.find()
        .populate("category", "Category")
          .populate("ingredientConsumption", "name");
      
      res.json({
        status: " Successfully",
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
};


/**
 * @description API endpoint to update prefood
 * @protected
 * @route /api/v1/updateprefood/:id
 * @param {id} req.params
 */

export const updatePreFood = async (req, res) => {
  
  const { id } = req.params

  try {

     await PreMadeFood.updateOne({ _id: id }, req.body);

    const result = await PreMadeFood.findById({ _id: id });

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

/**
 * @description API endpoint to delete a prefood
 * @protected
 * @route /api/v1/deleteprefood/:id
 * @param { id }  req.params
 */

export const deletePreFood = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await PreMadeFood.deleteOne({ _id: id });

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
};
