import { getHeroeById } from './bases/08-importacion-export';


/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(2);
        resolve(heroe);
        //reject('No se pudo encontrar el heroe');
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe',heroe)
})
.catch(err=>console.warn(err)); */


const getHeroeByIsAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
}
getHeroeByIsAsync(2).then(console.log)
    .catch(console.warn)