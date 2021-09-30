/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zwco.appsareus./fiori_calculator/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
