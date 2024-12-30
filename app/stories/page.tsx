'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const PARTNER_CATEGORIES = [
  {
    id: 'technology',
    name: 'Teknoloji Ortakları',
    description: 'Yazılım ve donanım çözümlerinde iş birliği yaptığımız şirketler'
  },
  {
    id: 'agriculture',
    name: 'Tarım Ortakları',
    description: 'Tarım teknolojileri alanında birlikte çalıştığımız kurumlar'
  },
  {
    id: 'energy',
    name: 'Enerji Ortakları',
    description: 'Solar sistemler konusunda iş birliği yaptığımız firmalar'
  },
  {
    id: 'research',
    name: 'Araştırma Kurumları',
    description: 'AR-GE projelerinde iş birliği yaptığımız kurumlar'
  }
];

const PARTNERS = [
  {
    id: 1,
    name: 'TechCorp Solutions',
    category: 'technology',
    logo: '/images/partners/tech-corp.svg',
    description: 'Yapay zeka ve görüntü işleme teknolojilerinde stratejik ortağımız',
    partnership: '2022\'den beri iş ortağımız',
    projects: ['AI Model Geliştirme', 'Görüntü İşleme Sistemleri']
  },
  {
    id: 2,
    name: 'AgroTech Innovations',
    category: 'agriculture',
    logo: '/images/partners/agro-tech.svg',
    description: 'Akıllı sera sistemleri konusunda çözüm ortağımız',
    partnership: '2023\'ten beri iş ortağımız',
    projects: ['Akıllı Sera Sistemleri', 'IoT Sensör Ağları']
  },
  // Diğer partnerlar...
];

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

      <div className={STYLES.sections.wrapper}>
        {/* Partner Categories */}
        <section>
          <h2 className={STYLES.sections.title}>İş Birliği Alanlarımız</h2>
          <div className={STYLES.categories.grid}>
            {PARTNER_CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                className={STYLES.categories.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-white/70">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partners Grid */}
        <section>
          <h2 className={STYLES.sections.title}>Çözüm Ortaklarımız</h2>
          <div className={STYLES.partners.grid}>
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                className={STYLES.partners.card.wrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={STYLES.partners.card.logo}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto"
                  />
                </div>
                <div className={STYLES.partners.card.content}>
                  <h3 className="text-lg font-semibold text-white">
                    {partner.name}
                  </h3>
                  <p className="text-white/70">
                    {partner.description}
                  </p>
                  <p className="text-sm text-blue-400">
                    {partner.partnership}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {partner.projects.map(project => (
                      <span
                        key={project}
                        className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/70"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mt-24">
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
        </section>

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
      </div>
      <Footer />
    </main>
  );
}