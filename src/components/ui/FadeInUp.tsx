import { FC, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeInUp: FC<FadeInUpProps> = ({ children, delay = 0, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default FadeInUp;
