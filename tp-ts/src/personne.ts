//pour pas de rouge (erreur typsecript):
//   solution1 , ajouter = valeur par défaut 
//   solution2, modifier tsconfig.json pour que tsc
//              soit moins strict
class Personne {
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

class Employe extends Personne{
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

let e1 : Employe = new Employe();
let e2 : Employe = new Employe(3, "titi" , 45,2500);
console.log("e1="+JSON.stringify(e1));
console.log("e2="+JSON.stringify(e2));

let p1 : Personne;p1 = new Personne();p1.nom="Dupond";console.log(p1.nom);
console.log(p1);p1.age = 25;console.log("nouvel age de p1=" + p1.age);
try { 
    p1.age = -5;
    console.log("nouvel age de p1=" + p1.age);
}catch (err ){
   console.log("exception/erreur: " + err);
}
let p2 = new Personne(2,"titi",30); console.log(p2);