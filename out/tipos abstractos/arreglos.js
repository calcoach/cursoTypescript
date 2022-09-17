"use strict";
// array = ['rojo', 'azul', 'verde']
let frutas = [];
let colores = ['rojo', 'azul', 'verde'];
//let objetos: miObjeto[] = []
//objetos[index]
for (const index in colores) {
    console.log(colores[index]);
}
colores.pop();
colores.push('cafe');
console.log('Resultados: ', colores);
