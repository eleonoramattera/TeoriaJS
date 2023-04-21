//FOR LOOP
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
  //per ogni volta che    contatore    condizione              iteratore
  //                                   finche i<array.length
  console.log(array[i]);
}

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
