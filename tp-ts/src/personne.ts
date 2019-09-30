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

let p1 : Personne;p1 = new Personne();
p1.nom="Dupond";console.log(p1.nom);
console.log(p1);
p1.age = 25;
console.log("nouvel age de p1=" + p1.age);
try { 
    p1.age = -5;
    console.log("nouvel age de p1=" + p1.age);
}catch (err ){
   console.log("exception/erreur: " + err);
}
let p2 = new Personne(2,"titi",30); console.log(p2);