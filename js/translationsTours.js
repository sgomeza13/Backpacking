function reloadPage() {
    setTimeout(function () {
      location.reload();
    }, 100);
  }
  

  var language = {
    esp: {
      welcome:"Conoce Nuestros Toures"
    },
    eng:{
    tayrona:"Tayrona Park Tours",
    text1:"Cape San Juan - Tayrona Park",
    text2:"Cape San Juan del Guia is a special destination for trekking and nature lovers.",
    text3:"Cristal Beach",
    text4:"- Tayrona Park",
    text5:"One of the best beaches in the Tayrona National Park, ideal for snorkeling lovers 🤿 since in its waters you will find many corals that will make you live an unforgettable underwater experience. Because it is a protected area only a small group of visitors can enter, if you are looking for peace and tranquility this is the ideal destination for you!",
    text6:"Concha Bay",
    text7:"- Tayrona Park",
    text8:"The Concha Bay tour allows us to visit a beautiful bay of the Tayrona Park 30 minutes from Santa Marta where you can enjoy an extensive beach of thick golden sand and a deep blue sea. This tour is ideal to get in touch with nature by snorkeling and relaxing with the peaceful sound of the waves.",
    text9:"Direct Boat to Tayrona",
    text10:"Sierra Minca Tours",
    text11:"In this tour you will find cultural biodiversity and experience different microclimates, reaching the ecological capital of the world Minca. You will take uncovered indigenous trails until you reach the Ear of the World, you can bathe in crystal clear waters and experience beautiful views at 1400mts above sea level.",
    text12:"On this tour you will visit the San Rafel coffee and cocoa farm, the refreshing Marinka waterfall and finally Sierra Minca where you will enjoy the most famous hostel in Santa Marta.",
    text13:"River and Sea",
    text14:"La Tagua is a village belonging to Minca in the Sierra Nevada, an ideal place to enjoy the birds singing and the waterfalls that descend from the mountains of the Sierra. In this tour we will also visit one of the most famous towns of Santa Marta, Taganga, known for its beaches of crystal clear water where Playa Grande stands out, place where we will finish the Pasadia of our tour.",
    text15:"Minca is a small town located in the foothills of the Sierra Nevada de Santa Marta and lost in the lush vegetation, with an exceptional climate thanks to its altitude of 650 meters above sea level and 14 kilometers away from the oldest city in Colombia, Santa Marta.",
    text17:"Minca is a small coffee village nestled in the mountains of the Sierra Nevada de Santa Marta, with approximately 600 inhabitants and is located about 660 meters above sea level. It is located about 14 km from Santa Marta through the mountain, there we will visit Pozo Azul. Then we will visit Taganga, a fishing village, an iconic town of the city of Santa Marta, where we will have our picnic on the beach.",
    text18:"Guajira Tours",
    text19:"Palomino (River and Sea)",
    text20:"Palomino is an area that offers tourism a varied and exotic wealth at a short distance from the city. It has beaches full of life, and a lot of information about the Wayúu indigenous culture and an immense amount of flora and fauna that are protected. ",
    text21:"A 3 days and 2 nights tour where you will get to know the paradisiacal Guajira Peninsula, the northernmost point of South America. Its wonderful landscapes, culture and natural scenery make this place one of the most spectacular attractions in the world.",
    text22:"A tour of 2 days and 1 night where you will receive the first day a panoramic tour of Uribia and Rioacha. You will visit the Auyama desert, San Martin or Puerto Bolivar until you reach Cabo de la Vela. You will visit the Pilon de Azucar, the lighthouse and spend the night in a Wayuu lodge",
    text23:"Buritica - Valencia Creek",
    text24:"You will walk through an ecological trail where you can see a great variety of fauna and flora, until you reach the Natural Reserve where you can see a series of high waterfalls. Then you will be transported to the mouth of the Buritaca River where you will find a beautiful eco-system. ",
    home:"Home",
    contact:"Contact Us",
    comprar: "Buy this tour"
}
    
  };
  if(window.location.hash){
    if(window.location.hash === "#eng"){
      text1.textContent = language.eng.text1;
      tayrona.textContent = language.eng.tayrona
      text2.textContent = language.eng.text2;
      text3.textContent = language.eng.text3;
      text4.textContent = language.eng.text4;
      text5.textContent = language.eng.text5;
      text6.textContent = language.eng.text6;
      text7.textContent = language.eng.text7;
      text8.textContent = language.eng.text8;
      text9.textContent = language.eng.text9;
      text10.textContent = language.eng.text10;
      text11.textContent = language.eng.text11;
      text12.textContent = language.eng.text12;
      text13.textContent = language.eng.text13;
      text14.textContent = language.eng.text14;
      text15.textContent = language.eng.text15;
      text16.textContent = language.eng.text13;
      text17.textContent = language.eng.text17;
      text18.textContent = language.eng.text18;
      text19.textContent = language.eng.text19;
      text20.textContent = language.eng.text20;
      text21.textContent = language.eng.text21;
      text22.textContent = language.eng.text22;
      text23.textContent = language.eng.text23;
      text24.textContent = language.eng.text24;
      comprar1.textContent = language.eng.comprar;
      comprar2.textContent = language.eng.comprar;
      comprar3.textContent = language.eng.comprar;
      comprar4.textContent = language.eng.comprar;
      comprar5.textContent = language.eng.comprar;
      comprar6.textContent = language.eng.comprar;
      comprar7.textContent = language.eng.comprar;
      comprar8.textContent = language.eng.comprar;
      comprar9.textContent = language.eng.comprar;
      comprar10.textContent = language.eng.comprar;
      comprar11.textContent = language.eng.comprar;
      comprar12.textContent = language.eng.comprar;
      comprar13.textContent = language.eng.comprar;
      home.textContent = language.eng.home;
      contact.textContent = language.eng.contact;
    }
   
  }

 function sendTranslatedPageTours(){
  
    if(window.location.hash === "#eng"){
      location.href = "index.html#eng"
    }
    
    else location.href = "index.html#esp"
 

}

function sendTranslatedPageIndex(){
    
      if(window.location.hash === "#eng"){
        location.href = "Tours.html#eng"
      }
     
      else location.href = "Tours.html#esp"
   
  
  }
  function sendTranslatedPageContact(){
    
    if(window.location.hash === "#eng"){
      location.href = "contact-us.html#eng"
    }
   
    else location.href = "contact-us.html#esp"
 

}
function sendTranslatedPageArriendos(){
  if(window.location.hash === "#eng"){
      location.href = "arriendos.html#eng"
    }
   
    else location.href = "arriendos.html#esp"
}

function sendWhatsapp(n){
  const linksMobile = ["https://wa.me/p/5497077100382856/573107080435"];
  const linksDesktop = ["https://api.whatsapp.com/send?phone=573107080435&text=%20Estoy%20interesado%20en%20el%20Tour%20de%20CABO%20SAN%20JUAN%20-%20PNN%20TAYRONA"];
  var dispositivo = navigator.userAgent;
  var  regexp = /android|iphone|kindle|ipad/i;
    if(regexp.test(dispositivo)){
      window.open(linksMobile[n]);
    }
    else{
      window.open(linksDesktop[n]);
    }
}