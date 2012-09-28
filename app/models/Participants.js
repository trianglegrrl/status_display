/* 
    Author     : Rahul C
    Created on : Feb 6, 2012, 15:40:00 PM
    Description: Schedule model and store
 */

Ext.regModel('Participants', {
    fields: ['firstName', 'lastName', 'photo', 'details']
});

FutureMed.stores.Participants = new Ext.data.Store({
    model: 'Participants',
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },
    data: [
    {
        "firstName" : "Joshua ",
        "lastName" : "Giambattista",
        "photo" : "images/participants/participant-01.png",
        "details" : "<p> I am a third year medical student in my clinical internship at the University of Saskatchewan.  Aside from my regular studies as a med student, I spend my free time playing campus sports, video games, and recording music.  I am also a huge tech geek! "+
    " <p>When I finish my medical degree, I intend on specializing in medical oncology.  My interest in cancer treatment stems from my childhood, as I was diagnosed at three years of age with Acute Lymphoblastic Leukemia.  Eventually, I hope to contribute to the community of medicine that essentially made my life possible.  "+
    "<p>I’m looking forward to making new contacts and friends at FutureMed 2012.   Through this conference I hope to gain some insight into the future trends and technologies that will usher in the next wave of patient management.  I am especially excited about the future tools that will be used in preventing, discovering and eventually eradicating cancer. "
    },
    {
        "firstName" : "Nigel ",
        "lastName" : "Halsted",
        "photo" : "images/participants/participant-02.png",
        "details" : "I have been involved in all aspects of medical and assistive device development and applied research since 1997. I am currently a Research Head at the BCIT Health Technology Research Group where I manage and conduct contract medical device development projects for the private sector. I have deep knowledge in technical product and business development, project management, ISO quality systems, business opportunity assessment, intellectual property management, new product commercialization and organizational development."
    },
    {
        "firstName" : "Jack ",
        "lastName" : "Kreindler",
        "photo" : "images/participants/participant-default.png",
        "details" : ""
    },
    {
        "firstName" : "Ian ",
        "lastName" : "Chen",
        "photo" : "images/participants/participant-03.png",
        "details" : "I am an adolescent transplant specialist at Toronto's Hospital for Sick Children (SickKids).  My clinical experience focuses on improving health outcomes for teenagers and young adults with all solid organ transplants.  My research area includes understanding brain maturation through neuro-imaging in young people.  I am also an engineer with a strong interest in designing and creating technological solutions to health care problems today.  I am looking forward to collaborating with all of you!!"
    },
    {
        "firstName" : "Donald ",
        "lastName" : "Halbert",
        "photo" : "images/participants/participant-04.png",
        "details" : "<p>Dr. Halbert is currently Divisional Vice President and Site Head for Abbott Biotherapeutics Corp. in Redwood City, CA."+
    "<p>Joining Abbott in 1991, Dr. Halbert was responsible for the development and integration of molecular biology and bioinformatics in the Pharmaceutical Division. In 1997 he established Genomics within the Pharmaceutical Discovery Advanced Technology group with responsibilities for the application of human genomics, genetics, proteomics and bioinformatics across all therapeutic areas."+
    "<p>Dr. Halbert left Abbott in 2005 and joined Iconix Biosciences as Executive Vice President of Research and Development. Following the successful sale of Iconix, Don returned to Abbott in 2007, as Sr. Director of Biology and Translational Sciences. Areas of his responsibility included the Abbott Compound Library, High Throughput Screening, Structural Biology, Chemoinformatics, Protein Biochemistry, Translational Biomarkers and Imaging, Pharmacogenetics, Integrative Pharmacology, Molecular Toxicology and Scientific Informatics."+
    "<p>Following the acquisition of Facet Biotech in April of 2010, Don was promoted to Divisional Vice President and Site Head for Facet, which was renamed Abbott Biotherapeutics in July of 2010. Abbott Biotherapeutics is engaged in Oncology Biologics research and development as well as supporting Phase III clinical trials for both Daclizumab (therapeutic antibody for MS) and Elotuzumab (therapeutic antibody for treatment of multiple myeloma) as well as additional Phase 1b/2 clinical programs."+
    "<p>Prior to joining Abbott, Dr. Halbert held scientific and management positions at Becton Dickinson in molecular biology and diagnostics, and was a co-founder of the molecular diagnostics company Gene-Trak Systems in Framingham, Massachusetts. Dr. Halbert has published extensively and has five issued patents related to his work. Dr. Halbert earned a bachelor's degree in biology from SUNY Buffalo, and a doctoral degree in molecular virology from Washington University in St. Louis. He completed his postdoctoral fellowship in molecular virology with Dr. Thomas Shenk at SUNY Stony Brook."
    },
    {
        "firstName" : "Amit ",
        "lastName" : "Sahasrabudhe",
        "photo" : "images/participants/participant-05.png",
        "details" : "Born in India, raised in Pittsburgh, PA. Attended Penn State for undergrad, Case Western for medical school and Univ of Pittsburgh for Orthopedic Surgery residency. After 2 sports medicine fellowships, one in Taos, NM and the second in Paris, France, I have been practicing in Phoenix, AZ."
    },
    {
        "firstName" : "Sophia ",
        "lastName" : "Chang",
        "photo" : "images/participants/participant-default.png",
        "details" : ""
    },
    {
        "firstName" : "Rui ",
        "lastName" : "Haddad",
        "photo" : "images/participants/participant-06.png",
        "details" : "Born in Lavras, MG, Brazil in June 12th, 1948. MD 1972 Universidade Federal do Rio de Janeiro -­‐Faculty of Medicine.  Residencies in General Surgery and Thoracic Surgery 1973-­‐1976-­‐Rio de Janeiro. MSc 1983 Universidade Federal do Rio de Janeiro-­‐Faculty of Medicine, Fellowship Thoracic Surgical Oncology 1983-­‐1985 (18months) University of Toronto,Toronto ,Ont, Canada. PhD 1996 Universidade Federal do Rio de Janeiro -­‐ Faculty of Medicine. After 35 years as a Professor of Thoracic Surgery and Chief of the Division of Thoracci Surgery (for 20 years) at Universidade Federal do Rio de Janeiro -­‐ Faculty of Medicine University Hospital I retired in Jan 2011 and I am working mainly in private clinic and 20% of my time as a Professor of Thoracic Surgery at Postgraduation School of Medicine -­‐ Catholic University of Rio de Janeiro."
    },
    {
        "firstName" : "Steven ",
        "lastName" : "Gottlieb",
        "photo" : "images/participants/participant-default.png",
        "details" : "<p>Steven M. Gottlieb, M.D., currently serves as CEO of TeamHealth Anesthesia, the anesthesia services division of a publicly traded hospital based services company, TEAMHealth (TMH)."+
	 
    "<p>Previously, Dr. Gottlieb founded Anesthetix Management, and led the company through its growth and development, a private equity investment by Summit Partners in 2006, and its acquisition by TEAMHealth in 2009."+
	 
    "<p>Prior to Anesthetix, Dr. Gottlieb founded and presided over several successful business entities, including several anesthesia and pain management practices, an independent physicians' association (IPA), and a medical billing company. He has served on numerous medical boards and boards of directors and in various leadership positions with hospital, community, and professional organizations."+
	 
    "<p>Dr. Gottlieb completed his anesthesiology residency and pain management subspecialty training at The Johns Hopkins Hospital in Baltimore, MD. He received an MD from Hahnemann University School of Medicine (Alpha Omega Alpha), where he performed an internship in internal medicine, and a BA from Temple University (Phi Beta Kappa, Summa Cum Laude, President's Scholar), both in Philadelphia, PA. He maintains memberships in a number of organizations, including ASA, AMA, MGMA, AAA, AAPM, ISIS, and Johns Hopkins Medical and Surgical Society."+
	 
    "<p>Dr. Gottlieb's hobbies include entrepreneurship, magic and martial arts. He is an active supporter of a number of charities, including the Kravis Center for the Performing Arts educational programs for children, AFMDA, the KIND Foundation for disabled children, and the Humane Society of the Palm Beaches."
    },
    {
        "firstName" : "Patricia ",
        "lastName" : "Salber",
        "photo" : "images/participants/participant-07.png",
        "details" : "Physician Executive (MD MBA Internist & Emergency Physician) currently consulting via Zia Healthcare Consultants with ACOs, Medical Homes, & HMOs on new models of medical management.  Also, host of two websites:  thedoctorweighsin.com & healthtechmatch.com and co-authoring a book on aging and longevity.  I want  to help disseminate (and implement) new ways to promote health, wellness, chronic illness care and healthy aging. Medicine & Healthcare has been (and remains) my lifelong passion.  So glad to be a part of FutureMed."
    },
    {
        "firstName" : "Maria ",
        "lastName" : "Pakalomattom",
        "photo" : "images/participants/participant-08.png",
        "details" : "Maria Pakalomattom is a student and entrepreneur. She is a Director at Global AutoParts in Doha, Qatar and the Director of International Business Development at Cochi Medical City & Tourism Pvt. Ltd. Her core interest is in the transfer of new technologies to the Middle East and Southeast Asia. She also has a great interest in the impact that entrepreneurs can have in transforming industry and improving access to health care in under-developed areas."
    },
    {
        "firstName" : "Andrew ",
        "lastName" : "Gesek",
        "photo" : "images/participants/participant-09.png",
        "details" : "<p>Andy Gesek is the Senior Director, Business Strategy & New Product Planning for Endo Pharmaceuticals.  In this role Andy and his team work closely with the SVP, Branded Pharmaceuticals on setting the strategic vision for the business unit and acquiring and managing the assets required to position Endo to lead the way into the new era of healthcare.  He came to this role in August of 2011 after serving as Senior Director, Forecasting & Commercial Analytics since joining Endo in November of 2009.  In the commercial analytics role he was instrumental in building strong analytical teams focused on meeting the information and decision support needs of internal customers."+

    "<p>Prior to joining Endo, Andy served in various roles of increasing responsibilities in several large Pharma companies including Janssen, Novartis, Pharmacia & Upjohn and Wyeth.  His commercial positions were varied, ranging from Finance to Sales, Sales Operations and most recently as Executive Director of Global Forecasting at Wyeth.  In addition to his pharmaceutical industry experience, Andy spent four years leading a team that did financial valuations of Licensing and Early Stage Equity Investments for BTG and has start up experience from his role as CEO of Pounce Sports, an angel backed start up that manufactured and marketed specialty sporting goods products."+

    "<p>Andy lives in Collegeville, PA with his wife Jennifer and their four children (two girls and two boys) who range in age from two to fifteen.  He loves country music, sports, coaching his kids and spending time at the Jersey Shore.  He is also a big fan of NASCAR and looks forward to the annual family trek to the track."
    },
    {
        "firstName" : "Deon ",
        "lastName" : "Louw",
        "photo" : "images/participants/participant-default.png",
        "details" : ""
    },
    {
        "firstName" : "Kirsten ",
        "lastName" : "Ostherr",
        "photo" : "images/participants/participant-default.png",
        "details" : "Kirsten Ostherr teaches film and media studies, focusing on ephemeral film and historical and contemporary representations of health and disease in photography, film, television, animation, advertising, and medical imaging. In Fall 2011 she was a Visiting Scholar at the Institute for Medical Humanities, at the University of Texas Medical Branch, Galveston, TX. She is currently pursuing a Master of Public Health degree at UT-Houston, and is also a Fellow in The John P. McGovern, M.D. Center for Humanities and Ethics, at the University of Texas Health Science Center, Houston, TX. She is author of Cinematic Prophylaxis: Globalization and Contagion in the Discourse of World Health (Duke, 2005), and Medical Visions: Producing the Patient through Film, Television and Imaging Technologies (Oxford, 2012). Dr. Ostherr has recently published articles on medical animation in the 1920s, health education films of the postwar period, narrative medicine and biocultures, ethical issues in"+
    "the film Philadelphia, and corporate publicity films. She has also published on art film, documentary, and science fiction film. Professor Ostherr lectures widely and has recently given invited talks in Geneva, Chicago, San Diego, Galveston, Houston, Philadelphia, and New York. Her work has been supported by a variety of grants and fellowships. Dr. Ostherr’s current work focuses on networked patients and hospitals, social media and health movements, and the age of bioinformatics. She is currently developing the Medical Futures Initiative, an institute for training the medical media innovators of the future through creative, hands-on critical thinking and design. A cornerstone of Medical Futures is “Project TMC,” a pilot program that joins Rice undergraduates with Texas Medical Center physician-researchers to develop videos and other communications media that translate their work for patients and the wider health community."
    },
    {
        "firstName" : "Mohan ",
        "lastName" : "Pakalomattom",
        "photo" : "images/participants/participant-10.png",
        "details" : "Dr. Mohan Thomas Pakalomattom is an ENT surgeon and entrepreneur who lives in Qatar. His varied business interests in Qatar and India include education, furniture and interiors, construction and oil & gas supplies. But his main interest is in the field of medical sciences which he has furthered by launching Cochi Health City & Tourism Pvt. Ltd in his hometown of Kochi, Kerala (India). Dr Thomas is one of the founder members of various organizations in the state of Qatar namely ICBF (Indian Community Benevolent fund), IBPN (Indian Businessmen and Professionals Network) , ICC (Indian Cultural Committee), IMA – Qatar Chapter (Indian Medical Association), he has been actively involved in the social and cultural activities of these forums right from its inception. What we have mentioned here is merely a smidgen of Dr. Thomas’s work. He is actively involved in and has founded numerous business organizations and subsequently employs over 800 people. His interest in philanthropy and charitable work led to the creation of Share & Care Foundation and Serve People Foundation."
    },
    {
        "firstName" : "Richard ",
        "lastName" : "Caro",
        "photo" : "images/participants/participant-11.png",
        "details" : "<p>Dr. Richard G. Caro is CEO of TangibleFuture, Inc., a boutique management consultancy which he founded in 2004 to help managers and entrepreneurs turn technological innovation into profitable businesses faster, and with less consumption of capital, than they would otherwise do. Richard has particular expertise creating and growing businesses based on complex science & technology, and in managing innovation."+

    "<p>Prior to TangibleFuture, Richard was Managing Director at RHK, a provider of advisory services to the communications industry, where he led consulting engagements with multinational businesses such as Intel, and Carl Zeiss; research institutions such as Battelle, and Sarnoff Corporation; and a variety of emerging startup companies. From 1986 to 1999 Richard held operational roles in high tech companies in Silicon Valley and Boston. He was CEO (founder) of Vital Insite, a venture-backed, medical device start-up developing noninvasive monitoring products; Engineering Program Manager at Coherent, one of the world’s largest laser manufacturers; and CTO of Summit Technology, a pioneer in the laser refractive surgery (LASIK) business. Before entering industry, he was a member of the research staff at Stanford University."+

    "<p>Richard has been responsible for the development of a number of successful products and has 20+ issued patents. He received a B.Sc. (Hons) degree from Melbourne University, Australia (1977), and a D.Phil. in experimental physics from Oxford University (1982) — where he was a Rhodes Scholar."+
    "<p>More details: www.tangiblefuture.com/richard-caro.html"
    },
    {
        "firstName" : "Andy ",
        "lastName" : "Liu",
        "photo" : "images/participants/participant-12.png",
        "details" : "<p>Mr. Andy A. Liu is currently the President of Asia Pacific and China for IMS Health. He is responsible for IMS Health operations in over 15 countries in Asia Pacific. "+

    "<p>Previously Mr. Liu served as Vice President of Strategy and Business Development for IMS Health leading deal transactions, acquisitions, joint ventures and partnerships for Asia Pacific. Mr. Liu has extensive pharmaceutical and biotech industry experience working across various multi-national companies. Previous to IMS, he served as Vice President of Commercial Operations for a TPG Private Equity Biotech Portfolio Company. Mr. Liu has also spent many years with Merck and UCB holding several executive management and leadership positions."+

    "<p>Mr. Liu’s area of expertise are in health care deal transactions/acquisitions and launching pharmaceutical brands inclusive of commercialization of products in the market place. He has held several operational roles from Business Unit Head to Division Marketing Head to General Manager and Regional VP. During his tenure he has successfully managed and launched products across key therapeutic franchises such as hypertension, atherosclerosis, anticonvulsants, arthritis, antihistamine, osteoporosis and diabetes. Mr. Liu has commercialization experience across the US, Latin America and Asia Pacific markets."+

    "<p>Mr. Liu has served on several Boards including The American Chamber of Commerce, The European Chamber of Commerce and The International Research-Based Pharmaceutical Association."
    },
    {
        "firstName" : "Salim ",
        "lastName" : "Semy",
        "photo" : "images/participants/participant-13.png",
        "details" : "<p>Salim Semy is lead software systems engineer and principal investigator in The MITRE Corporation’s Center for Transforming Health."+

    "<p>His current research interests include medical image analysis, ophthalmology, and open source research. He is the principal investigator of EyesFirst, a project focused on establishing an open source, standards-based platform for retinal image analysis to detect the early stages of multiple chronic diseases."+

    "<p>Previously, Salim worked on the Boston Retinal Implant Project on the design of a retinal prosthetic to help individuals with retinal degeneration such as Retinitis Pigmentosa and Age-related Macular Degeneration restore functional vision."+

    "<p>Salim has a bachelor’s degree in Software Engineering from the University of Toronto and a master’s degree in the Biomedical Sciences from Boston University School of Medicine."
    },
    {
        "firstName" : "Jeff ",
        "lastName" : "McCloud",
        "photo" : "images/participants/participant-14.png",
        "details" : ""
    },
    {
        "firstName" : "Komathi ",
        "lastName" : "Stem",
        "photo" : "images/participants/participant-default.png",
        "details" : ""
    },
    {
        "firstName" : "Rina ",
        "lastName" : "Shainski",
        "photo" : "images/participants/participant-16.png",
        "details" : "<p>General Partner at Carmel Ventures since 2000, right after its inception"+
    "<p>Areas of interest: mobile applications and services, digital media, cloud services, Genetics in Medicine, Genetics in Nutrition"+
    "<p>Extensive technology management background in high-growth high tech companies. "+

    "<p>Education: M.Sc. in Computer Science from Weizmann Institute, Israel, a B.Sc in Physics from Tel Aviv University, Israel and an IEP from INSEAD, Fontainebleau, France."+

    "<p>Boards:"+
    "<p>Serves on the Boards of Directors of , Skybox Security, mFormation, Kontera, Pertfecto Mobile, Picapp, MyThingsMedia and C-nario"
    },
    {
        "firstName" : "Luis ",
        "lastName" : "Losso",
        "photo" : "images/participants/participant-17.png",
        "details" : "Graduated in Medicine by Faculty of Medicine of Marília (1972); Specialist in Pulmonology by Brazilian Society of Pulmonology (1976); Specialist in Thoracic Surgery by Brazilian Society of Thoracic Surgery (1977); Thoracic Videoendoscopic Surgeon enabled by Brazilian College of Surgeons (1998); Philosophical Doctor in Medicine/Pulmonology by Federal University of São Paulo-Sao Paulo School of Medicine (1999); Assistant Professor of Thoracic Surgery, Faculty of Medicine at ABC Foundation; President of South American Chapter of the International Minimally Invasive Thoracic Surgery Group (USA); Member of the Minimally Invasive Thoracic Surgery Committee of Brazilian Society of Thoracic Surgery; Director, Center for Medicine and Minimally Invasive Thoracic Surgery and of the Thoracic Medicine Research Center at Edmundo Vasconcelos Hospital in Sao Paulo; Training on Clinical Research by Brazilian Ministry of Health (2010); in the context of Thoracic Surgery, professional emphasis in the areas of Minimally Invasive Thoracic Surgery; areas of interest and clinical research: Advanced Lung Disease, Lung Cancer, COPD and Pulmonary Emphysema."
    },
    {
        "firstName" : "Raul ",
        "lastName" : "Sturari Jr.",
        "photo" : "images/participants/participant-18.png",
        "details" : "Medical Doctor since 2004, specialized in General and Trauma Surgery, trained in laparoscopic surgery, digestive endoscopy and intensive care. Also contributes as a senior consultant for the Sagres Institute (sagres.org.br), a non-profit institution that promotes studies in areas such as future technologies, strategy and politics."
    },
    {
        "firstName" : "Marc ",
        "lastName" : "Sluijs",
        "photo" : "images/participants/participant-19.png",
        "details" : "<p>Life Sciences Strategist, Management Consultant and Business Development Executive. Deep expertise and skills in strategy development, M&A analysis, Alliance Development, business development and business process design in Biotech, Pharmaceuticals, Medical Devices and Consumer Goods industries globally."+

    "<p>Focus areas: Business Model Innovation in Life Sciences, Patient involvement and Adherence, Social Networks for LS and HC stakeholders, Clinical Development, enabling aggregation of multiple sources of health and wellness data for more effective health decision making."+

    "<p>Current role: Director Life Sciences Business Development at Oracle Health Sciences Global Business Unit"+

    "<p>Previous career experience: Marketing @ L’Oreal, Account Management @ IMS Health, Process & Strategy Consulting @ Accenture, Consulting and Project Management @ Merck Serono."+

    "<p>Beyond work: international citizen (dutch national living in Switzerland) enjoy family life with my wife and 2 children in and around Geneva (boating, swimming, rowing, skiing, hiking); international travel, practicing 4 languages and learning additional ones, good food, powerful cars."
    },
    {
        "firstName" : "Harker ",
        "lastName" : "Hernando",
        "photo" : "images/participants/participant-default.png",
        "details" : "ENT, Facial plastic surgeon, expert in lasers. Private practice since 1985, expert in nasal surgery. Professor of two universities in Colombia. Married with three children. "
    },
    {
        "firstName" : "Lisa ",
        "lastName" : "Distenfield",
        "photo" : "images/participants/participant-default.png",
        "details" : "<p>Lisa Distenfield joined MRI Interventions in 2009 as the Clinical Engineer for the medical device start up. As clinical engineer, she spear headed MRI Intervention’s flagship technology that allows neurosurgeons to accurately perform surgery, using real time MRI image guidance. Ms. Distenfield’s leadership (and over half a million airline miles), has guided the technology past the regulatory stages and successful FDA approval into doctors hands. This has allowed patients to be treated at some of America’s best Hospitals."+
    "<p>Ms. Distenfield spent 6 years at BrainLAB Inc. She impacted the development of the software that allows neurosurgeons to predict drug distributions."+
    "<p>As a result of conducting research at the University of California San Francisco, Ms. Distenfield’s  work has been crediting in leading publications including, The Journal of Neurosurgery and The Journal of Stereotactic and Functional Neurosurgery."+
    "<p>The former Lisa Tansey holds a Bachelor of Science in Biomedical Engineering with a special focus in Medical Imaging from Case Western Reserve University.  She resides in Fort Drum, NY with her husband Derek, an officer in the US Army."
    },
    {
        "firstName" : "Shoiball ",
        "lastName" : "Datta",
        "photo" : "images/participants/participant-default.png",
        "details" : ""
    },
    {
        "firstName" : "Ganesh ",
        "lastName" : "Vedarajan",
        "photo" : "images/participants/participant-22.png",
        "details" : "<p>I am a partner at ZS Associates, an international management consulting firm specializing in sales and marketing issues. I focus in our pharma / biotech sector and lead our Oncology / Specialty Therapeutics vertical."+

    "<p>I have been with ZS for 14 years and recently moved to our San Francisco office. I have experience in issues such as brand management, marketing execution effectiveness, managed care marketing & contracting, sales strategy, commercial analytics & operations. Prior to my current role, I led our EMR / Claims data practice."+

    "<p>I have a PhD in Mechanical Engineering from University of Illinois, Urbana-Champaign, MBA from the Wharton School of the University of Pennsylvania, and a B.Tech from the Indian Institute of Technology, Madras."
    },
    {
        "firstName" : "Will ",
        "lastName" : "Rosellini",
        "photo" : "images/participants/participant-23.png",
        "details" : "<p>Will RosellinI has six advanced degrees spanning business, law, and science. Before he began his academic pursuits, Will was a professional baseball pitcher in the Arizona Diamondbacks system."+

    "<p>After retiring from baseball, Will became fascinated with shrinking electronic devices to integrate into the nervous system and help patients with damaged nervous systems. To excel in this field of translational neurotechnology, Will obtained the relevant business, accounting, and legal background to develop technology and raise capital for preclinical and clinical studies. While pursuing these deal-making skills, he sought the ability to evaluate the technical feasibility of neuroprosthetic systems. In particular, his degrees are an MBA, MS of Accounting, a JD, a Master’s of Computational Biology, a Master’s of Neuroscience, and a Master’s of Regulatory Science. He is currently pursuing a PhD in Neuroscience. His PhD work is focused on evaluating the safety and efficacy of a novel form of neurostimulation, called voltage-controlled capacitive discharge (VCCD), invented by Dr. Larry Cauller."+
    "<p>Previously, he founded and sold Texas Onsite Dental, a telemedical company. He founded the neuroscience company MicroTransponder Inc. and has raised over $18 million in funding to pursue novel treatments for several neurological disorders.  One is an implanted wired neurostimulator that stimulates the vagus nerve for the treatment of tinnitus and post stroke motor rehabilitation."+
    "<p>Will was named Entrepreneur of the Year for 2009 by Entrepreneurs’ Organization, 2010 Tech Titan Award and 2011 Chancellor's Award for Entrepreneurship."+
    "<p>Will served as the lead scientific consultant for Square Enix and Eidos Montreal, Deus Ex: Human Revolution. Set in 2025 when human augmentations have become a reality, the game explores the ethics of neurotechnology and transhumanism in a world where the divide between the haves and have-nots of mechanical upgrades has caused global turmoil. Will wrote many of the scientific-based mechanical augmentation background notes and provided guidance for the developers on the bleeding-edge neurotechnology that is currently in human trials or late-stage development."
    },
    {
        "firstName" : "Laurie ",
        "lastName" : "McGraw",
        "photo" : "images/participants/participant-24.png",
        "details" : "<p>Laurie McGraw is Chief Client Officer of Allscripts, a trusted provider of innovative technology solutions that deliver world-class outcomes for healthcare organizations across the globe. A seasoned healthcare"+
    "<p>IT executive, Laurie has been focused for the past twenty years on bringing change to the healthcare industry through the adoption of clinical IT – specifically, Electronic Health Records. She has been"+
    "<p>with Allscripts for over ten years in a variety of senior leadership roles including, President of Strategic Accounts, as well as previously leading the Enterprise Business Unit for the company."+

    "<p>Before joining Allscripts, Laurie spent ten years with IDX, leading implementation and development teams. She held a leadership position within IDX's internet subsidiary ChannelHealth prior to its sale to Allscripts in 2000."+

    "<p>McGraw graduated from Brown University with an honors degree in Cognitive Science. She currently serves on the Board of Directors for TechAmerica as well as TechAmerica's Commercial Policy Board"+
    "<p>and previously served on the Public Sector Board. As a passionate outdoor enthusiast, Laurie also serves on the Yellowstone National Park Advisory Board. She has been a member of the Malcolm Baldrige"+
    "<p>Award Examiners since 2004."+

    "<p>Laurie was awarded the prestigious 2011 Innovator Award in the Health and Medical Technologies category at the David Packard Medal of Achievement and Innovator Awards. The award recognizes Laurie’s leadership in the development and ongoing growth of Allscripts ClientConnect, the online community for Allscripts clients, business partners and team members."
    },
    {
        "firstName" : "Morgan ",
        "lastName" : "Price",
        "photo" : "images/participants/participant-25.png",
        "details" : "Morgan Price, MD, PhD, CCFP. Morgan is a family physician who works in the inner city of Victoria at the Cool Aid community health centre. He is full time faculty at University of British Columbia and is the lead faculty for informatics in the Department of Family Practice and also adjunct faculty in computer science and health information science at the University of Victoria. His research interests are in health system improvements and clinical informatics. He is the clinical lead for the eHealth Observatory  He has consulted to a number of provincial and national eHealth projects prior to committing to full time research. His current research interests are in EMR optimization in primary care, consumer health informatics, and visualizing health systems in ways that support decision makers in designing improvements to care delivery."
    },
    {
        "firstName" : "Florence ",
        "lastName" : "Jennings",
        "photo" : "images/participants/participant-26.png",
        "details" : "Born in Africa, I spent my first 14 years traveling around in West Africa. I returned to France to complete my baccalaureate. I then left to study economics in Canada where i graduated form a BA and a Master in Science. I worked in scientific consultancy (French embassy scientific department and other types of consultancies). I moved to Geneva where I got married. We then moved to Asia where I had the opportunity to return to my first love neuroscience. So i completed a Master in Social Sciences (Australia) focusing on stress psychology, addictions and then when on to undertake and complete a PhD on physicians' stress, burnout and resilience (Australia) which I conducted in the Institute of Mental Health in Singapore and in the Red Cross Children' Hospital in Cape Town (SA). Now as a post doc, adjunct fellow, honorary lecturer and research fellow in the NUS Medical School and in the RCH in UCT Medical School Cape Town I specialize in developing intervention programs for hospital physicians (PHP focusing on physiological and psychological variables such as sleep deprivation, nutrition, exercise as well as addictions, mental health issues etc). For medical students and residents I am concurrently working on a new set of skills through HEP programs (Health Enhancing Programs) from year 1 to residency in order to equip students and residents with adequate self-care skills and self-management knowledge.I am also completing an executive degree in global management at INSEAD business school in Singapore. I travel to Australia, New Zealand, Europe, the US and Asia for consulting and medical academic conferences where i present data on my current research. I have 3 children and I love running, hiking, training. I love neuroscience and the study of the brain particularly neuro-plasticity and neuro-genesis mechanisms observable through lifestyle changes (BDNF etc). I love knowledge and I am passionate about transforming medical education and the management of physicians for the 21st century. I am a permanent resident in Singapore. I speak French, English and Spanish and I have 3 dogs."
    },
    {
        "firstName" : "Brooke ",
        "lastName" : "Sachs",
        "photo" : "images/participants/participant-27.png",
        "details" : "<p>Ideas are my specialty. I question the status quo and devise alternatives where they seem necessary. I work with what we have to improve access, efficacy and efficiency."+

    "<p>I believe in using exponential technologies. Huge benefits can be made through smart technologies and these can reduce the overall cost of programs that must run on a one-to-one basis."+

    "<p>I live the Nike mantra. If there is an idea that seems worth doing, I just do it. Ideas are worthless on their own, it is action that bring positive change."+

    "<p>I have just launched Avenir Rural Mentoring (http://www.avenirruralmentoring.com), a program using Internet technologies to works to empower students from Rural schools in Australia. We also run relaxed, in-person catch ups for school-leavers who have just moved to urban areas."+

    "<p>I am one of 100 people from across the globe attending FutureMed 2020 (http://www.futuremed2020.com), a program about health innovation in the next two to ten years."+

    "<p>I have a long history in public speaking through Melbourne University Debating Society, writing through the Inspire Foundation and listening through my volunteer programs. These skills are invaluable in the business world. When combined with the growing medical and health knowledge I gain through Medical School, HelloMedical, international volunteering and FutureMed, this makes a strong basis for health strategy."+

    "<p>My work is inspired and fostered by a unfaltering belief that we can work together to holistically improve our current systems for future generations. Specialties Include: Health, technology, strategy, planning, implementing ideas"
    },
    {
        "firstName" : "Sanjeev ",
        "lastName" : "Goel",
        "photo" : "images/participants/participant-28.png",
        "details" : "Dr. Sanjeev Goel is a physician who leads a Family Health Team in Ontario.  He is a physician leader in Health IT and Chronic Disease Management in his roles as a primary care lead for the region.  He also works as a Coroner and has a successful anti aging wellness practice, Dr. Goel Wellness MD.  He is currently launching a group of IT products including a Patient Health Portal.  In his spare time,  he is interested in the emerging connections between robotics, 3D printing, data visualization methods as they relate to health care innovation."
    },
    {
        "firstName" : "Jeff ",
        "lastName" : "Alfonsi",
        "photo" : "images/participants/participant-default.png",
        "details" : "<p>Jeff Alfonsi graduated with a Bachelor of Applied Science in Systems Design Engineering from the University of Waterloo. He is currently in his final year of his doctor of medicine degree at the University of Toronto."+

    "<p>At Waterloo, Jeff completed co-op terms in biomedical engineering. He worked with functional MRI at the Hospital for Sick Children in Toronto to investigate blood flow patterns during brain and muscles activation. He also worked at the London Regional Cancer Center coding a portable image processing and pattern recognition program to inter-operatively estimate the dosimetry map from radioactive seeds implanted during brachytherapy."+

    "<p>Upon graduation, Jeff worked for two years as a trading analyst at Barclays Capital. He was responsible for participating in auctions with the US Treasury, managing relationships with investment funds and central banks, monitoring risk, and deriving predictive models for proprietary trading."+

    "<p>In 2008 Jeff began medical school. He plans to pursue his residency in internal medicine. He also began developing iPhone applications aimed at medical education and improving care at the bedside. Two apps are currently available on iTunes – PCMED and EDSS calculator."+

    "<p>Jeff is also involved with research in helping medical students choose their career paths through the development of the Canadian Residency Guide. Last year he served as an execute for the University of Toronto IHI Open School Chapter. Finally, Jeff is serving as the production manager for Toronto Notes, a not-for-profit organization. Toronto Notes produces an annual textbook to help students prepare for their qualifying exam. All proceeds are donated to the University and local community."
    },
    {
        "firstName" : "Chee Yang ",
        "lastName" : "Chen",
        "photo" : "images/participants/participant-default.png",
        "details" : ""
    },
    {
        "firstName" : "Jay ",
        "lastName" : "Silverstein",
        "photo" : "images/participants/participant-default.png",
        "details" : "<p>Mr. Silverstein is a health care pioneer. He is recognized for his common sense approach, his wit, and his passion for connecting with consumers.   He has played an instrumental role in the development of some of the most significant and impactful paradigm shifts in the managed care sector, including the development of the Point-of-Service category, the integration of complementary medicine into mainstream insurance, the development of database driven preventive medicine, the launch of physician report cards, and the elimination of medical necessity review.  In the spirit of “it’s not just what you say, but how you say it”- he and his teams have won practically every major marketing award for effectiveness and creativity numerous times.  Mr. Silverstein is currently the Chief Branding Officer for Medco Health Solutions, the nation's largest pharmacy benefit management company with over 66 million Americans enrolled. Prior to Medco, Mr. Silverstein was Chief Imagineer COO of Revolution Health, a highly-capitalized internet startup organization designed to bring the consumer to the forefront of the health system.  In just a little over two years, the Company generated over 13 million unique visitors monthly, making it the second most popular health website in the world.  Mr. Silverstein has also served as Chief Branding Officer/Engagement Officer for HealthNet and United Healthcare, where he also served on the Executive Council for the Company."+

    "<p>Mr. Silverstein is an 81 graduate of Harvard College, and spent several years in the advertising world prior to launching Oxford Health Plans, his first parlay into the healthcare space.  Oxford grew to be the largest health plan in the NY metropolitan area, and was recognized for its innovation and consumer-friendly approach.  He is also the author of a best selling humor novel, I Worship the Very Dirt She Treats Me Like, and was a contributor to the television show, Fresh Prince of Bel Air."+

    "<p>Prior to UnitedHealthcare, Jay was the Chief Imagineer at Oxford Health Plans, where he designed many of the marketing and service programs that helped grow the Company from its inception to over $5 billion in revenues.  Mr. Silverstein oversaw all marketing, public relations and communications activities for Oxford."
    },
    {
        "firstName" : "Laith ",
        "lastName" : "Bustani",
        "photo" : "images/participants/participant-31.png",
        "details" : "<p>My father, the scientist, would categorize me as a physician practicing acute adult medicine in a community hospital.  There, supported by a multidisciplinary team, I research better ways to organize and communicate health data and empower patients to achieve optimal health."+

    "<p>Seven months ago I took on the role of chair of the Ontario Medical Association’s section on hospitalist medicine.  I am currently collaborating with physicians, administrators, and politicians to first measure and then re-imagine how inpatient care should be funded in Ontario as part of the 2012 Physician Services Agreement.   "+

    "<p>My mother, the artist, would describe me as an idealistic humanist recently tempered in the hot fires of high stakes political negotiations.  Of the generation coming of age during the exponential inter connection of information.  Young enough to remember that I am already outdated.  Old enough to reconcile the cautious wisdom of my mentors with the hyperkinetic expectations of my younger contemporaries.  "+

    "<p>I get my kicks imagining and pursuing ideal solutions to messy real life problems.  Both on a case-by-case basis for my patients, and on a macroscopic level.  A seeker of patterns in the present day through the lenses of convergent theories in economics, physics, philosophy, psychology, music, math, art, computer code.  "
    },
    {
        "firstName" : "David ",
        "lastName" : "Rice",
        "photo" : "images/participants/participant-32.png",
        "details" : "Attended school for the learning disabled as a kid. Learned how to collaborate and help others. Eventually taught how to read after which  life blossomed. Expecting equally wonderful things at SingularityU."
    },
    {
        "firstName" : "Teresa ",
        "lastName" : "Graham",
        "photo" : "images/participants/participant-33.png",
        "details" : "Teresa Graham is currently the Marketing Director for Rituxan Immunology, joining the brand team in January 2011 after a year in the field as a Division Manager in the West.  She has been with Genentech since 2005, starting with Raptiva as  Product Manager responsible for Patient Marketing, followed by several years in HCP promotion and Medical Marketing.  Teresa also served as the Associate Director for GIO Business Unit Operations. Prior to joining Genentech, Teresa worked for a number of brand and on-line advertising agencies.  She currently serves as the President for the San Francisco Chapter of the Healthcare Businesswomen's Association and Co-Chair of Genentech Women Professionals organization."
    }
    ]

});

