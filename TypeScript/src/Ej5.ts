/**5. Historial de cambios de usuario
Modela un historial de cambios de un usuario, donde cada cambio puede ser de
nombre, correo o contraseña.
Escribe una función que reciba una lista de estos cambios y devuelva un resumen
con el número de veces que se cambió cada uno. */

type Cambio = {
  tipo: "nombre" | "correo" | "password";
};

function HistorialCambios(cambios: Cambio[]) {
  return cambios.reduce((cantidad, cambio) => {

    if (cambio.tipo === "nombre") {
      cantidad.nombre += 1;

    } else if (cambio.tipo === "correo") {
      cantidad.correo += 1;

    } else if (cambio.tipo === "password") {
      cantidad.password += 1;
    }

    return cantidad;
  }, { nombre: 0, correo: 0, password: 0 });
}