"use strict";
// target: Prototipe clase
// propertyKey: nombre de la propiedad
// parameterIndex: indicas la posicio de parametro en un array
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function decorarPropiedad(target, propertyKey) {
    console.log('Clase', target);
    console.log('Nombre de la propiedad', propertyKey);
}
function decorarParametro(target, propertyKey, parameterIndex) {
    console.log('Clase: ', target);
    console.log('Nombre del metodo: ', propertyKey);
    console.log('Posición del parametro: ', parameterIndex);
}
class ClaseEjemplo {
    constructor() {
        this.mensaje = 'Hola mundo';
    }
    resta(a, b) {
        return a - b;
    }
}
__decorate([
    decorarPropiedad
], ClaseEjemplo.prototype, "mensaje", void 0);
__decorate([
    __param(1, decorarParametro)
], ClaseEjemplo.prototype, "resta", null);
let claseEjemplo = new ClaseEjemplo();
console.log(claseEjemplo);
