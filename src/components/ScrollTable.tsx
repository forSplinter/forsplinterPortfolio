"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import airflowIcon from "@/assets/logoPython/AirflowLogo.svg";
import apacheKafkaIcon from "@/assets/logoPython/Apache_kafka_wordtype.svg";
import apacheSparkIcon from "@/assets/logoPython/Apache_Spark_logo.svg";
import datadogIcon from "@/assets/logoPython/datadog_logo.svg";
import mlflowIcon from "@/assets/logoPython/mlflow_logo.svg";
import pytorchIcon from "@/assets/logoPython/PyTorch_logo_black.svg";
import dockerIcon from "@/assets/logoPython/docker_logo.svg";
import microsoftAzureIcon from "@/assets/logoPython/microsoft_azure_portal_logo_icon.svg";
import openmpIcon from "@/assets/logoPython/openmp_logo.svg";

const logos = [
  { src: airflowIcon, href: "https://airflow.apache.org/", title: "Airflow" },
  { src: apacheKafkaIcon, href: "https://kafka.apache.org/", title: "Kafka" },
  { src: apacheSparkIcon, href: "https://spark.apache.org/", title: "Spark" },
  { src: datadogIcon, href: "https://www.datadoghq.com/", title: "Datadog" },
  { src: mlflowIcon, href: "https://mlflow.org/", title: "MLFlow" },
  { src: pytorchIcon, href: "https://pytorch.org/", title: "PyTorch" },
  { src: dockerIcon, href: "https://www.docker.com/", title: "Docker" },
  { src: microsoftAzureIcon, href: "https://azure.microsoft.com/", title: "Microsoft Azure" },
  { src: openmpIcon, href: "https://www.openmp.org/", title: "OpenMP" },
];

export default function InfiniteLogos() {
  return (
    <div className="relative overflow-hidden py-16 mx-[120px] bg-[#ECF6FF]">
      {/* Fade gauche */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-gradient-to-r from-[#ECF6FF] to-transparent" />
      {/* Fade droite */}
      <div className="absolute right-0 top-0 bottom-0 w-32 z-20 pointer-events-none bg-gradient-to-l from-[#ECF6FF] to-transparent" />

      <motion.div
        className="flex gap-[80px] items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <Link
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[50px] flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={logo.title}
              height={50}
              className="object-contain h-full w-auto"
            />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
