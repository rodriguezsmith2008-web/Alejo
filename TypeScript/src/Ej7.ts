/**7. Control de stock con reglas personalizadas

Define un tipo Producto que incluya id, nombre, cantidad y categoría ("alimentos",
"tecnología", "papelería").
Crea una función que evalúe si un producto tiene bajo stock dependiendo de la
categoría:
alimentos: menos de 20 unidades
tecnología: menos de 5 unidades
papelería: menos de 50 unidades */



type categoria = "alimentos" | "tecnología" | "papelería";

type producto = {
    id: number;
    nombre: string;
    catidad: number;
    categoria: categoria;
}

function DetectarBajoStock(producto: producto) {
    if (producto.categoria === "alimentos" && producto.catidad < 20) {
        return `El producto ${producto.nombre} de categoria ${producto.categoria} tiene menos de la catidad eseperada
    es decir tiene bajo stock `
    }
    else if (producto.categoria === "tecnología" && producto.catidad < 5) {
        return `El producto ${producto.nombre} de categoria ${producto.categoria} tiene menos de la catidad eseperada
    es decir tiene bajo stock `
    }
    else if (producto.categoria === "papelería" && producto.catidad < 50) {
        return `El producto ${producto.nombre} de categoria ${producto.categoria} tiene menos de la catidad eseperada
    es decir tiene bajo stock `
    }
}