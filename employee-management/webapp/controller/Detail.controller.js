sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("ca.deloitte.hr.employeemanagement.controller.Detail", {
        onInit: function () {
            var oOwnerComponent = this.getOwnerComponent();

            this.oRouter = oOwnerComponent.getRouter();
            this.oModel = oOwnerComponent.getModel();

            this.oRouter.getRoute("EmployeeList").attachPatternMatched(this._onEmployeeMatched, this);
            this.oRouter.getRoute("detail").attachPatternMatched(this._onEmployeeMatched, this);
        },

        _onEmployeeMatched: function (oEvent) {
            this._employee = oEvent.getParameter("arguments").employee || this._employee || "0";
            this.getView().bindElement({
                path: "/Employees/" + this._employee
            });
        },


        onExit: function () {
            this.oRouter.getRoute("EmployeeList").detachPatternMatched(this._onEmployeeMatched, this);
            this.oRouter.getRoute("detail").detachPatternMatched(this._onEmployeeMatched, this);
        }
    });
});