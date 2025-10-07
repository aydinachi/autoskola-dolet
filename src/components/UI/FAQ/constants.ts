type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Često postavljana', 'pitanja'];
export const mobileHeaderPhrase = ['Često', 'postavljana', 'pitanja'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Kako se upisujem u AutoŠkolu Dolet?',
    answer:
      'Upis u AutoŠkolu Dolet je jednostavan - samo nas kontaktirajte telefonom ili dolazite direktno u našu kancelariju. Naš tim će vam pomoći sa svim potrebnim dokumentima.',
  },
  {
    question: 'Kako AutoŠkola Dolet osigurava sigurnost mojih podataka?',
    answer:
      'Vaša privatnost i sigurnost su naš prioritet. Svi vaši podaci su zaštićeni najnovijim sigurnosnim protokolima i nikad neće biti dijeljeni sa trećim stranama.',
  },
  {
    question: 'Koje tipove obuke pruža AutoŠkola Dolet?',
    answer:
      'Pružamo kompletnu obuku za sve kategorije vozila - od teorijske obuke do praktične vožnje. Naši iskusni instruktori će vas pripremiti za uspješno polaganje ispita.',
  },
  {
    question: 'Koje prednosti nudi AutoŠkola Dolet za upravljanje obukom?',
    answer:
      'Naša autoškola nudi fleksibilno planiranje sati, personalizovane pristupe učenju, i najbolje instruktore u gradu. Garantujemo vam najbolje rezultate.',
  },
];
