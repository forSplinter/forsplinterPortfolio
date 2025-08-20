'use client';
import styles from './ProjectCard.module.css'
import React, { use, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function ProjectCard({ title, description, src, link, color }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"]
    });
    const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    return (
        <div ref={container} className={styles.cardContainer}>
            <div style={{ backgroundColor: color }} className={styles.card}>
                <div className={styles.imageContainer}>
                    <motion.div style={{ scale }} className={styles.inner}>
                        <Image fill src={src} alt={title} />
                    </motion.div>

                </div>

            </div>
        </div>

    )
}
