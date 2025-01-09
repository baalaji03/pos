import purchasePurchase from "../model/purchasePurchaseModel.js";
import Supplier from "../model/supplierModel.js";

// Create a purchase and update supplier balance
export const createPurchases = async (req, res) => {
  try {
    const { supplier, grandTotal, paid } = req.body;

    // Find the supplier
    const existingSupplier = await Supplier.findById(supplier);
    if (!existingSupplier) {
      return res.status(404).json({
        status: "Error",
        statusCode: 404,
        error: "Supplier not found",
        success: false,
        result: null,
      });
    }

    // Calculate the due amount
    const due = grandTotal - paid;

    // Update supplier's balance
    existingSupplier.balance += due;
    await existingSupplier.save();

    // Save the purchase
    const newPurchase = new purchasePurchase(req.body);
    const result = await newPurchase.save();

    res.status(200).json({
      status: "Purchase created successfully",
      statusCode: 200,
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
};

// Get all purchases
export const getPurchases = async (req, res) => {
  try {
    const result = await purchasePurchase
      .find()
      .populate("supplier", "name balance")
      .populate("category", "name")
      .populate("addedBy", "Username");

    res.status(200).json({
      status: "Fetched purchases successfully",
      statusCode: 200,
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
};

export const updatePurchases = async (req, res) => {
  const { id } = req.params;

  try {
    await purchasePurchase.updateOne({ _id: id }, req.body);

    const result = await purchasePurchase.findById({ _id: id });

    res.status(200).json({
      status: "Updated purchases successfully",
      statusCode: 200,
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
};

export const deletePurchases = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await purchasePurchase.deleteOne({ _id: id });

    res.status(200).json({
      status: "Deleted purchases successfully",
      statusCode: 200,
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
};
