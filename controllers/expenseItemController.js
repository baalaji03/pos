import expenseItem from "../model/expenseItemModel.js";

export const createExpenseItem = async (req, res) => {
  try {
    const newExpense = new expenseItem(req.body);

    const result = await newExpense.save();

    res.status(200).json({
      status: "ExpenseItem created successfully",
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

export const getExpenseItem = async (req, res) => {
  try {
    const result = await expenseItem
      .find()
      .populate("category", "name")
      .populate("responsiblePerson", "Username")
      .populate("addedBy", "Username");

    res.status(200).json({
      status: "Fetched ExpenseItem successfully",
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

export const updateExpenseItem = async (req, res) => {
  const { id } = req.params;

  try {
    await expenseItem.updateOne({ _id: id }, req.body);

    const result = await expenseItem.findById({ _id: id });

    res.status(200).json({
      status: "Updated ExpenseItem successfully",
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

export const deleteExpenseItem = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await expenseItem.deleteOne({ _id: id });

    res.status(200).json({
      status: "Deleted ExpenseItem successfully",
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
