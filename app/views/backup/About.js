/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: About page
*/

FutureMed.views.About = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
        
        this.items = [{
            styleHtmlContent: true,
            html: '<div id="title-container"><h1 class="title col-full">About FutureMed</h1></div>'+
        '<div class="entry">'+
        '<h4><em><strong>Exploring and driving the future of medicine through exponential, game changing technologies.</strong></em></h4>'+
        '<p><strong><a href="http://futuremed2020.com/apply" >Apply Here for The Next FutureMed:  February 6-11, 2012</a> </strong></p>'+
        '<p>How will rapidly developing technologies such as low cost genomic sequencing, artificial intelligence, telemedicine, robotics, 24/7 body wearable monitors, smart pills, stem cells, synthetic biology, gene therapy, mobile phone apps and crowd sourced health data affect the future of healthcare and medicine?</p>'+
        '<p><a href="http://futuremed2020.com//wp-content/uploads/2011/02/FutureMed-Scrubs.png" ><img class="alignright size-full wp-image-3224" style="float:right" title="FutureMed-Scrubs" src="http://futuremed2020.com//wp-content/uploads/2011/02/FutureMed-Scrubs.png" alt="" width="300" height="199" /></a>FutureMed at <a href="http://futuremed2020.com/singularity-university/" >Singularity University</a> is held on the NASA Research Park in the heart of Silicon Valley. The inaugural FutureMed was held in May, 2011.  <a href="http://futuremed2020.com/experience/" >Click here for some summaries and take aways</a> from FutureMed 2011.</p>'+
        '<p>FutureMed educates, informs and prepares physicians, innovators, inventors, investors and senior healthcare executives to understand and recognize the opportunities and disruptive influences of exponentially growing technologies within medicine and healthcare, and to understand how many rapidly developing and converging fields affect the future of wellness, prevention, clinical practice and the biomedical industry.</p>'+
        '<div class="twocol-one"><strong>F</strong><strong>or an overview of FutureMed, watch Executive Director Daniel Kraft, MD’s latest TEDTalk about the Future of Health and Medicine. The FutureMed program will be doing a deep dive into many of the themes and technologies touched upon in this brief talk.</strong><div class="woo-sc-divider"></div>FutureMed brings together  leading thinkers and practitioners who will describe what is in the lab and early clinical trials today and what is likely coming to market in the next 2 to 10 years.  FutureMed focuses on breakthrough development ranging from 3D printing to organ regeneration, from point-of-care lab-on-a-chip diagnostics to large-scale bioinformatics; from synthetic biology to new gene based therapies.  All of these and more are discussed in the context of the current explosions of digital information and distributed healthcare.</p>'+
        '<p>Through a series of <a href="http://futuremed2020.com/faculty" >faculty speakers</a>, panels, hands on experiences, demos and site visits and in-depth, late night discussions,  participants will complete this intensive 5-day program with new relationships, business concepts, insights, and opportunities for collaborations that can transform their practice or  company.</p>'+
        '<p>Participants will live on-site at NASA and have the opportunity for one-on-one interaction with many of the 60 <a href="http://futuremed2020.com/faculty" >World Class Faculty</a>.</p>'+
        '<p>Spaces are extremely limited. FutureMed 2011 sold out.</div>'
        }];
    
        FutureMed.views.About.superclass.initComponent.call(this);
    }
});