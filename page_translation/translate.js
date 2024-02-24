
window.addEventListener("load", (event) => {
    if(document.documentElement.lang === 'it'){
        translateItalian();
        console.log('drugi');
      } else if(document.documentElement.lang === 'en'){
        console.log("dsadas")
        translateEnglish();
      } else {
        translateCroatian();
      }
  });


  function translateCroatian(){
    let title_1 = document.getElementById('title_1');
    let text_1 = document.getElementById('text_1');
    let title_2 = document.getElementById('title_2');
    let text_2 = document.getElementById('text_2');
    let title_3 = document.getElementById('title_3');
    let text_3 = document.getElementById('text_3');
    let title_4 = document.getElementById('title_4');
    let text_4 = document.getElementById('text_4');
    let language_1 = document.getElementById('cro');
    let language_2 = document.getElementById('eng');
    let language_3 = document.getElementById('ita');

    title_1.innerHTML = 'Villa Marijeta';
    text_1.innerHTML = 'Objekt Villa Marijeta exclusive 5 star villa with 50sqm private pool, 6 bedrooms and playroom nalazi se u Splitu, na oko 19 km od stadiona Park mladeži i 20 km od Dioklecijanove palače. Gostima su na raspolaganju klimatiziran smještaj, besplatan WiFi, vrt i teniski teren. Vila također nudi besplatno privatno parkiralište. U okolici je moguće uživati u raznim aktivnostima poput pješačenja i stolnog tenisa.';

    title_2.innerHTML = 'Doživite vrhunsku uslugu u objektu "Villa Marijeta exclusive."';
    text_2.innerHTML  = 'Vila uključuje 6 spavaćih soba, 6 kupaonica, posteljinu, ručnike, TV sa satelitskim programima, blagovaonicu, potpuno opremljenu kuhinju i balkon s pogledom     naplanine.  U vili su dostupni vanjski bazen, dječje igralište i terasa. Objekt Villa Marijeta exclusive 5 star villa with 50sqm private pool, 6 bedrooms and playroom smješten je 22 km od plaža Ježinac i Kaštelet. Do najbliže zračne luke, Zračne luke Split, ima 32 km.'

    title_3.innerHTML = 'Idealan bijeg od gradske gužve.';
    text_3.innerHTML = 'Idealan bijeg od gradske gužve nalazi se u prekrasnoj vili za najam smještenoj u mirnom ruralnom okruženju. Ova luksuzna vila pruža savršenu oazu mira i privatnosti, omogućavajući gostima da pobjegnu od užurbanosti gradskog života. Okružena prirodom i zelenilom, vila nudi opuštajući ambijent i spektakularne poglede na okolni krajolik. Uživajte u luksuzu udobnosti i prostranih prostorija, uživajte u osvježavajućem bazenu ili istražujte obližnja mjesta bogata prirodnim ljepotama. Bez obzira tražite li bijeg za vikend ili produženi odmor, ova vila pružit će vam savršeno utočište od gradske gužve.';

    title_4.innerHTML = 'Opustite se i uzivajte.';
    text_4.innerHTML = 'Opustite se i uživajte u potpunom bijegu od svakodnevnog stresa u našoj predivnoj vili za najam. Smještena daleko od gradske vreve, ova očaravajuća vila nudi miran i opuštajući boravak u prirodi. Okružena zelenilom i s prekrasnim pogledom na okolni krajolik, ovo je idealno mjesto za bijeg od svakodnevnice. Uživajte u privatnosti i luksuzu dok se opuštate uz bazen ili istražujete obližnje prirodne ljepote. Dobrodošli u vašu oazu mira i uživanja!';
    
    language_1.innerHTML = 'Hrvatski';
    language_2.innerHTML = 'Engleski';
    language_3.innerHTML = 'Talijanski';
}

function translateEnglish(){
    let title_1 = document.getElementById('title_1');
    let text_1 = document.getElementById('text_1');
    let title_2 = document.getElementById('title_2');
    let text_2 = document.getElementById('text_2');
    let title_3 = document.getElementById('title_3');
    let text_3 = document.getElementById('text_3');
    let title_4 = document.getElementById('title_4');
    let text_4 = document.getElementById('text_4');
    let language_1 = document.getElementById('cro');
    let language_2 = document.getElementById('eng');
    let language_3 = document.getElementById('ita');


    title_1.innerHTML = 'Villa Marijeta';
    text_1.innerHTML = 'The Villa Marijeta exclusive 5-star villa with a 50sqm private pool, 6 bedrooms, and a playroom is located in Split, approximately 19 km from the Park mladeži stadium and 20 km from Diocletians Palace. Guests can enjoy air-conditioned accommodation, free WiFi, a garden, and a tennis court. The villa also offers free private parking. Nearby, guests can enjoy various activities such as hiking and table tennis.';

    title_2.innerHTML = 'Experience top-notch service at the "Villa Marijeta exclusive" property.';
    text_2.innerHTML  = 'The villa includes 6 bedrooms, 6 bathrooms, bed linen, towels, satellite TV, dining area, fully equipped kitchen, and a balcony with mountain views. Outdoor pool, childrens playground, and terrace are available at the villa. The Villa Marijeta exclusive 5-star villa with a 50sqm private pool, 6 bedrooms, and playroom is located 22 km from Ježinac and Kaštelet beaches. The nearest airport, Split Airport, is 32 km away.'

    title_3.innerHTML = 'Ideal escape from the city hustle and bustle';
    text_3.innerHTML =  `The ideal escape from the city hustle and bustle can be found in this stunning villa for rent located in a peaceful rural setting. This luxurious villa provides the perfect oasis of peace and privacy, allowing guests to get away from the hustle and bustle of city life. Surrounded by nature and greenery, the villa offers a relaxing ambiance and spectacular views of the surrounding landscape. Enjoy the luxury of comfort and spacious rooms, indulge in the refreshing pool, or explore nearby places rich in natural beauty. Whether you're looking for a weekend getaway or an extended vacation, this villa will provide you with the perfect sanctuary from the city crowds.`;

    title_4.innerHTML = 'Relax and Enjoy.';
    text_4.innerHTML = `Relax and enjoy in complete escape from everyday stress in our beautiful villa for rent. Located far from the city hustle and bustle, this charming villa offers a peaceful and relaxing stay in nature. Surrounded by greenery and with stunning views of the surrounding landscape, this is the perfect place to escape from the everyday routine. Enjoy privacy and luxury while relaxing by the pool or exploring nearby natural beauties. Welcome to your oasis of peace and enjoyment!`;
    
    language_1.innerHTML = 'Croatian';
    language_2.innerHTML = 'English';
    language_3.innerHTML = 'Italian';
}

function translateItalian(){
    let title_1 = document.getElementById('title_1');
    let text_1 = document.getElementById('text_1');
    let title_2 = document.getElementById('title_2');
    let text_2 = document.getElementById('text_2');
    let title_3 = document.getElementById('title_3');
    let text_3 = document.getElementById('text_3');
    let title_4 = document.getElementById('title_4');
    let text_4 = document.getElementById('text_4');
    let language_1 = document.getElementById('cro');
    let language_2 = document.getElementById('eng');
    let language_3 = document.getElementById('ita');


    title_1.innerHTML = 'Villa Marijeta';
    text_1.innerHTML = 'La Villa Marijeta, esclusiva villa a 5 stelle con piscina privata di 50 mq, 6 camere da letto e una sala giochi, si trova a Split, a circa 19 km dallo stadio Park Mladeži e a 20 km dal Palazzo di Diocleziano. Gli ospiti possono godere di alloggi climatizzati, connessione WiFi gratuita, giardino e campo da tennis. La villa offre anche parcheggio privato gratuito. Nelle vicinanze, gli ospiti possono praticare varie attività come escursioni e tennis da tavolo.';

    title_2.innerHTML = 'Vivi un servizio di prima classe presso la struttura esclusiva "Villa Marijeta"';
    text_2.innerHTML  = `La villa include 6 camere da letto, 6 bagni, biancheria da letto, asciugamani, TV satellitare, zona pranzo, cucina completamente attrezzata e un balcone con vista sulle montagne. Piscina all'aperto, parco giochi per bambini e terrazza sono disponibili presso la villa. La villa esclusiva Villa Marijeta a 5 stelle con piscina privata di 50 mq, 6 camere da letto e sala giochi si trova a 22 km dalle spiagge di Ježinac e Kaštelet. L'aeroporto più vicino, l'aeroporto di Spalato, dista 32 km.`

    title_3.innerHTML = 'Ideale fuga dal caos cittadino.';
    text_3.innerHTML =  `L'ideale fuga dal caos cittadino si trova in una splendida villa in affitto situata in un tranquillo ambiente rurale. Questa lussuosa villa offre un perfetto rifugio di pace e privacy, permettendo agli ospiti di sfuggire alla frenesia della vita cittadina. Circondata dalla natura e dal verde, la villa offre un ambiente rilassante e viste spettacolari sul paesaggio circostante. Goditi il lusso del comfort e degli ampi spazi, rilassati nella rinfrescante piscina o esplora le vicine località ricche di bellezze naturali. Che tu stia cercando una fuga per il weekend o una vacanza prolungata, questa villa ti offrirà il perfetto rifugio dal caos cittadino.`;

    title_4.innerHTML = 'Rilassati e Goditi.';
    text_4.innerHTML = `'Rilassati e goditi una fuga completa dallo stress quotidiano nella nostra bellissima villa in affitto. Situata lontano dalla confusione della città, questa affascinante villa offre un soggiorno tranquillo e rilassante nella natura. Circondata dal verde e con una vista mozzafiato del paesaggio circostante, questo è il luogo ideale per sfuggire alla routine quotidiana. Goditi privacy e lusso mentre ti rilassi in piscina o esplori le bellezze naturali nelle vicinanze. Benvenuti nella tua oasi di pace e piacere!`;
    
    language_1.innerHTML = 'Croato';
    language_2.innerHTML = 'Inglese';
    language_3.innerHTML = 'Italiano';
}
