//Acceder al formulario por su id y sus campos

const form = document.getElementById('register');
const campos = document.querySelectorAll('#register input');

//Objetos con expresion regulares para validaciòn
const reglas = {

nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/

}

//0. Generar eventos tipo submit sobre el formulario con funcion para validar campos 
form.addEventListener('submit' ,e =>{

    e.preventDefault(); //evitar que se envie el formulario para que se pueda validar los campos antes
})

//1. GenerR EVENTOS PARA LOS INPUTS

/*const validarcampos=(e)=>{
    console.log("Se genero un evento sobre un input");
}*/
const validarcampos=(e)=>{
    console.log(e.target.name); //compruebe para traer el name del input
    switch (e.target.name) {
        case "nom":
            console.log('')
            break;
    
        default:
            break;
    }
}


campos.forEach((campo)=>{

    campo.addEventListener('keyup', validarcampos);
    campo.addEventListener('blur', validarcampos)
})

