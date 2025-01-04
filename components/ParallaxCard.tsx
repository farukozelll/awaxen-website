import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import type { Feature } from '@/app/types';

interface ParallaxCardProps {
  feature: Feature;
  index: number;
}

const STYLES = {
  cardWrap: cn(
    '[perspective:800px] cursor-pointer',
    'w-full h-[400px]',
    'transform-gpu will-change-transform m-4'
  ),
  card: cn(
    'relative w-full h-full overflow-hidden',
    'bg-neutral-800 rounded-xl',
    'shadow-2xl shadow-black/40',
    'border border-white/10',
    'transition-all duration-700 ease-out',
    'group'
  ),
  cardBg: cn(
    'absolute -inset-5',
    'w-[calc(100%+40px)] h-[calc(100%+40px)]',
    'opacity-50 pointer-events-none',
    'bg-center bg-no-repeat bg-cover',
    'transition-all duration-700'
  ),
  cardContent: cn(
    'absolute inset-0 p-6',
    'flex flex-col justify-between',
    'transform-gpu transition-transform duration-700',
    'group-hover:translate-y-0'
  ),
  cardInfo: cn(
    'text-white mt-auto translate-y-[40%]',
    'transition-all duration-500 ease-out',
    'group-hover:translate-y-0'
  ),
  title: cn(
    'text-3xl font-bold mb-2',
    'text-white'
  ),
  description: cn(
    'opacity-0 text-white/80',
    'transition-opacity duration-500',
    'group-hover:opacity-100'
  )
};

const ParallaxCard: React.FC<ParallaxCardProps> = ({ feature, index }) => {
  // HTMLDivElement olarak açıkça belirtiyoruz
  const cardRef = useRef<HTMLDivElement | null>(null);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configurations
  const springConfig = {
    stiffness: 150,
    damping: 20,
    mass: 5
  };

  // Card rotations with easing
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [30, -30]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);

  // Background movement
  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [40, -40]), springConfig);
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [40, -40]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = (e.clientX - rect.left - width/2) / width;
    const mouseYVal = (e.clientY - rect.top - height/2) / height;
    
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      mouseX.set(0);
      mouseY.set(0);
    }, 100);
  };

  return (
    <motion.div
      ref={cardRef}
      className={STYLES.cardWrap}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={STYLES.card}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className={STYLES.cardBg}
          style={{ 
            backgroundImage: `url(${feature.image})`,
            x: bgX,
            y: bgY,
          }}
        />

        {/* Card Content */}
        <div className={STYLES.cardContent}>
          {/* Icon */}
          <div className="relative w-12 h-12 mb-auto z-10">
            <Image
              src={feature.icon}
              alt=""
              fill
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Info Section */}
          <div className={STYLES.cardInfo}>
            {/* Tag */}
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-white/20 rounded-full">
              {feature.tag}
            </span>

            <h3 className={STYLES.title}>
              {feature.title}
            </h3>
            <p className={STYLES.description}>
              {feature.description}
            </p>

            {/* Highlights */}
            <div className="space-y-2 mt-4">
              {feature.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                >
                  <svg
                    className="w-4 h-4 text-white/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white/70">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Overlay Gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ParallaxCard;