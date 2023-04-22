//FOR LOOP
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//con array
let array = [23, 35, 59, 99, 101];
//lunghezza 5   1   2   3    4   5
//elementi 4    0   1   2    3   4

//voglio mandare a schermo ogni singolo elemento.
//senza loop. Lungo e ripetitivo. Potrei avere tanti elementi o potrei non sapere n di elementi. Per questo uso il loop
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

//con loop.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// for =per ogni volta che / let i =0 = contatore/  i<array.length =   condizione   (finche i<array.length)  // i++           iteratore

//break per bloccare il loop
let a = [23, 33, 46, 59, 60];
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
  if (a[i] % 2 === 0) {
    //se metto console.log prima manda a schermo, se lo metto dopo non manda a schermo
    break;
  }
}

//continue continua il loop e salta elemento/i
let aa = [23, 33, 46, 59, 60];
for (let i = 0; i < aa.length; i++) {
  if (aa[i] % 2 === 0) {
    continue;
  }
  console.log(aa[i]);
}

//con array di oggetti
const libri = [
  { name: "libro 1", id: 40, prezzo: 55 },
  { name: "libro 2", id: 65, prezzo: 65 },
  { name: "libro 3", id: 2, prezzo: 22 },
  { name: "libro 4", id: 76, prezzo: 56 },
];
for (let i = 0; i < libri.length; i++) {
  console.log("nome", libri[i].name, "id", libri[i].id, "prezzo", libri[i].prezzo);
}

//for dentro un for (esempio tabella)
let tabella = '<table border="1">';
for (let x = 0; x < 5; x++) {
  tabella += "<tr>"; //righe
  for (let y = 0; y < 5; y++) {
    tabella += "<td> " + y + "</td>"; //cella
  }
  tabella += "</tr>"; //righe
}
tabella = "</table>";

//FOR EACH

let arr = [22, 23, 24, 35, 36, 37];

arr.forEach((el) => {
  console.log(el);
});

arr.forEach((num, i) => console.log(num, i));

//FOR OF (oggetti e array)

let ar = ["ele", "roberta", "andrea", "francesco"];
for (let elem of ar) {
  console.log(elem);
}
//↥ così mi escono solo i valori.
//Se voglio sia indici che valori uso metodo .entries() ↧
let arrr = ["ele", "roberta", "andrea", "francesco"];
for (let [index, elem] of arrr.entries()) {
  console.log(elem + " e " + index);
}

//con oggetti
const libro = {
  name: "libro",
  id: 400,
  comprato: true,
};
for (let [index, elem] of Object.entries(libro)) {
  console.log(index + " " + elem);
}

//FOR IN

let macchina = {
  marca: "fiat",
  prezzo: 1000,
  comprato: true,
};
console.log("prezzo" in macchina); //in mi ritorna true o false
console.log("modello" in macchina);

//solo proprietà
for (let proprietà in macchina) {
  console.log(proprietà);
}
//proprietà e valori
for (let proprietà in macchina) {
  console.log("proprietà " + proprietà + " valore " + macchina[proprietà]);
}

//con array
let lettere = ["a", "b", "c", "d", "e", "f", "g", "h"];
for (let elem in lettere) {
  console.log(elem);
}
