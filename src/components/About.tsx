'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaAndroid, FaApple, FaJava, FaGithub } from 'react-icons/fa';
import { SiKotlin, SiSwift, SiFirebase, SiJira } from 'react-icons/si';
import { Code2, Smartphone, Layers, Database, Wrench } from 'lucide-react';
import styles from './About.module.css';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={20} />,
    skills: [
      { name: "Kotlin", icon: <SiKotlin color="#7F52FF" /> }, // [cite: 4]
      { name: "Java", icon: <FaJava color="#5382A1" /> }, // [cite: 4]
      { name: "Swift", icon: <SiSwift color="#F05138" /> }
    ]
  },
  {
    title: "Platforms & UI",
    icon: <Smartphone size={20} />,
    skills: [
      { name: "Android", icon: <FaAndroid color="#3DDC84" /> },
      { name: "iOS", icon: <FaApple color="#A3AAAE" /> },
      { name: "Kotlin Multiplatform", icon: <SiKotlin color="#C6538C" /> },
      { name: "Jetpack Compose", icon: <FaAndroid color="#4285F4" /> },
      { name: "SwiftUI", icon: <SiSwift color="#007AFF" /> },
      { name: "Material Design", icon: null }
    ]
  },
  {
    title: "Architecture & Async",
    icon: <Layers size={20} />,
    skills: [
      { name: "MVVM & Clean Architecture", icon: null },
      { name: "Coroutines & Flow", icon: null },
      { name: "RxJava", icon: null }
    ]
  },
  {
    title: "Libraries & Tech",
    icon: <Database size={20} />,
    skills: [
      { name: "Ktor & Retrofit", icon: null },
      { name: "SQLDelight & Room", icon: null },
      { name: "Koin & Hilt", icon: null },
      { name: "WebRTC", icon: null },
      { name: "Coil", icon: null }
    ]
  },
  {
    title: "Tools & Ecosystem",
    icon: <Wrench size={20} />,
    skills: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      { name: "jUnit / Unit Testing", icon: null },
      { name: "Git & GitHub", icon: <FaGithub color="#181717" /> },
      { name: "Jira", icon: <SiJira color="#0052CC" /> }
    ]
  }
];

const hoverPatterns = [
  { y: -5, rotateX: 0.8, rotateY: -1.8 },
  { y: -4, rotateX: 0.6, rotateY: 1.6 },
  { y: -6, rotateX: 1, rotateY: -1.4 },
  { y: -3, rotateX: 0.5, rotateY: 1.2 },
  { y: -5, rotateX: 0.9, rotateY: -1.1 }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>Behind the Code</h2>
          <p className={styles.paragraph}>
            I started my career as an Android developer writing Java. Today, as a Tech Lead, I build apps for both Android and iOS using Kotlin Multiplatform.
          </p>
          <p className={styles.paragraph}>
            Over the years, I&apos;ve built products from scratch, rewritten older legacy code into modern MVVM and Jetpack Compose architectures, and mentored junior developers. I have a Master&apos;s in Computer Science, and I really enjoy contributing to open-source projects when I can.
          </p>

          <h2 className={styles.heading}>Beyond the Screen</h2>
          <p className={styles.paragraph}>
            I&apos;m based in Jaipur, Rajasthan. I&apos;m naturally a bit of an introvert, so while my day job involves a lot of leading and collaborating, I do my best work when I can just put on my headphones, put on some Eminem or old school hip-hop, and get completely into the zone.
          </p>
          <p className={styles.paragraph}>
            When I&apos;m not coding, I&apos;m usually spending time with my kid, messing around with photography, and daydreaming about attending an Eminem concert. I also love playing video games, though it&apos;s hard to find much free time for that these days!
          </p>

          <div className={styles.skillsSection}>
            <h3 className={styles.skillsHeading}>Technical Arsenal</h3>
            <div className={styles.skillsGrid}>
              {skillCategories.map((category, catIdx) => (
                <motion.div
                  key={category.title}
                  className={styles.skillCategory}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={hoverPatterns[catIdx % hoverPatterns.length]}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: catIdx * 0.1 }}
                >
                  <div className={styles.categoryHeader}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <h4 className={styles.categoryTitle}>{category.title}</h4>
                  </div>
                  <div className={styles.skillsList}>
                    {category.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill.name}
                        className={styles.skillBadge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: catIdx * 0.1 + skillIdx * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        whileHover={{ scale: 1.08, y: -3 }}
                      >
                        {skill.icon && <span className={styles.skillIcon}>{skill.icon}</span>}
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className={styles.easterEgg}
            whileHover={{ scale: 1.02, x: 10 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className={styles.quoteIcon}>&ldquo;</span>
            <p className={styles.songQuote}>Software testing is not about finding bugs; it’s about building confidence in the software’s performance and reliability</p>
            <span className={styles.artist}>— Martin Fowler</span>
          </motion.div>
        </motion.div>

        <div className={styles.imagesGrid}>
          {/* Photo 1: Blast from the past (Left) */}
          <motion.div style={{ y: y3 }} className={`${styles.imgWrapper} ${styles.imgPos1}`}>
            <Image
             src="/thangavel.jpg"
             alt="Thangavel U , QA Automation Engineer"
             
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className={styles.imgCaption}>Tools used to test & debug </div>
          </motion.div>

          {/* Photo 2: Personal Photo (Top Right) */}
        
          {/* Photo 3: Travel / Personal (Bottom Right) */}


        </div>
      </div>
    </section>
  );
}
