//pour pas de rouge (erreur typsecript):
//   solution1 , ajouter = valeur par défaut 
//   solution2, modifier tsconfig.json pour que tsc
//              soit moins strict
class Personne {
    numero: number; //undefined par defaut si pas initialisé
    nom :  string="?";
    age: number=0;

}

let p1 : Personne;
p1 = new Personne();
p1.nom="Dupond";
console.log(p1.nom);
console.log(p1);
console.log(JSON.stringify(p1));