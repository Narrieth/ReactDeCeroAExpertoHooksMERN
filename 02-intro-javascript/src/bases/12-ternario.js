const activo = true;
const activo1 = true;
/* let mensaje='';

if(!activo){
    mensaje='Activo';
}else{
    mensaje='Inactivo';
} */

const mensaje = (activo) ? 'Activo' : 'Inactivo';

//cuando queremos solo mostrar algo si una condicion se cumple y caso contrario no hacer nada(solo el if)
const mensaje1 = !activo1 && 'Activo';

console.log(mensaje)
console.log(mensaje1)