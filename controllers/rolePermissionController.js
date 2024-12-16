import Role from "../model/rolePermissionModel.js";

/**
 * @description API endpoint to create a new role and permisssion
 * @method POST
 * @protected
 * @route /api/v1/tablerolepermission
 * @param {role_name, description, permissions} req.body
 **/
export const createRolePermissison = async (req, res) => {
    
    const { role_name, description, permissions } = req.body
    
 try {
       const newRole = new Role({ role_name, description, permissions });

       const result =await newRole.save();

       res.json({
         status: "Created Successfully",
         statucCode: 200,
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
