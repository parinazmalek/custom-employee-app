sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    'sap/ui/model/Sorter',
    'sap/m/MessageBox',
    "../model/formatter"
], function (Controller, Filter, Sorter, MessageBox, formatter) {
    "use strict";

    return Controller.extend("ca.deloitte.hr.employeemanagement.controller.EmployeeList", {
        formatter: formatter,

        onInit: function () {
            this.oView = this.getView();
            this._bDescendingSort = false;
            this.oEmoloyeeTable = this.oView.byId("employeeTable");
        },

        onSearch: function (oEvent) {
            var aFilter = [];
            var aFilterSnappedText = [];
            var oView = this.getView();

            var filterName = oView.byId("filter_name").getValue();
            if (filterName) {
                aFilter.push(new Filter({
                    path: "FirstName",
                    operator: "Contains",
                    value1: filterName
                }));
                aFilterSnappedText.push("name");
            }

            var filterNumber = oView.byId("filter_employeeNumber").getValue();
            if (filterNumber) {
                aFilter.push(new Filter({
                    path: "EmployeeNumber",
                    operator: "Contains",
                    value1: filterNumber
                }));
                aFilterSnappedText.push("number");

            }

            this.oEmoloyeeTable.getBinding("items").filter(aFilter, "Application");
            this.getView().getModel("employeeModel").setProperty("/filterSnappedText",aFilterSnappedText.join(", "))
        },

        onAdd: function () {
            MessageBox.information("This functionality is not ready yet.", { title: "Aw, Snap!" });
        },

        onSort: function () {
            this._bDescendingSort = !this._bDescendingSort;
            var oBinding = this.oEmoloyeeTable.getBinding("items"),
                oSorter = new Sorter("FirstName", this._bDescendingSort);

            oBinding.sort(oSorter);
        },


        onClear: function (oEvent) {
            oEvent.getParameters().selectionSet.forEach(control => {
                control.setValue("");
            });
            this.oEmoloyeeTable.getBinding("items").filter([], "Application");
        }
    });
});