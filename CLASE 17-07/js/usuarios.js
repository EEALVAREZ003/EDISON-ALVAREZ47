


function registrar() {
    const cedula = document.getElementById('cedula').value
    const nombres = document.getElementById('nombres').value
    const apellidos = document.getElementById('apellidos').value
    const telefono = document.getElementById('telefono').value
    const tipoCliente = document.getElementById('tipoCliente').value
    const dataUsuario = {
        CEDULA:cedula,
        NOMBRES:nombres,
        APELLIDOS:apellidos,
        TELEFONO:telefono,
        CLASECLIENTE:tipoCliente
    }
    let usuarios=JSON.parse(localStorage.getItem('usuarios'))|| []

    usuarios.push(dataUsuario)

    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    alert('datos registrados correctamente')

}