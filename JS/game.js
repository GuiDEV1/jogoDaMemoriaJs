// Variaveis Globai 
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

// Vetor que guarda as imagens dos cards
const characters = [
  'benson',
  'eileen',
  'fantasmao',
  'margaret',
  'mordecai',
  'morte',
  'musculoso',
  'pairulito',
  'rigby',
  'saltitao',
]

//script das posições dinamicas das cartas
const createElement = (tag, classname) => {
 const element = document.createElement(tag);
 element.className = classname;
 return element;
}

// Variaveis para comparar os cards
let firstCard = "";
let secoundCard = "";

//Função que checa se o jogo acabou
const checkEndGame = () => {
   const disabledCards = document.querySelectorAll('.disabled-card');

   if(disabledCards.length === 20) {
    clearInterval(this.loop);
    // Para que o alert não despare antes que a ultima carta vire! 
    setTimeout(() => {
      alert(`Parabéns, ${spanPlayer.innerHTML}. Seu tempo foi de: ${timer.innerHTML}`);
    }, 220);

    
      
   }
}

// Função que checar os cards 
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

//Função que revela as cartas. 
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

// Função que cria os cards
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

// Função que carrega o game
const loadGame = () => {

    const duplicateCharacteres = [...characters, ...characters ];
    const shuffledArray = duplicateCharacteres.sort( () => Math.random() - 0.5 );
    

    shuffledArray.forEach((characters) => {
      
        const card = createCard(characters);
        grid.appendChild(card);
    });

}

// Temporizador que conta o tempo de jogo do usuário. 
const startTimer = () => {
   
  this.loop = setInterval(() => {
    
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;

  }, 1000);

}

// Recarrega todos elemento da pagina, e depois executa a função
window.onload = () => {
  
  spanPlayer.innerHTML = localStorage.getItem('player');

  startTimer();
  loadGame();
}



