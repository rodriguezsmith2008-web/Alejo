/**10. Sistema de pagos con métodos variados
Modela un tipo Pago que tenga una propiedad método , que puede ser "tarjeta",
"efectivo" o "transferencia".
Cada método requiere distintos campos:
"tarjeta": número de tarjeta y CVV
"transferencia": banco y número de cuenta
"efectivo": no requiere datos adicionales
Crea una función que reciba un pago y valide que se hayan ingresado los datos
obligatorios dependiendo del método. */

type Metodo = "tarjeta" | "efectivo" | "transferencia";

type Pago = {
  metodo: Metodo;
  numeroTarjeta: string;
  cvv: number;
  banco: string;
  numeroCuenta: string;
};

function validarPago(pago: Pago): string {
  
  if (pago.metodo === "tarjeta") {
    if (!pago.numeroTarjeta || !pago.cvv) {
      return "Faltan datos de la tarjeta";
    }
    return "Pago con tarjeta válido";
  }

  if (pago.metodo === "transferencia") {
    if (!pago.banco || !pago.numeroCuenta) {
      return "Faltan datos de la transferencia";
    }
    return "Pago por transferencia válido";
  }

  if (pago.metodo === "efectivo") {
    return "Pago en efectivo válido";
  }

  return "Método de pago no válido";
}