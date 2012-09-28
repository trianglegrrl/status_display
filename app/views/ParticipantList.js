/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Speaker list page
*/

FutureMed.views.ParticipantList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {
        
        this.list = new Ext.List({
            grouped: true,
            itemTpl: '<div class="avatar"<tpl if="photo"> style="background-image: url({photo})"</tpl>></div>'+
                '<span class="title"><strong class="header">{firstName} {lastName}</strong></span>',
            loadingText: false,
            store: FutureMed.stores.Participants
        });
        
        this.list.on('selectionchange', this.onSelect, this);
        
        this.listpanel = new Ext.Panel({
            items: this.list,
            layout: 'fit'
        });
        
        this.items = this.listpanel;
        
        FutureMed.views.ParticipantList.superclass.initComponent.call(this);
    },
    
    onSelect: function(selectionmodel, records){
        if (records[0] !== undefined) {
            
            if(records[0].data.details !== null && records[0].data.details !== ""){
                var SpeakerDetails = new FutureMed.views.SpeakerDetails({
                    record: records[0]
                });
            
                this.ownerCt.setActiveItem(SpeakerDetails, 'slide');
            }else{
                Ext.Msg.alert( "FutureMed", "No details found.", function(res){}, this );
            }
            
        }
    }
});