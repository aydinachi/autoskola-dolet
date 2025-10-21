'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  AbsoluteLinks,
  BurgerMenu,
  MobileOverlay,
} from './styles';
import dolet_logo from '../../../../public/images/dolet_logo.png';
import logodolet from '../../../../public/images/logodolet3.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import AnimatedLink from '@/components/Common/AnimatedLink';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but not at the very top)
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-mobile-menu]')) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = (url: string) => {
    // Close mobile menu when link is clicked
    setIsOpen(false);
    
    // If it's an anchor link, scroll to the section
    if (url.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to ensure menu closes first
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileOverlay 
        className={isOpen ? 'active' : ''} 
        onClick={() => setIsOpen(false)}
      />
      <motion.div
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
      >
        <Wrapper>
          <Inner>
            <LogoContainer>
              <Link href="/" style={{ textDecoration: 'none' }}>
                {/* Original logo: dolet_logo, White logo: logodolet */}
                <Image src={logodolet} alt="auto škola Dolet logo" priority />
              </Link>
              <BurgerMenu 
                onClick={toggleMobileMenu}
                data-mobile-menu
              >
                <motion.div
                  variants={menu}
                  animate={isOpen ? 'open' : 'closed'}
                  initial="closed"
                ></motion.div>
                <Image src={ic_bars} alt="Menu" />
              </BurgerMenu>
            </LogoContainer>
            <Nav className={isOpen ? 'active' : ''} data-mobile-menu>
              {links.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.url} 
                  style={{ textDecoration: 'none' }}
                  onClick={() => handleLinkClick(link.url)}
                >
                  <AnimatedLink title={link.linkTo} />
                </Link>
              ))}
            </Nav>
          </Inner>
        </Wrapper>
      </motion.div>
    </>
  );
};

export default Header;
