// lancement

window.addEventListener('load', (event) => {
  console.log('La page est complètement chargée');
handleHorizontalScroll('.element-wrapper', '.horizontal-section', 300);
handleHorizontalScroll('.element-wrapper-two', '.horizontal-section-two', 0);
});



  


//////////////////////////////////////////////////////////////////////Horizontal scroll FUNCTION ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////
///////////////////////////////////////////////////////////////         NEW SCRIPT NEW SCRIPT        ///////////////////////////////////////




console.log( "hello script sans interférence sur les variables");
function handleHorizontalScroll(elementWrapperClass, horizontalSectionClass, adjust) {
  var windowWidth = window.innerWidth;

  if (windowWidth > 991) {
    var elementWrapper = document.querySelector(elementWrapperClass);
    var horizontalSection = document.querySelector(horizontalSectionClass);
    var stickyElement = horizontalSection.querySelector('.sticky-wrap');
    
    const calculateStickyPosition = () => {
      var elementWrapperTop = horizontalSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const elementWrapperHeight = elementWrapper.getBoundingClientRect().height;
      const stickyTopPosition = ((windowHeight - elementWrapperHeight) / 2)+30;
      stickyElement.style.top = stickyTopPosition + 'px';
      
      var stickyLarge = stickyElement.clientWidth;
      var wrapperLarge = elementWrapper.scrollWidth;
      var overflowDuWrapper = wrapperLarge - stickyLarge;
      var scrollLength = overflowDuWrapper + adjust;
      wrapperLarge = wrapperLarge + adjust;
      
      horizontalSection.style.height = wrapperLarge + "px";
      
      return { elementWrapperTop, scrollLength };
    };

    var { elementWrapperTop, scrollLength } = calculateStickyPosition();

    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset.toFixed();

      if (scrollTop >= elementWrapperTop && scrollTop <= (elementWrapperTop + scrollLength)) {
        elementWrapper.style.transform = "translateX(-" + (scrollTop - elementWrapperTop) + "px)";
      }
    });
  } else {
    console.log("SCROLL HORIZONTAL DISABLE");
  }
}

// lancement






