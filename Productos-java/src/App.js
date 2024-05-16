import { Producto } from "./Producto.js";
import { InterfazUsuario } from "./InterfazUsuario.js";

// Eventos del DOM
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Anular el comportamiento predeterminado del formulario
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById("name").value,
      precio = document.getElementById("price").value,
      año = document.getElementById("year").value;

    // Crear un nuevo objeto Producto
    const producto = new Producto(nombre, precio, año);

    // Crear una nueva instancia de InterfazUsuario
    const ui = new InterfazUsuario();

    // Validación de Entrada de Usuario
    if (nombre === "" || precio === "" || año === "") {
      ui.showMessage("Por favor, inserta datos en todos los campos", "danger");
    }

    // Guardar Producto
    ui.addProduct(producto);
    ui.showMessage("Producto Agregado Exitosamente", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new InterfazUsuario();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
