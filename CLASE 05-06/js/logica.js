console.log('logica conectada');

const usuario = 'admin'
const clave = '1234'




function pruebaboton(){

    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value

    if (usuario.toLocaleUpperCase()==user && clave==pw) {
        //en esta parte el usuario se encuentra logueado
        setUser()
        window.open("localstorage.html")
        console.log('ingreso correcto');
     } else {
            console.log("error de contraseña");
        } 
    
}
function setUser (){
    localStorage.setItem('usuario',usuario)
}
console.log (`usuario ${user} clave ${pw}`)