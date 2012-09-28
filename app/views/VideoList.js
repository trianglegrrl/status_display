/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: video list page
*/
FutureMed.views.VideoList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {
        
        this.list = new Ext.List({
            itemTpl: '<div class="avatar"<tpl if="photo"> style="background-image: url({photo})"</tpl>></div>'+
                '<span class="title"><strong class="header">{title}</strong></span>',
            loadingText: false,
            store: FutureMed.stores.Video
        });        
        
        this.listpanel = new Ext.Panel({
            items: this.list,
            layout: 'fit'
        });
        
        this.items = this.listpanel;
        
        this.list.on('selectionchange', this.onSelect, this);
        
        FutureMed.views.VideoList.superclass.initComponent.call(this);
    },
    onSelect: function(selectionmodel, records){
        if (records[0] !== undefined) {
            
            if(records[0].data.link !== null && records[0].data.link !== ""){
                Ext.Msg.confirm('External Link', 'Open External link?', function(res){
                    if (res == 'yes') {
                        window.location = records[0].data.link;
                    }
                }, this);
            }
            
        }
    }
});

