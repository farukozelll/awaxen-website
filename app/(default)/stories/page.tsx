'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

import Testimonials from "@/components/testimonials"; 



const SUCCESS_STORIES = [
  {
    id: 1,
    title: 'Akıllı Sera Projesi',
    partner: 'AgroTech Innovations',
    result: '%40 verimlilik artışı',
    image: '/images/success/greenhouse.jpg',
    description: 'Akıllı sera sistemlerimiz ile üretimde verimlilik artışı sağladık.'
  },
  // Diğer başarı hikayeleri...
];

const STYLES = {
  container: 'min-h-screen bg-[#0A0F1E]',
  header: {
    wrapper: cn(
      'relative pt-24 sm:pt-32 lg:pt-40',
      'pb-16 sm:pb-20 lg:pb-24',
      'bg-gradient-to-br from-[#0A2463] via-[#247BA0] to-[#006466]'
    ),
    content: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'text-center max-w-4xl'
    ),
    background: 'absolute inset-0 opacity-10 bg-[url("/images/grid.svg")]'
  },
  sections: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16',
    title: 'text-2xl font-bold text-white mb-8'
  },
  categories: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10',
      'transition-all duration-300',
      'hover:bg-white/10 hover:border-white/20'
    )
  },
  partners: {
    grid: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
    card: {
      wrapper: cn(
        'bg-white/5 backdrop-blur-sm',
        'rounded-xl overflow-hidden',
        'border border-white/10',
        'transition-all duration-300',
        'hover:border-white/20'
      ),
      logo: 'h-32 flex items-center justify-center bg-white/10 p-6',
      content: 'p-6 space-y-4'
    }
  },
  stories: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    card: {
      wrapper: cn(
        'group bg-white/5 backdrop-blur-sm',
        'rounded-xl overflow-hidden',
        'border border-white/10',
        'transition-all duration-300',
        'hover:border-white/20'
      ),
      image: 'aspect-video relative',
      content: 'p-6'
    }
  },
  cta: {
    wrapper: cn(
      'mt-24 text-center',
      'bg-gradient-to-r from-blue-500/20 to-purple-500/20',
      'rounded-2xl p-12',
      'border border-white/10'
    ),
    button: cn(
      'px-8 py-4 rounded-lg',
      'bg-blue-500 hover:bg-blue-600',
      'text-white font-medium',
      'transition-colors duration-200'
    )
  }
};

export default function PartnersPage() {
  return (
    <main className={STYLES.container}>
      {/* Header */}
      <section className={STYLES.header.wrapper}>
        <div className={STYLES.header.background} />
        <div className={STYLES.header.content}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            İş Ortaklarımız
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Teknoloji ve inovasyonda güçlerimizi birleştiriyoruz
          </motion.p>
        </div>
      </section>
 <Testimonials />
        {/* Success Stories */}
{/*         <section className="mt-24">
          <h2 className={STYLES.sections.title}>Başarı Hikayeleri</h2>
          <div className={STYLES.stories.grid}>
            {SUCCESS_STORIES.map((story, index) => (
              <motion.div
                key={story.id}
                className={STYLES.stories.card.wrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={STYLES.stories.card.image}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={STYLES.stories.card.content}>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {story.title}
                  </h3>
                  <p className="text-blue-400 text-sm mb-2">
                    {story.partner}
                  </p>
                  <p className="text-2xl font-bold text-green-400 mb-2">
                    {story.result}
                  </p>
                  <p className="text-white/70">
                    {story.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section> */}

        {/* CTA Section */}
        <div className={STYLES.cta.wrapper}>
          <h2 className="text-3xl font-bold text-white mb-4">
            İş Ortağımız Olun
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Teknoloji ve inovasyon alanında güçlerimizi birleştirerek geleceği birlikte şekillendirelim.
          </p>
          <button className={STYLES.cta.button}>
            İletişime Geçin
          </button>
        </div>
   
    </main>
  );
}