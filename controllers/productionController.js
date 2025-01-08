import Production from "../model/productionModel.js";

export const createProduction = async (req, res) => {
  try {
    const newProduction = new Production(req.body);

    const result = await newProduction.save();

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

export const getProduction = async (req, res) => {
  try {
    const result = await Production.find()
      .populate("addedBy", "Username")
      .populate("preMadeFoodItem", "name");

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

export const updateProduction = async (req, res) => {
  const { id } = req.params;
  try {
    await Production.updateOne({ _id: id }, req.body);

    const result = await Production.findById({ _id: id });

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

export const deleteProduction = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Production.deleteOne({ _id: id });

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
