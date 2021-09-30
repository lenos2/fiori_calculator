sap.ui.define(
  ["zw/co/appsareus/fioricalculator/controller/Base.controller"],
  function (Base) {
    "use strict";
    return Base.extend("zw.co.appsareus.fioricalculator.controller.NotFound", {
      onInit: function () {
        var oRouter, oTarget;

        oRouter = this.getRouter();
        oTarget = oRouter.getTarget("TargetNotFound");
        oTarget.attachDisplay(function (oEvent) {
          this._oData = oEvent.getParameter("data"); // store the data
        }, this);
      },
      // override the parent's onNavBack (inherited from BaseController)
      onNavBack: function () {
        // in some cases we could display a certain target when the back button is pressed
        if (this._oData && this._oData.fromTarget) {
          this.getRouter().getTargets().display(this._oData.fromTarget);
          delete this._oData.fromTarget;
          return;
        }

        // call the parent's onNavBack
        Base.prototype.onNavBack.apply(this, arguments);
      },
    });
  }
);
