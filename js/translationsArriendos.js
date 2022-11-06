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
        text1:"Apartaments for Rent",
        text2:"Apartaments for Rent in Santa Marta",
        text3:"Boats for rent",
        text4:"Boats and yachts for rent at the Santa Marta International Marina.",
        contact:"Contact us"
    
}
    
  };
  if(window.location.hash){
    if(window.location.hash === "#eng"){
      text1.textContent = language.eng.text1;
      text2.textContent = language.eng.text2;
      text3.textContent = language.eng.text3;
      text4.textContent = language.eng.text4;
      contact.textContent = language.eng.contact;
    }
   
  }

 function sendTranslatedPageTours(){
  
    if(window.location.hash === "#eng"){
      location.href = "Tours.html#eng"
    }
    
    else location.href = "Tours.html#esp"
 

}

function sendTranslatedPageIndex(){
    
      if(window.location.hash === "#eng"){
        location.href = "index.html#eng"
      }
     
      else location.href = "index.html#esp"
   
  
  }
function sendTranslatedPageContacts(){
    if(window.location.hash === "#eng"){
        location.href = "contact-us.html#eng"
      }
     
      else location.href = "contact-us.html#esp"
}