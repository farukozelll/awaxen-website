'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";
import Spotlight from "@/components/spotlight";

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
    image: '/images/avatar.svg',
    expertise: 'Robotik ve Otomasyon'
  },
  {
    name: 'Takım Üyesi 2',
    role: 'CTO',
    image: '/images/avatar.svg',
    expertise: 'Solar Sistemler'
  },
  {
    name: 'Takım Üyesi 3',
    role: 'AI Direktörü',
    image: '/images/avatar.svg',
    expertise: 'Yapay Zeka ve ML'
  },
];

const STYLES = {
  container: 'min-h-screen bg-[#0A0F1E]',
  header: {
    section: cn(
      'relative pt-40 pb-32',
      'bg-gradient-to-br',
      'overflow-hidden'
    ),
    content: 'container mx-auto px-4 text-center max-w-4xl relative z-10',
    background: cn(
      'absolute mt-20 bg-cover inset-0',
      'bg-[url("/images/bg-1.svg")]',
      'w-full h-64 object-cover',
      '[mask-image:linear-gradient(to_bottom,transparent,black,transparent)]',
      '[-webkit-mask-image:linear-gradient(to_bottom,transparent,black,transparent)]'
    ),
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
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none">
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        Neden Awaxen?
                      </span>
                    </span>
                  </div>
                  <p className="text-white">
                    Güneş enerjisi santrallerinde yapay zeka destekli otonom termografik muayene ve elektrolüminesans görüntüleme gerçekleştirin.
                    IEC 62446 standartlarına uyumlu olarak raporlar oluşturun
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
          {/* <motion.div 
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
          </motion.div> */}

          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/smart-thermostat.png"
              alt="Awaxen Story"
              fill
              className="object-cover"
              style={{
                maskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage: "radial-gradient(circle, rgba(0, 0, 0, 1) 60%, rgba(0, 0, 0, 0) 100%)",
              }}
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
              <Spotlight className="group w-full mx-auto grid max-w-sm items-start gap-6 lg:max-w-none text-center">
            <a
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-2xl font-bold text-white mb-4">
                      <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </span>
                  </div>
                  <p className="text-white">
                    {stat.label}
                  </p>
                </div>
              </div>
            </a>
          </Spotlight>
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
                    className="group-hover:scale-105 transition-transform duration-500"
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