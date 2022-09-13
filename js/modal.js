const abrir = document.getElementById('eje1');
const modal = document.querySelector('.ejer1');

abrir.addEventListener('click', (e)=>{
   e.preventDefault();
   modal.classList.add('ejer1-show');
});