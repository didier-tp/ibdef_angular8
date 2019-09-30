var x: number;
//x="abc"; erreur
x=18;
console.log("x="+x);

console.log("avant");
setTimeout( () =>{ console.log("affichage différé");} , 2000); //2000 ms
console.log("suite");

let refFct : Function;

refFct = (x:number,y:number) => { return (x+y);}
console.log(refFct(2,6)); //8

refFct = (x:number,y:number) => { return (x*y);}
console.log(refFct(2,6)); //12
