'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const JOURNEY_STEPS = [
  {
    year: '2023',
    title: 'AgriBot Başlangıcı',
    description: 'Seralarda çiftçilerin sabah erkenden uyanma zorunluluğunu ortadan kaldırmak için yola çıktık.'
  },
  {
    year: '2023',
    title: 'Solar Teknolojileri',
    description: 'Otomasyon tecrübemizi güneş paneli bakım ve izleme sistemlerine taşıdık.'
  },
  {
    year: '2024',
    title: 'AI Entegrasyonu',
    description: 'Yapay zeka ile hastalık tespiti ve verim optimizasyonu çözümlerimizi geliştirdik.'
  },
];

const STATS = [
  { label: 'Kurulu Panel', value: '1000+' },
  { label: 'Sera Alanı', value: '50+ Dönüm' },
  { label: 'Verim Artışı', value: '%30' },
  { label: 'Enerji Tasarrufu', value: '%40' },
];

const TEAM_MEMBERS = [
  {
    name: 'Takım Üyesi 1',
    role: 'Kurucu & CEO',
    image: '/images/team/member1.jpg',
    expertise: 'Robotik ve Otomasyon'
  },
  {
    name: 'Takım Üyesi 2',
    role: 'CTO',
    image: '/images/team/member2.jpg',
    expertise: 'Solar Sistemler'
  },
  {
    name: 'Takım Üyesi 3',
    role: 'AI Direktörü',
    image: '/images/team/member3.jpg',
    expertise: 'Yapay Zeka ve ML'
  },
];

const STYLES = {
  container: 'min-h-screen bg-[#0A0F1E]',
  header: {
    section: cn(
      'relative pt-24 pb-32',
      'bg-gradient-to-br from-[#0A2463] via-[#247BA0] to-[#006466]',
      'overflow-hidden'
    ),
    content: 'container mx-auto px-4 text-center max-w-4xl relative z-10',
    background: 'absolute inset-0 opacity-10 bg-[url("/images/grid.svg")]',
    overlay: 'absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0F1E]'
  },
  sections: {
    wrapper: 'container mx-auto px-4 -mt-20',
    grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
  },
  story: {
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-2xl p-8',
      'border border-white/10',
      'transform hover:scale-[1.02]',
      'transition-all duration-500',
      'hover:bg-white/10',
      'group'
    )
  },
  journey: {
    step: cn(
      'relative pl-8 pb-12 last:pb-0',
      'border-l-2 border-blue-500/30',
      'group'
    ),
    dot: cn(
      'absolute -left-[9px] top-0',
      'w-4 h-4 rounded-full',
      'bg-blue-500',
      'group-hover:scale-150',
      'transition-all duration-300'
    )
  },
  stats: {
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-8 my-24',
    card: cn(
      'bg-gradient-to-br from-white/10 to-white/5',
      'rounded-2xl p-6',
      'border border-white/10',
      'text-center',
      'hover:from-white/15 hover:to-white/10',
      'transition-all duration-300'
    )
  },
  team: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12',
    card: cn(
      'bg-white/5 rounded-2xl overflow-hidden',
      'group hover:bg-white/10',
      'transition-all duration-300'
    )
  }
};

export default function AboutPage() {
  return (
    <main className={STYLES.container}>
      {/* Header Section */}
      <section className={STYLES.header.section}>
        <div className={STYLES.header.background} />
        <div className={STYLES.header.overlay} />
        
        <div className={STYLES.header.content}>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Geleceği Bugünden Uyandırıyoruz
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Awaxen, sabahın ilk ışıklarıyla başlayan bir hikayeden doğdu.
            Amacımız, tarım ve enerji sektöründe teknolojiyi insanın hizmetine sunmak.
          </motion.p>
        </div>
      </section>

      <div className={STYLES.sections.wrapper}>
        {/* Origin Story Section */}
        <section className={STYLES.sections.grid}>
          <motion.div 
            className={STYLES.story.card}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Neden Awaxen?</h2>
            <p className="text-white/80 leading-relaxed">
              Awaxen ismi, "awakening" (uyanış) kelimesinden geliyor. Vizyonumuz, tarım ve enerji sektöründe 
              yeni bir uyanışı tetiklemek. Çiftçilerimizin sabahın erken saatlerinde uyanma zorunluluğunu 
              ortadan kaldırarak başladığımız yolculuğumuz, bugün güneş panellerinin otomatik bakımı ve
              hastalık tespiti gibi yenilikçi çözümlerle devam ediyor.
            </p>
          </motion.div>

          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about/awakening.jpg"
              alt="Awaxen Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Journey Section */}
        <section className="my-24">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Yolculuğumuz</h2>
          <div className="max-w-2xl mx-auto">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div 
                key={index}
                className={STYLES.journey.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={STYLES.journey.dot} />
                <h3 className="text-xl font-bold text-white mb-2">{step.year}</h3>
                <h4 className="text-lg font-semibold text-blue-400 mb-2">{step.title}</h4>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className={STYLES.stats.grid}>
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className={STYLES.stats.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold text-white text-center">Ekibimiz</h2>
          <p className="text-white/70 text-center mb-12">
            Farklı uzmanlık alanlarından gelen profesyonellerle geleceği şekillendiriyoruz.
          </p>
          <div className={STYLES.team.grid}>
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                className={STYLES.team.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-blue-400 mb-2">{member.role}</p>
                  <p className="text-sm text-white/70">{member.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
 
    </main>
  );
}