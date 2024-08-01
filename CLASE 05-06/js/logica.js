console.log('logica conectada');

const usuario = 'admin'

const clave = '1234'



function pruebaboton() {

    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value


    if (usuario.toLocaleUpperCase() == user && clave == pw) {
        //en esta parte el usuario se encuentra logueado
        setUser()
        window.open('localstorage.html')
    } else {

        bloquearcuenta()
        console.log('error de contraseña');
    }
}
//bloquear el acceso del usuario
function bloquearcuenta(){
    
    
    let contador =localStorage.getItem('contador') || 0
    console.log(`valor inicial de storage ${contador})}`);
    if (contador==3){
        console.log('cuenta bloqueada');
    }else {
        contarintentos()
    }

}
//contar cada vez que ingresa la contraseña mal

function contarintentos(){
    let contador =localStorage.getItem('contador') || 0
    contador++
    console.log(`contador ${ localStorage.getItem('contador')}`);
    setcontador(contador)
}

function setUser(){
    localStorage.setItem('usuario', usuario)
}

function setcontador(contador){
    localStorage.setItem('contador', contador)
}


