import Settings from "../model/settingsModel.js";


/**
 * @description API endpoint to create a new settings
 * @method POST
 * @protected
 * @route /api/v1/createsettings
 * @param {} req.body
 **/
export const createSettings = async (req, res) => {
    const {
        restaurantName,
        restaurantShortName,
        invoiceLogo,
        Website,
        dateFormat,
        currencySymbol,
        currencyPosition,
        Precision,
        decimalSeparator,
        thousandSeparator,
        clickingItemsOnPOS,
        defaultOrderType,
        defaultDeliveryPartner,
        defaultWaiter,
        defaultCustomer,
        defaultPaymentMethod,
        placeOrderToolTip,
        foodMenuToolTip,
        smsSentAuto,
        prePostPayment,
        serviceCharge,
        deliveryCharge,
        activeLoginButton,
        loginOption,
        loyaltyPoint,
        minimumLoyaltyPointRedeem,
        loyaltyPointRate,
        exportDailySales
    } = req.body;


    try {
    
        const newSettings = new Settings({
            restaurantName,
            restaurantShortName,
            invoiceLogo,
            Website,
            dateFormat,
            currencySymbol,
            currencyPosition,
            Precision,
            decimalSeparator,
            thousandSeparator,
            clickingItemsOnPOS,
            defaultOrderType,
            defaultDeliveryPartner,
            defaultWaiter,
            defaultCustomer,
            defaultPaymentMethod,
            placeOrderToolTip,
            foodMenuToolTip,
            smsSentAuto,
            prePostPayment,
            serviceCharge,
            deliveryCharge,
            activeLoginButton,
            loginOption,
            loyaltyPoint,
            minimumLoyaltyPointRedeem,
            loyaltyPointRate,
            exportDailySales,
        });

        const result = await newSettings.save();

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
            result: null
        });
    }
};

/**
 * @description API endpoint to get a  settings
 * @method GET
 * @protected
 * @route /api/v1/getsettings
 * @param {id} req.params
 **/

export const getsettings = async (req, res) => {
    const { id } = req.params;

    try {

        const result = await Settings.find();

        res.json({
            status: "Successfully",
            statusCode: 201,
            error: null,
            success: true,
            result
        })
        
    } catch (error) {
        res.json({
          status: "Error",
          statusCode: 500,
          error: error.message,
          success: false,
          result: null,
        });
    }
}

/**
 * @description API endpoint to update a  settings
 * @method PUT
 * @protected
 * @route /api/v1/updatesettings
 * @param {id} req.params
 * @param {} req.body
 **/

export const updatesettings = async (req, res) => {
    const { id } = req.params
    const {
      restaurantName,
      restaurantShortName,
      invoiceLogo,
      Website,
      dateFormat,
      currencySymbol,
      currencyPosition,
      Precision,
      decimalSeparator,
      thousandSeparator,
      clickingItemsOnPOS,
      defaultOrderType,
      defaultDeliveryPartner,
      defaultWaiter,
      defaultCustomer,
      defaultPaymentMethod,
      placeOrderToolTip,
      foodMenuToolTip,
      smsSentAuto,
      prePostPayment,
      serviceCharge,
      deliveryCharge,
      activeLoginButton,
      loginOption,
      loyaltyPoint,
      minimumLoyaltyPointRedeem,
      loyaltyPointRate,
      exportDailySales
    } = req.body;

    try {

        await Settings.findByIdAndUpdate(id, {
          restaurantName,
          restaurantShortName,
          invoiceLogo,
          Website,
          dateFormat,
          currencySymbol,
          currencyPosition,
          Precision,
          decimalSeparator,
          thousandSeparator,
          clickingItemsOnPOS,
          defaultOrderType,
          defaultDeliveryPartner,
          defaultWaiter,
          defaultCustomer,
          defaultPaymentMethod,
          placeOrderToolTip,
          foodMenuToolTip,
          smsSentAuto,
          prePostPayment,
          serviceCharge,
          deliveryCharge,
          activeLoginButton,
          loginOption,
          loyaltyPoint,
          minimumLoyaltyPointRedeem,
          loyaltyPointRate,
          exportDailySales,
        });

        const result = await Settings.findById(id)

        res.json({
          status: "Created Successfully",
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
           result: null,
         });
    }

}

/**
 * @description API endpoint to delete a  settings
 * @method delete
 * @protected
 * @route /api/v1/deletesettings
 * @param {id} req.param
 **/

export const deletesetting = async (req, res) => {
    const { id } = req.params
    
    try {

        const result = await Settings.findByIdAndDelete(id)

        res.json({
          status: "Delelted Successfully",
          statusCode: 201,
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
           result: null,
         });
    }
}