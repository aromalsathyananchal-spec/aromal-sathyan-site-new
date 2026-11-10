/*
 * Central content for the combined site.
 * Source of truth: Aromal_Sathyan_CV_NEW.pdf.
 * Services are DRAFT wording based on the CV. Confirm before publishing.
 */

export const profile = {
  name: "Aromal Sathyan",
  label: "Hello, I'm",
  title: "International Business Development | Market Research | Marketing Operations",
  intro:
    "MBA graduate in International Business Development from ICD Business School, Paris. I combine market research, business development support and marketing operations to identify opportunities and support growth.",
  availability: "Open to freelance projects and full-time roles.",
  location: "Paris, France",
  email: "arsathya.acl@gmail.com",
  phone: "+33 7 49 40 30 92",
  linkedin: "https://www.linkedin.com/in/aromal-sathyan-b4827427b",
  resumePath: "/Aromal_Sathyan_CV.pdf",
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// DRAFT services. Confirm before publishing.
export const services = [
  {
    title: "Market Research",
    description: "Market and competitor research, digital ecosystem analysis and clear summaries of what the findings mean for your business.",
  },
  {
    title: "Business Development Support",
    description: "Identifying and evaluating potential business opportunities, with support on research and early-stage partnership groundwork.",
  },
  {
    title: "Marketing Operations",
    description: "Email campaign support, audience segmentation, campaign performance tracking and app-store keyword research.",
  },
  {
    title: "Brand & Marketing Strategy",
    description: "Brand and competitor analysis, SWOT, customer segmentation, inbound marketing plans and loyalty strategy, drawn from my MBA case work.",
  },
];

export const focusAreas = [
  {
    title: "International Business Development",
    items: ["Business opportunity identification", "Business communication", "Negotiation strategies (MBA coursework)"],
  },
  {
    title: "Market Research & Analysis",
    items: ["Market and competitor research", "Digital ecosystem analysis", "Data analysis and KPI monitoring"],
  },
  {
    title: "Marketing Operations & Customer",
    items: ["Email marketing and audience segmentation", "Campaign performance tracking", "App-store optimisation (ASO)", "CRM and relationship marketing (MBA coursework)"],
  },
  {
    title: "Coordination & Operations",
    items: ["Project and cross-functional coordination", "Team training and daily operations", "Administrative records and reporting"],
  },
];

export const skillGroups = [
  { title: "Business & Research", items: ["International business development support", "Market and competitor research", "Data analysis", "KPI monitoring", "Negotiation"] },
  { title: "Marketing & Coordination", items: ["Email marketing", "Audience segmentation", "CRM and relationship marketing", "App-store optimisation (ASO)", "Project coordination"] },
  { title: "Tools & Technical", items: ["Microsoft Excel", "Microsoft Office 365", "SQL and RDBMS", "Google Analytics", "IT troubleshooting", "Network and server support"] },
];

export const languages = [
  { language: "English", level: "Full professional proficiency" },
  { language: "French", level: "Elementary" },
];

export const interests = [
  "AI in business and practical business applications",
  "Digital transformation",
  "CRM and customer intelligence",
  "International market expansion",
  "Innovation and competitive strategy",
];

export const personalInterests = ["Short film direction and script writing", "Travel and cultural exploration", "Technology and automotive"];

export const experience = [
  {
    role: "Crew Trainer (Formateur)",
    org: "McDonald's, France",
    period: "Oct 2025 – Sep 2026",
    bullets: [
      "Trained and supported new team members on service procedures, hygiene, quality and daily operating standards",
      "Coordinated team positions and workflow during busy shifts to keep service fast and consistent",
      "Worked across customer service, cash operations, kitchen, fries and beverage stations, and office-related tasks",
      "Communicated daily with customers and colleagues in a French-speaking, multicultural team",
    ],
  },
  {
    role: "Market Research Intern",
    org: "Way.com Inc, United States (Remote) · Car-services and mobility platform",
    period: "Mar 2025 – Sep 2025",
    bullets: [
      "Supported the Marketing Director with strategic planning, project coordination and cross-functional communication",
      "Assisted the email marketing team with content, audience segmentation and campaign performance tracking",
      "Contributed to app-store optimisation through keyword research and metadata optimisation with the ASO team",
      "Researched Way.com's digital ecosystem, analysing its innovation, technology adaptability and business strategy",
    ],
  },
  {
    role: "Office Assistant (Part-time)",
    org: "McDonald's, Paris, France",
    period: "Dec 2024 – Jun 2025",
    bullets: [
      "Provided administrative and operational support for daily restaurant operations",
      "Assisted with cash reconciliation, billing procedures and daily financial records",
      "Maintained operational documents, reports and administrative records; handled internal communication",
    ],
  },
  {
    role: "Business Development Intern",
    org: "Way.com Inc, United States (Remote)",
    period: "Aug 2024 – Sep 2024",
    bullets: ["Supported the identification, evaluation and development of potential business opportunities in a digital mobility and car-services business"],
  },
  {
    role: "Administrative Assistant & System Operator",
    org: "RPTC Centre for Language Studies, India",
    period: "Jun 2022 – Sep 2023",
    bullets: [
      "Organised and maintained office files, records and administrative documentation",
      "Managed schedules and calendars for staff and instructors",
      "Supported the installation, configuration and maintenance of servers and networks",
    ],
  },
];

// Projects as described in the CV. Do not add outcomes that are not stated there.
export const projects = [
  {
    title: "Fatburger – Strategic Marketing & Brand Analysis",
    type: "Group project",
    summary:
      "Analysed brand positioning, competitive landscape and marketing strategy in the international fast-food industry.",
    topics: ["Brand & competitor analysis", "SWOT", "Customer segmentation", "Customer-journey touchpoints", "Digital marketing", "Loyalty strategies", "International expansion via franchising"],
  },
  {
    title: "Social Media Strategies: Lamborghini and Ferrari",
    type: "MBA case study",
    summary:
      "Critically evaluated both brands' social media strategies using the social marketing process model (fan acquisition, engagement, community building).",
    topics: ["Fan acquisition", "Engagement", "Community building", "Luxury automotive sector"],
    recommendations: "Identified strengths and weaknesses and made tailored recommendations for the luxury automotive sector.",
  },
  {
    title: "Tesla Marketing Strategy & Inbound Plan",
    type: "MBA case study",
    summary:
      "Analysed Tesla's approach to reaching its target audience and the balance between media and off-media channels.",
    topics: ["Target audience reach", "Media vs off-media channels", "Inbound marketing"],
    recommendations: "Recommended an inbound marketing plan to attract and convert potential customers.",
  },
  {
    title: "Tesla's Brand Equity in CRM",
    type: "MBA case study",
    summary: "Analysed Tesla's brand equity using established brand-equity models.",
    topics: ["Disruptive innovation", "Brand loyalty", "Sustainability", "Brand-equity models"],
  },
  {
    title: "Patagonia – Reputation Management & Customer Loyalty",
    type: "MBA strategy project",
    summary: "Strategy project on reputation management and customer loyalty.",
    topics: ["Reputation management", "Customer loyalty"],
  },
  {
    title: "Valeo Service – Digital Marketing “Growth Hackers”",
    type: "MBA digital marketing project",
    summary: "Digital marketing project on growth-hacking approaches for Valeo Service.",
    topics: ["Growth hacking", "Digital marketing"],
  },
  {
    title: "BlackBerry: The Fallen Kingdom",
    type: "Research project · May – Jun 2024",
    summary:
      "Research project analysing BlackBerry's decline and the importance of continuous innovation and adaptability in the technology industry.",
    topics: ["Continuous innovation", "Adaptability", "Technology industry"],
  },
];

export const education = [
  {
    degree: "MBA, International Business Development",
    school: "ICD Business School, Paris, France",
    period: "Feb 2024 – Jan 2026",
    detail: "Key modules: KPI, Data Analysis, Negotiation Strategies, Relationship Marketing, Customer Relationship, Innovation Strategy",
  },
  { degree: "Bachelor of Arts, English", school: "Kerala University, Thiruvananthapuram, India", period: "Jun 2019 – Apr 2022", detail: "" },
  { degree: "Diploma in Computer Applications (DCA)", school: "Centre for Development of Advanced Computing, Thiruvananthapuram, India", period: "Feb 2021 – Nov 2021", detail: "" },
];

export const certifications = [{ name: "Google Analytics Certification", issuer: "Google", date: "Jan 2025", id: "128737359" }];
