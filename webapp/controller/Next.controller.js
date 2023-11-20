sap.ui.define(
  ["sap/ui/core/mvc/Controller"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.ibm.sampleapp.controller.Next", {
      onInit: function () {},
      onPressNext: function () {
        var oRouter = this.getRouter();
        oRouter.navTo("RouteMain", true);
      },
      getRouter: function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
      },
    });
  }
);
