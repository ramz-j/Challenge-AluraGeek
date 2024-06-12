async function listarProductos() {
    const conexion = await fetch("https://alura-geek-api-ivory.vercel.app/productos");
    const conexionConvertida = conexion.json();
    
    return conexionConvertida;
}

async function enviarProductos(nombre,imagen,precio){
    const conexion = await fetch("https://alura-geek-api-ivory.vercel.app/productos",{
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
    const conexion = await fetch(`https://alura-geek-api-ivory.vercel.app/productos/${id}`,{
        method:"DELETE"
    })
}

export const conexionAPI = {
    listarProductos, 
    enviarProductos,
    borrarProducto
}

// listarProductos();

