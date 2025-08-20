'use client';
import styles from './ProjectCard.module.css';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectCard({ i, color, gap = 50, targetScale = 0.9 }) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    
    const scale = useTransform(
        scrollYProgress,
        [1 - gap / 90, 1],  
        [1, targetScale]
    );
    
    const yOffset = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -i * 20] // plus i est petit, moins la carte bouge
    );

    return (
        <div ref={container} className={styles.cardContainer}>
            <motion.div
                style={{
                    backgroundColor: color,
                    top: `calc(-5% + ${i * gap}px)`,
                    scale,
                    y: yOffset
                }}
                className={styles.card}
            >
                <div className={styles.imageContainer}></div>
            </motion.div>
        </div>
    );
}
