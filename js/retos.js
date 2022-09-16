/*Reto1*/

const longi = document.getElementById('longi');
longi.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.length;
      alert(`la longitud de la "${palabra}" es: ${calculo}`);
});

const mayus = document.getElementById('mayus');
mayus.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.toUpperCase();
      alert(`"${palabra}" en mayúscula es: "${calculo}"`);
});

const mini = document.getElementById('minis');
mini.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.toLowerCase();
      alert(`"${palabra}" en minúsculas es: "${calculo}"`);
});

const fist = document.getElementById('fist');
fist.addEventListener('click', ()=>{
      const palabra = document.getElementById('palabra').value;
      const calculo = palabra.charAt();
      alert(`la primera letra de "${palabra}" es: "${calculo}"`);
});

/*Reto2*/
const calcul = document.getElementById('calcu');
calcul.addEventListener('click', ()=>{
      const datos = document.getElementById('grad').value;
      const grados = document.getElementById('info').value;
      parseInt(datos);
      if(datos==1){       
                  const valor = parseFloat(grados) + 273.15;
                  alert(`los ${grados} grados celsius a kelvin son: ${valor}`);
      }else if(datos==2){
            const valor = (parseFloat(grados)*1.8) + 32;
                  alert(`los ${grados} grados celsius a Fahrenheit son: ${valor}`);
      }else if(datos == 3){
            const valor = (parseFloat(grados)-32) * (5/9);
            alert(`los ${grados} grados Fahrenheit a celsius son: ${valor.toFixed(2)}`);
      }else if(datos == 4){
            const valor = (parseFloat(grados)-32)*(5/9) + 273.15;
            alert(`los ${grados} grados Fahrenheit a kelvin son: ${valor.toFixed(2)}`);      
      }else if(datos == 5){
            const valor = (parseFloat(grados)-273.15)*(9/5) + 32;
            alert(`los ${grados} grados kelvin a Fahrenheit son: ${valor.toFixed(2)}`);  
      }else if(datos == 6){
            const valor = (parseFloat(grados)-273.15);
            alert(`los ${grados} grados kelvin a celcius son: ${valor.toFixed(2)}`);  
      }
});

/*Reto3*/
const indagar = document.getElementById('trig');
indagar.addEventListener('click',()=>{
      const lado1 = document.getElementById('lado1').value;
      const lado2 = document.getElementById('lado2').value;
      const lado3 = document.getElementById('lado3').value;
      parseFloat(lado1);
      parseFloat(lado2);
      parseFloat(lado3);
      if(lado1==lado2 && lado1 ==lado3){
            alert(`El triangulo es equilatero ya que sus lados son iguales.`)
      }else if(lado1==lado2 || lado2==lado3 || lado1==lado3){
            alert(`El triangulo es isósceles, dos lados son similares.`);
      }else{
            alert(`El triangulo es escaleno, todos sus lados son diferentes.`);
      }  
})

/*Reto4*/
const respuesta = document.getElementById('respu');
respuesta.addEventListener('click', ()=>{
      const nom = document.getElementById('nombre').value;
      const ape = document.getElementById('apellido').value;
      const materia = document.getElementById('actividad').value;
      parseInt(nom); 
      parseInt(ape); 
      parseInt(materia);
            if(nom== 1 && ape==5 && materia==1 || materia==7){
                  alert("Correcto")
            }else if(nom== 2 && ape==3 && materia==8){
                  alert("Correcto")
            }else if(nom== 3 && ape==6 && materia==5){
                  alert("Correcto")
            }else if(nom== 4 && ape==4 && materia==4){
                  alert("Correcto")
            }else if(nom== 5 && ape==1 && materia==6){
                  alert("Correcto")
            }else if(nom== 6 && ape==7 && materia==2){
                  alert("Correcto")
            }else if(nom== 7 && ape==2 && materia==3){
                  alert("Correcto")
            }else{
                  alert("incorrecto")
            }    
});

/*Reto5*/
/*Circulo*/
const calAr = document.getElementById('aCirculo');
calAr.addEventListener('click',()=>{
      const area = document.getElementById('radio').value;
      const final = 3.1416 * (parseFloat(area)**2);
      alert(`El area del circulo es: ${final.toFixed(2)}`);
 });
 const calPe = document.getElementById('pCirculo');
 calPe.addEventListener('click',()=>{
      const area = document.getElementById('radio2').value;
      const final = (2*3.1416) * parseFloat(area);
      alert(`El perimetro del circulo es: ${final.toFixed(2)}`);
 });

/*Trinagulo*/
const triAr = document.getElementById('aTriangulo');
triAr.addEventListener('click', ()=>{
      const base = document.getElementById('base').value;
      const altura = document.getElementById('altura').value;
      const are = (parseFloat(base) * parseFloat(altura)) /2;
      alert(`El area del triangulo es: ${are}`);
});
const triPe = document.getElementById('pTriangulo');
triPe.addEventListener('click', ()=>{
      const la = document.getElementById('lad').value;
      const lad = document.getElementById('lado').value;
      const lado1 = document.getElementById('lado4').value;
      const peri = parseFloat(la)+ parseFloat(lad)+ parseFloat(lado1);
      alert(`El perimetro del triangulo es: ${peri}`);  
});

/*Rectangulo*/
const recArea = document.getElementById('aRectangulo');
recArea.addEventListener('click', ()=>{
      const bas1 = document.getElementById('bas').value;
      const altu1 = document.getElementById('alt').value;
      
      const rAre= parseFloat(bas1) * parseFloat(altu1);
      alert(`La base del rectangulo es: ${rAre}`);
});

const recPeri = document.getElementById('pRectangulo');
recPeri.addEventListener('click', ()=>{
      const bas2 = document.getElementById('bas2').value;
      const altu2 = document.getElementById('alt2').value;
      console.log(bas2, altu2);
      const rPeri= (parseFloat(bas2)*2) +(parseFloat(altu2)*2);
      alert(`El perimetro del rectangulo es: ${rPeri}`);
});

/*Cuadrado*/
const cuaAre = document.getElementById('aCuadrado');
cuaAre.addEventListener('click',()=>{
      const ladCu = document.getElementById('basecu').value;
      const cAre = parseFloat(ladCu)* parseFloat(ladCu);
      alert(`El area del cuadrado es: ${cAre}`)
      
})
const cuaPer = document.getElementById('pCuadrado');
cuaPer.addEventListener('click',()=>{
      const ladCu2 = document.getElementById('base2cu').value;
      const cPeri = parseFloat(ladCu2)+ parseFloat(ladCu2)+ parseFloat(ladCu2)+ parseFloat(ladCu2);
      alert(`El perimetro del cuadrado es: ${cPeri}`)    
});