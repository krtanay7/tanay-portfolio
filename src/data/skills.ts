import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// =====================
// Languages
// =====================
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import JavaSvg from "@/public/icons/java.svg";
import CppSvg from "@/public/icons/c.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// =====================
// Frontend
// =====================
import ReactjsSvg from "@/public/icons/reactjs.svg";
import AngularSvg from "@/public/icons/angular-icon.svg";
import NextSvg from "@/public/icons/next-js.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";

// =====================
// Backend
// =====================
import NodejsSvg from "@/public/icons/nodejs.svg";
import ExpressSvg from "@/public/icons/Express.svg";
import DjangoSvg from "@/public/icons/django.svg";
import FlaskSvg from "@/public/icons/Flask.svg";

// =====================
// Databases & ORM
// =====================
import MysqlSvg from "@/public/icons/mysql.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgresSvg from "@/public/icons/postgresql.svg";
import PrismaSvg from "@/public/icons/prisma.svg";

// =====================
// Machine Learning
// =====================
import ScikitlearnSvg from "@/public/icons/scikit-learn.svg";
import OpenCvSvg from "@/public/icons/OpenCV.svg";
import PandasSvg from "@/public/icons/Pandas.svg";
import NumpySvg from "@/public/icons/numpy.svg";
import MLSvg from "@/public/icons/ml.svg";

// =====================
// DevOps / Cloud
// =====================
import DockerSvg from "@/public/icons/docker.svg";
import AwsSvg from "@/public/icons/aws.svg";
import VercelSvg from "@/public/icons/vercel.svg";
import RenderSvg from "@/public/icons/render.svg";

// =====================
// Tools
// =====================
import GitSvg from "@/public/icons/git.svg";
import GithubSvg from "@/public/icons/github.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import JwtSvg from "@/public/icons/jwt.svg";
import ClerkSvg from"@/public/icons/clerk.svg";
import JpSvg from"@/public/icons/jupyter.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "C++", icon: CppSvg },
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CssSvg },
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
      { name: "Java", icon: JavaSvg },
      
    ],
  },
  {
    sectionName: "Frontend Libraries & Frameworks",
    skills: [
      { name: "React.js", icon: ReactjsSvg },
      { name: "Next.js", icon: NextSvg },
      { name: "Angular", icon: AngularSvg },
      { name: "Redux", icon: ReduxSvg },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
    ],
  },
  {
    sectionName: "Backend & APIs",
    skills: [
      { name: "Node.js", icon: NodejsSvg },
      { name: "Express.js", icon: ExpressSvg },
      { name: "Django", icon: DjangoSvg },
      { name: "Flask", icon: FlaskSvg },
    ],
  },
  {
    sectionName: "Databases & ORMs",
    skills: [
      { name: "MySQL", icon: MysqlSvg },
      { name: "MongoDB", icon: MongoDBSvg },
      { name: "PostgreSQL", icon: PostgresSvg },
      { name: "Prisma ORM", icon: PrismaSvg },
    ],
  },
  {
    sectionName: "Machine Learning & Data Science",
    skills: [
      { name: "Scikit-learn", icon: ScikitlearnSvg },
      { name: "OpenCV", icon: OpenCvSvg },
      { name: "Pandas", icon: PandasSvg },
      { name: "NumPy", icon: NumpySvg }, 
      { name: "ML Algorithms", icon: MLSvg },   

    ],
  },
  {
    sectionName: "DevOps, Cloud & Deployment",
    skills: [
      { name: "Vercel", icon: VercelSvg },
      { name: "Render", icon: RenderSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "AWS", icon: AwsSvg },
    
    ],
  },
  {
    sectionName: "Tools & Utilities",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Git-Hub", icon: GithubSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "Jupyter Notebook(.ipynb)", icon: JpSvg },
    //{ name: "Google Colab", icon: SiGooglecolab },
      { name: "JWT Authentication", icon: JwtSvg },
      { name: "Clerk Authentication", icon: ClerkSvg },
    ],
  },
];
