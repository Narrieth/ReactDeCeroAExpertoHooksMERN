//import { heroes } from './data/heroes';
//import {heroes} from './data/heroes'
import { heroes } from '../data/heroes';
import heroes1, { owners } from '../data/heroes1';
//import {heroes1, owners} from './data/heroes1';

console.log(heroes1);
console.log(owners);
/* const getHeroeById = (id) => {
    return heroes.find(hero => hero.id === id);
}
 */
const getHeroeById = (id) => heroes.find(hero => hero.id === id);
console.log(getHeroeById(1));


const getHeroesByOwner = (owner) => heroes.filter(hero => hero.owner === owner);
console.log(getHeroesByOwner('Marvel'));