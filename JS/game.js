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

const createCard = (characters) => {

  const card = createElement('div', 'card');  
  const front = createElement('div', 'face front'); 
  const back = createElement('div', 'face back');  

 front.style.backgroundImage = `url(../images/${characters}.png)`;

  card.appendChild(front);
  card.appendChild(back);

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