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
      opcion3.classList.replace('mostrar','re3');
      opcion4.classList.replace('mostrar','re4');

      TrianguloA.classList.replace("cambi2","triArea");
      TrianguloP.classList.replace('cambi2','triPerimetro');
      RectanguloA.classList.replace('cambi3','recArea');
      RectanguloP.classList.replace('cambi3','recPerimetro');
      CuadradoA.classList.replace('cambi4','cuaArea');
      CuadradoP.classList.replace('cambi4','cuaPerimetro');

});

/*Triangulo*/
const triangulo = document.getElementById('tri');
const opcion2 = document.getElementById('arepe2');
triangulo.addEventListener('click',()=>{
      opcion.classList.replace('mostrar','re1');
      opcion2.classList.replace('re2','mostrar');
      opcion3.classList.replace('mostrar','re3');
      opcion4.classList.replace('mostrar','re4');

      circuloA.classList.replace('cambi','cirArea');
      circuloP.classList.replace('cambi','cirPerimetro');
      RectanguloA.classList.replace('cambi3','recArea');
      RectanguloP.classList.replace('cambi3','recPerimetro');
      CuadradoA.classList.replace('cambi4','cuaArea');
      CuadradoP.classList.replace('cambi4','cuaPerimetro');
      
      
});

/*Rectangulo */
const rectangulo = document.getElementById('rec');
const opcion3 = document.getElementById('arepe3');
rectangulo.addEventListener('click',()=>{
      opcion.classList.replace('mostrar','re1');
      opcion2.classList.replace('mostrar','re2');
      opcion3.classList.replace('re3','mostrar');
      opcion4.classList.replace('mostrar','re4');

      circuloA.classList.replace('cambi','cirArea');
      circuloP.classList.replace('cambi','cirPerimetro');
      TrianguloA.classList.replace("cambi2","triArea");
      TrianguloP.classList.replace('cambi2','triPerimetro');
      CuadradoA.classList.replace('cambi4','cuaArea');
      CuadradoP.classList.replace('cambi4','cuaPerimetro');
      
});

/*Cuadrado */
const cuadrado = document.getElementById('cua');
const opcion4 = document.getElementById('arepe4');
cuadrado.addEventListener('click',()=>{
      opcion.classList.replace('mostrar','re1');
      opcion2.classList.replace('mostrar','re2');
      opcion3.classList.replace('mostrar','re3');
      opcion4.classList.replace('re4','mostrar');
      
      circuloA.classList.replace('cambi','cirArea');
      circuloP.classList.replace('cambi','cirPerimetro');
      TrianguloA.classList.replace("cambi2","triArea");
      TrianguloP.classList.replace('cambi2','triPerimetro');
      RectanguloA.classList.replace('cambi3','recArea');
      RectanguloP.classList.replace('cambi3','recPerimetro');
      
      
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

/*Rectangulo */
const areaRectangulo = document.getElementById('areR');
const RectanguloA = document.getElementById('recArea');
areaRectangulo.addEventListener('click', ()=>{
      RectanguloA.classList.replace('recArea','cambi3');
      RectanguloP.classList.replace('cambi3','recPerimetro');
});
const periRectangulo = document.getElementById('perR');
const RectanguloP = document.getElementById('recPerimetro');
periRectangulo.addEventListener('click',()=>{
      RectanguloA.classList.replace('cambi3','recArea');
      RectanguloP.classList.replace('recPerimetro','cambi3');
});

/*Cuadrado */
const areaCuadrado = document.getElementById('areCu');
const CuadradoA = document.getElementById('cuaArea');
areaCuadrado.addEventListener('click', ()=>{
      CuadradoA.classList.replace('cuaArea','cambi4');
      CuadradoP.classList.replace('cambi4','cuaPerimetro');
});
const periCuadrado = document.getElementById('perCu');
const CuadradoP = document.getElementById('cuaPerimetro');
periCuadrado.addEventListener('click',()=>{
      CuadradoA.classList.replace('cambi4','cuaArea');
      CuadradoP.classList.replace('cuaPerimetro','cambi4');
});

