import express from "express"

import route from "./unitRoute.js";
import categoryRoute from "./categoryRoute.js";
import printerRoute from "./printerRoute.js";
import kitchenRoute from "./kitchenRoute.js";
import arearoute from "./areaFloorRoute.js";
import tableRoute from "./tableRoute.js";
import settingRoute from "./settingsRoute.js";
import counterRoute from "./settingCounterRoute.js";
import currencyRoute from "./settingCurrencyRoute.js";
import selfRoute from "./settingSelfRoute.js";
import paymentRoute from "./settingPaymentRoute.js";
import reservationRoute from "./settingReservationRoute.js";
import roleRoute from "./rolePermissionRoute.js";
import TaxRoute from "./settingTaxRoute.js";
import userRoute from "./userRoute.js";
import purchaseRoute from "./purchaseRoute.js";
import ingredientRouter from "./ingredientRoute.js";
import modifierRoute from "./modifierRoute.js";
import foodMenuCategoryRoute from "./foodMenuCategoryRoute.js";
import foodMenuRoute from "./foodMenuRoute.js";
import preFoodRoute from "./preFoodRoute.js";
import stockRoute from "./stockRoute.js";
import lowStockRoute from "./lowStockRoute.js";
import adjustStockRoute from "./adjustStockRoute.js";
import slowStockRoute from "./slowStockRoute.js";
import productionRoute from "./productionRoute.js";
import wasteRoute from "./wasteRoute.js";
import attendanceRoute from "./attendanceRoute.js";
import supplierRoute from "./supplierRoute.js";
import purchasesRoute from "./purchasePurchaseRoute.js";
import expenseItemRoute from "./expenseItemRoute.js";
import expenseRoute from "./expenseRoute.js";


const Router = express.Router();
 
Router.use("/unit", route);
Router.use("/category", categoryRoute);
Router.use("/printer", printerRoute);
Router.use("/kitchen", kitchenRoute);
Router.use("/area", arearoute);
Router.use("/table", tableRoute);
Router.use("/role", roleRoute);
Router.use("/settings", settingRoute);
Router.use("/counter", counterRoute);
Router.use("/currency", currencyRoute);
Router.use("/self", selfRoute);
Router.use("/tax", TaxRoute);
Router.use("/payment", paymentRoute);
Router.use("/reservation", reservationRoute);
Router.use("/user",userRoute)
Router.use("/purchase", purchaseRoute);
Router.use("/ingredient", ingredientRouter);
Router.use("/modifier", modifierRoute);
Router.use("/foodmenucategory", foodMenuCategoryRoute);
Router.use("/foodmenu", foodMenuRoute);
Router.use("/prefood", preFoodRoute);
Router.use("/stock", stockRoute);
Router.use("/lowstock", lowStockRoute);
Router.use("/adjuststock", adjustStockRoute);
Router.use("/slowstock", slowStockRoute);
Router.use("/production", productionRoute);
Router.use("/waste", wasteRoute);
Router.use("/attendance", attendanceRoute);
Router.use("/supplier", supplierRoute);
Router.use("/purchases", purchasesRoute);
Router.use("/expenseitem", expenseItemRoute);
Router.use("/expense", expenseRoute);


export default Router;

 