/* Almarìa — traduzioni (italiano, inglese, francese)
   La pagina è scritta in italiano. Questo file sostituisce i testi con la
   traduzione scelta: le chiavi sono i testi italiani così come compaiono nella
   pagina (spazi compresi una volta sola). Se cambi un testo in index.html,
   aggiorna qui la chiave e le due traduzioni. */
(function () {
  "use strict";

  var LANGS = ["it", "en", "fr"];
  var STORE_KEY = "almaria-lang";

  var DICT = {
    en: {
      /* meta */
      "Almarìa — Case Mediterranee · San Nicola L'Arena, Sicilia": "Almarìa — Mediterranean Houses · San Nicola L'Arena, Sicily",
      "Almarìa Case Mediterranee: sei case vista mare sul porto di San Nicola L'Arena (Trabia, Palermo). Pietra, legno, calce e il fascino autentico della Sicilia.": "Almarìa Case Mediterranee: six sea-view houses on the harbour of San Nicola L'Arena (Trabia, Palermo). Stone, wood, lime and the authentic charm of Sicily.",
      "Il fascino autentico della Sicilia in un castello sul mare. Sei case vista mare a San Nicola L'Arena.": "The authentic charm of Sicily in a castle by the sea. Six sea-view houses in San Nicola L'Arena.",

      /* header e menu */
      "Chi siamo": "About us",
      "Le case": "The houses",
      "Servizi": "Services",
      "Galleria": "Gallery",
      "Contatti": "Contact",
      "Richiedi disponibilità": "Check availability",
      "San Nicola L’Arena — Sicilia": "San Nicola L’Arena — Sicily",
      "Prenota": "Book",
      "Almarìa, torna all'inizio": "Almarìa, back to top",
      "Navigazione principale": "Main navigation",
      "Apri il menu": "Open menu",
      "Chiudi il menu": "Close menu",
      "Lingua": "Language",

      /* hero e ricerca */
      "Il fascino autentico della Sicilia in un castello sul mare.": "The authentic charm of Sicily in a castle by the sea.",
      "Scorri verso il basso": "Scroll down",
      "Arrivo": "Check-in",
      "Partenza": "Check-out",
      "1 ospite": "1 guest",
      "2 ospiti": "2 guests",
      "3 ospiti": "3 guests",
      "4 ospiti": "4 guests",
      "5 ospiti": "5 guests",
      "6 ospiti": "6 guests",
      "7 ospiti": "7 guests",
      "8 ospiti": "8 guests",
      "Verifica disponibilità": "Check availability",
      "Data di arrivo": "Check-in date",
      "Data di partenza": "Check-out date",
      "Numero di ospiti": "Number of guests",
      "Scegli le date e verifica la disponibilità": "Choose your dates and check availability",

      /* chi siamo */
      "Ad Almarìa il tempo non scorre: si posa": "At Almarìa time does not flow: it settles",
      "Ad Almarìa il tempo non scorre: si posa lieve sulle pietre calde, si riflette nell’acqua ferma delle ore vuote. Un tempo si lavorava il mare: si scioglievano i nodi delle reti, si contava il sale con mani stanche e serene. Ora, tra quelle stesse pietre, il vento passa lento, e le tende bianche respirano come vele al vento.": "At Almarìa time does not flow: it settles lightly on the warm stones and is mirrored in the still water of idle hours. Once, the sea was work here: knots were loosened from the nets and salt was counted by tired, serene hands. Now, among those same stones, the wind drifts slowly by and the white curtains breathe like sails in the breeze.",
      "Le case di Almarìa non si abitano: si ascoltano. Parlano con voci di calce, vento e salsedine. Ognuna custodisce un respiro, una luce, una memoria d’estate che non finisce. Ogni stanza ha una tenda bianca che danza piano, e ogni tenda nasconde un frammento di mare.": "The houses of Almarìa are not simply lived in: they are listened to. They speak with voices of lime, wind and sea salt. Each one holds a breath, a light, the memory of a summer that never ends. Every room has a white curtain that gently sways, and every curtain hides a fragment of the sea.",
      "Chi arriva qui non cerca solo riposo, ma la distanza esatta tra il cielo e il mare, tra il dentro e il fuori, tra il tempo che era e quello che verrà.": "Those who come here are not only looking for rest, but for the exact distance between sky and sea, between inside and outside, between the time that was and the time to come.",
      "Perché Almarìa non è un luogo da vedere, ma un modo di ricordare ciò che si era dimenticato di sentire.": "Because Almarìa is not a place to see, but a way of remembering what we had forgotten how to feel.",
      "Soggiorno con divano in muratura visto attraverso un arco": "Living room with a built-in sofa seen through an arch",

      /* struttura */
      "La nostra struttura": "Our property",
      "Almarìa. Abitare la storia, respirare la Sicilia.": "Almarìa. Live history, breathe Sicily.",
      "Almarìa nasce all’interno di un luogo speciale: un’ala del": "Almarìa was born inside a very special place: a wing of the",
      "Castello di San Nicola l’Arena": "Castle of San Nicola l’Arena",
      ", antica architettura del XVI secolo affacciata sul suggestivo porticciolo dei pescatori, nel cuore del golfo.": ", a 16th-century building overlooking the charming fishermen’s harbour, in the heart of the gulf.",
      "Alcuni ambienti del castello sono stati recuperati e trasformati in appartamenti, dando vita a un progetto di ospitalità che unisce memoria storica, autenticità e comfort contemporaneo.": "Some rooms of the castle have been restored and turned into apartments, giving life to a hospitality project that brings together historic memory, authenticity and contemporary comfort.",
      "La ristrutturazione valorizza i materiali e la tradizione costruttiva siciliana: pietra locale, legno naturale, gesso, ceramiche artigianali e arredi ispirati alla cultura mediterranea.": "The restoration celebrates Sicilian materials and building traditions: local stone, natural wood, plaster, handmade ceramics and furnishings inspired by Mediterranean culture.",
      "Ogni spazio conserva il fascino del passato, reinterpretato con sensibilità e attenzione alla sostenibilità.": "Every space keeps the charm of the past, reinterpreted with sensitivity and care for sustainability.",
      "Dai balconi privati, lo sguardo si apre sul porto, sulle barche dei pescatori e sul mare. Un paesaggio autentico che invita a rallentare e a vivere il territorio.": "From the private balconies, the view opens onto the harbour, the fishing boats and the sea. An authentic landscape that invites you to slow down and experience the area.",
      "Almarìa è più di un luogo in cui soggiornare: è un modo autentico di abitare la Sicilia, dentro la sua storia e a contatto con il mare.": "Almarìa is more than a place to stay: it is an authentic way of living Sicily, within its history and close to the sea.",

      /* case */
      "Tutte le foto": "All photos",
      "Per 2 / 4 persone": "For 2 / 4 people",
      "Per 2 persone": "For 2 people",
      "Per 4 / 5 persone": "For 4 / 5 people",
      "Per 5 persone": "For 5 people",
      "Camera da letto con balcone privato, vista mare e vasca da bagno": "Bedroom with private balcony, sea view and bathtub",
      "Divano letto nel living": "Sofa bed in the living room",
      "Bagno completo": "Full bathroom",
      "Cucina": "Kitchen",
      "Suite matrimoniale con balcone privato vista mare": "Double suite with private sea-view balcony",
      "Cucina in armadio": "Kitchenette in a cabinet",
      "Camera da letto con letto francese e balcone privato": "Bedroom with a small double bed and private balcony",
      "Camera da letto con vasca": "Bedroom with bathtub",
      "Divano in muratura con posto letto": "Built-in sofa that doubles as a bed",
      "Living e balcone vista mare": "Living room and sea-view balcony",
      "Camera da letto con balcone privato, bagno privato e vasca in camera": "Bedroom with private balcony, private bathroom and in-room bathtub",
      "Seconda camera da letto": "Second bedroom",
      "Casa su due livelli": "House on two levels",
      "Piano terra: living e cucina": "Ground floor: living room and kitchen",
      "Piano superiore: bagno completo e camera singola": "Upper floor: full bathroom and single room",
      "Camera matrimoniale con vasca e vista mare": "Double room with bathtub and sea view",
      "Camera matrimoniale con vista sulla strada di ingresso": "Double room overlooking the entrance road",
      "Ogni casa è dotata di": "Every house has",
      "Cucina super accessoriata con macchinetta del caffè, frigorifero, fornetto elettrico, piastra a induzione e bollitore": "Fully equipped kitchen with coffee machine, fridge, electric oven, induction hob and kettle",
      "Aria condizionata in ogni ambiente, sia zona living che camere da letto": "Air conditioning in every room, both living area and bedrooms",
      "Biancheria da letto, asciugamani e telo mare inclusi": "Bed linen, towels and beach towel included",
      "Kit di cortesia per gli ospiti": "Courtesy kit for guests",
      "Vasca da bagno in camera da letto, per un tocco di relax e romanticismo": "Bathtub in the bedroom, for a touch of relaxation and romance",

      /* servizi */
      "I nostri servizi extra": "Our extra services",
      "Ogni dettaglio è pensato per creare un’esperienza unica e su misura": "Every detail is designed to create a unique, tailor-made experience",
      "Scegli i nostri servizi esclusivi, pensati per rendere il tuo soggiorno perfetto.": "Choose our exclusive services, designed to make your stay perfect.",
      "Colazione": "Breakfast",
      "Prodotti locali freschi serviti ogni mattina.": "Fresh local produce served every morning.",
      "Pranzi e cene private": "Private lunches and dinners",
      "Cena a domicilio per scoprire la cucina siciliana.": "Dinner served at your house to discover Sicilian cuisine.",
      "Escursioni e gite in barca": "Excursions and boat trips",
      "Per scoprire la costa siciliana da nuove prospettive.": "To discover the Sicilian coast from new perspectives.",
      "Charter di pesca": "Fishing charter",
      "Un giorno in mare per gli appassionati della pesca.": "A day at sea for fishing enthusiasts.",
      "Massaggi": "Massages",
      "Momenti di relax e benessere per il corpo e la mente.": "Moments of relaxation and wellbeing for body and mind.",
      "Servizio driver": "Driver service",
      "Trasferimenti privati e tour organizzati.": "Private transfers and organised tours.",
      "Servizio lavanderia": "Laundry service",
      "Per sentirti sempre a casa, anche lontano.": "To always feel at home, even far away.",
      "Richiedi un servizio": "Request a service",
      "Indicaci nel modulo i servizi che desideri: organizziamo tutto per te.": "Tell us in the form which services you would like: we will arrange everything for you.",
      "Colazione con prodotti locali": "Breakfast with local produce",
      "Massaggio rilassante": "Relaxing massage",

      /* galleria */
      "Voci di calce, vento e salsedine": "Voices of lime, wind and sea salt",
      "Galleria fotografica": "Photo gallery",
      "Colazione davanti alla finestra sul mare": "Breakfast in front of the sea-view window",
      "Vasca da bagno in camera": "In-room bathtub",
      "Nicchia con ceramiche siciliane": "Niche with Sicilian ceramics",
      "Camera da letto matrimoniale": "Double bedroom",
      "Lavabo in ceramica e specchio tondo": "Ceramic washbasin and round mirror",
      "Tavolo sul balcone con vista sul porto": "Balcony table overlooking the harbour",
      "Cucina in muratura con piastra a induzione": "Built-in kitchen with induction hob",
      "Limoni e prodotti locali in cucina": "Lemons and local produce in the kitchen",
      "Camera con finestra sul mare": "Room with a window on the sea",

      /* contatti */
      "Dove siamo": "Where we are",
      "Indirizzo": "Address",
      "Telefono": "Phone",
      "Scrivici su WhatsApp": "Message us on WhatsApp",
      "Indicazioni stradali": "Directions",
      "Mostra la mappa": "Show the map",
      "Caricando la mappa accetti i cookie di Google Maps.": "By loading the map you accept Google Maps cookies.",
      "Mappa di Almarìa Case Mediterranee, San Nicola L'Arena": "Map of Almarìa Case Mediterranee, San Nicola L'Arena",

      /* modulo */
      "Richiesta di disponibilità": "Availability request",
      "Scriveteci": "Write to us",
      "Indicateci date, numero di ospiti e la casa che preferite: vi risponderemo al più presto con disponibilità e proposta.": "Tell us your dates, number of guests and your favourite house: we will reply as soon as possible with availability and an offer.",
      "Nome e cognome *": "Full name *",
      "Email *": "Email *",
      "Casa": "House",
      "Nessuna preferenza": "No preference",
      "Casa Agave (2–4 persone)": "Casa Agave (2–4 people)",
      "Casa Mirto (2 persone)": "Casa Mirto (2 people)",
      "Casa Aloe (2–4 persone)": "Casa Aloe (2–4 people)",
      "Casa Timo (4–5 persone)": "Casa Timo (4–5 people)",
      "Casa Ginestra (4–5 persone)": "Casa Ginestra (4–5 people)",
      "Casa Carrubo (5 persone)": "Casa Carrubo (5 people)",
      "Arrivo *": "Check-in *",
      "Partenza *": "Check-out *",
      "Ospiti": "Guests",
      "Più di 5": "More than 5",
      "Servizi extra di interesse": "Extra services you are interested in",
      "Gite in barca": "Boat trips",
      "Driver": "Driver",
      "Lavanderia": "Laundry",
      "Messaggio": "Message",
      "Richieste particolari, orario di arrivo…": "Special requests, arrival time…",
      "Ho letto l'": "I have read the ",
      "informativa privacy": "privacy policy",
      "Invia richiesta": "Send request",
      "La data di partenza deve essere successiva all'arrivo.": "The check-out date must be after the check-in date.",
      "Compila i campi obbligatori evidenziati.": "Please fill in the highlighted required fields.",
      "Grazie! Si sta aprendo il tuo programma di posta con la richiesta pronta da inviare.": "Thank you! Your email app is opening with the request ready to send.",

      /* footer, cookie, whatsapp, lightbox */
      "Link del footer": "Footer links",
      "Preferenze cookie": "Cookie preferences",
      "Un momento": "Just a moment",
      "per i cookie": "about cookies",
      "Il sito non usa cookie propri. Per mostrarti la mappa usiamo Google Maps, che può installare cookie anche di profilazione. Puoi accettarli o continuare senza.": "This site does not use its own cookies. To show you the map we use Google Maps, which may also set profiling cookies. You can accept them or continue without.",
      "Rifiuta": "Reject",
      "Accetta": "Accept",
      "Chiudi e continua senza accettare": "Close and continue without accepting",
      "Scrivici": "Message us",
      "su WhatsApp": "on WhatsApp",
      "Chiudi": "Close",
      "Foto precedente": "Previous photo",
      "Foto successiva": "Next photo",

      /* descrizioni delle foto delle case */
      "Soggiorno luminoso": "Bright living room",
      "Camera matrimoniale": "Double bedroom",
      "Zona pranzo": "Dining area",
      "Suite matrimoniale": "Double suite",
      "Scrittoio in legno": "Wooden writing desk",
      "Bagno con lavabo in ceramica": "Bathroom with ceramic washbasin",
      "Mensola con quadri": "Shelf with pictures",
      "Living con vista mare": "Living room with sea view",
      "Salotto": "Lounge",
      "Nicchia ad arco": "Arched niche",
      "Zona pranzo con vista mare": "Dining area with sea view",
      "Living con divano in muratura": "Living room with built-in sofa",
      "Tavolo da pranzo": "Dining table",
      "Soggiorno con vista mare": "Living room with sea view",
      "Camera con finestra tonda": "Room with a round window",
      "Colazione sul balcone vista mare": "Breakfast on the sea-view balcony",
      "Doccia con finestra sul mare": "Shower with a window on the sea",
      "Sala da pranzo": "Dining room",
      "Vedi le": "See all",
      "foto di": "photos of",
      "foto": "photos"
    },

    fr: {
      /* meta */
      "Almarìa — Case Mediterranee · San Nicola L'Arena, Sicilia": "Almarìa — Maisons méditerranéennes · San Nicola L'Arena, Sicile",
      "Almarìa Case Mediterranee: sei case vista mare sul porto di San Nicola L'Arena (Trabia, Palermo). Pietra, legno, calce e il fascino autentico della Sicilia.": "Almarìa Case Mediterranee : six maisons avec vue sur la mer sur le port de San Nicola L'Arena (Trabia, Palerme). Pierre, bois, chaux et le charme authentique de la Sicile.",
      "Il fascino autentico della Sicilia in un castello sul mare. Sei case vista mare a San Nicola L'Arena.": "Le charme authentique de la Sicile dans un château au bord de la mer. Six maisons avec vue sur la mer à San Nicola L'Arena.",

      /* header e menu */
      "Chi siamo": "Qui sommes-nous",
      "Le case": "Les maisons",
      "Servizi": "Services",
      "Galleria": "Galerie",
      "Contatti": "Contact",
      "Richiedi disponibilità": "Demander la disponibilité",
      "San Nicola L’Arena — Sicilia": "San Nicola L’Arena — Sicile",
      "Prenota": "Réserver",
      "Almarìa, torna all'inizio": "Almarìa, retour en haut",
      "Navigazione principale": "Navigation principale",
      "Apri il menu": "Ouvrir le menu",
      "Chiudi il menu": "Fermer le menu",
      "Lingua": "Langue",

      /* hero e ricerca */
      "Il fascino autentico della Sicilia in un castello sul mare.": "Le charme authentique de la Sicile dans un château au bord de la mer.",
      "Scorri verso il basso": "Faire défiler vers le bas",
      "Arrivo": "Arrivée",
      "Partenza": "Départ",
      "1 ospite": "1 personne",
      "2 ospiti": "2 personnes",
      "3 ospiti": "3 personnes",
      "4 ospiti": "4 personnes",
      "5 ospiti": "5 personnes",
      "6 ospiti": "6 personnes",
      "7 ospiti": "7 personnes",
      "8 ospiti": "8 personnes",
      "Verifica disponibilità": "Vérifier la disponibilité",
      "Data di arrivo": "Date d’arrivée",
      "Data di partenza": "Date de départ",
      "Numero di ospiti": "Nombre de personnes",
      "Scegli le date e verifica la disponibilità": "Choisissez vos dates et vérifiez la disponibilité",

      /* chi siamo */
      "Ad Almarìa il tempo non scorre: si posa": "À Almarìa, le temps ne s’écoule pas : il se pose",
      "Ad Almarìa il tempo non scorre: si posa lieve sulle pietre calde, si riflette nell’acqua ferma delle ore vuote. Un tempo si lavorava il mare: si scioglievano i nodi delle reti, si contava il sale con mani stanche e serene. Ora, tra quelle stesse pietre, il vento passa lento, e le tende bianche respirano come vele al vento.": "À Almarìa, le temps ne s’écoule pas : il se pose doucement sur les pierres chaudes et se reflète dans l’eau immobile des heures creuses. Autrefois, on travaillait la mer : on défaisait les nœuds des filets, on comptait le sel avec des mains fatiguées et sereines. Aujourd’hui, entre ces mêmes pierres, le vent passe lentement et les rideaux blancs respirent comme des voiles au vent.",
      "Le case di Almarìa non si abitano: si ascoltano. Parlano con voci di calce, vento e salsedine. Ognuna custodisce un respiro, una luce, una memoria d’estate che non finisce. Ogni stanza ha una tenda bianca che danza piano, e ogni tenda nasconde un frammento di mare.": "Les maisons d’Almarìa ne s’habitent pas : elles s’écoutent. Elles parlent avec des voix de chaux, de vent et de sel marin. Chacune garde un souffle, une lumière, le souvenir d’un été qui ne finit pas. Chaque chambre a un rideau blanc qui danse doucement, et chaque rideau cache un fragment de mer.",
      "Chi arriva qui non cerca solo riposo, ma la distanza esatta tra il cielo e il mare, tra il dentro e il fuori, tra il tempo che era e quello che verrà.": "Ceux qui arrivent ici ne cherchent pas seulement le repos, mais la distance exacte entre le ciel et la mer, entre le dedans et le dehors, entre le temps passé et celui à venir.",
      "Perché Almarìa non è un luogo da vedere, ma un modo di ricordare ciò che si era dimenticato di sentire.": "Car Almarìa n’est pas un lieu à voir, mais une façon de se souvenir de ce que l’on avait oublié de ressentir.",
      "Soggiorno con divano in muratura visto attraverso un arco": "Séjour avec canapé maçonné vu à travers une arche",

      /* struttura */
      "La nostra struttura": "Notre maison",
      "Almarìa. Abitare la storia, respirare la Sicilia.": "Almarìa. Habiter l’histoire, respirer la Sicile.",
      "Almarìa nasce all’interno di un luogo speciale: un’ala del": "Almarìa est née dans un lieu singulier : une aile du",
      "Castello di San Nicola l’Arena": "Château de San Nicola l’Arena",
      ", antica architettura del XVI secolo affacciata sul suggestivo porticciolo dei pescatori, nel cuore del golfo.": ", édifice du XVIe siècle qui domine le charmant petit port de pêcheurs, au cœur du golfe.",
      "Alcuni ambienti del castello sono stati recuperati e trasformati in appartamenti, dando vita a un progetto di ospitalità che unisce memoria storica, autenticità e comfort contemporaneo.": "Certaines pièces du château ont été restaurées et transformées en appartements, donnant vie à un projet d’hospitalité qui réunit mémoire historique, authenticité et confort contemporain.",
      "La ristrutturazione valorizza i materiali e la tradizione costruttiva siciliana: pietra locale, legno naturale, gesso, ceramiche artigianali e arredi ispirati alla cultura mediterranea.": "La rénovation met en valeur les matériaux et le savoir-faire sicilien : pierre locale, bois naturel, plâtre, céramiques artisanales et mobilier inspiré de la culture méditerranéenne.",
      "Ogni spazio conserva il fascino del passato, reinterpretato con sensibilità e attenzione alla sostenibilità.": "Chaque espace conserve le charme du passé, réinterprété avec sensibilité et dans le respect de l’environnement.",
      "Dai balconi privati, lo sguardo si apre sul porto, sulle barche dei pescatori e sul mare. Un paesaggio autentico che invita a rallentare e a vivere il territorio.": "Depuis les balcons privés, le regard s’ouvre sur le port, les barques des pêcheurs et la mer. Un paysage authentique qui invite à ralentir et à vivre le territoire.",
      "Almarìa è più di un luogo in cui soggiornare: è un modo autentico di abitare la Sicilia, dentro la sua storia e a contatto con il mare.": "Almarìa est plus qu’un lieu de séjour : c’est une façon authentique d’habiter la Sicile, au cœur de son histoire et au contact de la mer.",

      /* case */
      "Tutte le foto": "Toutes les photos",
      "Per 2 / 4 persone": "Pour 2 / 4 personnes",
      "Per 2 persone": "Pour 2 personnes",
      "Per 4 / 5 persone": "Pour 4 / 5 personnes",
      "Per 5 persone": "Pour 5 personnes",
      "Camera da letto con balcone privato, vista mare e vasca da bagno": "Chambre avec balcon privé, vue sur la mer et baignoire",
      "Divano letto nel living": "Canapé-lit dans le séjour",
      "Bagno completo": "Salle de bains complète",
      "Cucina": "Cuisine",
      "Suite matrimoniale con balcone privato vista mare": "Suite double avec balcon privé vue mer",
      "Cucina in armadio": "Kitchenette dans un placard",
      "Camera da letto con letto francese e balcone privato": "Chambre avec petit lit double et balcon privé",
      "Camera da letto con vasca": "Chambre avec baignoire",
      "Divano in muratura con posto letto": "Canapé maçonné convertible en lit",
      "Living e balcone vista mare": "Séjour et balcon vue mer",
      "Camera da letto con balcone privato, bagno privato e vasca in camera": "Chambre avec balcon privé, salle de bains privée et baignoire dans la chambre",
      "Seconda camera da letto": "Deuxième chambre",
      "Casa su due livelli": "Maison sur deux niveaux",
      "Piano terra: living e cucina": "Rez-de-chaussée : séjour et cuisine",
      "Piano superiore: bagno completo e camera singola": "Étage : salle de bains complète et chambre simple",
      "Camera matrimoniale con vasca e vista mare": "Chambre double avec baignoire et vue sur la mer",
      "Camera matrimoniale con vista sulla strada di ingresso": "Chambre double avec vue sur la rue d’entrée",
      "Ogni casa è dotata di": "Chaque maison dispose de",
      "Cucina super accessoriata con macchinetta del caffè, frigorifero, fornetto elettrico, piastra a induzione e bollitore": "Cuisine entièrement équipée avec machine à café, réfrigérateur, four électrique, plaque à induction et bouilloire",
      "Aria condizionata in ogni ambiente, sia zona living che camere da letto": "Climatisation dans chaque pièce, séjour comme chambres",
      "Biancheria da letto, asciugamani e telo mare inclusi": "Linge de lit, serviettes et serviette de plage inclus",
      "Kit di cortesia per gli ospiti": "Kit d’accueil pour les hôtes",
      "Vasca da bagno in camera da letto, per un tocco di relax e romanticismo": "Baignoire dans la chambre, pour une touche de détente et de romantisme",

      /* servizi */
      "I nostri servizi extra": "Nos services supplémentaires",
      "Ogni dettaglio è pensato per creare un’esperienza unica e su misura": "Chaque détail est pensé pour créer une expérience unique et sur mesure",
      "Scegli i nostri servizi esclusivi, pensati per rendere il tuo soggiorno perfetto.": "Choisissez nos services exclusifs, pensés pour rendre votre séjour parfait.",
      "Colazione": "Petit-déjeuner",
      "Prodotti locali freschi serviti ogni mattina.": "Produits locaux frais servis chaque matin.",
      "Pranzi e cene private": "Déjeuners et dîners privés",
      "Cena a domicilio per scoprire la cucina siciliana.": "Dîner servi chez vous pour découvrir la cuisine sicilienne.",
      "Escursioni e gite in barca": "Excursions et sorties en bateau",
      "Per scoprire la costa siciliana da nuove prospettive.": "Pour découvrir la côte sicilienne sous un nouveau jour.",
      "Charter di pesca": "Sortie de pêche",
      "Un giorno in mare per gli appassionati della pesca.": "Une journée en mer pour les passionnés de pêche.",
      "Massaggi": "Massages",
      "Momenti di relax e benessere per il corpo e la mente.": "Des moments de détente et de bien-être pour le corps et l’esprit.",
      "Servizio driver": "Service de chauffeur",
      "Trasferimenti privati e tour organizzati.": "Transferts privés et excursions organisées.",
      "Servizio lavanderia": "Service de blanchisserie",
      "Per sentirti sempre a casa, anche lontano.": "Pour vous sentir toujours chez vous, même loin de chez vous.",
      "Richiedi un servizio": "Demander un service",
      "Indicaci nel modulo i servizi che desideri: organizziamo tutto per te.": "Indiquez-nous dans le formulaire les services souhaités : nous organisons tout pour vous.",
      "Colazione con prodotti locali": "Petit-déjeuner avec des produits locaux",
      "Massaggio rilassante": "Massage relaxant",

      /* galleria */
      "Voci di calce, vento e salsedine": "Voix de chaux, de vent et de sel marin",
      "Galleria fotografica": "Galerie photo",
      "Colazione davanti alla finestra sul mare": "Petit-déjeuner devant la fenêtre sur la mer",
      "Vasca da bagno in camera": "Baignoire dans la chambre",
      "Nicchia con ceramiche siciliane": "Niche avec céramiques siciliennes",
      "Camera da letto matrimoniale": "Chambre double",
      "Lavabo in ceramica e specchio tondo": "Lavabo en céramique et miroir rond",
      "Tavolo sul balcone con vista sul porto": "Table sur le balcon avec vue sur le port",
      "Cucina in muratura con piastra a induzione": "Cuisine maçonnée avec plaque à induction",
      "Limoni e prodotti locali in cucina": "Citrons et produits locaux dans la cuisine",
      "Camera con finestra sul mare": "Chambre avec fenêtre sur la mer",

      /* contatti */
      "Dove siamo": "Où nous trouver",
      "Indirizzo": "Adresse",
      "Telefono": "Téléphone",
      "Scrivici su WhatsApp": "Écrivez-nous sur WhatsApp",
      "Indicazioni stradali": "Itinéraire",
      "Mostra la mappa": "Afficher la carte",
      "Caricando la mappa accetti i cookie di Google Maps.": "En chargeant la carte, vous acceptez les cookies de Google Maps.",
      "Mappa di Almarìa Case Mediterranee, San Nicola L'Arena": "Carte d’Almarìa Case Mediterranee, San Nicola L'Arena",

      /* modulo */
      "Richiesta di disponibilità": "Demande de disponibilité",
      "Scriveteci": "Écrivez-nous",
      "Indicateci date, numero di ospiti e la casa che preferite: vi risponderemo al più presto con disponibilità e proposta.": "Indiquez-nous vos dates, le nombre de personnes et la maison que vous préférez : nous vous répondrons au plus vite avec nos disponibilités et une proposition.",
      "Nome e cognome *": "Nom et prénom *",
      "Email *": "E-mail *",
      "Casa": "Maison",
      "Nessuna preferenza": "Pas de préférence",
      "Casa Agave (2–4 persone)": "Casa Agave (2–4 personnes)",
      "Casa Mirto (2 persone)": "Casa Mirto (2 personnes)",
      "Casa Aloe (2–4 persone)": "Casa Aloe (2–4 personnes)",
      "Casa Timo (4–5 persone)": "Casa Timo (4–5 personnes)",
      "Casa Ginestra (4–5 persone)": "Casa Ginestra (4–5 personnes)",
      "Casa Carrubo (5 persone)": "Casa Carrubo (5 personnes)",
      "Arrivo *": "Arrivée *",
      "Partenza *": "Départ *",
      "Ospiti": "Personnes",
      "Più di 5": "Plus de 5",
      "Servizi extra di interesse": "Services supplémentaires souhaités",
      "Gite in barca": "Sorties en bateau",
      "Driver": "Chauffeur",
      "Lavanderia": "Blanchisserie",
      "Messaggio": "Message",
      "Richieste particolari, orario di arrivo…": "Demandes particulières, heure d’arrivée…",
      "Ho letto l'": "J’ai lu la ",
      "informativa privacy": "politique de confidentialité",
      "Invia richiesta": "Envoyer la demande",
      "La data di partenza deve essere successiva all'arrivo.": "La date de départ doit être postérieure à la date d’arrivée.",
      "Compila i campi obbligatori evidenziati.": "Veuillez remplir les champs obligatoires signalés.",
      "Grazie! Si sta aprendo il tuo programma di posta con la richiesta pronta da inviare.": "Merci ! Votre messagerie s’ouvre avec la demande prête à être envoyée.",

      /* footer, cookie, whatsapp, lightbox */
      "Link del footer": "Liens du pied de page",
      "Preferenze cookie": "Préférences cookies",
      "Un momento": "Un instant",
      "per i cookie": "pour les cookies",
      "Il sito non usa cookie propri. Per mostrarti la mappa usiamo Google Maps, che può installare cookie anche di profilazione. Puoi accettarli o continuare senza.": "Ce site n’utilise pas ses propres cookies. Pour afficher la carte, nous utilisons Google Maps, qui peut aussi installer des cookies de profilage. Vous pouvez les accepter ou continuer sans.",
      "Rifiuta": "Refuser",
      "Accetta": "Accepter",
      "Chiudi e continua senza accettare": "Fermer et continuer sans accepter",
      "Scrivici": "Écrivez-nous",
      "su WhatsApp": "sur WhatsApp",
      "Chiudi": "Fermer",
      "Foto precedente": "Photo précédente",
      "Foto successiva": "Photo suivante",

      /* descrizioni delle foto delle case */
      "Soggiorno luminoso": "Séjour lumineux",
      "Camera matrimoniale": "Chambre double",
      "Zona pranzo": "Coin repas",
      "Suite matrimoniale": "Suite double",
      "Scrittoio in legno": "Secrétaire en bois",
      "Bagno con lavabo in ceramica": "Salle de bains avec lavabo en céramique",
      "Mensola con quadri": "Étagère avec tableaux",
      "Living con vista mare": "Séjour avec vue sur la mer",
      "Salotto": "Salon",
      "Nicchia ad arco": "Niche en arc",
      "Zona pranzo con vista mare": "Coin repas avec vue sur la mer",
      "Living con divano in muratura": "Séjour avec canapé maçonné",
      "Tavolo da pranzo": "Table à manger",
      "Soggiorno con vista mare": "Séjour avec vue sur la mer",
      "Camera con finestra tonda": "Chambre avec fenêtre ronde",
      "Colazione sul balcone vista mare": "Petit-déjeuner sur le balcon vue mer",
      "Doccia con finestra sul mare": "Douche avec fenêtre sur la mer",
      "Sala da pranzo": "Salle à manger",
      "Vedi le": "Voir les",
      "foto di": "photos de",
      "foto": "photos"
    }
  };

  /* Testi composti: "Casa Agave — Camera matrimoniale", "25 foto",
     "Vedi le 25 foto di Casa Agave" */
  function translate(text, lang) {
    if (lang === "it" || !text) return text;
    var d = DICT[lang];
    if (Object.prototype.hasOwnProperty.call(d, text)) return d[text];
    var m;
    if ((m = text.match(/^(Casa \S+) — (.+)$/)) && d[m[2]]) return m[1] + " — " + d[m[2]];
    if ((m = text.match(/^(\d+) foto$/))) return m[1] + " " + d["foto"];
    if ((m = text.match(/^Vedi le (\d+) foto di (.+)$/))) return d["Vedi le"] + " " + m[1] + " " + d["foto di"] + " " + m[2];
    return text;
  }

  var ATTRS = ["aria-label", "alt", "placeholder", "title", "data-placeholder"];
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1 };
  var textNodes = null;
  var attrNodes = null;
  var metas = null;

  // memorizza una volta sola i testi italiani originali
  function collect() {
    textNodes = [];
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentElement;
        if (!p || SKIP[p.tagName] || p.closest("svg, [data-no-translate]")) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var n;
    while ((n = walker.nextNode())) {
      var raw = n.nodeValue;
      var key = raw.replace(/\s+/g, " ").trim();
      textNodes.push({
        node: n,
        key: key,
        lead: raw.match(/^\s*/)[0] ? " " : "",
        trail: raw.match(/\s*$/)[0] ? " " : "",
        raw: raw
      });
    }
    attrNodes = [];
    document.querySelectorAll(ATTRS.map(function (a) { return "[" + a + "]"; }).join(",")).forEach(function (el) {
      if (el.closest("[data-no-translate]")) return;
      ATTRS.forEach(function (a) {
        var v = el.getAttribute(a);
        if (v && v.trim()) attrNodes.push({ el: el, attr: a, key: v.trim() });
      });
    });
    metas = [];
    metas.push({ get: function () { return document.title; }, set: function (v) { document.title = v; } });
    ['meta[name="description"]', 'meta[property="og:title"]', 'meta[property="og:description"]'].forEach(function (sel) {
      var m = document.querySelector(sel);
      if (m) metas.push({ get: function () { return m.getAttribute("content"); }, set: function (v) { m.setAttribute("content", v); } });
    });
    metas.forEach(function (m) { m.key = m.get(); });
  }

  var current = "it";

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "it";
    if (!textNodes) collect();
    current = lang;
    document.documentElement.lang = lang;
    textNodes.forEach(function (t) {
      if (lang === "it") { t.node.nodeValue = t.raw; return; }
      var tr = translate(t.key, lang);
      t.node.nodeValue = tr === t.key ? t.raw : t.lead + tr + t.trail;
    });
    attrNodes.forEach(function (a) { a.el.setAttribute(a.attr, translate(a.key, lang)); });
    metas.forEach(function (m) { m.set(translate(m.key, lang)); });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.dispatchEvent(new CustomEvent("almaria:lang", { detail: { lang: lang } }));
  }

  function initialLang() {
    var q = (location.search.match(/[?&]lang=(it|en|fr)\b/) || [])[1];
    if (q) return q;
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (LANGS.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "it";
    nav = nav.slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) >= 0 ? nav : "it";
  }

  // usato da script.js per i messaggi creati al momento
  window.almariaT = function (text) { return translate(text, current); };
  window.almariaLang = function () { return current; };

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]");
    if (!b) return;
    var lang = b.getAttribute("data-lang");
    try { localStorage.setItem(STORE_KEY, lang); } catch (err) {}
    apply(lang);
  });

  var start = initialLang();
  if (start !== "it") apply(start);
  else document.querySelectorAll('[data-lang="it"]').forEach(function (b) { b.classList.add("is-active"); b.setAttribute("aria-pressed", "true"); });
})();
