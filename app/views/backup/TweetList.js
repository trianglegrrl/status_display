/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Tweet model and view
*/

Ext.regModel('Tweet', {
    fields: ['id', 'text', 'to_user_id', 'from_user', 'created_at', 'profile_image_url']
});

FutureMed.views.TweetList = Ext.extend(Ext.Panel, {
    hashtag: '#futuremed',
    layout: 'fit',
    initComponent: function(){
        
        this.list = new Ext.List({
            grouped: true,
            itemTpl: new Ext.XTemplate('<div class="avatar"<tpl if="profile_image_url"> style="background-image: url({profile_image_url})"</tpl>></div> <div class="tweet"><strong>{from_user}</strong><tpl if="to_user"> &raquo; {to_user}</tpl><br />{text:this.linkify}</div>', {
                linkify: function(value) {
                    return value.replace(/(http:\/\/[^\s]*)/g, "<span class=\"link\" href=\"$1\">$1</span>");
                }
            }),
            loadingText: false,
            store: new Ext.data.Store({
                model: 'Tweet',
                getGroupString : function(record) {
                    return 'Twitter';
                },
                proxy: {
                    type: 'scripttag',
                    url : 'http://search.twitter.com/search.json',
                    reader: {
                        type: 'json',
                        root: 'results'
                    }
                }
            })
        });
        
        this.listpanel = new Ext.Panel({
            items: this.list,
            layout: 'fit'
        });
        
        this.items = this.listpanel;
        
        this.list.on('selectionchange', this.onSelect, this);
        
        this.list.on('afterrender', this.loadStore, this);
        
        FutureMed.views.TweetList.superclass.initComponent.call(this);
    },
    
    onSelect: function(sel, records){
        if (records[0]) {
            Ext.Msg.confirm('External Link', 'Open tweet in Twitter?', function(res){
                if (res == 'yes') {
                    window.location = 'http://twitter.com/' + records[0].data.from_user + '/status/' + records[0].data.id
                }                
            }, this);
        }
    },
    
    loadStore: function(){
        
        this.list.store.load({
            params: {
                q: this.hashtag
            }
        });
        
    }
});

