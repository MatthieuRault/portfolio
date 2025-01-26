import React from "react";

export const navLinks = [
  {
    title: "À propos",
    path: "#a-propos",
  },
  {
    title: "Projets",
    path: "#projets",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const TAB_DATA = [
  {
    title: "Stack",
    id: "stack",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript/TypeScript</li>
        <li>Node.js/Express/NestJS</li>
        <li>React/Next.js</li>
        <li>C#/.NET</li>
        <li>PHP</li>
        <li>SQL/NoSQL</li>
        <li>HTML/CSS/TailwindCSS</li>
        <li>Git/GitHub/Azure DevOps</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Formation",
    id: "formation",
    content: (
      <ul className="list-disc pl-2">
        <li>RNCP N5 - Développeur Web et Web Mobile - O&apos;clock (2024)</li>
        <li>BAC PRO - Technicien d&apos;Usinage (2013)</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Opquast</li>
      </ul>
    ),
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Portfolio réalisé avec NextJs et TailwindCSS.",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Pokédex",
    description:
      "Ce projet est un pokédex réalisé comprenant un Back-end en NodeJS avec Express, PostgreSQL et un Front-end en TypeScript avec React.",
    image: "/images/projects/pokedex.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MatthieuRault/Pokedex",
    previewUrl: "https://pokedex-ecru-gamma-29.vercel.app/",
  },
  {
    id: 3,
    title: "Paw Connect",
    description:
      "Ce projet est une application web fictive mettant en relation des associations avec des familles d'accueil en vue d'héberger des animaux de façon temporaire.",
    image: "/images/projects/pawconnect.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MatthieuRault/Paw-Connect",
    previewUrl: "https://paw-connect-front.vercel.app/",
  },
];

export const typeAnimationData = [
  "Développeur FullStack",
  1000,
  "JavaScript, TypeScript",
  1000,
  "NodeJS, Express, NestJS",
  1000,
  "C#",
  1000,
  "SQL, NoSQL",
  1000,
];
