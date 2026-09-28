/*

var lastScrollTop = 0;
var projectDetail = document.querySelector('.project-detail');
 
window.addEventListener("scroll", function() {
	 console.log('scroll');
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var scrollDirection = (scrollTop > lastScrollTop) ? "down" : "up";

  if (scrollDirection === "down") {
    // Scroll vers le bas : appliquer la transformation vers le haut de -100px
    projectDetail.style.transition = "transform 0.5s";
    projectDetail.style.transform = "translateY(-100px)";
  } else {
    // Scroll vers le haut : remettre la transformation à 0px
    projectDetail.style.transition = "transform 0.5s";
    projectDetail.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});
var MlastScrollTop = 0;
var projectDetailMob = document.querySelector('.project-detail-mobile');
 
window.addEventListener("scroll", function() {
	 console.log('scroll');
  var MscrollTop = window.scrollY || document.documentElement.scrollTop;
  var MscrollDirection = (MscrollTop > MlastScrollTop) ? "down" : "up";

  if (MscrollDirection === "down") {
    // Scroll vers le bas : appliquer la transformation vers le haut de -100px
    projectDetailMob.style.transition = "transform 0.5s";
    projectDetailMob.style.transform = "translateY(-100px)";
  } else {
    // Scroll vers le haut : remettre la transformation à 0px
    projectDetailMob.style.transition = "transform 0.5s";
    projectDetailMob.style.transform = "translateY(0)";
  }

  MlastScrollTop = MscrollTop;
});
*/

// lancement

//Script de slider de Novembre 2024
let scrollListener = null; // Variable pour stocker la référence de l'écouteur de scroll

function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;
  adjust = windowWidth / 11.7; 
  console.log("adjust-24", adjust);

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass);
    var horizontalSection = document.querySelector(horizontalSectionClass);
    var elementWrapperTop = horizontalSection.offsetTop;
    const windowHeight = window.innerHeight;
    const elementWrapperHeight = elementWrapper.getBoundingClientRect().height;
    const stickyTopPosition = (windowHeight - elementWrapperHeight) / 2;
    const stickyElement = horizontalSection.querySelector('.sticky-wrap');
    stickyElement.style.top = stickyTopPosition + 'px';

    var elements = elementWrapper.querySelectorAll('.img-slide');
    var totalWidth = 0;
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var computedStyle = window.getComputedStyle(element);
      var marginLeft = parseFloat(computedStyle.marginLeft);
      var marginRight = parseFloat(computedStyle.marginRight);
      var elementWidth = element.offsetWidth + marginLeft + marginRight;
      totalWidth += elementWidth;
    }

    var stickyLarge = stickyElement.clientWidth;
    var wrapperLarge = totalWidth;
    var overflowDuWrapper = wrapperLarge - stickyLarge;
    var scrollLength = overflowDuWrapper + adjust;
    wrapperLarge = wrapperLarge + adjust;
    horizontalSection.style.height = wrapperLarge + "px";
    let lastScrollTop = 0;

    // Fonction de scroll horizontale
    function updateHorizontalScroll() {
      var scrollTop = window.pageYOffset.toFixed();
      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop + scrollLength)) {
        if (lastScrollTop < elementWrapperTop) {
          elementWrapper.dispatchEvent(new CustomEvent('horizontal-scroll-start'));
        }
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
        //console.log("translate", "translateX(-" + (scrollTop - elementWrapperTop) + "px)");
      } else {
        if (lastScrollTop >= elementWrapperTop) {
          elementWrapper.dispatchEvent(new CustomEvent('horizontal-scroll-end'));
        }
      }
      lastScrollTop = scrollTop;
    }

    // Écouteur de scroll
    scrollListener = () => requestAnimationFrame(updateHorizontalScroll);
    window.addEventListener('scroll', scrollListener);

    // Exemple d'utilisation des événements personnalisés
    elementWrapper.addEventListener('horizontal-scroll-start', function() {
      console.log('horizontal-scroll-start');
    });

    elementWrapper.addEventListener('horizontal-scroll-end', function() {
      var translateX = parseFloat(elementWrapper.style.transform.split('(')[1]);
      if (translateX >= -100 && translateX < 0) {
        elementWrapper.style.transform = "translateX(0)";
      }
      console.log('horizontal-scroll-end');
    });
  } else {
    // Désactiver le scroll horizontal pour les écrans plus petits
  }
}

// Gestionnaire de redimensionnement
window.addEventListener('resize', function () {
  // Enlever l'écouteur de scroll pendant le resize
  if (scrollListener) {
    window.removeEventListener('scroll', scrollListener);
  }




  // Réinitialiser la position de translateX
  document.querySelector('.element-wrapper').style.transform = "translateX(0px)";

  // Relancer handleHorizontalScroll pour remettre à jour les valeurs
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
});

window.addEventListener('load', () => {
  handleHorizontalScroll('.element-wrapper', '.horizontal-section', 0);
});

