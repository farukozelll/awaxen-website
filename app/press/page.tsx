'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';

const COMPANY_INFO = {
  founded: '2023',
  headquarters: 'İzmir, Türkiye',
  employees: '50+',
  presence: '3 ülke',
  funding: '₺10M+',
  projects: '100+ proje'
};

const PRESS_RELEASES = [
  {
    id: 1,
    date: '15 Aralık 2023',
    title: 'Awaxen, Yeni Nesil Solar Panel İzleme Sistemini Duyurdu',
    excerpt: 'Yapay zeka destekli yeni solar panel izleme sistemi ile enerji verimliliğinde %40 artış',
    link: '/press/solar-monitoring-announcement'
  },
  {
    id: 2,
    date: '1 Kasım 2023',
    title: 'AgriBot Projemiz TÜBİTAK Desteği Almaya Hak Kazandı',
    excerpt: 'Otonom tarım robotumuz TÜBİTAK 1501 programı kapsamında destek almaya hak kazandı',
    link: '/press/tubitak-support'
  },
  {
    id: 3,
    date: '15 Ekim 2023',
    title: 'Awaxen ve AgroTech İş Birliği Anlaşması İmzaladı',
    excerpt: 'Tarım teknolojileri alanında stratejik iş birliği anlaşması imzalandı',
    link: '/press/agrotech-partnership'
  }
];

const MEDIA_ASSETS = {
  logos: [
    { name: 'Logo - Primary', file: 'logo-primary.svg', format: 'SVG' },
    { name: 'Logo - Dark', file: 'logo-dark.svg', format: 'SVG' },
    { name: 'Logo - Light', file: 'logo-light.svg', format: 'SVG' }
  ],
  photos: [
    { name: 'Office Team', file: 'office-team.jpg', format: 'JPG' },
    { name: 'Product Demo', file: 'product-demo.jpg', format: 'JPG' },
    { name: 'Solar Panels', file: 'solar-panels.jpg', format: 'JPG' }
  ],
  videos: [
    { name: 'Company Overview', file: 'company-overview.mp4', format: 'MP4' },
    { name: 'Product Showcase', file: 'product-showcase.mp4', format: 'MP4' }
  ]
};

const PRESS_CONTACT = {
  name: 'Basın İletişim',
  email: 'press@awaxen.com',
  phone: '+90 232 XXX XX XX'
};

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
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16',
    title: 'text-2xl font-bold text-white mb-8'
  },
  stats: {
    grid: 'grid grid-cols-2 md:grid-cols-3 gap-6 mb-24',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10'
    )
  },
  pressReleases: {
    grid: 'space-y-6 mb-24',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10',
      'hover:bg-white/10',
      'transition-colors duration-300'
    )
  },
  mediaAssets: {
    section: 'mb-24',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10'
    ),
    downloadButton: cn(
      'mt-4 w-full px-4 py-2',
      'rounded-lg',
      'bg-blue-500 hover:bg-blue-600',
      'text-white text-sm font-medium',
      'transition-colors duration-200'
    )
  },
  contact: {
    wrapper: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-8',
      'border border-white/10'
    )
  }
};

export default function PressKitPage() {
  return (
    <main className={STYLES.container}>
      {/* Header */}
      <section className={STYLES.header.wrapper}>
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid.svg')]" />
        <div className={STYLES.header.content}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Basın Kiti
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Awaxen hakkında medya içerikleri ve kurumsal bilgiler
          </motion.p>
        </div>
      </section>

      <div className={STYLES.sections.wrapper}>
        {/* Company Stats */}
        <section>
          <h2 className={STYLES.sections.title}>Rakamlarla Awaxen</h2>
          <div className={STYLES.stats.grid}>
            {Object.entries(COMPANY_INFO).map(([key, value], index) => (
              <motion.div
                key={key}
                className={STYLES.stats.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-white/60 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section>
          <h2 className={STYLES.sections.title}>Basın Bültenleri</h2>
          <div className={STYLES.pressReleases.grid}>
            {PRESS_RELEASES.map((release, index) => (
              <motion.a
                key={release.id}
                href={release.link}
                className={STYLES.pressReleases.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-sm text-blue-400 mb-2">{release.date}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {release.title}
                </h3>
                <p className="text-white/70">{release.excerpt}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Media Assets */}
        <section className={STYLES.mediaAssets.section}>
          <h2 className={STYLES.sections.title}>Medya Görselleri</h2>
          
          {/* Logos */}
          <h3 className="text-lg font-semibold text-white mb-4">Logolar</h3>
          <div className={STYLES.mediaAssets.grid}>
            {MEDIA_ASSETS.logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className={STYLES.mediaAssets.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-video relative bg-black/20 rounded-lg mb-4">
                  <Image
                    src={`/images/press/${logo.file}`}
                    alt={logo.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{logo.name}</div>
                    <div className="text-sm text-white/60">{logo.format}</div>
                  </div>
                  <button className={STYLES.mediaAssets.downloadButton}>
                    İndir
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Photos */}
          <h3 className="text-lg font-semibold text-white mb-4 mt-8">Fotoğraflar</h3>
          <div className={STYLES.mediaAssets.grid}>
            {MEDIA_ASSETS.photos.map((photo, index) => (
              <motion.div
                key={photo.name}
                className={STYLES.mediaAssets.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`/images/press/${photo.file}`}
                    alt={photo.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{photo.name}</div>
                    <div className="text-sm text-white/60">{photo.format}</div>
                  </div>
                  <button className={STYLES.mediaAssets.downloadButton}>
                    İndir
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Press Contact */}
        <section>
          <h2 className={STYLES.sections.title}>Basın İletişim</h2>
          <div className={STYLES.contact.wrapper}>
            <h3 className="text-xl font-semibold text-white mb-4">
              {PRESS_CONTACT.name}
            </h3>
            <div className="space-y-2 text-white/70">
              <p>E-posta: {PRESS_CONTACT.email}</p>
              <p>Telefon: {PRESS_CONTACT.phone}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}