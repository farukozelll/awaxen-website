'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from '@/public/images/logo-beyaz.png';
import { cn } from '@/utils/utils';

const NAV_ITEMS = [
  { label: 'Çözümler', href: '/products' },
  { label: 'Ürünler', href: '/features' },
  { label: 'Hakkımızda', href: '/about' },
  { label: 'İletişim', href: '/contact' }
];

const STYLES = {
  header: {
    wrapper: cn(
      'fixed top-0 left-0 right-0 z-50',
      'transition-all duration-300'
    ),
    container: cn(
      'mx-auto max-w-7xl',
      'px-4 sm:px-6 lg:px-8',
      'py-4'
    ),
    nav: cn(
      'relative flex items-center justify-between',
      'h-20 rounded-lg',
      'bg-black/30 backdrop-blur-lg',
      'px-4 py-3 sm:px-6',
      'transition-all duration-300'
    )
  },
  logo: {
    wrapper: cn(
      'flex items-center',
      'mr-8'
    ),
    image: 'w-28 h-auto'
  },
  menu: {
    wrapper: cn(
      'hidden md:flex items-center space-x-1',
      'mr-auto'
    ),
    link: cn(
      'px-4 py-2 rounded-lg',
      'text-sm font-medium text-white/70',
      'hover:text-white hover:bg-white/10',
      'transition-all duration-200'
    )
  },
  auth: {
    wrapper: 'flex items-center space-x-3',
    signin: cn(
      'px-4 py-2 rounded-lg',
      'text-sm font-medium text-white/70',
      'hover:text-white hover:bg-white/10',
      'transition-all duration-200'
    ),
    signup: cn(
      'px-4 py-2 rounded-lg',
      'text-sm font-medium text-white',
      'bg-blue-500 hover:bg-blue-600',
      'transition-all duration-200',
      'shadow-lg shadow-blue-500/25'
    )
  }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={STYLES.header.wrapper}>
      <div className={STYLES.header.container}>
        <motion.nav 
          className={cn(
            STYLES.header.nav,
            isScrolled && 'py-2 shadow-xl shadow-black/10'
          )}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <Link href="/" className={STYLES.logo.wrapper}>
            <Image
              src={logo}
              alt="Awaxen Logo"
              className={STYLES.logo.image}
              priority
            />
          </Link>

          {/* Main Navigation */}
          <div className={STYLES.menu.wrapper}>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={STYLES.menu.link}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className={STYLES.auth.wrapper}>
            <Link href="/signin" className={STYLES.auth.signin}>
              Giriş Yap
            </Link>
            <Link href="/signup" className={STYLES.auth.signup}>
              Kayıt Ol
            </Link>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}