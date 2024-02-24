
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
    let language_1 = document.getElementById('cro');
    let language_2 = document.getElementById('eng');
    let language_3 = document.getElementById('ita');

    title_1.innerHTML = 'Villa Marijeta';
    text_1.innerHTML = 'Objekt Villa Marijeta exclusive 5 star villa with 50sqm private pool, 6 bedrooms and playroom nalazi se u Splitu, na oko 19 km od stadiona Park mladeži i 20 km od Dioklecijanove palače. Gostima su na raspolaganju klimatiziran smještaj, besplatan WiFi, vrt i teniski teren. Vila također nudi besplatno privatno parkiralište. U okolici je moguće uživati u raznim aktivnostima poput pješačenja i stolnog tenisa.';

    title_2.innerHTML = 'Doživite vrhunsku uslugu u objektu "Villa Marijeta exclusive."';
    text_2.innerHTML  = 'Vila uključuje 6 spavaćih soba, 6 kupaonica, posteljinu, ručnike, TV sa satelitskim programima, blagovaonicu, potpuno opremljenu kuhinju i balkon s pogledom     naplanine.  U vili su dostupni vanjski bazen, dječje igralište i terasa. Objekt Villa Marijeta exclusive 5 star villa with 50sqm private pool, 6 bedrooms and playroom smješten je 22 km od plaža Ježinac i Kaštelet. Do najbliže zračne luke, Zračne luke Split, ima 32 km.'
    
    language_1.innerHTML = 'Hrvatski';
    language_2.innerHTML = 'Engleski';
    language_3.innerHTML = 'Talijanski';
}

function translateEnglish(){
    let title_1 = document.getElementById('title_1');
    let text_1 = document.getElementById('text_1');
    let title_2 = document.getElementById('title_2');
    let text_2 = document.getElementById('text_2');
    let language_1 = document.getElementById('cro');
    let language_2 = document.getElementById('eng');
    let language_3 = document.getElementById('ita');


    title_1.innerHTML = 'Villa Marijeta';
    text_1.innerHTML = 'The Villa Marijeta exclusive 5-star villa with a 50sqm private pool, 6 bedrooms, and a playroom is located in Split, approximately 19 km from the Park mladeži stadium and 20 km from Diocletians Palace. Guests can enjoy air-conditioned accommodation, free WiFi, a garden, and a tennis court. The villa also offers free private parking. Nearby, guests can enjoy various activities such as hiking and table tennis.';

    title_2.innerHTML = 'Experience top-notch service at the "Villa Marijeta exclusive" property.';
    text_2.innerHTML  = 'The villa includes 6 bedrooms, 6 bathrooms, bed linen, towels, satellite TV, dining area, fully equipped kitchen, and a balcony with mountain views. Outdoor pool, childrens playground, and terrace are available at the villa. The Villa Marijeta exclusive 5-star villa with a 50sqm private pool, 6 bedrooms, and playroom is located 22 km from Ježinac and Kaštelet beaches. The nearest airport, Split Airport, is 32 km away.'
    
    language_1.innerHTML = 'Croatian';
    language_2.innerHTML = 'English';
    language_3.innerHTML = 'Italian';
}

function translateItalian(){
    let title_1 = document.getElementById('title_1');
    let text_1 = document.getElementById('text_1');
    let title_2 = document.getElementById('title_2');
    let text_2 = document.getElementById('text_2');
    let language_1 = document.getElementById('cro');
    let language_2 = document.getElementById('eng');
    let language_3 = document.getElementById('ita');


    title_1.innerHTML = 'Villa Marijeta';
    text_1.innerHTML = 'La Villa Marijeta, esclusiva villa a 5 stelle con piscina privata di 50 mq, 6 camere da letto e una sala giochi, si trova a Split, a circa 19 km dallo stadio Park Mladeži e a 20 km dal Palazzo di Diocleziano. Gli ospiti possono godere di alloggi climatizzati, connessione WiFi gratuita, giardino e campo da tennis. La villa offre anche parcheggio privato gratuito. Nelle vicinanze, gli ospiti possono praticare varie attività come escursioni e tennis da tavolo.';

    title_2.innerHTML = 'Vivi un servizio di prima classe presso la struttura esclusiva "Villa Marijeta"';
    text_2.innerHTML  = `La villa include 6 camere da letto, 6 bagni, biancheria da letto, asciugamani, TV satellitare, zona pranzo, cucina completamente attrezzata e un balcone con vista sulle montagne. Piscina all'aperto, parco giochi per bambini e terrazza sono disponibili presso la villa. La villa esclusiva Villa Marijeta a 5 stelle con piscina privata di 50 mq, 6 camere da letto e sala giochi si trova a 22 km dalle spiagge di Ježinac e Kaštelet. L'aeroporto più vicino, l'aeroporto di Spalato, dista 32 km.`
    
    language_1.innerHTML = 'Croato';
    language_2.innerHTML = 'Inglese';
    language_3.innerHTML = 'Italiano';
}
