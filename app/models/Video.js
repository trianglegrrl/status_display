/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Video model and store
*/

Ext.regModel('Video', {
    fields: ['title', 'link', 'photo']
});

FutureMed.stores.Video = new Ext.data.Store({
    model: 'Video',
    data: [{
        "title": "Tim OReilly at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Tim",
        "photo":"images/videos/video-01.png"
    },{
        "title": "Dr. Astro Teller at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Astro",
        "photo":"images/videos/video-02.png"
    },{
        "title": "Dan Barry MD PhD at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Dan",
        "photo":"images/videos/video-03.png"
    },{
        "title": "Eythor Bender at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Eythor",
        "photo":"images/videos/video-04.png"
    },{
        "title": "Thomas Goetz at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Thomas",
        "photo":"images/videos/video-05.png"
    },{
        "title": "Roni Zeiger, MD at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Roni",
        "photo":"images/videos/video-06.png"
    },{
        "title": "Michael Gillam, MD at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Michael",
        "photo":"images/videos/video-07.png"
    },{
        "title": "Andrew Hessel at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Andrew",
        "photo":"images/videos/video-08.png"
    },{
        "title": "FutureMed Executive Director Daniel Kraft, MD", 
        "link":"http://futuremed2020.com/videos/#Daniel",
        "photo":"images/videos/video-09.png"
    },{
        "title": "Lucien Engelen at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Lucien",
        "photo":"images/videos/video-10.png"
    },{
        "title": "Todd Brinton, MD at FutureMed", 
        "link":"http://futuremed2020.com/videos/#Todd",
        "photo":"images/videos/video-11.png"
    },{
        "title": "What is the Future of Medicine?", 
        "link":"http://futuremed2020.com/videos/#Future",
        "photo":"images/videos/video-11.png"
    }]

});