"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "../common/TabButton";
import { TAB_DATA } from "../../app/lib/data";

const About = () => {
  const [tab, setTab] = useState("stack");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="a-propos">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/pc.webp"
          width={500}
          height={500}
          alt="pc"
          className="rounded-xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos</h2>
          <p className="text-base lg:text-lg">
            Avec plus de 10 ans d'expérience en usinage, j'ai choisi de me
            reconvertir dans le développement Fullstack, un domaine qui me
            passionne depuis longtemps. J'apprécie la possibilité de travailler
            sur l'ensemble d'un projet, tout en ayant une préférence pour le
            Back, comme la gestion des bases de données, les API et la logique
            complexe. La partie Front fait également partie intégrante de mes
            compétences, permettant de garantir une expérience utilisateur
            fluide et efficace. Aujourd'hui, je suis motivé à évoluer dans cet
            univers en créant des projets variés et innovants, que ce soit dans
            le web, le logiciel ou le développement de jeux.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("stack")}
              active={tab === "stack"}
            >
              Stack
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("formation")}
              active={tab === "formation"}
            >
              Parcours
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
