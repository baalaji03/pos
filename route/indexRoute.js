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

export default Router;
 