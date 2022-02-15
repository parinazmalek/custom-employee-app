sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	'sap/ui/model/Sorter',
	'sap/m/MessageBox',
    "../model/formatter"
], function (Controller, Filter, FilterOperator, Sorter, MessageBox,formatter) {
	"use strict";

        return Controller.extend("ca.deloitte.hr.employeemanagement.controller.EmployeeList", {
            formatter: formatter,

            onInit: function () {
                this.oView = this.getView();
                this._bDescendingSort = false;
                this.oEmoloyeeTable = this.oView.byId("employeeTable");
            },
    
            onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");
    
                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = [new Filter("FirstName", FilterOperator.Contains, sQuery)];
                }
    
                this.oEmoloyeeTable.getBinding("items").filter(oTableSearchState, "Application");
            },
    
            onAdd: function () {
                MessageBox.information("This functionality is not ready yet.", {title: "Aw, Snap!"});
            },
    
            onSort: function () {
                this._bDescendingSort = !this._bDescendingSort;
                var oBinding = this.oEmoloyeeTable.getBinding("items"),
                    oSorter = new Sorter("FirstName", this._bDescendingSort);
    
                oBinding.sort(oSorter);
            }
        });
    });