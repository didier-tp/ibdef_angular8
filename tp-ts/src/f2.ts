var tabChaines : string [] = [  "abc" , "def" ];
//à faire boucle pour récupéer valeur , convertir en majuscule et afficher
for(let ch of tabChaines){
    console.log(ch.toUpperCase());
}

var tableau2issuDeLaTransformation = 
tabChaines.map ( (ch:string) => { return ch.toLocaleUpperCase();}) ;
console.log(tableau2issuDeLaTransformation);

//contruire une url avec valeur de paramètre variable:
let maxi=150;
let mini=50;
//let url="http://localhost://serverXy/zzz?mini="+mini+"&maxi="+maxi;
let url=`http://localhost://serverXy/zzz?mini=${mini}&maxi=${maxi}`;
console.log(url);