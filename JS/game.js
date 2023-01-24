// Elemento pai dos card
const grid = document.querySelector('.grid');

const characters = [
  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',
]

//script das posições dinamicas das cartas

const createElement = (tag, classname) => {
 const element = document.createElement(tag);
 element.className = classname;
 return element;
}

let firstCard = "";
let secoundCard = "";

const checkEndGame = () => {
   const disabledCards = document.querySelectorAll('.disabled-card');

   if(disabledCards.length === 20) {
    
    // Para que o alert não despare antes que a ultima carta vire! 
    setTimeout(() => {
      alert("Parabéns, você chegou até o final!");
    }, 220);
      
   }
}

const chekCards = () => {
 const firstCharacter = firstCard.getAttribute('data-character');
 const SecoundCharacter = secoundCard.getAttribute('data-character');

 if(firstCharacter === SecoundCharacter) {

   firstCard.firstChild.classList.add('disabled-card');
   secoundCard.firstChild.classList.add('disabled-card');

   firstCard = "";
   secoundCard = "";

   checkEndGame();

 }
 else {
  
  setTimeout(() => {

    firstCard.classList.remove('reveal-card');
    secoundCard.classList.remove('reveal-card');

    firstCard = "";
    secoundCard = "";

  }, 500);

 }
}

const revealCard = ( {target} ) => {

  if(target.parentNode.className.includes('reveal-card')) {
    return;
  }

  else if (firstCard === "") {
   target.parentNode.classList.add('reveal-card');
   firstCard = target.parentNode;
  }

  else if (secoundCard === "") {
    target.parentNode.classList.add('reveal-card');
    secoundCard = target.parentNode;

    chekCards();
  }
}

const createCard = (characters) => {

  const card = createElement('div', 'card');  
  const front = createElement('div', 'face front'); 
  const back = createElement('div', 'face back');  

 front.style.backgroundImage = `url(../images/${characters}.png)`;

  card.appendChild(front);
  card.appendChild(back);

   card.addEventListener('click', revealCard);
   card.setAttribute('data-character', characters);

  return card;
}

const loadGame = () => {

    const duplicateCharacteres = [...characters, ...characters ];
    const shuffledArray = duplicateCharacteres.sort( () => Math.random() - 0.5 );
    

    shuffledArray.forEach((characters) => {
      
        const card = createCard(characters);
        grid.appendChild(card);
    });

}

loadGame();

c