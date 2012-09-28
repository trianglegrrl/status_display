/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Participants page
*/

FutureMed.views.Quotes = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
        
        this.items = [{
            styleHtmlContent: true,
            html: '<div id="title-container"><h1 class="title col-full">Participant Quotes and Feedback</h1></div>'+
        '<div class="entry"><blockquote><div class="twocol-one">'+
        '<ul><li>Absolutely incredible. The best conference I&#8217;ve ever attended.</li></ul>'+
        '<ul><li>Intellectually invigorating + practical business benefits</li></ul>'+
        '<ul><li>A mind-opening voyage into the future with the people who are creating it.</li></ul>'+
        '<ul><li>Friendly, rich in content, thoughtfully planned and inspiring both personally and professionally</li></ul>'+
        '<ul><li>future·med [fyoo-cher-med]: 1.an awe-inspiring event featuring some of the world&#8217;s best and brightest. 2.great food for thought that will leave you begging for more. 3.a great way to connect and engage with those changing our world.</li></ul>'+
        '</div> </p>'+
        '<p>Participants and Faculty mixing it up at FutureMed 2011</div><br />'+
        '&nbsp;</p>'+
        '<ul><li>I wanted to thank you for your efforts in putting on the scientific and social event of the season.</li></ul>'+
        '<ul><li>It was a very intensive and eye-opening experience</li></ul>'+
        '<ul><li>If a word could be made to describe how much fun, learning and camaraderie took place, I would have to call it #FUTUREMED</li></ul>'+
        '<ul><li>It was one of a kind inspiring event that will have a long lasting effect on my life</li></ul>'+
        '<ul><li>Unbelievable!</li></ul>'+
        '<ul><li>Just loved everything about it.</li></ul>'+
        '<ul><li>When I arrived in US eight months ago, I thought that Stanford University would be absolutely the best for my professional growth. Now, I know that the five days of the FutureMed2011 has enriched so much my experience. I had the great opportunity to visit companies, make contacts and see different aspects of my field of research under a multidisciplinary point of view. This would be impossible for me without Singularity University.</li></ul>'+
        '<ul><li>Energized to hear that exponential technology can keep me healthy and alive for a long time!</li></ul>'+
        '<ul><li>The most amazing conference I&#8217;ve been to ever, and I go to a lot of conferences.</li></ul>'+
        '<ul><li>I knew the FutureMed Program was going to be fantastic, but in all honesty I did never thought it was going to be at the order of magnitude that was presented . . . it truly did justice to the &#8220;exponentiality&#8221; of the Program. You are a truthful master of Disruptive Programs!</li></ul>'+
        '<ul><li>FutureMed was the single most valuable thing I have done to increase my knowledge of the current and future state of healthcare and medicine which will prove invaluable to me both as an investor and a healthcare consumer. Count me in for next year!</li></ul>'+
        '<ul><li>It was mind-expanding stuff!</li></ul>'+
        '<ul><li>I am energized and and inspired by the university&#8217;s commitment to innovation and exponential growth. We had the right amount of time and people to engage deeply in the FutureMed content. Count me in for another EP in the near future, SU rocks!</li></ul>'+
        '<ul><li>The difficult takes time, the impossible just a bit longer.</li></ul>'+
        '<ul><li>These 5 days have been the most inspiring days in my life. Nothing to add.</li></ul>'+
        '<ul><li>The program attracted an exceptional faculty and class of students, and I feel privileged to have had the opportunity to participate in Singularity University&#8217;s FutureMed2011.</li></ul>'+
        '<ul><li>Best medical conference ever</li></ul>'+
        '<ul><li>Attending this confluence of thought giants was both illuminating and inspiring while being</li></ul>'+
        '<ul><li>Yet another exceptional program from SU. I think this beats TEDMED and TED. Here, we get to meet speakers and faculty, and very interesting participants, in an intimate environment, including the nightly wine sessions.</li></ul>'+
        '<ul><li>Learned that others are in fact doing the impossible and so should I</li></ul>'+
        '<ul><li>Grateful for the opportunity to have interacted with not one but several of the most brilliant minds I have ever interacted with. Not only faculty but attendees also.</li></ul>'+
        '<ul><li>Tremendously valuable review of state of the art thinking in multiple key disciplines defining the future of medicine</li></ul>'+
        '<ul><li>Mind-blowing</li></ul>'+
        '<ul><li>Inspired to innovate more, collaborate more and achieve more than I thought necessary or even possible before.</li></ul>'+
        '<ul><li>The Singularity University FutureMed executive program is a fun and fast-paced opportunity to refresh knowledge and connect with some of the best minds in emerging medical technology.</li></ul>'+
        '<ul><li>Incredible</li></ul>'+
        '<ul><li>Beyond all expectations, my all time favorite event experience</li></ul>'+
        '<p>&nbsp;</p></blockquote>'+
        '<p><img style="float:right" class="size-medium wp-image-1914 alignright" title="Shawna" src="http://futuremed2020.com/wp-content/uploads/2011/05/Shawna--300x199.jpg" alt="" width="180" height="119" /></p>'+
        '<p>Shawna Pandya<br />Medical Student</p>'+
        '<blockquote><p>Best. Conference. Ever.</p></blockquote><div><p>&nbsp;</p>'+
        '<p><span style="font-style: normal;">Daniel Birk, MD<br /></span>Neurosurgeon</p></div>'+
        '<div>'+
        '<blockquote><p>FutureMed was profoundly stimulating. I can&#8217;t imagine a more successful conference. Can&#8217;t wait to come back to SU.</p></blockquote>'+
        '</div>'+
        '<div>'+
        '<p>Jose Assad-Morell, MD<br />'+
        'Interventional Cardiology</p>'+
        '</div>'+
        '<div>'+
        '<blockquote><p><img style="float:right" class="alignright size-full wp-image-1934" title="Jose Assad- Morell" src="http://futuremed2020.com/wp-content/uploads/2011/05/Jose.png" alt="" width="92" height="120" />I knew the FutureMed Program was going to be fantastic, but in all honesty I did never thought it was going to be at the order of magnitude that was presented . . . it truly did justice to the &#8220;exponentiality&#8221; of the Program&#8230;. I have to say that the the finesse, delicacy and discreetness of each of the presentations was unsurmountable</p></blockquote>'+
        '<div>'+
        '<p>Michael Pinckney, MD</p>'+
        '</div>'+
        '<blockquote>'+
        '<div>'+
        '<p>Thank you for putting together a truly awesome conference.</p>'+
        '</div>'+
        '</blockquote>'+
        '</div>'+
        '<div>'+
        '<p>Johan MalmbergCVO, Uniblue</p>'+
        '</div>'+
        '<blockquote>'+
        '<div>'+
        '<p><span style="font-style: italic;"><img style="float:right" class="alignleft size-full wp-image-1931" title="Johan Malmberg" src="http://futuremed2020.com/wp-content/uploads/2011/05/Johan-Malmberg.png" alt="" width="112" height="134" />More than anything else, thanks for a fantastic week. If I would rank all the conferences and courses I have been to over the last few years then FutureMed would win by a very large margin. Keep up the fantastic work and hope to see you again at a future singularity university event.</span></p>'+
        '</div>'+
        '</blockquote><div><p>&nbsp;</p></div></div>'
        }];
    
        FutureMed.views.Quotes.superclass.initComponent.call(this);
    }
});