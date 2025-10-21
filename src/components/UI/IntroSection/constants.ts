import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["Vaša vozačka dozvola po fer cijeni",];
export const desktopParagraphPhrase = [
  "Cijena obuke: 1485 KM",
  'Platite odjednom ili u više rata, bez dodatnih naknada.',
  'Transparentno, sigurno i prilagođeno vašem budžetu.',
];

// For mobile
export const mobileHeaderPhrase = ["Vaša vozačka dozvola po fer cijeni",];
export const mobileParagraphPhrase = [
  "Cijena obuke: 1485 KM",
  'Platite odjednom ili u više rata, bez dodatnih naknada.',
  'Transparentno, sigurno i prilagođeno vašem budžetu.',
];

export const edges = [
  {
    point: 'Program Prve pomoći',
    details:
      'Kompletna obuka iz prve pomoći sa praktičnim vježbama i certifikatom. Uključuje ispit iz prve pomoći.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Poznavanje propisa o bezbjednosti',
    details:
      '28 nastavnih časova iz poznavanja propisa o bezbjednosti saobraćaja na putevima sa ispitom.',
    icon: ic_identification,
  },
  {
    point: 'Upravljanje motornim vozilom',
    details:
      '35 časova praktične obuke upravljanja motornim vozilom sa ispitom iz upravljanja motornim vozilom.',
    icon: ic_lock_closed,
  },
];

export const packageIncludes = [
  'Program Prve pomoći',
  'Ispit iz Prve pomoći',
  '28 nastavnih časova iz poznavanja propisa o bezbjednosti saobraćaja na putevima',
  'Ispit iz Poznavanja propisa o bezbjednosti saobraćaja na putevima',
  '35 časova upravljanja m/v',
  'Ispit iz upravljanja motornim vozilom'
];
