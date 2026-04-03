import Code from "@icons/code.svg?raw";
import Email from "@icons/email.svg?raw";
import Graduation from "@icons/graduation-cap.svg?raw";
import Sharp from "@icons/sharp.svg?raw";
import User from "@icons/user.svg?raw";

import type { Article, NavBar, Project, Technologies } from "../interfaces";

export const education: Article[] = [
    {
        title: "AWS Practitionar and Associate",
        dateRange: "Ago 2025 - Nov 2025",
        place: "Galaxy Training",
        description:
            "Curso diseñado como preparación para obtener la certificación AWS Certified Solutions Architect Associate."
    },

    {
        title: "UX & UI Designer: Diseño de experiencia de usuario",
        dateRange: "Jun 2024 - Sep 2024",
        place: "Toulouse Lautrec",
        description:
            "Curso que constó de los siguientes 3 módulos:\\nDiseño de experiencia de usuario, diseño visual y diseño de interacción en una duración total de 48 horas.\\nSe desarrolló el diseño de un aplicativo móvil como proyecto final."
    },
    {
        title: "Bachiller en Ingeniería Electrónica",
        dateRange: "Mar 2015 - Ene 2021",
        place: "Universidad Nacional de Ingeniería"
    }
] as const;

export const experiencia: Article[] = [
    {
        title: "Documentador FTTH",
        dateRange: "Oct 2022 - Ene 2025",
        place: "Semi Perú Montajes Industriales SAC",
        description:
            "Coordinación con el personal técnico las actividades a realizar para el levantamiento de información y reparación de averías.\\nElaboración de macros (usando VBA-Excel) para automatizar la elaboración de entregables de FTTH, planos, reportes fotográficos, entre otros."
    },
    {
        title: "Supervisor de Fibra Óptica",
        dateRange: "Jun 2021 - Ene 2022",
        place: "Sergen Telecom SAC",
        description:
            "Curso que constó de los siguientes 3 módulos: \\nDiseño de experiencia de usuario, diseño visual y diseño de interacción en una duración total de 48 horas.\\nSe desarrolló un aplicativo móvil como proyecto final."
    }
] as const;

export const projects: Project[] = [
    {
        title: "Web Mandril Importaciones",
        description:
            "Proyecto e-commerce para un negocio de venta e importación en Perú. El cliente buscaba posicionamiento en la web y se logró dar visibilidad a sus catálogos, aumentando la cantidad de clientes potenciales que podían encontrar los productos.\\n\\nComo tecnologías se usó:\\n- Astro y Tailwind para el frontend (SSG/SSR).\\n- Uso de acciones en Astro para solicitar información de la base de datos en Turso.\\n- Uso de React y nanostores para manejar el estado global de los favoritos.\\n- Uso adecuado del SEO para el posicionamiento.",
        href: "https://mandrilimportaciones.com.pe/",
        urlImage: "/images/pj1.jpg",
        technologies: ["Astro", "Typescript", "Tailwind"],
        show: true
    },
    {
        title: "Invitación a Baby Shower",
        description:
            "Web hecha a medida con formulario de asistencia. Se priorizó la coherencia visual y la funcionalidad en el proyecto.\\n\\nComo tecnologías se usó:\\n- React, Tailwind y shadcn (adecuando al sistema de diseño) para el frontend.\\n- Uso de animaciones 3D en CSS asegurando la compatibilidad de diversos navegadores.\\n- Conexión a Supabase para guardar los respuestas del formulario.",
        href: "https://babyshowerdaniel.com",
        urlImage: "/images/pj2.jpg",
        technologies: ["React", "Typescript", "Tailwind", "Supabase"],
        show: true
    },
    {
        title: "Smart Campus UNI",
        description:
            "Proyecto colaborativo desarrollado en React del cuál participé.\\n\\nColaboré con las siguientes actividades:\\n- Migración del código de Javascript a Typescript.\\n- Optimización del código.\\n- Mantenimiento de la aplicación.",
        href: "https://smartcampusuni.netlify.app/",
        urlImage: "/images/pj3.jpg",
        technologies: ["Typescript", "React", "Git"]
    },
    {
        title: "Local",
        description:
            "Landing Page del emprendimiento Local (servicio de diseño interior).",
        technologies: ["Astro", "Figma"],
        urlImage: "",
        show: false
    }
] as const;

export const technologies: Technologies[] = [
    {
        title: "Frontend",
        technologies: [
            "Javascript",
            "Typescript",
            "React",
            "Astro",
            "Next.js",
            "Tailwind",
            "Figma"
        ],
        show: true
    },
    {
        title: "Backend",
        technologies: ["Node.js", "express", "SQL"],
        show: true
    },
    {
        title: "Herramientas",
        technologies: ["Git", "Github", "Docker", "AWS", "Herramientas de IA"],
        show: true
    }
] as const;

export const navbar: NavBar[] = [
    {
        title: "Inicio",
        icon: Sharp,
        href: "home"
    },
    {
        title: "Sobre mí",
        icon: User,
        href: "about"
    },
    {
        title: "Educación",
        icon: Graduation,
        href: "education"
    },
    {
        title: "Proyectos",
        icon: Code,
        href: "projects"
    },
    {
        title: "Contacto",
        icon: Email,
        href: "contact"
    }
];
