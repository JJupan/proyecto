/**
 * Clase InterfazUsuario
 */
export class InterfazUsuario {
  /**
   * Agregar un nuevo Producto 
   * @param {Object} producto Un nuevo objeto Producto
   */
  agregarProducto(producto) {
    const listaProductos = document.getElementById("product-list");
    const elemento = document.createElement("div");
    elemento.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${producto.nombre} -
                    <strong>Precio</strong>: ${producto.precio} - 
                    <strong>Año</strong>: ${producto.año}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                </div>
            </div>
        `;
    listaProductos.appendChild(elemento);
  }

  /**
   * Reiniciar los valores del formulario
   */
  resetearFormulario() {
    document.getElementById("product-form").reset();
  }

  eliminarProducto(elemento) {
    if (elemento.name === "delete") {
      elemento.parentElement.parentElement.remove();
      this.mostrarMensaje("Producto eliminado exitosamente", "success");
    }
  }

  mostrarMensaje(mensaje, claseCss) {
    const div = document.createElement("div");
    div.className = `alert alert-${claseCss} mt-2`;
    div.appendChild(document.createTextNode(mensaje));

    // Mostrar en el DOM
    const contenedor = document.querySelector(".container");
    const app = document.querySelector("#App");

    // Insertar mensaje en la IU
    contenedor.insertBefore(div, app);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
