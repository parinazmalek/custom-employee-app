/*global QUnit*/

sap.ui.define([
	"cadeloittehr/employee-management/controller/S2-EmployeeList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("S2-EmployeeList Controller");

	QUnit.test("I should test the EmployeeList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
