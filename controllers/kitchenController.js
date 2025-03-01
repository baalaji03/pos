import kitchen from "../model/kitchenModel.js";
import Category from "../model/categoryModel.js";

// post(kitchen)
export const createKitcken = async (req, res) => {
  try {
    const { NameOfKitchen, Printer, categories } = req.body;

    const existingCategories = await category.find({
      _id: { $in: categories },
    });

    const newKitchen = new kitchen({ NameOfKitchen, Printer, categories });

    const result = await newKitchen.save();
    const populatedKitchen = await kitchen
      .findById(result._id)
      .populate("categories");

    res.json({
      status: "Created Successfully",
      statucCode: 200,
      error: null,
      success: true,
      result: populatedKitchen,
    });
  } catch (error) {
    console.log(error);
  }
};

// get(kitchen)

export const getKitcken = async (req, res) => {
  try {
    const result = await kitchen.find();

    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result
    });
  } catch (error) {
    console.log(error);
  }
};

//update(*kitchen)

export const updateKitcken = async (req, res) => {
  try {
    const { id } = req.params;
    const { NameOfKitchen, Printer, categories } = req.body;

    const result = await kitchen.findByIdAndUpdate(id, {
      NameOfKitchen,
      Printer,
      categories,
    });

    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result
    });
  } catch (error) {
    console.log(error);
  }
};

//delete(kitchen)

export const deleteKitcken = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await kitchen.findByIdAndDelete(id);
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result
    });
  } catch (error) {
    console.log(error);
  }
};

// getbyID(kitcken)

export const getKitckenById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await kitchen.findById(id);
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result
    });
  } catch (error) {
    console.log(error);
  }
};
