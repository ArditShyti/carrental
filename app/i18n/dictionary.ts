import type { AppLocale } from "./config";

type NavigationLabels = {
  home: string;
  fleet: string;
  about: string;
  contact: string;
  blog: string;
  signIn: string;
};

type FooterLabels = {
  quickLinks: string;
  services: string;
  contact: string;
  aboutUs: string;
  fleet: string;
  blog: string;
  dailyRentals: string;
  longTerm: string;
  corporate: string;
  chauffeurService: string;
  trustedPartner: string;
};

type WhyChooseUsLabels = {
  title: string;
  subtitle: string;

  fullyInsuredTitle: string;
  fullyInsuredDesc: string;

  supportTitle: string;
  supportDesc: string;

  priceTitle: string;
  priceDesc: string;

  bookingTitle: string;
  bookingDesc: string;
};

type customerFavoritesLabels = {
  title: string;
  subtitle: string;
  viewAllVehicles: string;
};

type faqsLabels = {
  title: string;
  subtitle: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

type heroLabels = {
  title: string;
  bluetitle: string;
  subtitle: string;
};

type metricsLabels = {
  happyCustomers: string;
  locations: string;
  vehicles: string;
};

type carCardLabels={
  startingAt:string;
  rentNow:string;
  day:string;
  rating:string;
  rentals:string;
  aboutthis:string;
  passengers:string;
  transmission:string;
  Fueltype:string;
  luggage:string;
  performance:string;
  engine:string;
  acceleration:string;
  top_speed:string;
  features_amenities:string;
}

type contactLabels={
  backToFleet:string;
  reserveYour:string;
  complete_reservation:string;
  full_name:string;
  phone_number:string;
  drivers_license:string;
  rental_details:string;
  pickUpDate:string;
  returnDate:string;
  specialRequirements:string;
  completeReservation:string;
  pickupLocation: string;
  popupContactSuccess: string;
  popupContactError: string;
}

type aboutLabels = {
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;

  storyBadge: string;
  storyTitle: string;
  storyP1: string;
  storyP2: string;
  storyP3: string;

  valuesBadge: string;
  valuesTitle: string;
  valuesSubtitle: string;

  excellenceTitle: string;
  excellenceDesc: string;
  luxuryTitle: string;
  luxuryDesc: string;
  trustTitle: string;
  trustDesc: string;

  teamBadge: string;
  teamTitle: string;
  teamSubtitle: string;

  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
};

type contactPageLabels = {
  badge: string;
  title: string;
  subtitle: string;

  sendMessage: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  selectSubject: string;

  subjects: {
    booking: string;
    support: string;
    partnership: string;
    feedback: string;
    other: string;
  };

  contactInfoTitle: string;
  contactInfoDesc: string;

  phoneTitle: string;
  emailTitle: string;
  officeTitle: string;
  chatTitle: string;

  phoneSub: string;
  emailSub: string;
  officeSub: string;
  chatSub: string;

  followUs: string;
  stayConnected: string;

  locationsBadge: string;
  locationsTitle: string;
  locationsSubtitle: string;
  mapTitle: string;
  mapSubtitle: string;
};

type popupLabels = {
  successTitle: string;
  errorTitle: string;
  ok: string;
  reservationSuccess: string;
  contactSuccess: string;
  errorMessage: string;
  popupSuccess: string;
};

type Dictionary = {
  navigation: NavigationLabels;
  footer: FooterLabels;
  whyChooseUs: WhyChooseUsLabels;
  customerFavorites: customerFavoritesLabels;
  faqs: faqsLabels;
  hero: heroLabels;
  metrics: metricsLabels;
  carCardLabels:carCardLabels;
  contactLabels:contactLabels;
  about:aboutLabels;
  contactPage:contactPageLabels;
  popupLabels:popupLabels;
};

const dictionaries: Record<AppLocale, Dictionary> = {
  en: {
    navigation: {
      home: "Home",
      fleet: "Fleet",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      signIn: "Sign In",
    },
    footer: {
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      aboutUs: "About Us",
      fleet: "Fleet",
      blog: "Blog",
      dailyRentals: "Daily Rentals",
      longTerm: "Long Term",
      corporate: "Corporate",
      chauffeurService: "Chauffeur Service",
      trustedPartner: "Your trusted partner for premium car rentals",
    },
    whyChooseUs: {
      title: "Why Choose Us",
      subtitle: "Discover why thousands of customers trust us for premium car rentals",
      fullyInsuredTitle: "Fully Insured",
      fullyInsuredDesc: "Comprehensive coverage and peace of mind on every trip.",
      supportTitle: "24/7 Support",
      supportDesc: "Our team is always available whenever you need assistance.",
      priceTitle: "Transparent Pricing",
      priceDesc: "No hidden fees, clear daily rates, and flexible rental options.",
      bookingTitle: "Fast Booking",
      bookingDesc: "Reserve your car in minutes with a smooth booking process.",
    },
    customerFavorites: {
      title: "Customer Favorites",
      subtitle: "The most loved vehicles by our premium clientele",
      viewAllVehicles: "View All Vehicles",
    },
    faqs: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about renting with DriveXpress",
      faqs: [
        {
          question: "What documents do I need to rent a car?",
          answer: "To rent a car, you need a valid driver's license, a credit card in your name, and a government-issued ID (passport or national ID). International customers may also need an International Driving Permit (IDP) depending on their country of origin."
        },
        {
          question: "What is the minimum age requirement to rent a car?",
          answer: "The minimum age to rent a car is 21 years old. However, drivers under 25 may be subject to a young driver surcharge. Some luxury and high-performance vehicles may have a minimum age requirement of 25 or 30 years."
        },
        {
          question: "Can I add an additional driver to my rental?",
          answer: "Yes, you can add additional drivers to your rental. Each additional driver must meet our age and license requirements and must be present at the time of rental to provide their documentation. Additional driver fees may apply."
        },
        {
          question: "What is your fuel policy?",
          answer: "We operate on a full-to-full fuel policy. You will receive the car with a full tank of fuel and are expected to return it full. If the car is not returned with a full tank, refueling charges will apply at a premium rate."
        },
        {
          question: "What insurance options are available?",
          answer: "We offer comprehensive insurance packages including Collision Damage Waiver (CDW), Theft Protection (TP), and Personal Accident Insurance (PAI). Your rental also includes basic liability coverage. You can choose additional coverage options during the booking process for complete peace of mind."
        },
        {
          question: "Can I cancel or modify my reservation?",
          answer: "Yes, you can cancel or modify your reservation up to 24 hours before your scheduled pickup time for a full refund. Cancellations made less than 24 hours before pickup may be subject to a cancellation fee. Premium and luxury vehicle bookings may have different cancellation policies."
        },
        {
          question: "Do you offer one-way rentals?",
          answer: "Yes, we offer one-way rentals between select locations. A one-way fee may apply depending on the pickup and drop-off locations. You can specify your desired drop-off location during the booking process to see if one-way rental is available."
        },
        {
          question: "What happens if I return the car late?",
          answer: "We offer a 29-minute grace period for returns. After that, you will be charged for an additional hour. If the car is returned more than 2 hours late, you may be charged for an additional day. Please contact us if you need to extend your rental period."
        },
        {
          question: "Are there any mileage restrictions?",
          answer: "Most of our rentals include unlimited mileage for your convenience. However, some specialty and luxury vehicles may have daily mileage limits. Any mileage restrictions will be clearly stated in your rental agreement before booking."
        },
        {
          question: "Can I take the rental car across international borders?",
          answer: "Cross-border travel depends on the specific vehicle and destination country. You must inform us in advance if you plan to cross international borders, and additional insurance and documentation may be required. Some vehicles may not be permitted for cross-border travel."
        }
      ],
    },
    hero: {
      title: "Premium Car Rental",
      bluetitle: "Made Simple",
      subtitle: "Experience luxury and comfort with our premium fleet. Find your perfect ride today.",
    },
    metrics: {
      happyCustomers: "Happy Customers",
      locations: "Locations",
      vehicles: "Premium Cars", 
    },
    carCardLabels:{
      startingAt: "Starting at",
      rentNow: "Rent Now",
      day: "Day",
      rating: "Rating",
      rentals: "Rentals",
      aboutthis: "About this car",
      passengers: "Passengers",
      transmission: "Transmission",
      Fueltype: "Fuel Type",
      luggage: "Luggage",
      performance: "Performance",
      engine: "Engine",
      acceleration: "Acceleration",
      top_speed: "Top Speed",
      features_amenities: "Features & Amenities",
    },
    contactLabels:{
      backToFleet: "Back to Fleet",
      reserveYour: "Reserve your {car}",
      complete_reservation: "Complete your reservation",
      full_name: "Full Name",
      phone_number: "Phone Number",
      drivers_license: "Driver's License",
      rental_details: "Rental Details",
      pickUpDate: "Pick-up Date",
      returnDate: "Return Date",
      specialRequirements: "Special Requirements",
      completeReservation: "Complete Reservation",
      pickupLocation: "Pick-up Location",
      popupContactSuccess: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
      popupContactError: "Something went wrong. Please try again.",
    },
    about: {
      heroBadge: "Established 2010",
      heroTitle: "About NextRental",
      heroSubtitle: "Redefining luxury car rentals with innovation and excellence",
    
      storyBadge: "Our Journey",
      storyTitle: "Our Story",
      storyP1: "Founded in 2010, NextRental emerged from a simple vision: to make premium vehicles accessible to everyone who appreciates quality and performance.",
      storyP2: "What started as a modest fleet of 10 luxury vehicles has grown into a network of over 500 premium cars across 50+ locations worldwide.",
      storyP3: "Today, we're proud to serve over 10,000 satisfied customers annually, delivering exceptional experiences one journey at a time.",
    
      valuesBadge: "Core Values",
      valuesTitle: "What Drives Us",
      valuesSubtitle: "The principles that guide everything we do",
    
      excellenceTitle: "Excellence",
      excellenceDesc: "We maintain the highest standards in vehicle quality and customer service.",
      luxuryTitle: "Luxury",
      luxuryDesc: "Premium vehicles and VIP treatment are our standard.",
      trustTitle: "Trust",
      trustDesc: "Transparency and reliability define every rental experience.",
    
      teamBadge: "Meet the Team",
      teamTitle: "Leadership Team",
      teamSubtitle: "The people driving NextRental forward",
    
      ctaTitle: "Ready to Experience NextRental?",
      ctaSubtitle: "Join thousands of satisfied customers and book your premium vehicle today",
      ctaButton: "Browse Our Fleet",
    },
    contactPage: {
      badge: "24/7 Support Available",
      title: "Get In Touch",
      subtitle: "We're here to help you find the perfect vehicle for your journey",
    
      sendMessage: "Send Message",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      selectSubject: "Select a subject",
    
      subjects: {
        booking: "Booking Inquiry",
        support: "Customer Support",
        partnership: "Partnership Opportunity",
        feedback: "Feedback",
        other: "Other",
      },
    
      contactInfoTitle: "Contact Information",
      contactInfoDesc: "Have questions? Our team is available 24/7 to assist you.",
    
      phoneTitle: "Phone",
      emailTitle: "Email",
      officeTitle: "Office",
      chatTitle: "Live Chat",
    
      phoneSub: "Mon–Sun, 24/7",
      emailSub: "We reply within 24 hours",
      officeSub: "United States",
      chatSub: "Instant support",
    
      followUs: "Follow Us",
      stayConnected: "Stay connected on social media",
    
      locationsBadge: "Locations",
      locationsTitle: "Visit Our Locations",
      locationsSubtitle: "Find a location near you",
      mapTitle: "Interactive Map",
      mapSubtitle: "Available in 5 locations across Albania",    
    },
    popupLabels: {
      successTitle: "Success",
      errorTitle: "Error",
      ok: "OK",
      reservationSuccess: "Reservation confirmed for your vehicle",
      contactSuccess: "Message sent successfully",
      errorMessage: "Something went wrong. Please try again.",
      popupSuccess: `🚗 {car}

      📅 {days} days rental
      💰 Total: {total}

      We will contact you shortly to confirm your booking.`,
    }
  },
  sq: {
    navigation: {
      home: "Kreu",
      fleet: "Flota",
      about: "Rreth Nesh",
      contact: "Kontakt",
      blog: "Blog",
      signIn: "Hyr",
    },
    footer: {
      quickLinks: "Lidhje te Shpejta",
      services: "Sherbime",
      contact: "Kontakt",
      aboutUs: "Rreth Nesh",
      fleet: "Flota",
      blog: "Blog",
      dailyRentals: "Qira Ditore",
      longTerm: "Afatgjate",
      corporate: "Korporative",
      chauffeurService: "Sherbim me Shofer",
      trustedPartner: "Partneri juaj i besuar per makina me qira",
    },
    whyChooseUs: {
      title: "Pse te na zgjidhni ne",
      subtitle: "Zbuloni pse mijera kliente na besojne per makina premium me qira",
      fullyInsuredTitle: "Plotesisht te Siguruara",
      fullyInsuredDesc: "Mbulim i plote dhe qetesi ne cdo udhetim.",
      supportTitle: "Mbeshtejte 24/7",
      supportDesc: "Ekipi yne eshte gjithmone i gatshem kur keni nevoje per ndihme.",
      priceTitle: "Cmim Transparent",
      priceDesc: "Pa tarifa te fshehura, cmime te qarta ditore dhe opsione fleksibel.",
      bookingTitle: "Rezervim i Shpejte",
      bookingDesc: "Rezervoni makinen ne pak minuta me nje proces te thjeshte.",
    },
    customerFavorites: {
      title: "Zgjedhjet e Preferuara të Klientëve",
      subtitle: "Modelet më të kërkuara nga klientët tanë",
      viewAllVehicles: "Shiko të gjitha Makinat",
    },
    faqs: {
      title: "Pyetjet me te shpeshta",
      subtitle: "Përgjigjet për kërkesat e klientëve",
      faqs: [
        {
          question: "Çfarë dokumentesh më duhen për të marrë makinë me qira?",
          answer:
            "Për të marrë makinë me qira ju nevojitet një patentë e vlefshme, një kartë krediti në emrin tuaj dhe një dokument identifikimi (pasaportë ose kartë identiteti). Klientët ndërkombëtarë mund të kenë nevojë edhe për Leje Ndërkombëtare Drejtimi (IDP), në varësi të vendit të origjinës.",
        },
        {
          question: "Cila është mosha minimale për të marrë makinë me qira?",
          answer:
            "Mosha minimale është 21 vjeç. Megjithatë, shoferët nën 25 vjeç mund të kenë një tarifë shtesë. Disa makina luksoze kërkojnë moshë minimale 25 ose 30 vjeç.",
        },
        {
          question: "A mund të shtoj një shofer tjetër?",
          answer:
            "Po, mund të shtoni shoferë shtesë. Çdo shofer duhet të plotësojë kushtet e moshës dhe patentës dhe të jetë i pranishëm gjatë marrjes së makinës. Mund të ketë tarifa shtesë.",
        },
        {
          question: "Cila është politika e karburantit?",
          answer:
            "Ne përdorim politikën full-to-full. Makina dorëzohet me rezervuar të plotë dhe duhet të kthehet po ashtu e mbushur. Në të kundërt aplikohen tarifa shtesë për karburant.",
        },
        {
          question: "Çfarë sigurimesh ofroni?",
          answer:
            "Ofrojmë paketa sigurimi si CDW (mbrojtje nga dëmtimet), TP (mbrojtje nga vjedhja) dhe PAI (sigurim personal). Gjithashtu përfshihet sigurimi bazë. Mund të shtoni mbulim shtesë gjatë rezervimit.",
        },
        {
          question: "A mund të anuloj ose ndryshoj rezervimin?",
          answer:
            "Po, mund të anuloni ose ndryshoni rezervimin deri 24 orë para marrjes për rimbursim të plotë. Pas kësaj mund të aplikohen tarifa anulimi.",
        },
        {
          question: "A ofroni qira njëkahëshe?",
          answer:
            "Po, ofrojmë qira njëkahëshe në disa lokacione. Mund të aplikohet tarifë shtesë në varësi të destinacionit.",
        },
        {
          question: "Çfarë ndodh nëse e kthej makinën me vonesë?",
          answer:
            "Ofrojmë një periudhë faljeje prej 29 minutash. Pas saj aplikohet tarifë orare. Mbi 2 orë vonesë mund të tarifohet si ditë shtesë.",
        },
        {
          question: "A ka kufizime kilometrash?",
          answer:
            "Shumica e makinave kanë kilometrazh të pakufizuar. Disa modele luksoze mund të kenë kufizime ditore, të cilat shënohen në rezervim.",
        },
        {
          question: "A mund të dal jashtë vendit me makinën me qira?",
          answer:
            "Udhëtimi ndërkufitar varet nga makina dhe destinacioni. Duhet të na informoni paraprakisht dhe mund të kërkohen dokumente ose sigurim shtesë.",
        },
      ],
    },
    hero: {
      title: "Makina me Qira",
      bluetitle: "Shpejt dhe Thjesht",
      subtitle: "Zgjidh makinën që të duhet dhe rezervo në pak hapa.",
   },
    metrics: {
      happyCustomers: "Kliente te kenaqur",
      locations: "Lokacione",
      vehicles: "Makina Premium",
    },
    carCardLabels: {
      startingAt: "Nga",
      rentNow: "Rezervo tani",
      day: "Ditë",
      rating: "Vlerësim",
      rentals: "Rezervime",
      aboutthis: "Rreth kësaj makine",
      passengers: "Pasagjerë",
      transmission: "Transmisioni",
      Fueltype: "Lloji i karburantit",
      luggage: "Bagazhi",
      performance: "Performanca",
      engine: "Motori",
      acceleration: "Përshpejtimi",
      top_speed: "Shpejtësia maksimale",
      features_amenities: "Karakteristikat & Pajisjet",
    },
    contactLabels:{
      backToFleet: "Kthehu te flota",
      reserveYour: "Rezervo {car} tuaj",
      complete_reservation: "Përfundo rezervimin",
      full_name: "Emri i plotë",
      phone_number: "Numri i telefonit",
      drivers_license: "Leje drejtimi",
      rental_details: "Detajet e qirasë",
      pickUpDate: "Data e marrjes",
      returnDate: "Data e kthimit",
      specialRequirements: "Kërkesa speciale",
      completeReservation: "Përfundo rezervimin",
      pickupLocation: "Lokacioni i marrjes",
      popupContactSuccess: "Faleminderit! Mesazhi juaj u dërgua me sukses. Do ju kontaktojmë së shpejti.",
      popupContactError: "Diçka shkoi keq. Ju lutem provoni përsëri.",
    },
    about: {
      heroBadge: "Që nga viti 2010",
      heroTitle: "Rreth NextRental",
      heroSubtitle: "Po riformësojmë qiranë e makinave luksoze me cilësi dhe inovacion",
    
      storyBadge: "Rruga Jonë",
      storyTitle: "Historia Jonë",
      storyP1: "E themeluar në vitin 2010, NextRental lindi nga një vizion i thjeshtë: të bëjë makinat premium të aksesueshme për të gjithë.",
      storyP2: "Nga një flotë e vogël prej 10 makinash, sot kemi mbi 500 automjete në më shumë se 50 lokacione.",
      storyP3: "Sot u shërbejmë mbi 10,000 klientëve çdo vit me eksperienca të jashtëzakonshme.",
    
      valuesBadge: "Vlerat Kryesore",
      valuesTitle: "Çfarë Na Udhëheq",
      valuesSubtitle: "Parimet që udhëheqin çdo gjë që bëjmë",
    
      excellenceTitle: "Ekselencë",
      excellenceDesc: "Standardet më të larta në cilësi dhe shërbim.",
      luxuryTitle: "Luks",
      luxuryDesc: "Makina premium dhe trajtim VIP janë standardi ynë.",
      trustTitle: "Besim",
      trustDesc: "Transparencë dhe besueshmëri në çdo shërbim.",
    
      teamBadge: "Njihuni me Ekipin",
      teamTitle: "Ekipi Drejtues",
      teamSubtitle: "Njerëzit që çojnë përpara NextRental",
    
      ctaTitle: "Gati të provoni NextRental?",
      ctaSubtitle: "Bashkohuni me mijëra klientë të kënaqur dhe rezervoni sot",
      ctaButton: "Shiko Makinat",
    },
    contactPage: {
      badge: "Mbështetje 24/7",
      title: "Na Kontaktoni",
      subtitle: "Jemi këtu për t’ju ndihmuar të gjeni makinën perfekte",
    
      sendMessage: "Dërgo Mesazh",
      fullName: "Emri i Plotë",
      email: "Email",
      phone: "Numri i Telefonit",
      subject: "Subjekti",
      message: "Mesazhi",
      selectSubject: "Zgjidhni një opsion",
    
      subjects: {
        booking: "Pyetje për rezervim",
        support: "Mbështetje klienti",
        partnership: "Bashkëpunim",
        feedback: "Feedback",
        other: "Tjetër",
      },
    
      contactInfoTitle: "Informacion Kontakti",
      contactInfoDesc: "Keni pyetje? Ekipi ynë është në dispozicion 24/7.",
    
      phoneTitle: "Telefon",
      emailTitle: "Email",
      officeTitle: "Zyra",
      chatTitle: "Chat Live",
    
      phoneSub: "Çdo ditë, 24/7",
      emailSub: "Përgjigjemi brenda 24 orësh",
      officeSub: "Shqipëri",
      chatSub: "Përgjigje e menjëhershme",
    
      followUs: "Na Ndiqni",
      stayConnected: "Qëndroni të lidhur në rrjetet sociale",
    
      locationsBadge: "Lokacionet",
      locationsTitle: "Vizitoni Lokacionet Tona",
      locationsSubtitle: "Gjeni pikën më të afërt",
      mapTitle: "Harta Interaktive",
      mapSubtitle: "Të pranishëm në 5 lokacione në Shqipëri",    
    },
    popupLabels: {
      successTitle: "Sukses",
      errorTitle: "Gabim",
      ok: "OK",
      reservationSuccess: "Rezervimi u konfirmua me sukses",
      contactSuccess: "Mesazhi u dërgua me sukses",
      errorMessage: "Diçka shkoi keq. Ju lutemi provoni përsëri.",
      popupSuccess: `🚗 {car}

        📅 {days} ditë qira
        💰 Totali: {total}

        Do ju kontaktojmë së shpejti për të konfirmuar rezervimin.`,
    },
  },
  it: {
    navigation: {
      home: "Home",
      fleet: "Flotta",
      about: "Chi Siamo",
      contact: "Contatti",
      blog: "Blog",
      signIn: "Accedi",
    },
    footer: {
      quickLinks: "Link Rapidi",
      services: "Servizi",
      contact: "Contatti",
      aboutUs: "Chi Siamo",
      fleet: "Flotta",
      blog: "Blog",
      dailyRentals: "Noleggi Giornalieri",
      longTerm: "Lungo Termine",
      corporate: "Aziendale",
      chauffeurService: "Servizio Chauffeur",
      trustedPartner: "Il tuo partner affidabile per il noleggio auto premium",
    },
    whyChooseUs: {
      title: "Perche Sceglierci",
      subtitle: "Scopri perche migliaia di clienti si fidano di noi per il noleggio premium",
      fullyInsuredTitle: "Completamente Assicurati",
      fullyInsuredDesc: "Copertura completa e tranquillita in ogni viaggio.",
      supportTitle: "Supporto 24/7",
      supportDesc: "Il nostro team e sempre disponibile quando hai bisogno di aiuto.",
      priceTitle: "Prezzi Trasparenti",
      priceDesc: "Nessun costo nascosto, tariffe chiare e opzioni flessibili.",
      bookingTitle: "Prenotazione Rapida",
      bookingDesc: "Prenota la tua auto in pochi minuti con un processo semplice.",
    },
    customerFavorites: {
      title: "Le Scelte Preferite dei Clienti",
      subtitle: "I modelli più richiesti dai nostri clienti premium",
      viewAllVehicles: "Visualizza Tutti i Veicoli",
    },
    faqs: {
      title: "Perguntas Frequentes",
      subtitle: "Respostas para as perguntas mais frequentes",
      faqs: [
        {
          question: "Quali documenti servono per noleggiare un'auto?",
          answer:
            "Per noleggiare un'auto sono necessari una patente di guida valida, una carta di credito a tuo nome e un documento d'identità (passaporto o carta d'identità). I clienti internazionali potrebbero aver bisogno anche della patente internazionale (IDP).",
        },
        {
          question: "Qual è l'età minima per noleggiare un'auto?",
          answer:
            "L'età minima è 21 anni. I conducenti sotto i 25 anni possono essere soggetti a un supplemento. Alcuni veicoli di lusso richiedono un'età minima di 25 o 30 anni.",
        },
        {
          question: "Posso aggiungere un conducente aggiuntivo?",
          answer:
            "Sì, è possibile aggiungere conducenti aggiuntivi. Devono soddisfare i requisiti di età e patente ed essere presenti al ritiro del veicolo.",
        },
        {
          question: "Qual è la politica sul carburante?",
          answer:
            "Adottiamo la politica full-to-full. L'auto viene consegnata con il serbatoio pieno e deve essere restituita piena, altrimenti verranno applicati costi di rifornimento.",
        },
        {
          question: "Quali opzioni di assicurazione offrite?",
          answer:
            "Offriamo pacchetti assicurativi completi come CDW, TP e PAI. È inclusa anche la copertura di base.",
        },
        {
          question: "Posso cancellare o modificare la prenotazione?",
          answer:
            "Sì, fino a 24 ore prima del ritiro per un rimborso completo. Dopo tale termine possono essere applicate penali.",
        },
        {
          question: "Offrite noleggi di sola andata?",
          answer:
            "Sì, in alcune località. Potrebbe essere applicato un supplemento in base al percorso.",
        },
        {
          question: "Cosa succede se restituisco l'auto in ritardo?",
          answer:
            "È previsto un periodo di tolleranza di 29 minuti. Dopo tale periodo si applicano costi aggiuntivi.",
        },
        {
          question: "Ci sono limiti di chilometraggio?",
          answer:
            "La maggior parte dei noleggi include chilometraggio illimitato, ma alcuni veicoli premium possono avere limiti giornalieri.",
        },
        {
          question: "Posso attraversare i confini con l'auto a noleggio?",
          answer:
            "Dipende dal veicolo e dal paese di destinazione. È necessario avvisarci in anticipo.",
        },
      ],
    },
    hero: {
      title: "Noleggia l’Auto Giusta per Te",
      bluetitle: "Prenotazione veloce",
      subtitle: "Auto affidabili e massima libertà di movimento.",
    },
    metrics: {
      happyCustomers: "Clienti Soddisfatti",
      locations: "Sedi",
      vehicles: "Auto Premium",
    },
    carCardLabels:{
      startingAt: "A partire da",
      rentNow: "Prenota ora",
      day: "Giorno",
      rating: "Valutazione",
      rentals: "Prenotazioni",
      aboutthis: "Informazioni sull’auto",
      passengers: "Passeggeri",
      transmission: "Trasmissione",
      Fueltype: "Tipo di carburante",
      luggage: "Bagagli",
      performance: "Prestazioni",
      engine: "Motore",
      acceleration: "Accelerazione",
      top_speed: "Velocità massima",
      features_amenities: "Caratteristiche e dotazioni",
    },
    contactLabels:{
      backToFleet: "Torna alla flotta",
      reserveYour: "Prenota la tua {car}",
      complete_reservation: "Completa la prenotazione",
      full_name: "Nome completo",
      phone_number: "Numero di telefono",
      drivers_license: "Patente di guida",
      rental_details: "Dettagli del noleggio",
      pickUpDate: "Data di ritiro",
      returnDate: "Data di riconsegna",
      specialRequirements: "Richieste speciali",
      completeReservation: "Completa prenotazione",
      pickupLocation: "Luogo di ritiro",
      popupContactSuccess: "Grazie! Il tuo messaggio è stato inviato con successo. Ti risponderemo a breve.",
      popupContactError: "Qualcosa è andato storto. Riprova.",
    },
    about: {
      heroBadge: "Dal 2010",
      heroTitle: "Chi Siamo",
      heroSubtitle: "Ridefiniamo il noleggio auto di lusso con innovazione",
    
      storyBadge: "Il Nostro Percorso",
      storyTitle: "La Nostra Storia",
      storyP1: "Fondata nel 2010, NextRental nasce per rendere le auto premium accessibili a tutti.",
      storyP2: "Da 10 veicoli siamo cresciuti fino a oltre 500 auto in più di 50 località.",
      storyP3: "Oggi serviamo oltre 10.000 clienti ogni anno.",
    
      valuesBadge: "Valori Fondamentali",
      valuesTitle: "Cosa Ci Guida",
      valuesSubtitle: "I principi che guidano tutto ciò che facciamo",
    
      excellenceTitle: "Eccellenza",
      excellenceDesc: "Standard elevati in qualità e servizio.",
      luxuryTitle: "Lusso",
      luxuryDesc: "Auto premium e trattamento VIP sono la norma.",
      trustTitle: "Fiducia",
      trustDesc: "Trasparenza e affidabilità in ogni servizio.",
    
      teamBadge: "Il Nostro Team",
      teamTitle: "Team Dirigenziale",
      teamSubtitle: "Le persone dietro NextRental",
    
      ctaTitle: "Pronto a provare NextRental?",
      ctaSubtitle: "Prenota oggi la tua auto premium",
      ctaButton: "Scopri le Auto",
    },
    contactPage: {
      badge: "Supporto 24/7",
      title: "Contattaci",
      subtitle: "Siamo qui per aiutarti a trovare l’auto perfetta",
    
      sendMessage: "Invia Messaggio",
      fullName: "Nome Completo",
      email: "Email",
      phone: "Numero di Telefono",
      subject: "Oggetto",
      message: "Messaggio",
      selectSubject: "Seleziona un'opzione",
    
      subjects: {
        booking: "Richiesta prenotazione",
        support: "Assistenza clienti",
        partnership: "Collaborazione",
        feedback: "Feedback",
        other: "Altro",
      },
    
      contactInfoTitle: "Informazioni di Contatto",
      contactInfoDesc: "Hai domande? Il nostro team è disponibile 24/7.",
    
      phoneTitle: "Telefono",
      emailTitle: "Email",
      officeTitle: "Ufficio",
      chatTitle: "Chat Live",
    
      phoneSub: "Lun-Dom, 24/7",
      emailSub: "Rispondiamo entro 24 ore",
      officeSub: "Italia",
      chatSub: "Supporto immediato",
    
      followUs: "Seguici",
      stayConnected: "Rimani connesso sui social",
    
      locationsBadge: "Sedi",
      locationsTitle: "Visita le nostre sedi",
      locationsSubtitle: "Trova una sede vicino a te",
      mapTitle: "Mappa Interattiva",
      mapSubtitle: "Presenti in 5 località in tutta l'Albania",
    },
    popupLabels: {
      successTitle: "Successo",
      errorTitle: "Errore",
      ok: "OK",
      reservationSuccess: "Prenotazione confermata con successo",
      contactSuccess: "Messaggio inviato con successo",
      errorMessage: "Qualcosa è andato storto. Riprova.",
      popupSuccess: `🚗 {car}

        📅 Noleggio di {days} giorni
        💰 Totale: {total}

        Ti contatteremo a breve per confermare la prenotazione.`,
    },
  },
  de: {
    navigation: {
      home: "Startseite",
      fleet: "Flotte",
      about: "Uber Uns",
      contact: "Kontakt",
      blog: "Blog",
      signIn: "Anmelden",
    },
    footer: {
      quickLinks: "Schnelllinks",
      services: "Leistungen",
      contact: "Kontakt",
      aboutUs: "Uber Uns",
      fleet: "Flotte",
      blog: "Blog",
      dailyRentals: "Tagesmiete",
      longTerm: "Langzeitmiete",
      corporate: "Firmenkunden",
      chauffeurService: "Chauffeur Service",
      trustedPartner: "Ihr zuverlassiger Partner fur Premium-Mietwagen",
    },
    whyChooseUs: {
      title: "Warum Uns Wahlen",
      subtitle: "Entdecken Sie, warum uns tausende Kunden fur Premium-Mietwagen vertrauen",
      fullyInsuredTitle: "Voll Versichert",
      fullyInsuredDesc: "Umfassender Schutz und Sicherheit auf jeder Fahrt.",
      supportTitle: "24/7 Support",
      supportDesc: "Unser Team ist jederzeit verfugbar, wenn Sie Hilfe brauchen.",
      priceTitle: "Transparente Preise",
      priceDesc: "Keine versteckten Gebuhren, klare Tagessatze und flexible Optionen.",
      bookingTitle: "Schnelle Buchung",
      bookingDesc: "Reservieren Sie Ihr Auto in wenigen Minuten mit einem einfachen Ablauf.",
    },
    customerFavorites: {
      title: "Die bevorzugten Modelle unserer Kunden",
      subtitle: "Die meistgewählten Fahrzeuge unserer Premium-Kunden",
      viewAllVehicles: "Alle Fahrzeuge anzeigen",
    },
    faqs: {
      title: "Häufig gestellte Fragen",
      subtitle: "Antworten auf die häufigsten Fragen",
      faqs: [
        {
          question: "Welche Dokumente benötige ich für eine Autovermietung?",
          answer:
            "Sie benötigen einen gültigen Führerschein, eine Kreditkarte auf Ihren Namen und einen Ausweis (Reisepass oder Personalausweis). Internationale Kunden benötigen möglicherweise einen internationalen Führerschein (IDP).",
        },
        {
          question: "Wie alt muss ich mindestens sein?",
          answer:
            "Das Mindestalter beträgt 21 Jahre. Fahrer unter 25 Jahren können eine Zusatzgebühr zahlen müssen. Für Premiumfahrzeuge gilt oft ein Mindestalter von 25 oder 30 Jahren.",
        },
        {
          question: "Kann ich einen zusätzlichen Fahrer hinzufügen?",
          answer:
            "Ja, zusätzliche Fahrer können hinzugefügt werden. Sie müssen die Anforderungen erfüllen und bei der Abholung anwesend sein.",
        },
        {
          question: "Wie ist die Tankregelung?",
          answer:
            "Wir verwenden die Full-to-Full-Regelung. Das Fahrzeug wird vollgetankt übergeben und muss vollgetankt zurückgegeben werden.",
        },
        {
          question: "Welche Versicherungen gibt es?",
          answer:
            "Wir bieten CDW, Diebstahlschutz (TP) und Personenversicherung (PAI). Basisversicherung ist enthalten.",
        },
        {
          question: "Kann ich meine Reservierung ändern oder stornieren?",
          answer:
            "Ja, bis 24 Stunden vor Abholung kostenlos. Danach können Gebühren anfallen.",
        },
        {
          question: "Gibt es Einwegmieten?",
          answer:
            "Ja, zwischen bestimmten Standorten. Es können zusätzliche Gebühren anfallen.",
        },
        {
          question: "Was passiert bei verspäteter Rückgabe?",
          answer:
            "Es gibt eine 29-minütige Kulanzzeit. Danach werden zusätzliche Gebühren berechnet.",
        },
        {
          question: "Gibt es Kilometerbegrenzungen?",
          answer:
            "Die meisten Fahrzeuge haben unbegrenzte Kilometer, einige Premiumfahrzeuge jedoch nicht.",
        },
        {
          question: "Darf ich ins Ausland fahren?",
          answer:
            "Grenzübertritte sind abhängig vom Fahrzeug und Land. Bitte vorher informieren.",
        },
      ],
    },
    hero: {
      title: "Ihr Auto. Ihre Entscheidung.",
      bluetitle: "In Sekunden gebucht",
      subtitle: "Moderne Fahrzeuge, sofortige Verfügbarkeit und maximale Freiheit auf jeder Strecke.",
    },
    metrics: {
      happyCustomers: "Zufriedene Kunden",
      locations: "Standorte",
      vehicles: "Premium-Fahrzeuge",
    },
    carCardLabels:{
      startingAt: "Ab",
      rentNow: "Jetzt buchen",
      day: "Tag",
      rating: "Bewertung",
      rentals: "Buchungen",
      aboutthis: "Über dieses Auto",
      passengers: "Passagiere",
      transmission: "Getriebe",
      Fueltype: "Kraftstoffart",
      luggage: "Gepäck",
      performance: "Leistung",
      engine: "Motor",
      acceleration: "Beschleunigung",
      top_speed: "Höchstgeschwindigkeit",
      features_amenities: "Ausstattung & Merkmale",
    },
    contactLabels:{
      backToFleet: "Zur Flotte zurück",
      reserveYour: "{car} reservieren",
      complete_reservation: "Reservierung abschließen",
      full_name: "Vollständiger Name",
      phone_number: "Telefonnummer",
      drivers_license: "Führerschein",
      rental_details: "Mietdetails",
      pickUpDate: "Abholdatum",
      returnDate: "Rückgabedatum",
      specialRequirements: "Besondere Wünsche",
      completeReservation: "Reservierung abschließen",
      pickupLocation: "Abholort",
      popupContactSuccess: "Danke! Ihre Nachricht wurde erfolgreich gesendet. Wir werden Sie in Kürze kontaktieren.",
      popupContactError: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
    },
    about: {
      heroBadge: "Seit 2010",
      heroTitle: "Über NextRental",
      heroSubtitle: "Wir definieren Luxus-Autovermietung neu",
    
      storyBadge: "Unsere Reise",
      storyTitle: "Unsere Geschichte",
      storyP1: "NextRental wurde 2010 gegründet, um Premiumfahrzeuge für alle zugänglich zu machen.",
      storyP2: "Von 10 Autos zu über 500 Fahrzeugen an mehr als 50 Standorten.",
      storyP3: "Heute bedienen wir über 10.000 Kunden jährlich.",
    
      valuesBadge: "Unsere Werte",
      valuesTitle: "Was Uns Antreibt",
      valuesSubtitle: "Die Prinzipien hinter allem, was wir tun",
    
      excellenceTitle: "Exzellenz",
      excellenceDesc: "Höchste Standards in Qualität und Service.",
      luxuryTitle: "Luxus",
      luxuryDesc: "Premiumfahrzeuge und VIP-Service sind Standard.",
      trustTitle: "Vertrauen",
      trustDesc: "Transparenz und Zuverlässigkeit stehen an erster Stelle.",
    
      teamBadge: "Unser Team",
      teamTitle: "Führungsteam",
      teamSubtitle: "Die Menschen hinter NextRental",
    
      ctaTitle: "Bereit für NextRental?",
      ctaSubtitle: "Buchen Sie noch heute Ihr Premiumfahrzeug",
      ctaButton: "Flotte ansehen",
    },
    contactPage: {
      badge: "24/7 Support verfügbar",
      title: "Kontakt aufnehmen",
      subtitle: "Wir helfen Ihnen, das perfekte Fahrzeug zu finden",
    
      sendMessage: "Nachricht senden",
      fullName: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      subject: "Betreff",
      message: "Nachricht",
      selectSubject: "Thema auswählen",
    
      subjects: {
        booking: "Buchungsanfrage",
        support: "Kundensupport",
        partnership: "Partnerschaft",
        feedback: "Feedback",
        other: "Sonstiges",
      },
    
      contactInfoTitle: "Kontaktinformationen",
      contactInfoDesc: "Fragen? Unser Team ist rund um die Uhr erreichbar.",
    
      phoneTitle: "Telefon",
      emailTitle: "E-Mail",
      officeTitle: "Büro",
      chatTitle: "Live-Chat",
    
      phoneSub: "Mo–So, 24/7",
      emailSub: "Antwort innerhalb von 24 Stunden",
      officeSub: "Deutschland",
      chatSub: "Sofortiger Support",
    
      followUs: "Folgen Sie uns",
      stayConnected: "Bleiben Sie in den sozialen Medien verbunden",
    
      locationsBadge: "Standorte",
      locationsTitle: "Unsere Standorte besuchen",
      locationsSubtitle: "Finden Sie einen Standort in Ihrer Nähe",
      mapTitle: "Interaktive Karte",
      mapSubtitle: "Verfügbar an 5 Standorten in ganz Albanien",
    },
    popupLabels: {
      successTitle: "Erfolg",
      errorTitle: "Fehler",
      ok: "OK",
      reservationSuccess: "Reservierung erfolgreich bestätigt",
      contactSuccess: "Nachricht erfolgreich gesendet",
      errorMessage: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
      popupSuccess: `🚗 {car}

        📅 {days} Tage Miete
        💰 Gesamt: {total}

        Wir kontaktieren Sie in Kürze zur Bestätigung Ihrer Buchung.`,
    }
  },
};

export function getDictionary(locale: AppLocale) {
  return dictionaries[locale];
}
