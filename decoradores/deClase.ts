// target: Function o any

function registro(funcionalidad: Function): void {
    console.log(funcionalidad);
}

@registro
class NuevaClase{

    constructor(){
        console.log("Mensaje de la NuevaClase");
        
    }
}

let miClase: NuevaClase = new NuevaClase();