import Waste from "../model/wasteModel.js";

export const createWaste = async (req, res) => {
    
    try {
   
        const newWaste = new Waste(req.body);

        const result = await newWaste.save();


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
}

export const getWaste = async (req, res) => {
  try {
    const result = await Waste.find()
      .populate("addedBy", "Username")
      .populate("ingredients", "name")
      .populate("foodMenu", "name")
      .populate("responsiblePerson", "responsiblePerson")
      .populate("addedBy", "Username");
      

    res.json({
      status: "Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result
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

export const updateWaste = async (req, res) => {
  const { id } = req.params;
  try {
    await Waste.updateOne({ _id: id }, req.body);

    const result = await Waste.findById({ _id: id });

    res.json({
      status: "Updated Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result
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

export const deleteWaste = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Waste.deleteOne({ _id: id });

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
 