// target: Metodo deorado y generalmente tipado con Object
// propertyKey: Nombre del metodo igualmente tipado con string | symbol
// descriptor: Descripcion del objeto

//this --> Sirve para funcion normal y no de flecha
function registroDec(target: Object, propertyKey: string, descriptor: any){
    console.log('Clase', target.constructor.prototype);
    console.log('Metodo: ', propertyKey);
    console.log('Property Descriptor: ', descriptor);
    
    descriptor.value = function(...args: any[]){
        console.log('Argumentos de la funcion', args);
    }
    return descriptor;
}

class ClaseParaMetodo {

    @registroDec
    salidaFuncion(dato: string){
        console.log(dato);
        
    }
}

let obj = new ClaseParaMetodo();

console.log(obj.salidaFuncion('Hola desde mi clase y mi metodo'));
