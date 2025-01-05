'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';

const PRODUCT_FEATURES = [
  {
    title: 'Yapay Zeka Destekli İzleme',
    description: 'Gerçek zamanlı performans analizi ve tahmine dayalı bakım planlaması',
    icon: '/icons/ai-monitoring.svg',
    stats: [
      { label: 'Verimlilik Artışı', value: '%40' },
      { label: 'Arıza Tespiti', value: '<%1 hata' }
    ]
  },
  {
    title: 'Otonom Temizleme',
    description: 'Otomatik kirlilik tespiti ve robotik temizleme sistemi',
    icon: '/icons/auto-clean.svg',
    stats: [
      { label: 'Temizlik Süresi', value: '-70%' },
      { label: 'Su Tasarrufu', value: '%60' }
    ]
  },
  {
    title: 'Akıllı Optimizasyon',
    description: 'Hava durumu bazlı panel açı optimizasyonu ve enerji tahminlemesi',
    icon: '/icons/smart-opt.svg',
    stats: [
      { label: 'Enerji Üretimi', value: '+35%' },
      { label: 'ROI', value: '18 ay' }
    ]
  }
];

const TECHNICAL_SPECS = {
  monitoring: {
    title: 'İzleme Sistemi',
    specs: [
      { name: 'Veri Toplama Hızı', value: '1 saniye' },
      { name: 'Sensör Hassasiyeti', value: '±0.1%' },
      { name: 'Bağlantı Teknolojisi', value: '5G/WiFi' },
      { name: 'Batarya Ömrü', value: '5 yıl' }
    ]
  },
  cleaning: {
    title: 'Temizleme Sistemi',
    specs: [
      { name: 'Temizleme Hızı', value: '100m²/saat' },
      { name: 'Su Tüketimi', value: '0.1L/m²' },
      { name: 'Robot Ağırlığı', value: '12 kg' },
      { name: 'Çalışma Süresi', value: '8 saat' }
    ]
  }
};

const CASE_STUDIES = [
  {
    title: 'Antalya Solar Çiftliği',
    description: 'Antalya\'da 500kW güneş çiftliği için akıllı izleme ve bakım sistemi kurulumu',
    results: [
      'Yıllık enerji üretiminde %35 artış',
      'Bakım maliyetlerinde %60 azalma',
      '14 ay içinde yatırım geri dönüşü'
    ],
    image: '/images/cases/antalya-farm.jpg'
  },
  {
    title: 'İzmir Endüstriyel Tesis',
    description: 'İzmir\'de endüstriyel tesis çatısına 200kW sistem kurulumu',
    results: [
      'Karbon emisyonunda yıllık 150 ton azalma',
      'Elektrik maliyetlerinde %45 tasarruf',
      '16 ay içinde yatırım geri dönüşü'
    ],
    image: '/images/cases/izmir-facility.jpg'
  }
];

const STYLES = {
  container: 'min-h-screen bg-[#0A0F1E]',
  header: {
    wrapper: cn(
      'relative min-h-[80vh]',
      'flex items-center',
      'bg-gradient-to-br from-[#0A2463] via-[#247BA0] to-[#006466]'
    ),
    content: 'container mx-auto px-4 sm:px-6 lg:px-8 relative z-10',
    background: 'absolute inset-0 opacity-10 bg-[url("/images/grid.svg")]'
  },
  sections: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 py-24',
    title: 'text-3xl font-bold text-white mb-12',
    subtitle: 'text-xl font-semibold text-white mb-6'
  },
  features: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl p-8',
      'border border-white/10',
      'hover:border-white/20',
      'transition-all duration-300'
    ),
    stats: 'grid grid-cols-2 gap-4 mt-6'
  },
  specs: {
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl p-8',
      'border border-white/10'
    )
  },
  cases: {
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl overflow-hidden',
      'border border-white/10',
      'group'
    )
  },
  cta: {
    wrapper: cn(
      'bg-gradient-to-r from-blue-500/20 to-purple-500/20',
      'rounded-2xl p-12 text-center',
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

export default function SolarSystemsPage() {
  return (
    <main className={STYLES.container}>
      {/* Hero Section */}
      <header className={STYLES.header.wrapper}>
        <div className={STYLES.header.background} />
        <div className={STYLES.header.content}>
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Akıllı Solar Panel Sistemleri
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Yapay zeka destekli izleme ve bakım sistemleriyle güneş enerjisi yatırımınızın
              verimini maksimize edin.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
              >
                Keşfedin
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className={STYLES.sections.wrapper}>
        <h2 className={STYLES.sections.title}>Özellikler</h2>
        <div className={STYLES.features.grid}>
          {PRODUCT_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={STYLES.features.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-6"
              />
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 mb-4">
                {feature.description}
              </p>
              <div className={STYLES.features.stats}>
                {feature.stats.map(stat => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-lg p-3"
                  >
                    <div className="text-2xl font-bold text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className={STYLES.sections.wrapper}>
        <h2 className={STYLES.sections.title}>Teknik Özellikler</h2>
        <div className={STYLES.specs.grid}>
          {Object.values(TECHNICAL_SPECS).map((category, index) => (
            <motion.div
              key={category.title}
              className={STYLES.specs.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.specs.map(spec => (
                  <div
                    key={spec.name}
                    className="flex justify-between items-center"
                  >
                    <span className="text-white/70">{spec.name}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={STYLES.sections.wrapper}>
        <h2 className={STYLES.sections.title}>Başarı Hikayeleri</h2>
        <div className={STYLES.cases.grid}>
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.title}
              className={STYLES.cases.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative aspect-video">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {study.description}
                </p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-white/70"
                    >
                      <svg
                        className="w-5 h-5 text-blue-400 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={STYLES.sections.wrapper}>
        <div className={STYLES.cta.wrapper}>
          <h2 className="text-3xl font-bold text-white mb-4">
            Projeniz için Teklif Alın
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Uzman ekibimiz, ihtiyaçlarınıza özel çözümler için sizinle iletişime geçsin.
          </p>
          <button className={STYLES.cta.button}>
            İletişime Geçin
          </button>
        </div>
      </section>
    </main>
  );
}