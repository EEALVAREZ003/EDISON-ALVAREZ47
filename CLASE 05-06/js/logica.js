console.log('logica conectada');

const usuario = 'admin'
const clave = '1234'



function pruebaboton(){

    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value

    if (usuario==user && clave==pw) {
        console.log('ingreso correcto');
     } else {
            console.log("error de contraseña");
        } 
    


    console.log ("usuario ${user} clave ${pw}")


}





