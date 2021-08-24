//Arreglos en JS
//NO USAR, usar solo esta forma cuando el arreglo tiene un tamaño definido, por ejemplo un arreglo de 100 posiciones
//esto no quiere decir que al arreglo no se le pueda añadir mas items, se puede con el push
//ahora el arreglo tiene 100 posisciones vacias y una adicional
/* const arreglo = new Array(100);
arreglo.push(1)
console.log(arreglo) */

//si usar, pero no usar el push, xq modifica el objeto principal
const arreglo2 = [1,2,3,4];
/* arreglo2.push(1)
arreglo2.push(2)
arreglo2.push(3)
arreglo2.push(4) */

const arreglo3 =[...arreglo2, 5];

const arreglo4= arreglo3.map(function(numero){
    return numero *2;
});

console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);