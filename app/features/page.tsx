'use client';


import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';

const FEATURES = [
  {
    title: 'Solar Panel Analytics',
    tag: 'Ana Ürün',
    description: 'Güneş panellerinizin performansını gerçek zamanlı izleyin, bakım ihtiyaçlarını öngörün ve enerji verimliliğini optimize edin.',
    icon: '/icons/solar-panel.svg',
    image: '/images/features/sea.avif',
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
    image: '/images/features/kızıl.avif',
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
    image: '/images/features/lake.avif',
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
        'backdrop-blur-sm rounded-2xl p-6',
        'border border-white/10',
        'transition-all duration-500',
        'hover:border-white/20',
        'hover:shadow-xl hover:shadow-blue-500/10',
        'transform-gpu', // GPU hızlandırma
        'will-change-transform' // Performans optimizasyonu
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
          'relative z-20', // Z-index eklendi
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

// ParallaxCard Component
function ParallaxCard({ feature, index }: { feature: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);
  const scale = useSpring(hovering ? 1.05 : 1, springConfig);

  // Parallax movement for content
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXValue = (e.clientX - rect.left) / width - 0.5;
    const mouseYValue = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(mouseXValue);
    mouseY.set(mouseYValue);
  };

  return (
    <motion.div
      ref={ref}
      className="relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <motion.div
        className={STYLES.features.card.wrapper}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Tag */}
        <motion.span
          className={STYLES.features.card.tag}
          style={{ z: 20, translateZ: 50 }}
        >
          {feature.tag}
        </motion.span>

        {/* Icon */}
        <motion.div
          style={{ x: moveX, y: moveY, z: 40 }}
          className="relative z-20"
        >
          <Image
            src={feature.icon}
            alt=""
            width={48}
            height={48}
            className={STYLES.features.card.icon}
          />
        </motion.div>

        {/* Title & Description */}
        <motion.div
          style={{ x: moveX, y: moveY, z: 30 }}
          className="relative z-20"
        >
          <h3 className={STYLES.features.card.title}>
            {feature.title}
          </h3>
          <p className={STYLES.features.card.description}>
            {feature.description}
          </p>
        </motion.div>

        {/* Image */}
        <div className={STYLES.features.card.image}>
          <motion.div
            style={{ x: moveX, y: moveY, scale: hovering ? 1.1 : 1 }}
            className="relative w-full h-full overflow-hidden"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          style={{ x: moveX, y: moveY, z: 20 }}
          className={STYLES.features.card.highlights.wrapper}
        >
          {feature.highlights.map((highlight: string, i: number) => (
            <motion.div
              key={i}
              className={STYLES.features.card.highlights.item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + i * 0.1 }}
            >
              <CheckIcon />
              <span>{highlight}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
          style={{
            opacity: useTransform(mouseY, [-0.5, 0.5], [0.6, 0.3])
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Ana komponent içinde kullanımı
export default function FeaturesPage() {
  return (
    <div className={STYLES.container}>
      {/* ... Header Section ... */}

      <section className={STYLES.features.container}>
        <div className={STYLES.features.grid}>
          {FEATURES.map((feature, index) => (
            <ParallaxCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}