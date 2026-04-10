import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties } from 'react';

interface HeroMotionProps {
  title: string;
  subtitle: string;
  image: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroMotion({
  title,
  subtitle,
  image,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: HeroMotionProps) {
  const reduceMotion = useReducedMotion();
  const heroStyle = {
    '--hero-image': `url('${image}')`,
  } as CSSProperties;

  return (
    <motion.section
      className="hero hero-motion"
      style={heroStyle}
      initial={reduceMotion ? false : 'hidden'}
      animate={reduceMotion ? undefined : 'visible'}
    >
      <div className="hero-overlay" data-gsap-hero-overlay></div>
      <motion.div className="container hero-content" variants={containerVariants}>
        <motion.p className="kicker" variants={itemVariants}>
          MAXX CONSTRUCTION GROUP
        </motion.p>
        <motion.h1 variants={itemVariants}>{title}</motion.h1>
        <motion.p className="hero-subtitle" variants={itemVariants}>
          {subtitle}
        </motion.p>
        <motion.div className="cta-row" variants={itemVariants}>
          <motion.a
            className="btn-accent"
            href={primaryCtaHref}
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
          >
            {primaryCtaLabel}
          </motion.a>
          <motion.a
            className="btn-ghost"
            href={secondaryCtaHref}
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
            whileTap={reduceMotion ? undefined : { y: 0, scale: 0.99 }}
          >
            {secondaryCtaLabel}
          </motion.a>
        </motion.div>
      </motion.div>
      <div className="hero-progress" aria-hidden="true">
        <span className="hero-progress-core" data-gsap-progress-core></span>
      </div>
    </motion.section>
  );
}
