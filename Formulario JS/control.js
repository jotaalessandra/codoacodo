'use strict'

let form = document.getElementById('formulario')
                   .addEventListener('submit', function validarFormulario (event) {
        event.preventDefault();

        let user = document.getElementById('user').value;
        let clave = document.getElementById('pass').value;
    
        if(user.includes('@')){
    
            if(!clave) {
                alert('Ingresa una clave')
            } else {
                alert('Bienvenido');
            }
        }
    
        else{
            alert('Ingrese los datos!');
            return false;
        }
    
})

