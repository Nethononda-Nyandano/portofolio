import {
  SiReact,
  SiExpo,
  SiSqlite,
  SiTypescript,
  SiSupabase,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiSocketdotio,
  SiMapbox,
  SiJavascript,
  SiNodedotjs,
  SiHtml5,

  SiGooglemaps,
  SiCss,
} from "react-icons/si";

import { FaJava, FaDatabase } from "react-icons/fa";

const techIcons = {
  React: SiReact,
  ReactJS: SiReact,
  "React Native": SiReact,
  Expo: SiExpo,
  "React Native Expo": SiExpo,
  SQLite: SiSqlite,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Supabase: SiSupabase,
  "Spring Boot": SiSpringboot,
  SpringBoot: SiSpringboot,
  PostgreSQL: SiPostgresql,
  Postgres: SiPostgresql,
  MySQL: SiMysql,
  "Tailwind CSS": SiTailwindcss,
  TailwindCss: SiTailwindcss,
  "NativeWind v5": SiTailwindcss,
  "Socket.IO": SiSocketdotio,
  Mapbox: SiMapbox,
  "Google Maps": SiGooglemaps,
  Java: FaJava,
  HTML5: SiHtml5,
  CSS3:SiCss,
  "Node.js": SiNodedotjs,
  Database: FaDatabase,
};

const TechStack = ({ technologies = [] }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {technologies.map((tech) => {
        const Icon = techIcons[tech];

        return (
          <span
            key={tech}
            title={tech}
            className="border border-neutral-300 flex items-center gap-2  px-3 py-2 font-aenik-regular text-xs text-neutral-600"
                       >
            {Icon && <Icon size={15} aria-hidden="true" />}
            <span>{tech}</span>
          </span>
        );
      })}
    </div>
  );
};

export default TechStack;