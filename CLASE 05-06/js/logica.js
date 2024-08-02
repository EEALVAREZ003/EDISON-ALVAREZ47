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
    
    
    let contadorstorage =localStorage.getItem('contador') || 0
    console.log(`valor inicial de storage ${contadorstorage})}`);
    if (contadorstorage==3){
        console.log('cuenta bloqueada');
    }else {
        contarintentos()
    }

}
//contar cada vez que ingresa la contraseña mal

function contarintentos(){
    let contadorstorage =localStorage.getItem('contador') || 0
    contadorstorage++
    console.log(`contador ${ contadorstorage}`);
    setcontador(contadorstorage)
}

function setUser(){
    localStorage.setItem('usuario', usuario)
}

function setcontador(contador){
    localStorage.setItem('contador', contador)
}

function desbloquearcuenta(){
    localStorage.removeItem('contador',0)
}


