/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Home page
*/

FutureMed.views.Home = Ext.extend(Ext.Panel, {
//    scroll: 'vertical',
    cls: 'panel-bg',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'stretch'
    },
    defaults: {
        layout: {
            type: 'hbox'
        },
        flex: 1
    },
    
    initComponent: function() {
        
        this.panel1 = new Ext.Panel({            
            layout: {
                type: 'hbox'                
            },
            flex: 1,
            items: [{
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'schedule',
                    handler: this.onClick,
                    cls: 'iconSize schedule'
                }]
            },
            {
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'faculty',
                    handler: this.onClick,
                    cls: 'iconSize faculties'
                }]
            },
            {
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },
                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'participants',
                    handler: this.onClick,
                    cls: 'iconSize participants'
                }]
            }
            ]
        });
        
        this.panel2 = new Ext.Panel({
            layout: {
                type: 'hbox'                
            },
            flex: 1,
            items: [{
//                xtype: 'panel', 
//                flex: 1,
//                layout: {
//                    type: 'hbox',
//                    pack: 'center'             
//                },                
//                items:[{
//                    xtype: 'button',
//                    text: '', 
//                    id: 'feedBack',
//                    handler: this.onClick,
//                    cls: 'iconSize feedBack'
//                }]
            },
            {
            },
            {
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'about',
                    handler: this.onClick,
                    cls: 'iconSize about'
                }]
            }
            ]
        });
        
        this.panel3 = new Ext.Panel({
            layout: {
                type: 'hbox'                
            },
            flex: 1,
            items: [{
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'social',
                    handler: this.onClick,
                    cls: 'iconSize social'
                }]
            },
            {
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'tracks',
                    handler: this.onClick,
                    cls: 'iconSize tracks'
                }]
            },
            {
                xtype: 'panel', 
                flex: 1,
                layout: {
                    type: 'hbox',
                    pack: 'center'             
                },
                
                items:[{
                    xtype: 'button',
                    text: '', 
                    id: 'videos',
                    handler: this.onClick,
                    cls: 'iconSize videos'
                }]
            }
            ]
        });
        
        
        
        this.items = [this.panel1, this.panel2, this.panel3];
        FutureMed.views.Home.superclass.initComponent.call(this);
    },
    
    onClick:function(button,event){
        var main = Ext.getCmp('mainPanel');
        var anim = Ext.is.Android ? false : 'slide';
        var temp;
        
        if(button.id == 'schedule'){
            temp = new FutureMed.views.ScheduleList();
             
        }else if(button.id == 'faculty'){
            temp = new FutureMed.views.SpeakerList();
            
        }else if(button.id == 'participants'){
            temp = new FutureMed.views.ParticipantList();
            
        }else if(button.id == 'about'){
           temp = new FutureMed.views.ExtPage({
             url: 'about.htm'   
            });
            
        }else if(button.id == 'feedBack'){
            Ext.Msg.confirm('External Link', 'Open External link?', function(res){
                    if (res == 'yes') {
                        window.location = "http://google.com";
                    }
                }, this);
            
        }else if(button.id == 'social'){
            temp = new FutureMed.views.TweetList();
            
        }else if(button.id == 'tracks'){
            temp = new FutureMed.views.ExtPage({
             url: 'tracks.htm'   
            });
            
        }else if(button.id == 'videos'){
            temp = new FutureMed.views.VideoList();            
        }
        
        if(temp){
            main.setActiveItem(temp, anim);
            main.backButton.show();
        }
        
    }
    
});
