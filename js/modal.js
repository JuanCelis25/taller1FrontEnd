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
      modal5.classList.replace("remplazo5","mo5");
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
      modal5.classList.replace("remplazo5","mo5");
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
      modal5.classList.replace("remplazo5","mo5");
      
});
cerrar4.addEventListener('click', ()=>{
      modal4.classList.replace('remplazo4','mo4');
});


/*Quinto modal*/
const abrir5 = document.getElementById('eje5');
const modal5 = document.getElementById('mo5');
const cerrar5 = document.getElementById('close5');
abrir5.addEventListener('click', ()=>{
      modal5.classList.replace("mo5","remplazo5");
      modal.classList.replace("remplazo","mo");
      modal2.classList.replace("remplazo2","mo2");
      modal3.classList.replace("remplazo3","mo3");
      modal4.classList.replace("remplazo4","mo4");
});
cerrar5.addEventListener('click', ()=>{
      modal5.classList.replace('remplazo5','mo5');
});



/* Circulo*/
const circulo = document.getElementById('cir');
const opcion = document.getElementById('arepe');
circulo.addEventListener('click',()=>{
      opcion.classList.replace('re1','mostrar');
      opcion2.classList.replace('mostrar','re2');
      opc3.classList.replace('mostrar','op3');
      opc4.classList.replace('mostrar','op4');

      TrianguloA.classList.replace("cambi2","triArea");
      TrianguloP.classList.replace('cambi2','triPerimetro');
      
      pRec.classList.replace('show3','periRec');
      ARec.classList.replace('show3','areaRec');
      arcu2.classList.replace('show4','periCua');
      arcu.classList.replace('show4','areaCua');
});

/*Triangulo*/
const triangulo = document.getElementById('tri');
const opcion2 = document.getElementById('arepe2');
triangulo.addEventListener('click',()=>{
      opcion2.classList.replace('re2','mostrar');
      opcion.classList.replace('mostrar','re1');
      opc3.classList.replace('mostrar','op3');
      opc4.classList.replace('mostrar','op4');

      circuloA.classList.replace('cambi','cirArea');
      circuloP.classList.replace('cambi','cirPerimetro');
      pRec.classList.replace('show3','periRec');
      ARec.classList.replace('show3','areaRec');
      arcu2.classList.replace('show4','periCua');
      arcu.classList.replace('show4','areaCua');
      
});

/*Circulo */
const areaCirculo = document.getElementById('areC');
const circuloA = document.getElementById('cirArea');
areaCirculo.addEventListener('click', ()=>{
      circuloA.classList.replace('cirArea','cambi');
      circuloP.classList.replace('cambi','cirPerimetro');
});
const periCirculo = document.getElementById('perC');
const circuloP = document.getElementById('cirPerimetro');
periCirculo.addEventListener('click',()=>{
      circuloA.classList.replace('cambi','cirArea');
      circuloP.classList.replace('cirPerimetro','cambi');
});

/*Triangulo */
const areaTriangulo = document.getElementById('areT');
const TrianguloA = document.getElementById('triArea');
areaTriangulo.addEventListener('click', ()=>{
      TrianguloA.classList.replace('triArea','cambi2');
      TrianguloP.classList.replace('cambi2','triPerimetro');
});
const periTriangulo = document.getElementById('perT');
const TrianguloP = document.getElementById('triPerimetro');
periTriangulo.addEventListener('click',()=>{
      TrianguloA.classList.replace('cambi2','triArea');
      TrianguloP.classList.replace('triPerimetro','cambi2');
});



