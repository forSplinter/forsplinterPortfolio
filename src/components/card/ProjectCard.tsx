'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  i: number;
  color: string;
  gap?: number;
  targetScale?: number;
  progress?: MotionValue<number>;
  range?: number[];
}

export default function ProjectCard({
  i,
  color,
  gap = 100,
  targetScale = 0.9,
  progress,
  range,
}: ProjectCardProps) {
  const container = useRef<HTMLDivElement>(null);

  // Hook toujours appelé
  const localScroll = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  // Choix de la source de scroll
  const scrollY = progress ?? localScroll.scrollYProgress;

  const scale = useTransform(
    scrollY,
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
        <div className={styles.imageContainer}></div>
      </motion.div>
    </div>
  );
}
