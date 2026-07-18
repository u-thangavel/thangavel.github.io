'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/u-thangavel", label: "GitHub" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/thangavel-uthaya-kumar-35b8b0274", label: "LinkedIn" },
  { Icon: Phone, href: "tel:+918870344201", label: "Phone" }
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setScrolled(latest > 0.02);
  });

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />

      <motion.header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={`${styles.navContainer} container`}>
          <a href="#" className={styles.logo}>
            Thangavel U<span className="text-gradient">.</span>
          </a>

          <div className={styles.desktopActions}>
            <nav className={styles.nav}>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`${styles.navLink} ${activeSection === link.href.replace('#', '') ? styles.navLinkActive : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className={styles.socialsDesktop}>
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={styles.socialIcon}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + idx * 0.06, duration: 0.35 }}
                  whileHover={{ y: -3, scale: 1.08 }}
                >
                  <social.Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className={styles.rightControls}>
            <ThemeToggle />
            <button
              className={styles.hamburger}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className={styles.mobileNav}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${activeSection === link.href.replace('#', '') ? styles.navLinkActive : ''}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                >
                  {link.name}
                </motion.a>
              ))}

              <div className={styles.mobileSocials}>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles.mobileSocialIcon}
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
