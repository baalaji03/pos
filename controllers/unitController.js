import Unit from "../model/unitModel.js";

//POST(unit)
export const createIngredient = async (req, res) => {
  try {
    const { unitName, desc } = req.body;
    const Items = new Unit({ unitName, desc });
    const result = await Items.save();
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

//GET (unit)
export const getIngredient = async (req, res) => {
  try {
    const result = await Unit.find();
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

//Update (unit)
export const updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const { unitName, desc } = req.body;
    const result = await Unit.findByIdAndUpdate(
      id,
      { unitName, desc },
      { new: true }
    );
    res
      .status(200)
      .json({
        status: "Success",
        statucCode: 200,
        error: null,
        success: true,
        result,
      });
  } catch (error) {
    console.log(error);
  }
};

//delete (unit)
export const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Unit.findByIdAndDelete(id);
    {
      res.json({
        status: "Success",
        statucCode: 200,
        error: null,
        success: true,
        deleted
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// getbyID(unit)

export const getUnitById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Unit.findById(id);
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
