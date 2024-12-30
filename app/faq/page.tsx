'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const FAQ_CATEGORIES = [
  { id: 'general', name: 'Genel' },
  { id: 'solar', name: 'Solar Sistemler' },
  { id: 'agriculture', name: 'Tarım Teknolojileri' },
  { id: 'support', name: 'Destek' }
];

const FAQ_DATA = {
  general: [
    {
      question: 'Awaxen hangi alanlarda hizmet veriyor?',
      answer: 'Awaxen, güneş paneli izleme ve bakım sistemleri, akıllı tarım robotları ve yapay zeka destekli hastalık tespit sistemleri alanlarında hizmet vermektedir. Ana odak noktamız, enerji ve tarım sektöründe verimliliği artırmaktır.'
    },
    {
      question: 'Ürünleriniz için garanti sağlıyor musunuz?',
      answer: 'Evet, tüm ürün ve sistemlerimiz için 2 yıl garanti sağlıyoruz. Ayrıca, bakım anlaşması yapılan sistemler için ek garanti süreleri sunuyoruz.'
    }
  ],
  solar: [
    {
      question: 'Solar panel izleme sisteminiz hangi verileri sağlıyor?',
      answer: 'Sistemimiz, panel verimliliği, enerji üretimi, bakım gereksinimleri, hava durumu etkileri ve performans tahminleri gibi kritik verileri gerçek zamanlı olarak sağlamaktadır.'
    },
    {
      question: 'Solar sistemlerin bakımı ne sıklıkla yapılmalı?',
      answer: 'Genel olarak 6 aylık periyotlarla bakım öneriyoruz, ancak sistemimiz sürekli izleme yaparak gerektiğinde erken uyarı verebilmektedir.'
    }
  ],
  agriculture: [
    {
      question: 'Domates toplama robotunuz ne kadar alanda çalışabiliyor?',
      answer: 'Robotumuz tek şarjla 5 dönümlük alanda çalışabilmektedir. Yapay zeka destekli görüntü işleme sayesinde olgun domatesleri %95 doğrulukla tespit edebilmektedir.'
    },
    {
      question: 'Hastalık tespit sistemi hangi bitkilerde kullanılabilir?',
      answer: 'Şu anda sistem domates, biber ve patlıcan için optimize edilmiştir. Yakında salatalık ve kabak için de destek eklenecektir.'
    }
  ],
  support: [
    {
      question: 'Teknik destek nasıl sağlanıyor?',
      answer: '7/24 uzaktan destek ekibimiz ve yerinde servis ekiplerimizle hizmet veriyoruz. Acil durumlarda 2 saat içinde müdahale garantisi sunuyoruz.'
    },
    {
      question: 'Eğitim ve danışmanlık hizmeti veriyor musunuz?',
      answer: 'Evet, tüm sistemlerimiz için kapsamlı eğitim programları ve sürekli danışmanlık hizmeti sunuyoruz.'
    }
  ]
};

const STYLES = {
  container: cn(
    'min-h-screen bg-[#0A0F1E]',
    'py-24 px-4 sm:px-6 lg:px-8'
  ),
  header: {
    wrapper: 'text-center max-w-3xl mx-auto mb-16',
    title: 'text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6',
    description: 'text-lg sm:text-xl text-white/80'
  },
  categories: {
    wrapper: 'flex flex-wrap justify-center gap-4 mb-16',
    button: (active: boolean) => cn(
      'px-6 py-3 rounded-full',
      'text-sm font-medium',
      'transition-all duration-300',
      active ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
    )
  },
  faq: {
    wrapper: 'max-w-3xl mx-auto space-y-4',
    item: {
      wrapper: cn(
        'bg-white/5 rounded-xl overflow-hidden',
        'border border-white/10',
        'hover:border-white/20',
        'transition-all duration-300'
      ),
      button: cn(
        'w-full px-6 py-4',
        'flex items-center justify-between',
        'text-left text-white'
      ),
      question: 'text-lg font-medium',
      icon: (isOpen: boolean) => cn(
        'w-6 h-6 text-white/70',
        'transform transition-transform duration-300',
        isOpen ? 'rotate-180' : ''
      ),
      answer: cn(
        'px-6 pb-4',
        'text-white/70',
        'leading-relaxed'
      )
    }
  }
};

// ChevronDown ikonu komponenti
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M6 9l6 6 6-6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

// FAQ Item komponenti
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={STYLES.faq.item.wrapper}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button 
        className={STYLES.faq.item.button}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={STYLES.faq.item.question}>{question}</span>
        <ChevronDownIcon className={STYLES.faq.item.icon(isOpen)} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={STYLES.faq.item.answer}>{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');

  return (
    <main className={STYLES.container}>
      {/* Header */}
      <div className={STYLES.header.wrapper}>
        <motion.h1 
          className={STYLES.header.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Sıkça Sorulan Sorular
        </motion.h1>
        <motion.p 
          className={STYLES.header.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Ürün ve hizmetlerimiz hakkında merak ettiğiniz her şey
        </motion.p>
      </div>

      {/* Categories */}
      <div className={STYLES.categories.wrapper}>
        {FAQ_CATEGORIES.map((category, index) => (
          <motion.button
            key={category.id}
            className={STYLES.categories.button(activeCategory === category.id)}
            onClick={() => setActiveCategory(category.id)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className={STYLES.faq.wrapper}>
        {FAQ_DATA[activeCategory as keyof typeof FAQ_DATA].map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}