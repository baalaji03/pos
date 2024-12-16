import Printer from "../model/printerModel.js";

// post(printer)

export const createPrinter = async (req, res) => {
  try {
    const { Title, character, printerType, shareName, printerPort } = req.body;
    const create = new Printer({
      Title,
      character,
      printerType,
      shareName,
      printerPort,
    });

    const result = await create.save();

    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {}
};

// get(printer)
export const getPrinter = async (req, res) => {
  try {
    const result = await Printer.find();

    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

//Update (printer)
export const updatePrinter = async (req, res) => {
  try {
    const { id } = req.params;
    const { Title, character, printerType, shareName, printerPort } = req.body;

    const result = await Printer.findByIdAndUpdate(
      id ,
      { Title, character, printerType, shareName, printerPort }
      
    );
    res.json({
      status: "Success",
      statucCode: 200,
      error: null,
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

// delete(printer)

export const deletePrinter = async (req, res) => {
    try {
        const { id } = req.params
        const result = await Printer.findByIdAndDelete(id )
        
        res.json({
          status: "deleted Success",
          statucCode: 200,
          error: null,
          success: true,
          result,
        });


    } catch (error) {
        console.log(error);
        
        
    }
}

//getbyID(printer)

export const getprinterById = async (req, res) => {
  try {
    
    const { id } = req.params
    const result = await Printer.findById(id);
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
