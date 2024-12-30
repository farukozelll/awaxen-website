'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'solar',
    title: 'Solar Panel İzleme Sistemi',
    description: 'Akıllı izleme ve bakım sistemimizin saha uygulaması',
    image: '/images/gallery/solar-1.jpg',
    tags: ['IoT', 'Analytics']
  },
  {
    id: 2,
    category: 'robotics',
    title: 'AgriBot Domates Toplama',
    description: 'Otonom domates toplama robotumuzun sera içi testi',
    image: '/images/gallery/robot-1.jpg',
    tags: ['Robotik', 'AI']
  },
  {
    id: 3,
    category: 'ai',
    title: 'Yapay Zeka Destekli Analiz',
    description: 'Hastalık tespit sistemimizin görsel analizi',
    image: '/images/gallery/ai-1.jpg',
    tags: ['AI', 'ML']
  },
  {
    id: 4,
    category: 'solar',
    title: 'Panel Bakım İstasyonu',
    description: 'Otomatik temizleme ve bakım istasyonumuz',
    image: '/images/gallery/solar-2.jpg',
    tags: ['Otomasyon']
  },
  {
    id: 5,
    category: 'robotics',
    title: 'AgriBot Navigasyon',
    description: 'Sera içi hassas navigasyon sistemi',
    image: '/images/gallery/robot-2.jpg',
    tags: ['Navigasyon']
  },
  {
    id: 6,
    category: 'lab',
    title: 'AR-GE Laboratuvarı',
    description: 'Yeni nesil sensör geliştirme çalışmaları',
    image: '/images/gallery/lab-1.jpg',
    tags: ['AR-GE']
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Tümü' },
  { id: 'solar', label: 'Solar Sistemler' },
  { id: 'robotics', label: 'Robotik' },
  { id: 'ai', label: 'Yapay Zeka' },
  { id: 'lab', label: 'AR-GE' }
];

const STYLES = {
  container: cn(
    'min-h-screen bg-[#0A0F1E]',
    'pb-16 sm:pb-20 lg:pb-24'
  ),
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
    background: cn(
      'absolute inset-0',
      'opacity-10',
      'bg-[url("/images/grid.svg")]'
    )
  },
  filters: {
    wrapper: cn(
      'sticky top-0 z-10',
      'backdrop-blur-md bg-[#0A0F1E]/80',
      'py-4 mb-8'
    ),
    container: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'flex items-center justify-center flex-wrap gap-4'
    ),
    button: (active: boolean) => cn(
      'px-6 py-2 rounded-full',
      'text-sm font-medium',
      'transition-all duration-300',
      active ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
    )
  },
  gallery: {
    container: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'max-w-7xl'
    ),
    grid: cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'gap-6 lg:gap-8'
    ),
    card: {
      wrapper: cn(
        'group relative rounded-2xl overflow-hidden',
        'bg-white/5',
        'border border-white/10',
        'hover:border-white/20',
        'transition-all duration-500'
      ),
      image: cn(
        'aspect-video w-full',
        'object-cover',
        'transition-transform duration-500',
        'group-hover:scale-105'
      ),
      overlay: cn(
        'absolute inset-0',
        'bg-gradient-to-t from-black/80 via-black/40 to-transparent',
        'opacity-0 group-hover:opacity-100',
        'transition-opacity duration-300'
      ),
      content: cn(
        'absolute bottom-0 left-0 right-0',
        'p-6',
        'transform translate-y-4 group-hover:translate-y-0',
        'opacity-0 group-hover:opacity-100',
        'transition-all duration-300'
      ),
      tags: cn(
        'flex gap-2 mb-3'
      ),
      tag: cn(
        'px-2 py-1 rounded-full',
        'bg-white/20 backdrop-blur-sm',
        'text-xs text-white/90'
      )
    }
  },
  modal: {
    overlay: cn(
      'fixed inset-0 z-50',
      'bg-black/90 backdrop-blur-md',
      'flex items-center justify-center'
    ),
    content: cn(
      'relative max-w-7xl w-full mx-4',
      'bg-white/10 backdrop-blur-lg',
      'rounded-2xl overflow-hidden'
    )
  }
};

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredItems = selectedCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

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
            Projelerimiz
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Teknoloji ve inovasyonla geleceği şekillendirdiğimiz çalışmalarımız
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <div className={STYLES.filters.wrapper}>
        <div className={STYLES.filters.container}>
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category.id}
              className={STYLES.filters.button(selectedCategory === category.id)}
              onClick={() => setSelectedCategory(category.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className={STYLES.gallery.container}>
        <div className={STYLES.gallery.grid}>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={STYLES.gallery.card.wrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedItem(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className={STYLES.gallery.card.image}
              />
              <div className={STYLES.gallery.card.overlay} />
              <div className={STYLES.gallery.card.content}>
                <div className={STYLES.gallery.card.tags}>
                  {item.tags.map(tag => (
                    <span key={tag} className={STYLES.gallery.card.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className={STYLES.modal.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className={STYLES.modal.content}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {selectedItem.tags.map(tag => (
                    <span key={tag} className={STYLES.gallery.card.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-white/80">
                  {selectedItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}