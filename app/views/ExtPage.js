/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Tweet model and view
*/

FutureMed.views.ExtPage = Ext.extend(Ext.Panel, {
    scroll: 'both',
    styleHtmlContent: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
            
        Ext.Ajax.request({
            url: this.url,
            success: function(rs){
                this.update(rs.responseText);
            },
            scope: this
        });
    
        FutureMed.views.ExtPage.superclass.initComponent.call(this);
    }
});