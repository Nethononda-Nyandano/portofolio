import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiFlutter,
  SiExpo,
  SiOpenjdk,
  SiSpringboot,
  SiPython,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiDart,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiSqlite,
  SiGit,
  SiGithub,
  SiDocker,
  SiTailwindcss,
  SiCloudflare,
  
} from "react-icons/si";

import { FaAmazon, FaCss3, FaJava} from "react-icons/fa6";
import { GrOracle, GrStorage } from "react-icons/gr";

import {
  Code2,
  Server,
  Database,
  GitBranch,
  Braces,
  Cloud,
} from "lucide-react";

export const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", icon: SiReact, color: "text-sky-400" },
      { name: "React Native", icon: SiReact, color: "text-sky-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: FaCss3, color: "text-[#663399]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      { name: "Expo", icon: SiExpo },
    ],
  },

  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Java", icon: FaJava, color: "text-[#EA2D2E]" },
      { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#393]" },
      { name: "PHP", icon: SiPhp, color: "text-[#4F5D95] " },
    ],
  },

  {
    category: "Database",
    icon: Database,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#00758F]" },
      { name: "Supabase", icon: SiSupabase, color: "text-[#3ECF8E]" },
      { name: "Oracle", icon: GrOracle, color: "text-[#F80000]" },
      { name: "SQLite", icon: SiSqlite, color: "text-[#0F80CC]" },
    ],
  },

  {
    category: "Tools & Version Control",
    icon: GitBranch,
    items: [
      { name: "Git", icon: SiGit, color: "text-[#F1502F]" },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker, color: "text-[#0F80CC]" },
    ],
  },
  {
    category: "Storage",
    icon: GrStorage,
    items: [
      { name: "Cloudflare", icon: SiCloudflare, color: "text-[#F1502F]" },
      { name: "AWS S3", icon: FaAmazon, color: "text-gray-800" },
    ],
  },
];
