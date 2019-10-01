import { Personne } from "./personne";

export class Employe extends Personne{
    salaire : number;
    /* constructor(){
        super();
        this.salaire=1000; //par defaut
    }*/
    constructor(numero: number=0, nom:string="?", age:number=0,
                salaire : number = 1000 ){
        super(numero,nom,age);
        this.salaire=salaire;
    }
}
