sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init: function () {
			// create
			var oMockServer = new MockServer({
				rootUri: "https://services.odata.org/V2/Northwind/Northwind.svc/"
			}); 
			var oUriParameters = jQuery.sap.getUriParameters();
			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUriParameters.get("serverDelay") || 600 /*1000 */
			});
			// simulate
			var sPath = jQuery.sap.getModulePath("Well.localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");
			// start
			oMockServer.start();
		}
	};
});