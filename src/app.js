import { Producto } from "./Producto.js";
import { InterfazUsuario } from "./IU.js";

// Eventos del DOM
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Anula el comportamiento predeterminado del formulario
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("name").value,
      precio = document.getElementById("price").value,
      año = document.getElementById("year").value;

    // Crear una nueva instancia de IU
    const ui = new InterfazUsuario();

    // Validación de entrada de usuario
    if (nombre === "" || precio === "" || año === "") {
      ui.mostrarMensaje("Por favor ingrese datos en todos los campos", "danger");
    } else {
      // Crear un nuevo objeto Producto solo si todos los campos están completos
      const producto = new Producto(nombre, precio, año);
      
      // Guardar producto
      ui.agregarProducto(producto);
      ui.mostrarMensaje("Producto agregado exitosamente", "success");
      ui.resetearFormulario();
    }
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new InterfazUsuario();
  ui.eliminarProducto(e.target);
  e.preventDefault();
});
