'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import AnimatedWLiquidWave from '@/components/AnimatedWLiquidWave';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Box from '@/components/Box';

const STYLES = {
  main: cn(
    'relative flex grow flex-col',
    'min-h-screen w-full',
    'bg-[#0A0F1E]'
  ),
  loader: cn(
    'fixed inset-0 z-50',
    'flex items-center justify-center',
    'bg-[#0A0F1E]'
  ),
  content: cn(
    'relative w-full flex-grow',
    'transition-all duration-300 ease-in-out'
  )
};

export default function DefaultLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // AOS Configuration
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: 'ease-out-cubic',
      delay: 0,
      offset: 50
    });

    // Remove loader after page load
    setTimeout(() => setIsLoading(false), 2500);

    // Resize event listener
    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className={STYLES.loader}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* W Logo with liquid animation */}
            <motion.div
              className="w-48 h-48 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [1, 0.9, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="flex justify-center items-center min-h-screen bg-[#0A0F1E]">
                <Box />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={STYLES.main}>
        <motion.div
          className={STYLES.content}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isLoading ? 0 : 1,
            filter: isLoading ? 'blur(10px)' : 'blur(0px)'
          }}
          transition={{ duration: 0.5 }}
        >
            <Header />
          {children}
          <Footer />
        </motion.div>
      </main>
    </>
  );
}