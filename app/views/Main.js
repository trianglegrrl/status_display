/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Main panel for holding different views
*/

FutureMed.App = Ext.extend(Ext.Panel, {
    id: 'mainPanel',
    fullscreen: true,
    layout: 'card',
    activeItem: 0,
        
    initComponent: function() {

        this.Home = new FutureMed.views.Home();
        
        this.backButton = new Ext.Button({
            text: 'back',
            ui: 'back',
            handler: this.onUiBack,
            hidden: true,
            scope: this
        });
        
        this.toolbar = new Ext.Toolbar({
            title: '<div><img class="floatLeft" src="images/icons/icon-header.png"><div class="floatTop">FutureMed</div></div>',
            dock: 'top',
            items: [this.backButton]
        });
        
        this.dockedItems = [this.toolbar];
        
        this.items = [this.Home];
        
        FutureMed.App.superclass.initComponent.call(this);
    },
    
    onUiBack: function(button, event){
        var items = this.items;
        var item = items.get(items.length - 1);
        if(item){
            item.destroy();
        }
        this.setActiveItem(items.length - 1, {
            type: 'slide',
            reverse: true
        });
        if(items.length == 1){
            this.backButton.hide();
        }
        
    }
});
