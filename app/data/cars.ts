import { defaultLocale, type AppLocale } from "../i18n/config";

export interface CarData {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  passengers: number;
  fuelType: string;
  transmission: string;
  description: string;
  features: string[];
  specs: {
    engine: string;
    acceleration: string;
    topSpeed: string;
    luggage: string;
  };
}

type BaseCarData = Omit<CarData, "category" | "fuelType" | "transmission" | "description" | "features">;
type CarTranslation = Pick<CarData, "category" | "fuelType" | "transmission" | "description" | "features">;

const baseCars: BaseCarData[] = [
  {
  id: 'ford-focus-2013',
  name: 'Ford Focus 2013',
  image: '/cars/ffocus.webp',
  price: 30,
  passengers: 5,
  specs: {
    engine: '1.6L Diesel',
    acceleration: 'Comfortable and economical',
    topSpeed: '190 km/h',
    luggage: 'Roof luggage box'
  }
  },
  {
  id: 'opel-meriva-2011',
  name: 'Opel Meriva 2011',
  image: '/cars/omeriva.png',
  price: 30,
  passengers: 5,
  specs: {
    engine: '1.4L Petrol',
    acceleration: 'Comfortable and smooth',
    topSpeed: '178 km/h',
    luggage: '400L'
  }
},
  {
  id: 'mercedes-c-class-220-2015',
  name: 'Mercedes-Benz C-Class 220 2015',
  image: '/cars/c.png',
  price: 45,
  passengers: 5,
  specs: {
    engine: '2.1L Diesel',
    acceleration: 'Smooth and comfortable',
    topSpeed: '233 km/h',
    luggage: '480L'
  }
},
  {
  id: 'passat-cc-2015',
  name: 'Volkswagen Passat CC 2015',
  image: '/cars/cc.png',
  price: 45,
  passengers: 5,
  specs: {
    engine: '2.0L TDI',
    acceleration: 'Smooth and comfortable',
    topSpeed: '220 km/h',
    luggage: '532L'
  }
},
  {
  id: 'golf-7-2010',
  name: 'Volkswagen Golf 7 2010',
  image: '/cars/g71.png',
  price: 30,
  passengers: 5,
  specs: {
    engine: '1.6L TDI',
    acceleration: 'Smooth and economical',
    topSpeed: '195 km/h',
    luggage: '380L'
  }
},
  {
  id: 'mercedes-benz-ml-2009',
  name: 'Mercedes-Benz ML 3.0 2009',
  image: '/cars/ml.webp',
  price: 45,
  passengers: 5,
  specs: {
    engine: '3.0L Diesel V6',
    acceleration: 'Smooth and comfortable',
    topSpeed: '215 km/h',
    luggage: '551L'
  }
}
];

const carTranslations: Record<AppLocale, Record<string, CarTranslation>> = {
  en: {
    "ford-focus-2013": {
    category: "Economy",
    fuelType: "Diesel",
    transmission: "Manual",
    description: "Enjoy a comfortable, practical, and economical driving experience with the Ford Focus 2013. Perfect for city trips, family journeys, and longer road trips, with extra luggage space thanks to the roof box.",
    features: [
      "Comfortable Seats",
      "Bluetooth Connectivity",
      "Air Conditioning",
      "Cruise Control",
      "Parking Sensors",
      "Central Locking",
      "Electric Windows",
      "Roof Luggage Box"
    ]
  },
    "opel-meriva-2011": {
    category: "Economy",
    fuelType: "Petrol",
    transmission: "Manual",
    description: "Enjoy a comfortable and practical driving experience with the Opel Meriva 2011. Its spacious interior and versatile design make it ideal for city driving, family trips, and longer journeys.",
    features: [
      "Comfortable Seats",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Parking Sensors",
      "Central Locking",
      "Electric Windows",
      "Spacious Interior"
    ]
  },
     "mercedes-c-class-220-2015": {
    category: "Luxury",
    fuelType: "Diesel",
    transmission: "Automatic",
    description: "Enjoy a premium driving experience with the Mercedes-Benz C-Class 220 2015. Combining elegant design, comfort, and efficient performance, it is ideal for both city driving and longer journeys.",
    features: [
      "Premium Leather Seats",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Parking Sensors",
      "Automatic Transmission",
      "Central Locking",
      "Spacious Interior"
    ]
  },
    "passat-cc-2015": {
    category: "Luxury",
    fuelType: "Diesel",
    transmission: "Automatic",
    description: "Enjoy a stylish and comfortable driving experience with the Volkswagen Passat CC 2015. With its elegant design, spacious interior, and efficient diesel engine, it is ideal for both city driving and long-distance journeys.",
    features: [
      "Premium Leather Seats",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Parking Sensors",
      "Automatic Transmission",
      "Central Locking",
      "Spacious Interior"
    ]
  },
    "golf-7-2010": {
    category: "Economy",
    fuelType: "Diesel",
    transmission: "Manual",
    description: "Enjoy a reliable, comfortable, and economical driving experience with the Volkswagen Golf 7 2010. Its practical design and efficient engine make it a great choice for city driving, family trips, and longer journeys.",
    features: [
      "Comfortable Seats",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Parking Sensors",
      "Central Locking",
      "Electric Windows",
      "Spacious Interior"
    ]
  },
    "mercedes-benz-ml-2009": {
    category: "SUV",
    fuelType: "Diesel",
    transmission: "Automatic",
    description: "Enjoy a powerful, comfortable, and spacious driving experience with the Mercedes-Benz ML 3.0 2009. With its premium interior and strong V6 engine, it is ideal for family trips, long journeys, and comfortable everyday driving.",
    features: [
      "Premium Leather Seats",
      "Air Conditioning",
      "Bluetooth Connectivity",
      "Cruise Control",
      "Parking Sensors",
      "Automatic Transmission",
      "Central Locking",
      "Spacious Interior"
    ]
  },
  },
sq: {
  "ford-focus-2013": {
    category: "Ekonomike",
    fuelType: "Naftë",
    transmission: "Manual",
    description: "Shijoni një përvojë të rehatshme, praktike dhe ekonomike me Ford Focus 2013. Ideal për udhëtime në qytet, udhëtime familjare dhe distanca të gjata, me hapësirë shtesë për bagazhe falë portobagazhit.",
    features: [
      "Sedilje të rehatshme",
      "Lidhje Bluetooth",
      "Kondicioner",
      "Kontroll i shpejtësisë",
      "Sensorë parkimi",
      "Mbyllje qendrore",
      "Xhama elektrikë",
      "Portobagazh"
    ]
  },

  "opel-meriva-2011": {
    category: "Ekonomike",
    fuelType: "Benzinë",
    transmission: "Manual",
    description: "Shijoni një përvojë të rehatshme dhe praktike me Opel Meriva 2011. Hapësira e bollshme dhe dizajni fleksibël e bëjnë ideal për udhëtime në qytet, udhëtime familjare dhe distanca të gjata.",
    features: [
      "Sedilje të rehatshme",
      "Kondicioner",
      "Lidhje Bluetooth",
      "Kontroll i shpejtësisë",
      "Sensorë parkimi",
      "Mbyllje qendrore",
      "Xhama elektrikë",
      "Interier i bollshëm"
    ]
  },

  "mercedes-benz-ml-2009": {
    category: "SUV",
    fuelType: "Naftë",
    transmission: "Automatik",
    description: "Shijoni një përvojë të fuqishme, të rehatshme dhe të bollshme me Mercedes-Benz ML 3.0 2009. Motori V6 dhe interieri premium e bëjnë ideal për udhëtime familjare, distanca të gjata dhe lëvizje të përditshme.",
    features: [
      "Sedilje lëkure premium",
      "Kondicioner",
      "Lidhje Bluetooth",
      "Kontroll i shpejtësisë",
      "Sensorë parkimi",
      "Transmision automatik",
      "Mbyllje qendrore",
      "Interier i bollshëm"
    ]
  },

  "mercedes-c-class-220-2015": {
    category: "Luksoze",
    fuelType: "Naftë",
    transmission: "Automatik",
    description: "Shijoni një përvojë premium drejtimi me Mercedes-Benz C-Class 220 2015. Me dizajn elegant, rehati dhe performancë efikase, është ideal si për qytet ashtu edhe për udhëtime të gjata.",
    features: [
      "Sedilje lëkure premium",
      "Kondicioner",
      "Lidhje Bluetooth",
      "Kontroll i shpejtësisë",
      "Sensorë parkimi",
      "Transmision automatik",
      "Mbyllje qendrore",
      "Interier i bollshëm"
    ]
  },

  "golf-7-2010": {
    category: "Ekonomike",
    fuelType: "Naftë",
    transmission: "Manual",
    description: "Shijoni një përvojë të besueshme, të rehatshme dhe ekonomike me Volkswagen Golf 7 2010. Dizajni praktik dhe motori efikas e bëjnë një zgjedhje të përshtatshme për qytet, udhëtime familjare dhe distanca të gjata.",
    features: [
      "Sedilje të rehatshme",
      "Kondicioner",
      "Lidhje Bluetooth",
      "Kontroll i shpejtësisë",
      "Sensorë parkimi",
      "Mbyllje qendrore",
      "Xhama elektrikë",
      "Interier i bollshëm"
    ]
  },

  "passat-cc-2015": {
    category: "Luksoze",
    fuelType: "Naftë",
    transmission: "Automatik",
    description: "Shijoni një përvojë elegante dhe të rehatshme drejtimi me Volkswagen Passat CC 2015. Dizajni elegant, interieri i bollshëm dhe motori efikas me naftë e bëjnë ideal si për qytet ashtu edhe për udhëtime të gjata.",
    features: [
      "Sedilje lëkure premium",
      "Kondicioner",
      "Lidhje Bluetooth",
      "Kontroll i shpejtësisë",
      "Sensorë parkimi",
      "Transmision automatik",
      "Mbyllje qendrore",
      "Interier i bollshëm"
    ]
  }
},
 it: {
  "ford-focus-2013": {
    category: "Economica",
    fuelType: "Diesel",
    transmission: "Manuale",
    description: "Goditi un'esperienza di guida confortevole, pratica ed economica con la Ford Focus 2013. Ideale per gli spostamenti in città, i viaggi in famiglia e i tragitti più lunghi, con spazio extra per i bagagli grazie al box portabagagli.",
    features: [
      "Sedili confortevoli",
      "Connessione Bluetooth",
      "Aria condizionata",
      "Cruise control",
      "Sensori di parcheggio",
      "Chiusura centralizzata",
      "Alzacristalli elettrici",
      "Box portabagagli"
    ]
  },

  "opel-meriva-2011": {
    category: "Economica",
    fuelType: "Benzina",
    transmission: "Manuale",
    description: "Scopri un'esperienza di guida confortevole e pratica con la Opel Meriva 2011. L'abitacolo spazioso e il design versatile la rendono ideale per la guida in città, i viaggi in famiglia e i tragitti più lunghi.",
    features: [
      "Sedili confortevoli",
      "Aria condizionata",
      "Connessione Bluetooth",
      "Cruise control",
      "Sensori di parcheggio",
      "Chiusura centralizzata",
      "Alzacristalli elettrici",
      "Abitacolo spazioso"
    ]
  },

  "mercedes-benz-ml-2009": {
    category: "SUV",
    fuelType: "Diesel",
    transmission: "Automatico",
    description: "Goditi un'esperienza di guida potente, confortevole e spaziosa con la Mercedes-Benz ML 3.0 del 2009. Il motore V6 e gli interni premium la rendono ideale per i viaggi in famiglia, i lunghi tragitti e gli spostamenti quotidiani.",
    features: [
      "Sedili in pelle premium",
      "Aria condizionata",
      "Connessione Bluetooth",
      "Cruise control",
      "Sensori di parcheggio",
      "Cambio automatico",
      "Chiusura centralizzata",
      "Abitacolo spazioso"
    ]
  },

  "mercedes-c-class-220-2015": {
    category: "Premium",
    fuelType: "Diesel",
    transmission: "Automatico",
    description: "Vivi un'esperienza di guida premium con la Mercedes-Benz C-Class 220 del 2015. Elegante, confortevole ed efficiente, è ideale sia per gli spostamenti in città che per i viaggi più lunghi.",
    features: [
      "Sedili in pelle premium",
      "Aria condizionata",
      "Connessione Bluetooth",
      "Cruise control",
      "Sensori di parcheggio",
      "Cambio automatico",
      "Chiusura centralizzata",
      "Abitacolo spazioso"
    ]
  },

  "golf-7-2010": {
    category: "Economica",
    fuelType: "Diesel",
    transmission: "Manuale",
    description: "Goditi un'esperienza di guida affidabile, confortevole ed economica con la Volkswagen Golf 7 del 2010. Il design pratico e il motore efficiente la rendono ideale per la città, i viaggi in famiglia e i tragitti più lunghi.",
    features: [
      "Sedili confortevoli",
      "Aria condizionata",
      "Connessione Bluetooth",
      "Cruise control",
      "Sensori di parcheggio",
      "Chiusura centralizzata",
      "Alzacristalli elettrici",
      "Abitacolo spazioso"
    ]
  },

  "passat-cc-2015": {
    category: "Premium",
    fuelType: "Diesel",
    transmission: "Automatico",
    description: "Vivi un'esperienza di guida elegante e confortevole con la Volkswagen Passat CC del 2015. Il design raffinato, gli interni spaziosi e il motore diesel efficiente la rendono ideale sia per la città che per i viaggi più lunghi.",
    features: [
      "Sedili in pelle premium",
      "Aria condizionata",
      "Connessione Bluetooth",
      "Cruise control",
      "Sensori di parcheggio",
      "Cambio automatico",
      "Chiusura centralizzata",
      "Abitacolo spazioso"
    ]
  }
},
  de: {
  "ford-focus-2013": {
    category: "Economy",
    fuelType: "Diesel",
    transmission: "Schaltgetriebe",
    description: "Erleben Sie mit dem Ford Focus 2013 eine komfortable, praktische und sparsame Fahrt. Ideal für Stadtfahrten, Familienausflüge und längere Reisen – mit zusätzlichem Stauraum dank Dachgepäckbox.",
    features: [
      "Komfortable Sitze",
      "Bluetooth-Verbindung",
      "Klimaanlage",
      "Tempomat",
      "Parksensoren",
      "Zentralverriegelung",
      "Elektrische Fensterheber",
      "Dachgepäckbox"
    ]
  },

  "opel-meriva-2011": {
    category: "Economy",
    fuelType: "Benzin",
    transmission: "Schaltgetriebe",
    description: "Genießen Sie mit dem Opel Meriva 2011 eine komfortable und praktische Fahrt. Der geräumige Innenraum und das vielseitige Design machen ihn ideal für Stadtfahrten, Familienreisen und längere Strecken.",
    features: [
      "Komfortable Sitze",
      "Klimaanlage",
      "Bluetooth-Verbindung",
      "Tempomat",
      "Parksensoren",
      "Zentralverriegelung",
      "Elektrische Fensterheber",
      "Geräumiger Innenraum"
    ]
  },

  "mercedes-benz-ml-2009": {
    category: "SUV",
    fuelType: "Diesel",
    transmission: "Automatik",
    description: "Erleben Sie mit dem Mercedes-Benz ML 3.0 aus dem Jahr 2009 eine kraftvolle, komfortable und geräumige Fahrt. Der V6-Motor und die hochwertige Innenausstattung machen ihn ideal für Familienreisen, lange Strecken und den täglichen Gebrauch.",
    features: [
      "Hochwertige Ledersitze",
      "Klimaanlage",
      "Bluetooth-Verbindung",
      "Tempomat",
      "Parksensoren",
      "Automatikgetriebe",
      "Zentralverriegelung",
      "Geräumiger Innenraum"
    ]
  },

  "mercedes-c-class-220-2015": {
    category: "Premium",
    fuelType: "Diesel",
    transmission: "Automatik",
    description: "Erleben Sie ein hochwertiges Fahrerlebnis mit der Mercedes-Benz C-Klasse 220 aus dem Jahr 2015. Elegantes Design, hoher Komfort und effizienter Antrieb machen sie ideal für Stadtfahrten und längere Reisen.",
    features: [
      "Hochwertige Ledersitze",
      "Klimaanlage",
      "Bluetooth-Verbindung",
      "Tempomat",
      "Parksensoren",
      "Automatikgetriebe",
      "Zentralverriegelung",
      "Geräumiger Innenraum"
    ]
  },

  "golf-7-2010": {
    category: "Economy",
    fuelType: "Diesel",
    transmission: "Schaltgetriebe",
    description: "Erleben Sie mit dem Volkswagen Golf 7 aus dem Jahr 2010 eine zuverlässige, komfortable und sparsame Fahrt. Das praktische Design und der effiziente Motor machen ihn ideal für Stadtfahrten, Familienreisen und längere Strecken.",
    features: [
      "Komfortable Sitze",
      "Klimaanlage",
      "Bluetooth-Verbindung",
      "Tempomat",
      "Parksensoren",
      "Zentralverriegelung",
      "Elektrische Fensterheber",
      "Geräumiger Innenraum"
    ]
  },

  "passat-cc-2015": {
    category: "Premium",
    fuelType: "Diesel",
    transmission: "Automatik",
    description: "Erleben Sie mit dem Volkswagen Passat CC aus dem Jahr 2015 eine elegante und komfortable Fahrt. Das stilvolle Design, der geräumige Innenraum und der effiziente Dieselmotor machen ihn ideal für Stadtfahrten und längere Reisen.",
    features: [
      "Hochwertige Ledersitze",
      "Klimaanlage",
      "Bluetooth-Verbindung",
      "Tempomat",
      "Parksensoren",
      "Automatikgetriebe",
      "Zentralverriegelung",
      "Geräumiger Innenraum"
    ]
  }
},
};

export const getCars = (locale: AppLocale = defaultLocale): CarData[] => {
  const localeCars = carTranslations[locale] ?? carTranslations.en;

  return baseCars.map((car) => ({
    ...car,
    ...localeCars[car.id],
  }));
};

export const cars: CarData[] = getCars(defaultLocale);

export const getCarById = (id: string, locale: AppLocale = defaultLocale): CarData | undefined => {
  return getCars(locale).find((car) => car.id === id);
};
