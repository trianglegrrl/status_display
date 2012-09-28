/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Schedule model and store
 */

Ext.regModel('Schedule', {
    fields: ['eventName', 'day', 'startTime', 'endTime', 'venue', 'mainEvent','speaker']
});

FutureMed.stores.Schedule = new Ext.data.Store({
    model: 'Schedule',
    getGroupString : function(record) {
        return record.get('mainEvent');
    },
    autoLoad: true,    
    proxy: {
        type: 'ajax',
        url: 'schedule.json',
        reader: {
            type: 'json'
        }
    }

});