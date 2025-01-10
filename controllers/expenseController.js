import Expense from "../model/expenseModel.js";

export const createExpense = async (req, res) => {
      try {
        const newExpenses = new Expense(req.body);

        const result = await newExpenses.save();

        res.status(200).json({
          status: "Expense created successfully",
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
}

export const getExpense = async (req, res) => {
    try {

        const result = await Expense.find();

        res.status(200).json({
          status: "Expense Retreived successfully",
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
}

export const updateExpense = async (req, res) => {
  const { id } = req.params;

  try {
    await Expense.updateOne({ _id: id }, req.body);

    const result = await Expense.findById({ _id: id });

    res.status(200).json({
      status: "Updated Expense successfully",
      statusCode: 200,
      error: null,
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null
    });
  }
};

export const deleteExpense = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await Expense.deleteOne({ _id: id });

    res.status(200).json({
      status: "Deleted Expense successfully",
      statusCode: 200,
      error: null,
      success: true,
      result
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