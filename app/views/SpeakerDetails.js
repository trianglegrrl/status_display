/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Speaker details page
*/

FutureMed.views.SpeakerDetails = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
        
        this.items = [{
            styleHtmlContent: true,
            tpl: new Ext.XTemplate( '<div class="details"><div class="avatarBig"><img <tpl if="photo"> src="{photo}"</tpl> /></div>'
                +'<span class="title"><strong class="headerDetail">{firstName} {lastName}</strong> <div>{designation}</div></span></div>'
                +'<div class="bio">{details}</div>'),
            data: this.record.data
        }];
    
        FutureMed.views.SpeakerDetails.superclass.initComponent.call(this);
    }
});