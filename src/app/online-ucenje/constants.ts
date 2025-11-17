// B kategorija test pitanja organizovana po folderima
// Svaki folder sadrži 20 pitanja

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface TestFolder {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

// Folder 1: Osnovna pravila saobraćaja
export const folder1: TestFolder = {
  id: 'osnovna-pravila',
  name: 'Osnovna pravila saobraćaja',
  description: 'Osnovna pravila i propisi u saobraćaju',
  questions: [
    {
      id: 1,
      question: "Koja je maksimalna brzina u naselju?",
      options: ["30 km/h", "50 km/h", "60 km/h", "80 km/h"],
      correctAnswer: 1,
      explanation: "Maksimalna brzina u naselju je 50 km/h, osim ako nije drugačije označeno.",
      category: "B"
    },
    {
      id: 2,
      question: "Kada je obavezno koristiti sigurnosni pojas?",
      options: ["Samo na autoputu", "Samo u gradu", "Uvijek kada se vozi", "Samo na brzini preko 50 km/h"],
      correctAnswer: 2,
      explanation: "Sigurnosni pojas je obavezan uvijek kada se vozi, bez obzira na brzinu ili tip ceste.",
      category: "B"
    },
    {
      id: 3,
      question: "Koja je minimalna udaljenost za preticanje?",
      options: ["50 metara", "100 metara", "150 metara", "200 metara"],
      correctAnswer: 2,
      explanation: "Minimalna udaljenost za preticanje je 150 metara, osim ako nije drugačije označeno.",
      category: "B"
    },
    {
      id: 4,
      question: "Kada je zabranjeno preticanje?",
      options: ["Na pješačkom prelazu", "U krivini", "Na željezničkom prelazu", "Sve navedeno"],
      correctAnswer: 3,
      explanation: "Preticanje je zabranjeno na pješačkom prelazu, u krivini i na željezničkom prelazu.",
      category: "B"
    },
    {
      id: 5,
      question: "Koja je maksimalna brzina na autoputu?",
      options: ["100 km/h", "120 km/h", "130 km/h", "140 km/h"],
      correctAnswer: 2,
      explanation: "Maksimalna brzina na autoputu je 130 km/h, osim ako nije drugačije označeno.",
      category: "B"
    },
    {
      id: 6,
      question: "Kada je dozvoljeno voziti u suprotnom smjeru?",
      options: ["Nikad", "Samo u slučaju nužde", "Kada nema drugih vozila", "Kada je cesta široka"],
      correctAnswer: 1,
      explanation: "Vožnja u suprotnom smjeru je dozvoljena samo u slučaju nužde i kada je to sigurno.",
      category: "B"
    },
    {
      id: 7,
      question: "Koja je minimalna udaljenost između vozila u koloni?",
      options: ["2 sekunde", "3 sekunde", "4 sekunde", "5 sekundi"],
      correctAnswer: 0,
      explanation: "Minimalna udaljenost između vozila u koloni je 2 sekunde.",
      category: "B"
    },
    {
      id: 8,
      question: "Kada je obavezno koristiti svjetla za maglu?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 2,
      explanation: "Svjetla za maglu se koriste u magli i kiši kada je vidljivost smanjena.",
      category: "B"
    },
    {
      id: 9,
      question: "Koja je maksimalna brzina u školskoj zoni?",
      options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
      correctAnswer: 1,
      explanation: "Maksimalna brzina u školskoj zoni je 30 km/h.",
      category: "B"
    },
    {
      id: 10,
      question: "Kada je zabranjeno parkiranje?",
      options: ["Na pješačkom prelazu", "Na autobusnoj stanici", "Na željezničkom prelazu", "Sve navedeno"],
      correctAnswer: 3,
      explanation: "Parkiranje je zabranjeno na pješačkom prelazu, autobusnoj stanici i željezničkom prelazu.",
      category: "B"
    },
    {
      id: 11,
      question: "Koja je maksimalna brzina na magistralnoj cesti?",
      options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
      correctAnswer: 2,
      explanation: "Maksimalna brzina na magistralnoj cesti je 100 km/h.",
      category: "B"
    },
    {
      id: 12,
      question: "Kada je obavezno koristiti žmigavac?",
      options: ["Samo pri skretanju", "Samo pri preticanju", "Pri svakoj promjeni smjera", "Samo u gradu"],
      correctAnswer: 2,
      explanation: "Žmigavac je obavezan pri svakoj promjeni smjera kretanja.",
      category: "B"
    },
    {
      id: 13,
      question: "Koja je minimalna starost za vozača B kategorije?",
      options: ["16 godina", "17 godina", "18 godina", "19 godina"],
      correctAnswer: 2,
      explanation: "Minimalna starost za vozača B kategorije je 18 godina.",
      category: "B"
    },
    {
      id: 14,
      question: "Kada je dozvoljeno voziti u suprotnom smjeru na jednosmjernoj cesti?",
      options: ["Nikad", "Samo u slučaju nužde", "Kada nema drugih vozila", "Kada je cesta široka"],
      correctAnswer: 0,
      explanation: "Vožnja u suprotnom smjeru na jednosmjernoj cesti je uvijek zabranjena.",
      category: "B"
    },
    {
      id: 15,
      question: "Koja je maksimalna brzina u tunelu?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 1,
      explanation: "Maksimalna brzina u tunelu je 60 km/h.",
      category: "B"
    },
    {
      id: 16,
      question: "Kada je obavezno koristiti svjetla za maglu na prednjem dijelu vozila?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 2,
      explanation: "Prednja svjetla za maglu se koriste u magli i kiši kada je vidljivost smanjena.",
      category: "B"
    },
    {
      id: 17,
      question: "Koja je minimalna udaljenost za preticanje kamiona?",
      options: ["100 metara", "150 metara", "200 metara", "250 metara"],
      correctAnswer: 2,
      explanation: "Minimalna udaljenost za preticanje kamiona je 200 metara.",
      category: "B"
    },
    {
      id: 18,
      question: "Kada je zabranjeno preticanje na željezničkom prelazu?",
      options: ["Uvijek", "Samo kada je spuštena rampa", "Samo kada nema vlaka", "Nikad"],
      correctAnswer: 0,
      explanation: "Preticanje na željezničkom prelazu je uvijek zabranjeno.",
      category: "B"
    },
    {
      id: 19,
      question: "Koja je maksimalna brzina na lokalnoj cesti?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 0,
      explanation: "Maksimalna brzina na lokalnoj cesti je 50 km/h.",
      category: "B"
    },
    {
      id: 20,
      question: "Kada je obavezno koristiti svjetla za maglu na zadnjem dijelu vozila?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 0,
      explanation: "Zadnja svjetla za maglu se koriste samo u magli kada je vidljivost značajno smanjena.",
      category: "B"
    }
  ]
};

// Folder 2: Znakovi i signalizacija
export const folder2: TestFolder = {
  id: 'znakovi-signalizacija',
  name: 'Znakovi i signalizacija',
  description: 'Saobraćajni znakovi i signalizacija',
  questions: [
    {
      id: 21,
      question: "Šta označava crveni krug sa bijelom linijom?",
      options: ["Zabrana ulaska", "Obavezno skretanje", "Jednosmjerna cesta", "Zabrana preticanja"],
      correctAnswer: 0,
      explanation: "Crveni krug sa bijelom linijom označava zabranu ulaska.",
      category: "B"
    },
    {
      id: 22,
      question: "Šta označava plavi krug sa bijelom strelicom?",
      options: ["Zabrana skretanja", "Obavezno skretanje", "Jednosmjerna cesta", "Zabrana preticanja"],
      correctAnswer: 1,
      explanation: "Plavi krug sa bijelom strelicom označava obavezno skretanje.",
      category: "B"
    },
    {
      id: 23,
      question: "Šta označava žuti romb sa crnim obrubom?",
      options: ["Oprez", "Zabrana", "Obaveza", "Informacija"],
      correctAnswer: 0,
      explanation: "Žuti romb sa crnim obrubom označava oprez.",
      category: "B"
    },
    {
      id: 24,
      question: "Šta označava crveni trougao sa bijelom linijom?",
      options: ["Zabrana", "Oprez", "Obaveza", "Informacija"],
      correctAnswer: 1,
      explanation: "Crveni trougao sa bijelom linijom označava oprez.",
      category: "B"
    },
    {
      id: 25,
      question: "Šta označava plavi krug sa bijelim brojem?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 1,
      explanation: "Plavi krug sa bijelim brojem označava minimalnu brzinu.",
      category: "B"
    },
    {
      id: 26,
      question: "Šta označava crveni krug sa bijelim brojem?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 0,
      explanation: "Crveni krug sa bijelim brojem označava maksimalnu brzinu.",
      category: "B"
    },
    {
      id: 27,
      question: "Šta označava žuti krug sa crnim brojem?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 2,
      explanation: "Žuti krug sa crnim brojem označava preporučenu brzinu.",
      category: "B"
    },
    {
      id: 28,
      question: "Šta označava crveni krug sa bijelim X?",
      options: ["Zabrana preticanja", "Zabrana ulaska", "Zabrana skretanja", "Zabrana parkiranja"],
      correctAnswer: 0,
      explanation: "Crveni krug sa bijelim X označava zabranu preticanja.",
      category: "B"
    },
    {
      id: 29,
      question: "Šta označava plavi krug sa bijelim P?",
      options: ["Zabrana parkiranja", "Obavezno parkiranje", "Dozvoljeno parkiranje", "Ograničeno parkiranje"],
      correctAnswer: 2,
      explanation: "Plavi krug sa bijelim P označava dozvoljeno parkiranje.",
      category: "B"
    },
    {
      id: 30,
      question: "Šta označava crveni krug sa bijelim P i crtom?",
      options: ["Zabrana parkiranja", "Obavezno parkiranje", "Dozvoljeno parkiranje", "Ograničeno parkiranje"],
      correctAnswer: 0,
      explanation: "Crveni krug sa bijelim P i crtom označava zabranu parkiranja.",
      category: "B"
    },
    {
      id: 31,
      question: "Šta označava žuti krug sa crnim brojem u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 2,
      explanation: "Žuti krug sa crnim brojem u rombu označava preporučenu brzinu.",
      category: "B"
    },
    {
      id: 32,
      question: "Šta označava crveni krug sa bijelim brojem u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 0,
      explanation: "Crveni krug sa bijelim brojem u rombu označava maksimalnu brzinu.",
      category: "B"
    },
    {
      id: 33,
      question: "Šta označava plavi krug sa bijelim brojem u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 1,
      explanation: "Plavi krug sa bijelim brojem u rombu označava minimalnu brzinu.",
      category: "B"
    },
    {
      id: 34,
      question: "Šta označava crveni krug sa bijelim brojem i crtom?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Crveni krug sa bijelim brojem i crtom označava zabranu brzine.",
      category: "B"
    },
    {
      id: 35,
      question: "Šta označava žuti krug sa crnim brojem i crtom?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Žuti krug sa crnim brojem i crtom označava zabranu brzine.",
      category: "B"
    },
    {
      id: 36,
      question: "Šta označava crveni krug sa bijelim brojem i crtom u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Crveni krug sa bijelim brojem i crtom u rombu označava zabranu brzine.",
      category: "B"
    },
    {
      id: 37,
      question: "Šta označava plavi krug sa bijelim brojem i crtom u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Plavi krug sa bijelim brojem i crtom u rombu označava zabranu brzine.",
      category: "B"
    },
    {
      id: 38,
      question: "Šta označava žuti krug sa crnim brojem i crtom u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Žuti krug sa crnim brojem i crtom u rombu označava zabranu brzine.",
      category: "B"
    },
    {
      id: 39,
      question: "Šta označava crveni krug sa bijelim brojem i crtom u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Crveni krug sa bijelim brojem i crtom u rombu označava zabranu brzine.",
      category: "B"
    },
    {
      id: 40,
      question: "Šta označava plavi krug sa bijelim brojem i crtom u rombu?",
      options: ["Maksimalna brzina", "Minimalna brzina", "Preporučena brzina", "Zabrana brzine"],
      correctAnswer: 3,
      explanation: "Plavi krug sa bijelim brojem i crtom u rombu označava zabranu brzine.",
      category: "B"
    }
  ]
};

// Folder 3: Sigurnost u saobraćaju
export const folder3: TestFolder = {
  id: 'sigurnost-saobracaj',
  name: 'Sigurnost u saobraćaju',
  description: 'Sigurnosni propisi i mjere u saobraćaju',
  questions: [
    {
      id: 41,
      question: "Koja je minimalna udaljenost za preticanje u gradu?",
      options: ["50 metara", "100 metara", "150 metara", "200 metara"],
      correctAnswer: 2,
      explanation: "Minimalna udaljenost za preticanje u gradu je 150 metara.",
      category: "B"
    },
    {
      id: 42,
      question: "Kada je obavezno koristiti sigurnosni pojas na zadnjem sjedalu?",
      options: ["Uvijek", "Samo na autoputu", "Samo u gradu", "Nikad"],
      correctAnswer: 0,
      explanation: "Sigurnosni pojas na zadnjem sjedalu je obavezan uvijek kada se vozi.",
      category: "B"
    },
    {
      id: 43,
      question: "Koja je maksimalna brzina u školskoj zoni?",
      options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"],
      correctAnswer: 1,
      explanation: "Maksimalna brzina u školskoj zoni je 30 km/h.",
      category: "B"
    },
    {
      id: 44,
      question: "Kada je obavezno koristiti svjetla za maglu?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 2,
      explanation: "Svjetla za maglu se koriste u magli i kiši kada je vidljivost smanjena.",
      category: "B"
    },
    {
      id: 45,
      question: "Koja je minimalna udaljenost za preticanje kamiona?",
      options: ["100 metara", "150 metara", "200 metara", "250 metara"],
      correctAnswer: 2,
      explanation: "Minimalna udaljenost za preticanje kamiona je 200 metara.",
      category: "B"
    },
    {
      id: 46,
      question: "Kada je zabranjeno preticanje na željezničkom prelazu?",
      options: ["Uvijek", "Samo kada je spuštena rampa", "Samo kada nema vlaka", "Nikad"],
      correctAnswer: 0,
      explanation: "Preticanje na željezničkom prelazu je uvijek zabranjeno.",
      category: "B"
    },
    {
      id: 47,
      question: "Koja je maksimalna brzina u tunelu?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 1,
      explanation: "Maksimalna brzina u tunelu je 60 km/h.",
      category: "B"
    },
    {
      id: 48,
      question: "Kada je obavezno koristiti svjetla za maglu na prednjem dijelu vozila?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 2,
      explanation: "Prednja svjetla za maglu se koriste u magli i kiši kada je vidljivost smanjena.",
      category: "B"
    },
    {
      id: 49,
      question: "Koja je minimalna udaljenost za preticanje na autoputu?",
      options: ["150 metara", "200 metara", "250 metara", "300 metara"],
      correctAnswer: 2,
      explanation: "Minimalna udaljenost za preticanje na autoputu je 250 metara.",
      category: "B"
    },
    {
      id: 50,
      question: "Kada je zabranjeno preticanje na pješačkom prelazu?",
      options: ["Uvijek", "Samo kada su pješaci", "Samo kada nema pješaka", "Nikad"],
      correctAnswer: 0,
      explanation: "Preticanje na pješačkom prelazu je uvijek zabranjeno.",
      category: "B"
    },
    {
      id: 51,
      question: "Koja je maksimalna brzina na lokalnoj cesti?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 0,
      explanation: "Maksimalna brzina na lokalnoj cesti je 50 km/h.",
      category: "B"
    },
    {
      id: 52,
      question: "Kada je obavezno koristiti svjetla za maglu na zadnjem dijelu vozila?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 0,
      explanation: "Zadnja svjetla za maglu se koriste samo u magli kada je vidljivost značajno smanjena.",
      category: "B"
    },
    {
      id: 53,
      question: "Koja je minimalna udaljenost za preticanje u krivini?",
      options: ["50 metara", "100 metara", "150 metara", "200 metara"],
      correctAnswer: 2,
      explanation: "Minimalna udaljenost za preticanje u krivini je 150 metara.",
      category: "B"
    },
    {
      id: 54,
      question: "Kada je zabranjeno preticanje u krivini?",
      options: ["Uvijek", "Samo kada je krivina oštra", "Samo kada nema drugih vozila", "Nikad"],
      correctAnswer: 0,
      explanation: "Preticanje u krivini je uvijek zabranjeno.",
      category: "B"
    },
    {
      id: 55,
      question: "Koja je maksimalna brzina na magistralnoj cesti?",
      options: ["80 km/h", "90 km/h", "100 km/h", "110 km/h"],
      correctAnswer: 2,
      explanation: "Maksimalna brzina na magistralnoj cesti je 100 km/h.",
      category: "B"
    },
    {
      id: 56,
      question: "Kada je obavezno koristiti žmigavac?",
      options: ["Samo pri skretanju", "Samo pri preticanju", "Pri svakoj promjeni smjera", "Samo u gradu"],
      correctAnswer: 2,
      explanation: "Žmigavac je obavezan pri svakoj promjeni smjera kretanja.",
      category: "B"
    },
    {
      id: 57,
      question: "Koja je minimalna starost za vozača B kategorije?",
      options: ["16 godina", "17 godina", "18 godina", "19 godina"],
      correctAnswer: 2,
      explanation: "Minimalna starost za vozača B kategorije je 18 godina.",
      category: "B"
    },
    {
      id: 58,
      question: "Kada je dozvoljeno voziti u suprotnom smjeru na jednosmjernoj cesti?",
      options: ["Nikad", "Samo u slučaju nužde", "Kada nema drugih vozila", "Kada je cesta široka"],
      correctAnswer: 0,
      explanation: "Vožnja u suprotnom smjeru na jednosmjernoj cesti je uvijek zabranjena.",
      category: "B"
    },
    {
      id: 59,
      question: "Koja je maksimalna brzina u tunelu?",
      options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
      correctAnswer: 1,
      explanation: "Maksimalna brzina u tunelu je 60 km/h.",
      category: "B"
    },
    {
      id: 60,
      question: "Kada je obavezno koristiti svjetla za maglu na prednjem dijelu vozila?",
      options: ["Samo u magli", "Samo noću", "U magli i kiši", "Uvijek"],
      correctAnswer: 2,
      explanation: "Prednja svjetla za maglu se koriste u magli i kiši kada je vidljivost smanjena.",
      category: "B"
    }
  ]
};

// Folder 4: Prva pomoć
export const folder4: TestFolder = {
  id: 'prva-pomoc',
  name: 'Prva pomoć',
  description: 'Osnovi prve pomoći u saobraćaju',
  questions: [
    {
      id: 61,
      question: "Šta je prva stvar koju treba uraditi na mjestu saobraćajne nesreće?",
      options: ["Pozvati hitnu pomoć", "Osigurati mjesto nesreće", "Pomjeriti ozlijeđene", "Snimiti fotografije"],
      correctAnswer: 1,
      explanation: "Prva stvar je osigurati mjesto nesreće da se spriječi dodatna ozlijeđenja.",
      category: "B"
    },
    {
      id: 62,
      question: "Kako se poziva hitna pomoć?",
      options: ["112", "122", "133", "144"],
      correctAnswer: 0,
      explanation: "Hitna pomoć se poziva brojem 112.",
      category: "B"
    },
    {
      id: 63,
      question: "Šta je ABC pristup u prvoj pomoći?",
      options: ["Airway, Breathing, Circulation", "Always Be Careful", "All Basic Care", "Always Be Cautious"],
      correctAnswer: 0,
      explanation: "ABC pristup znači Airway (disajni putevi), Breathing (disanje), Circulation (krvotok).",
      category: "B"
    },
    {
      id: 64,
      question: "Kada se koristi Heimlichov manevar?",
      options: ["Kod srčanog udara", "Kod gušenja", "Kod krvarenja", "Kod gubitka svijesti"],
      correctAnswer: 1,
      explanation: "Heimlichov manevar se koristi kod gušenja kada je osoba zaglavila nešto u grlu.",
      category: "B"
    },
    {
      id: 65,
      question: "Kako se provjerava da li osoba diše?",
      options: ["Položiti ruku na čelo", "Položiti ruku na prsa", "Položiti ruku na vrat", "Položiti ruku na trbuh"],
      correctAnswer: 1,
      explanation: "Da se provjeri disanje, treba položiti ruku na prsa i osjetiti pokrete.",
      category: "B"
    },
    {
      id: 66,
      question: "Šta je RICE pristup?",
      options: ["Rest, Ice, Compression, Elevation", "Run, Ice, Care, Emergency", "Rest, Ice, Care, Emergency", "Run, Ice, Compression, Elevation"],
      correctAnswer: 0,
      explanation: "RICE pristup znači Rest (odmor), Ice (led), Compression (kompresija), Elevation (podizanje).",
      category: "B"
    },
    {
      id: 67,
      question: "Kada se koristi CPR?",
      options: ["Kod svih ozljeda", "Kod srčanog udara", "Kod krvarenja", "Kod gubitka svijesti"],
      correctAnswer: 1,
      explanation: "CPR se koristi kod srčanog udara kada osoba ne diše i nema puls.",
      category: "B"
    },
    {
      id: 68,
      question: "Koliko je omjer kompresija i disanja u CPR-u?",
      options: ["15:2", "30:2", "5:1", "10:1"],
      correctAnswer: 1,
      explanation: "Omjer kompresija i disanja u CPR-u je 30:2 (30 kompresija, 2 disanja).",
      category: "B"
    },
    {
      id: 69,
      question: "Šta je šok?",
      options: ["Gubitak svijesti", "Stanje kada tijelo ne može dobiti dovoljno krvi", "Gubitak krvi", "Gubitak disanja"],
      correctAnswer: 1,
      explanation: "Šok je stanje kada tijelo ne može dobiti dovoljno krvi i kisika.",
      category: "B"
    },
    {
      id: 70,
      question: "Kako se tretira krvarenje?",
      options: ["Položiti led", "Pritisnuti direktno", "Položiti vruću vodu", "Položiti hladnu vodu"],
      correctAnswer: 1,
      explanation: "Krvarenje se tretira direktnim pritiskom na ranu.",
      category: "B"
    },
    {
      id: 71,
      question: "Šta je prva pomoć kod opekotina?",
      options: ["Položiti led", "Položiti vruću vodu", "Položiti hladnu vodu", "Položiti toplu vodu"],
      correctAnswer: 2,
      explanation: "Prva pomoć kod opekotina je položiti hladnu vodu na opekoćeno mjesto.",
      category: "B"
    },
    {
      id: 72,
      question: "Kako se tretira gubitak svijesti?",
      options: ["Položiti osobu na leđa", "Položiti osobu na bok", "Položiti osobu na trbuh", "Položiti osobu na stranu"],
      correctAnswer: 1,
      explanation: "Osobu bez svijesti treba položiti na bok da se spriječi gušenje.",
      category: "B"
    },
    {
      id: 73,
      question: "Šta je prva pomoć kod preloma?",
      options: ["Pomjeriti kost", "Imobilizirati kost", "Položiti led", "Položiti toplu vodu"],
      correctAnswer: 1,
      explanation: "Prva pomoć kod preloma je imobilizirati kost da se spriječi dodatna ozlijeđenja.",
      category: "B"
    },
    {
      id: 74,
      question: "Kako se tretira gubitak krvi?",
      options: ["Položiti led", "Pritisnuti direktno", "Položiti vruću vodu", "Položiti hladnu vodu"],
      correctAnswer: 1,
      explanation: "Gubitak krvi se tretira direktnim pritiskom na ranu.",
      category: "B"
    },
    {
      id: 75,
      question: "Šta je prva pomoć kod gušenja?",
      options: ["Položiti osobu na leđa", "Položiti osobu na bok", "Položiti osobu na trbuh", "Položiti osobu na stranu"],
      correctAnswer: 1,
      explanation: "Osobu koja se guši treba položiti na bok da se spriječi gušenje.",
      category: "B"
    },
    {
      id: 76,
      question: "Kako se tretira gubitak disanja?",
      options: ["Položiti osobu na leđa", "Položiti osobu na bok", "Položiti osobu na trbuh", "Položiti osobu na stranu"],
      correctAnswer: 0,
      explanation: "Osobu bez disanja treba položiti na leđa i početi CPR.",
      category: "B"
    },
    {
      id: 77,
      question: "Šta je prva pomoć kod srčanog udara?",
      options: ["Položiti led", "Pritisnuti direktno", "Položiti vruću vodu", "Položiti hladnu vodu"],
      correctAnswer: 1,
      explanation: "Prva pomoć kod srčanog udara je direktan pritisak na ranu.",
      category: "B"
    },
    {
      id: 78,
      question: "Kako se tretira gubitak svijesti?",
      options: ["Položiti osobu na leđa", "Položiti osobu na bok", "Položiti osobu na trbuh", "Položiti osobu na stranu"],
      correctAnswer: 1,
      explanation: "Osobu bez svijesti treba položiti na bok da se spriječi gušenje.",
      category: "B"
    },
    {
      id: 79,
      question: "Šta je prva pomoć kod opekotina?",
      options: ["Položiti led", "Položiti vruću vodu", "Položiti hladnu vodu", "Položiti toplu vodu"],
      correctAnswer: 2,
      explanation: "Prva pomoć kod opekotina je položiti hladnu vodu na opekoćeno mjesto.",
      category: "B"
    },
    {
      id: 80,
      question: "Kako se tretira gubitak krvi?",
      options: ["Položiti led", "Pritisnuti direktno", "Položiti vruću vodu", "Položiti hladnu vodu"],
      correctAnswer: 1,
      explanation: "Gubitak krvi se tretira direktnim pritiskom na ranu.",
      category: "B"
    }
  ]
};

// Folder 5: Tehnika vožnje
export const folder5: TestFolder = {
  id: 'tehnika-voznje',
  name: 'Tehnika vožnje',
  description: 'Tehnička znanja i vještine vožnje',
  questions: [
    {
      id: 81,
      question: "Kako se pravilno drži volan?",
      options: ["Jednom rukom", "Dvije ruke na 10 i 2", "Dvije ruke na 9 i 3", "Dvije ruke na 8 i 4"],
      correctAnswer: 2,
      explanation: "Volan se pravilno drži dvije ruke na poziciji 9 i 3.",
      category: "B"
    },
    {
      id: 82,
      question: "Kako se pravilno koristi kvačilo?",
      options: ["Naglo", "Polako", "Srednje", "Kako god"],
      correctAnswer: 1,
      explanation: "Kvačilo se koristi polako da se izbjegne naglo kretanje vozila.",
      category: "B"
    },
    {
      id: 83,
      question: "Kako se pravilno koristi kočnica?",
      options: ["Naglo", "Polako", "Srednje", "Kako god"],
      correctAnswer: 1,
      explanation: "Kočnica se koristi polako da se izbjegne naglo zaustavljanje vozila.",
      category: "B"
    },
    {
      id: 84,
      question: "Kako se pravilno koristi gas?",
      options: ["Naglo", "Polako", "Srednje", "Kako god"],
      correctAnswer: 1,
      explanation: "Gas se koristi polako da se izbjegne naglo ubrzanje vozila.",
      category: "B"
    },
    {
      id: 85,
      question: "Kako se pravilno koristi žmigavac?",
      options: ["Prije skretanja", "Poslije skretanja", "Tokom skretanja", "Nikad"],
      correctAnswer: 0,
      explanation: "Žmigavac se koristi prije skretanja da se upozori druge vozače.",
      category: "B"
    },
    {
      id: 86,
      question: "Kako se pravilno koristi retrovizor?",
      options: ["Samo prije skretanja", "Samo poslije skretanja", "Redovito", "Nikad"],
      correctAnswer: 2,
      explanation: "Retrovizor se koristi redovito da se prati situacija iza vozila.",
      category: "B"
    },
    {
      id: 87,
      question: "Kako se pravilno koristi svjetla?",
      options: ["Samo noću", "Samo u magli", "Kada je potrebno", "Uvijek"],
      correctAnswer: 2,
      explanation: "Svjetla se koriste kada je potrebno za sigurnost vožnje.",
      category: "B"
    },
    {
      id: 88,
      question: "Kako se pravilno koristi sirena?",
      options: ["Samo u gradu", "Samo na autoputu", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Sirena se koristi samo u slučaju nužde da se upozori druge vozače.",
      category: "B"
    },
    {
      id: 89,
      question: "Kako se pravilno koristi kočnica za ruku?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Kočnica za ruku se koristi samo u slučaju nužde ili kada je vozilo parkirano.",
      category: "B"
    },
    {
      id: 90,
      question: "Kako se pravilno koristi kvačilo za ruku?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Kvačilo za ruku se koristi samo u slučaju nužde ili kada je vozilo parkirano.",
      category: "B"
    },
    {
      id: 91,
      question: "Kako se pravilno koristi gas za ruku?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Gas za ruku se koristi samo u slučaju nužde ili kada je vozilo parkirano.",
      category: "B"
    },
    {
      id: 92,
      question: "Kako se pravilno koristi kočnica za nogu?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 3,
      explanation: "Kočnica za nogu se koristi uvijek kada je potrebno zaustaviti vozilo.",
      category: "B"
    },
    {
      id: 93,
      question: "Kako se pravilno koristi kvačilo za nogu?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 3,
      explanation: "Kvačilo za nogu se koristi uvijek kada je potrebno mijenjati brzinu.",
      category: "B"
    },
    {
      id: 94,
      question: "Kako se pravilno koristi gas za nogu?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 3,
      explanation: "Gas za nogu se koristi uvijek kada je potrebno ubrzati vozilo.",
      category: "B"
    },
    {
      id: 95,
      question: "Kako se pravilno koristi kočnica za ruku?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Kočnica za ruku se koristi samo u slučaju nužde ili kada je vozilo parkirano.",
      category: "B"
    },
    {
      id: 96,
      question: "Kako se pravilno koristi kvačilo za ruku?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Kvačilo za ruku se koristi samo u slučaju nužde ili kada je vozilo parkirano.",
      category: "B"
    },
    {
      id: 97,
      question: "Kako se pravilno koristi gas za ruku?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 2,
      explanation: "Gas za ruku se koristi samo u slučaju nužde ili kada je vozilo parkirano.",
      category: "B"
    },
    {
      id: 98,
      question: "Kako se pravilno koristi kočnica za nogu?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 3,
      explanation: "Kočnica za nogu se koristi uvijek kada je potrebno zaustaviti vozilo.",
      category: "B"
    },
    {
      id: 99,
      question: "Kako se pravilno koristi kvačilo za nogu?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 3,
      explanation: "Kvačilo za nogu se koristi uvijek kada je potrebno mijenjati brzinu.",
      category: "B"
    },
    {
      id: 100,
      question: "Kako se pravilno koristi gas za nogu?",
      options: ["Samo na usponu", "Samo na nizbrdici", "Samo u slučaju nužde", "Uvijek"],
      correctAnswer: 3,
      explanation: "Gas za nogu se koristi uvijek kada je potrebno ubrzati vozilo.",
      category: "B"
    }
  ]
};

// Svi folderi
export const testFolders: TestFolder[] = [
  folder1,
  folder2,
  folder3,
  folder4,
  folder5
];

