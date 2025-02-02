

'use client';


import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import { cn } from '@/utils/utils';
import Box from '@/components/Box';

const STYLES = {
  main: cn(
    'relative min-h-screen overflow-hidden',
    'bg-[#0A0F1E]'
  ),
  section: cn(
    'relative z-10',
    'w-full max-w-7xl mx-auto',
    'px-4 sm:px-6 lg:px-8'
  ),
  background: cn(
    'absolute inset-0 -z-10',
    'bg-gradient-to-b from-gray-900 via-gray-900/80 to-black',
    'pointer-events-none'
  ),
  progressBar: cn(
    'fixed top-0 left-0 right-0 z-50',
    'h-1 bg-gradient-to-r from-blue-500 to-purple-500',
    'origin-left'
  )
};


const SECTIONS_ANIMATION = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Illustration */}
      <PageIllustration />

      {/* Hero Section */}
      <motion.section variants={SECTIONS_ANIMATION}>
        <Hero />
      </motion.section>

      {/* Workflows Section */}
      <motion.section 
        variants={SECTIONS_ANIMATION}
        className="relative z-10"
      >
        <Workflows />
      </motion.section>

      {/* Features Section */}
      <motion.section 
        variants={SECTIONS_ANIMATION}
        className="relative z-10"
      >
        <Features />
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        variants={SECTIONS_ANIMATION}
        className="relative z-10"
      >
        <Cta />
      </motion.section>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-900/80 to-black" />
    </motion.main>
  );
}