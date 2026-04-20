import React, { useRef, useState, FC } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import type { Language } from '../../data/constants';
import { t } from '../../data/constants';
import FadeInUp from '../ui/FadeInUp';
import { TESTIMONIALS, SECTION_TITLES } from '../../data/constants';

interface TestimonialCarouselProps {
  language: Language;
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ language }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragX = useMotionValue(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
  }, []);

  // If reduced motion or no testimonials, show static fallback
  if (TESTIMONIALS.length === 0) return null;

  if (prefersReduced) {
    return (
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeInUp>
            <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
              {SECTION_TITLES.trust[language]}
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
              {t({ en: 'Loved by professionals worldwide', zh: '全球专业人士的信赖之选', 'zh-TW': '全球專業人士的信賴之選', ja: '世界中のプロフェッショナルに愛されて' }, language)}
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, i) => (
              <FadeInUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-gray-200 mb-4 shrink-0" />
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                    {testimonial.quote[language]}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                      {testimonial.name[language].charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-black text-sm">{testimonial.name[language]}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{testimonial.role[language]}</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Carousel dimensions
  const cardWidth = 380;
  const gap = 24;
  const totalCardWidth = cardWidth + gap;

  const visibleCards = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 1;
  const maxDrag = -(TESTIMONIALS.length - visibleCards) * totalCardWidth;

  const navigate = (direction: 'left' | 'right') => {
    const currentX = dragX.get();
    const newX = direction === 'left'
      ? Math.min(currentX + totalCardWidth, 0)
      : Math.max(currentX - totalCardWidth, maxDrag);
    animate(dragX, newX, { type: 'spring', stiffness: 300, damping: 30 });
  };

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInUp>
          <p className="text-center text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">
            {SECTION_TITLES.trust[language]}
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className="text-center text-3xl md:text-4xl font-extrabold text-black tracking-tight mb-16">
            {t({ en: 'Loved by professionals worldwide', zh: '全球专业人士的信赖之选', 'zh-TW': '全球專業人士的信賴之選', ja: '世界中のプロフェッショナルに愛されて' }, language)}
          </h2>
        </FadeInUp>

        {/* Carousel Container */}
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <motion.div
              ref={containerRef}
              className="flex gap-6 cursor-grab active:cursor-grabbing"
              style={{ x: dragX }}
              drag="x"
              dragConstraints={{ left: maxDrag, right: 0 }}
              dragElastic={0.1}
              onDragEnd={() => {
                // Snap to nearest card
                const currentX = dragX.get();
                const nearestCard = Math.round(currentX / totalCardWidth) * totalCardWidth;
                const clamped = Math.max(maxDrag, Math.min(0, nearestCard));
                animate(dragX, clamped, { type: 'spring', stiffness: 300, damping: 30 });
              }}
            >
              {TESTIMONIALS.map((testimonial, i) => (
                <div
                  key={i}
                  className="shrink-0 w-full"
                  style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}
                >
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-gray-200 mb-4 shrink-0" />
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm">
                      {testimonial.quote[language]}
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-600">
                        {testimonial.name[language].charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-black text-sm">{testimonial.name[language]}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{testimonial.role[language]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => navigate('left')}
              className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-[#1A6DFF] hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => navigate('right')}
              className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-[#1A6DFF] hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
