'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const FEATURES = [
  {
    title: 'Solar Panel Analytics',
    tag: 'Ana Ürün',
    description: 'Güneş panellerinizin performansını gerçek zamanlı izleyin, bakım ihtiyaçlarını öngörün ve enerji verimliliğini optimize edin.',
    icon: '/icons/solar-panel.svg',
    image: '/images/features/solar-dashboard.png',
    highlights: [
      'Gerçek zamanlı performans izleme',
      'Yapay zeka destekli bakım öngörüleri',
      'Detaylı raporlama ve analiz',
      'Mobil uygulama desteği'
    ]
  },
  {
    title: 'AgriBot Harvester',
    tag: 'Ar-Ge Projesi',
    description: 'Yapay zeka destekli otonom domates toplama robotu ile tarımda verimliliği artırın.',
    icon: '/icons/robot.svg',
    image: '/images/features/agribot.png',
    highlights: [
      'Otonom hareket ve toplama',
      'Hassas navigasyon sistemi',
      'Verim analizi ve raporlama',
      'Uzaktan kontrol imkanı'
    ]
  },
  {
    title: 'CropHealth AI',
    tag: 'Ar-Ge Projesi',
    description: 'Yapay zeka ile domates hastalıklarını erken tespit edin, ürün kaybını minimize edin.',
    icon: '/icons/plant.svg',
    image: '/images/features/crop-health.png',
    highlights: [
      'Gerçek zamanlı hastalık tespiti',
      'Detaylı hastalık raporları',
      'Tedavi önerileri',
      'Erken uyarı sistemi'
    ]
  },
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
    title: cn(
      'text-4xl sm:text-5xl lg:text-6xl',
      'font-bold text-white',
      'tracking-tight leading-none',
      'mb-6'
    ),
    description: cn(
      'text-lg sm:text-xl',
      'text-white/90',
      'max-w-2xl mx-auto'
    )
  },
  features: {
    container: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'max-w-7xl'
    ),
    grid: cn(
      'grid grid-cols-1 lg:grid-cols-3',
      'gap-8 lg:gap-12'
    ),
    card: {
      wrapper: cn(
        'group relative',
        'bg-gradient-to-br from-white/10 to-white/5',
        'backdrop-blur-sm',
        'rounded-2xl',
        'p-6',
        'hover:from-white/15 hover:to-white/10',
        'transition-all duration-500',
        'border border-white/10',
        'hover:border-white/20',
        'hover:shadow-xl hover:shadow-blue-500/10'
      ),
      tag: cn(
        'absolute top-4 right-4',
        'px-3 py-1',
        'bg-blue-500/20',
        'rounded-full',
        'text-xs font-medium text-blue-300'
      ),
      icon: cn(
        'w-12 h-12',
        'mb-4',
        'text-blue-400',
        'group-hover:scale-110',
        'transition-transform duration-300'
      ),
      title: cn(
        'text-xl font-semibold',
        'text-white',
        'mb-2'
      ),
      description: cn(
        'text-white/70',
        'mb-6'
      ),
      image: cn(
        'aspect-video',
        'rounded-lg',
        'overflow-hidden',
        'mb-6',
        'border border-white/10'
      ),
      highlights: {
        wrapper: cn(
          'space-y-3'
        ),
        item: cn(
          'flex items-center gap-2',
          'text-sm text-white/70'
        ),
        icon: cn(
          'w-4 h-4',
          'text-blue-400'
        )
      }
    }
  }
};

const CheckIcon = () => (
  <svg 
    className={STYLES.features.card.highlights.icon}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20 6L9 17L4 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export default function FeaturesPage() {
  return (
    <div className={STYLES.container}>
      {/* Header Section */}
      <header className={STYLES.header.wrapper}>
        <div className={STYLES.header.content}>
          <motion.h1 
            className={STYLES.header.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Teknoloji ve İnovasyonla<br />
            Geleceği Şekillendiriyoruz
          </motion.h1>
          <motion.p 
            className={STYLES.header.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Güneş enerjisi ve tarım teknolojilerinde öncü çözümlerimizle
            sürdürülebilir bir gelecek inşa ediyoruz.
          </motion.p>
        </div>
        
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] to-transparent" />
        </motion.div>
      </header>

      {/* Features Grid */}
      <section className={STYLES.features.container}>
        <div className={STYLES.features.grid}>
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={STYLES.features.card.wrapper}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <span className={STYLES.features.card.tag}>{feature.tag}</span>
              
              <Image
                src={feature.icon}
                alt=""
                width={48}
                height={48}
                className={STYLES.features.card.icon}
              />
              
              <h3 className={STYLES.features.card.title}>
                {feature.title}
              </h3>
              
              <p className={STYLES.features.card.description}>
                {feature.description}
              </p>
              
              <div className={STYLES.features.card.image}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={STYLES.features.card.highlights.wrapper}>
                {feature.highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    className={STYLES.features.card.highlights.item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                  >
                    <CheckIcon />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}