'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';

export type ScrollRevealVariant = 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn';

const variants: Record<ScrollRevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1 },
  },
};

type ScrollRevealProps = {
  children: React.ReactNode;
  variant?: ScrollRevealVariant;
  className?: string;
  as?: 'div' | 'section' | 'article';
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  className = '',
  as = 'div',
  delay = 0,
  duration = 0.5,
  once = true,
  margin = '-40px',
}: ScrollRevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}

/** Use to stagger multiple children (e.g. cards in a grid). Wrap each child in StaggerItem. */
export function ScrollRevealStagger({
  children,
  className = '',
  staggerDelay = 0.08,
  variant = 'fadeUp',
  duration = 0.5,
  once = true,
  margin = '-40px',
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: ScrollRevealVariant;
  duration?: number;
  once?: boolean;
  margin?: string;
}) {
  const v = variants[variant];
  const items = React.Children.toArray(children);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0 },
        },
      }}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={v} transition={{ duration }}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
