import Purchase from "../model/purchaseModel.js";

/**
 * @description API endpoint to create a new purchase
 * @method POST
 * @protected
 * @route /api/v1/createpurchase
 * @param {referenceNumber, date,responsiblePerson,supplier,category,unitPrice,quantity,paid} req.body
 */

export const createPurchase = async (req, res) => {
  const {
    referenceNumber,
    date,
    responsiblePerson,
    supplier,
    category,
    unitPrice,
    quantity,
    paid,
    due,
  } = req.body;

  try {
    const newPurchase = new Purchase({
      referenceNumber,
      date,
      responsiblePerson,
      supplier,
      category,
      unitPrice,
      quantity,
      paid
      
    });

    const result = await newPurchase.save();

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
