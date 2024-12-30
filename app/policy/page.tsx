'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const POLICY_SECTIONS = [
  {
    id: 'intro',
    title: 'Giriş',
    content: `Awaxen olarak kişisel verilerinizin güvenliği ve gizliliği konusuna büyük önem vermekteyiz. Bu gizlilik politikası, hizmetlerimizi kullanırken toplanan, işlenen ve saklanan verilerinizin nasıl korunduğunu açıklamaktadır.`
  },
  {
    id: 'data-collection',
    title: 'Veri Toplama',
    content: `Hizmetlerimizi sağlamak için aşağıdaki verileri toplamaktayız:
    
    • Kimlik bilgileri (ad, soyad, e-posta)
    • İletişim bilgileri (telefon, adres)
    • Sistem kullanım verileri
    • Cihaz ve lokasyon bilgileri
    • Güneş paneli performans verileri
    • Tarımsal sistem kullanım verileri`
  },
  {
    id: 'data-usage',
    title: 'Verilerin Kullanımı',
    content: `Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:
    
    • Hizmet kalitesinin iyileştirilmesi
    • Sistem optimizasyonu
    • Güvenlik önlemlerinin sağlanması
    • Yasal yükümlülüklerin yerine getirilmesi
    • Müşteri destek hizmetlerinin sunulması`
  },
  {
    id: 'data-protection',
    title: 'Veri Güvenliği',
    content: `Verilerinizin güvenliği için en güncel teknolojik önlemleri almaktayız:
    
    • SSL/TLS şifreleme
    • Güvenlik duvarı sistemleri
    • Düzenli güvenlik testleri
    • Erişim kontrolü ve yetkilendirme
    • Veri yedekleme sistemleri`
  },
  {
    id: 'user-rights',
    title: 'Kullanıcı Hakları',
    content: `KVKK kapsamında sahip olduğunuz haklar:
    
    • Verilerinize erişim hakkı
    • Düzeltme ve silme hakkı
    • İşleme sınırlandırma hakkı
    • Veri taşınabilirliği hakkı
    • İtiraz hakkı`
  },
  {
    id: 'cookies',
    title: 'Çerezler',
    content: `Web sitemizde kullanılan çerez tipleri:
    
    • Zorunlu çerezler
    • Analitik çerezler
    • Fonksiyonel çerezler
    • Hedefleme/reklam çerezleri`
  },
  {
    id: 'contact',
    title: 'İletişim',
    content: `Gizlilik politikası ile ilgili sorularınız için:
    
    E-posta: privacy@awaxen.com
    Tel: +90 XXX XXX XX XX
    Adres: [Şirket Adresi]`
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
  navigation: {
    wrapper: cn(
      'sticky top-0 z-10',
      'bg-[#0A0F1E]/80 backdrop-blur-md',
      'py-4 border-b border-white/10'
    ),
    content: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'overflow-x-auto'
    ),
    list: 'flex gap-6 min-w-max',
    button: (active: boolean) => cn(
      'px-4 py-2 rounded-lg text-sm',
      'transition-colors duration-200',
      active 
        ? 'bg-blue-500 text-white' 
        : 'text-white/70 hover:text-white hover:bg-white/10'
    )
  },
  content: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 py-12',
    grid: 'grid grid-cols-1 lg:grid-cols-[1fr_16rem] gap-12',
    main: 'max-w-3xl',
    section: {
      wrapper: cn(
        'mb-12 scroll-mt-24',
        'bg-white/5 rounded-2xl p-6',
        'border border-white/10'
      ),
      title: 'text-2xl font-bold text-white mb-4',
      content: 'text-white/70 space-y-4 prose prose-invert'
    },
    toc: {
      wrapper: cn(
        'hidden lg:block',
        'sticky top-24',
        'bg-white/5 rounded-2xl p-6',
        'border border-white/10'
      ),
      title: 'text-lg font-semibold text-white mb-4',
      list: 'space-y-2',
      link: (active: boolean) => cn(
        'block text-sm transition-colors duration-200',
        active ? 'text-blue-400' : 'text-white/70 hover:text-white'
      )
    }
  }
};

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(POLICY_SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    POLICY_SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
            Gizlilik Politikası
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Verilerinizin güvenliği ve gizliliği bizim için önemli
          </motion.p>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className={STYLES.navigation.wrapper}>
        <div className={STYLES.navigation.content}>
          <div className={STYLES.navigation.list}>
            {POLICY_SECTIONS.map((section) => (
              <button
                key={section.id}
                className={STYLES.navigation.button(activeSection === section.id)}
                onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className={STYLES.content.wrapper}>
        <div className={STYLES.content.grid}>
          {/* Policy Sections */}
          <div className={STYLES.content.main}>
            {POLICY_SECTIONS.map((section, index) => (
              <motion.section
                id={section.id}
                key={section.id}
                className={STYLES.content.section.wrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h2 className={STYLES.content.section.title}>
                  {section.title}
                </h2>
                <div 
                  className={STYLES.content.section.content}
                  dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, '<br />') }}
                />
              </motion.section>
            ))}
          </div>

          {/* Table of Contents */}
          <div className={STYLES.content.toc.wrapper}>
            <h3 className={STYLES.content.toc.title}>
              İçindekiler
            </h3>
            <ul className={STYLES.content.toc.list}>
              {POLICY_SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    className={STYLES.content.toc.link(activeSection === section.id)}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}