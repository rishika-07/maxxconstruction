import { motion, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export default function PageReveal({ children }: PropsWithChildren) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className="page-reveal-shell">{children}</div>;
  }

  return (
    <motion.div
      className="page-reveal-shell"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
