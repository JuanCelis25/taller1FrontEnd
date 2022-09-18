//Acceder al formulario por su id y sus campos

const form = document.getElementById('register');
const campos = document.querySelectorAll('#register input');

//Objetos con expresion regulares para validaciòn
const reglas = {

numeros: /^[0-9]{5,10}$/ ,
nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ ,
password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{10,}$/ ,
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const inputs = {
 nodoc: false,
 nom: false,
 ape: false,
 correo: false,
 password: false
}

//0. Generar eventos tipo submit sobre el formulario con funcion para validar campos 


//1. GenerR EVENTOS PARA LOS INPUTS

/*const validarcampos=(e)=>{
    console.log("Se genero un evento sobre un input");
}*/
const validarInput=(regla,input,grupo)=>{
 if (regla.test(input.value)){
    //Si expresion regular se cumple
    //Remover clase error
    document.getElementById(`f_${grupo}`).classList.remove('error');
    //agregar clase success
    document.getElementById(`f_${grupo}`).classList.add('success');

    document.querySelector(`#f_${grupo} .msg_error`).classList.remove('msg_error_visible');

    document.querySelector(`#f_${grupo} i`).classList.add('fa-check-circle')

    document.querySelector(`#f_${grupo} i`).classList.remove('fa-times-circle')
    inputs[grupo] = true;
 } else {
    
    document.getElementById(`f_${grupo}`).classList.add('error'); 

    document.querySelector(`#f_${grupo} .msg_error`).classList.add('msg_error_visible');

    document.querySelector(`#f_${grupo} i`).classList.remove('fa-check-circle')

    document.querySelector(`#f_${grupo} i`).classList.add('fa-times-circle')
    inputs[grupo] = false;
 }
}

const validarcampos=(e)=>{
    console.log(e.target.name); //compruebe para traer el name del input
    switch (e.target.name) {
        case "nodoc":
            validarInput(reglas.numeros,e.target,e.target.name)
        break;
        case "nom":
            validarInput(reglas.nombre,e.target,e.target.name);
            /*console.log('ESte es el nom')*/
            /*if (reglas.nombre.test(e.target.value)) {
                document.getElementById('f_nom').classList.remove('error');

                document.getElementById('f_nom').classList.add('success');

                document.querySelector("#f_nom .msg_error").classList.remove('msg_error_visible');

                document.querySelector("#f_nom i").classList.add('fa-check-circle')

                document.querySelector("#f_nom i").classList.remove('fa-times-circle')
            } else {
                document.getElementById('f_nom').classList.add('error'); 

                document.querySelector("#f_nom .msg_error").classList.add('msg_error_visible');

                document.querySelector("#f_nom i").classList.remove('fa-check-circle')

                document.querySelector("#f_nom i").classList.add('fa-times-circle')
            }*/
        break;
        case "ape":
            validarInput(reglas.nombre,e.target,e.target.name);
        break
        case "correo":
            validarInput(reglas.correo,e.target,e.target.name)
        break
        case "passWo1":
            validarInput(reglas.password,e.target,e.target.name);
            validarPassword();
        break;
        case "passWo2":
            validarPassword();
        break;  
    }
}

const validarPassword=()=>{
    const pass1 = document.getElementById('passWo1');
    const pass2 = document.getElementById('passWo2');

    if (pass1.value === pass2.value){
        document.getElementById(`f_passWo2`).classList.remove('error');

        document.getElementById(`f_passWo2`).classList.add('success');

        document.querySelector(`#f_passWo2 .msg_error`).classList.remove('msg_error_visible');

        document.querySelector("#f_passWo2 i").classList.add('fa-check-circle')

        document.querySelector("#f_passWo2 i").classList.remove('fa-times-circle')
        inputs['password'] = true;
    } else {
        document.getElementById('f_passWo2').classList.add('error'); 

        document.querySelector("#f_passWo2 .msg_error").classList.add('msg_error_visible');

        document.querySelector("#f_passWo2 i").classList.remove('fa-check-circle')

        document.querySelector("#f_passWo2 i").classList.add('fa-times-circle')
        inputs['password'] = false;
    }
}

campos.forEach((campo)=>{
    campo.addEventListener('keyup', validarcampos);
    campo.addEventListener('blur', validarcampos)
})

form.addEventListener('submit' ,e =>{

    e.preventDefault(); //evitar que se envie el formulario para que se pueda validar los campos antes

    const terminos = document.getElementById('terminos');

    if(inputs.nodoc && inputs.nom && inputs.ape && inputs.correo && inputs.password && terminos.checked){
        alert("El usuario ha sido registrado exitosamente");
        form.reset();//limpiar el formulario

        document.querySelectorAll('.success').forEach((icono) => {
            icono.classList.remove('success');
        });
    } else{
        document.getElementById('frm-no-enviado').classList.add('frm-no-enviado-activo');
    }
})


/*Modal de terminos y condiciones */

const termi = document.getElementById('termi')
const modal = document.getElementById('moda');
const cerrar = document.getElementById('close');
termi.addEventListener('click',() =>{
    modal.classList.replace("moda","moda_show");
})
cerrar.addEventListener('click',()=>{
    modal.classList.replace("moda_show","moda");
})