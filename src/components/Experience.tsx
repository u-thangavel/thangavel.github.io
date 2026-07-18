'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import styles from './Experience.module.css';

const journey = [
  {
    year: '2023',
    role: "QA Automation Engineer",
    company: "The Tuna Group",
    period: "November 2023 - Present",
    summary: "Designed test strategy for mobile, web, and API products, and built automation frameworks to improve release confidence and reduce regression effort.",
    highlights: [
      "Led Appium and Selenium-based automation for critical user journeys.",
      "Built API and performance testing coverage for high-traffic features.",
      "Mentored QA engineers and strengthened quality gates across releases."
    ],
    tags: ["Appium", "Selenium", "API Testing", "Performance"]
  },
  {
    year: '2022',
    role: "QA Engineer",
    company: "Bluefield Technologies.",
    period: "2020 - 2023",
    summary: "Delivered scalable automation for mobile and web products while improving test reliability, cross-platform coverage, and release readiness.",
    highlights: [
      "Automated regression suites for multi-market mobile applications.",
      "Integrated test execution into CI workflows for faster feedback loops.",
      "Improved test maintainability through reusable frameworks and reporting."
    ],
    tags: ["Automation", "Mobile Testing", "Regression"]
  },
  {
    year: '2019',
    role: "Trainee",
    company: "Quess Corp",
    period: "2019 - 2022",
    summary: "Built quality engineering practices for Android and iOS products, focusing on test strategy, defect prevention, and automation adoption.",
    highlights: [
      "Implemented structured test plans for feature validation and release stability.",
      "Improved defect detection through early automation and exploratory testing.",
      "Collaborated with development teams to strengthen overall product quality."
    ],
    tags: ["Manual Testing", "Automation", "Release QA"]
  },

];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.heading}>Journey By Year</h2>
          <p className={styles.subheading}>
            A timeline of how my career evolved from hands-on testing to quality engineering leadership and automation strategy.
          </p>
        </motion.div>

        <div className={styles.journeyRail}>
          <motion.span
            className={styles.railProgress}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-140px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          {journey.map((item, idx) => (
            <motion.article
              key={`${item.year}-${item.company}`}
              className={styles.yearBlock}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-90px' }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
            >
              <div className={styles.yearColumn}>
                <motion.span
                  className={styles.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 0.24, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  {item.year}
                </motion.span>
                <span className={styles.yearDot} />
              </div>

              <motion.div
                className={styles.storyCard}
                whileHover={{ y: -4, scale: 1.01, rotateX: 0.6, rotateY: idx % 2 === 0 ? -0.8 : 0.8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 25 }}
              >
                <div className={styles.storyHead}>
                  <div className={styles.companyBadge}>
                    <BriefcaseBusiness size={14} />
                  </div>
                  <span className={styles.company}>{item.company}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>

                <h3 className={styles.role}>{item.role}</h3>
                <p className={styles.summary}>{item.summary}</p>

                <ul className={styles.highlights}>
                  {item.highlights.map((line) => (
                    <li key={line}>
                      <ArrowUpRight size={14} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
