'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const CONTACT_INFO = {
  locations: [
    {
      city: 'İzmir',
      type: 'AR-GE Merkezi',
      address: 'Teknopark, No: 123, 35430 İzmir',
      phone: '+90 232 123 45 67',
      email: 'izmir@awaxen.com'
    },
    {
      city: 'Antalya',
      type: 'Operasyon Merkezi',
      address: 'Tarım Teknoloji Vadisi, No: 456, 07100 Antalya',
      phone: '+90 242 123 45 67',
      email: 'antalya@awaxen.com'
    }
  ],
  social: {
    linkedin: 'https://linkedin.com/company/awaxen',
    twitter: 'https://twitter.com/awaxen',
    instagram: 'https://instagram.com/awaxen'
  }
};

const CONTACT_SUBJECTS = [
  'Genel Bilgi',
  'Solar Panel Sistemleri',
  'Tarım Robotları',
  'AI Çözümleri',
  'İş Birliği',
  'Kariyer'
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
    background: 'absolute inset-0 opacity-10 bg-[url("/images/grid.svg")]'
  },
  content: {
    wrapper: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'max-w-7xl -mt-16'
    ),
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12'
  },
  form: {
    wrapper: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl p-8',
      'border border-white/10'
    ),
    group: 'mb-6',
    label: 'block text-sm font-medium text-white mb-2',
    input: cn(
      'w-full px-4 py-3 rounded-lg',
      'bg-white/10',
      'border border-white/10',
      'text-white placeholder-white/50',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      'transition duration-200'
    ),
    select: cn(
      'w-full px-4 py-3 rounded-lg',
      'bg-white/10',
      'border border-white/10',
      'text-white',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      'transition duration-200'
    ),
    textarea: cn(
      'w-full px-4 py-3 rounded-lg',
      'bg-white/10',
      'border border-white/10',
      'text-white placeholder-white/50',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      'transition duration-200',
      'h-32 resize-none'
    ),
    button: cn(
      'w-full px-8 py-4 rounded-lg',
      'bg-blue-500 hover:bg-blue-600',
      'text-white font-medium',
      'transition duration-200'
    )
  },
  locations: {
    wrapper: 'space-y-8',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl p-8',
      'border border-white/10'
    ),
    title: 'text-xl font-semibold text-white mb-2',
    subtitle: 'text-blue-400 mb-4',
    info: 'space-y-3 text-white/70'
  },
  social: {
    wrapper: 'flex gap-4 mt-8',
    link: cn(
      'w-10 h-10 rounded-full',
      'bg-white/10',
      'flex items-center justify-center',
      'text-white/70 hover:text-white',
      'transition duration-200'
    )
  }
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simüle edilmiş form gönderimi
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormStatus('success');
  };

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
            İletişime Geçin
          </motion.h1>
          <motion.p
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Projeleriniz için yanınızdayız
          </motion.p>
        </div>
      </section>

      <div className={STYLES.content.wrapper}>
        <div className={STYLES.content.grid}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <form className={STYLES.form.wrapper} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className={STYLES.form.label}>Ad Soyad</label>
                  <input
                    type="text"
                    required
                    className={STYLES.form.input}
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className={STYLES.form.label}>E-posta</label>
                  <input
                    type="email"
                    required
                    className={STYLES.form.input}
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className={STYLES.form.group}>
                <label className={STYLES.form.label}>Konu</label>
                <select className={STYLES.form.select} required>
                  <option value="">Seçiniz</option>
                  {CONTACT_SUBJECTS.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className={STYLES.form.group}>
                <label className={STYLES.form.label}>Mesajınız</label>
                <textarea
                  required
                  className={STYLES.form.textarea}
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                className={STYLES.form.button}
                disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? 'Gönderiliyor...' : 'Gönder'}
              </button>

              {formStatus === 'success' && (
                <p className="mt-4 text-green-400 text-center">
                  Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız.
                </p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className={STYLES.locations.wrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {CONTACT_INFO.locations.map(location => (
              <div key={location.city} className={STYLES.locations.card}>
                <h3 className={STYLES.locations.title}>{location.city}</h3>
                <p className={STYLES.locations.subtitle}>{location.type}</p>
                <div className={STYLES.locations.info}>
                  <p>{location.address}</p>
                  <p>{location.phone}</p>
                  <p>{location.email}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className={STYLES.social.wrapper}>
              {Object.entries(CONTACT_INFO.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={STYLES.social.link}
                >
                  <img
                    src={`/images/social/${platform}.svg`}
                    alt={platform}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>      <Footer />

    </main>
  );
}