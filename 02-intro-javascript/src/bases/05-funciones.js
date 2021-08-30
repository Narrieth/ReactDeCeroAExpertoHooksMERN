//Funciones en JS
const saludar = function (nombre) {
    return `Hola, ${nombre} `;
}

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola mundo`;

/* console.log(saludar('Goku')) */
console.log(saludar2('vegeta'));
console.log(saludar3('goku'));
console.log(saludar4());


const getUser = () => {
    return {
        uid: 'ABC',
        username: 'bob_esponja'
    }
}

const getUser1=()=>({
    uid:'123',
    username:'pepito'
})

console.log(getUser());

const user=getUser1();
console.log(user);

//Tarea
//1.transformar a una funcion de flecha
//2.tiene que retornar un objeto implicito
//3.pruebas
function getUsuarioActivo(nombre){
    return{
        uid:'qwe',
        username:nombre
    }
};
const usuarioActivo=getUsuarioActivo('juan');
console.log(usuarioActivo)

const getUserActivo=(nombre)=>({
    uid:'qwe',
    username:nombre
});
const usuarioActivo1=getUserActivo('pedro');
console.log(usuarioActivo1)