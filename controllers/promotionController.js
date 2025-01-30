import Promotion from "../model/promotionModel.js";

export const createPromotion = async (req, res) => {
  try {
    const newPromotion = new Promotion(req.body);

    const result = await newPromotion.save();

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

export const getPromotion = async (req, res) => {
  try {
    const result = await Promotion.find()
      .select("title type startDate endDate status discountPercentage")
      .populate("addedBy", "Username");
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


export const updatePromotion = async (req, res) =>
{
  const { id } = req.params
  try {
   
    await Promotion.updateOne({ _id: id }, req.body)
    
    const result = await Promotion.findById({ _id: id })
    
    res.json({
      status: "Updated Successfully",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
       

  }
  catch (error) {
    return res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
}


export const deletePromotion = async (req, res) => {
  const { id } = req.params

  try {

    const result = await Promotion.deleteOne({ _id: id })
    
     res.json({
       status: "Deleted Successfully",
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
}

