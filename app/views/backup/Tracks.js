/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Tracks page
*/

FutureMed.views.Tracks = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function() {
        
        this.items = [{
            styleHtmlContent: true,
            html: ' <div id="title-container"><h1 class="title col-full">Core Tracks</h1></div>'+
        '<div class="entry"><div>'+
        '<p>FutureMed is geared around six exponentially growing areas, each taught by world class experts from the worlds of medicine, biotech and innovation. These include lectures, workshops, discussions and site visits.</p>'+
        '<p><a href="http://futuremed2020.com//wp-content/uploads/2011/02/Roni.jpg" ><img style="float:right" src="http://futuremed2020.com//wp-content/uploads/2011/02/Roni-300x169.jpg" alt="" title="" width="300" height="169" class="alignleft size-medium wp-image-3022" /></a><strong>1.  INFORMATION &#8211; DATA DRIVEN HEALTH: </strong>Digitization of healthcare, Electronic health records, Imaging Technology, Wearable devices, Wireless monitoring to ubiquitous Apps.  The &#8216;Big Data&#8217;  explosion… from Imaging &amp; Diagnostics to Mobile &amp; Internet Enabled Health&#8230;  Knowledge liquidity and leveraging information to enhance diagnostics, prevention and therapy&#8230;</p>'+
        '<p><strong>2.  PERSONALIZED MEDICINE &amp; &#8216;Omics: </strong>Low cost, point of care Genomics, Proteomics, Metabolomics,  Environmental monitoring&#8230; from Systems Medicine to the rapidly emerging world of Synthetic Biology and DIY-Genomics.</p>'+
        '<p><a href="http://futuremed2020.com//wp-content/uploads/2011/02/Jordan.jpg" ><img style="float:left" src="http://futuremed2020.com//wp-content/uploads/2011/02/Jordan-300x169.jpg" alt="" title="" width="300" height="169" class="alignright size-medium wp-image-3023" /></a><strong>3.  REGENERATIVE MEDICINE: </strong>Stem cells &amp; beyond for the repair, replacement and regeneration of tissues and organs damaged by aging, trauma or disease, from cell therapy to limb regeneration.  Cellular alchemy (reprogramming skin cell to cardiomyocytes) to tissue engineering and 3-D printing of organs and tissues.</p>'+
        '<p><strong>4.  FUTURE INTERVENTION: </strong>From Robotic Surgery, Bionic limbs and Exoskeletons, Smart pills, and Implantable Devices,  to Targeted gene therapy, and ever shrinking and more capable devices, Nanomedicine.</p>'+
        '<p><strong>5.  NEUROMEDICINE: </strong>Real time brain imaging, Brain computer interface (BCI), Cognitive Enhancement, Targeted neurointervention,  Psychiatry and Behavioral Medicine.</p>'+
        '<p><a href="http://futuremed2020.com//wp-content/uploads/2011/02/Esther.jpg" ><img style="float:right" src="http://futuremed2020.com//wp-content/uploads/2011/02/Esther-300x169.jpg" alt="" title="Esther" width="300" height="169" class="alignleft size-medium wp-image-3025" /></a><strong>6.  MEDTECH/BIOTECH &amp; ENTREPRENEURSHIP: </strong>Includes the future of Pharma and Drug Discovery, Synthetic Biology, Medical Device Development and the funding, opportunities and barriers (regulatory and otherwise) of biomedical innovation. The Drive to lower costs and more effective therapies. Impact of the FDA to Healthcare Models (Accountable Care Organizations).</p>'+
        '<h3><strong>The program focuses on three specific Application Areas, specifically the Future of&#8230;</strong></h3>'+
        '<p></a><strong>MEDICAL PRACTICE &amp; PATIENT ENGAGEMENT</strong></strong><strong>: </strong>How will convergent technologies impact the practice of medicine, diagnostics and clinical decision support, to new models of care from concierge practices to telemedicine… from feedback loops with patients utilizing wearable physiologic monitors, the networked &#8216;Medical home&#8217; and beyond. Can care get better and at lower costs?  How will better informed, engaged and socially connected patients interact with the healthcare system?</p>'+
        '<p><strong>HEALTH &amp; WELLNESS</strong><strong>: </strong>How will personalization, nutrigenomics and regenerative medicine impact wellness, prevention and longevity?</p>'+
        '<p><strong>GLOBAL HEALTH</strong><strong>: </strong>Leveraging technology for the developing world, and learning lessons from the underdeveloped to apply in ours, from rapid viral detection &amp; forcasting and vaccine development to strategies to prevent and treat disease in underserved and remote communities.</p>'+
        '<p><a href="http://futuremed2020.com//wp-content/uploads/2011/02/Robotic-Surgery.png" ><img style="float:right" src="http://futuremed2020.com//wp-content/uploads/2011/02/Robotic-Surgery-300x169.png" alt="" title="Robotic Surgery" width="300" height="169" class="alignright size-medium wp-image-3028" /></a><br />'+
        '<h3><strong>Site visits from 2011 included:</strong></h3>'+
        '<ul>'+
        '<li>Intuitive Surgical (robotic surgery)</li>'+
        '<li>NASA Life Sciences &amp; Human Factors</li>'+
        '<li>Kaiser-Garfield HealthCare Innovation Center</li>'+
        '<li>Autodesk Headquarters &#8212; 3D Printing</li>'+
        '<li>Google Health &amp; Google Headquarters</li>'+
        '</ul>'+
        '</div></div>'
        }];
    
        FutureMed.views.Tracks.superclass.initComponent.call(this);
    }
});