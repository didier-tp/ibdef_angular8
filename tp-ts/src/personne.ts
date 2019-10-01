//pour pas de rouge (erreur typsecript):
//   solution1 , ajouter = valeur par défaut 
//   solution2, modifier tsconfig.json pour que tsc
//              soit moins strict
export class Personne {
    /*
    numero: number; //undefined par defaut si pas initialisé
    nom :  string;
    age: number;    */
    constructor(public numero:number=0,
                public nom:string="?",
                private _age:number=0){
        /* this.numero=numero; this.nom=nom; this.age=age;*/
    }

    public get age():number { return this._age;}
    public set age(newAge : number) {
        if(newAge>=0) this._age = newAge;
        else throw "age negatif inderdit";
    }
}


