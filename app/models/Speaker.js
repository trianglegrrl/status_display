/* 
    Author     : Rahul C
    Created on : Jan 23, 2012, 15:40:00 PM
    Description: Speaker model and store
*/

Ext.regModel('Speaker', {
    fields: ['firstName', 'lastName', 'groupId', 'photo', 'details', 'designation', 'link', 'sortOrder']
});


FutureMed.stores.Name = new Ext.data.Store({
    model: 'Speaker',
    sorters: 'sortOrder',
    getGroupString : function(record) {
        return record.get('groupId');
    },
    data: [{
        "firstName" : "Daniel ",
        "lastName" : "Kraft",
        "groupId" : "FutureMed Executive Directors, Team and Faculty",
        "photo" : "images/speakers/speaker-01.png",
        "details" : "<p>Executive Director FutureMed</p>"+
        "<p>Medicine Track Chair, Singularity University</p>"+
        "<p>Founder & CEO, IntelliMedicine</p>"+
        "<p>Inventor of the MarrowMiner</P><br>"+

        "<p>Daniel Kraft is a Stanford and Harvard trained physician-scientist, inventor, entrepreneur and innovator.<p>"+

        "<p>Dr. Kraft has over 20 years of experience in clinical practice, biomedical research and healthcare innovation.  Daniel chairs the Medicine track for Singularity University and is Executive Director for FutureMed, a program which explores convergent, exponentially developing technologies and their potential in biomedicine and healthcare.</p>"+

        "<p>Following undergraduate degrees at Brown and medical school at Stanford, Dr. Kraft was board certified in the Harvard combined Internal Medicine and Pediatrics residency program at the Massachusetts General Hospital and Boston Children’s Hospital. He went on to complete Stanford fellowships in hematology/oncology & bone marrow transplantation, and extensive research in stem cell biology and regenerative medicine.  He has multiple scientific publications (including in Nature and Science), medical device, immunology and stem cell related patents through faculty positions with Stanford University School of Medicine and as clinical faculty for the pediatric bone marrow transplantation service at UCSF.</p>"+

        "<p>Dr. Kraft recently founded IntelliMedicine, focused on enabling connected, data driven, and integrated personalized medicine. He is also the inventor of the MarrowMiner, an FDA approved device for the minimally invasive harvest of bone marrow, and founded RegenMed Systems, a company developing technologies to enable adult stem cell based regenerative therapies.</p>"+

        "<p>Daniel is an avid pilot and serves in the California Air National guard as an officer and flight surgeon with an F-16 fighter Squadron. He has conducted research on aerospace medicine that was published with NASA, with whom he was a finalist for astronaut selection.</p>"+

        "<p>Contact Daniel: daniel@singularityu.org</p>"+
        "<p>WikiPedia entry about Daniel</p><br>"+

        "<p>Follow Daniel on Twitter:  @daniel_kraft</p>",
        "designation" : "Executive Director of FutureMed, Chair of the Medicine Track at Singularity University",
        "link" : null,
        "sortOrder" : 1
    },
    {
        "firstName" : "Peter",
        "lastName" : "Diamandis",
        "groupId" : "FutureMed Executive Directors, Team and Faculty",
        "photo" : "images/speakers/speaker-02.png",
        "details" : "detailed portfolio",
        "designation" : "Co-Founder of Singularity University, Founder of the X-PRIZE",
        "link" : "http://www.diamandis.com/",
        "sortOrder" : 2
    },
    {
        "firstName" : "Rob",
        "lastName" : "Nail",
        "groupId" : "FutureMed Executive Directors, Team and Faculty",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation" : "CEO of Singularity University",
        "link" : "http://singularityu.org/community/management/#rob",
        "sortOrder" : 3
    },
    {
        "firstName" : "Robin",
        "lastName" : "Farmanfarmaian",
        "groupId" : "FutureMed Executive Directors, Team and Faculty",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>Robin Farmanfarmaian has spent most of her career focused on health IT start up companies and non profits. She is currently FutureMed’s Executive Producer, which brings together her experience in medicine and technology with her expertise in events. She is also the Singularity University VIP Liaison, and Director of Operations for IntelliMedicine, a health & medicine start up technology company.</p>"+

        "<p>Her previous work in health and medicine centered around health data, Personal Health Records, and genetic testing. Robin was the Social Media Director and CFO (Chief Fun Officer) of HealthTap, a start up company in health and technology where she came on board at the inception. She worked in marketing at Medem (now MedFusion), specifically with physicians on their practice websites and PHRs. Back in 2006 she spent 2 years as the Nutrition and Health Advisor at CyGene Laboratories, a consumer facing genetic testing company. Outside of medicine, she was the Director of Business Development for Ad Valorem.</p>"+

        "<p>In the non profit world, Robin is in her third term as President & Opening Night Gala Chair for San Francisco Ballet ENCORE! and has been an associate trustee for San Francisco Ballet for the past 3 years. She spent 4 years on the Advisory Council and as Volunteer Coordinator for San Francisco Opera’s BRAVO!, was on the Leadership Team and Volunteer Coordinator for TEDx Silicon Valley, and has served as an Advisor for multiple other non profits, including Samasource, New Scholars, CCFA, children’s charities and helps interview underprivileged high school students for college scholarships.</p>"+

        "<p>Robin earned her B.S. in Management with an emphasis on finance at Boston University, and attended Harvard’s Women and Power Executive Program for female executives.</p>"+

        "<br><p>Contact: Robin@singularityu.org</p>",
        "designation" : "Executive Producer of FutureMed",
        "link" : null,
        "sortOrder" : 4
    },
    {
        "firstName" : "Ray",
        "lastName" : "Kurzweil ",
        "groupId" : "EXPONENTIAL & EMERGING TECHNOLOGIES",
        "photo" : "images/speakers/speaker-default.png",
        "photo" : "images/speakers/speaker-05.png",
        "designation" : "Co-Founder, Chancellor and Trustee, Singularity University",
        "link" : "http://singularityu.org/about/board-of-trustees/dr-ray-kurzweil/",
        "sortOrder" : 5
    },
    {
        "firstName" : "Daniel",
        "lastName" : "Barry",
        "groupId" : "EXPONENTIAL & EMERGING TECHNOLOGIES",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation" : " Roboticist, Physician, and Three-time Space Shuttle  NASA Astronaut",
        "link" : "http://www.jsc.nasa.gov/Bios/htmlbios/barry.html",
        "sortOrder" : 6
    },
    {
        "firstName" : "Salim",
        "lastName" : "Ismail",
        "groupId" : "EXPONENTIAL & EMERGING TECHNOLOGIES",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Global Ambassador and founding Executive Director at Singularity University",
        "link" : "http://www.linkedin.com/in/salimismail",
        "sortOrder" : 7
    },
    {
        "firstName" : "Neil",
        "lastName" : "Jacobstein",
        "groupId" : "EXPONENTIAL & EMERGING TECHNOLOGIES",
        "photo" : "images/speakers/speaker-08.png",
        "details" : "<p>Neil Jacobstein Co-chairs the AI and Robotics Track and is Director of Executive Academics at Singularity University headquartered at the NASA Ames Research Park. The University’s mission is to assemble, educate, and inspire leaders to understand and facilitate the responsible development of exponentially advancing technologies in order to address humanity’s grand challenges. Jacobstein served as Singularity University’s President for the past year, ending Oct 2011.</p>"+

        "<p>Jacobstein has been Chairman of the Institute for Molecular Manufacturing since 1992. He has been the principal co-author of the Foresight Guidelines for Nanotechnology Development, which asserts that molecular manufacturing:</p>"+

        "<p>is theoretically feasible in spite of recent pronouncements otherwise,</p>"+
        "<p>may take decades to develop,</p>"+
        "<p>will eventually have significant social and economic benefits as well as risks, and</p>"+
        "<p>should be pursued responsibly with appropriate controls and built-in safeguards.</p>"+
        "<p>Jacobstein is a Visiting Scholar in Stanford’s Media X Program, and became a Senior Research Fellow in the Reuters Digital Vision Program at Stanford University in 2006. He has served as a technical consultant on research and development projects for leading business, government, and defense organizations including GM, Ford, FMC, P&G, Boeing, Lockheed Martin, Applied Materials, NSF, DARPA, NASA, NIH, EPA, DOE, the U.S. Army, Navy, and Air Force. He was CEO at Teknowledge Corporation, an early AI company. Since 1998, Jacobstein has reviewed technical papers on the Program Committee of the Association for the Advancement of Artificial Intelligence’s (AAAI) Innovative Applications of Artificial Intelligence (IAAI) Conference. He co-chaired AAAI’s 16th Innovative Applications of Artificial Intelligence Conference, and chaired the 17th IAAI Conference.</p>"+

        "<p>In 1999, Jacobstein was selected as a Henry Crown Fellow at the Aspen Institute. He has moderated many Aspen Institute Socrates seminars on the opportunities and risks of advanced technologies, including nanotechnology, and has co-chaired the Socrates Program Committee for several years. Jacobstein was a Graduate Research Intern in the Learning Research Group at Xerox Palo Alto Research Center, and a consultant in PARC’s Software Concepts Group. He spent four years doing renewable energy and environmental research as a Research Associate with the Center for the Biology of Natural Systems. He received his BS in Environmental Sciences, Summa cum Laude from the University of Wisconsin, and an MS in Human Ecology from the University of Texas, in conjunction with NASA’s Environmental Physiology Simulation Program.</p>"+

        "<p>Jacobstein has served in a wide variety of executive and advisory roles for industry, nonprofit, and government organizations. He continues to give lectures, seminars, and workshops worldwide on the opportunities and risks of artificial intelligence and nanotechnology. He is a member of AAAS, AAAI, IEEE, and the ACM.</p>",
        "designation":" Singularity University Artificial Intelligence & Robotics Co-Chair",
        "link" : null,
        "sortOrder" : 8
    },
    {
        "firstName" : "Ralph",
        "lastName" : "Merkle",
        "groupId" : "EXPONENTIAL & EMERGING TECHNOLOGIES",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Co-founder, Nanofactory Collaboration",
        "link" : "http://www.merkle.com/",
        "sortOrder" : 9
    },
    {
        "firstName" : "Stephen",
        "lastName" : "Quake",
        "groupId" : "EXPONENTIAL & EMERGING TECHNOLOGIES",
        "photo" : "images/speakers/speaker-10.png",
        "details" : "detailed portfolio",
        "designation":"Professor and Co-Chair, Dept of BioEngineering, Stanford University; Investigator HHMI",
        "link" : "http://med.stanford.edu/profiles/bioengineering/faculty/Stephen_Quake/",
        "sortOrder" : 10
    },
    {
        "firstName" : "Daniel ",
        "lastName" : "Kraft",
        "groupId" : "REGENERATIVE MEDICINE",
        "photo" : "images/speakers/speaker-01.png",
        "details" : "<p>Executive Director, FutureMed</p>"+
        "<p>Medicine Track Chair, Singularity University</p>"+
        "<p>Founder & CEO, IntelliMedicine</p>"+
        "<p>Inventor of the MarrowMiner</p>"+

        "<p>Daniel Kraft is a Stanford and Harvard trained physician-scientist, inventor, entrepreneur and innovator.</p>"+

        "<p>Dr. Kraft has over 20 years of experience in clinical practice, biomedical research and healthcare innovation.  Daniel chairs the Medicine track for Singularity University and is Executive Director for FutureMed, a program which explores convergent, exponentially developing technologies and their potential in biomedicine and healthcare.</p>"+

        "<p>Following undergraduate degrees at Brown and medical school at Stanford, Dr. Kraft was board certified in the Harvard combined Internal Medicine and Pediatrics residency program at the Massachusetts General Hospital and Boston Children’s Hospital. He went on to complete Stanford fellowships in hematology/oncology & bone marrow transplantation, and extensive research in stem cell biology and regenerative medicine.  He has multiple scientific publications (including in Nature and Science), medical device, immunology and stem cell related patents through faculty positions with Stanford University School of Medicine and as clinical faculty for the pediatric bone marrow transplantation service at UCSF.</p>"+

        "<p>Dr. Kraft recently founded IntelliMedicine, focused on enabling connected, data driven, and integrated personalized medicine. He is also the inventor of the MarrowMiner, an FDA approved device for the minimally invasive harvest of bone marrow, and founded RegenMed Systems, a company developing technologies to enable adult stem cell based regenerative therapies.</p>"+

        "<p>Daniel is an avid pilot and serves in the California Air National guard as an officer and flight surgeon with an F-16 fighter Squadron. He has conducted research on aerospace medicine that was published with NASA, with whom he was a finalist for astronaut selection.</p>"+

        "<p>Contact Daniel: daniel@singularityu.org</p>"+
        "<p>WikiPedia entry about Daniel</p>"+

        "<p>Follow Daniel on Twitter:  @daniel_kraft",
        "designation" : "Hematology/Oncology/Bone Marrow Transplantation  and Regenerative Medicine, Chair of Medicine Track, Singularity University",
        "link" : null,
        "sortOrder" : 11
    },
    {
        "firstName" : "Gabor",
        "lastName" : "Forgacs ",
        "groupId" : "REGENERATIVE MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Chief Scientific Officer of Organovo",
        "link" : "http://www.organovo.com/about/management",
        "sortOrder" :12
    },
    {
        "firstName" : "Kevin",
        "lastName" : "Stone",
        "groupId" : "REGENERATIVE MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Orthopedic Surgeon and Chairman, Stone Research Foundation",
        "link" : "http://www.stoneclinic.com/kevin-r-stone-md",
        "sortOrder" :13
    },
    {
        "firstName" : "Hans",
        "lastName" : "S.Keirstead",
        "groupId" : "REGENERATIVE MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Stem Cell Pioneer, Professor of Anatomy, Neurobiology & Neurological Surgery at University of California",
        "link" : "http://www.anatomy.uci.edu/keirstead.html",
        "sortOrder" :14
    },
    {
        "firstName" : "Roni",
        "lastName" : "Zeiger",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>Dr. Roni Zeiger is Chief Health Strategist at Google where he leads efforts in health search and related health projects. He continues to see patients on occasional evenings and weekends at a local urgent care center. Roni also mentors startups at Rock Health. He earned his MD at Stanford and completed his internal medicine residency at the University of California, San Francisco. He has written and edited several medical textbooks and has published articles on topics including continuing medical education, clinical decision support tools, and searching for health information on the web. Roni also created a tool called Diagnosaurus which helps clinicians remember the possible diagnoses for given symptoms — the smartphone version of this tool is used by more than 100,000 medical students and physicians.</p>"+

        "<p>Roni has worked as a primary care physician, an urgent care physician, and has served as a Clinical Instructor of Medicine at Stanford University School of Medicine. He was a fellow in medical informatics at Veterans Affairs in Palo Alto, California, and received a masters degree in biomedical informatics from Stanford University.</p>"+

        "<p>Follow Roni on Twitter: www.twitter.com/rzeiger</p>",
        "designation":"Chief Health Strategist at Google",
        "link" : null,
        "sortOrder" :15
    },
    {
        "firstName" : "Marty",
        "lastName" : "Kohn",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Chief Medical Scientist, Care Delivery Systems, IBM Research at IBM",
        "link" : "http://www.linkedin.com/pub/marty-kohn/4/68a/90a",
        "sortOrder" :16
    },
    {
        "firstName" : "Don",
        "lastName" : "Jones",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Vice President of Wireless Health, Global Strategy and Market Development, Qualcomm Labs",
        "link" : "http://www.qualcomm.com/people/don-jones",
        "sortOrder" :17
    },
    {
        "firstName" : "Thomas",
        "lastName" : "Goetz",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Executive Editor of WIRED, Author of ‘The Decision Tree",
        "link" : "http://thedecisiontree.com/blog/thomas-goetz/",
        "sortOrder" :18
    },
    {
        "firstName" : "Alex",
        "lastName" : "Jadad",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-19.png",
        "details" : "detailed portfolio",
        "designation":" Chief Innovator and Founder, Centre for Global eHealth Innovation",
        "link" : "http://www.ehealthinnovation.org/ajadad",
        "sortOrder" :19
    },
    {
        "firstName" : "Leslie",
        "lastName" : "Saxon",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Professor of Clinical Medicine, University of Southern California. Chair of USC Center for Body Computing",
        "link" :"http://www.usccardiology.org/bodycomputing/bio-lesliesaxon.html",
        "sortOrder" :20
    },
    {
        "firstName" : "John",
        "lastName" : "Mattison",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-21.png",
        "details" : "detailed portfolio",
        "designation":"Chief Medical Information Officer, Kaiser Permanente",
        "link" :"http://www.corporateresearchgroup.com/conferences/ZW11508_Mattison_Bio.cfm",
        "sortOrder" :21
    },
    {
        "firstName" : "David",
        "lastName" : "Icke",
        "groupId" : "INFORMATION & DATA DRIVEN HEALTH",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"CEO, mc10 (developing conformal electronics for healthcare)",
        "link" :"http://mc10inc.com/pages/co_management",
        "sortOrder" :22
    },
    {
        "firstName" : "Alan",
        "lastName" : "Greene ",
        "groupId" : "FUTURE of MEDICAL PRACTICE",
        "photo" : "images/speakers/speaker-23.png",
        "details" : "detailed portfolio",
        "designation":"Pediatrician thought leader, Founder of DrGreene.com",
        "link" :"http://www.drgreene.com/about",
        "sortOrder" :23
    },
    {
        "firstName" : "Jordan",
        "lastName" : "Shlain",
        "groupId" : "FUTURE of MEDICAL PRACTICE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>Dr. Jordan Shlain is a practicing internist and a native of San Francisco.  He graduated with honors from UC Berkeley and was accepted to Harvard’s Center for International Development (WorldTeach) to teach high-school chemistry, physics and biology in rural Western Kenya.  Upon returning from Africa, he moved to Lucca, Italy where he opened and ran a successful bed and breakfast.   Subsequently, he graduated from Georgetown University Medical School and completed his internal medicine residency in San Francisco.</p>"+

        "<p>Dr. Shlain is ranked in the Healthspottr’s list of the 100 most important healthcare innovators and actively consults with companies, non-profits and physician organizations. He founded the Current Health Medical Group in 1997, which operates a full service, office and house-call practice and is actively developing software, HealthLoop (www.healthloop.com), to solve one of the more vexing problems in medicine: how to follow and monitor patients in between visits.</p>"+

        "<p>As a pioneer in what is now called Direct Practice medicine, Dr. Shlain has mentored many physicians in the San Francisco Bay Area and regularly lectures on health care economics to Pre-Med students at UC Berkeley.  He is the president of the national American Academy of Private Physicians and is actively involved in grass roots innovation and local medical politics.  He has served as an assistant clinical professor at UCSF and a board member for the San Francisco Medical Society.</p>"+

        "<p>In 2010, he was appointed by the Mayor of San Francisco to sit as a commissioner for the Health Services Systems Board, which is responsible for the allocation of over $700M for the healthcare of over 110,000 San Francisco Employee’s and retirees.</p>"+

        "<p>In 2011, he was named to the physician advisory board of Ingenix, a global leader in health IT analytics and services.</p>"+

        "<p>He is married to Dr. Caroline Shlain who received her PhD in Economics and International Relations.   They are blessed with four children; Amber, Daphne, Arthur and Isidora.</p>",
        "designation":"Founder Current Health, President-Elect American Academy of Private Physicians",
        "link" :null,
        "sortOrder" :24
    },
    {
        "firstName" : "Yan",
        "lastName" : "Chow",
        "groupId" : "FUTURE of MEDICAL PRACTICE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Director, Innovation and Advanced Technology at Kaiser Permanente",
        "link" :"http://xnet.kp.org/kpinternational/faculty/chow.html",
        "sortOrder" :25
    },
    {
        "firstName" : "Lucien",
        "lastName" : "Engelen",
        "groupId" : "FUTURE of MEDICAL PRACTICE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>Lucien Engelen has worked since 2007 at the Radboud University Nijmegen Medical Centre as Head of the Regional Acute Healthcare Network. He advises the Executive Board in terms of changes in healthcare, enhancing the participation of the patients and their informal care in their own disease, working towards Participatory Healthcare. He is the Initiator and Director of the Radboud REshape & Innovation Center in the Netherlands that makes and takes healthcare innovations into practice, or concludes them as (for the moment) not implementable. He is also the founding father and curator of TEDxMaastricht “The Future of Health</p>"+

        "<p>Part of his daily practice under the REshape-program of Radboud University Nijmegen Medical Centre includes research he initiated and leads. He founded and initiated the movement Compassion for Care to support medical students to change the educational system to embrace participatory healthcare.</p>"+

        "<p>He is author of “a little Booklet about Health 2.0”. He is in the process of writing two more books, one about Communities in Healthcare and one on patient blogs, and initiated “Health 2.0; the update.</p>"+

        "<p>He initiated AED4.eu to improve healthcare and understand the options of crowd sourcing we’ve launched. This website allows us to collect geopositiondata of AED’s by the use of public knowledge. This data is available on iPhone, iPad, Android and Windows mobile 7apps. Watch his TEDxMaastricht video and the AED4.eu video.</p>"+

        "<p>He  initiated the Community AYA4: Young Cancer Patients develop online-community, University Medical Centre facilitates. Radboud University Nijmegen Medical Centre (RUNMC) helps young people with cancer develop theirown communities. RUNMC starts with the development of AYA4 (All information You’ve Asked For): unique online community for and by young people with cancer. The University hospital facilitates the technique, support and innovation, but it is the patients themselves who determine the content of thecommunity and start filling. They create themselves a digital place where young people with cancer and their families can meet, exchange essential information, ask questions and share knowledge and feeling.</p>"+

        "<p>Find Lucien on Twitter, LinkedIn, Weblog and the Radbound Reshape Center Website.</p>",
        "designation":" Director Radboud REshape & Innovation Centre at Radboud University Medical Centre, Founder TEDxMaastricht",
        "link" :null,
        "sortOrder" :26
    },
    {
        "firstName" : "David",
        "lastName" : "Ewing Duncan",
        "groupId" : "PERSONALIZED MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Author of Experimental Man and the Personalized Medicine Manifesto",
        "link" :"http://www.davidewingduncan.com/",
        "sortOrder" :27
    },
    {
        "firstName" : "Raymond",
        "lastName" : "McCauley",
        "groupId" : "PERSONALIZED MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Co-founder and Chief Science Officer of Genomera, former Senior Bioinformatics Scientist at Illumina",
        "link" :"http://www.linkedin.com/in/raymondmccauley",
        "sortOrder" :28
    },
    {
        "firstName" : "Russ",
        "lastName" : "Altman",
        "groupId" : "PERSONALIZED MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Chairman, BioEngineering Dept, Stanford University & Principle Investigator PharmGKB",
        "link" :"http://biox.stanford.edu/clark/altman.html",
        "sortOrder" :29
    },
    {
        "firstName" : "Andreas",
        "lastName" : "Sundquist",
        "groupId" : "PERSONALIZED MEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "Andreas Sundquist is an expert on the analysis of ultra high-throughput DNA sequence data and has published methods in whole-genome mammalian assembly, metagenomics, and population genetics. Andreas received his Bachelor’s and Master’s degrees in Electrical Engineering and Computer Science from MIT, and his Ph.D. in Computer Science from Stanford University.",
        "designation":" CEO and Co-Founder, DNAnexus",
        "link" :null,
        "sortOrder" :30
    },
    {
        "firstName" : "Dan",
        "lastName" : "Barry ",
        "groupId" : "FUTURE OF INTERVENTION & ROBOTICS",
        "photo" : "images/speakers/speaker-31.png",
        "details" : "detailed portfolio",
        "designation":" 3 time NASA-Astronaut, CEO of Denbar Robotics,  Chair of Singularity University Faculty",
        "link" :"http://www.jsc.nasa.gov/Bios/htmlbios/barry.html",
        "sortOrder" :31
    },
    {
        "firstName" : "Catherine",
        "lastName" : "Mohr",
        "groupId" : "FUTURE OF INTERVENTION & ROBOTICS",
        "photo" : "images/speakers/speaker-32.png",
        "details" : "<p>Dr. Mohr is the Director of Medical Research for Intuitive Surgical, maker of the da Vinci robotic surgical system, where she investigates trends in surgical therapies and techniques and explores new technologies for incorporation into novel therapeutic devices.</p>"+

        "<p>During her initial training as a mechanical engineer at MIT’s AI Laboratory, Catherine developed compliant robotic hands designed to work in unstructured and dynamic environments.  She was also a founding member of the MIT solar car team, building and racing solar powered cars in Switzerland, the US and Australia, and was an early member of the Premise software team, a CAD start-up out of MIT.</p>"+

        "<p>Catherine went on to work for many years with Dr. Paul MacCready at AeroVironment, developing alternative energy technologies including hybrid electric off-road reconnaissance vehicles and closed-cycle regenerative fuel cell systems for high-altitude aircraft.</p>"+

        "<p>Later, while pursuing an MD degree at Stanford, she identified needs for new laparoscopic surgical instruments as an Ethicon Endosurgery research fellow, collaborated to develop the first totally robotic roux-en-Y gastric bypass using the da Vinci Surgical System, and invented and then started a company to commercialize the “LapCap” device for safely establishing pneumoperitoneum.</p>"+

        "<p>In addition to her current role at Intuitive, Dr. Mohr is a Consulting Assistant Professor in General Surgery at Stanford School of Medicine, and Senior Scientific Advisor and Board Member of the Blue World Alliance, an innovative funding and study group which brings an enterprise driven marketplace approach to solving environmental problems facing the world’s oceans.</p>",
        "designation":"Director of Medical Research, Intuitive Surgical",
        "link" :null,
        "sortOrder" :32
    },
    {
        "firstName" : "Eythor",
        "lastName" : "Bender",
        "groupId" : "FUTURE OF INTERVENTION & ROBOTICS",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>More than anything else, Eythor Bender is a team builder. You want to be on his team. And that’s good news for bionics, a nascent industry that Eythor has championed and grown, taking bionic prosthetics from unconventional approaches to sustainable, approved products that merge man and machine, and enhance individuals’ participation in their community. Today and as CEO of Ekso Bionics – developer and maker of wearable robots – Eythor is leading his company’s charge to boost everyone’s potential through personal bionics.</p>"+

        "<p>This year, Ekso Bionics is introducing two new exoskeletons to the market that augment mobility, strength and endurance: eLEGS powers wheelchair users up to get them standing and walking again; and HULCTM (Human Universal Load Carrier) enables users to carry up to 200 lbs. for hours and over all terrains, while reducing the likelihood of back-injuries.</p>"+

        "<p>Eythor is a native of Iceland, with a Masters in Business and Economics from Germany, where he began his career with Hewlett Packard in medical diagnostics and computer imaging. He went on to join Nordic-European Ossur, which pioneered the field of commercial bionics. Eythor led Ossur’s Americas division, taking it from a start-up to a world leader in the field of wearable, non-invasive technologies designed for amputees, injury prevention, rehabilitation and pain relief. He lives in San Francisco and most recently spoke at TED2011 in Long Beach, California.</p>",
        "link" :null,
        "designation":"CEO of EksoBionics (formally Berkeley Bionics)",
        "sortOrder" :33
    },
    {
        "firstName" : "Richard",
        "lastName" : "Satava ",
        "groupId" : "FUTURE OF INTERVENTION & ROBOTICS",
        "photo" : "images/speakers/speaker-34.png",
        "details" : "detailed portfolio",
        "designation":" pioneer in surgical robotics and telemedicine, Professor, Dept of Surgery, University of Washington",
        "link" :"http://lifeboat.com/ex/bios.richard.m.satava",
        "sortOrder" :34
    },
    {
        "firstName" : "Ajay ",
        "lastName" : " Verma",
        "groupId" : "NEUROMEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Vice President, Translational Neurology at Biogen Idec",
        "link" :"http://www.linkedin.com/pub/ajay-verma/15/711/229",
        "sortOrder" :35
    },
    {
        "firstName" : "Christopher",
        "lastName" : "DeCharms",
        "groupId" : "NEUROMEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Founder of Omeneron",
        "link" :"http://www.ted.com/speakers/christopher_decharms.html",
        "sortOrder" :36
    },
    {
        "firstName" : "Philip",
        "lastName" : " Steven Low ",
        "groupId" : "NEUROMEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>Philip Low is Chairman and Chief Executive Officer of NeuroVigil, the award-winning wireless neurodiagnostics company headquartered in San Diego. At the University of Chicago, he invented novel neurosurgical techniques. At Harvard Medical School, he showed in 9 weeks that a collagen inhibitor could successfully neutralize the growth of fibroid tumors – he was 19 years old at the time. At the Salk Institute, he invented the SPEARS algorithm and authored a one-page PhD thesis: a solution to a longstanding problem in brainwave analysis.</p>"+

        "<p>Dr. Low holds dual appointments from the Stanford School of Medicine and the MIT Media Lab, as well as an extraordinary ability recognition in the field of brain signal detection from the United States Government. He was named President of the 1st International Congress on Alzheimer’s Disease and Advanced Neurotechnologies, held in Monaco in February 2010. His work has been featured in technical and popular articles including CNN, Forbes, The Economist and The New York Times. To bring his innovations to the market, Dr. Low founded NeuroVigil when he was still in graduate school and enlisted 4 Nobel Laureates and 3 Fortune 500 company founders. Under Dr. Low’s leadership, NeuroVigil won the 2008 UCSD Entrepreneurship Competition, the annual 2008 DFJ Venture Challenge, the 2010 CONNECT Most Innovative New Product Award in Life Sciences and Diagnostics for iBrainTM, a wireless iPod for the brain, used by some of the world’s top pharmaceutical companies with outpatient drug evaluations, and was identified by Fast Company as one of the Top Ten Most Innovative Companies in Health Care, worldwide. NeuroVigil successfully went to market in 2009.</p>"+

        "<p>For his contributions to Biomedicine and for his business leadership, Dr. Low has been recognized by the MIT Technology Review as one of the 35 world leading innovators under 35. Past recipients include the founders of Linux, Netscape, Paypal, Google and Facebook.</p>",
        "designation":" CEO, Chairman and Founder of NeuroVigil, Inc.",
        "link" :null,
        "sortOrder" :37
    },
    {
        "firstName" : "Dale",
        "lastName" : "Bredesen",
        "groupId" : "NEUROMEDICINE",
        "photo" : "images/speakers/speaker-38.png",
        "details" : "detailed portfolio",
        "designation":" Professor and Founding President, Buck Institute for Age Research",
        "link" :"http://ind.ucsf.edu/aboutus/faculty/bredesend",
        "sortOrder" :38
    },
    {
        "firstName" : "Tan",
        "lastName" : "Le",
        "groupId" : "NEUROMEDICINE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Co-Founder & President, Emotiv Systems",
        "link" :"http://www.ted.com/speakers/tan_le.html",
        "sortOrder" :39
    },
    {
        "firstName" : "Paul",
        "lastName" : "Yock",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Professor of Medicine, Director of the Biodesign Program at Stanford",
        "link" :"http://biodesign.stanford.edu/bdn/people/yock_paul.jsp",
        "sortOrder" :40
    },
    {
        "firstName" : "Geetha",
        "lastName" : "Rao",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-41.png",
        "details" : "<p>Vice President, Strategy and Risk Management, Triple Ring Technologies</p>"+

        "<p>Dr. Geetha Rao has over 20 years of experience in high-risk technologies. She has provided advisory services and interim management to medical device, biotechnology and other life-sciences enterprises with a focus on emerging business challenges and operational excellence that meets best-in-class, international standards. She is an internationally recognized expert in risk management and liability and has served on several international policy making bodies, and as an invited expert to regulatory agencies, including the FDA, ISO Technical Committees, GHTF, and European Notified Bodies.</p>"+

        "<p>Previously Geetha has consulted to major multi-nationals in medical devices, pharmaceuticals, and biotechnology, healthcare providers, government agencies, trade associations, non-profit organizations, venture and investment firms, and law firms.  Her focus has been on regulatory and legal problem-solving for submissions, FDA and notified body inspections and audits, adverse events, and liability. She has addressed numerous industry forums and the press on issues of management of product and process quality and business risks.</p>"+

        "<p>Geetha is on the board of the ASQ Northern California Biomedical Discussion Group. chairs the MIT/Stanford Venture Lab’s Emerging Business Track for Life Sciences, is guest faculty on Stanford University’s Biodesign Innovation Program, and serves on the Life Sciences Committee for Astia, the leading organization supporting women-founded and women-led start-ups, and as advisor to several non-profits.</p>"+

        "<p>Geetha is a graduate of the Indian Institute of Technology, Madras and also holds a doctorate from MIT and a masters degree from Stanford University’s Graduate School of Business. She has held Professional Engineer licenses in Civil and Mechanical Engineering in the State of California.</p>",
        "designation":"Triple Ring Technologies, Founder MyMedFax",
        "link" :null,
        "sortOrder" :41
    },
    {
        "firstName" : "David",
        "lastName" : "Webster",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>David Webster is a Partner at IDEO and leads its global Health & Wellness practice.</p>"+

        "<p>David knows from experience that design thinking can massively improve the health-care ecosystem for patients, professionals, and organizations. He is inspired by the rapid escalation of technologies and a new generation of colleagues who are looking to create meaningful impact in the field. He sees a broad range of opportunities for innovation, from advancing surgical tools to developing consumer brands that make healthful eating irresistible.</p>"+

        "<p>David, whose formal training is as a mechanical engineer and industrial designer, is particularly passionate about designing experiences that pivot around physical objects. He prefers sketching and building to sitting still and typing. And he can’t get enough of robots.</p>"+

        "<p>Since joining IDEO in 1997, David has worked on all kinds of projects and client relationships; highlights include developing a new category of bicycle for Shimano and the first digital magazine for Zinio. He also led and grew our San Francisco office for many years. Before IDEO, David designed Yamaha motorcycles with GK in Tokyo, invented new food products with WhatIf in London, and built new factories for Unilever in Europe.</p>"+

        "<p>A native of Scotland, David now lives in Northern California with his wife and two young children.</p>",
        "designation":" Partner at IDEO",
        "link" : null,
        "sortOrder" :42
    },
    {
        "firstName" : "Carlos",
        "lastName" : "Olguin",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Senior Product Designer, Autodesk",
        "link" :"http://www.autodeskresearch.com/people/carlosolguin",
        "sortOrder" :43
    },
    {
        "firstName" : "Nick",
        "lastName" : "Soloway",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>Patent Attorney – Entrepreneur – Business Advisor<p>"+

        "<p>Areas of Practice:</p>"+

        "<p>Mechanical/electromechanical</p>"+
        "<p>Microelectronics, software and material technologies patents</p>"+
        "<p>Medical, biomedical</p>"+
        "<p>Pharmaceuticals and chemical technologies patents</p>"+
        "<p>Trademarks, licensing, technology transfer and litigation</p>"+

        "<p>Nick Soloway, Founding Partner, Hayes Soloway, PC, is an AV PreeminentTM Peer Review Rated* (5.0 out of 5) attorney, is one of 200 practicing patent attorneys in the United States to be included in Woodward/White’s Best Lawyers in America.</p>"+

        "<p>Mr. Soloway has been practicing in the intellectual property profession for over 40 years. He has extensive patent prosecution, litigation and licensing experience and counsels clients and renders formal opinions concerning the infringement or validity of patents and the designing of products and processes to avoid potential patent infringement. Mr. Soloway has filed and prosecuted well over 10,000 patents and trademarks for large and small corporations in the United States and throughout the world and his client base includes industry leaders in aerospace, biotechnology, pharmaceuticals, chemical technologies, mechanical and electromechanical technologies and microelectronics.</p>"+

        "<p>Prior to founding Hayes Soloway, P.C., Nick Soloway was in private practice in Boston, and before that in New York City. In addition to the practice of law, as a serial entrepreneur he co-founded 3 technology based companies: Diamond Guard (defunct), HBN Shoe (check atwww.Insolia.com), Structural Pharmaceuticals, a not-for-profit start-up for the University of Arizona Biochemisty and Molecular Biophysics Department.</p>"+

        "<p>Bar Admissions:</P></br>"+

        "<p>U.S. Patent and Trademark Office, 1967</p>"+
        "<p>U.S. District Courts, Southern and Eastern Districts of New York, 1971</p>"+
        "<p>U.S. District Court for the District of Massachusetts, 1979*</p>"+
        "<p>U.S. Court of Appeals for the Federal Circuit, 1994</p>"+
        "<p>Registered to practice before the Canadian Patent Office</p></br>"+

        "<p>Education:</p><br>"+

        "<p>LL.B., Boston College Law School, Boston, Massachusetts, 1965</p>"+
        "<p>Sc.B., Massachusetts Institute of Technolgy (MIT), 1962</p><br>"+

        "<p>Published Works:</p><br>"+

        "<p>Contributor to “State Trademark and Unfair Competition Law”, by the United States Trademark Association, Mary McGave, Managing Editor</p>"+
        "<p>Protecting Intellectual Property in a Global Economy Inside Tucson Business 2007</p><br>"+

        "<p>Teaching/Lectures:</p><br>"+

        "<p>Boston College, Department of Chemistry, Lecturer in organic chemistry, instrumental analysis and physical chemistry.</p>"+
        "<p>University of Arizona Entrepreneurship Program, lecturer</p>"+
        "<P>University of Arizona, James E. Rogers College of Law, panelist in Intellectual Property</p>"+
        "<p>Franklin Pierce Law Center, lecturer in International Licensing</p>"+
        "<p>New Hampshire Bar, CLE lecturer in Intellectual Property</p>"+
        "<p>MIT Club of Phoenix, guest lecturer</p>"+
        "<p>BioSA Breakfast Series, lecturer in Intellectual Property</p>"+
        "<p>BioSA BioSouthwest, moderator in IP Breakout Sessions, 2004 and 2006</p>"+
        "<p>Idea Funding, Tucson, AZ., panelist in Intellectual Property</p>"+
        "<p>MIT Enterprise Forum of Japan, lecturer in IP</p><br>"+

        "<p>Honors and Awards:</p>"+

        "<p>One of 200 patent attorneys listed in Woodward White™, “The Best Lawyers in America”</p>"+
        "<p>One of 6 patent attorneys in Arizona named as 2011 “Top Patent Prosecutors” (among the top 2% of all registered U.S. patent attorneys) in a peer nominated and peer reviewed selection process.</p><br>"+

        "<p>National Associations/Professional Memberships:</p>"+

        "<p>American Association for the Advancement of Science</p>"+
        "<p>Boston Patent Law Association</p><br>"+
        "<p>The Copyright Society of the U.S.A.</p><br>"+

        "<p>Community Activities:</p>"+

        "<p>University of Arizona Chairman of Board of Advisors, Department of Biochemistry and Molecular Biophysics</p>"+
        "<p>University of Arizona College of Science, Dean’s Board of Advisors</p>"+
        "<p>University of Arizona Galileo Circle</p>"+
        "<p>University of Arizona daVinci Circle</p>"+
        "<p>University of Arizona Medici Society, Member</p>"+
        "<p>AzRise, Arizona Research Institute for Solar Energy, University of Arizona</p>"+
        "<p>Desert Angels, Member and member of Screening Panel</p>"+
        "<p>BioSA Board Member; Board Meeting Host; BioSouthwest committee organizer, 2004, 2006</p>"+
        "<p>Founder, past Chairman and Moderator, MIT Enterprise Forum of New Hampshire</p>"+
        "<p>Founder, past Secretary, New Hampshire High Technology Counsel</p>"+
        "<p>Board Member and past President, American Stage Festival</p>"+
        "<p>Board Member, New Hampshire Historical Society</p>"+
        "<p>Past President, MIT Club of New Hampshire</p>"+
        "<p>Fund raising MIT, Lawrence Academy, The Fay School and Kimball Union Academy</p>"+
        "<p>Other: Hayes Soloway, P.C., makes continuing donations to:</p><br>"+

        "<p>BioSA University of Arizona Entrepreneurship Program</p>"+
        "<p>MIT Enterprise Forum</p>"+
        "<p>New Hampshire High Technology Counsel",
        "designation":" Founding Partner, Hayes Soloway, PC, Intellectual Property Worldwide",
        "link" :null,
        "sortOrder" :44
    },
    {
        "firstName" : "David",
        "lastName" : "Albert",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Co-Founder, AlivCor, Inc",
        "link" :"www.linkedin.com/profile/view?id=6976766&authType=NAME_SEARCH&authToken=kPhV&locale=en_US&srchid=810c2a1f-984e-41ef-92d2-2798de6a0cab-0&srchindex=1&srchtotal=186&goback=%2Efps_PBCK_*1_Dave_Albert_*1_*1_*1_*1_*2_*1_Y_*1_*1_*1_false_1_R_*1_*51_*1_*51_true_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2_*2&pvs=ps&trk=pp_profile_name_link",
        "sortOrder" :45
    },
    {
        "firstName" : "Amir",
        "lastName" : "Belson",
        "groupId" : "INNOVATION & ENTREPRENEURSHIP",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>President</p>"+
        "<p>Zipline Medical</p>"+
        "<p>Los Altos, CA</p><br>"+

        "<p>Amir Belson, M.D., was the founder of Neoguide Systems, a company that developed platform technology for minimally invasive surgical procedures and was acquired by Intuitive Surgical in 2009. Belson is also the founder of Vascular Pathways, a company that developed an FDA approved vascular intervention technology that has been chosen as one of the 10 best inventions of 2009 by Popular Science magazine, Zipline Medical, a wound closure technology company, Thermocure, a minimally invasive therapeutic hypothermia technology company, Radguard Medical, a radiation protection medical device company and VasoStitch, which develops large vessel access and closure technology.</p>"+

        "<p>Belson graduated cum laude from the school of medicine of the Technion, Israel Institute of Technology, in Haifa, Israel. He did his pediatric residency at Dana Children’s Hospital in Tel Aviv and his pediatric nephrology fellowship at Lucile Packard Children’s Hospital at Stanford. He also served several years as a flight surgeon in Israel’s air force rescue unit before moving to the US for a three years Pediatric Nephrology fellowship and Stanford University Medical Center. Belson also spent one year as a research fellow with the Biomedical Technology Innovation Program at Stanford.</p>"+

        "<p>He is the author of 34 medical papers and abstracts and has more than 200 issued and pending patents.</p>",
        "designation":"President, Zipline Medical",
        "link" :null,
        "sortOrder" :46
    },
    {
        "firstName" : "David",
        "lastName" : "Sayen",
        "groupId" : "GOVERNMENT & REGULATORY",
        "photo" : "images/speakers/speaker-47.png",
        "details" : "detailed portfolio",
        "designation":"  CMS Regional Administrator, Centers for Medicare and Medicaid Services",
        "link" :"https://www.linkedin.com/uas/login?session_redirect=http%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fprofile%2Fview%3Ftrk%3Dppro_viewmore%26authToken%3DIRy0%26authType%3Dname%26pvs%3Dpp%26locale%3Den_US%26id%3D3406790",
        "sortOrder" :47
    },
    {
        "firstName" : "Jay",
        "lastName" : "J. Schnitzer",
        "groupId" : "GOVERNMENT & REGULATORY",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Director, Defense Sciences Office (DSO), Defense Advanced Research Projects Agency (DARPA)",
        "link" :"http://sites.kauffman.org/tmaf/Schnitzer.cfm",
        "sortOrder" :48
    },
    {
        "firstName" : "Paul",
        "lastName" : "Grundy",
        "groupId" : "GOVERNMENT & REGULATORY",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" IBM Corporation’s Global Director, IBM Healthcare Transformation",
        "link" :"http://www.pcpcc.net/content/paul-grundy",
        "sortOrder" :49
    },
    {
        "firstName" : "David",
        "lastName" : "Hale",
        "groupId" : "GOVERNMENT & REGULATORY",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Project Manager of Pillbox, National Library of Medicine/FDA Initiative",
        "link" :"https://plus.google.com/113378967752197440927/about",
        "sortOrder" :50
    },
    {
        "firstName" : "Jeremy",
        "lastName" : "Bailenson",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Director, Virtual Human Interaction Lab (VHIL) at Stanford",
        "link" :"http://comm.stanford.edu/faculty/bailenson/",
        "sortOrder" :51
    },
    {
        "firstName" : "Sonia",
        "lastName" : "Arrison",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Bestselling author and technology analyst, Singularity University Founder, Trustee & Academic Advisor",
        "link" :"http://soniaarrison.com/",
        "sortOrder" :52
    },
    {
        "firstName" : "Marc",
        "lastName" : "Goodman",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Founder, Future Crimes",
        "link" :"http://www.futurecrimes.com/about/mg/",
        "sortOrder" :53
    },
    {
        "firstName" : "Aubrey",
        "lastName" : "de Grey",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Chief Science Officer, SENS Foundation",
        "link" :"http://www.sens.org/users/aubrey-de-grey",
        "sortOrder" :54
    },
    {
        "firstName" : "Yuri",
        "lastName" : "Millo",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Director of The Simulation and Training Environment Lab (SiTEL)",
        "link" :"http://www.worldcongress.com/speakerBio.cfm?speakerID=4307&confcode=HL09010",
        "sortOrder" :55
    },
    {
        "firstName" : "David",
        "lastName" : "Bolinsky",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Medical Director XVivo Scientific Animation",
        "link" :"http://www.xvivo.net/who-we-are/bios/david-bolinsky/",
        "sortOrder" :56
    },
    {
        "firstName" : "David ",
        "lastName" : "Webster",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "<p>David Webster is a Partner at IDEO and leads its global Health & Wellness practice.</p>"+

        "<p>David knows from experience that design thinking can massively improve the health-care ecosystem for patients, professionals, and organizations. He is inspired by the rapid escalation of technologies and a new generation of colleagues who are looking to create meaningful impact in the field. He sees a broad range of opportunities for innovation, from advancing surgical tools to developing consumer brands that make healthful eating irresistible.</p>"+

        "<p>David, whose formal training is as a mechanical engineer and industrial designer, is particularly passionate about designing experiences that pivot around physical objects. He prefers sketching and building to sitting still and typing. And he can’t get enough of robots.</p>"+

        "<p>Since joining IDEO in 1997, David has worked on all kinds of projects and client relationships; highlights include developing a new category of bicycle for Shimano and the first digital magazine for Zinio. He also led and grew our San Francisco office for many years. Before IDEO, David designed Yamaha motorcycles with GK in Tokyo, invented new food products with WhatIf in London, and built new factories for Unilever in Europe.</p>"+

        "<p>A native of Scotland, David now lives in Northern California with his wife and two young children.</p>",
        "designation":"Partner at IDEO",
        "link" :null,
        "sortOrder" :57
    },
    {
        "firstName" : "Sophia ",
        "lastName" : "Chang",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Director, Chronic Disease Care Program, California HealthCare Foundation",
        "link" :"http://www.chcf.org/about/staff/sophia-chang",
        "sortOrder" :58
    },
    {
        "firstName" : "Margaret",
        "lastName" : "Laws",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":" Director of the California HealthCare Foundation’s Innovations for the Underserved Program",
        "link" :"http://www.chcf.org/about/staff/margaret-laws",
        "sortOrder" :59
    },
    {
        "firstName" : "Pete",
        "lastName" : "Worden",
        "groupId" : "OTHER FACULTY & SPEAKERS INCLUDE",
        "photo" : "images/speakers/speaker-default.png",
        "details" : "detailed portfolio",
        "designation":"Director of NASA-Ames Research Center",
        "link" :"http://en.wikipedia.org/wiki/Pete_Worden",
        "sortOrder" :60
    }
    ]


});