import Propietario from './propietario.js'
export default class Animal extends Propietario{
    constructor(nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo (){
        return `${this._tipo}`;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    

}