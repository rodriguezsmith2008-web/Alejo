/**Define una unión de tipos para representar notificaciones por email, SMS y push.
Cada una debe tener propiedades distintas.
Implementa una función enviarNotificacion que reciba una notificación y ejecute
una lógica distinta dependiendo del tipo (usando type narrowing). */

type Email = {
    correo: string;
    mensaje: string;
}

type SMS = {
    telefono: number;
    mensaje: string;
}

type Push = {
    nose: string;
}

type tipoNoti = Push | SMS | Email;

function EnviarNoti(notificaciones: tipoNoti) {
    if ("correo" in notificaciones) {
        return "Logica  de correo";
    } else if ("telefono" in notificaciones) {
        return "Logica de SMS";
    } else if ("nose" in notificaciones) {
        return "Logica de nose ";
    } else {
        return "tipo de mensaje no encontrado";
    }
}