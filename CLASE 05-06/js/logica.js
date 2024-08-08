console.log('logica conectada');

const usuario = 'admin'

const clave = '1234'
let contador = 0

let usuarios=[
{"usuario":"edisson", "clave": "1111"},
{"usuario":"admin", "clave": "2222"},
{"usuario":"edisson", "clave": "3333"},
{"usuario":"admin", "clave": "4444"}
]

function pruebaboton(){
    let user = document.getElementById('user').value.toLocaleUpperCase()
    let pw = document.getElementById('pw').value
    let usuariologueado= usuarios.some(usuario=> usuario.usuario.toLocaleUpperCase()==user && usuario.clave==pw)

    if (usuariologueado){
        setUser()
      window.open('localstorage.html')
    } else {bloquearcuenta()
        console.log('error de contraseña');

    }
}



//function pruebaboton() {

  //  let user = document.getElementById('user').value.toLocaleUpperCase()
    //let pw = document.getElementById('pw').value


    //if (usuario.toLocaleUpperCase() == user && clave == pw) {
        //en esta parte el usuario se encuentra logueado
        //setUser()
      //  window.open('localstorage.html')
    //} else {

      //  bloquearcuenta()
    //    console.log('error de contraseña');
  //  }
//}
//bloquear el acceso del usuario

function bloquearcuenta(){
    
    
    let contadorstorage =getstorage()
    console.log(`valor inicial de storage ${contadorstorage})}`);
    if (contadorstorage==3){
        console.log('cuenta bloqueada');
    }else {
        contarintentos()
    }

}
function getstorage(){
    return localStorage.getItem('contador') || 0
}
//contar cada vez que ingresa la contraseña mal

function contarintentos(){
    let contadorstorage = getstorage()
    contadorstorage++
    //console.log(`contador antes de sumar ${contadorstorage}`);
    imprimir('contador antes de sumar', contadorstorage)
    setcontador(contadorstorage)
}

function imprimir(mensaje,valor){
console.log(`${mensaje} ${valor}`)
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


