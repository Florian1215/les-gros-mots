  
      /////////////////// flipbook////////////////////////
console.log ( "veau2");






///////////////////////////////////////////////////// click sur le bouton cross link retour page liste des projects////////////////////////////////////

$(".link-cross").on("click", function(e) {
  e.preventDefault(); // prevent the default link behavior

  setTimeout(function() {
    var previousPageURL = document.referrer;
    
    // Check if the previous page URL ends with "/creations"
    if (previousPageURL.endsWith("/creations")) {
      window.history.back();
    } else {
      // Navigate to "/creations"
      window.location.href = "/creations";
    }
  }, 300);
});


