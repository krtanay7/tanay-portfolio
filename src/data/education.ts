import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";


export const EDUCATION: ExperienceShowcaseListItemProps[] = [
  {
    title: "Bachelor Of Technology in Computer Science",
    organisation: {
      name: "Parul University",
      href: "https://paruluniversity.ac.in",
      logo: "/icons/PU.png",
    },
    date: "2022–2026",
    location: "Vadodara, Gujarat",
    description:
      "Relevant courses included Data Structures and Algorithms, Web Design, Cloud Computing, Artificial Neural Networks, and Database Management.",
  },
  {
    title: "Higher Secondary School",
    organisation: {
      name: "Laxhmi Narayan Dubey College",
      href: "http://www.cbsschool.in/",
      logo: "/icons/BSEB.png",
    },
    date: "2020–2022",
    location: "Motihari, Bihar",
    description: "Completed higher secondary education with a focus on science subjects.",
  },
  {
    title: "Secondary School",
    organisation: {
      name: "Delhi Public School",
      href: "https://www.dpspatna.com/",
      logo: "/icons/dps.png",
    },
    date: "2010–2020",
    location: "Patna, Bihar",
    description: "Completed secondary education with strong academic foundations.",
  },
];
