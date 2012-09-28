/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Tweet model and view
*/

Ext.regModel('Tweet', {
    fields: ['id', 'text', 'to_user_id', 'from_user', 'created_at', 'profile_image_url']
});

FutureMed.views.TweetList = Ext.extend(Ext.TabPanel, {
    hashtag: '#futuremed',
    handle: '@futuremedtech',
    layout: 'fit',
    tabBar: {
        layout: {
            pack : 'center',
            align: 'center'
        },
        dock: 'bottom',
        height: '46px',
        defaults: {
            xtype: 'button',
            cls:'tabs',
            flex: 1
        }
    },
    initComponent: function(){
        
        this.listTag = new Ext.List({
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
        
        this.listHandle = new Ext.List({
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
                
        this.items = [
        {
            title: this.hashtag,            
            layout: 'fit',
            items: this.listTag
        },
        {
            title: this.handle,
            layout: 'fit',
            items: this.listHandle
        }
        ];
        
        this.listTag.on('selectionchange', this.onSelect, this);
        this.listHandle.on('selectionchange', this.onSelect, this);
        
        this.listTag.on('afterrender', this.loadTag, this);
        this.listHandle.on('afterrender', this.loadHandle, this);
        
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
    
    loadTag: function(){
        
        this.listTag.store.load({
            params: {
                q: this.hashtag
            }
        });
        
    },
    
    loadHandle: function(){
        
        this.listHandle.store.load({
            params: {
                q: this.handle
            }
        });
        
    }
});

