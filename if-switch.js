//IF
const boy = {
  name: "Dino",
  age: 14,
};
if (boy.age >= 18) {
  console.log("puoi entrare");
} else if (boy.age < 16 && boy.age > 12) {
  console.log("torna tra un po'");
} else {
  console.log("torna a casa");
}
//if se c'è una condizione
//else if seconda condizione
//else in tutti gli altri casi .si puo omettere

let a = 2;
let b = 20;
if (a === b) {
  document.write("a e b sono uguali");
}

//CONDIZIONE CON TERNARY OPERATOR
const studente = {
  nome: "ele",
  voto: 21,
};
if (studente.voto >= 18) {
  console.log("promosso");
} else {
  console.log("bocciato");
}

let esame = studente.voto >= 18 ? "promosso" : "bocciato";
//           condizione          if     se è vera    else     se è falsa
console.log(esame);

//SWITCH
//case: opzione univoca così che la condizione vera si verifichi solo una volta.(if)
//default: si verifica quando nessuno dei casi si è verificato (else)

let giornoPrescelto = "venerdi";

switch (giornoPrescelto) {
  case "mercoledi":
    console.log("mercoledi");
    break;
  case "giovedi":
    console.log("giovedi");
    break;
  case "venerdi":
    console.log("venerdi");
    break;
  default:
    console.log("non esiste");
}

const fruit = "Ananas";

switch (fruit) {
  case "Banana":
    console.log("Hai trovato una banana");
    break;
  case "Apple":
    console.log("Ecco una mela");
    break;
  case "Papaya":
    console.log("Una Papaya");
    break;
  default:
    console.log("Non ce l'abbiamo");
}

//comparazioni con switch
let variable = 200000;
switch (true) {
  case 1:
    variable < 10 && variable > 8;
    console.log("è <10 e >8");
    break;
  case 2:
    variable > 10;
    console.log("è > 10");
    break;
  default:
    console.log("niente");
}
