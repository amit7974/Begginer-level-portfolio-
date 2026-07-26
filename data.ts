import {
  SiSpring, SiHibernate, SiReact, SiJavascript, SiHtml5, SiCss,
  SiMysql, SiMongodb, SiDocker, SiKubernetes, SiGit,
  SiGithub, SiPostman, SiApachemaven, SiGradle, SiJsonwebtokens,
  SiGooglegemini,
} from 'react-icons/si'
import { FaJava, FaShieldAlt, FaCloud, FaCode, FaRobot, FaAws } from 'react-icons/fa'

export const personalInfo = {
  name: 'Amit Kumar',
  location: 'Noida, India',
  email: 'aayanraj934@gmail.com',
  whatsapp: '917974189893',
  github: 'https://github.com/amit7974',
  resumeUrl: '/resume.pdf',
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/your-username/interview',
  titles: [
    'Java Backend Developer',
    'Spring Boot Developer',
    'Full Stack Engineer',
    'AI-Augmented Developer',
  ],
  bio: "I build reliable, scalable backend systems with Java and Spring Boot, and pair them with clean, modern frontends. I care about clean architecture, secure APIs, and shipping things that actually work in production — and I use AI tools like Claude and ChatGPT to move faster without cutting corners.",
  // Toggle this to switch the badge everywhere: true → "Open for Freelancing", false → "Open to Full-time Roles"
  openForFreelance: true,
  objective: "Seeking a backend or full-stack engineering role where I can design robust APIs, work with distributed systems, and keep learning from experienced engineers.",
}

export const skills = [
  { name: 'Java', icon: FaJava, category: 'Backend' },
  { name: 'Spring Boot', icon: SiSpring, category: 'Backend' },
  { name: 'Spring MVC', icon: SiSpring, category: 'Backend' },
  { name: 'Spring Security', icon: FaShieldAlt, category: 'Backend' },
  { name: 'Hibernate', icon: SiHibernate, category: 'Backend' },
  { name: 'JPA', icon: SiHibernate, category: 'Backend' },
  { name: 'ReactJS', icon: SiReact, category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Frontend' },
  { name: 'HTML', icon: SiHtml5, category: 'Frontend' },
  { name: 'CSS', icon: SiCss, category: 'Frontend' },
  { name: 'MySQL', icon: SiMysql, category: 'Database' },
  { name: 'MongoDB', icon: SiMongodb, category: 'Database' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps' },
  { name: 'Kubernetes', icon: SiKubernetes, category: 'DevOps' },
  { name: 'AWS', icon: FaAws, category: 'DevOps' },
  { name: 'Git', icon: SiGit, category: 'Tools' },
  { name: 'GitHub', icon: SiGithub, category: 'Tools' },
  { name: 'Postman', icon: SiPostman, category: 'Tools' },
  { name: 'Maven', icon: SiApachemaven, category: 'Tools' },
  { name: 'Gradle', icon: SiGradle, category: 'Tools' },
  { name: 'JWT', icon: SiJsonwebtokens, category: 'Security' },
  { name: 'OAuth2', icon: FaShieldAlt, category: 'Security' },
  { name: 'REST API', icon: FaCloud, category: 'Architecture' },
  { name: 'Microservices', icon: FaCode, category: 'Architecture' },
  { name: 'Prompt Engineering', icon: FaRobot, category: 'AI Tools' },
  { name: 'ChatGPT', icon: FaRobot, category: 'AI Tools' },
  { name: 'Claude', icon: FaRobot, category: 'AI Tools' },
  { name: 'Cursor', icon: FaCode, category: 'AI Tools' },
  { name: 'Gemini', icon: SiGooglegemini, category: 'AI Tools' },
]

export const skillLevels = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'REST API Design', level: 88 },
  { name: 'ReactJS', level: 78 },
  { name: 'MySQL / MongoDB', level: 82 },
  { name: 'Docker & AWS', level: 70 },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Real IT Solutions',
    duration: 'Jan 2026 – Jun 2026',
    summary: 'Worked on backend services using Java and Spring Boot, contributing to REST APIs consumed by internal and client-facing applications.',
    achievements: [
      'Built and documented REST APIs used by 3 internal teams',
      'Reduced average API response time by optimizing queries and adding caching',
      'Implemented JWT-based authentication for secure endpoints',
      'Collaborated in an Agile team using Git and code reviews',
    ],
  },
]

export const projects = [
  {
    title: 'Food Delivery Application',
    description: 'A full-stack food ordering platform with real-time order tracking, secure payments, and a restaurant admin dashboard.',
    features: [
      'JWT-secured user authentication',
      'Real-time order status updates',
      'Cart, checkout & order history',
      'Admin dashboard for restaurants',
    ],
    tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'REST API'],
    github: 'https://github.com/amit7974/food-delivery-app',
    demo: '#',
    image: '/projects/food-delivery.svg',
  },
  {
    title: 'Library Management System',
    description: 'A role-based system for managing book inventory, member records, and borrow/return cycles for a library.',
    features: [
      'Role-based access (Admin / Librarian / Member)',
      'Book search, issue & return workflow',
      'Automated fine calculation',
      'Reporting dashboard',
    ],
    tech: ['Java', 'Spring MVC', 'Hibernate', 'MySQL'],
    github: 'https://github.com/amit7974/library-management-system',
    demo: '#',
    image: '/projects/library.svg',
  },
  {
    title: 'Hospital Management System',
    description: 'An appointment and patient records system for small clinics, with doctor scheduling and secure patient data handling.',
    features: [
      'Patient & doctor record management',
      'Appointment scheduling with conflict checks',
      'Role-based Spring Security access',
      'RESTful API for a React frontend',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MongoDB', 'React'],
    github: 'https://github.com/amit7974/hospital-management-system',
    demo: '#',
    image: '/projects/hospital.svg',
  },
]

export const certifications = [
  { title: 'Core Java', issuer: 'Oracle / Training Provider', year: '2025' },
  { title: 'ReactJS', issuer: 'Meta / Coursera', year: '2025' },
  { title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026' },
  { title: 'Docker Essentials', issuer: 'Docker / KodeKloud', year: '2026' },
  { title: 'Guidewire Foundations', issuer: 'Guidewire', year: '2026' },
  { title: 'Prompt Engineering for Developers', issuer: 'DeepLearning.AI', year: '2026' },
]

export const achievements = [
  { label: 'Projects Completed', value: 12 },
  { label: 'Technologies Learned', value: 25 },
  { label: 'Certifications', value: 6 },
  { label: 'GitHub Repositories', value: 30 },
]

export const faqs = [
  { q: 'What kind of role are you looking for?', a: 'Backend or full-stack roles working primarily with Java, Spring Boot, and REST APIs, ideally on distributed or microservice-based systems.' },
  { q: 'Are you open to relocation?', a: 'Yes — I\'m based in Noida, India, and open to relocating or working remotely for the right opportunity.' },
  { q: 'How soon can you join?', a: 'I can typically join within 2–4 weeks of an offer, depending on the role and notice period.' },
  { q: 'Do you use AI tools in your workflow?', a: 'Yes — I use tools like Claude, ChatGPT and Cursor to speed up boilerplate, debugging, and documentation, while keeping full ownership of architecture and code quality.' },
]

export const testimonials = [
  { name: 'Mentor / Team Lead', role: 'Real IT Solutions', quote: 'Placeholder for a testimonial — add a real quote from a manager, mentor, or teammate here once available.' },
]
