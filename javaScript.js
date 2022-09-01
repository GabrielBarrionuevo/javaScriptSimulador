// DECLARAMOS //
let dineroUsuario = Number(prompt("Ingrese la cantidad de dinero que posee."))
let opcion;
function nombreFuncion(valor, nombrePapita){
    if (dineroUsuario >= valor) {
        dineroUsuario = dineroUsuario - valor;
        alert(`Ha comprado papitas ${nombrePapita}. Su vuelto es de $${dineroUsuario}.`);             
    }
    else {
        alert("No tiene suficiente dinero.")
    }
};
let precios =   [10, 15, 15, 20, 20, 30, 35];
let tipoPapitas = ["clásicas", "con chedar", "sabor wasabi", "con wacamole", "con queso crema y cebolla", "con queso gratinado", "con sal marina"];

while (opcion != 8) {
    opcion = prompt(`Su saldo es de $${dineroUsuario}. Qué desea comprar?
    1- Papitas clásicas $10
    2- Papitas con chedar $15
    3- Papitas sabor wasabi $15
    4- Papitas con wacamole $20
    5- Papitas con queso crema y cebolla $20
    6- Papitas con queso gratinado $30
    7- Papitas con sal marina $35.
    8- No comprar nada.
    `)

    switch (opcion) {
        case "1":
            nombreFuncion(10, "lásicas");
            break;
        case "2":
            nombreFuncion(15, "con cheddar");
            break;
        case "3":
            nombreFuncion(15, "con wasabi");
            break;
        case "4":
            nombreFuncion(20, "con wacamole");
            break;
        case "5":
            nombreFuncion(20, "con crema y cebolla");
            break;
        case "6":
            nombreFuncion(30, "con queso gratinado");
            break;
        case "7":
            nombreFuncion(35, "con sal marina");
            break;
        case "8":
            dineroUsuario = dineroUsuario;
            alert(`Su dinero es de $${dineroUsuario}. Adios!`); 
            continue;
        default:
            alert(`Ingrese un número válido.`); 
        break;
    }
}

