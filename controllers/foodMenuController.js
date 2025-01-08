import foodMenu from "../model/foodMenuModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const uuidNo = uuidv4();

/**
 * @description API endpoint to create a new foodMenu
 * @protected
 * @route /api/v1/createfoodmenu
 * @param {foodMenuType,name,code,category,dineIn,takeAway,description,ingredientConsumption,photo,CGST,SGST,IGST,VAT,royaltyPoints,vegetarian,Beverage} req.body
 */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadFolder = path.resolve("uploads", uuidNo);
    if (!fs.existsSync(uploadFolder)) {
      fs.mkdirSync(uploadFolder, { recursive: true });
    }
    cb(null, uploadFolder);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });   

export const createFoodMenu = async (req, res) => {
  upload.fields([{ name: "photo", maxCount: 1 }])(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    try {
      const photo = req.files?.photo?.[0]?.path || null;

      const foodMenuData = {
        ...req.body,
        photo: photo,
      };

      const newFoodMenu = new foodMenu(foodMenuData);
      const result = await newFoodMenu.save();

      res.json({
        status: "Created Successfully",
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
  });
};

/**
 * @description API endpoint to get foodMenu
 * @protected
 * @route /api/v1/getfoodmenu
 * @param { id } req.param
 */

export const getFoodemenu = async (req, res) => {

  const { id } = req.params

  try {
    const result = await foodMenu
      .find()
      .populate("category", "Category")
    res.json({
      status: " Successfully",
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
 * @description API endpoint to update foodMenu
 * @protected
 * @route /api/v1/updatefoodmenu/:id
 * @param {id} req.params
 */

export const updatefoodmenu = async (req, res) => {
  
  const { id } = req.params

  try {

     await foodMenu.updateOne({ _id: id }, req.body);

    const result = await foodMenu.findById({ _id: id });

    res.json({
      status: "Updated Successfully",
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

/**
 * @description API endpoint to delete a foodMenu
 * @protected
 * @route /api/v1/deletefoodmenu/:id
 * @param { id }  req.params
 */

export const deleteFoodMenu = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await foodMenu.deleteOne({ _id: id });

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
