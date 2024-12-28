// POST(category)

import Category from "../model/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { category, desc, addedBy } = req.body;

    const newCategory = new Category({ category, desc, addedBy });
    const result = await newCategory.save();
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result
    });
  } catch (error) {
    console.log(error);
  }
};

// get(category)

export const getCategory = async (req, res) => {
    try {
        const result = await Category.find();
        res.json({
          status: "Success",
          statucCode: 200,
          error: null,
          success: true,
          result
        });
        
    } catch (error) {
        console.log(error);
        
        
    }
}

// // update(category)
export const updateCategory = async (req, res) => {
    try {
        
        const { id } = req.params
        const { category, desc, addedBy } = req.body 
         
        const result = await Category.findByIdAndUpdate(id, {
          Category,
          desc,
          addedBy
        });
        res.json({
          status: "Success",
          statucCode: 200,
          error: null,
          success: true,
          result
        });

    } catch (error) {
        console.log(error);
        
    }
}

//delete(category)

export const deleteCategory = async (req, res) => {
    try {
        
        const { id } = req.params
        const result = await Category.findByIdAndDelete(id)

        res.json({
          status: "deleted Successfully",
          statucCode: 200,
          error: null,
          success: true,
          result
        });
         

    } catch (error) {
        console.log(error);
        
    }
}

//getbyID(category)

export const getcategoryById = async (req, res) => {
  try {
    
    const { id } = req.params
    const result = await Category.findById(id)
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    
    console.log(error)
  }
}
