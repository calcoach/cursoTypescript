// target: Prototipe clase
// propertyKey: nombre de la propiedad
// parameterIndex: indicas la posicio de parametro en un array

function decorarPropiedad(target: Object, propertyKey: string){
    console.log('Clase', target);
    console.log('Nombre de la propiedad', propertyKey);

}

function decorarParametro(target: Object, propertyKey: string, parameterIndex: number){
    console.log('Clase: ', target);
    console.log('Nombre del metodo: ', propertyKey);
    console.log('Posición del parametro: ', parameterIndex);
}


class ClaseEjemplo{

    @decorarPropiedad mensaje: string = 'Hola mundo';

    resta(a:number, @decorarParametro b:number): number{

        return a -b;
    }
}

let claseEjemplo: ClaseEjemplo = new ClaseEjemplo();
console.log(claseEjemplo);
