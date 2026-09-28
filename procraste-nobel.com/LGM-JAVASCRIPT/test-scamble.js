

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
//console.log ( "ccool");
class TextScramble {
  constructor(el) {
    this.fallOne = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#@%*$€';
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.fallOne.innerText || '';
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
     const start = Math.floor(Math.random() * 5);
     const end = start + Math.floor(Math.random() * 20);

      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.fallOne.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      setTimeout(() => {
  this.frameRequest = requestAnimationFrame(this.update);
}, 50);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Exemple avec ScrollMagic
// ——————————————————————————————————————————————————
// Création d'une instance de controller ScrollMagic
const controller = new ScrollMagic.Controller();

// Sélection de l'élément à animer - fall-one
const fallOne = document.getElementById('fall-one');
fallOne.style.opacity = "0"; // Masquer l'élément initialement

const fallOneHeight = fallOne.clientHeight; // Récu

// Initialisation de TextScramble avec l'élément fall-one
const fx1 = new TextScramble(fallOne);

// Création de l'animation avec ScrollMagic pour l'élément fall-one
const scene1 = new ScrollMagic.Scene({
  triggerElement: fallOne,
  triggerHook: 0.75, // Le point de déclenchement est à 75% du haut de la fenêtre
  reverse: false // Animation ne se répète pas lors du scroll vers le haut
})
.on('enter', () => {
  fallOne.style.opacity = "1"; // Afficher l'élément quand il entre dans la vue
  // Animation du texte quand l'élément est dans la vue
  fx1.setText(fallOne.innerText);
})
.addTo(controller);

// Sélection de l'élément à animer - fall-two
const fallTwo = document.getElementById('fall-two');
if (fallTwo){
fallTwo.style.opacity = "0"; // Masquer l'élément initialement
const fallTwoHeight = fallTwo.clientHeight; // Récupérer la hauteur initiale de l'élément

// Initialisation de TextScramble avec l'élément fall-two
const fx2 = new TextScramble(fallTwo);

// Création de l'animation avec ScrollMagic pour l'élément fall-two
const scene2 = new ScrollMagic.Scene({
  triggerElement: fallTwo,
  triggerHook: 0.75, // Le point de déclenchement est à 75% du haut de la fenêtre
  reverse: false // Animation ne se répète pas lors du scroll vers le haut
})
.on('enter', () => {
  fallTwo.style.opacity = "1"; // Afficher l'élément quand il entre dans la vue
  // Animation du texte quand l'élément est dans la vue
  fx2.setText(fallTwo.innerText);
})
.addTo(controller);
}
// Pas possible de définir une hauteur minimale si on veut centrer. 
//fallOne.style.minHeight = fallOneHeight + 150+ "px";
//alert (fallOneHeight);
if (fallTwo){//fallTwo.style.minHeight = fallTwoHeight +150+ "px";
	
}

const fallThree = document.getElementById('fall-three');
if (fallThree){
  fallThree.style.opacity = "0"; // Masquer l'élément initialement
  const fallThreeHeight = fallThree.clientHeight; // Récupérer la hauteur initiale de l'élément

  // Initialisation de TextScramble avec l'élément fall-three
  const fx3 = new TextScramble(fallThree);

  // Création de l'animation avec ScrollMagic pour l'élément fall-three
  const scene3 = new ScrollMagic.Scene({
    triggerElement: fallThree,
    triggerHook: 0.75, // Le point de déclenchement est à 75% du haut de la fenêtre
    reverse: false // Animation ne se répète pas lors du scroll vers le haut
  })
  .on('enter', () => {
    fallThree.style.opacity = "1"; // Afficher l'élément quand il entre dans la vue
    // Animation du texte quand l'élément est dans la vue
    fx3.setText(fallThree.innerText);
  })
  .addTo(controller);
}
// Pas possible de définir une hauteur minimale si on veut centrer. 
//fallOne.style.minHeight = fallOneHeight + 150+ "px";
//alert (fallOneHeight);
if (fallThree){//fallThree.style.minHeight = fallThreeHeight +150+ "px";
  
}
const fallFor = document.getElementById('fall-for');
if (fallFor){
  fallFor.style.opacity = "0"; // Masquer l'élément initialement
  const fallForHeight = fallFor.clientHeight; // Récupérer la hauteur initiale de l'élément

  // Initialisation de TextScramble avec l'élément fall-for
  const fx4 = new TextScramble(fallFor);

  // Création de l'animation avec ScrollMagic pour l'élément fall-for
  const scene4 = new ScrollMagic.Scene({
    triggerElement: fallFor,
    triggerHook: 0.75, // Le point de déclenchement est à 75% du haut de la fenêtre
    reverse: false // Animation ne se répète pas lors du scroll vers le haut
  })
  .on('enter', () => {
    fallFor.style.opacity = "1"; // Afficher l'élément quand il entre dans la vue
    // Animation du texte quand l'élément est dans la vue
    fx4.setText(fallFor.innerText);
  })
  .addTo(controller);
}
// Pas possible de définir une hauteur minimale si on veut centrer. 
//fallOne.style.minHeight = fallOneHeight + 150+ "px";
//alert (fallOneHeight);
if (fallFor){//fallFor.style.minHeight = fallForHeight +150+ "px";
  
}


