/*FUNZIONI parola chiave function
Porzione di codice delimitate da {} che esegue delle istruzioni definite al suo interno.
function nomeFunzione() {
}
-nelle () vanno i parametri
-nelle {} va il codice che si deve eseguire detto CORPO
*/
//PARAMETRI
let namee = "ele";
function ciao(namee) {
  console.log("ciao", namee);
}
ciao("Anto");
ciao(namee);
/*
Tramite le funzioni posso richiamare un blocco di codice più volte
N.B. tutte le variabili che creo nella funzione esistono solo all'interno della funzione(scope locale)
le variabili che creo nello scope globale sono utilizzabili anche all'interno della funzione

Differenza FUNZIONI E METODI
Metodi sono funzioni di oggetti quindi le funzioni legate ad oggetti sono metodi
Funzioni al di fuori di oggetti o funzioni custom sono funzioni classiche
Differenza sta nella circostanza
*/

//INVOCARE UNA FUNZIONE
function ciao() {
  console.log("ciao a tutti");
}
ciao(); // così la sto invocando

//FUNZIONI ANONIME non hanno nomi (si usano nelle CALL BACK)
/*const myButton = document.querySelector("button");

myButton.onclick = function () {
  console.log("bottone");
};
*/

const nome = function () {
  console.log("mi chiamo ele");
};
nome();

//FUNZIONI FRECCIA

//FUNZIONE DENTRO FUNZIONE
let materia = "storia";

function studia(materia) {
  let studente = "Marco";
  console.log(studente, "studia", materia);
  esame(studente + materia);
}
studia(materia);
esame("mate");

function esame(materia) {
  console.log(materia);
  //console.log(studente, "ha passato l'esame di", materia); //mi dice studente is not defined perchè è una variabile che esiste sono nella funzione studia
}
esame("italiano");

//Altro esempio
function generaTabella() {
  generaHeader();
  generaRighe();
  generaCelle();
  generaFooter();
  console.log("tabella generata");
}

function generaHeader() {
  console.log("header generato");
}

function generaRighe() {
  console.log("righe generate");
}

function generaCelle() {
  console.log("celle generate");
}

function generaFooter() {
  console.log("footer generato");
}

generaTabella();
