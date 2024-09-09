//console.log('conectado')

document.getElementById('cargando...').innerHTML=('cargando..')

const imagen=document.getElementById('imagen-usuario')

const data=fetch('https://randomuser.me/api/?results=2')
.then(response=>response.json())
.then(data=>{
    const usuario= data.results[0]
    document.getElementById('cargando...').innerHTML=('')
    console.log(usuario);
    
    document.getElementById('cedula').value=usuario.id.value||'información no encontrada'
    document.getElementById('nombres').value=`${usuario.name.first} ${usuario.name.last}` ||'sin nombre'
    document.getElementById('email').value=usuario.email ||'sin nombre'

    const imagenUsuario=document.createElement('img')
    imagenUsuario.src=usuario.picture.large
    imagen.appendChild(imagenUsuario)

   // console.log(`cedula &{usuario.id.value}`)
    
    
})

.catch (error=>{
    console.log('error'.error);
}) 