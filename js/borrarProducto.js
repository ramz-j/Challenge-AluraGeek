import { conexionAPI } from "./conexionAPI.js";

async function borrarProducto(evento){
    evento.preventDefault();

    if(evento.target.classList.contains('material-symbols-outlined')) {
        const producto = evento.target.closest('.card');
        const productoId = producto.dataset.id;

        conexionAPI.borrarProducto(productoId)
            .then(() => {
                producto.remove();
            })
            .catch(error => {
                console.error('Error al borrar el producto:', error)
            });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const productos = document.querySelector('[data-ul]');

    productos.addEventListener('click', evento => borrarProducto(evento))
});
