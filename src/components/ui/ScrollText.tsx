import React, { useRef, useMemo, FC } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollTextProps {
  text: string;
  className?: string;
  containerClassName?: string;
}

const ScrollText: FC<ScrollTextProps> = ({ text, className = '', containerClassName = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const chars = useMemo(() => {
    // If text > 60 chars, split by word instead of character
    if (text.length > 60) {
      return text.split(' ').map((word, i) =>
        i < text.split(' ').length - 1 ? word + ' ' : word
      );
    }
    return text.split('');
  }, [text]);

  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <div ref={containerRef} className={`relative ${containerClassName}`}>
      <div className={`flex flex-wrap justify-center ${className}`}>
        {chars.map((char, i) => {
          // Single scroll progress, derive per-char offset with math
          const start = i / chars.length;
          const end = (i + 1) / chars.length;
          const charProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

          return (
            <motion.span
              key={i}
              className="inline-block"
              style={{
                opacity: charProgress,
                minWidth: char === ' ' ? '0.3em' : undefined,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollText;
