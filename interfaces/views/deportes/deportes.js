

function registrarDeportes(){
    const deporte = document.getElementById('deporte').value;
    localStorage.setItem('Deportes', deporte);


    let listaDeportes = localStorage.getItem('Deportes') || []
    

    //const dataUsuarioDeporte = {
       // tipoDeporte: deporte
    //};
    
   const dataUsuario=deporte.push('Deportes');

   deporte.push('deporte');


console.log(dataUsuario);
alert('datos registrados correctamente')
}




//function registrarDeportes() {

   // const deporte = document.getElementById('deporte').value
    
    //const dataUsuarioDeporte = {
      // tipoDeporte: deporte
       
 //  }
   // let listaDeportes = JSON.parse(localStorage.getItem('Deportes')) || []

    //Deportes.push(dataUsuarioDeporte)

   // localStorage.setItem('Deportes', JSON.stringify(listaDeportes))


   

  //  alert('datos registrados correctamente')

//}