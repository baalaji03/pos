import Reservation from "../model/settingReservationModel.js";

/**
 * @description API endpoint to create a new Reservation
 * @method POST
 * @protected
 * @route /api/v1/createreservation
 * @param {isAvailable,day,startTime,endTime} req.body
 **/

export const createReservation = async (req, res) => {
    const  {isAvailable,day,startTime,endTime}  = req.body
 
    try {
         
        const newReservation = new Reservation({
          isAvailable,
          day,
          startTime,
          endTime,
        });

        const result = await newReservation.save();

        res.json({
          status: "Created Successfully",
          statusCode: 201,
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
}

/**
 * @description API endpoint to get  Reservation
 * @method GET
 * @protected
 * @route /api/v1/getreservation
 **/

export const getreservation = async (req, res) => {
    
    
    try {

        const result = await Reservation.find()
        
        res.json({
          status: "Successfully",
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
}

/**
 * @description API endpoint to update Reservation
 * @method PUT
 * @protected
 * @route /api/v1/updatereservation
 * @param {isAvailable,day,startTime,endTime} req.body
 * @param { id } req.params
 **/

export const updatereservation = async (req, res) => {
    const { id } = req.params
    const { isAvailable, day, startTime, endTime } = req.body
    
    try {
        
        await Reservation.findByIdAndUpdate(id, {
          isAvailable,
          day,
          startTime,
          endTime,
        });

        const result = await Reservation.findById(id)

        res.json({
          status: "Updated Successfully",
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
}

/**
 * @description API endpoint to delete Reservation
 * @method Delete
 * @protected
 * @route /api/v1/updatereservation
 * @param { id } req.params
 **/

export const deletereservation = async (req, res) => {
    const { id } = req.params
    try {

        const result = await Reservation.findByIdAndDelete(id)
        
        res.json({
          status: "Updated Successfully",
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