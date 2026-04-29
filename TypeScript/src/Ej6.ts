/**Crea una tipo Calificación con estudianteId, materia, categoría ("tareas", "quices",
"examen") y nota.
Escribe una función que calcule el promedio por categoría para un estudiante
específico. */

type categoria = "Tareas" | "Quices" | "examen";
type Calificación = {
    estudianteId: number;
    materia: string;
    categoria: categoria;
    nota: number;
}



function CalcularPromedio(calificación: Calificación[], estudianteId: number) {
    const contador = {
        Tareas: 0,
        Quices: 0,
        examen: 0
    }

    const promedio = {
        Tareas: 0,
        Quices: 0,
        examen: 0

    }
    for (const nota of calificación) {
        if (estudianteId === nota.estudianteId) {
            promedio[nota.categoria] += nota.nota;
            contador[nota.categoria] += 1;
        }
    }

    if (promedio.Tareas === contador.Tareas) {
        promedio.Tareas = promedio.Tareas / contador.Tareas;
    }
    if (promedio.Quices === contador.Quices) {
        promedio.Quices = promedio.Quices / contador.Quices;
    }
    if (promedio.examen === contador.examen) {
        promedio.examen = promedio.examen / contador.examen;
    }

    return promedio;
}