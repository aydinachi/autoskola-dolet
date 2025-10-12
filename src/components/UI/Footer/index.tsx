import Image from 'next/image';
import Link from 'next/link';
import dolet_logo from '../../../../public/images/dolet_logo.png';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Navigacija',
    links: [
      { name: 'Početna', url: '#pocetna' },
      { name: 'O nama', url: '#kursevi' },
      { name: 'Prednosti', url: '#prednosti' },
      { name: 'Cijena', url: '#cijena' },
      { name: 'Online učenje', url: '/online-ucenje' },
      { name: 'Kontakt', url: '/kontakt' }
    ],
  },
  {
    title: 'Pravno',
    links: [
      { name: 'Uslovi korištenja', url: '#' },
      { name: 'Politika privatnosti', url: '#' },
      { name: 'O nama', url: '#o-nama' }
    ],
  },
  {
    title: 'Kontakt',
    links: [
      { name: 'Kontaktirajte nas', url: '/kontakt' },
      { name: 'FAQ', url: '#faq' }
    ],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={dolet_logo} alt="auto škola Dolet logo" />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn>
                <p>Skenirajte za preuzimanje aplikacije na Playstore i Appstore.</p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>
                        <Link href={link.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Bosanski (Bosna i Hercegovina)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              auto škola Dolet, 2024.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
