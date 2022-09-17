"use strict";
// target: Metodo deorado y generalmente tipado con Object
// propertyKey: Nombre del metodo igualmente tipado con string | symbol
// descriptor: Descripcion del objeto
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//this --> Sirve para funcion normal y no de flecha
function registroDec(target, propertyKey, descriptor) {
    console.log('Clase', target.constructor.prototype);
    console.log('Metodo: ', propertyKey);
    console.log('Property Descriptor: ', descriptor);
    descriptor.value = function (...args) {
        console.log('Argumentos de la funcion', args);
    };
    return descriptor;
}
class ClaseParaMetodo {
    salidaFuncion(dato) {
        console.log(dato);
    }
}
__decorate([
    registroDec
], ClaseParaMetodo.prototype, "salidaFuncion", null);
let obj = new ClaseParaMetodo();
console.log(obj.salidaFuncion('Hola desde mi clase y mi metodo'));
