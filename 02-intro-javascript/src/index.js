const nombre = 'Narrieth';
const apellido = 'Felipe';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `Hola ${nombre} ${apellido}`;
console.log(nombreCompleto)

function getSaludo(nombre) {
    return 'Hello ' + nombre;;
}
console.log(`Este es un texto: ${getSaludo(nombre)}`)