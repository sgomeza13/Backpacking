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
    texto1:"Enjoy the best Tours with our agency",
    texto2:"Explore",
    texto3:"A team of professionals at your disposal",
    texto4:"Trust",
    texto5:" In our Experience",
    texto6:"Plan your next trip with us",
    texto7:"Choose",
    texto8:" Your Tour",
    texto9:"More Tours",
    texto10:"Discover new horizons",
    texto11:"about us",
    texto12:"Years of experience",
    texto13:"Mission",
    texto14:"Backpacking Mochileando is committed to offering our clients the best in value and quality travel. We are passionate about traveling and sharing the wonders of the world with you.",
    texto15:"We are proud to offer excellent quality and value for money tours that give you the opportunity to experience your chosen destination in an authentic and exciting way.",
    texto16:"Our mission is to offer the best tour experience and become a one-stop shop for all travel services available in the industry.",
    texto17:"Meet us",
    texto18:"Founder and Owner",
    texto19:"Great Adventures Await for Your",
    texto20:"Our agency offers travelers a variety of trips and excursions with destinations all over the world. Browse our website to find the trip of your dreams.",
    texto21:"Book a tour now",
    texto22:"Gallery",
    contact:"Contact us",
    readmore:"Read more",
    cat1:"Tayrona Natural Park",
    home:"Home"
    
}
    
  };
  if(window.location.hash){
    if(window.location.hash === "#eng"){
      texto1.textContent = language.eng.texto1;
      texto2.textContent = language.eng.texto2;
      texto3.textContent = language.eng.texto3;
      texto4.textContent = language.eng.texto4;
      texto5.textContent = language.eng.texto5;
      texto6.textContent = language.eng.texto6;
      texto7.textContent = language.eng.texto7;
      texto8.textContent = language.eng.texto8;
      texto9.textContent = language.eng.texto9;
      texto10.textContent = language.eng.texto10;
      texto11.textContent = language.eng.texto11;
      texto12.textContent = language.eng.texto12;
      texto13.textContent = language.eng.texto13;
      texto14.textContent = language.eng.texto14;
      texto15.textContent = language.eng.texto15;
      texto16.textContent = language.eng.texto16;
      texto17.textContent = language.eng.texto17;
      texto18.textContent = language.eng.texto18;
      texto19.textContent = language.eng.texto19;
      texto20.textContent = language.eng.texto20;
      texto21.textContent = language.eng.texto21;
      texto22.textContent = language.eng.texto22;
      contact1.textContent = language.eng.contact;
      contact2.textContent = language.eng.contact;
      contact3.textContent = language.eng.contact;
      contact4.textContent = language.eng.contact;
      contact5.textContent = language.eng.contact;
      contact6.textContent = language.eng.contact;
      contact7.textContent = language.eng.contact;
      read1.textContent = language.eng.readmore;
      read2.textContent = language.eng.readmore;
      read3.textContent = language.eng.readmore;
      cat1.textContent = language.eng.cat1;
      home.textContent = language.eng.home;
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