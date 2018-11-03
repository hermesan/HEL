sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "Well/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
    "use strict";
    return UIComponent.extend("Well.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model
            var oData = {
                recipient: {
                    name: "Spektral"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set dialog
            this._helloDialog = new HelloDialog(this.getRootControl());
        },

        exit: function () {
            //destroy function
            this._helloDialog.destroy();
            //free Webbrowser memory
            delete this._helloDialog;
        },

        openHelloDialog: function () {
            //Aufruf
            this._helloDialog.open();
        }    

    });
});