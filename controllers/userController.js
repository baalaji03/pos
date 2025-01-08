import User from "../model/userModel.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

/**
 * @description API endpoint to create a new User
 * @method POST
 * @protected
 * @route /api/v1/createuser
 * @param {Username,Email,mobileNumber,Password,confirmPassword,Role,profilePicture,govtProof,enableLogin} req.body
 */ 

export const createUser = async (req, res) => {
  
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "govtProof", maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {     
      return res.status(400).json({ error: err.message });
    }

    const {
      Username,
      Email,
      mobileNumber,
      Password,
      Role,
      enableLogin
    } = req.body;

    try {
      if (Password !== confirmPassword) {
        return res.status(401).send("Passwords do not match");
      }

      // Store files as binary data
      const profilePicture = req.files?.profilePicture?.[0]?.buffer || null;
      const govtProof = req.files?.govtProof?.[0]?.buffer || null;
 
      const newUser = new User({
        Username,
        Email,
        mobileNumber,
        Password,
        Role,
        profilePicture,
        govtProof,
        enableLogin
      });

      const result = await newUser.save();

      res.json({
        status: "Successfully Created",
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
        success: false
      });
    }
  });
};

/**
 * @description API endpoint to get a User
 * @method GET
 * @protected
 * @route /api/v1/getuser
 * @param {id} req.params
 */

export const getUser = async (req, res) => {
    const { id } = req.params

    try {

        const result = await User.find();

        res.json({
          status: "Successfully",
          statusCode: 200,
          error: null,
          success: true,
          result
        });
        
    } catch (error) {
        res.json({
          status: "Error",
          statusCode: 500,
          error: error.message,
          success: false,
          result
        });
    }
}




// Update User API
export const updateUser = async (req, res) => {
  upload.fields([
    { name: "profilePicture", maxCount: 1 },
    { name: "govtProof", maxCount: 1 },
  ])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { id } = req.params;
    const {
      Username,
      Email,
      mobileNumber,
      Password,
      Role,
      enableLogin
    } = req.body;

    try {
      const profilePicture = req.files?.profilePicture?.[0]?.buffer || null;
      const govtProof = req.files?.govtProof?.[0]?.buffer || null;

      await User.findByIdAndUpdate(id, {
        Username,
        Email,
        mobileNumber,
        Password, 
        Role,
        profilePicture,
        govtProof,
        enableLogin
      });

      const result = await User.findById(id);

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
      });
    }
  });
};

/**
 * @description API endpoint to delete a User
 * @method Delete
 * @protected
 * @route /api/v1/deleteuser
 * @param { id } req.params
 */
export const deleteuser = async (req, res) => {
    const { id } = req.params

    try {

        const result = await User.findByIdAndDelete(id);

        res.json({
          status: "Deleted Successfully",
          statusCode: 200,
          error: null,
          success: true,
          result
        });
        
    } catch (error) {
        res.json({
          status: "Error",
          statusCode: 500,
          error: error.message,
          success: false,
          result
        });
    }
}
 


