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
    const result = await newRole.save( );

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

/**
 * @description API endpoint to get role and permission
 * @method GET
 * @protected
 * @route /api/v1/getrolepermission
 * @param {role_name, description, permissions} req.body
 **/
  
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

/**
 * @description API endpoint to update role and permission
 * @method PUT
 * @protected
 * @route /api/v1/updaterolepermission
 * @param { id } req.params
 * @param {role_name, description, permissions} req.body
 **/

export const updateRolePermission = async (req, res) => {
  const { id } = req.params
  const { role_name, description, permissions } = req.body
  try {
     
    await Role.findByIdAndUpdate(id, { role_name, description, permissions });

    const result = await Role.findById(id)

    res.json({
      status: "Updated Successfully",
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
       result: null
     });
   }
}

/**
 * @description API endpoint to delete role and permission
 * @method delete
 * @protected
 * @route /api/v1/deleterolepermission
 * @param { id } req.params
 **/

export const deleterolepermission = async (req, res) => {
  const { id } = req.params 
  try {
    const result = await Role.findByIdAndDelete(id)
     res.json({
       status: "Deleted Successfully",
       statusCode: 201,
       error: null,
       success: true,
       result,
     });

  } catch (error) {
    res.json({
      
       status: "Error",
       statusCode: 500,
       error: error.message,
       success: false,
       result: null
    })
  }
}