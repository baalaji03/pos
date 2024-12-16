// POST(category)

import category from "../model/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { Category, desc, addedBy } = req.body;

    const newCategory = new category({ Category, desc, addedBy });
    const result = newCategory.save();

    res.json({
      status: "Created Successfully",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get(category)

export const getCategory = async (req, res) => {
    try {
        const result = await category.find();
        res.json({
            message: "Success",
            result 
        })
        
    } catch (error) {
        console.log(error);
        
        
    }
}

// // update(category)
export const updateCategory = async (req, res) => {
    try {
        
        const { id } = req.params
        const { Category, desc, addedBy } = req.body 
         
        const result = await category.findByIdAndUpdate(id, {
          Category,
          desc,
          addedBy
        });
        res.json({
          status: 200,
          message: "Updated",
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
        const result = await category.findByIdAndDelete(id)

        res.json({
          status: "delelted Successfull",
          statucCode: 200,
          error: null,
            success: true,
          result
        });
         

    } catch (error) {
        console.log(error);
        
    }
}

// elete(category)
