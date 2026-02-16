import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";



export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
  index: 0,
  title: "Apex AI",
  href: "/projects/apex-ai",
  tags: [
    "Next.js",
    "React",
    "Google Gemini LLM",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Clerk",
    "Inngest",
  ],
  description:
    "A full-stack AI-powered SaaS career development platform that leverages Google Gemini LLM to generate ATS-optimized resumes, personalized cover letters, career roadmaps, and AI-driven coding practice with interview preparation. Features secure authentication with Clerk, background job processing using Inngest, and a responsive, modern UI built with Tailwind CSS.",
  image: {

    LIGHT: "/images/projects/apexai/ApexAI.png",
    DARK: "/images/projects/apexai/ApexAI.png",
    
  },
},

  {
    index: 1,
    title: "Store It",
    href: "/projects",
    tags: ["ReactJS", "Firebase", "TailwindCSS", "Material UI", "Vercel"],
    image: {
      LIGHT: "/images/projects/storeithomepage.webp",
      DARK: "/images/projects/storeithomepage.webp",
    },
  },
  {
  index: 2,
  title: "3D Systemic Risk Contagion Engine",
  href: "/projects",
  tags: [
    "Python",
    "Streamlit",
    "Network Analysis",
    "Data Visualization",
    "Systemic Risk Modeling"
  ],
  image: {
    LIGHT: "/images/projects/3D_risk_engine/Engine.png",
    DARK: "/images/projects/3D_risk_engine/Engine.png",
  },
},


];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
  name: "Apex AI",
  favicon: "/images/projects/apexai/apexailogo.jpeg",
  background: "bg-[#0F172A] w-[5rem]",
  imageUrl: [
    "/images/projects/apexai/ApexAI.png",
    "/images/projects/apexai/ApexAI.png",
    "/images/projects/apexai/ApexAI.png",
    "/images/projects/apexai/ApexAI.png",
  ],
  description:
    "A full-stack AI-powered SaaS career development platform that leverages Google Gemini LLM to generate ATS-optimized resumes, personalized cover letters, career roadmaps, and AI-driven coding practice with interview preparation. Features secure authentication with Clerk, background job processing using Inngest, and a responsive, modern UI built with Tailwind CSS.",
  sourceCodeHref: "https://github.com/krtanay7/ApexAI-ai-career-coach",
  liveWebsiteHref: "https://apex-ai-brown.vercel.app/",
},


  {
    name: "Store It",
    favicon: "/images/projects/logos/storeit.ico",
    background: "bg-[#fa7275] w-[2rem]",
    imageUrl: [
      "/images/projects/storeithomepage.webp",
      "/images/projects/storeitmedia.webp",
      "/images/projects/storeitsearch.webp",
    ],
    description:
      "A storage management application built with ReactJS and Firebase. Users can securely store, retrieve, and manage their digital assets. Includes real-time synchronization, intuitive UI, and robust security features.",
    sourceCodeHref: "https://github.com/krtanay7/Store-it",
    liveWebsiteHref: "https://store-it-secure-eight.vercel.app/sign-in",
  },
 {
  name: "3D Systemic Risk Contagion Engine",
  favicon: "/images/projects/logos/systemicrisk.ico",
  background: "bg-[#ffb74d] w-[2rem]",
  imageUrl: [
    "/images/projects/3D_risk_engine/Engine.png",
    "/images/projects/3D_risk_engine/Engine.png",
  ],
  description:
    "An interactive analytics dashboard that simulates systemic risk propagation across interconnected financial assets. Built using network analysis and dynamic shock modeling, the project visualizes how financial shocks spread through correlation-based networks with adjustable parameters, real-time metrics, and 3D visualization.",
  sourceCodeHref: "https://github.com/krtanay7/Systemic-Risk-Contagion-Network-Engine",
  liveWebsiteHref: "https://systemic-risk-contagion-network-engine.streamlit.app/",
},
  {
  name: "Job Portal",
  favicon: "/images/projects/jobportal/logo.png",
  background: "bg-[#4f46e5] w-[2rem]",
  imageUrl: [
    "/images/projects/jobportal/portl.png",
    "/images/projects/jobportal/portl.png",
    "/images/projects/jobportal/portl.png",
  ],
  description:
    "A full-stack MERN job portal application designed to streamline the hiring process for recruiters and candidates. Recruiters can manage job postings while candidates can browse, apply, and track applications. The platform includes authentication, role-based access, dashboards, and scalable REST API architecture.",
  sourceCodeHref: "https://github.com/krtanay7/Job-Portal",
  liveWebsiteHref: "https://job-portal-frontend-three-inky.vercel.app/",
},

];
