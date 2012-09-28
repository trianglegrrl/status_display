/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Initialization of the Application
*/

Ext.ns('FutureMed', 'FutureMed.views', 'FutureMed.cache', 'FutureMed.stores');

Ext.setup({
    statusBarStyle: 'black',
    phoneStartupScreen : 'images/phone_splash.png',
    phoneIcon : 'images/icon_1.png',
    glossOnIcon : false,
    onReady: function() {
        var app = new FutureMed.App();
    }
});