//.concat() CONCATENARE ARRAY
let array1 = ["a", "b", "c", "d"];
let array2 = ["e", "f", "g", "h", "i"];
let arrayConcatenato = array1.concat(array2);
console.log(arrayConcatenato);

//.join() CONCATENA ARRAY E RESTITUISCE UNA NUOVA STRINGA
let elementi = ["fuoco", "terra", "aria", "acqua", "legno"];
console.log(elementi.join()); // se non metto niente escono elem separati da una virgola
console.log(elementi.join(" "));
console.log(elementi.join("-"));
console.log(elementi.join(" - "));

//.toString() RITORNA UNA STRINGA
let elements = ["fuoco", "terra", "aria", "acqua", "legno"];
console.log(elements.toString());

//toLocaleString() RESTITUISCE UNA STRINGA I CUI ELEMENTI SONO FORMATTATI IN BAE ALLE IMPOSTAZIONI LOCALI
let ar = ["esempio", 12, "----", new Date()];
let ar2 = ar.toLocaleString("it-IT");
console.log(ar2);

//.length LUNGHEZZA ARRAY
let numeriLettere = ["a", 4, 5, "b", "e", "r", 67, 89, 46, "d", "z"];
console.log(numeriLettere.length);

//.valueOf() RITORNA ARRAY STESSO
let array = ["questo", "è", "un", "array"];
console.log(array.valueOf());

//.push() AGGIUNGERE ELEMENTO
let arr = ["lunedi", "martedi", "mercoledi"];
arr.push("giovedi");
console.log(arr);
console.log(arr.push()); //ritorna la length

//.pop() RIMUOVE ULTIMO ELEMENTO
let arrMesi = ["gennaio", "febbraio", "marzo", "aprile"];
arrMesi.pop();
console.log(arrMesi);
console.log(arrMesi.pop()); //ritorna ultimo elemento

//.shift() RIMUOVE PRIMO ELEMENTO
let animali = ["cane", "gatto", "farfalla", "papera"];
animali.shift();
console.log(animali);
console.log(animali.shift()); //ritorna primo elemento dopo aver eliminato quello prima

//.unshift() AGGIUNGERE ELEMENTO ALL'INIZIO
let colori = ["rosa", "viola", "blu", "verde"];
colori.unshift("celeste");
console.log(colori);
console.log(colori.unshift()); //ritorna la length

//.slice() COPIA IN MANIERA NON COMPLETA (SOLO PRIMO LIVELLO) NON DISTRUTTIVO
let spesa = ["latte", "pasta", "uova", "frutta", "miele", "lenticchie", "formaggio"];
let spesaRidotta = spesa.slice(2, 4); // 1n = posizione di partenza (uova) Indice in base zero in corrispondenza del quale avviare l'estrazione
//2n= Indice in base zero in corrispondenza del quale terminare l'estrazione. il n che scrivo non è compreso nell'estrazione (opzionale)
console.log(spesaRidotta);
let spesaRidotta2 = spesa.splice(-2); //con il - parto dalla fine
console.log(spesaRidotta2);

//splice() MODIFICA ARRAY DI BASE ELIMINANDO O SOSTITUENDO ELEMETI. METODO CHE MUTA
let formeGeometriche = [
  "quadrato",
  "rettangolo",
  "triangolo",
  "parallelepipedo",
  "cubo",
  "rombo",
  "trapezio",
  "cilindro",
];
let formeGeometriche2 = formeGeometriche.splice(2, 1, "TRIANGOLO"); // 1n = posizione di partenza Indice in base zero in corrispondenza del quale avviare l'estrazione
//2n = n elementi da eliminare
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2, itemN)
console.log(formeGeometriche2);
console.log(formeGeometriche);
let formeGeometriche3 = formeGeometriche.splice(-2, 2); // con il - parto dalla fine
console.log(formeGeometriche3);

//.copyWithin() COPIA ELEMENTI ARRAY IN UNA NUOVA POSIZIONE SENZA MODIFICARE LA LENGTH. DISTRUTTIVO.SOVRASCRIVE ARRAY ORIGINALE
//copyWithin(target, start, end) start end opzionali
//target è la posizione dove voglio copia gli elementi, dove voglio che inizi la copia degli elementi
// start dove iniziare la copia
//end dove finire la copia (n che scirvo non è incluso. Es. 0, 1,3 mi copia da 1 a 2)
let frutta = ["mela", "pera", "banana", "mango", "kiwi", "albicocca", "ananas", "pesca"];
//             0       1        2        3       4          5          6         7
console.log(frutta.copyWithin(5, 1));
console.log(frutta.copyWithin(1, 2, 4));

//.fill() RIEMPE ARRAY CON ELEMENTO CHE SPECIFICO
//fill(value, start, end)
let fruit = ["mela", "pera", "banana", "mango", "kiwi", "albicocca", "ananas", "pesca"];
//             0       1        2        3       4          5          6         7
console.log(fruit.fill("COCCO", 3, 6));

//.sort() ORDINARE ARRAY
//array di stringhe
let parole = ["cubo", "balena", "tavolo", "panca"];
parole.sort();
console.log(parole);
//array di numeri
let numeri = [15, 1, 2, 5, 101];
numeri.sort();
console.log(numeri); // me li ordina in base al 1 numero e quindi 1, 101, 15, 2, 5
numeri.sort(function (a, b) {
  return a - b;
});
console.log(numeri);

//.indexOf()  TROVARE INDICE ELEMENTO
let citta = ["torino", "napoli", "palermo", "catania", "firenze", "bologna"];
console.log(citta.indexOf("palermo"));

//.lastIndexOf() RITORNA L'ULTIMO INDICE DI IN VALORE SPECIFICATO
let continenti = ["europa", "america", "asia", "europa", "africa", "oceania"];
console.log(continenti.lastIndexOf("europa"));

//.at() RITORNA ELEMENTO IN CORRISPONDENZA ALL'INDICE CHE SCRIVO
let nazioni = ["italia", "francia", "germania", "portograllo", "belgio", "spagna"];
console.log(nazioni.at(2));
console.log(nazioni.at(5));

//Array.isArray() CONTROLLA CHE ARRAY E' UN' ARRAY
let vocali = ["a", "e", "i", "o", "u"];
console.log(Array.isArray(vocali)); //ritorna true o false

//Array.from() CREA UN'ARRAY DA UN OGGETTO ITERABILE
let lettere = "ciao a tutti";
let lettere2 = Array.from(lettere);
console.log(lettere2);

//Array.of() CREA UN NUOVA ISTANZA DAGLI ARGOMENTI indipendentemente dal numero e tipo degli argomenti
let x = [true, 78, "ciao", "a", 45, "tutti", false];
console.log(Array.of(x));
console.log(Array.of("si", 4, false));

//.keys() RITORNA LE PROPRIETA'/CHIAVI
let arrWeather = ["sole", "nuvole", "grandine", "pioggia", "vento", "neve"];
let weather = arrWeather.keys();
console.log(weather.next().value);
console.log(weather.next().value);
console.log(weather.next().value);
// in loop FOR IN
let arrWeather2 = ["sole", "nuvole", "grandine", "pioggia", "vento", "neve"];
let weather2 = arrWeather.keys();
for (let element of weather2) {
  console.log(element);
}

//.values() RITORNA I VALORI
let tempoAtmosferico = ["sole", "nuvole", "grandine", "pioggia", "vento", "neve"];
let tempo = tempoAtmosferico.values();
//console.log(tempo.next().value)
//console.log(tempo.next().value)
// in loop FOR IN
for (let elem of tempo) {
  console.log(elem);
}

//.entries() RITORNA COPPIE CHIAVE VALORE
//restituisce un nuovo oggetto iteratore di matrice che contiene le coppie chiave/valore per ogni indice nella matrice.
let arrMeteo = ["sole", "nuvole", "grandine", "pioggia", "vento", "neve"];
let meteo = arrMeteo.entries();
console.log(meteo.next().value);
console.log(meteo.next().value);
console.log(meteo.next().value);
// in loop FOR IN
let arrMeteo2 = ["sole", "nuvole", "grandine", "pioggia", "vento", "neve"];
let meteo2 = arrMeteo2.entries();
for (let element of meteo2) {
  console.log(element);
}

//.every() VERIFICA SE TUTTI GLI ELEMENTI SOFFISFINO UNA CONDIZIONE  (con funzioni)
let numbers = [24, 56, 78, 21, 7, 89, 24, 67];

function age(n) {
  return n < 90;
}
console.log(numbers.every(age));

const ele = (n) => {
  return n < 90;
};
console.log(numbers.every(ele));

//.some() VERIFICA CHE MINIMO UN ELEMENTO SODDISFI UNA CONDIZIONE (con funzioni) (non distruttivo)
let a = [13, 35, 55, 1, 19];
function prova(n) {
  return n % 2 === 0;
}
console.log(a.some(prova));

//.filter() COPIA PARTE DELL'ARRAY. COPIA SOLO ELEMENTI CHE SODDISFANO UNA DETERMINATA CONDIZIONE
//come un if(condizione)
let num = [24, 56, 78, 21, 7, 89, 24, 67];
let risultato = num.filter((n) => {
  return n > 40;
});
console.log(risultato);

function nume(n) {
  return n > 30;
}
console.log(num.filter(nume));

//.map() CREA UN NUOVO ARRAY CON GLI ELEMENTI CHE SODDISFANO UNA CONDIZIONE
let numerii = [24, 56, 78, 21, 7, 89, 24, 67];
let numerii2 = numerii.map((n) => n - 20);
console.log(numerii2);
let numerii3 = numerii.map((n) => n > 40);
console.log(numerii3);

//.forEach() CICLA ARRAY
let materialeScolastico = ["penna", "matita", "gomma", "righello", "colori"];
materialeScolastico.forEach((element) => {
  console.log(element);
});

//.find() RITORNA IL PRIMO ELEMENTO CHE SODDISFA UNA CONDIZIONE
let n = [14, 57, 78, 65, 87, 79, 2, 56];
let n1 = n.find((e) => e > 60);
console.log(n1); //primo numero >60

//.findIndex() RITORNA INDICE CHE PRIMO ELEMENTO CHE SODDISFA UNA CONDIZIONE
let nn = [14, 57, 78, 65, 87, 79, 2, 56];
let nn1 = nn.findIndex((e) => e > 60);
console.log(nn1);

//.findLast() RITORNA IL PRIMO ELEMENTO (PARTENDO DALLA FINE) CHE SODDISFA UNA CONDIZIONE
let nnn = [14, 57, 78, 65, 87, 79, 2, 56];
let nnn1 = nnn.findLast((e) => e > 60);
console.log(nnn1);

//.includes() RITORNA TRUE O FALSE IN BASE SE IL VALORE E' PRESENTE O NO
let nnnn = [14, 57, 78, 65, 87, 79, 2, 56];
let nnnn1 = nnnn.includes(35);
console.log(nnnn1);
let nnnn2 = nnnn.includes(14);
console.log(nnnn2);

//.flat() CREA UN NUOVO ARRAY CON I GLI ELEMENTI DEI SOTTOARRAY
let macchine = ["fiat", "ford", ["ferrari", "mercedes", ["pegeut", "volkswagen"], " hyundai"], "toyota"];
console.log(macchine.flat());
console.log(macchine.flat(2));

//.flatMap() CREA UN NUOVO ARRAY (mix tra flat e map)
let m = [1, 24, 45, 46, 57, 77, 78, 89];
let m1 = m.flatMap((e) => e + 10);
console.log(m1);
let m2 = m.flatMap((e) => (e === 45 ? [46, 47] : 0)); //ternary operator
console.log(m2);

//.reduce() ESEGUE UNA FUNZIONE DI CALLBACK (DECISA DALL'UTENTE) SU TUTTI GLI ELEMENTI DELL'ARRAY. IL RISUTATO FINALE E' UN SINGOLO VALORE
//reduce(callbackFn, initialValue)
let z = [12, 22, 34, 35, 45, 46, 47];
function somma(tot, valori) {
  return tot + valori;
}
console.log(z.reduce(somma));

let z1 = [1, 3, 4, 2];

let initialValue = 10;
const sommaZ1 = z1.reduce((acc, value) => acc + value, initialValue);
console.log(sommaZ1);

//.reduceRight() APPLICA UNA FUNZIONE PARTENDO DALLA FINE DELL'ARRAY
let c = [10, 2, 30, 40];
let c1 = c.reduceRight((acc, value) => acc - value);
console.log(c1); //(40 - 30 -2 -10)

let c2 = [
  [10, 2],
  [4, 2],
  [40, 44],
];
let c3 = c2.reduceRight((acc, value) => acc.flat(value));
console.log(c3);

//.reverse() RIBALTA L'ARRAY
let marche = ["adidas", "nike", "converse", "superga"];
console.log(marche.reverse());

//.with() RESTITUISCE UNA COPIA DELL'ARRAY CON IL VALORE DI UN INDICE MODIFICATO (che specifico tra parentesi)
//array.with(index, value)
const arrq = [1, 2, 3, 4, 5];
console.log(arrq.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arrq); // [1, 2, 3, 4, 5]
