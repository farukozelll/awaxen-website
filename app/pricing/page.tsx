'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';

const PRICING_CATEGORIES = [
  { id: 'solar', name: 'Solar Panel Sistemleri' },
  { id: 'agribot', name: 'Tarım Robotları' }
];

const PRICING_PLANS = {
  solar: [
    {
      name: 'Başlangıç',
      price: '1.499₺',
      period: '/ay',
      description: 'Küçük ölçekli solar sistemler için temel izleme ve bakım paketi',
      features: [
        '25 panel kapasitesi',
        'Temel izleme dashboard\'u',
        'Günlük raporlama',
        'E-posta bildirimleri',
        'Mobil uygulama erişimi'
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: '2.999₺',
      period: '/ay',
      description: 'Orta ölçekli işletmeler için gelişmiş analiz ve optimizasyon paketi',
      features: [
        '100 panel kapasitesi',
        'Gelişmiş analitik dashboard',
        'Gerçek zamanlı izleme',
        'AI destekli optimizasyon',
        'Otonom temizleme kontrolü',
        '7/24 teknik destek',
        'API erişimi'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Özel Fiyat',
      period: '',
      description: 'Büyük ölçekli solar çiftlikler için özelleştirilmiş çözümler',
      features: [
        'Sınırsız panel kapasitesi',
        'Özel analitik raporlar',
        'Özelleştirilmiş API',
        'Öncelikli destek',
        'Yerinde kurulum desteği',
        'Özel entegrasyonlar',
        'SLA garantisi'
      ],
      highlight: false
    }
  ],
  agribot: [
    {
      name: 'Starter',
      price: '2.999₺',
      period: '/ay',
      description: 'Küçük seralar için temel otomasyon paketi',
      features: [
        '5 dönüm kapasite',
        'Temel navigasyon sistemi',
        'Manuel kontrol arayüzü',
        'Günlük raporlama',
        'E-posta desteği'
      ],
      highlight: false
    },
    {
      name: 'Advanced',
      price: '5.999₺',
      period: '/ay',
      description: 'Orta ölçekli seralar için gelişmiş otomasyon paketi',
      features: [
        '20 dönüm kapasite',
        'Gelişmiş AI navigasyon',
        'Otonom operasyon',
        'Gerçek zamanlı izleme',
        'Verim analizi',
        '7/24 teknik destek',
        'Mobil uygulama'
      ],
      highlight: true
    },
    {
      name: 'Custom',
      price: 'Özel Fiyat',
      period: '',
      description: 'Büyük ölçekli seralar için özelleştirilmiş çözümler',
      features: [
        'Sınırsız kapasite',
        'Çoklu robot koordinasyonu',
        'Özel entegrasyonlar',
        'Öncelikli destek',
        'Yerinde eğitim',
        'SLA garantisi',
        'Özelleştirilmiş raporlar'
      ],
      highlight: false
    }
  ]
};

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
  categories: {
    wrapper: cn(
      'sticky top-0 z-10',
      'bg-[#0A0F1E]/80 backdrop-blur-md',
      'py-4 border-b border-white/10'
    ),
    content: 'container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-4'
  },
  plans: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 py-16',
    grid: 'grid grid-cols-1 lg:grid-cols-3 gap-8',
  },
  card: {
    wrapper: (highlight: boolean) => cn(
      'relative rounded-2xl p-8',
      'border transition-all duration-300',
      highlight ? [
        'bg-gradient-to-br from-blue-500/20 to-purple-500/20',
        'border-blue-500/20',
        'scale-105'
      ] : [
        'bg-white/5',
        'border-white/10',
        'hover:border-white/20'
      ]
    ),
    badge: cn(
      'absolute -top-4 left-1/2 -translate-x-1/2',
      'px-4 py-1 rounded-full',
      'bg-blue-500 text-white text-sm font-medium'
    ),
    header: 'text-center mb-8',
    price: {
      wrapper: 'flex items-baseline justify-center gap-1',
      amount: 'text-4xl font-bold text-white',
      period: 'text-lg text-white/60'
    },
    features: {
      list: 'space-y-3 mt-8',
      item: cn(
        'flex items-start gap-3',
        'text-sm text-white/70'
      )
    },
    cta: cn(
      'mt-8 w-full px-6 py-3',
      'rounded-lg text-center',
      'bg-blue-500 hover:bg-blue-600',
      'text-white font-medium',
      'transition-colors duration-200'
    )
  }
};

const CheckIcon = () => (
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
);

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState<'solar' | 'agribot'>('solar');

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
            Planlar ve Fiyatlandırma
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            İhtiyaçlarınıza uygun esnek çözümler
          </motion.p>
        </div>
      </section>

      {/* Category Selector */}
      <div className={STYLES.categories.wrapper}>
        <div className={STYLES.categories.content}>
          {PRICING_CATEGORIES.map(category => (
            <button
              key={category.id}
              className={cn(
                'px-6 py-2 rounded-lg',
                'text-sm font-medium',
                'transition-all duration-200',
                activeCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              )}
              onClick={() => setActiveCategory(category.id as 'solar' | 'agribot')}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className={STYLES.plans.wrapper}>
        <div className={STYLES.plans.grid}>
          {PRICING_PLANS[activeCategory].map((plan, index) => (
            <motion.div
              key={plan.name}
              className={STYLES.card.wrapper(plan.highlight)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.highlight && (
                <span className={STYLES.card.badge}>En Popüler</span>
              )}

              <div className={STYLES.card.header}>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/60 text-sm min-h-[40px]">
                  {plan.description}
                </p>
                <div className={STYLES.card.price.wrapper}>
                  <span className={STYLES.card.price.amount}>{plan.price}</span>
                  <span className={STYLES.card.price.period}>{plan.period}</span>
                </div>
              </div>

              <ul className={STYLES.card.features.list}>
                {plan.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className={STYLES.card.features.item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckIcon />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <button className={STYLES.card.cta}>
                {plan.price === 'Özel Fiyat' ? 'İletişime Geçin' : 'Hemen Başlayın'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}