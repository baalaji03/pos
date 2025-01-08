import Attendance from "../model/attendanceModel.js";

export const createAttendance = async (req, res) => {
    
    try {

        const newAttendance = new Attendance(req.body)

        const result = await newAttendance.save();

        res.json({
          status: "Created Successfully",
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

export const getAttendance = async (req, res) => {
    
    try {

        const result = await Attendance.find().populate("name","Username");
        

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
}

export const updateAttendance = async (req, res) => {
  const { id } = req.params;
  try {
    await Attendance.updateOne({ _id: id }, req.body);

    const result = await Attendance.findById({ _id: id });

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

export const deleteAttendance = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Attendance.deleteOne({ _id: id });

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
