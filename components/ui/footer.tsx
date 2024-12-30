'use client';

import { type FC } from 'react';
import Image from 'next/image';
import Logo from "./logo";

const FOOTER_LINKS = [
  {
    title: 'Awaxen',
    links: [
      { label: 'Özellikler', href: '/features' },
      { label: 'Entegrasyonlar', href: '/cree' },
      { label: 'Fiyatlandırma & Planlar', href: '/pricing' },
      { label: 'Değişiklik Günlüğü', href: '/changelog' },
      { label: 'Bizim yöntemimiz', href: '/methodology' },
      { label: 'Kullanıcı politikası', href: '/policies' }
    ]
  },
  {
    title: 'Ürün',
    links: [
      { label: 'Özellikler', href: '/features' },
      { label: 'Entegrasyonlar', href: '/integrations' },
      { label: 'Fiyatlandırma & Planlar', href: '/pricing' },
      { label: 'Değişiklik Günlüğü', href: '/changelog' },
      { label: 'Bizim yöntemimiz', href: '/methodology' },
      { label: 'Kullanıcı politikası', href: '/policies' }
    ]
  },
  {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Ürünler', href: '/products' },
      { label: 'Blog', href: '/blog' },
      { label: 'Kariyer', href: '/careers' },
      { label: 'Başarılar', href: '/rewards' },
      { label: 'Hikayemiz', href: '/stories' },
      { label: 'Politikalar', href: '/policy' },
      { label: 'İletişim', href: '/contact' },
      { label: 'Özellikler', href: '/features' },

    ]
  },

  {
    title: 'İçerik Kitaplığı',
    links: [
      { label: 'Şablonlar', href: '/templates' },
      { label: 'Öğreticiler', href: '/tutorials' },
      { label: 'Bilgi tabanı', href: '/knowledge-base' },
      { label: 'Öğrenmek', href: '/learn' },
      { label: 'Çerez yöneticisi', href: '/cookies' }
    ]
  }
] as const;

const SOCIAL_ICONS = {
  twitter: (props: any) => (
    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" {...props}>
      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
    </svg>
  ),
  medium: (props: any) => (
    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" {...props}>
      <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z" />
    </svg>
  ),
  github: (props: any) => (
    <svg className="h-8 w-8 fill-current" viewBox="0 0 32 32" {...props}>
      <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
    </svg>
  )
};

const STYLES = {
  footer: {
    wrapper: 'relative bg-[#0F0C10]',
    container: 'relative mx-auto max-w-6xl px-4 sm:px-6',
    grid: 'grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20',
  },
  column: {
    wrapper: 'space-y-2',
    title: 'text-sm font-medium text-gray-200',
    list: 'space-y-2 text-sm',
    link: 'text-indigo-200/65 transition-colors duration-200 hover:text-indigo-500'
  },
  logoSection: {
    wrapper: 'col-span-2 md:col-span-4 lg:col-span-1 lg:text-right',
    copyright: 'mb-3 text-sm text-indigo-200/65',
    divider: 'text-gray-700',
    socials: 'inline-flex gap-1'
  },
  socialLink: 'flex items-center justify-center text-indigo-500 transition-colors duration-200 hover:text-indigo-400'
} as const;

const Footer: FC = () => {
  return (
    <footer className={STYLES.footer.wrapper}>
      <div className={STYLES.footer.container}>
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src="/images/footer-illustration.svg"
            width={1076}
            height={378}
            alt=""
            priority
          />
        </div>

        {/* Main Grid */}
        <div className={STYLES.footer.grid}>
          {/* Link Columns */}
          {FOOTER_LINKS.map(({ title, links }) => (
            <div key={title} className={STYLES.column.wrapper}>
              <h3 className={STYLES.column.title}>{title}</h3>
              <ul className={STYLES.column.list}>
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className={STYLES.column.link}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logo Section */}
          <div className={STYLES.logoSection.wrapper}>
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className={STYLES.logoSection.copyright}>
                © {new Date().getFullYear()} awaxen.com
                <span className={STYLES.logoSection.divider}> · </span>
                <a href="/terms" className={STYLES.column.link}>
                  Şartlar
                </a>
              </p>
              {/* Social Icons */}
              <ul className={STYLES.logoSection.socials}>
                <li>
                  <a
                    href="https://twitter.com/awaxen"
                    className={STYLES.socialLink}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SOCIAL_ICONS.twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/awaxen"
                    className={STYLES.socialLink}
                    aria-label="Medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SOCIAL_ICONS.medium />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/awaxen"
                    className={STYLES.socialLink}
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SOCIAL_ICONS.github />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;