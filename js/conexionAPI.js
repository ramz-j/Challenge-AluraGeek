async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}

async function enviarProductos(nombre,imagen,precio){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers: {"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            imagen:imagen,
            precio:`$ ${precio},00`
        })
    });
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

async function borrarProducto(id){
    const conexion = await fetch(`http://localhost:3001/productos/${id}`,{
        method:"DELETE"
    })
}

export const conexionAPI = {
    listarProductos, 
    enviarProductos,
    borrarProducto
}

// listarProductos();

