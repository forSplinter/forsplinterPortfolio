'use client';
import styles from './ProjectCard.module.css';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProjectCard({ i, color, gap = 100, targetScale = 0.9 }) {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });
    
    const scale = useTransform(
        scrollYProgress,
        [1 - gap / 100, 1],  
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
