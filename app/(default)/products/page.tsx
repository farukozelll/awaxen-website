'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";
import solar from '@/public/images/solar.png';
import agribot from '@/public/images/agribot.jpg';
import aiAnalysis from '@/public/images/ai-analysis.webp';

const PRODUCTS = [
  {
    id: 'solar',
    title: 'Solar Panel Sistemleri',
    shortDesc: 'Akıllı izleme ve bakım çözümleri',
    description: 'Yapay zeka destekli izleme ve otonom bakım sistemleriyle güneş panellerinizin verimliliğini maksimize edin.',
    features: [
      'Gerçek zamanlı performans izleme',
      'Otonom temizleme sistemi',
      'Yapay zeka destekli arıza tespiti',
      'Detaylı analitik raporlama'
    ],
    specs: {
      'İzleme Hassasiyeti': '%99.9',
      'Bakım Otomasyonu': 'Tam Otonom',
      'Veri Güncelleme': 'Real-time',
      'Enerji Tasarrufu': 'Ortalama %40'
    },
    image: solar,
    techImage: solar
  },
  {
    id: 'agribot',
    title: 'AgriBot Tarım Robotları',
    shortDesc: 'Otonom hasat ve bakım robotları',
    description: 'Hassas tarım teknolojileriyle donatılmış robotlarımız, sera operasyonlarınızı otomatikleştirir ve verimliliği artırır.',
    features: [
      'Hassas navigasyon sistemi',
      'Görüntü işleme teknolojisi',
      'Otonom hasat kabiliyeti',
      'Uzaktan kontrol seçeneği'
    ],
    specs: {
      'Çalışma Süresi': '16 saat',
      'Hasat Hassasiyeti': '%95',
      'Alan Kapasitesi': '5 dönüm/gün',
      'Şarj Süresi': '2 saat'
    },
    image: agribot,
    techImage: agribot
  },
  {
    id: 'ai',
    title: 'AI Analiz Sistemleri',
    shortDesc: 'Yapay zeka destekli analiz araçları',
    description: 'Derin öğrenme algoritmalarımız, bitki sağlığını izler ve erken uyarı sistemiyle hastalıkları tespit eder.',
    features: [
      'Erken hastalık tespiti',
      'Verim optimizasyonu',
      'Sulama yönetimi',
      'Besin analizi'
    ],
    specs: {
      'Doğruluk Oranı': '%98',
      'Analiz Süresi': '< 1 saniye',
      'Desteklenen Bitki': '10+ tür',
      'Güncelleme Sıklığı': 'Haftalık'
    },
    image: aiAnalysis,
    techImage: aiAnalysis
  }
];

const STYLES = {
  container: 'min-h-screen bg-[#0A0F1E]',
  header: {
    wrapper: cn(
      'relative pt-24 sm:pt-32 lg:pt-40',
      'pb-16 sm:pb-20 lg:pb-24',
      'bg-gradient-to-br'
    ),
    content: cn(
      'container mt-5  mx-auto px-4 sm:px-6 lg:px-8',
      'text-center max-w-4xl'
    ),
    background: cn(
      'absolute mt-20 bg-cover inset-0',
      'bg-[url("/images/bg-1.svg")]',
      'w-full h-64 object-cover',
      '[mask-image:linear-gradient(to_bottom,transparent,black,transparent)]',
      '[-webkit-mask-image:linear-gradient(to_bottom,transparent,black,transparent)]'
    )
  },
  products: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16',
    grid: 'grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24'
  },
  productCard: {
    wrapper: cn(
      'group bg-white/5 backdrop-blur-sm',
      'rounded-2xl overflow-hidden',
      'border border-white/10',
      'hover:border-white/20',
      'transition-all duration-500'
    ),
    image: 'aspect-[4/3] relative',
    content: 'p-6',
    title: 'text-xl font-semibold text-white mb-2',
    description: 'text-white/70',
    button: cn(
      'mt-4 px-6 py-2 rounded-lg',
      'bg-blue-500 hover:bg-blue-600',
      'text-white text-sm font-medium',
      'transition-colors duration-200'
    )
  },
  productDetails: {
    wrapper: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl p-8 mt-8',
      'border border-white/10'
    ),
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
    content: 'space-y-6',
    features: 'space-y-4',
    specs: 'grid grid-cols-2 gap-4',
    specItem: cn(
      'bg-white/5 rounded-lg p-4',
      'border border-white/10'
    )
  }
};

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

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
            Çözümlerimiz
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tarım ve enerji sektöründe yenilikçi teknoloji çözümleri
          </motion.p>
        </div>
      </section>

      <div className={STYLES.products.wrapper}>
        {/* Product Cards */}
        <div className={STYLES.products.grid}>
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              className={STYLES.productCard.wrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
            >
              <div className={STYLES.productCard.image}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover grayscale-[50%] transition-transform duration-500 group-hover:scale-105"
                />
                <div className="object-cover absolute inset-0 bg-indigo-400 bg-opacity-20 transition-transform duration-500 group-hover:scale-105"></div>
              </div>
              <div className={STYLES.productCard.content}>
                <h3 className={STYLES.productCard.title}>{product.title}</h3>
                <p className={STYLES.productCard.description}>{product.shortDesc}</p>
                <button className={STYLES.productCard.button}>
                  Detayları Gör
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Product Details */}
        <motion.div 
          className={STYLES.productDetails.wrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          key={selectedProduct.id}
        >
          <div className={STYLES.productDetails.grid}>
            <div className={STYLES.productDetails.content}>
              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedProduct.title}
              </h2>
              <p className="text-white/70">{selectedProduct.description}</p>

              <div className={STYLES.productDetails.features}>
                <h3 className="text-xl font-semibold text-white mb-4">Özellikler</h3>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2 text-white/70"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-blue-400">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Teknik Özellikler</h3>
                <div className={STYLES.productDetails.specs}>
                  {Object.entries(selectedProduct.specs).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className={STYLES.productDetails.specItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="text-sm text-white/50">{key}</div>
                      <div className="text-lg font-semibold text-white">{value}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={selectedProduct.techImage}
                alt={`${selectedProduct.title} Technical`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <Link
              href={`/contact?product=${selectedProduct.id}`}
              className={cn(
                'inline-flex items-center gap-2',
                'px-8 py-4 rounded-lg',
                'bg-blue-500 hover:bg-blue-600',
                'text-white font-medium',
                'transition-colors duration-200'
              )}
            >
              Detaylı Bilgi Al
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}