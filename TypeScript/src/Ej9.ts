/**9. Conversor de unidades tipado
Diseña una función que permita convertir entre distintas unidades de medida:
"cm", "m" y "km".
Usa un tipo unión para representar las unidades posibles y asegúrate de validar
correctamente los valores de entrada y salida. */

type Unidad = "cm" | "m" | "km";

function convertirUnidad(valor: number, UninadNormal: Unidad, UnindadTraspaso: Unidad) {
    let valorEnMetros = 0;

    if (UninadNormal === "cm") {
        valorEnMetros = valor / 100;
    } else if (UninadNormal === "m") {
        valorEnMetros = valor;
    } else if (UninadNormal === "km") {
        valorEnMetros = valor * 1000;
    }

    if (UnindadTraspaso === "cm") {
        return valorEnMetros * 100;
    } else if (UnindadTraspaso === "m") {
        return valorEnMetros;
    } else if (UnindadTraspaso === "km") {
        return valorEnMetros / 1000;
    }
}