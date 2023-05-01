/*FUNZIONI parola chiave function
Porzione di codice delimitate da {} che esegue delle istruzioni definite al suo interno. Posso usarla per usare un blocco di codice più volte
function nomeFunzione() {
}
-nelle () vanno i parametri
-nelle {} va il codice che si deve eseguire detto CORPO. Delimitanno il contesto o ambito di esecuzione


SCOPO DI UNA FUNZIONE: incapsulare blocco di codice o istrUzioni che verranno poi eseguite. 
QUANDO USARLE: quando ho un set ripetuto di istruzioni
Io creo il blocco di codice ma non è detto che verrà eseguito immediatamente ma potrebbe anche non essere mai eseguito (condizione if switch)
Il fatto di crearlo non implica che verra eseguito, verrà letto per salvare delle istruizioni in memoria ma non è detto che venga esguito. Creazione non implica esecuzione
-DEFINIRE una funzione significa nominarla ed indicare le istruzioni da eseguire
*/
function somma() {
  return 2 + 4;
}
/*
-INVOCARE una funzione significa richiamarla attraverso il suo nome in un punto del programma. 
Se una fuzione non è invocata non ha effetto sul codice o meglio non eseguirà mai il codice o 
può essere invocata molteplici volte
*/
function ciao() {
  console.log("ciao a tutti");
}
ciao(); // così la sto invocando
/*
(N.B. posso anche invocare prima e poi definirla. HOISTING(sollevamento) ovvero la possibilità di js
di eseguire una funzione prima che sia dichiata. Si chiama così perchè è come se la definizione fosse portata
al top del programma corrente. Si usa per una maggiore leggibilità del codice ma può portare ad errori((hoisting è applicabile anche alle variabili var)))
es hosting:
*/
saluto();

function saluto() {
  console.log("ciao a tutti");
}

/*
quindi tramite le funzioni posso richiamare un blocco di codice più volte.
N.B. tutte le variabili che creo nella funzione esistono solo all'interno della funzione(scope locale). Uso per esempio per incapsulare parti di codice che non devono essere visibili all'esterno
le variabili che creo nello scope globale sono utilizzabili anche all'interno della funzione

Differenza FUNZIONI E METODI
Metodi sono funzioni di oggetti quindi le funzioni legate ad oggetti sono metodi
Funzioni al di fuori di oggetti o funzioni custom sono funzioni classiche
Differenza sta nella circostanza
*/

//ESEMPIO FUNZIONI
function greet() {
  console.log("ciao a tutti");
}
greet();

// o la salvo in una variabile
const greet = function () {
  console.log("ciao a tutti");
};

function greet() {
  console.log("ciao a tuttti");
  console.log("sto imparando le funzioni");
  console.log("ho sonno");
}

greet(); // escono tutti e 3 i console log
greet(); // escono tutti e 3 i console log 2 volte

//PARAMETRI RENDONO LA FUNZIONE DINAMTICA
// se la funzione ha dei parametri a questi viene passato un valore detto ARGOMENTO.(parametri e argomento sono la stessa cosa)

let name = "Omar";
function sayHiTo() {
  console.log("ciao" + "Michela"); //uscirà sempre ciao michela
  console.log("ciao" + name); // esce valore di name. Name è fuori quindi si può leggere sia nel contesto globale che nello scope interno della funzione. Mi sto appoggiando ad una variabile globale che quindi non potrò più usare
}
sayHiTo();
name = "Vincenzo";
sayHiTo();
name = "Johnatan";
sayHiTo();
// così però non è molto dinamico. Per renderlo dinamico passo argomento o parametro alla funzione.Lo chiamo come voglio. E' un placeholder
//QUANDO DICHIARO UN PARAMETRO DEVO ASPETTARMI UN VALORE IN INGRESSO che posso usare dove voglio all'interno della funzione ma NON E' DETTO CHE LO RICEVO (se non lo ricevo è UNDEFINED)
//PARAMETRO= segnaposto che in futuro acquisirà valore
function sayHiTo(param) {
  if (param != undefined) {
    // oppure if(param)
    console.log("ciao" + param);
  } else {
    console.log("non hai passato il paramentro");
  }
}
sayHiTo();
sayHiTo("Michela");
sayHiTo("Omar");
sayHiTo("Vincenzo");
sayHiTo("Johnatan");
//posso avere un n infinito di parametri. Non devo definire in anticipo quanti passare e
//non sono obbligato a passarli nello stesso ordine in cui li scrivo.
function sayHiTo(param, param2) {
  if (param != undefined) {
    // oppure if(param)
    console.log("ciao " + param + param2);
    console.log("ciao " + param2 + param);
  } else {
    console.log("non hai passato il paramentro");
  }
}
sayHiTo();
sayHiTo("Michela", "-");

//N.B. è importante l'ordine che uso nel passare i parametri quando invco la funzione
function sayHiTo(nome, num) {
  if (nome != undefined && num != undefined) {
    // oppure if(param)
    console.log("ciao " + nome + (num + 1));
  } else {
    console.log("non hai passato il paramentro");
  }
}
sayHiTo(12, "Antonio"); //ciao 12Antonio1
sayHiTo("Michela", 24); //ciao Michela

//uso variabile esterna + parametri interni
let mestiere = "student";

function sayHiTo(nome, num) {
  if (nome != undefined && num != undefined) {
    // oppure if(param)
    console.log("ciao " + nome + (num + 1) + mestiere);
  } else {
    console.log("non hai passato il paramentro");
  }
}
sayHiTo(12, "Antonio"); //ciao 12Antonio1
sayHiTo("Michela", 24); //ciao Michela

//FUNZIONE COME ESPRESSIONE ALL'INTERNO DELLA VARIABILE
//in questo modo non posso fare l'hoisting
//variabile che contiene funzione anonima e la tratto come se fosse una normale funzione
const sayHiTo = function (nome, num) {
  console.log("ciao" + nome + num);
};
sayHiTo("ele", 22); //la invoco allo stesso nome di una funzione normale

//SENZA RETUN
const addTenVoid = (function (num) {
  let result = num + 10;
  console.log(result); //20 perchè giù ho 10 ↓ Se non uso return l'unica cosa che posso fare è consologgare all'interno
})(addTenVoid(10));
console.log(addTenVoid(10)); //esce undefined perchè non ho return.
//una FUNZIONE VOID cioè SENZA RETURN esce sempre UNDEFINED

//RETURN
//funzione ha un risultato ma se voglio usarlo ad di fuori dello scope locale devo usare RETURN.
//potrei fare così ma in questo modo uso di nuovo una variabile globale che poi non posso più utilizzare quindi uso RETURN
let result = "";
const addTen = function (num) {
  result = num + 10;
  console.log(result);
};
addTen(10);
console.log(result);
//funzione ci ritorna un valore. return deve essere l'ultima cosa che scrivo (serve per portare il valore fuori o rimarrebbe nella funzione)
//dopo return non posso scrivere più niente perchè con return è come se uscissi dall'esecuzione della funzione. posso mettere un condizionale però
//SCOPO: creare un effetto esterno a se stessa(effetto collaterale o side effect) Es. uso per modificare la pagina con DOM manipolation
const addTen2 = function (num) {
  let result = num + 10;
  return result;
};
addTen2(10);
console.log(addTen(10)); //20 posso fare console.log perchè ho return
//let salvoRisultatoEsternamente = return (undefined)result(undefined) // non lo posso scrivere
//addTen() sarebbe result solo che non posso mettere così ↥ perchè result esiste solo all'interno della funzione
let salvoRisultatoEsternamente2 = addTen2(12); // SCRIVO COSì
salvoRisultatoEsternamente2 = 22; // posso scrivere anche così perchè 22 è il riultato della funzione
console.log(salvoRisultatoEsternamente2); //22
let salvoRisultatoEsternamente3 = addTen2(14);
let salvoRisultatoEsternamente4 = addTen2(2);

//N.B.se una funzione ha un RETURN si definisce FUNZIONE FRUTTIFERA ( fruitful function) cioè restituisce qualcosa alla fine
// posso salvarmi il dato all'esterno e usarlo come voglio
//senza return posso solo consologare il risultato ma non posso fare nient'altro

//ES IMPORTATEN
const addToTen3 = function () {
  let result = 2 + 10;
  return result;
};
let result1 = addToTen3(); // così la invoco
let result2 = addToTen3; //così mi passo l'indirizzo di memoria di dove è salvata la funzione
//TUTTO QUELLO CHE NON E' PRIMITIVA(num, boolean, string, undefined, null) SI SALVA PER REFERENCE O PER INDIRIZZO DI MEMORIA (obj, array, function)
console.log(result2); //esce f cioè la funzione stessa. la definizione stessa di funzione che trovo in memoria. questo è il contentuto della variabile result2
//la funzione addToTen3 e result2 puntano alla stessa area di memoria quindi stessa funzione quindi stesso risultato

//PASSARE ARRAY COME PARAMETRO
const arrNum = [28, 56, 78, 65, 42];
const arrNum2 = [47, 87, 65, 32, 53];
//metto come parametro arr ma posso chiamarlo come voglio e dentro metto <arr.length così prende ogni volta il paramentro diverso che gli passo quando invoco la funzione
const funzioneArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
funzioneArray(arrNum);
funzioneArray(arrNum2);

//RETURN CON IF
//se elems è 65 ti fermi e ritorni i numeri che hai trovato fino a quel momento. Da 65 in poi non consollogare
const funzioneArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const elems = arr[i];

    if (elems === 65) {
      return; // break
    }
    console.log(arr[i]);
  }
};

funzioneArr(arrNum);

//altri esempi con CONTROLLI DI GUARDIA
//con CONTINUE(skippa il numero e va a quello dopo) E BREAK(si ferma)
const arrNumeri = [28, 56, 78, 65, 42];
const arrNumeri2 = [47, 87, 32, 65, 53];

const funzioneAr = function (arr) {
  for (let i = 0; i <= arr.length; i++) {
    const elems = arr[i];

    if (elems === 65) {
      continue;
    }
    if (elems === 32) {
      break; //con break esco dal forLoop ma non dalla funzione quindi il console.log verrà eseguito.
      //se metto return non faccio nessun'altra operazione dopo nemmeno il console.log
    }

    console.log(arr[i]);
  }
  console.log(arr[i]);
};

funzioneAr(arrNumeri);
funzioneAr(arrNumeri2);
//primo array: 28,56,78, 65 è nell'if quindi lo skippa e va a 42
//secondo array: 47,87, 32 è nell'if con break quindi si ferma e 32, 65 e 53 non sono consollogati

//FUNZIONI FRECCIA O ARROW FUNCTION
//sono come le  funzioni anonime all'interno di una variabile
const arrowFun = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    const elems = arr[i];

    if (elems === 65) {
      continue;
    }
    if (elems === 32) {
      break;
    }
    console.log(arr[i]);
  }
  console.log(arr[i]);
};
arrowFun(arrNumeri);

// il MAGGIOR VANTAGGIO è quando ho una singola linea scompaiono le parentesi
//ASSENZA DI {} SOLO QUANDO HO 1 LINEA. RETURN IMPLICITO
const arrowFunct = (num) => num + 2;
arrowFunct(2);
let risultato = arrowFunct(2);
console.log(risultato); //4

//N.B.se metto le {} devo avere un return o mi torna undefinded
const arrowFunct2 = (num) => {
  return num + 2;
};
arrowFunct(2);
let risultato2 = arrowFunct2(2);
console.log(risultato2); //4
// arrow function sono usate in alcuni metodi degli array
// arrow function le uso con ternary operator
const condizione = (n) => (n > 5 ? "true" : "flase");
condizione(4);
console.log(condizione()); //false
////////////////////////////////////////////////////////////////////////////////////////////

//FUNZIONI ANONIME non hanno nomi (si usano nelle CALL BACK)
const myButton = document.querySelector("button");

myButton.onclick = function () {
  console.log("bottone");
};

const nome = function () {
  console.log("mi chiamo ele");
};
nome();

//FUNZIONI FRECCIA
const arrowFunction = (num) => {
  num + 2;
};

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

//FUNZIONE PURA
//funzione che dati gli stessi input darà lo stesso risultato
