/**4. Validación de formularios dinámicos
Crea un tipo CampoFormulario con las propiedades: nombre, tipo ("texto", "numero",
"email") y valor (que puede ser string o number).
Desarrolla una función que valide una lista de campos y devuelva los nombres de
los campos inválidos según su tipo. */

type typoFormulario = "Texto" | "Numero" | "Email";

type formulario = {

    nombre: string;
    tipo: typoFormulario;
    valor: string | number;

}

function FuncionesInvalidas(formulario: formulario[]): string[] {
    return formulario.reduce((invalida, formularioActual): string[] => {
        if (formularioActual.tipo === "Texto" && formularioActual.valor === "") {
            invalida.push(formularioActual.nombre);
        } else if (formularioActual.tipo === "Email" && formularioActual.valor === "") {
            invalida.push(formularioActual.nombre);
        } else if (formularioActual.tipo === "Numero" && typeof formularioActual.valor !== "number") {
            invalida.push(formularioActual.nombre);
        }
        return invalida;
    }, []);
}