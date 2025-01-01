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
      { label: 'Solar Panel Sistemleri', href: '/products/solar' },
      { label: 'Tarım Robotları', href: '/products/agribot' },
      { label: 'AI Çözümleri', href: '/products/ai' }
    ]
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Kariyer', href: '/careers' },
      { label: 'İletişim', href: '/contact' }
    ]
  },
  {
    title: 'Kaynaklar',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Bilgi Bankası', href: '/knowledge-base' },
      { label: 'Dokümantasyon', href: '/docs' }
    ]
  }
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/awaxen',
    icon: '/icons/social/linkedin.svg'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/awaxen',
    icon: '/icons/social/twitter.svg'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/awaxen',
    icon: '/icons/social/github.svg'
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
              {SOCIAL_LINKS.map(social => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={STYLES.branding.icon}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${social.name}`}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
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
            <Link href="/privacy" className={STYLES.bottom.link}>
              Gizlilik
            </Link>
            <Link href="/terms" className={STYLES.bottom.link}>
              Koşullar
            </Link>
            <Link href="/cookies" className={STYLES.bottom.link}>
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