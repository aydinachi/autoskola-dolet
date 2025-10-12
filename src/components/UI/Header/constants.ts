export const menu = {
  open: {
    width: '280px',
    height: '320px',
    top: '50px',
    right: '-20px',
    opacity: 1,
    transition: { 
      duration: 0.4, 
      type: 'tween', 
      ease: [0.25, 0.46, 0.45, 0.94] 
    },
  },

  closed: {
    width: '0px',
    height: '0px',
    top: '50px',
    right: '-20px',
    opacity: 0,
    transition: {
      duration: 0.3,
      type: 'tween',
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
export const links = [
  {
    url: '#pocetna',
    linkTo: 'Početna',
  },
  {
    url: '#kursevi',
    linkTo: 'O nama',
  },
  {
    url: '#prednosti',
    linkTo: 'Prednosti',
  },
  {
    url: '#cijena',
    linkTo: 'Cijena',
  },
  {
    url: '/online-ucenje',
    linkTo: 'Online učenje',
  },
  {
    url: '/kontakt',
    linkTo: 'Kontakt',
  },
];
