import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "AutoŠkola Dolet je transformisala moj pristup vožnji. Njihove pametne opcije obuke su mi pomogle da razvijem svoje vozačke vještine, a njihova platforma čini upravljanje obukom jednostavnim. Nikad se nisam osjećao sigurnije u svoju vozačku budućnost.",
    person: 'Amar P.',
    avatar: robert_fox,
  },
  {
    testimony:
      "Ne mogu izraziti koliko sam zahvalan AutoŠkoli Dolet. Njihove usluge obuke su bile prekretnica za sigurnost moje porodice u saobraćaju. Stručno vodstvo i personalizovane strategije su nam dale mir, znajući da je naša budućnost u sposobnim rukama.",
    person: 'Haris M.',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Usluge planiranja obuke AutoŠkole Dolet su bile spas za mene. Uvijek sam se mučio sa učenjem vožnje, ali njihov tim je kreirao prilagođen plan koji je riješio moje ciljeve i brige. To je bila prekretnica u ostvarivanju mojih vozačkih snova",
    person: 'Marko N.',
    avatar: esther_howard,
  },
  {
    testimony:
      "Ne mogu izraziti koliko sam zahvalan AutoŠkoli Dolet. Njihove usluge obuke su bile prekretnica za sigurnost moje porodice u saobraćaju. Stručno vodstvo i personalizovane strategije su nam dale mir, znajući da je naša budućnost u sposobnim rukama.",
    person: 'Hana S.',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "AutoŠkola Dolet je transformisala moj pristup vožnji. Njihove pametne opcije obuke su mi pomogle da razvijem svoje vozačke vještine, a njihova platforma čini upravljanje obukom jednostavnim. Nikad se nisam osjećao sigurnije u svoju vozačku budućnost.",
    person: 'Edin D.',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Pridružite se preko 500', 'polaznika'];
