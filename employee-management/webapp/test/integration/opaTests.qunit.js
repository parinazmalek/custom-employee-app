/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["ca/deloitte/hr/employeemanagement/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
