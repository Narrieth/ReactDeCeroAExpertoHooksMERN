//desestructuracion
//asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

/* const { nombre,edad,clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave); */

/* console.log(persona.edad);
console.log(persona.clave); */

//puedo extraer todo en el parametro usuario(todo lo que tiene persona)
const retornaPerona = (usuario) => {
    const { edad, clave, nombre } = usuario;
    console.log(edad, clave, nombre);
}
retornaPerona(persona);


//puedo extraer solo las propiedades que me interesa de persona, desestructuracion directamente en el argumento
const retornaPerona1 = ({ nombre, edad, rango = 'Capitan' }) => {
    console.log(nombre, edad, rango);
}
retornaPerona1(persona);


const retornaPerona2 = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 12.2121,
            lng: -12.125
        }
    }
}
//const avenger = retornaPerona2(persona);
//console.log(avenger);


const { nombreClave, años, latlng: { lat, lng } } = retornaPerona2(persona);
console.log(nombreClave, años)
console.log(lat, lng);