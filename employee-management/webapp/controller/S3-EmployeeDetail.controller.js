sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ca.deloitte.hr.employeemanagement.controller.S3-EmployeeDetail", {
        onInit: function () {
            var oOwnerComponent = this.getOwnerComponent();

            this.oRouter = oOwnerComponent.getRouter();
            this.oModel = oOwnerComponent.getModel();

            this.oRouter.getRoute("List").attachPatternMatched(this._onEmployeeMatched, this);
            this.oRouter.getRoute("Detail").attachPatternMatched(this._onEmployeeMatched, this);
        },

        _onEmployeeMatched: function (oEvent) {
            this._employee = oEvent.getParameter("arguments").employee || this._employee || "0";
            this.getView().bindElement({
                path: "/Employees/" + this._employee
            });
        },


        onExit: function () {
            this.oRouter.getRoute("List").detachPatternMatched(this._onEmployeeMatched, this);
            this.oRouter.getRoute("Detail").detachPatternMatched(this._onEmployeeMatched, this);
        }
    });
});