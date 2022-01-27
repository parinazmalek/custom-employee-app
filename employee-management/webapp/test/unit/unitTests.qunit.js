/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cadeloittehr/employee-management/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
