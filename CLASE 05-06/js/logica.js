console.log('logica conectada');

const usuario = 'admin'

const clave = '1234'

const frutas = ['manzana', 'pera', 'sandia']




function pruebaboton() {

    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value

    if (usuario.toLocaleUpperCase() == user && clave == pw) {
        //en esta parte el usuario se encuentra logueado
        setUser()
        window.open("localstorage.html")
        console.log('ingreso correcto');
    } else {
        console.log("error de contraseña");
    }

}
function setUser() {
    localStorage.setItem('usuario', usuario)

    console.log(`usuario ${user} clave ${pw}`)
}

function imprimirarreglo() {
    let posicion = document.getElementById('arrayposicion').value
    console.log(localStorage.getItem('arreglofrutas'));
    if (posicion >= frutas.length) {
        console.log('posicion no valida');
        limpiar()
    }
    else {


        console.log(frutas[posicion]);
    }
}

function limpiar() {
    document.getElementById('arrayposicion').value = ''
    document.getElementById('arrayposicion').focus()

}

function agregarfruta() {
    let nombrefruta = document.getElementById('nombrefruta').value.toLocaleUpperCase()
    nombrefruta = nombrefruta.trim()
    if (nombrefruta.trim() !== '') {
        frutas.push(nombrefruta)
        guardarstorage(frutas)
        console.log(`se agregó la fruta ${nombrefruta}`)
        document.getElementById('nombrefruta').focus()
    } else {
        console.log('nombre no valido')
    }
}
function eliminarfruta() {
    let posicion = document.getElementById('arrayposicion').value
    frutas.splice(posicion,1)


    console.log('frutas que quedan '+frutas)

}

function guardarstorage(arreglo){
    localStorage.setItem('arreglofrutas',arreglo)
    console.log('guardado en local storage')

}
