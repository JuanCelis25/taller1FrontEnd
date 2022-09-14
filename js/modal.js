/*primer modal*/
const abrir = document.getElementById('eje1');
const modal = document.getElementById('mo');
const cerrar = document.getElementById('close');
abrir.addEventListener('click', ()=>{
      modal.classList.replace("mo","remplazo");
      modal2.classList.replace("remplazo2","mo2");
      modal3.classList.replace("remplazo3","mo3");
      modal4.classList.replace("remplazo4","mo4");
});
cerrar.addEventListener('click', ()=>{
      modal.classList.replace('remplazo','mo');
});



/*Segundo modal*/ 
const abrir2 = document.getElementById('eje2');
const modal2 = document.getElementById('mo2');
const cerrar2 = document.getElementById('close2');
abrir2.addEventListener('click', ()=>{
      modal2.classList.replace("mo2","remplazo2");
      modal.classList.replace("remplazo","mo");
      modal3.classList.replace("remplazo3","mo3");
      modal4.classList.replace("remplazo4","mo4");
});
cerrar2.addEventListener('click', ()=>{
      modal2.classList.replace('remplazo2','mo2');
});



/*Tercer modal */
const abrir3 = document.getElementById('eje3');
const modal3 = document.getElementById('mo3');
const cerrar3 = document.getElementById('close3');
abrir3.addEventListener('click', ()=>{
      modal3.classList.replace("mo3","remplazo3");
      modal.classList.replace("remplazo","mo");
      modal2.classList.replace("remplazo2","mo2");
      modal4.classList.replace("remplazo4","mo4");
      
});
cerrar3.addEventListener('click', ()=>{
      modal3.classList.replace('remplazo3','mo3');
});



/*Cuarto modal */
const abrir4 = document.getElementById('eje4');
const modal4 = document.getElementById('mo4');
const cerrar4 = document.getElementById('close4');
abrir4.addEventListener('click', ()=>{
      modal4.classList.replace("mo4","remplazo4");
      modal.classList.replace("remplazo","mo");
      modal2.classList.replace("remplazo2","mo2");
      modal3.classList.replace("remplazo3","mo3");
      
});
cerrar4.addEventListener('click', ()=>{
      modal4.classList.replace('remplazo4','mo4');
});