import Modifier from "../model/modifierModel.js";
import { Ingredient } from "../model/ingredientModel.js";

/**
 * @description API endpoint to create a new modifier
 * @method POST
 * @protected
 * @route /api/v1/createmodifier
 * @param {name,price,description,ingredient,addedBy} req.body
 */

export const createModifier = async (req, res) => {
  const { name, price, description, ingredient, addedBy } = req.body;

  try {
    const newModifier = new Modifier({
      name,
      price,
      description,
      ingredient,
      addedBy,
    });

    const result = await newModifier.save();

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
 * @description API endpoint to get a modifier
 * @method GET
 * @protected
 * @route /api/v1/getmodifier
 */

export const getModifier = async (req, res) => {
  try {
    const result = await Modifier.find()
      .populate("addedBy", "Username")
      .populate("ingredient", "name consumptionUnit costPerUnit");

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
 * @description API endpoint to create a modifier
 * @method PUT
 * @protected
 * @route /api/v1/updatemodifier
 * @param {name,price,description,ingredient,addedBy} req.body
 * @param { id } req.params
 */

export const updateModifier = async (req, res) => {
  const { id } = req.params;
  const { name, consumptionUnit, costPerUnit } = req.body;

  try {
    await Modifier.updateOne({ _id: id }, req.body);

    const result = await Modifier.find().populate(
      "ingredient",
      "name consumptionUnit costPerUnit"
    );

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
