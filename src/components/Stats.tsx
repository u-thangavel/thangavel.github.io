'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Download, Building2, FolderOpen } from 'lucide-react';
import styles from './Stats.module.css';

const stats = [
  { label: 'Years Experience', value: 9, suffix: '+', icon: <Calendar size={22} /> },
  { label: 'App Downloads', value: 15, suffix: 'M+', icon: <Download size={22} /> },
  { label: 'Companies', value: 4, suffix: '', icon: <Building2 size={22} /> },
  { label: 'Projects Shipped', value: 3, suffix: '', icon: <FolderOpen size={22} /> },
];

const hoverPatterns = [
  { y: -6, rotateX: 1, rotateY: -1.8 },
  { y: -5, rotateX: 0.7, rotateY: 1.6 },
  { y: -7, rotateX: 1.2, rotateY: -1.4 },
  { y: -4, rotateX: 0.5, rotateY: 1.2 }
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / value), 30);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className={styles.number}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.statsSection} ref={ref}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            className={styles.statCard}
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: idx * 0.12,
              type: 'spring',
              stiffness: 150,
              damping: 15
            }}
            whileHover={hoverPatterns[idx % hoverPatterns.length]}
          >
            <span className={styles.iconCircle}>{stat.icon}</span>
            <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
