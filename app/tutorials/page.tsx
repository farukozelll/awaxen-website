'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';

const TUTORIAL_CATEGORIES = [
  { id: 'all', name: 'Tümü' },
  { id: 'beginner', name: 'Başlangıç' },
  { id: 'intermediate', name: 'Orta Seviye' },
  { id: 'advanced', name: 'İleri Seviye' }
];

const LEARNING_PATHS = [
  {
    id: 'solar',
    title: 'Solar Panel Sistemleri',
    description: 'Panel kurulumundan bakıma, tüm solar sistem yönetimini öğrenin',
    image: '/images/tutorials/solar-path.jpg',
    duration: '12 saat',
    modules: 8,
    level: 'beginner'
  },
  {
    id: 'agribot',
    title: 'AgriBot Yönetimi',
    description: 'Tarım robotlarının kurulumu ve yönetimi hakkında kapsamlı eğitim',
    image: '/images/tutorials/agribot-path.jpg',
    duration: '15 saat',
    modules: 10,
    level: 'intermediate'
  },
  {
    id: 'ai',
    title: 'AI Model Optimizasyonu',
    description: 'Yapay zeka modellerinin eğitimi ve optimizasyonu',
    image: '/images/tutorials/ai-path.jpg',
    duration: '20 saat',
    modules: 12,
    level: 'advanced'
  }
];

const LATEST_TUTORIALS = [
  {
    id: 1,
    title: 'Panel Temizlik Otomasyonu',
    description: 'Otomatik temizleme sisteminin kurulumu ve konfigürasyonu',
    duration: '45 dakika',
    level: 'intermediate',
    instructor: 'Ahmet Yılmaz',
    image: '/images/tutorials/cleaning.jpg'
  },
  {
    id: 2,
    title: 'Sera İçi Navigasyon',
    description: 'AgriBot\'un sera içi hareket ve konumlandırma ayarları',
    duration: '60 dakika',
    level: 'advanced',
    instructor: 'Mehmet Demir',
    image: '/images/tutorials/navigation.jpg'
  },
  {
    id: 3,
    title: 'Verim Analizi',
    description: 'AI destekli verim analizi ve raporlama sisteminin kullanımı',
    duration: '30 dakika',
    level: 'beginner',
    instructor: 'Ayşe Kaya',
    image: '/images/tutorials/analytics.jpg'
  }
];

const POPULAR_WORKSHOPS = [
  {
    id: 1,
    title: 'Canlı: Solar Panel Kurulum Workshop',
    date: '15 Ocak 2024',
    time: '14:00',
    instructor: 'Ahmet Yılmaz',
    participants: 45,
    image: '/images/workshops/solar.jpg'
  },
  {
    id: 2,
    title: 'Canlı: AI Model Eğitimi Workshop',
    date: '20 Ocak 2024',
    time: '15:30',
    instructor: 'Ayşe Kaya',
    participants: 32,
    image: '/images/workshops/ai.jpg'
  }
];

const STYLES = {
  container: 'min-h-screen bg-[#0A0F1E]',
  header: {
    wrapper: cn(
      'relative pt-24 sm:pt-32 lg:pt-40',
      'pb-16 sm:pb-20 lg:pb-24',
      'bg-gradient-to-br from-[#0A2463] via-[#247BA0] to-[#006466]'
    ),
    content: 'container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl'
  },
  sections: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 py-16',
    title: 'text-2xl font-bold text-white mb-8'
  },
  filters: {
    wrapper: cn(
      'flex justify-center gap-4 mb-12',
      'overflow-x-auto pb-4'
    ),
    button: (active: boolean) => cn(
      'px-6 py-2 rounded-lg text-sm font-medium',
      'transition-all duration-200',
      active 
        ? 'bg-blue-500 text-white'
        : 'bg-white/10 text-white/70 hover:bg-white/20'
    )
  },
  paths: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    card: cn(
      'group bg-white/5 backdrop-blur-sm',
      'rounded-xl overflow-hidden',
      'border border-white/10',
      'transition-all duration-300',
      'hover:border-white/20'
    ),
    content: 'p-6',
    stats: 'flex items-center gap-4 mt-4 text-sm text-white/60'
  },
  tutorials: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl overflow-hidden',
      'border border-white/10',
      'hover:border-white/20',
      'transition-all duration-300'
    ),
    badge: (level: string) => cn(
      'px-3 py-1 rounded-full text-xs font-medium',
      level === 'beginner' && 'bg-green-500/20 text-green-400',
      level === 'intermediate' && 'bg-yellow-500/20 text-yellow-400',
      level === 'advanced' && 'bg-red-500/20 text-red-400'
    )
  },
  workshops: {
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    card: cn(
      'flex flex-col md:flex-row gap-6',
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10',
      'hover:border-white/20',
      'transition-all duration-300'
    )
  }
};

export default function TutorialsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <main className={STYLES.container}>
      {/* Header */}
      <section className={STYLES.header.wrapper}>
        <div className={STYLES.header.content}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Eğitim Merkezi
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Adım adım eğitimler ve interaktif workshoplar ile öğrenin
          </motion.p>
        </div>
      </section>

      <div className={STYLES.sections.wrapper}>
        {/* Category Filters */}
        <div className={STYLES.filters.wrapper}>
          {TUTORIAL_CATEGORIES.map((category, index) => (
            <motion.button
              key={category.id}
              className={STYLES.filters.button(activeFilter === category.id)}
              onClick={() => setActiveFilter(category.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Learning Paths */}
        <section className="mb-24">
          <h2 className={STYLES.sections.title}>Öğrenim Yolları</h2>
          <div className={STYLES.paths.grid}>
            {LEARNING_PATHS
              .filter(path => activeFilter === 'all' || path.level === activeFilter)
              .map((path, index) => (
                <motion.div
                  key={path.id}
                  className={STYLES.paths.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={path.image}
                      alt={path.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className={STYLES.paths.content}>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {path.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {path.description}
                    </p>
                    <div className={STYLES.paths.stats}>
                      <span>{path.duration}</span>
                      <span>•</span>
                      <span>{path.modules} modül</span>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Latest Tutorials */}
        <section className="mb-24">
          <h2 className={STYLES.sections.title}>Son Eklenen Eğitimler</h2>
          <div className={STYLES.tutorials.grid}>
            {LATEST_TUTORIALS
              .filter(tutorial => activeFilter === 'all' || tutorial.level === activeFilter)
              .map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  className={STYLES.tutorials.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="aspect-video relative">
                    <Image
                      src={tutorial.image}
                      alt={tutorial.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={STYLES.tutorials.badge(tutorial.level)}>
                        {TUTORIAL_CATEGORIES.find(cat => cat.id === tutorial.level)?.name}
                      </span>
                      <span className="text-sm text-white/60">
                        {tutorial.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {tutorial.description}
                    </p>
                    <div className="text-sm text-white/60">
                      Eğitmen: {tutorial.instructor}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Live Workshops */}
        <section>
          <h2 className={STYLES.sections.title}>Canlı Workshop'lar</h2>
          <div className={STYLES.workshops.grid}>
            {POPULAR_WORKSHOPS.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                className={STYLES.workshops.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="md:w-1/3 aspect-video md:aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                      Canlı Etkinlik
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {workshop.title}
                  </h3>
                  <div className="text-white/70 space-y-2">
                    <p>Tarih: {workshop.date}</p>
                    <p>Saat: {workshop.time}</p>
                    <p>Eğitmen: {workshop.instructor}</p>
                    <p>{workshop.participants} katılımcı</p>
                  </div>
                  <button className="mt-4 px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors">
                    Katıl
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}