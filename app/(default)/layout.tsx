'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';

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
    // AOS Konfigürasyonu
    AOS.init({
      once: true,
      disable: window.innerWidth < 768, // Mobilde devre dışı
      duration: 750,
      easing: 'ease-out-cubic',
      delay: 0,
      offset: 50
    });

    // Sayfa yüklendiğinde loader'ı kaldır
    setTimeout(() => setIsLoading(false), 1000);

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
            {/* Loader animasyonu */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {/* Logo veya loader icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
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
          {children}
        </motion.div>
      </main>
    </>
  );
}