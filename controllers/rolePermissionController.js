import Role from "../model/rolePermissionModel.js";

/**
 * @description API endpoint to create a new role and permission
 * @method POST
 * @protected
 * @route /api/v1/createrolepermission
 * @param {role_name, description, permissions} req.body
 **/
 const createRolePermission = async (req, res) => {
  const { role_name, description, permissions } = req.body;
   
  try {
    // Validate input fields
    if (!role_name || !description || !permissions) {
      return res.status(400).json({
        status: "Bad Request",
        statusCode: 400,
        error: "role_name, description, and permissions are required.",
        success: false,
        result: null,
      });
    }

    // Create new Role
    const newRole = new Role({ role_name, description, permissions });
    const result = await newRole.save();

    res.status(201).json({
      status: "Created Successfully",
      statusCode: 201,
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

export { createRolePermission };


export const getRolePermission = async (req, res) => {
  const { id } = req.params
  try {

    const result = await Role.find()

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