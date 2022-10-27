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
    home:"Home",
    contact:"Contact us"
    
}
    
  };
  if(window.location.hash){
    if(window.location.hash === "#eng"){
      home.textContent = language.eng.home;
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