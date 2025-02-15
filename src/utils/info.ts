import type { Article, Project } from "../interfaces";

export const education: Article[] = [
  {
    title: "Net 9 & Angular 19 Developer",
    dateRange: "Ene 2025 - Mar 2025",
    place: "Galaxy Training",
    description:
      "Curso Fullstack de 48 horas.\\nEn el backend se desarolló Minimal APIs con .NET9 y en el frontend la interfaz de usuario utilizando Angular.",
  },
  {
    title: "UX & UI Designer: Diseño de experiencia de usuario",
    dateRange: "Jun 2024 - Sep 2024",
    place: "Toulouse Lautrec",
    description:
      "Curso que constó de los siguientes 3 módulos:\\nDiseño de experiencia de usuario, diseño visual y diseño de interacción en una duración total de 48 horas.\\nSe desarrolló el diseño de un aplicativo móvil como proyecto final.",
  },
  {
    title: "Bachiller en Ingeniería Electrónica",
    dateRange: "2015 - 2020",
    place: "Universidad Nacional de Ingeniería",
  },
] as const;

export const experiencia: Article[] = [
  {
    title: "Documentador FTTH",
    dateRange: "Oct 2022 - Ene 2025",
    place: "Semi Perú Montajes Industriales SAC",
    description:
      "Coordinación con el personal técnico las actividades a realizar para el levantamiento de información y reparación de averías.\\nElaboración de macros (usando VBA-Excel) para automatizar la elaboración de entregables de FTTH, planos, reportes fotográficos, entre otros.",
  },
  {
    title: "Supervisor de Fibra Óptica",
    dateRange: "Jun 2021 - Ene 2022",
    place: "Sergen Telecom SAC",
    description:
      "Curso que constó de los siguientes 3 módulos: \\nDiseño de experiencia de usuario, diseño visual y diseño de interacción en una duración total de 48 horas.\\nSe desarrolló un aplicativo móvil como proyecto final.",
  },
] as const;

export const projects: Project[] = [
  {
    title: "Mandril Importaciones",
    description:
      "Proyecto Fullstack de un e-commerce para generar un mejor alcance al público objetivo así como un panel de administración de la tienda.",
    technologies: ["NextJS", "Nodejs", "Docker"],
    show: false,
  },
  {
    title: "Smart Campus UNI",
    description:
      "Proyecto colaborativo desarrollado en React del cuál soy partícipe.\\nRealicé las siguientes actividades:\\n - Migración del código a Typescript\\n - Optimización del código\\n - Mantenimiento del aplicativo",
    technologies: ["Typescript", "React", "Github"],
  },
  {
    title: "Local",
    description:
      "Landing Page del emprendimiento Local (servicio de diseño interior).",
    technologies: ["Astro", "Figma"],
    show: false,
  },
] as const;

export const technologies = [
  {
      title: "Frontend",
      technologies: ["React", "Tailwind", "Astro"],
      show: true,
  },
  {
      title: "Backend",
      technologies: ["Nodejs", ],
      show: true,
  },
  {
      title: "Herramientas",
      technologies: ["Git", "Docker",],
      show: true,
  },
] as const;