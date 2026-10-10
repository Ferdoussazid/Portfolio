export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "fintech" | "web" | "ml";
  github?: string;
  demo?: string;
  highlights: string[];
  metrics?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export interface DeansListAward {
  serial: number;
  semester: string;
  academicYear: string;
  calendarYear: string;
  gpa?: string;
  driveUrl: string;
  title: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "MD. Ferdous Sazid",
    shortName: "Ferdous Sazid",
    title: "Software Developer & Owner at Crochethia",
    tagline: "Architecting High-Impact Web & Payment Systems • Founder of Crochethia",
    bio: "Software Engineer graduated from AIUB (CGPA 3.91, 4x Dean's List). Successfully engineered bKash tokenized payment gateways across 30+ client portals. Currently the Owner and Founder at Crochethia, a handcrafted crochet business based in Jashore, Khulna, Bangladesh, while engineering scalable web architectures.",
    avatar: "https://avatars.githubusercontent.com/u/78679926?v=4",
    email: "ferdoussazid2015@gmail.com",
    phone: "+880 1775004380",
    rawPhone: "01775004380",
    location: "Jashore, Khulna, Bangladesh",
    status: "Owner @ Crochethia • Open for Consulting & Software Projects",
    socials: {
      github: "https://github.com/Ferdoussazid",
      githubRepos: "https://github.com/Ferdoussazid?tab=repositories",
      linkedin: "https://www.linkedin.com/in/ferdous-sazid-444b52199/",
      email: "mailto:ferdoussazid2015@gmail.com",
      crochethiaFb: "https://www.facebook.com/crochethia.official/",
      crochethiaInsta: "https://www.instagram.com/crochethia.official/",
    },
    crochethia: {
      name: "Crochethia",
      role: "Owner & Founder",
      period: "November 1, 2025 – Present",
      location: "Jashore, Khulna, Bangladesh",
      tagline: "Handcrafted Crochet Artistry & Fiber Goods",
      description: "A bespoke crochet brand based in Bangladesh crafting handmade fashion accessories, floral crafts, and artisan fiber products. Currently managing client commissions and developing the official e-commerce web platform.",
      facebook: "https://www.facebook.com/crochethia.official/",
      instagram: "https://www.instagram.com/crochethia.official/",
      status: "Official Website Coming Soon",
    },
  },
  stats: [
    { label: "Ventures", value: "Crochethia", detail: "Founder • Est. Nov 2025" },
    { label: "Fintech Gateways", value: "30+", detail: "bKash Tokenized Deployments" },
    { label: "Academic CGPA", value: "3.91", detail: "AIUB • 4x Dean's List Award" },
    { label: "Location", value: "Jashore", detail: "Khulna, Bangladesh" },
  ],
  experience: [
    {
      company: "Crochethia",
      role: "Owner & Founder",
      period: "11/2025 – Present",
      location: "Jashore, Khulna, Bangladesh",
      type: "Business Owner",
      current: true,
      description: "Founder and executive lead directing operations, customer orders, and digital platform development for Crochethia.",
      achievements: [
        "Founded Crochethia on November 1, 2025, specializing in artisanal handmade crochet goods crafted in Bangladesh.",
        "Overseeing customer acquisition and digital branding across official Facebook and Instagram channels.",
        "Architecting the forthcoming Crochethia custom e-commerce web platform with automated order workflows.",
      ],
      technologies: ["Business Operations", "E-Commerce", "Next.js", "Brand Growth", "Customer Relations"],
    },
    {
      company: "Hyper Systems LTD",
      role: "Software Developer",
      period: "07/2025 – 10/2025",
      location: "Dhaka, Bangladesh",
      type: "Full-Time",
      current: false,
      description: "Payment infrastructure and enterprise frontend engineering in agile cross-functional squads.",
      achievements: [
        "Core member of the bKash Payment Gateway Integration team: engineered tokenized with agreement APIs, webhook verifications, and automated token refresh pipelines.",
        "Delivered production bKash payment integrations across 30+ client web portals with 99.9% payment authorization reliability.",
        "Engineered core modules of Raadar RMS (Restaurant/Retail Management System) web platform using Vue.js.",
      ],
      technologies: ["Node.js", "NestJS", "Vue.js", "bKash Tokenized API", "Laravel", "PostgreSQL", "REST APIs"],
    },
    {
      company: "Hyper Systems LTD",
      role: "Software Engineer Intern",
      period: "09/2024 – 11/2024",
      location: "Dhaka, Bangladesh",
      type: "Internship",
      current: false,
      description: "Hands-on engineering internship focused on payment system testing and API verification.",
      achievements: [
        "Developed automated API testing scripts with Postman to validate payment lifecycle states (Create, Execute, Query, Refund).",
        "Assisted in refactoring legacy PHP payment hooks into modular JavaScript micro-handlers.",
      ],
      technologies: ["JavaScript", "Postman", "PHP", "Git", "REST APIs", "Node.js"],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "American International University - Bangladesh (AIUB)",
      major: "Major in Software Engineering",
      score: "CGPA: 3.91 / 4.00",
      highlights: [
        "Awarded Dean's List Honor 4 Times for continuous academic distinction.",
        "Specialized in Software Architecture, Distributed Systems, Algorithms, and Machine Learning.",
      ],
      period: "Graduated with High Honors",
    },
  ],
  deansListAwards: [
    {
      serial: 1,
      semester: "Spring 2021–2022",
      academicYear: "2021–2022",
      calendarYear: "2022",
      gpa: "3.93",
      title: "Dean's List Award (Spring 2021–22)",
      driveUrl: "https://drive.google.com/file/d/1lmCyT3VEqd1zcnHAv0Xt9_vM-kNKlXBb/view?usp=drive_link",
      description: "Conferred for outstanding academic excellence with a semester GPA of 3.93 / 4.00 at AIUB.",
    },
    {
      serial: 2,
      semester: "Fall 2021–2022",
      academicYear: "2021–2022",
      calendarYear: "2022",
      gpa: "3.88",
      title: "Dean's List Award (Fall 2021–22)",
      driveUrl: "https://drive.google.com/file/d/15weQwyeevhaKDIT3MfhqmVzgwI7nn9mm/view?usp=drive_link",
      description: "Conferred for sustained academic distinction with a semester GPA of 3.88 / 4.00 at AIUB.",
    },
    {
      serial: 3,
      semester: "Spring 2022–2023",
      academicYear: "2022–2023",
      calendarYear: "2023",
      gpa: "4.00",
      title: "Dean's List Award (Spring 2022–23)",
      driveUrl: "https://drive.google.com/file/d/1p3vd6db7htKHaN-a7EDu6uBd_UXfoJy3/view?usp=drive_link",
      description: "Conferred with a perfect semester GPA of 4.00 / 4.00 in advanced software engineering at AIUB.",
    },
    {
      serial: 4,
      semester: "Fall 2022–2023",
      academicYear: "2022–2023",
      calendarYear: "2023 / 2024",
      gpa: "4.00",
      title: "Dean's List Award (Fall 2022–23)",
      driveUrl: "https://drive.google.com/file/d/1ud2HEJ39RFTkj0DConHBslGMmaQ6FdXF/view?usp=drive_link",
      description: "Conferred with a perfect semester GPA of 4.00 / 4.00 leading to cumulative 3.91 graduation honors at AIUB.",
    },
  ] as DeansListAward[],
  academicReference: {
    name: "Zahiduddin Ahmed",
    title: "Lecturer, Department of Computer Science",
    institution: "American International University - Bangladesh (AIUB)",
    email: "zahid@aiub.edu",
  },
  skillCategories: [
    {
      title: "Fintech & Backend Architecture",
      icon: "ShieldCheck",
      description: "Mission-critical payment gateways, microservices, and high-concurrency server environments.",
      skills: [
        { name: "bKash Tokenized API", level: 98, note: "30+ production sites with Agreement flow" },
        { name: "Node.js & Express", level: 95, note: "Async microservices & REST APIs" },
        { name: "NestJS Framework", level: 92, note: "Enterprise TypeScript architecture & guards" },
        { name: "PostgreSQL", level: 90, note: "Relational modeling, indexing & transactions" },
        { name: "RESTful APIs & Webhooks", level: 96, note: "Secure payment webhooks & signature auth" },
      ],
    },
    {
      title: "Modern Web & E-Commerce",
      icon: "LayoutGrid",
      description: "Clean, responsive user interfaces and modern web applications.",
      skills: [
        { name: "Next.js & React", level: 92, note: "App Router, SSR, Server Components & Hooks" },
        { name: "TypeScript", level: 92, note: "Strict type safety & scalable interfaces" },
        { name: "Tailwind CSS", level: 95, note: "Minimal, aesthetic, responsive design systems" },
        { name: "Vue.js", level: 90, note: "Reactive state and dashboard operations" },
        { name: "JavaScript (ES6+)", level: 96, note: "Event loop, closures & asynchronous programming" },
      ],
    },
    {
      title: "Machine Learning & Scientific Computing",
      icon: "Brain",
      description: "Statistical ML models, reinforcement learning, and matrix manipulation.",
      skills: [
        { name: "Python", level: 88, note: "Scientific scripting & data structures" },
        { name: "K-Nearest Neighbors (KNN)", level: 90, note: "Manhattan vs Euclidean distance analysis" },
        { name: "Linear Regression & Gradient Descent", level: 86, note: "Mathematical model optimization" },
        { name: "Neural Networks & Q-Learning", level: 84, note: "State-action spaces & policy iteration" },
        { name: "NumPy & Matplotlib", level: 88, note: "Vector computation & visual charting" },
      ],
    },
  ] as SkillCategory[],
  featuredProjects: [
    {
      id: "bkash-fintech-suite",
      title: "bKash Tokenized Payment Gateway Engine",
      tagline: "Enterprise Payment Integration with Agreement & Recurring Capabilities",
      description: "Production-ready payment gateway orchestration system for Bangladesh's leading MFS provider bKash. Features tokenized checkout with agreement, grant token refresh, execute payment, automated signature verification, and refund webhooks. Deployed in over 30 production websites.",
      tags: ["JavaScript", "Node.js", "NestJS", "bKash API", "Fintech", "Security"],
      category: "fintech",
      github: "https://github.com/Ferdoussazid/Complete-Bkash",
      highlights: [
        "Implemented Tokenized Agreement lifecycle allowing seamless one-click recurring customer charges",
        "Integrated into 30+ client platforms spanning Node, Nest, Laravel, and WordPress",
        "Comprehensive error-handling and fallback recovery for mobile carrier timeouts",
        "Includes Bkash-Agreement and BkashPGW-Demo repositories with postman verification",
      ],
      metrics: "30+ Live Sites • 99.9% Reliability • One-Click Checkout",
    },
    {
      id: "thousand-shades-woman",
      title: "Thousand Shades of Woman",
      tagline: "High-Performance Modern Web Platform on Next.js & Vercel",
      description: "A production web application built using Next.js, React, and TypeScript. Highlights elegant design, seamless navigation, responsive animations, and modern frontend best practices. Deployed live with global edge CDN.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],
      category: "web",
      github: "https://github.com/Ferdoussazid/thousandshadesofwoman",
      demo: "https://thousandshadesofwoman.vercel.app",
      highlights: [
        "Engineered with Next.js App Router and TypeScript for maximum stability and speed",
        "Fluid responsive design with custom aesthetic typography and layout",
        "Live deployment on Vercel with instant global edge cache delivery",
      ],
      metrics: "Live on Vercel • 100% TypeScript • Modern UI/UX",
    },
    {
      id: "transaction-validation",
      title: "Decentralized Transaction Validation System",
      tagline: "Cryptographic Integrity Checks for Financial Transfers",
      description: "Exploration of decentralized transaction verification using PHP and JavaScript. Implements distributed cryptographic verification rules to ensure zero double-spending or tampered transaction logs.",
      tags: ["PHP", "JavaScript", "Fintech", "Security", "Decentralized"],
      category: "fintech",
      github: "https://github.com/Ferdoussazid/Transaction_Validation_System",
      highlights: [
        "Decentralized ledger emulation to prevent fraudulent financial transfers",
        "Client and server-side cryptographic verification handshakes",
        "Rigorous state checking for balance synchronization and tamper-proofing",
      ],
      metrics: "Zero Double-Spend Protocol • Cryptographic Hashes",
    },
    {
      id: "imbd-cinema",
      title: "iMBD — Cinema & Media Directory",
      tagline: "Film Directory, Critic Reviews & Star Ratings Platform",
      description: "A feature-rich film database platform tailored for Bangladesh's film landscape (affectionately dubbed iMBD). Built with PHP, MySQL, JavaScript, and custom styling for cinema aficionados.",
      tags: ["PHP", "MySQL", "JavaScript", "Web Tech"],
      category: "web",
      github: "https://github.com/Ferdoussazid/iMBD",
      highlights: [
        "Comprehensive movie catalog, cast profiles, star ratings, and community reviews",
        "Custom search, filtering engine, and responsive media gallery",
        "Relational database modeling for cinema releases and critic feedback",
      ],
      metrics: "Full Catalog DB • Reviews & Ratings Engine",
    },
    {
      id: "ml-scientific-suite",
      title: "Machine Learning & Scientific AI Suite",
      tagline: "KNN, Linear Regression, Neural Networks & Q-Learning",
      description: "A comprehensive suite of statistical machine learning algorithms and reinforcement learning agents implemented in Python. Includes K-Nearest Neighbors with Manhattan vs Euclidean distance comparison, Linear Regression with Gradient Descent, Multi-layer Neural Networks, and Q-Learning state-action optimization.",
      tags: ["Python", "Machine Learning", "Q-Learning", "NumPy", "Neural Networks"],
      category: "ml",
      github: "https://github.com/Ferdoussazid/K---Nearest-Neighbor",
      highlights: [
        "KNN: evaluates Manhattan vs Euclidean distance formulas for optimal classification accuracy",
        "Linear Regression: Gradient descent convergence from first mathematical principles",
        "Q-Learning: State-action reward optimization navigating dynamic agent environments",
        "Multi-layer Perceptron: Forward propagation and weight optimization",
      ],
      metrics: "Multiple AI Paradigms • Scratch Math Implementation",
    },
  ] as Project[],
  allRepositories: [] as { name: string; language?: string; url: string; desc: string; live?: string }[],
};
