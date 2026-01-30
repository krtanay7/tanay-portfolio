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
  title: "Job Portal",
  href: "/projects/job-portal",
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "MERN",
    "REST API",
  ],
  image: {
    LIGHT: "/images/projects/jobportal/portl.png",
    DARK: "/images/projects/jobportal/portl.png",
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
  liveWebsiteHref: "",
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
    sourceCodeHref: "https://github.com/SaurabhKumar171/store-it",
    liveWebsiteHref: "https://store-it-secure-eight.vercel.app/sign-in",
  },
  {
  name: "Job Portal",
  favicon: "/images/projects/jobportal/logo.png",
  background: "bg-[#0F172A] w-[5rem]",
  imageUrl: [
  
    "/images/projects/jobportal/portl.png",
  ],
  description:
    "A full-stack MERN Job Portal application designed to streamline the hiring process for recruiters and job seekers. Recruiters can create, edit, and manage job postings, while candidates can browse opportunities, apply for jobs, and track application status. The platform features secure JWT-based authentication, role-based access control, recruiter and candidate dashboards, job search and filtering, and a responsive UI. Built with real-world scalability in mind using React, Node.js, Express, and MongoDB.",
  sourceCodeHref: "https://github.com/krtanay7/Job-Portal",
  liveWebsiteHref: "https://job-portal-tanay-three-inky.vercel.app/",
},

];
