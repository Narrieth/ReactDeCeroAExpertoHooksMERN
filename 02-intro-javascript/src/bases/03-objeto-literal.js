const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 123456,
        lat: 78.9456,
        lng: 65.4789
    }
};
console.log(persona);
//console.log({ persona: persona });
//console.table(persona);

//clonar el objeto persona, asignacion de referencia
//modificacion del objeto en memoria, copia de la referencia
//NO HACER esta mutacion
const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona2)

//clon objeto son spread mejor crear un objeto nuevo, un espacio en memoria nuevo
const persona3={...persona};
persona3.nombre='Peter';
console.log(persona3)