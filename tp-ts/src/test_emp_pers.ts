import { Personne } from "./personne";
import { Employe } from "./employe";

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