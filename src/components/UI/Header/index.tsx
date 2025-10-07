'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import dolet_logo from '../../../../public/images/dolet_logo.png';
import logodolet from '../../../../public/images/logodolet.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Link href="/" style={{ textDecoration: 'none' }}>
            {/* Original logo: dolet_logo, White logo: logodolet */}
            <Image src={logodolet} alt="AutoŠkola Dolet logo" priority />
          </Link>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <Link key={i} href={link.url} style={{ textDecoration: 'none' }}>
              <AnimatedLink title={link.linkTo} />
            </Link>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
