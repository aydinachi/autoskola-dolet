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
    point: 'Teorijska obuka',
    details:
      'Naši novi kursevi dolaze opremljeni sa najnovijim metodama teorijske obuke, omogućavajući vam brzo i sigurno učenje sa jednostavnim pristupom.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Personalizovana obuka',
    details:
      'Prilagodite svoju obuku da odražava vaš jedinstveni stil učenja. Biramo između niza pristupa koji odgovaraju vašoj ličnosti.',
    icon: ic_identification,
  },
  {
    point: 'Povećana sigurnost',
    details:
      'Vaša sigurnost je naš prioritet. Naši kursevi sadrže napredne sigurnosne mere za zaštitu vašeg učenja i podataka.',
    icon: ic_lock_closed,
  },
];
