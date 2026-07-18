'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Download } from 'lucide-react';
import { FaGithub, FaGooglePlay, FaApple } from 'react-icons/fa';
import styles from './Projects.module.css';

const projects = [
  {
    title: "SixFlags",
    description: "Built and scaled automation coverage for a high-traffic mobile experience, improving regression confidence across Android and iOS releases.",
    tech: ["Appium", "Selenium", "Java", "Python" ,"API Testing", "Pytest-BDD"],
    type: "   QA Automation Engineer/2023-2026",
    appStore: "https://apps.apple.com/us/app/six-flags/id988953433",
    playStore: "https://play.google.com/store/apps/details?id=com.sixflags.android",
    webLink: "https://www.sixflags.com",
    github: "#",
    isPersonal: false,
    downloads: "5M+"
  },
  {
    title: "Maya Cinemas Digital ",
    description: "Delivered automated regression and API testing for a ticket booking app, helping shorten release cycles and improve product stability.",
    tech: ["Selenium","Java","Cucumber","TestNG", "Swagger", "Mobile Testing"],
    type: "QA Engineer / 2021-2023",
    appStore: "https://apps.apple.com/us/app/maya-cinemas-tickets/id6770704865",
    playStore: "https://play.google.com/store/apps/details?id=com.indycinemagroup.mayacinemas&pcampaignid=web_share",
    webLink: "https://mayacinemas.com/",
    github: "#",
    isPersonal: false,
    downloads: "600K+"
  },
  {
    title: "Pillow Talk",
    description: "Created test strategy and automation workflows for a e-commerce app, supporting reliable releases in web platforms.",
    tech: ["Manual Testing", "Agile", "Test Planning", "Postman",  "Reporting"],
    type: "QA Enginee / 2020-2021",
    webLink: "https://www.pillowtalk.com.au/",
    github: "#",
    isPersonal: false,
    downloads: "35K+"
  }
];

const hoverPatterns = [
  { y: -6, rotateX: 1.1, rotateY: -2.1 },
  { y: -5, rotateX: 0.7, rotateY: 1.8 },
  { y: -7, rotateX: 1.3, rotateY: -1.5 },
  { y: -4, rotateX: 0.5, rotateY: 1.3 }
];

function PhoneCard({ project, idx }: { project: typeof projects[number]; idx: number }) {
  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className={styles.card}
        whileHover={hoverPatterns[idx % hoverPatterns.length]}
        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      >
        <div className={styles.cardHeader}>
          <div className={styles.iconWrapper}>
            <Smartphone size={20} />
          </div>
          <span className={styles.projectType}>{project.type}</span>
        </div>

        <div className={styles.appSignal} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.techStack}>
          {project.tech.map((t: string) => (
            <span key={t} className={styles.techBadge}>{t}</span>
          ))}
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.metrics}>
            {'downloads' in project && typeof project.downloads === 'string' && project.downloads && (
              <span className={styles.metricBadge} title="App Downloads">
                <Download size={14} />
                {project.downloads}
              </span>
            )}
          </div>

          <div className={styles.cardLinks}>
            {project.isPersonal ? (
              project.github && project.github !== "#" && (
                <a href={project.github} className={styles.linkIcon} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={20} />
                </a>
              )
            ) : (
              <>
                {'playStore' in project && project.playStore && project.playStore !== "#" && (
                  <a href={project.playStore} className={styles.linkIcon} aria-label="Play Store" target="_blank" rel="noopener noreferrer">
                    <FaGooglePlay size={20} />
                  </a>
                )}
                {'appStore' in project && project.appStore && project.appStore !== "#" && (
                  <a href={project.appStore} className={styles.linkIcon} aria-label="App Store" target="_blank" rel="noopener noreferrer">
                    <FaApple size={20} />
                  </a>
                )}
                {'webLink' in project && project.webLink && project.webLink !== "#" && (
                  <a href={project.webLink} className={styles.linkIcon} aria-label="Website" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={20} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Selected Works
        </motion.h2>

        <div className={styles.grid}>
          {projects.map((project, idx) => (
            <PhoneCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
