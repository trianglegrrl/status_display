/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Speaker list page
*/

FutureMed.views.SpeakerList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {
        
        this.list = new Ext.List({
            grouped: true,
            itemTpl: '<div class="avatar"<tpl if="photo"> style="background-image: url({photo})"</tpl>></div>'+
                '<span class="title"><strong class="header">{firstName} {lastName}</strong> <div>{designation}</div></span>',
            loadingText: false,
            store: FutureMed.stores.Name
        });
        
        this.list.on('selectionchange', this.onSelect, this);
        
        this.listpanel = new Ext.Panel({
            items: this.list,
            layout: 'fit'
        });
        
        this.items = this.listpanel;
        
        FutureMed.views.SpeakerList.superclass.initComponent.call(this);
    },
    
    onSelect: function(selectionmodel, records){
        if (records[0] !== undefined) {
            
            if(records[0].data.link !== null && records[0].data.link !== ""){
                Ext.Msg.confirm('External Link', 'Open External link?', function(res){
                    if (res == 'yes') {
                        window.location = records[0].data.link;
                    }
                }, this);
            }else{
                var SpeakerDetails = new FutureMed.views.SpeakerDetails({
                    record: records[0]
                });
            
                this.ownerCt.setActiveItem(SpeakerDetails, 'slide');
            }
            
        }
    }
});