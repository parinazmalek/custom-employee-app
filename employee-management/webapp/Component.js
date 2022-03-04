sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "ca/deloitte/hr/employeemanagement/model/models",
    'sap/f/library',
    'sap/ui/model/json/JSONModel'

],
    function (UIComponent, Device, models, fioriLibrary, JSONModel) {
        "use strict";

        return UIComponent.extend("ca.deloitte.hr.employeemanagement.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                var oRouter;

                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                oRouter = this.getRouter();
                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
                oRouter.initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },

            _onBeforeRouteMatched: function (oEvent) {
                var oModel = this.getModel(),
                    sLayout = oEvent.getParameters().arguments.layout;

                // If there is no layout parameter, set a default layout (normally OneColumn)
                if (!sLayout) {
                    sLayout = fioriLibrary.LayoutType.OneColumn;
                }

                oModel.setProperty("/layout", sLayout);
            }
        });
    }
);