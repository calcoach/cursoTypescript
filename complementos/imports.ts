import * as d3 from 'd3-array';

let numeros: number[] = [5 ,25, 25*25, 25*25*25*25];

console.log('Numero maximo: ', d3.max(numeros));
console.log('Media: ', d3.mean(numeros));

