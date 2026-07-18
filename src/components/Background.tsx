'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaAndroid, FaApple, FaCode } from 'react-icons/fa';
import { SiKotlin } from 'react-icons/si';
import { MdCatchingPokemon } from 'react-icons/md';
import styles from './Background.module.css';

export default function Background() {
  const { scrollYProgress } = useScroll();

  // Different parallax speeds for different elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -600]);

  // Rotations
  const r1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const r2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const r3 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div className={styles.fixedBackground}>
      <motion.div className={styles.iconWrapper} style={{ top: '15%', left: '10%', y: y1, rotate: r1 }}>
        <FaAndroid size={120} />
      </motion.div>
      
      <motion.div className={styles.iconWrapper} style={{ top: '40%', left: '80%', y: y2, rotate: r2 }}>
        <FaApple size={140} />
      </motion.div>
      
      <motion.div className={styles.iconWrapper} style={{ top: '70%', left: '15%', y: y3, rotate: r1 }}>
        <SiKotlin size={100} />
      </motion.div>

      <motion.div className={styles.iconWrapper} style={{ top: '25%', left: '60%', y: y4, rotate: r3 }}>
        <MdCatchingPokemon size={150} />
      </motion.div>

      <motion.div className={styles.iconWrapper} style={{ top: '80%', left: '75%', y: y5, rotate: r2 }}>
        <FaCode size={110} />
      </motion.div>
    </div>
  );
}
