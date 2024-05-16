/**
 * Clase Producto
 */
export class Producto {
  /**
   *
   * @param {string} nombre El nombre del Producto
   * @param {number} precio El precio del Producto
   * @param {number} año El año de creación del Producto
   */
  constructor(nombre, precio, año) {
    this.nombre = nombre;
    this.precio = precio;
    this.año = año;
  }
}
