import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import BrandName from './ui/BrandName';

interface TestimonialsSectionProps {
  language: 'en' | 'zh';
}

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string | React.ReactElement;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, role, image, rating, text }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 flex-grow">{text}</p>
    </div>
  );
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = language === 'en' ? [
    {
      name: "Emily Chen",
      role: "Journalist",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: <><BrandName>Lynse</BrandName> card has transformed how I conduct interviews. The transcription quality is excellent, even in noisy environments, and the battery life is impressive.</>
    },
    {
      name: "Michael Rodriguez",
      role: "Business Consultant",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "As someone who attends multiple meetings daily, this device has been a game-changer. I can focus on the conversation rather than taking notes, and the transcriptions are remarkably accurate."
    },
    {
      name: "Sarah Johnson",
      role: "Graduate Student",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      text: <><BrandName>Lynse</BrandName>卡。谛听记APP使搜索转录变得容易，多语言支持对我的国际研究非常完美。</>
    },
    {
      name: "David Kim",
      role: "Software Engineer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "The technology behind this device is impressive. The on-device processing means my sensitive work discussions remain private, and the transcription accuracy is better than any software I've used."
    }
  ] : [
    {
      name: "陈艾米",
      role: "记者",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: <><BrandName>Lynse</BrandName>卡彻底改变了我进行采访的方式。即使在嘈杂的环境中，转录质量也很出色，而且电池寿命令人印象深刻。</>
    },
    {
      name: "罗德里格斯 迈克尔",
      role: "商业顾问",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "作为每天参加多次会议的人，这款设备彻底改变了我的工作方式。我可以专注于对话而不是做笔记，而且转录非常准确。"
    },
    {
      name: "莎拉 约翰逊",
      role: "研究生",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      text: <><BrandName>Lynse</BrandName>卡。谛听记APP使搜索转录变得容易，多语言支持对我的国际研究非常完美。</>
    },
    {
      name: "金大卫",
      role: "软件工程师",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "这款设备背后的技术令人印象深刻。设备内处理意味着我的敏感工作讨论保持私密性，转录准确性比我使用过的任何软件都要好。"
    }
  ];

  useEffect(() => {
    let interval: number | undefined;
    if (autoplay) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(testimonials.length / 2) - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
  };

  const slidesPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'What Our Users Say' : '用户评价'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en'
              ? <><BrandName>Lynse</BrandName> AI recording card.</>
              : <><BrandName>Lynse</BrandName> AI闪记卡改变工作流程的专业人士的评价。</>}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials
                      .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                      .map((testimonial, i) => (
                        <Testimonial
                          key={i}
                          name={testimonial.name}
                          role={testimonial.role}
                          image={testimonial.image}
                          rating={testimonial.rating}
                          text={testimonial.text}
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md text-blue-600 hover:text-blue-800 transition-colors"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md text-blue-600 hover:text-blue-800 transition-colors"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-6">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full mx-1 transition-all ${
                currentSlide === i ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
              onClick={() => {
                setAutoplay(false);
                setCurrentSlide(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;