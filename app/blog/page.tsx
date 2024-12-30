'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const TEAM_MEMBERS = [
  {
    name: 'Takım Üyesi 1',
    role: 'CEO & Kurucu',
    specialty: 'Robotik & Otomasyon',
    image: '/images/team/member1.jpg',
    linkedin: '#'
  },
  {
    name: 'Takım Üyesi 2',
    role: 'CTO',
    specialty: 'Solar Sistemler & IoT',
    image: '/images/team/member2.jpg',
    linkedin: '#'
  },
  {
    name: 'Takım Üyesi 3',
    role: 'Ar-Ge Direktörü',
    specialty: 'Yapay Zeka & ML',
    image: '/images/team/member3.jpg',
    linkedin: '#'
  }
];

const ACHIEVEMENTS = [
  { 
    label: 'Kurulu Panel', 
    value: '1000+',
    icon: '/icons/solar-panel.svg'
  },
  { 
    label: 'Sera Alanı', 
    value: '50+ Dönüm',
    icon: '/icons/greenhouse.svg'
  },
  { 
    label: 'Verim Artışı', 
    value: '%30',
    icon: '/icons/growth.svg'
  },
  { 
    label: 'Ar-Ge Projesi', 
    value: '3',
    icon: '/icons/research.svg'
  }
];

const VALUES = [
  {
    title: 'İnovasyon',
    description: 'Sürekli gelişim ve yenilikçi çözümlerle sektöre öncülük ediyoruz.',
    icon: '/icons/innovation.svg'
  },
  {
    title: 'Sürdürülebilirlik',
    description: 'Çevre dostu teknolojilerle sürdürülebilir bir gelecek inşa ediyoruz.',
    icon: '/icons/sustainability.svg'
  },
  {
    title: 'Verimlilik',
    description: 'Otomasyon ve yapay zeka ile verimliliği maksimize ediyoruz.',
    icon: '/icons/efficiency.svg'
  }
];

const STYLES = {
  container: cn(
    'min-h-screen bg-[#0A0F1E]',
    'pb-16 sm:pb-20 lg:pb-24'
  ),
  header: {
    wrapper: cn(
      'relative pt-24 sm:pt-32 lg:pt-40',
      'pb-32 sm:pb-40 lg:pb-48',
      'bg-gradient-to-br from-[#0A2463] via-[#247BA0] to-[#006466]',
      'overflow-hidden'
    ),
    content: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'text-center max-w-4xl',
      'relative z-10'
    ),
    background: cn(
      'absolute inset-0',
      'opacity-10',
      'bg-[url("/images/grid.svg")]'
    ),
    overlay: cn(
      'absolute inset-0',
      'bg-gradient-to-b from-transparent to-[#0A0F1E]'
    )
  },
  sections: {
    wrapper: cn(
      'container mx-auto px-4 sm:px-6 lg:px-8',
      'max-w-7xl -mt-24',
      'space-y-24'
    ),
    title: cn(
      'text-3xl font-bold text-white',
      'mb-12 text-center'
    ),
    grid: {
      two: 'grid grid-cols-1 lg:grid-cols-2 gap-12',
      three: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
    },
    card: {
      base: cn(
        'bg-white/5 backdrop-blur-sm',
        'rounded-2xl p-8',
        'border border-white/10',
        'transition-all duration-300',
        'hover:bg-white/10',
        'group'
      ),
      highlight: cn(
        'bg-gradient-to-br from-white/10 to-transparent',
        'backdrop-blur-sm rounded-2xl p-8',
        'border border-white/20',
        'transition-all duration-300',
        'hover:border-white/30',
        'hover:from-white/15'
      )
    }
  },
  team: {
    card: cn(
      'relative overflow-hidden rounded-2xl',
      'bg-gradient-to-br from-white/10 to-transparent',
      'border border-white/10',
      'group'
    ),
    image: cn(
      'aspect-[3/4]',
      'transition-transform duration-500',
      'group-hover:scale-105'
    ),
    content: cn(
      'absolute bottom-0 left-0 right-0',
      'p-6 text-center',
      'bg-gradient-to-t from-black/90 to-transparent'
    )
  }
};

export default function AboutPage() {
  return (
    <main className={STYLES.container}>
      {/* Header Section */}
      <header className={STYLES.header.wrapper}>
        <div className={STYLES.header.background} />
        <div className={STYLES.header.overlay} />
        
        <div className={STYLES.header.content}>
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Teknoloji ile Yarına<br />Işık Tutuyoruz
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tarım ve enerji sektöründe yenilikçi teknolojiler geliştirerek,<br />
            daha verimli ve sürdürülebilir bir gelecek inşa ediyoruz.
          </motion.p>
        </div>
      </header>

      <div className={STYLES.sections.wrapper}>
        {/* Story Section */}
        <section className={STYLES.sections.grid.two}>
          <motion.div 
            className={STYLES.sections.card.highlight}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Hikayemiz</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Awaxen, 2023 yılında çiftçilerin hayatını kolaylaştırma vizyonuyla yola çıktı. 
              İsmimiz "awakening" (uyanış) kelimesinden geliyor - çünkü biz inanıyoruz ki teknoloji, 
              tarım ve enerji sektöründe yeni bir uyanışın öncüsü olacak.
            </p>
            <p className="text-white/80 leading-relaxed">
              Bugün, otonom tarım robotlarından güneş paneli yönetim sistemlerine, 
              yapay zeka destekli hastalık tespitinden verim optimizasyonuna kadar geniş bir 
              yelpazede çözümler sunuyoruz.
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/about/story.jpg"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Achievements Section */}
        <section>
          <h2 className={STYLES.sections.title}>Rakamlarla Awaxen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={STYLES.sections.card.base}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={stat.icon}
                  alt=""
                  width={32}
                  height={32}
                  className="mb-4 text-blue-400"
                />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className={STYLES.sections.title}>Değerlerimiz</h2>
          <div className={STYLES.sections.grid.three}>
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                className={STYLES.sections.card.base}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={value.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className={STYLES.sections.title}>Ekibimiz</h2>
          <div className={STYLES.sections.grid.three}>
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                className={STYLES.team.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={600}
                  className={STYLES.team.image}
                />
                <div className={STYLES.team.content}>
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-2">{member.role}</p>
                  <p className="text-sm text-white/70">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />

    </main>
  );
}