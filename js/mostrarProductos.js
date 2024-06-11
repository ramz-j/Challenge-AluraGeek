import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-ul]");

export default function crearTarjeta(id, nombre, imagen, precio){
    const producto = document.createElement("li");
    producto.className="card";
    producto.dataset.id = id;
    producto.innerHTML = `
        <img class="card__image" src="${imagen}" alt="imagen" >
        <h3 class="card__title" data-title>${nombre}</h3>
        <div class="card__descripcion">
            <p><span class="card__price">${precio}</span></p>
            <p>
                <span class="material-symbols-outlined" data-borrar >
                    delete
                </span>
            </p>                        
        </div>
    `

    return producto;
}

async function listarProductos (){
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(producto => {
        lista.appendChild(crearTarjeta(producto.id, producto.nombre, producto.imagen, producto.precio))
    });
}

listarProductos()

