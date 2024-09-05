let dataProductos = [
    { nombre: 'Manzana', precio: 800 },
    { nombre: 'Pera', precio: 900 },
    { nombre: 'Piña', precio: 1700 }
]

const selectProductos = document.getElementById('selectProductos')
dataProductos.forEach(element => {
    const option = document.createElement('option')
    option.value = element.precio
    option.text = element.nombre
    selectProductos.appendChild(option)
});

const tablaProductos = document.getElementById('tablaProductos')

function agregarProducto() {
    //precio producto
    const precioProducto = selectProductos.value
    //cantidad productos
    const cantidad = document.getElementById('cantidad').value

    const subTotal = precioProducto * cantidad

    const fila = document.createElement('tr')

    const nomProduct = document.createElement('td')
    nomProduct.textContent = 'por definir'
    fila.appendChild(nomProduct)

    const priceProduct = document.createElement('td')
    priceProduct.textContent = precioProducto
    fila.appendChild(priceProduct)

    const quantityProduc = document.createElement('td')
    quantityProduc.textContent = cantidad
    fila.appendChild(quantityProduc)

    const total = document.createElement('td')
    total.textContent = subTotal
    fila.appendChild(total)

    const botonProduct= document.createElement('td')
    const botonBorrar=document.createElement('button')

    botonProduct.appendChild(botonBorrar)
    fila.appendChild(botonProduct)

    tablaProductos.appendChild(fila)
}

function calcularTotal(){
    let total = 0

    const filas = Array.from(tablaProductos.getElementsByTagName('tr'))

    //for (let i = 0; i < filas.length; i++) {
      //  const valorColumna = filas[i].getElementsByTagName('td')

       // total+= parseInt(valorColumna[3].textCotent)
   // }

    filas.forEach(fila => {
        const valorColumna = fila.getElementsByTagName('td')
        total+= parseInt(valorColumna[3].textCotent)
        
    });

    alert(total)

}


