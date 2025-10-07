
import ic_banknotes from '../../../../public/svgs/ic_banknotes.svg';
import ic_clock from '../../../../public/svgs/ic_clock.svg';
import ic_speedometer from '../../../../public/svgs/ic_speedometer.svg';

// For desktop
export const desktopHeaderPhrase = ['Sloboda na cesti počinje s nama',];
export const desktopParagraphPhrase = [
  'Vjerujemo da polaganje vozačkog ispita treba biti jednostavno i pristupačno.',
  'Zato vam nudimo slobodu koju zaslužujete.',
];
export const desktopBriefNotePhrase = [
  'Pametna obuka,',
  'sigurna vožnja, i',
  'stručno vodstvo, sve na',
  'jednom mjestu.',
];

// For mobile
export const mobileHeaderPhrase = ['Sloboda na cesti počinje s nama.',];
export const mobileParagraphPhrase = [
  'Vjerujemo da polaganje vozačkog ispita treba biti',
  'jednostavno i pristupačno. Zato vam nudimo',
  ' slobodu koju zaslužujete.',
];

export const mobileBriefNotePhrase = [
  'Pametna',
  ' obuka,',
  'sigurna',
  ' vožnja,',
  'i stručno',
  'vodstvo, sve',
  'na jednom mjestu.',
];

export const edges = [
  {
    point: 'Bez skrivenih troškova',
    details:
      'Recite zbogom skrivenim troškovima. Vaš kurs, vaša cijena—bez dodatnih naplata',
    icon: ic_banknotes,
  },
  {
    point: 'Bez stresa oko termina',
    details:
      'Uskladite obuku s vašim rasporedom. Fleksibilni termini i jednostavne promjene.',
    icon: ic_clock,
  },
  {
    point: 'Bez nepotrebnih čekanja',
    details:
      'Polaganje kod nas teče brzo i organizovano. Zaboravite na liste čekanja i izgubljeno vrijeme.',
    icon: ic_speedometer,
  },
];
