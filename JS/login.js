// Variaveis Globais. 
const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector('.login-form');

//Função que valida o botão habilitando e desabilitando. 
const validateInput = ({ target }) => {
  
  if (target.value.length > 3) {
    button.removeAttribute('disabled');    
  }
  else { 
    button.setAttribute('disabled', ''); 
  }
}

// Função do botão submit, e guarda nick name do usuario no local storage do navegador. 
const handleSubmit = (event) => {
   event.preventDefault(); 
   
   localStorage.setItem('player', input.value);
   window.location = 'pages/game.html';
}

// Passando so parametros. 
input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);