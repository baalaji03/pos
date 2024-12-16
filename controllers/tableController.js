import areafloor from "../model/areaFloorModel.js";
import Table from "../model/tableModel.js";

/**
 * @description API endpoint to create a new table
 * @method POST
 * @protected
 * @route /api/v1/tablecreate
 * @param {FloorName,TableName,seatCapacity,Description} req.body
 **/

export const tablecreate = async (req, res) => {
  const { areaFloorName, TableName, seatCapacity, Description } = req.body;

  try {
    const existingAreaFloor = await areafloor.findById(areaFloorName);

    const newTable = new Table({
      FloorName: {
        id: existingAreaFloor._id,
        floorName: existingAreaFloor.areaFloorName,
      },
      TableName,
      seatCapacity,
      Description,
    });

    const result = await newTable.save();

    res.json({
      status: "Created Successfully",
      statucCode: 200,
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
 * @description API endpoint to get a table
 * @method GET
 * @protected
 * @route /api/v1/tableget
 
 **/

export const tableget = async (req, res) => {
    try {
        
        const result = await Table.find();

        res.json({
            status: "Success",
            statusCode: 200,
            error: null,
            success: true,
            result,
        })

    } catch (error) {
        return res.status(500).json({
            status: "Error",
            statusCode: 500,
            error: error.message,
            success: false,
            result: null
        })
    }
}

/**
 * @description API endpoint to update a table
 * @method PUT
 * @protected
 * @route /api/v1/tableupdate
 * @param {id} =req.params
 * param {FloorName,TableName,seatCapacity,Description} = req.body
 
 **/

export const tableupdate = async (req, res) => {
    const { id } = req.params
    const { FloorName, TableName, seatCapacity, Description } = req.body
    
    try {
        
       await Table.findByIdAndUpdate(id, {
          FloorName,
          TableName,
          seatCapacity,
          Description,
        });

        const updatedtable = await Table.findById(id)
        
        res.json({
          status: "Successfully updated",
          statusCode: 200,
          error: null,
          success: true,
          updatedtable,
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

/**
 * @description API endpoint to delete a table
 * @method DELETE
 * @protected
 * @route /api/v1/tabledelete
 * * @param {id} req.params

 **/

export const tabledelete = async (req, res) => {
      const { id } = req.params;
      try {
        const result = await Table.findByIdAndDelete(id);

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
}
