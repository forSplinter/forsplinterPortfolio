'use client';
import React, { useRef } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { StaticImageData } from 'next/image';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  i: number;
  color: string;
  title: string;
  description: string;
  src: StaticImageData;
  link: string;
  progress?: MotionValue<number>;
  range?: number[];
  targetScale?: number;
  gap?: number;
};

export default function ProjectCard({
  i,
  color,
  title,
  description,
  src,
  link,
  progress,
  range,
  targetScale = 0.9,
  gap = 100,
}: ProjectCardProps) {
  const container = useRef<HTMLDivElement>(null);

  // Si tu passes progress depuis le parent, on l'utilise, sinon on crée un scrollYProgress local
  const { scrollYProgress } = progress
    ? { scrollYProgress: progress }
    : useScroll({ target: container, offset: ["start end", "end start"] });

  const scale = useTransform(
    scrollYProgress,
    range ?? [1 - gap / 100, 1],
    [1, targetScale]
  );

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          top: `calc(-3% + ${i * gap}px)`,
          scale,
        }}
        className={styles.card}
      >
        <div className={styles.imageContainer}>
          {/* Ici tu peux mettre ton image */}
          {/* <Image src={src} alt={title} /> */}
        </div>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>View project</a>
        </div>
      </motion.div>
    </div>
  );
}
