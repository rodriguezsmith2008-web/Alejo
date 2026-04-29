/**8. Filtro avanzado de usuarios
Crea un tipo Usuario con nombre, edad, estado activo y rol ("admin", "editor",
"visitante").
Implementa una función que devuelva únicamente los usuarios que sean mayores
de edad, estén activos y no tengan el rol de visitante. */

type rol = "admin" | "editor" | "visitante";
type estado = "activo" | "inactivo"

type usuario = {
    nombre:string;
    edad: number;
    estado:estado;
    rol:rol
}

function UsuariosOrdenados(usuario:usuario[]) {
    return usuario.filter((usuario) => usuario.edad > 17 && usuario.estado !== "inactivo" && usuario.rol !== "visitante")
}