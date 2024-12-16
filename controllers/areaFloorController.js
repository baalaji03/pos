import areafloor from "../model/areaFloorModel.js";

/**
 * @description API endpoint to create a new area floor
 * @method POST
 * @protected
 * @route /api/v1/areafloorcreate
 * @param {areaFloorName, Description} req.body
 */

export const areaFloorCreate = async (req, res) => {
  // Destructuring to extract the area floor details from the request body
  const { areaFloorName, Description } = req.body;

  try {
    // Creating a new area floor instance
    const newAreaFloor = new areafloor({ areaFloorName, Description });

    // Saving the new area floor instance to the database
    const result = await newAreaFloor.save();

    // Sending a success response
    return res.json({
      status: "Successfully Created",
      statusCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    // Handling any errors that may occur during the process
    return res.status(500).json({
      status: "Error",
      statusCode: 500,
      error: error.message,
      success: false,
      result: null,
    });
  }
};

/**
 * @description API endpoint to get a area floor
 * @method GET
 * @protected
 * @route /api/v1/areafloorget
 */

export const areaFloorget = async (req, res) => {
  try {
    const result = await areafloor.find();

    res.json({
      status: "Success",
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

/**
 * @description API endpoint to update a new area floor
 * @method PUT
 * @protected
 * @route /api/v1/areafloorupdate
 * @param {id} req.params
 * @param {areaFloorName, Description} req.body
 **/

export const areaFloorupdate = async (req, res) => {
  const { id } = req.params;
  const { areaFloorName, Description } = req.body;

  try {
    await Areafloor.findByIdAndUpdate(id, {
      areaFloorName,
      Description,
    });

    const updatedDAta = await areafloor.findById(id);

    res.json({
      status: "Successfully updated",
      statusCode: 200,
      error: null,
      success: true,
      updatedDAta,
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

/**
 * @description API endpoint to delete a new area floor
 * @method delete
 * @protected
 * @route /api/v1/areafloordelete
 * @param {id} req.params
 **/

export const areaFloordelete = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await areafloor.findByIdAndDelete(id);

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
};
