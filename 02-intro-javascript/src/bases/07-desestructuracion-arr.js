//Desestreucturacion de arreglos o asignacion desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
/* console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]); */
const [p1] = personajes;
console.log(p1)

const [, p2] = personajes;
console.log(p2)

const [, , p3] = personajes;
console.log(p3)

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//crear una funcion que retorna un arreglo, y recibe un argumento 
//1. el primer valor del arr se llamara nombre
//2. el segundo valor se llamara setNombre

const UseState = (valor) => {
    return [valor, () => { console.log('hola mundo') }];
}

const [nombre, setNombre] = UseState('goku');
//console.log(arr);

console.log(nombre);
setNombre();