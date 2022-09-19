declare function decorarPropiedad(target: Object, propertyKey: string): void;
declare function decorarParametro(target: Object, propertyKey: string, parameterIndex: number): void;
declare class ClaseEjemplo {
    mensaje: string;
    resta(a: number, b: number): number;
}
declare let claseEjemplo: ClaseEjemplo;
