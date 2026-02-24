'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const executiveProfiles = {
  'opeyemi-oduwole': {
  name: 'Samsudeen Opeyemi Oduwole, CITP',
  title: 'Global Enterprise Systems Strategist & SAP Finance Architect',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/Sam%20Oduwole.jpg',
  bio: 'Global enterprise systems strategist and SAP Finance Architect with over two decades of experience leading large-scale finance transformation initiatives across Europe, the Middle East, and Africa.',
  background: 'Samsudeen Opeyemi Oduwole brings deep expertise at the intersection of financial governance, digital architecture, and enterprise scalability. With more than 20 years of experience, he has led complex SAP S/4HANA implementations and global ERP transformation programs for multinational organizations across energy, oil and gas, telecommunications, and financial services sectors.',
  experience: [
    '20+ years in enterprise finance transformation',
    'Led SAP S/4HANA and global ERP implementations',
    'Finance modernization across Europe, Middle East, and Africa',
    'Expertise in capital accounting, treasury, and investment management',
  ],
  expertise: [
    'SAP Finance Architecture',
    'Enterprise Systems Strategy',
    'Financial Governance',
    'Digital & ERP Transformation',
    'Regulatory Compliance',
    'Enterprise Risk Integration',
  ],
  achievements: [
    'Led mission-critical finance transformation programs',
    'Delivered large-scale ERP initiatives for multinational institutions',
    'Provided strategic oversight on financial systems integrity',
    'Designed scalable control and digital finance architectures',
  ],
  philosophy: 'Driven by the belief that strong financial governance and scalable digital architecture are critical to sustainable enterprise growth, Opeyemi focuses on building resilient systems that support long-term business performance and regulatory confidence.',
},
'john-alamu': {
  name: 'John Alamu',
  title: 'Founder & Group Managing Director',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/alamu.webp',
  bio: 'Founder and Group Managing Director of CapitalSage Holdings, leading the group’s expansion across fintech, agribusiness, financial services, and technology-driven platforms across multiple markets.',
  background: 'John Alamu is the Founder and Group Managing Director of CapitalSage Holdings, where he leads the group’s growth across fintech, agribusiness, financial services, logistics, and technology-enabled platforms. A trained statistician with a strong foundation in analytics, monitoring, and evaluation systems, he blends data intelligence with entrepreneurial execution to build scalable and resilient businesses.',
  experience: [
    'Founder and Group Managing Director of CapitalSage Holdings',
    'Led expansion across fintech, agribusiness, financial services, and technology',
    'Background in statistics, analytics, and monitoring systems',
    'Experience working with international development institutions',
    'Leadership across Nigeria, Gambia, UAE, and other markets',
  ],
  expertise: [
    'Strategic Leadership',
    'Enterprise Building',
    'Data Analytics & Intelligence',
    'Monitoring & Evaluation',
    'Financial Inclusion',
    'Business Expansion & Scaling',
  ],
  achievements: [
    'Founded and scaled CapitalSage into a diversified multinational group',
    'Expanded operations across Nigeria, Gambia, UAE, and other regions',
    'Built platforms spanning digital payments, commodities, logistics, and trade',
    'Established strong operational and governance structures across group companies',
  ],
  philosophy: 'John believes that sustainable enterprise growth is built on data-driven decision-making, disciplined execution, and long-term value creation. His leadership approach emphasizes measurable outcomes, innovation, and structured scaling across markets.',
},
'nath-ude': {
  name: 'Nath Ude',
  title: 'Group Chief Executive Officer',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/Nath.jpg',
  bio: 'Group Chief Executive Officer of CapitalSage Technology Group with over 30 years of leadership experience across banking, fintech, and enterprise transformation in Africa and international markets.',
  background:
    'Nath Ude is the Group Chief Executive Officer of CapitalSage Technology Group and a seasoned transformation leader with more than three decades of experience at the intersection of technology, operations, governance, and service excellence. His career spans commercial banking, merchant banking, and digital financial services, where he has consistently driven large-scale institutional change, strengthened governance frameworks, and built resilient, scalable operating models.',
  experience: [
    '30+ years of leadership across banking and financial technology',
    'Group Chief Executive Officer, CapitalSage Technology Group',
    'Former Managing Director & CEO, Nova Merchant Bank',
    'Executive Director roles at Union Bank Nigeria and FCMB',
    'Senior leadership roles at Standard Chartered Bank and Citibank',
  ],
  expertise: [
    'Enterprise Transformation',
    'Banking & Financial Services Leadership',
    'Technology & Operations Strategy',
    'Corporate Governance',
    'Digital Banking Platforms',
    'Institutional Scaling & Execution',
  ],
  achievements: [
    'Delivered sustained profitability growth as CEO of Nova Merchant Bank',
    'Led the implementation of Africa’s first Infosys Finacle X1 core banking platform',
    'Strengthened governance and risk management structures in regulated institutions',
    'Led complex transformation initiatives across multiple African and global markets',
  ],
  philosophy:
    'Nath believes that sustainable enterprise growth is built on strong governance, disciplined execution, and technology-led innovation. His leadership philosophy focuses on aligning strategy, systems, and people to create resilient institutions capable of delivering long-term value for stakeholders.',
},

  'yemisi-shittu': {
  name: 'Dr. Yemisi Shittu',
  title: 'Group Executive Director, Corporate Services',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/shittu.webp',
  bio: 'Development economist and policy strategist with over 20 years of experience across food systems, agricultural value chains, and nutrition economics in Sub-Saharan Africa.',
  background: 'Dr. Oluyemisi Shittu is a seasoned development economist and policy strategist whose work bridges rigorous research with policy design and institutional reform. With deep expertise in food systems, agricultural value chains, and nutrition economics, she has contributed to shaping national and regional strategies across Sub-Saharan Africa.',
  experience: [
    '20+ years in development economics and policy research',
    'Expertise in food systems, agriculture, and nutrition economics',
    'Senior research and advisory roles with international institutions',
    'Led national studies on food security and agricultural productivity',
    'Policy advisory across donor-funded and government initiatives',
  ],
  expertise: [
    'Development Economics',
    'Policy Design & Strategy',
    'Food Systems & Nutrition',
    'Agricultural Value Chains',
    'Socio-Economic Impact Assessment',
    'Institutional Reform',
  ],
  achievements: [
    'Advised donor and government programs on food security and nutrition',
    'Contributed to national policy on agricultural productivity and food systems',
    'Collaborated with IFPRI, USAID-funded initiatives, and Wageningen University',
    'Strengthened evidence-based strategy for inclusive growth outcomes',
  ],
  philosophy: 'Dr. Shittu believes that sustainable economic development must be grounded in evidence-based policy, institutional reform, and inclusive growth strategies that deliver measurable socio-economic impact.',
},
'sreeram-parameswaran': {
  name: 'Sreeram Parameswaran, CA, CPA',
  title: 'Group Executive Director, Finance',
  img: 'https://picsum.photos/seed/sreeram/600/700',
  bio: 'International finance executive with nearly two decades of experience across global commodity trading, manufacturing, and diversified investment groups.',
  background: 'Sreeram Parameswaran is an accomplished international finance executive with close to 20 years of experience spanning global commodity trading, manufacturing, and diversified investment groups. His career combines deep technical finance expertise with strategic leadership across complex, multi-country operations.',
  experience: [
    'Nearly 20 years of experience in international finance and global operations',
    'Global Finance Controller at ETG Group',
    'Senior CFO roles across multinational entities',
    'Managed multi-country financial reporting structures',
    'Oversaw debt facilities exceeding USD 100 million',
    'Led complex FX and commodity hedging programs',
    'Directed SAP S/4HANA finance implementations across multiple legal entities',
  ],
  expertise: [
    'Global Treasury Strategy',
    'Capital Raising & Structuring',
    'Financial Consolidation',
    'International Trade Finance',
    'FX & Commodity Hedging',
    'SAP S/4HANA Finance Implementation',
    'Corporate Financial Governance',
  ],
  achievements: [
    'Strengthened financial resilience across multinational operations',
    'Executed large-scale capital and treasury structures',
    'Led enterprise-wide SAP S/4HANA finance transformations',
    'Supported sustainable international expansion through disciplined capital allocation',
  ],
  philosophy: 'Sreeram believes that long-term global growth is built on financial resilience, disciplined capital allocation, and robust treasury structures that support sustainable international expansion.',
},
  
'adekunle-sonola': {
  name: 'Adekunle Sonola',
  title: 'Independent Non-Executive Director',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/aed7162565af9db5375e524670696077ab317f34/Sonola.jpg',
  bio: 'Distinguished banking executive with over 35 years of leadership across Africa’s financial services sector.',
  background: 'Adekunle Bankole Sonola is a distinguished banking executive with over 35 years of leadership across Africa’s financial services sector. His career spans institutional restructuring, cross-border expansion, capital optimization, and digital banking transformation, underpinned by deep governance and strategic oversight experience.',
  experience: [
    'Managing Director of Polaris Bank',
    'Executive Director at Union Bank Plc',
    'Regional Managing Director, Guaranty Trust Bank East Africa',
    'Oversaw expansion across Kenya, Rwanda, and Uganda',
    'Board roles at First Bank of Nigeria Plc and Airtel Nigeria Plc',
    '35+ years in African financial services leadership',
  ],
  expertise: [
    'Banking Leadership',
    'Corporate Governance',
    'Capital Optimization',
    'Cross-Border Expansion',
    'Digital Banking Transformation',
    'Institutional Restructuring',
  ],
  achievements: [
    'Led strategic growth initiatives across multiple banking institutions',
    'Strengthened commercial and SME portfolios',
    'Enhanced digital banking capabilities and transformation programs',
    'Established strong regional banking presence in East Africa',
    'Provided board-level capital discipline and governance oversight',
  ],
  philosophy: 'Adekunle believes banking should catalyze economic growth while advancing financial inclusion across Africa through strong institutions and disciplined governance.',
},

'omosuyi-michael': {
  name: 'Omosuyi Michael, FCA, FERP',
  title: 'Independent Non-Executive Director',
  img: 'https://picsum.photos/seed/omosuyi/600/700',
  bio: 'Seasoned financial regulator and enterprise risk professional with over two decades of service at the Central Bank of Nigeria.',
  background: 'Omosuyi Wole Michael is a seasoned financial regulator and enterprise risk professional with over 20 years of experience at the Central Bank of Nigeria. His career spans regulatory supervision, economic intelligence, financial sector reform, and enterprise risk governance, with deep involvement in policy review and institutional oversight.',
  experience: [
    'Over 20 years of service at the Central Bank of Nigeria',
    'Assistant Director, Central Bank of Nigeria',
    'Led supervisory and economic intelligence functions',
    'Conducted regulatory examinations of financial institutions',
    'Contributed to reforms in mortgage and non-bank financial subsectors',
    'Involved in risk-based supervision and enforcement of regulatory standards',
  ],
  expertise: [
    'Regulatory Supervision',
    'Enterprise Risk Management',
    'Risk-Based Supervision',
    'Financial Sector Reform',
    'Economic Intelligence',
    'Forensic Investigation',
    'Institutional Risk Governance',
  ],
  achievements: [
    'Led supervisory and intelligence operations within the Central Bank',
    'Contributed to policy review and regulatory reform initiatives',
    'Strengthened enforcement of financial regulatory standards',
    'Enhanced institutional risk governance frameworks',
    'Supported reforms across Nigeria’s financial subsectors',
  ],
  philosophy: 'Omosuyi believes strong regulatory oversight, disciplined risk governance, and evidence-based supervision are essential to building a resilient and trustworthy financial system.',
},
'tolulope-olatunji': {
  name: 'Tolulope Olatunji, FCIArb, ACIS',
  title: 'Group Company Secretary & Legal Adviser',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7c8f4712115482a2a0d9920c32dc45e8b540a5f3/tolulope.webp',
  bio: 'Governance and legal advisory professional with deep expertise in corporate law, regulatory compliance, and dispute resolution.',
  background: 'Tolulope Olatunji is a governance and legal advisory professional with extensive experience in corporate law, regulatory compliance, and dispute resolution. As Group Company Secretary and Legal Adviser at CapitalSage Technology, he provides strategic legal counsel to the Board and executive management, strengthening governance frameworks, statutory compliance, and institutional accountability across the Group.',
  experience: [
    'Group Company Secretary & Legal Adviser, CapitalSage Technology',
    'Provides board and executive-level legal and governance counsel',
    'Advises on enterprise risk, corporate policy, and regulatory engagement',
    'Facilitates communication between the Board, management, regulators, and stakeholders',
    'Former Lead Partner, Edge Hill Law Practice',
    'Senior counsel roles advising financial institutions and corporate clients',
    'Handled complex transactions, syndicated agreements, and litigation matters',
  ],
  expertise: [
    'Corporate Governance',
    'Regulatory Compliance',
    'Enterprise Risk Advisory',
    'Dispute Resolution',
    'Intellectual Property Management',
    'Corporate Policy Development',
    'Board Advisory & Secretariat Practice',
  ],
  credentials: [
    'LL.M – University of Ibadan',
    'Called to the Nigerian Bar',
    'Fellow, Chartered Institute of Arbitration (UK)',
    'Associate Member, Institute of Chartered Secretaries and Administrators',
  ],
  achievements: [
    'Strengthened governance frameworks and statutory compliance across the Group',
    'Provided structured legal oversight for board and executive decision-making',
    'Led high-stakes commercial and dispute resolution mandates',
    'Supported sustainable, well-governed growth through disciplined legal advisory',
  ],
  philosophy: 'Tolulope believes strong governance, disciplined legal frameworks, and effective regulatory engagement are critical to building sustainable, accountable, and resilient institutions.',
},
  'abubakar-soyemi': {
  name: 'Abubakar Soyemi',
  title: 'Group Chief Operations Officer',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/ba18324510f8120b91f7f8f4773cf2e9be56201f/Abubakar%20Soyemi.jpg',
  bio: 'Seasoned operations and governance leader with over 25 years of experience across commercial banking operations, compliance, and enterprise transformation.',
  background: 'Abubakar Soyemi is the Group Chief Operations Officer of CapitalSage Technology Group, bringing over 25 years of experience across commercial banking operations, governance, and enterprise transformation. His career spans operations management, audit, compliance, internal control, and large-scale transformation initiatives within highly regulated financial services environments.',
  experience: [
    'Group Chief Operations Officer, CapitalSage Technology Group',
    'Over 25 years in commercial banking operations and governance',
    'Senior leadership roles across leading financial institutions in Nigeria',
    'Led operations management, audit, compliance, and internal control functions',
    'Oversaw core banking implementations and enterprise-wide transformation programmes',
    'Designed and executed operating models across complex, multi-branch organisations',
  ],
  expertise: [
    'Operations Management',
    'Enterprise Transformation',
    'Governance & Internal Control',
    'Risk Management',
    'Process Optimisation',
    'Service Delivery at Scale',
    'Regulated Financial Services Operations',
  ],
  credentials: [
    'Honorary Senior Member, Chartered Institute of Bankers of Nigeria',
    'Fellow, Institute of Chartered Accountants of Nigeria (ICAN)',
  ],
  achievements: [
    'Strengthened operational frameworks across multiple financial institutions',
    'Embedded robust governance and control structures',
    'Led large-scale operational change and transformation initiatives',
    'Improved service reliability and efficiency across multi-branch environments',
    'Aligned people, processes, and technology to support resilient operations',
  ],
  philosophy: 'Abubakar believes resilient operations are built through disciplined execution, strong governance, and the deliberate alignment of people, processes, and technology to support sustainable growth and long-term value creation.',
},
'jemirin-bamidele': {
  name: 'Jemirin Bamidele',
  title: 'Director, Business Development, Partnerships & Growth',
  img: 'https://picsum.photos/seed/jemirin/600/700',
  bio: 'Senior business and technology executive with over two decades of experience across financial operations, fintech ecosystems, enterprise systems, and public-sector partnerships.',
  background: 'Jemirin Bamidele is a senior business and technology executive with over 20 years of experience spanning financial operations, treasury digitization, fintech ecosystems, enterprise systems, and public-sector partnerships. He brings a strong blend of commercial execution and ICT-driven transformation across Nigeria’s financial services, industrial, and government-linked sectors.',
  experience: [
    'Director, Business Development, Partnerships & Growth (Northern Region), CapitalSage Holdings',
    'Leads regional market development, investor engagement, and partnership structuring',
    'Drove transaction growth across the Group’s microfinance ecosystem',
    'Secured key federal collection partnerships to enhance platform credibility and throughput',
    'General Manager (Operations), Funds & Electronic Transfer Solutions (FETS)',
    'Led regional expansion and strengthened public-sector revenue channels at FETS',
    'Former enterprise IT and ERP transformation lead across Dangote Group subsidiaries',
  ],
  expertise: [
    'Business Development & Growth Strategy',
    'Public-Sector Partnerships',
    'Fintech & Digital Payments',
    'Treasury Systems & Digitization',
    'Enterprise Systems & ERP Transformation',
    'ICT Governance',
    'Market Expansion & Investor Engagement',
  ],
  credentials: [
    'B.Eng – University of Ilorin',
    'Microsoft Certified Professional',
    'Member, Project Management Institute (PMI)',
  ],
  achievements: [
    'Accelerated institutional scale and revenue growth across regional markets',
    'Strengthened transaction volumes across the Group’s microfinance ecosystem',
    'Secured high-impact federal partnerships for collections and payments',
    'Improved operational performance through cost-efficiency initiatives',
    'Led large-scale enterprise systems integration and automation programmes',
  ],
  philosophy: 'Jemirin believes sustainable growth is driven by disciplined execution, strong partnerships, and the strategic application of technology to unlock commercial and institutional value.',
},
'blaise-oluwole': {
  name: 'Oluwole Blaise, FCA, CISA',
  title: 'Group Head, Business Risk & Internal Control',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/0364cf3b055704c1aab71a35dad04e5b43e52813/Blaise%20Oluwole.jpg',
  bio: 'Enterprise risk and governance leader with over three decades of experience safeguarding institutional integrity across banking, manufacturing, audit, and conglomerate environments.',
  background: 'Oluwole Blaise is an enterprise risk and governance leader with over 30 years of experience across banking, manufacturing, audit, and conglomerate environments. He specializes in strengthening control architecture, protecting capital, and embedding risk discipline into board-level and executive decision-making.',
  experience: [
    'Group Head, Business Risk & Internal Control, CapitalSage Holdings',
    'Leads COSO Enterprise Risk Management framework implementation across 12 subsidiaries',
    'Provides quarterly risk reports to the Board Audit, Risk and Compliance Committee',
    'Former Group Head, Finance advising CEO and Board on capital allocation and liquidity',
    'Deputy General Manager & Plant Head of Internal Audit, Dangote Cement Plc (Obajana Plant)',
    'Oversight responsibility across Pan-African operations',
    'Senior audit leadership roles at KPMG',
    'Executive banking management experience at Zenith Bank',
  ],
  expertise: [
    'Enterprise Risk Management (COSO)',
    'Internal Control & Governance',
    'Forensic Investigation',
    'Capital Protection & Asset Safeguarding',
    'Board & Executive Risk Oversight',
    'Regulatory Compliance',
    'Business Continuity Management',
  ],
  credentials: [
    'Fellow, Institute of Chartered Accountants of Nigeria (ICAN)',
    'Certified Information Systems Auditor (CISA)',
  ],
  achievements: [
    'Implemented enterprise-wide risk management across multiple subsidiaries',
    'Uncovered and mitigated significant fraud exposures through forensic investigations',
    'Maintained zero non-conformity ratings in Business Continuity Management audits',
    'Strengthened capital discipline, reporting governance, and stakeholder confidence',
    'Embedded risk intelligence into strategic and board-level decision-making',
  ],
  philosophy: 'Oluwole believes resilient institutions are built through strong control architecture, disciplined risk governance, and proactive oversight that protects capital and enables sustainable growth.',
},
'moyosore-odeniyi': {
  name: 'Dr. Moyosore Odeniyi',
  title: 'Group Head, Internal Audit',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/moyosore.jpg',
  bio: 'Assurance, risk, and compliance executive with over 25 years of experience across consulting and multinational corporate environments.',
  background: 'Dr. Moyosore Odeniyi is an experienced assurance, risk, and compliance executive with over 25 years of experience across consulting and multinational corporate environments. She brings deep expertise in governance, enterprise risk management, regulatory compliance, and internal controls, helping organisations build resilient structures that support sustainable growth.',
  experience: [
    'Group Head, Internal Audit, CapitalSage Holdings',
    'Established group-wide risk management and internal audit frameworks',
    'Provides independent oversight across business units and executive leadership',
    'Senior assurance and strategy roles at Nomier HoldCo Limited',
    'Senior assurance and strategy roles at Midwestern Oil and Gas Company Limited',
    'Risk Assurance Services, PricewaterhouseCoopers Nigeria (PwC)',
    'Led regulatory compliance, SOX, IT controls, ISO certification, and investigations engagements',
  ],
  expertise: [
    'Internal Audit & Assurance',
    'Enterprise Risk Management',
    'Regulatory Compliance',
    'Internal Controls',
    'Governance Frameworks',
    'IT Controls & Risk Assurance',
    'Enterprise Risk Transformation',
  ],
  credentials: [
    'Doctor of Business Administration (DBA)',
    'Fellow, Association of Chartered Certified Accountants (FCCA)',
    'Certified Internal Auditor (CIA)',
    'Certified Information Systems Auditor (CISA)',
    'Certified Fraud Examiner (CFE)',
    'Certification in Risk Management Assurance (CRMA)',
    'Governance, Risk & Compliance Professional (GRCP)',
    'Certified Risk Manager (CRM)',
  ],
  achievements: [
    'Built and institutionalised internal audit and risk management frameworks',
    'Provided independent assurance supporting board and executive decisions',
    'Led complex regulatory and compliance engagements across industries',
    'Advanced governance and risk leadership standards within professional bodies',
  ],
  philosophy: 'Moyosore believes governance and assurance should serve not only as protective mechanisms, but as strategic enablers of long-term organisational value and resilience.',
},
'uwa-tessy': {
  name: 'Uwa Tessy Michael-Okafor, ACA, GPHR',
  title: 'Group Chief Human Resources Officer',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/f71453ad9e172b7bb285c1be3fc90a6db8189e44/Uwa%20Tessy%20Micheal-Okafor.jpg',
  bio: 'Senior people and governance executive with over 17 years of experience building high-performance organisations across financial services, advisory, energy, and consumer goods sectors.',
  background: 'Uwa Tessy Michael-Okafor is the Group Chief Human Resources Officer at CapitalSage Technology Group, where she leads the Group’s people strategy across governance, talent, performance, and organisational design. She works closely with executive leadership to build structures that support scale, regulatory discipline, and long-term business growth across the Group’s operating companies.',
  experience: [
    'Group Chief Human Resources Officer, CapitalSage Technology Group',
    'Leads group-wide people strategy spanning governance, talent, and performance',
    'Responsible for workforce strategy, leadership development, and succession planning',
    'Oversees compensation, rewards, and organisational effectiveness',
    'Senior HR leadership roles at Promasidor (Group and country levels)',
    'Led multi-market people strategies and complex labour and regulatory matters',
    'Former advisory roles at KPMG in compensation strategy and executive governance',
  ],
  expertise: [
    'Human Capital Strategy',
    'Organisational Design & Effectiveness',
    'Leadership Development & Succession Planning',
    'Performance Management',
    'Compensation & Rewards',
    'Workforce Governance',
    'Regulatory & Labour Relations',
  ],
  credentials: [
    'Chartered Accountant (ACA)',
    'Global Professional in Human Resources (GPHR)',
    'B.Sc. Accountancy',
    'Executive Education - Wharton School',
  ],
  achievements: [
    'Built scalable people and governance frameworks supporting group-wide growth',
    'Led performance and talent transformations across multi-market organisations',
    'Managed redundancy and restructuring exercises without operational disruption',
    'Strengthened leadership capability, employee engagement, and accountability',
    'Aligned people strategy with business goals across regulated environments',
  ],
  philosophy: 'Tessy believes sustainable business growth is driven by disciplined people governance, accountable leadership, and HR systems that directly connect talent decisions to organisational performance.',
},
'daniel-ale': {
  name: 'Daniel Ale',
  title: 'Chief Technology Officer',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/a6c0dd2bee15c6a0aec45ac263bcc03aa948d1d3/Daniel%20Ale.jpg',
  bio: 'Visionary engineering and technology leader with over 15 years of enterprise technology experience and more than a decade leading large-scale, cross-functional engineering teams.',
  background: 'Daniel Ale is a visionary engineering leader and Group Chief Technology Officer at CapitalSage Technology, where he defines and executes the Group’s technology strategy. His work aligns digital infrastructure, cybersecurity, and regulatory compliance with long-term business growth, ensuring the delivery of secure, scalable, and future-ready technology platforms across the Group.',
  experience: [
    'Chief Technology Officer, CapitalSage Technology',
    'Over 15 years in enterprise technology and engineering leadership',
    'Led architecture and deployment of mission-critical financial systems across Nigeria and Gambia',
    'Rebuilt Kolomoni Microfinance Bank’s digital banking infrastructure to scale toward 5 million users',
    'Architected ERCAS Pay payment gateway and API hub for merchant and enterprise integrations',
    'Designed SageCloud, a multi-tenant enterprise integration and cross-border deployment platform',
    'Led Oracle NetSuite ERP transformation for Johnvents Group',
    'Former CTO and senior technical leadership roles across fintech, telecoms, and enterprise software',
    'Delivered over ₦10 billion in large-scale technology projects',
    'Led and scaled engineering teams of over 100 professionals',
  ],
  expertise: [
    'Technology Strategy & Architecture',
    'Enterprise & Core Banking Systems',
    'Cloud-Native Microservices',
    'Digital Channels (Mobile, USSD, Web, API)',
    'Cybersecurity & Regulatory Compliance',
    'DevOps & Automation',
    'Enterprise Systems & ERP Transformation',
  ],
  credentials: [
    'M.Sc. Electronics & Communications Engineering',
    'Member, Nigeria Society of Engineers (NSE)',
    'Registered Engineer, COREN',
    'Member, Institute of Electrical and Electronics Engineers (IEEE)',
  ],
  achievements: [
    'Scaled digital banking platforms to support millions of users across multiple channels',
    'Built secure payment and API infrastructure for enterprise-grade integrations',
    'Enabled inter-subsidiary and cross-border system connectivity through SageCloud',
    'Delivered major ERP and enterprise system transformations',
    'Established high-performing engineering teams and delivery culture at scale',
  ],
  philosophy: 'Daniel believes sustainable technology leadership is built on secure architecture, disciplined execution, and empowered engineering teams that translate innovation into long-term business value.',
},
  'segun-sanusi': {
  name: 'Segun Sanusi',
  title: 'Chief Information Officer',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/feafd990f0e50309f5aef3ab66c6470313d57bee/Segun%20Sanusi.jpg',
  bio: 'Seasoned technology and fintech executive with over a decade of experience building secure, scalable payment systems and enterprise software platforms.',
  background: 'Segun Sanusi is the Chief Information Officer at CapitalSage Technology, where he leads the company’s technology strategy, infrastructure, and innovation initiatives. He drives the development of scalable, secure, and user-focused financial solutions that support financial inclusion and seamless digital experiences across the Group.',
  experience: [
    'Chief Information Officer, CapitalSage Technology',
    'Over a decade of experience across fintech, software engineering, and enterprise systems',
    'Former CIO & CTO, Scoutpay',
    'Led enterprise-wide technology strategy and digital product innovation',
    'Delivered secure payment gateways and AI-enabled operational processes',
    'Senior technology roles at NowNow and Etop Nigeria Ltd',
    'Implemented IT service management and omnichannel software ecosystems',
    'Early career as software programming instructor and software engineer',
  ],
  expertise: [
    'Fintech & Digital Payments',
    'Payment Gateway & Card Management Systems',
    'Enterprise Software Architecture',
    'Cloud Infrastructure & Scalability',
    'Cybersecurity & Data Protection',
    'API & Systems Integration',
    'Technology Strategy & Innovation',
  ],
  credentials: [
    'Advanced programs in Project Management and Software Solutions',
    'Advanced studies in Artificial Intelligence',
    'Metropolitan School of Business and Management (UK)',
    'PCI-DSS Certification',
    'Red Hat Administration Certification',
    'Oracle Database Management Certification',
    'Cisco Networking Certification',
  ],
  achievements: [
    'Delivered secure, scalable payment platforms supporting enterprise growth',
    'Drove a 47% increase in revenue streams through digital product innovation',
    'Built AI-enhanced operational processes and POS platforms',
    'Implemented cloud-first, resilient enterprise architectures',
    'Established strong cybersecurity and infrastructure governance practices',
  ],
  philosophy: 'Segun believes technology leadership is about continuous improvement, secure infrastructure, and customer-centric design that translates innovation into measurable business and societal impact.',
},
'ilabeshi-gabriel': {
  name: 'Ilabeshi Gabriel',
  title: 'Group Head, Marketing & Communications',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/fb6126005079d398b1392bbd83aa15b9cd6b016c/beshi.webp',
  bio: 'Strategic brand and communications leader with deep expertise in multi-market growth, corporate reputation, and performance-driven marketing across regulated and high-growth sectors.',
  background: 'Ilabeshi Gabriel is the Group Head, Marketing & Communications at CapitalSage Technology, where he provides centralized strategic leadership for brand, marketing, digital, content, and public relations across Nigeria, Gambia, and the UAE. He drives brand equity, market positioning, and growth execution for a diversified group spanning fintech, cloud, and financial services.',
  experience: [
    'Group Head, Marketing & Communications, CapitalSage Technology',
    'Leads multinational marketing operations across Nigeria, Gambia, and the UAE',
    'Provides strategic oversight for multiple fintech and financial services brands',
    'Former Head of Strategy & Planning, RED | For Africa',
    'Led digital agency operations and achieved significant billing growth',
    'Secured and managed major accounts across financial services, FMCG, automotive, and development sectors',
    'Held senior strategy and communications roles at Pulse and C&F Porter Novelli',
    'Built and led high-performing, cross-functional marketing and communications teams',
  ],
  expertise: [
    'Brand Strategy & Corporate Positioning',
    'Marketing & Communications Leadership',
    'Go-to-Market Strategy',
    'Corporate Reputation Management',
    'Product Marketing',
    'Media & Public Relations',
    'Digital & Performance Marketing',
    'Stakeholder & Market Engagement',
  ],
  credentials: [
    'B.Sc. Mass Communication',
    'Advanced training in Business Strategy',
    'Advanced training in Product Marketing',
    'Brandcom Top 35 Under 35 Marketing Professional (2024)',
  ],
  achievements: [
    'Led multi-market brand and marketing strategy across three countries',
    'Strengthened corporate reputation and market positioning for a diversified group portfolio',
    'Delivered performance-driven marketing outcomes across B2B and consumer brands',
    'Built scalable marketing frameworks supporting enterprise growth',
    'Recognized nationally as a top emerging marketing leader',
  ],
  philosophy: 'Ilabeshi believes sustainable brand growth is driven by strategic clarity, market intelligence, and disciplined execution that aligns reputation, performance, and long-term enterprise value.',
},
'samuel-olaifa': {
  name: 'Samuel Olaifa, ACCA, CDCS',
  title: 'Group Head, Treasury',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/2b7fc7d19d385dbf57f5142a11ade566e2ba29c5/samuel%20olaifa.jpeg',
  bio: 'Seasoned treasury and trade finance executive with over a decade of experience driving liquidity strategy, and financial risk management across diversified sectors.',
  background: 'Samuel Olaifa is the Group Head, Treasury at CapitalSage Holdings, where he leads group-wide liquidity management, capital structuring, FX risk strategy, and banking relationships across a diversified conglomerate operating in highly regulated financial and commercial sectors. He aligns treasury operations with corporate growth objectives, ensuring disciplined financial governance, capital efficiency, and balance sheet resilience across subsidiaries.',
  experience: [
    'Group Head, Treasury, CapitalSage Holdings',
    'Leads group-wide liquidity strategy, capital planning, and FX risk management',
    'Manages banking relationships, covenant compliance, and cost of funds optimization',
    'Oversees investor engagement and capital market funding initiatives',
    'Former treasury leadership roles across fintech, banking, manufacturing, and FMCG sectors',
    'Managed complex FX exposures and structured hedging programs',
    'Led cross-border trade finance and supplier settlement operations',
    'Built and standardized treasury and trade finance governance frameworks',
  ],
  expertise: [
    'Treasury & Liquidity Management',
    'Capital Structuring & Funding Strategy',
    'Foreign Exchange Risk Management',
    'Trade Finance & Documentary Credits',
    'Banking & Investor Relations',
    'Financial Risk Governance',
    'Treasury Process Automation',
  ],
  credentials: [
    'ACCA – Association of Chartered Certified Accountants',
    'Certified Documentary Credit Specialist (CDCS)',
  ],
  achievements: [
    'Strengthened group liquidity planning across multiple balance sheets',
    'Optimized finance costs and improved capital efficiency',
    'Established robust FX and trade finance governance frameworks',
    'Supported enterprise expansion through disciplined treasury leadership',
  ],
  philosophy: 'Samuel believes strong treasury governance, disciplined risk management, and data-driven capital strategy are essential to building resilient enterprises capable of thriving across volatile and regulated markets.',
},
  'yusuf-adeojo': {
  name: 'Yusuf Adeojo',
  title: 'Managing Director, Kolomoni Microfinance Bank Nigeria',
  img: 'https://picsum.photos/seed/sreeram/600/800',
  bio: 'C-suite executive and product-led growth strategist with deep expertise in inclusive banking, embedded finance, and digital financial ecosystems.',
  background: 'Yusuf Adeojo is the Managing Director of Kolomoni Microfinance Bank Nigeria, where he provides strategic leadership across business growth, regulatory compliance, digital transformation, and customer-centric product innovation. He operates at the intersection of strategy, product architecture, and market expansion, positioning Kolomoni as a scalable, technology-enabled institution advancing inclusive financial access.',
  experience: [
    'Managing Director, Kolomoni Microfinance Bank Nigeria',
    'ExCo Member & Divisional Head, Product Management and Inclusive Banking, Heritage Bank Plc',
    'Led retail product lifecycle ownership and digitization initiatives',
    'Structured fintech and third-party agent partnerships',
    'Leadership roles at Sterling Bank and Oceanic Bank',
    'Built and scaled agent banking networks',
    'Strengthened compliance and automated transaction workflows',
  ],
  expertise: [
    'Inclusive Banking Strategy',
    'Embedded Finance',
    'Digital Financial Ecosystems',
    'Retail Product Management',
    'Agent Network Expansion',
    'Regulatory Compliance & Risk Governance',
    'Market Expansion Strategy',
  ],
  credentials: [
    'Postgraduate Studies in International Business',
    'Doctoral Research in Inclusive Economic Development',
  ],
  achievements: [
    'Scaled and strengthened Kolomoni’s agent and digital banking footprint',
    'Led region-driven product innovation through fintech partnerships',
    'Enhanced customer engagement and retail strategy execution',
    'Advanced digitization and operational efficiency initiatives',
  ],
  philosophy: 'Yusuf believes sustainable financial inclusion is driven by disciplined strategy, technology-enabled distribution, and product innovation that expands access while maintaining strong governance standards.',
},
  'macdonald-okoh': {
  name: 'Macdonald Okoh',
  title: 'Head of International Business, CapitalSage Holdings / Managing Director, Kolomoni Microfinance Bank Gambia',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/8698cd002782950e0ba4640e911186a076f66397/okoh.webp',
  bio: 'Seasoned fintech executive and cross-border expansion strategist with nearly two decades of experience driving digital banking, financial inclusion, and payment innovation across Africa.',
  
  background: 'As Head of International Business at CapitalSage Holdings, Macdonald leads the Group’s Pan-African expansion strategy, overseeing market entry, licensing, regulatory engagement, strategic partnerships, and fintech product localization. He ensures expansion initiatives are regulator-aligned, commercially viable, and built for sustainable scale.',
  
  experience: [
    'Nearly 20 years in fintech, digital banking, and financial services',
    'Pan-African market entry and expansion leadership',
    'Regulatory engagement, licensing, and compliance structuring',
    'Digital banking transformation and product innovation',
    'Cross-border payments and agent banking ecosystem development',
  ],
  
  expertise: [
    'International Expansion Strategy',
    'Digital Banking and Financial Inclusion',
    'Fintech Product Localization',
    'Regulatory Strategy and Compliance',
    'Payment Systems and Ecosystem Development',
    'Institutional Growth and Market Execution',
  ],
  
  background2: 'Concurrent Managing Director of Kolomoni Microfinance Bank, Gambia, where he leads governance strengthening, digital transformation, product innovation, and expansion of financial access within the Gambian financial ecosystem.',
  
  achievements: [
    'Led fintech and banking expansion into multiple African markets',
    'Strengthened governance and operational frameworks for financial institutions',
    'Scaled agent banking and merchant payment ecosystems',
    'Successfully localized fintech products for diverse regulatory environments',
    'Positioned Kolomoni Gambia as a resilient and technology-enabled financial institution',
  ],
  
  philosophy: 'Macdonald believes sustainable fintech growth requires balancing innovation with regulatory discipline, building scalable financial institutions that expand access while maintaining institutional strength and long-term stability.',
},
'mark-duru': {
  name: 'Mark Nduka Duru',
  title: 'Managing Director, Ercas Integrated Solutions',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/7e0e35bfa5565c0ed7ac600ef63c493c0b0670bb/Mark%20Duru.jpg',
  bio: 'Growth-focused fintech executive with over two decades of cross-industry experience spanning digital payments, enterprise integrations, insurance, and strategic partnerships.',
  
  background: 'As Managing Director of Ercas Integrated Solutions, Mark leads commercial strategy, institutional partnerships, and enterprise adoption across the Group’s payments and digital infrastructure portfolio—translating complex fintech solutions into scalable revenue opportunities through disciplined execution and ecosystem alignment.',
  
  experience: [
    '20+ years across fintech, digital payments, enterprise integrations, and insurance',
    'Commercial strategy leadership and enterprise adoption for digital infrastructure',
    'Go-to-market strategy for embedded digital finance infrastructure across Africa',
    'Strategic partnerships and enterprise integrations with banks and large merchants',
    'Negotiation, revenue architecture, and stakeholder management across competitive markets',
  ],
  
  expertise: [
    'Commercial Strategy',
    'Strategic Partnerships',
    'Enterprise Integrations',
    'Go-to-Market Execution',
    'Digital Payments Infrastructure',
    'Revenue Growth and Adoption Strategy',
  ],
  
  background2: 'Previously Director, Partnerships & Growth at Blusalt Financial Services, where he led go-to-market strategy for embedded digital finance infrastructure across the African business ecosystem. Earlier, he spent eight years at eTranzact International Plc leading strategic partnerships and enterprise integrations across deposit money banks and large merchant institutions, including onboarding newly licensed banks, API-driven switching platforms, and alternative digital lending suites.',
  
  achievements: [
    'Led enterprise adoption and institutional partnerships across payments and infrastructure portfolios',
    'Drove go-to-market execution for embedded digital finance infrastructure across Africa',
    'Managed strategic banking relationships and cross-channel growth initiatives',
    'Delivered structured sales growth through high-impact partnership execution',
    'Enabled onboarding and integrations for banks, merchants, and digital finance platforms',
  ],
  
  credentials: [
    'Associate, Chartered Institute of Cost Management',
  ],
  
  philosophy: 'Mark believes sustainable fintech scale comes from commercial discipline—building trust-led partnerships, simplifying complex infrastructure into clear value, and executing growth strategies that align institutions and markets.',
},
  'yvonne-akintomide': {
  name: 'Yvonne Akintomide',
  title: 'Managing Director, Regius Asset Management',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/aed7162565af9db5375e524670696077ab317f34/yvonne.jpg',
  bio: 'Managing Director of Regius Asset Management with 14+ years of experience across asset management, wealth management, strategy, and business development—focused on building trust and long-term value through disciplined execution.',
  
  background: 'Yvonne leads Regius Asset Management’s investment strategy, business growth, and client engagement across institutional, corporate, and private wealth segments. Her approach blends market insight, structured execution, and a clear understanding of investor needs to deliver outcomes aligned with client objectives and prevailing market realities.',
  
  experience: [
    '14+ years across asset management, wealth management, strategy, and business development',
    'Led investment strategy and client engagement across institutional, corporate, and private wealth segments',
    'Product development and launches across fixed income, bonds, and emerging market strategies',
    'Portfolio construction, advisory strengthening, and market expansion initiatives',
    'Operational, governance, and institutional partnership oversight',
  ],
  
  expertise: [
    'Asset & Wealth Management',
    'Investment Strategy',
    'Product Development',
    'Portfolio Construction',
    'Business Growth & Market Expansion',
    'Client Advisory & Relationship Management',
    'Governance & Operational Oversight',
  ],
  
  credentials: [
    'MBA, Business School Netherlands',
    'Certified Financial Planning & Wealth Manager',
  ],
  
  previousRoles: [
    'Senior roles across asset management and pension institutions',
    'Led wealth management teams and business development initiatives',
    'Supported enterprise strategy execution and governance frameworks',
  ],
  
  achievements: [
    'Developed and launched multiple investment products across fixed income, bonds, and emerging market strategies',
    'Grew assets under management through stronger advisory offerings and distribution partnerships',
    'Expanded institutional partnerships and deepened high-net-worth and corporate client relationships',
    'Strengthened operational and governance frameworks supporting sustainable growth',
  ],
  
  philosophy: 'Yvonne leads with clarity, disciplined execution, and a steady focus on building trust—creating investment solutions that reflect market realities while delivering long-term value for clients.',
},
  'simisola-ojumu': {
  name: 'Simisola Ojumu',
  title: 'Managing Director, Regius Capital',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/4f29e88830efe60fcc825b14b47c89c826e25c02/Simisola%20Ojumu.jpg',
  bio: 'Investment banking and corporate finance executive with over 18 years of experience structuring and executing debt and equity transactions across multiple sectors, helping corporates translate growth plans into financed outcomes.',
  
  background: 'As Managing Director of Regius Capital, the SEC-licensed issuing house within the CapitalSage Group, Simisola leads investment banking strategy, advising corporates, development finance institutions, and asset managers on capital raising, transaction structuring, and execution. She oversees deal origination, structuring, negotiation, and execution while ensuring strong governance, regulatory alignment, and senior stakeholder engagement.',
  
  experience: [
    '18+ years in investment banking and corporate finance',
    'Capital raising, debt and equity structuring, and transaction execution',
    'Extensive work across banking, financial services, and manufacturing sectors',
    'Investor engagement with domestic and international institutions, DFIs, and multilaterals',
    'Leadership in equities, fixed income sales, and capital markets advisory',
  ],
  
  expertise: [
    'Investment Banking',
    'Capital Raising and Transaction Structuring',
    'Debt and Equity Advisory',
    'Corporate Finance',
    'Investor Relations and Stakeholder Management',
    'Capital Markets Strategy and Execution',
  ],
  
  credentials: [
    'MBA, Lagos Business School',
    'Member, Chartered Institute for Securities and Investment (UK)',
    'Associate, Chartered Institute of Stockbrokers (Nigeria)',
    'Authorized Dealing Clerk, Nigerian Exchange Group',
    'SEC-Registered Sponsored Individual',
  ],
  
  previousRoles: [
    'ABSA Group Nigeria',
    'Renaissance Capital Securities Nigeria Limited',
    'CardinalStone Partners Limited',
    'WSTC Financial Services Limited',
    'LeadCapital Plc',
  ],
  
  achievements: [
    'Led and executed major debt and equity capital market transactions',
    'Structured financing solutions for corporates and institutional clients',
    'Managed relationships with global investors, DFIs, and government stakeholders',
    'Supported public offerings, bond issuances, and strategic capital raises',
    'Strengthened Regius Capital’s position as a trusted issuing house and advisory firm',
  ],
  
  philosophy: 'Simisola believes effective capital markets advisory combines technical precision, investor trust, and strategic clarity-enabling institutions to access capital efficiently while supporting sustainable growth.',
},
'martins-bamgbose': {
  name: 'Martins Bamgbose',
  title: 'Head of Business, CreditAssist Investment Limited',
  img: 'https://raw.githubusercontent.com/DannyYo696/csassets/861d01a0b6204b09e6a514f80c3dafb988820b48/Martins%20Bamgbose.jpg',
  bio: 'Strategic credit and structured finance leader with deep expertise in export finance, agribusiness, commodity lending, and corporate banking, focused on building disciplined and scalable enterprise financing platforms.',
  
  background: 'As Head of Business at CreditAssist Investment Limited, Martins leads enterprise deal origination, capital structuring, and portfolio strategy. He drives the design and execution of structured financing solutions across priority sectors, ensuring alignment between capital deployment, commercial viability, and regulatory discipline.',
  
  experience: [
    'Extensive leadership across credit, structured finance, and corporate banking',
    'Deal origination, capital structuring, and portfolio strategy leadership',
    'Export finance, agribusiness financing, and commodity lending expertise',
    'Trade finance structuring across exchange platforms and corporate ecosystems',
    'Development finance engagement and institutional partnership management',
  ],
  
  expertise: [
    'Structured Finance and Credit Strategy',
    'Export and Trade Finance',
    'Agribusiness and Commodity Financing',
    'Capital Structuring and Deal Origination',
    'Portfolio Strategy and Risk Management',
    'Enterprise and Institutional Financing',
  ],
  
  credentials: [
    'Advanced professional training in Agribusiness Finance',
    'Professional development in Credit Leadership and Financial Analysis',
  ],
  
  previousRoles: [
    'Senior leadership roles across merchant banking and corporate banking institutions',
    'Export finance and agribusiness financing leadership positions',
    'Institutional partnership engagement with development finance institutions',
  ],
  
  achievements: [
    'Structured and delivered complex lending solutions across agriculture and trade sectors',
    'Built and scaled credit portfolios from inception with strong risk discipline',
    'Designed bespoke financing instruments aligned with sector-specific realities',
    'Strengthened institutional partnerships across development and corporate finance ecosystems',
    'Positioned CreditAssist as a disciplined and growth-oriented structured finance platform',
  ],
  
  philosophy: 'Martins believes sustainable lending requires disciplined credit judgment, deep sector understanding, and structured capital solutions that enable enterprise growth while preserving long-term portfolio strength.',
},
'ada-boniface': {
  name: 'Ada Boniface',
  title: 'Managing Director, AfrikMoney',
  img: 'https://picsum.photos/seed/tolulope/600/800',
  bio: 'Senior financial services executive and transformation strategist with over 25 years of experience spanning commercial banking, institutional finance, and enterprise transformation across Nigeria, West Africa, and the United Kingdom.',
  
  background: 'As Managing Director of AfrikMoney, the company behind Tiki by CapitalSage, Ada leads the strategic expansion of cross-border financial services. She combines governance discipline with innovation-led growth, ensuring the platform scales with strong regulatory alignment, operational resilience, and commercial sustainability.',
  
  experience: [
    '25+ years across commercial banking, institutional finance, and financial transformation',
    'Leadership in cross-border financial services and digital platform expansion',
    'Enterprise transformation delivery across Tier One UK and African banking institutions',
    'Governance oversight, regulatory compliance, and risk management leadership',
    'Business architecture, programme delivery, and enterprise change execution',
  ],
  
  expertise: [
    'Financial Services Transformation',
    'Cross-Border Financial Infrastructure',
    'Enterprise Change and Programme Delivery',
    'Governance, Risk, and Regulatory Strategy',
    'Institutional Banking and Corporate Finance',
    'Business Architecture and Strategic Execution',
  ],
  
  credentials: [
    'Chartered Accountant',
    'UK-Certified Business Architect and Analyst',
  ],
  
  previousRoles: [
    'Corporate and Financial Institutions Leadership, GTBank UK',
    'Transformation Consultant via KY-WELLS Limited (Royal Bank of Scotland, HSBC, Infosys, Royal Bank of Canada)',
    'Assistant Vice President, FCMB Group Plc',
    'Banking career foundation at Guaranty Trust Bank Group',
  ],
  
  achievements: [
    'Led strategic expansion of AfrikMoney’s cross-border financial services platform',
    'Delivered enterprise transformation mandates across Tier One UK banking institutions',
    'Strengthened governance, credit risk, and operational risk frameworks at GTBank UK',
    'Supported international capital raising, investor engagement, and credit rating processes',
    'Aligned financial technology initiatives with sustainable commercial and regulatory outcomes',
  ],
  
  philosophy: 'Ada believes sustainable financial innovation must be built on strong governance, regulatory discipline, and strategic clarity—ensuring platforms scale responsibly while delivering lasting value across markets.',
},
'olabisi-racheal': {
  name: 'Olabisi Rachael',
  title: 'Head of Business, Tiki by CapitalSage',
  img: 'https://picsum.photos/seed/tolulope/600/800',
  bio: 'Cross-border payments strategist and remittance growth leader focused on expanding globally competitive remittance corridors and building scalable financial infrastructure for international money movement.',
  
  background: 'As Head of Business at Tiki by CapitalSage, Olabisi leads commercial strategy, international partnerships, and market development for the Group’s remittance platform. She is responsible for expanding global payout and collection networks, strengthening institutional partnerships, and positioning Tiki as a customer-centric and globally competitive cross-border payments solution.',
  
  experience: [
    'Leadership in cross-border payments and remittance ecosystem expansion',
    'Commercial strategy and international business development execution',
    'Structuring partnerships across banking, fintech, and mobile money infrastructure',
    'Expansion of global payout and remittance corridors',
    'Regulatory-aligned growth strategy and cross-jurisdictional operational scaling',
  ],
  
  expertise: [
    'Cross-Border Payments Strategy',
    'Remittance Corridor Expansion',
    'International Partnerships and Business Development',
    'Fintech and Mobile Money Ecosystems',
    'Commercial Growth and Market Development',
    'Regulatory-Aligned Financial Infrastructure Scaling',
  ],
  
  previousRoles: [
    'Leadership roles across banking, fintech, and remittance infrastructure platforms',
    'Strategic partnership and business development roles supporting cross-border payment expansion',
  ],
  
  achievements: [
    'Expanded global remittance corridors and institutional payout partnerships',
    'Positioned Tiki by CapitalSage as a scalable and globally competitive remittance platform',
    'Structured strategic partnerships enabling cross-border financial access',
    'Strengthened remittance infrastructure serving diaspora communities, SMEs, and traders',
    'Aligned commercial growth initiatives with long-term international expansion strategy',
  ],
  
  philosophy: 'Olabisi believes scalable remittance platforms are built through strong partnerships, regulatory discipline, and customer-centered innovation—enabling seamless, trusted, and globally relevant financial connectivity.',
},
'david-novak': {
  name: 'David Novak',
  title: 'Managing Director, Sagebrush Wealth FZE',
  img: 'https://picsum.photos/seed/tolulope/600/800',
  bio: 'Financial services and fintech executive with over 15 years of leadership experience across Europe, the Middle East, and Asia',
  
  background: 'As Managing Director of Sagebrush Wealth FZE, the digital and virtual assets arm of CapitalSage Technology Group, David leads the strategic development and operational scaling of regulated digital financial services. He focuses on aligning governance, regulatory compliance, and commercial execution to build secure, transparent, and scalable digital asset platforms.',
  
  experience: [
    '15+ years of leadership across fintech, financial services, and digital assets',
    'Executive leadership in regulated financial and virtual asset environments',
    'Market entry strategy and international business expansion across global markets',
    'Payments, treasury, liquidity management, and digital asset infrastructure expertise',
    'Institutional relationship management, investor engagement, and board-level coordination',
  ],
  
  expertise: [
    'Digital Assets and Virtual Asset Strategy',
    'International Financial Services Expansion',
    'Governance, Risk, and Regulatory Alignment',
    'Payments and Treasury Infrastructure',
    'Institutional Partnerships and Market Development',
    'Commercial Execution and Operational Scaling',
  ],
  
  credentials: [
    'Degree in Financial Management',
    'Professional certifications in financial markets',
  ],
  
  previousRoles: [
    'Vice President, Argentex (Dubai International Financial Centre)',
    'General Manager, FTD Limited (Dubai Operations)',
    'Senior leadership roles at iBanFirst, scaling international B2B payments business',
    'Regional Sales Leadership, Saxo Bank (Central and Eastern Europe)',
  ],
  
  achievements: [
    'Led regulated digital asset business expansion within CapitalSage Technology Group',
    'Built and scaled financial services operations across Europe, Middle East, and Asia',
    'Successfully executed market entry strategies in regulated global financial centres',
    'Developed institutional partnerships supporting long-term financial platform growth',
    'Expanded international payments and treasury infrastructure capabilities',
  ],
  
  philosophy: 'David believes sustainable digital finance must be built on strong governance, regulatory trust, and disciplined execution—ensuring innovation is delivered securely, transparently, and at global institutional standards.',
},
};

export default function ExecutiveProfile() {
  const params = useParams();
  const id = params.id as string;
  const profile = executiveProfiles[id as keyof typeof executiveProfiles];

  if (!profile) {
    return (
      <section className="page-section">
        <div className="container" style={{ textAlign: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
          <h1>Executive Profile Not Found</h1>
          <p style={{ color: 'var(--text-muted)', marginTop: '20px' }}>
            <Link href="/leadership">Return to Leadership Page</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section" style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
     {/* Hero Section */}
<div className="container hero-section">
  {/* Image */}
  <div className="hero-image">
    <img
      src={profile.img || "/placeholder.svg"}
      alt={profile.name}
    />
  </div>

  {/* Info */}
  <div className="hero-info">
    <p className="hero-label">
      Executive Profile
    </p>

    <h1 className="hero-name">
      {profile.name}
    </h1>

    <h2 className="hero-title">
      {profile.title}
    </h2>

    <p className="hero-bio">
      {profile.bio}
    </p>

    {/* Expertise Tags */}
    <div className="hero-tags">
      {profile.expertise.slice(0, 4).map((skill, idx) => (
        <span key={idx}>
          {skill}
        </span>
      ))}
    </div>
  </div>
</div>


      {/* Background Section */}
      <div className="container" style={{ marginBottom: '80px', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.1), rgba(249, 115, 22, 0.05))', borderRadius: '20px', border: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
          Background & Career
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          {profile.background}
        </p>
      </div>

      {/* Experience Grid */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
          Key Experience
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {profile.experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '16px',
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'rgba(249, 115, 22, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary)',
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                ✓
              </div>
              <div>
                <p style={{ color: 'white', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {exp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="container" style={{ marginBottom: '80px' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '40px' }}>
          Key Achievements
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {profile.achievements.map((achievement, idx) => (
            <div key={idx} style={{ paddingLeft: '30px', borderLeft: '3px solid var(--secondary)' }}>
              <p style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '10px' }}>
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Credentials/Philosophy */}
      {profile.credentials && (
        <div className="container" style={{ marginBottom: '80px', padding: '60px', background: 'var(--bg-card)', borderRadius: '20px', border: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>
            Credentials & Certifications
          </h2>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {profile.credentials.map((cred, idx) => (
              <li key={idx} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                • {cred}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Philosophy Section */}
      <div className="container" style={{ marginBottom: '80px', padding: '60px', background: 'linear-gradient(135deg, rgba(0, 50, 132, 0.2), rgba(249, 115, 22, 0.1))', borderRadius: '20px', border: '1px solid var(--border)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '25px' }}>
          Professional Philosophy
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
          "{profile.philosophy}"
        </p>
      </div>

      {/* CTA Section */}
      <div className="container" style={{ marginBottom: '100px', textAlign: 'center' }}>
        <Link href="/leadership" className="btn btn-primary">
          ← Back to Leadership Team
        </Link>
      </div>

      <style jsx>{`
  .hero-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 80px;
  }

  /* Tablet & Mobile */
  @media (max-width: 900px) {
    .hero-section {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }

  .hero-image {
    border-radius: 20px;
    overflow: hidden;
    height: 500px;
  }

  @media (max-width: 900px) {
    .hero-image {
      height: 420px;
    }
  }

  .hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}


  .hero-label {
    color: var(--secondary);
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }

  .hero-name {
    font-family: var(--font-head);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.2;
  }

  @media (max-width: 900px) {
    .hero-name {
      font-size: 2.2rem;
    }
  }

  .hero-title {
    font-size: 1.3rem;
    color: var(--secondary);
    font-weight: 600;
    margin-bottom: 30px;
  }

  .hero-bio {
    font-size: 1.05rem;
    color: var(--text-muted);
    line-height: 1.8;
    margin-bottom: 40px;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .hero-tags span {
  background: rgba(255, 255, 255, 0.12);
  color: white; /* changed from var(--secondary) */
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

`}</style>

    </section>
  );
}
