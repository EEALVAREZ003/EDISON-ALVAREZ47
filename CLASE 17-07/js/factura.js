let usuarios=JSON.parse(localStorage.getItem('usuarios'))|| [];

let dataServicios = [
    { id: 1, nombre: 'lavado general', precio: 20000 },
    { id: 2, nombre: 'polichada', precio: 50000 },
    { id: 3, nombre: 'lavado a presion', precio: 40000 },
    { id: 4, nombre: 'servicio completo', precio: 70000 },
    { id: 5, nombre: 'cambio de aceite', precio: 25000 }
]

const selecTipoCliente=document.getElementById('tipoCliente')
usuarios.forEach(element => {
    const option= document.createElement('option')
    option.value= element.tipoCliente
    option.text= `${element.nombres} ${element.apellidos}`
    selecTipoCliente.appendChild(option)
});

const selectServicios=document.getElementById('servicios')
dataServicios.forEach(element => {
    const option= document.createElement('option')
    option.value= element.precio
    option.text= `${element.nombre}`
    selectServicios.appendChild(option)
});

function calcularTotal(){
    const valorServicio = parseInt(document.getElementById('servicios').value)
    const tipoCliente = document.getElementById('tipoCliente').value
    const mecanico = parseInt(document.getElementById('mecanico').value)
    const repuesto = parseInt(document.getElementById('repuesto').value)

    const total= valorServicio+mecanico+repuesto

    console.log(total)
   
}

