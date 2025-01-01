'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import { cn } from '@/utils/utils';

// SVG importları
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

interface PageIllustrationProps {
  multiple?: boolean;
  className?: string;
}

const ANIMATION_VARIANTS = {
  mainShape: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  },
  blurredShape: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    }
  }
};

const STYLES = {
  wrapper: cn(
    'absolute left-1/2 top-0 -z-10',
    'transform -translate-x-1/4',
    'pointer-events-none'
  ),
  blurredGray: cn(
    'absolute left-1/2 -z-10',
    'transform -translate-x-full',
    'pointer-events-none',
    'opacity-50',
    'top-[400px] -mt-20'
  ),
  blurredColor: cn(
    'absolute left-1/2 -z-10',
    'transform -translate-x-1/3',
    'pointer-events-none',
    'top-[440px]'
  ),
  image: 'max-w-none select-none'
};

export default function PageIllustration({ 
  multiple = false,
  className 
}: PageIllustrationProps) {
  return (
    <>
      {/* Main Illustration */}
      <motion.div
        className={cn(STYLES.wrapper, className)}
        variants={ANIMATION_VARIANTS.mainShape}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        <Image
          className={STYLES.image}
          src={Illustration}
          width={846}
          height={594}
          alt=""
          priority
        />
      </motion.div>

      {/* Additional Shapes */}
      {multiple && (
        <>
          <motion.div
            className={STYLES.blurredGray}
            variants={ANIMATION_VARIANTS.blurredShape}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <Image
              className={STYLES.image}
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt=""
            />
          </motion.div>

          <motion.div
            className={STYLES.blurredColor}
            variants={ANIMATION_VARIANTS.blurredShape}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
          >
            <Image
              className={STYLES.image}
              src={BlurredShape}
              width={760}
              height={668}
              alt=""
            />
          </motion.div>
        </>
      )}
    </>
  );
}