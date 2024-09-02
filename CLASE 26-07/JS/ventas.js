let dataProductos = [
    {nombre: 'Manzana', precio: 800 },
    {nombre: 'Pera', precio: 900 },
    {nombre: 'Piña', precio: 1700 }
]

const losProductos=document.getElementById('selectProductos')
dataProductos.forEach(element => {
    const option= document.createElement('option')
    option.value= element.precio
    option.text= `${element.nombre}`
    selectProductos.appendChild(option)
});

const tablaProductos= document.getElementById('tablaProductos')

function agregarProducto(){
    //precio producto
    const precioProducto=losProductos.value
    //cantidad productos
    const cantidad=document.getElementById('cantidad').value

   const subTotal= precioProducto*cantidad

   const fila=document.createElement('tr')

   const nomProducto=document.createElement('td')
   nomProducto.textContent='por definir'
   fila.appendChild(nomProducto)

}