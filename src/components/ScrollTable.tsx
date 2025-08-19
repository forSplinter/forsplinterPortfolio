"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import airflowIcon from "@/assets/logoPython/AirflowLogo.svg";
import awsIcon from "@/assets/logoPython/aws-svgrepo-com.svg";
import apacheKafkaIcon from "@/assets/logoPython/Apache_kafka_wordtype.svg";
import apacheSparkIcon from "@/assets/logoPython/Apache_Spark_logo.svg";
import cIcon from "@/assets/logoPython/C_Programming_Language.svg";
import datadogIcon from "@/assets/logoPython/datadog-svgrepo-com.svg";
import luaIcon from "@/assets/logoPython/Lua-Logo.svg";
import mlflowIcon from "@/assets/logoPython/mlflow_logo.svg";
import postgresIcon from "@/assets/logoPython/Postgresql_elephant.svg";
import pythonIcon from "@/assets/logoPython/Python_logo_and_wordmark.svg";
import pytorchIcon from "@/assets/logoPython/PyTorch_logo_black.svg";

const logos = [
  { src: airflowIcon, href: "https://airflow.apache.org/" },
  { src: awsIcon, href: "https://aws.amazon.com/" },
  { src: apacheKafkaIcon, href: "https://kafka.apache.org/" },
  { src: apacheSparkIcon, href: "https://spark.apache.org/" },
  { src: cIcon, href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { src: datadogIcon, href: "https://www.datadoghq.com/" },
  { src: luaIcon, href: "https://www.lua.org/" },
  { src: mlflowIcon, href: "https://mlflow.org/" },
  { src: postgresIcon, href: "https://www.postgresql.org/" },
  { src: pythonIcon, href: "https://www.python.org/" },
  { src: pytorchIcon, href: "https://pytorch.org/" },
];

const ScrollTable = () => {
  // On double la liste pour un scroll infini
  const logosLoop = [...logos, ...logos];

  return (
    <div className="container mx-[120px] relative overflow-hidden py-8 md:py-16">
      {/* Fade à gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-background pointer-events-none z-20" />
      {/* Fade à droite */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-background pointer-events-none z-20" />

      <motion.ul
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {logosLoop.map((logo, index) => (
          <li key={index} className="flex-shrink-0">
            <a href={logo.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={`Logo ${index}`}
                width={140} // largeur fixe pour tous
                height={64} // hauteur fixe pour tous
                className="object-contain"
              />
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ScrollTable;
