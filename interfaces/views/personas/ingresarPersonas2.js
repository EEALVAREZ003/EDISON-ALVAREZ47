function registrarPersonas() {



    const tipoDocumento = document.getElementById('tipoDocumento').value
    const numeroDocumento = document.getElementById('numeroDocumento').value
    const nombres = document.getElementById('nombres').value
    const apellidos = document.getElementById('apellidos').value
    const direccion = document.getElementById('direccion').value
    const telefono = document.getElementById('telefono').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value
    const dataUsuario = {
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        nombres: nombres,
        apellidos: apellidos,
        direccion: direccion,
        telefono: telefono,
        fechaNacimiento: fechaNacimiento
    }
    let usuarios = JSON.parse(localStorage.getItem('listaPersonas')) || []

    usuarios.push(dataUsuario)

    localStorage.setItem('listaPersonas', JSON.stringify(usuarios))


    console.log(registrarPersonas)

    alert('datos registrados correctamente')

}



