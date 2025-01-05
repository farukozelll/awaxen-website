'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from "@/utils/utils";

const LoadingAnimation = () => {
  return (
    <motion.div
      className={cn(
        "fixed inset-0",
        "flex items-center justify-center",
        "z-50"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      <div className="relative w-[200px] h-[200px]">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          className="relative z-10"
        >
          <Image 
            src="/images/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            priority
            className="w-full h-full"
          />
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className={cn(
            "absolute inset-0",
            "-z-10"
          )}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [0.95, 1, 0.95]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Background Effect */}
        <motion.div
          className={cn(
            "absolute inset-0",
            "blur-xl",
            "-z-20"
          )}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;