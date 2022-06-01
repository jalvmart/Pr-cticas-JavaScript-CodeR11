// 01/06/2022 JMartinezR - Code-R11
// Práctica con arreglos y el método reduce
// Tablas de Multiplicar




let tablas = [1, 10]
let factores = [1, 10]
let rango = usarRango(factores)

console.log(crearTablas(tablas))

function crearTablas(arr) {
    return usarRango(arr).reduce((n1, x) =>
        n1 += `\nTabla del ${x}\n` + rango.reduce((n2, y) =>
            n2 += `${x} x ${y} = ${x * y}\n`
            , "")
        , "Tablas de Multiplicar\n")
}

function usarRango(arr) {
    _ = [];
    for (let i = arr[0]; i <= arr[arr.length - 1]; i++) _.push(i);
    return _;
}