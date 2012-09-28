/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Schedule list page
*/

FutureMed.views.ScheduleList = Ext.extend(Ext.Panel, {
    layout: 'card',
    initComponent: function() {
        
        this.list = new Ext.List({
            grouped: true,
            itemTpl: '<span class="title">'+
                '<strong class="header">{eventName}</strong>'+
                '<div class="subHeading">{startTime} - {endTime}</div>'+
                '<tpl if="speaker"><div class="subHeading">Speaker - {speaker}</div></tpl>'+
                '<div class="subHeading">{venue}</div></span>',
            loadingText: false,
            store: FutureMed.stores.Schedule
        });
        
        
        this.listpanel = new Ext.Panel({
            items: this.list,
            layout: 'fit'
        });
        
        this.dateButtons = new Ext.SegmentedButton({
            items: [{
                text: 'Mon', 
                id: 'monday',
                pressed: true
            },{
                text: 'Tue', 
                id: 'tuesday'
            },
            {
                text: 'Wed', 
                id: 'wednesday'
            },
            {
                text: 'Thu', 
                id: 'thursday'
            },
            {
                text: 'Fri', 
                id: 'friday'
            },
            {
                text: 'Sat', 
                id: 'saturday'
            }
            ],
            defaults: {
                flex: 1
            },
            style: 'width: 100%'
        });
        
        this.dateButtons.on('toggle', this.onToggle, this);
            
        this.listpanel.addDocked({
            xtype: 'toolbar',
            ui: 'gray',
            items: this.dateButtons,
            layout: {
                pack: 'center'
            }
        });
        
        this.items = this.listpanel;
        
        this.changeList('monday');
        
        FutureMed.views.ScheduleList.superclass.initComponent.call(this);
    },
    
    onToggle: function(container, button, pressed){
        
        if(pressed){
            this.changeList(button.id);            
        }        
    },
    
    changeList: function(filter){
        
        this.list.store.clearFilter();
        this.list.store.filter('day', filter);
        if(this.list.scroller)
            this.list.scroller.scrollTo({
                y: 0
            }, false);
    }
});