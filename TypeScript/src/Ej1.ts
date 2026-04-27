/**1. Gestor de tareas con estados
Crea un tipo Tarea que tenga las propiedades: id, descripción, si está completada,
y un estado que solo puede ser "pendiente", "en_progreso" o "finalizada".
Implementa una función que reciba una lista de tareas y devuelva solo aquellas
que estén en progreso o pendientes. */

type estado = "pendiente" | "en_progreso" | "finalizada";

type tarea = {
    id: Number;
    descripcion: String;
    EstaCompleta: Boolean;
    estado: estado
}

function TareasNoFinaizadas(Tarea:tarea[]) {
    return Tarea.filter((Tarea : tarea) => Tarea.estado !="finalizada" )

}