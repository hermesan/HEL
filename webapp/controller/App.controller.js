sap.ui.define([
      "sap/ui/core/mvc/Controller",
], function (Controller) {
      "use strict";

      return Controller.extend("Well.view.App", {      
                  
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}     
      });
});