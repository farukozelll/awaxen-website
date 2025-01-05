'use client';

import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from "./logo";
import { cn } from '@/utils/utils';

const FOOTER_DATA = [
  {
    title: 'Çözümler',
    links: [
      { label: 'Tüm Ürünler', href: '/products' },
      { label: 'Projelerimiz', href: '/rewards' },
      { label: 'Bilgi Bankası', href: '/knowledge' },
      { label: 'Eğitimler', href: '/tutorials' },
      { label: 'Özellikler', href: '/features' },
    ]
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Fiyatlandırma', href: '/pricing' },
      { label: 'Basın Haber', href: '/press' },
    ]
  },
  {
    title: 'İletişim & Destek',
    links: [
      { label: 'İletişim', href: '/contact' },
      { label: 'Kariyer', href: '/careers' },
      { label: 'İş Ortakları', href: '/stories' },
      { label: 'SSS', href: '/faq' },
    ]
  }
];


const SOCIAL_ICONS = {
  linkedin: (props: any) => (
    <svg viewBox="0 0 24 24" fill="white" {...props}>
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  ),
  medium: (props: any) => (
    <svg viewBox="0 0 24 24" fill="white" {...props}>
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  ),
  github: (props: any) => (
    <svg viewBox="0 0 24 24" fill="white" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
    </svg>
  )
};

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/awaxen',
    icon: SOCIAL_ICONS.linkedin
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@awaxen',
    icon: SOCIAL_ICONS.medium
  },
  {
    name: 'GitHub',
    href: 'https://github.com/awaxen',
    icon: SOCIAL_ICONS.github
  }
];
const STYLES = {
  footer: {
    wrapper: cn(
      'relative bg-[#0A0F1E]',
      'border-t border-white/5'
    ),
    container: cn(
      'mx-auto max-w-7xl',
      'px-4 sm:px-6 lg:px-8',
      'py-12 lg:py-16'
    )
  },
  content: {
    wrapper: cn(
      'grid grid-cols-2 gap-8',
      'md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr]'
    )
  },
  branding: {
    wrapper: cn(
      'col-span-2 md:col-span-3 lg:col-span-1',
      'space-y-4'
    ),
    text: cn(
      'text-sm text-gray-400',
      'mt-4 max-w-xs'
    ),
    social: cn(
      'flex items-center gap-4',
      'mt-6'
    ),
    icon: cn(
      'text-gray-400 hover:text-white',
      'transition-colors duration-200'
    )
  },
  nav: {
    column: 'space-y-4',
    title: 'text-sm font-medium text-white',
    links: 'space-y-3',
    link: cn(
      'block text-sm text-gray-400',
      'hover:text-white',
      'transition-colors duration-200'
    )
  },
  bottom: {
    wrapper: cn(
      'border-t border-white/5',
      'mt-12 pt-8',
      'flex flex-col md:flex-row items-center justify-between',
      'gap-4'
    ),
    links: cn(
      'flex flex-wrap gap-6',
      'text-sm text-gray-400'
    ),
    link: 'hover:text-white transition-colors duration-200',
    copyright: 'text-sm text-gray-500'
  }
};

const Footer: FC = () => {
  return (
    <footer className={STYLES.footer.wrapper}>
      <div className={STYLES.footer.container}>
        {/* Main Grid */}
        <div className={STYLES.content.wrapper}>
          {/* Branding & Description */}
          <div className={STYLES.branding.wrapper}>
            <Link href="/">
              <Logo />
            </Link>
            <p className={STYLES.branding.text}>
              Tarım ve enerji teknolojilerinde yenilikçi çözümler sunuyoruz.
            </p>
            <div className={STYLES.branding.social}>
              {SOCIAL_LINKS.map(social => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={STYLES.branding.icon}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          {FOOTER_DATA.map(section => (
            <div key={section.title} className={STYLES.nav.column}>
              <h3 className={STYLES.nav.title}>{section.title}</h3>
              <ul className={STYLES.nav.links}>
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className={STYLES.nav.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={STYLES.bottom.wrapper}>
          <div className={STYLES.bottom.links}>
            <Link href="/policy" className={STYLES.bottom.link}>
              Gizlilik
            </Link>
            <Link href="/policy" className={STYLES.bottom.link}>
              Koşullar
            </Link>
            <Link href="/policy" className={STYLES.bottom.link}>
              Çerezler
            </Link>
          </div>
          <p className={STYLES.bottom.copyright}>
            © {new Date().getFullYear()} Awaxen. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;