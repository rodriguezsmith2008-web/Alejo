/**Define un tipo Transacción que contenga el monto, el tipo ("ingreso" o "egreso") y
la categoría.Crea una función que reciba un arreglo de transacciones y retorne un objeto que
contenga la suma total agrupada por tipo. */

type TipoTransacción = "ingreso" | "egreso";

type Transacción = {
    monto: number;
    tipo: TipoTransacción;
    categoria: String;
}


function SumaTotal(transaccion: Transacción[]) {
    return transaccion.reduce((actual, objeto) => {
        if (objeto.tipo === "ingreso") {
            actual.ingreso += objeto.monto;
        }else{
            actual.egreso += objeto.monto;
        }
        return actual
    }, {
        ingreso: 0, egreso: 0
    })
}
