import foodMenuCategory from "../model/foodMenuCategoryModel.js";

/**
 * @description API endpoint to create a new foodMenuCategory
 * @protected
 * @route /api/v1/createfoodmenucategory
 * @param {category, description,addedBy} req.body
 */

export const createfoodMenuCategory = async (req, res) => {
  const { category, description, addedBy } = req.body;

  try {
    const newFoodCategory = new foodMenuCategory({
      category,
      description,
      addedBy,
    });

    const result = await newFoodCategory.save();

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
 * @description API endpoint to get a foodMenuCategory
 * @protected
 * @route /api/v1/getfoodmenucategory
 */

export const getFoodMenuCategory = async (req, res) => {
  try {
    const result = await foodMenuCategory
      .find()
      .populate("category", "category")
      .populate("addedBy", "Username");

    res.json({
      status: "Successfully",
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
 * @description API endpoint to update a foodMenuCategory
 * @protected
 * @route /api/v1/updatefoodmenucategory/:id
 * @param { id }  req.params
 */

export const updateFoodMenuCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await foodMenuCategory.updateOne({ _id: id },req.body);

    const result = await foodMenuCategory.findById({ _id: id });

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
};

/**
 * @description API endpoint to delete a foodMenuCategory
 * @protected
 * @route /api/v1/deletefoodmenucategory/:id
 * @param { id }  req.params
 */

export const deleteFoodMenuCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await foodMenuCategory.deleteOne({ _id: id });

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
