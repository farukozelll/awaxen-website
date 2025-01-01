'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/utils';

const CATEGORIES = [
  {
    id: 'solar',
    name: 'Solar Panel Sistemleri',
    icon: '/icons/solar.svg',
    articleCount: 24
  },
  {
    id: 'agribot',
    name: 'Tarım Robotları',
    icon: '/icons/robot.svg',
    articleCount: 18
  },
  {
    id: 'ai',
    name: 'AI Çözümleri',
    icon: '/icons/ai.svg',
    articleCount: 15
  },
  {
    id: 'maintenance',
    name: 'Bakım ve Servis',
    icon: '/icons/maintenance.svg',
    articleCount: 12
  }
];

const POPULAR_ARTICLES = [
  {
    id: 1,
    title: 'Solar Panel Temizliği Nasıl Yapılır?',
    category: 'solar',
    readTime: '5 dk',
    views: 1240
  },
  {
    id: 2,
    title: 'AgriBot Kurulum Rehberi',
    category: 'agribot',
    readTime: '8 dk',
    views: 890
  },
  {
    id: 3,
    title: 'AI Modelinin Eğitimi ve Güncellenmesi',
    category: 'ai',
    readTime: '10 dk',
    views: 750
  }
];

const LATEST_ARTICLES = [
  {
    id: 4,
    title: 'Panel Verimlilik Optimizasyonu',
    category: 'solar',
    date: '2 gün önce',
    excerpt: 'Panel verimliliğini artırmak için temel ipuçları ve öneriler.'
  },
  {
    id: 5,
    title: 'Sera İçi Navigasyon Sistemi',
    category: 'agribot',
    date: '4 gün önce',
    excerpt: 'AgriBot\'un sera içi hareket ve navigasyon sistemi hakkında detaylı bilgi.'
  }
];

const FAQ_ITEMS = [
  {
    question: 'Solar panel sistemi kurulumu ne kadar sürer?',
    answer: 'Sistem büyüklüğüne bağlı olarak 2-5 gün arasında değişmektedir. Detaylı bilgi için teknik ekibimizle iletişime geçebilirsiniz.'
  },
  {
    question: 'AgriBot\'un şarj süresi ne kadardır?',
    answer: 'AgriBot, hızlı şarj özelliği ile 2 saat içinde tam şarja ulaşabilmektedir. Tam şarj ile 8 saat kesintisiz çalışabilir.'
  },
  {
    question: 'AI modelini kendi verilerimle eğitebilir miyim?',
    answer: 'Evet, AI modelimiz özelleştirilebilir yapıdadır. Kendi veri setinizle modeli eğitebilir ve optimize edebilirsiniz.'
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
    content: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10',
    searchWrapper: cn(
      'mt-8',
      'bg-white/10 backdrop-blur-sm',
      'rounded-xl p-2',
      'border border-white/20'
    ),
    searchInput: cn(
      'w-full bg-transparent',
      'px-4 py-3',
      'text-white placeholder-white/50',
      'focus:outline-none'
    )
  },
  sections: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 py-12',
    title: 'text-2xl font-bold text-white mb-8'
  },
  categories: {
    grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10',
      'hover:bg-white/10',
      'transition-all duration-300',
      'group'
    )
  },
  articles: {
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
    popularWrapper: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10'
    ),
    popularList: 'space-y-4',
    popularItem: cn(
      'flex items-center justify-between',
      'p-4 rounded-lg',
      'bg-white/5',
      'hover:bg-white/10',
      'transition-colors duration-200'
    ),
    latestList: 'space-y-6',
    latestItem: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10',
      'hover:bg-white/10',
      'transition-colors duration-200'
    )
  },
  faq: {
    wrapper: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl',
      'border border-white/10',
      'divide-y divide-white/10'
    ),
    item: cn(
      'p-6',
      'hover:bg-white/5',
      'transition-colors duration-200'
    )
  }
};

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className={STYLES.container}>
      {/* Header with Search */}
      <section className={STYLES.header.wrapper}>
        <div className={STYLES.header.content}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Bilgi Bankası
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Ürün ve hizmetlerimiz hakkında detaylı bilgi ve dokümantasyon
          </motion.p>

          <motion.div
            className={STYLES.header.searchWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Ne aramak istersiniz?"
              className={STYLES.header.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </div>
      </section>

      <div className={STYLES.sections.wrapper}>
        {/* Categories */}
        <section>
          <h2 className={STYLES.sections.title}>Kategoriler</h2>
          <div className={STYLES.categories.grid}>
            {CATEGORIES.map((category, index) => (
              <motion.a
                key={category.id}
                href={`/knowledge-base/${category.id}`}
                className={STYLES.categories.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={category.icon}
                  alt=""
                  className="w-12 h-12 mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-white/60">
                  {category.articleCount} makale
                </p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section className="mb-16">
          <div className={STYLES.articles.grid}>
            {/* Popular Articles */}
            <div>
              <h2 className={STYLES.sections.title}>Popüler Makaleler</h2>
              <div className={STYLES.articles.popularWrapper}>
                <div className={STYLES.articles.popularList}>
                  {POPULAR_ARTICLES.map((article, index) => (
                    <motion.a
                      key={article.id}
                      href={`/knowledge-base/article/${article.id}`}
                      className={STYLES.articles.popularItem}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div>
                        <h3 className="text-white font-medium">
                          {article.title}
                        </h3>
                        <span className="text-sm text-white/60">
                          {article.readTime} okuma
                        </span>
                      </div>
                      <span className="text-sm text-white/60">
                        {article.views} görüntülenme
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Latest Articles */}
            <div>
              <h2 className={STYLES.sections.title}>Son Eklenenler</h2>
              <div className={STYLES.articles.latestList}>
                {LATEST_ARTICLES.map((article, index) => (
                  <motion.a
                    key={article.id}
                    href={`/knowledge-base/article/${article.id}`}
                    className={STYLES.articles.latestItem}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-sm text-blue-400 block mb-2">
                      {article.date}
                    </span>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-white/70">
                      {article.excerpt}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className={STYLES.sections.title}>Sık Sorulan Sorular</h2>
          <div className={STYLES.faq.wrapper}>
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                className={STYLES.faq.item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-white/70">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}