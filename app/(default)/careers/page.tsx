'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/utils';
import Footer from "@/components/ui/footer";

const DEPARTMENTS = [
  { id: 'all', name: 'Tüm Pozisyonlar' },
  { id: 'engineering', name: 'Mühendislik' },
  { id: 'research', name: 'AR-GE' },
  { id: 'product', name: 'Ürün Geliştirme' },
  { id: 'operations', name: 'Operasyon' }
];

const BENEFITS = [
  {
    title: 'Esnek Çalışma',
    description: 'Hibrit çalışma modeli ve esnek saatler',
    icon: '/icons/flexible.svg'
  },
  {
    title: 'Sürekli Gelişim',
    description: 'Eğitim bütçesi ve konferans destekleri',
    icon: '/icons/growth.svg'
  },
  {
    title: 'Sağlık Sigortası',
    description: 'Özel sağlık sigortası ve yan haklar',
    icon: '/icons/health.svg'
  },
  {
    title: 'Teknoloji Desteği',
    description: 'Son teknoloji ekipman desteği',
    icon: '/icons/tech.svg'
  }
];

const JOB_LISTINGS = [
  {
    id: 1,
    title: 'Senior Robotik Mühendisi',
    department: 'engineering',
    location: 'İzmir',
    type: 'Tam Zamanlı',
    experience: '5+ yıl',
    description: 'AgriBot projemiz için robotik sistemler geliştirecek deneyimli mühendis arıyoruz.',
    requirements: [
      'Robotik sistemler konusunda deneyim',
      'ROS ve benzeri frameworkler ile tecrübe',
      'Python ve C++ bilgisi',
      'Computer Vision tecrübesi'
    ]
  },
  {
    id: 2,
    title: 'AI/ML Araştırmacısı',
    department: 'research',
    location: 'İzmir',
    type: 'Tam Zamanlı',
    experience: '3+ yıl',
    description: 'Yapay zeka destekli hastalık tespit sistemleri için araştırmacı arıyoruz.',
    requirements: [
      'Derin öğrenme modelleri konusunda deneyim',
      'PyTorch veya TensorFlow tecrübesi',
      'Computer Vision bilgisi',
      'Akademik yayın tecrübesi tercih sebebi'
    ]
  },
  {
    id: 3,
    title: 'IoT Sistem Mimarı',
    department: 'engineering',
    location: 'Antalya',
    type: 'Tam Zamanlı',
    experience: '4+ yıl',
    description: 'Solar panel izleme sistemleri için IoT altyapısı geliştirecek mimar arıyoruz.',
    requirements: [
      'IoT sistemleri konusunda deneyim',
      'Cloud platformları tecrübesi (AWS/Azure)',
      'Microservice mimarisi bilgisi',
      'Scala/Kotlin tercih sebebi'
    ]
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
    content: 'container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl',
    background: 'absolute inset-0 opacity-10 bg-[url("/images/grid.svg")]'
  },
  sections: {
    wrapper: 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-16',
    title: 'text-2xl font-bold text-white mb-8',
  },
  filters: {
    wrapper: cn(
      'sticky top-0 z-10',
      'bg-[#0A0F1E]/80 backdrop-blur-md',
      'py-4 mb-8'
    ),
    container: 'flex flex-wrap justify-center gap-4',
    button: (active: boolean) => cn(
      'px-6 py-2 rounded-full text-sm font-medium',
      'transition-all duration-300',
      active ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
    )
  },
  benefits: {
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16',
    card: cn(
      'bg-white/5 backdrop-blur-sm',
      'rounded-xl p-6',
      'border border-white/10',
      'hover:border-white/20',
      'transition-all duration-300'
    )
  },
  jobs: {
    grid: 'space-y-6',
    card: {
      wrapper: cn(
        'bg-white/5 backdrop-blur-sm',
        'rounded-xl p-6',
        'border border-white/10',
        'hover:border-white/20',
        'transition-all duration-300',
        'cursor-pointer'
      ),
      header: 'flex flex-wrap items-start justify-between gap-4 mb-4',
      tags: 'flex flex-wrap gap-2',
      tag: cn(
        'px-3 py-1 rounded-full text-sm',
        'bg-blue-500/20 text-blue-300'
      ),
      requirements: 'mt-4 space-y-2 text-white/70'
    }
  },
  modal: {
    overlay: cn(
      'fixed inset-0 z-50',
      'bg-black/80 backdrop-blur-sm',
      'flex items-center justify-center',
      'p-4'
    ),
    content: cn(
      'bg-[#0A0F1E] relative',
      'rounded-2xl w-full max-w-2xl',
      'p-6 sm:p-8',
      'border border-white/10'
    ),
    closeButton: cn(
      'absolute top-4 right-4',
      'w-8 h-8 rounded-full',
      'flex items-center justify-center',
      'text-white/60 hover:text-white',
      'bg-white/10 hover:bg-white/20',
      'transition-colors duration-200'
    )
  }
};

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState<typeof JOB_LISTINGS[0] | null>(null);

  const filteredJobs = selectedDepartment === 'all'
    ? JOB_LISTINGS
    : JOB_LISTINGS.filter(job => job.department === selectedDepartment);

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
            Geleceği Birlikte İnşa Edelim
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Tarım ve enerji teknolojilerinde öncü olan ekibimize katılın
          </motion.p>
        </div>
      </section>

      <div className={STYLES.sections.wrapper}>
        {/* Benefits Section */}
        <section className="mb-24">
          <h2 className={STYLES.sections.title}>Ayrıcalıklar</h2>
          <div className={STYLES.benefits.grid}>
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className={STYLES.benefits.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={40}
                  height={40}
                  className="mb-4 text-blue-400"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/70">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Jobs Section */}
        <section>
          <div className={STYLES.filters.wrapper}>
            <div className={STYLES.filters.container}>
              {DEPARTMENTS.map((dept, index) => (
                <motion.button
                  key={dept.id}
                  className={STYLES.filters.button(selectedDepartment === dept.id)}
                  onClick={() => setSelectedDepartment(dept.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {dept.name}
                </motion.button>
              ))}
            </div>
          </div>

          <div className={STYLES.jobs.grid}>
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className={STYLES.jobs.card.wrapper}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedJob(job)}
              >
                <div className={STYLES.jobs.card.header}>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {job.title}
                    </h3>
                    <div className={STYLES.jobs.card.tags}>
                      <span className={STYLES.jobs.card.tag}>{job.location}</span>
                      <span className={STYLES.jobs.card.tag}>{job.type}</span>
                      <span className={STYLES.jobs.card.tag}>{job.experience}</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/70">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <motion.div
          className={STYLES.modal.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedJob(null)}
        >
          <motion.div
            className={STYLES.modal.content}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className={STYLES.modal.closeButton}
              onClick={() => setSelectedJob(null)}
            >
              ✕
            </button>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              {selectedJob.title}
            </h3>
            
            <div className={STYLES.jobs.card.tags}>
              <span className={STYLES.jobs.card.tag}>{selectedJob.location}</span>
              <span className={STYLES.jobs.card.tag}>{selectedJob.type}</span>
              <span className={STYLES.jobs.card.tag}>{selectedJob.experience}</span>
            </div>
            
            <p className="text-white/70 mt-4 mb-6">
              {selectedJob.description}
            </p>
            
            <h4 className="text-lg font-semibold text-white mb-3">
              Gereksinimler
            </h4>
            
            <ul className={STYLES.jobs.card.requirements}>
              {selectedJob.requirements.map((req, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-blue-400">•</span>
                  {req}
                </li>
              ))}
            </ul>

            <button
              className="mt-8 w-full px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
              onClick={() => {/* Başvuru formu mantığı */}}
            >
              Başvur
            </button>
          </motion.div>
        </motion.div>
      )}      

    </main>
  );
}