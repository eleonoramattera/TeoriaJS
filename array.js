//Array è una lista di elementi identici peer tipo. Sono considerati oggetti infatti se scrivo typeof mi esce object

let array = ["lun", "mar", "mer", "gio", "ven", "sab", "dom"];

//INDICE per accedere alla singola proprietà
console.log(array[0]);
console.log(array[3]);

//esempio più complesso. Carrello shop (array di oggetti)
let carrello = [
  {
    id: 20,
    prodotto: "scarpe",
    prezzo: 40,
  },
  {
    id: 56,
    prodotto: "maglia",
    prezzo: 12,
  },
  {
    id: 120,
    prodotto: "gonna",
    prezzo: 25,
  },
];
console.log(carrello[1].id); //sto prendendo con [1] il secondo elemento e id
console.log(carrello[2].prodotto);

//LENGTH lunghezza. per sapere quanti elementi ho
let a = ["a", "f", "g", "j", "d", "h", "w", "q", "p", "m"];
console.log(a.length);
console.log(a[10]); // UNDEFINED perchè l'indice parte da 0 quindi l'ultimo elemento è 9. elemento 10 non esiste

//estrarre sempre ULTIMO ELEMENTO uso metodo dimanico LENGTH-1
console.log(a[a.length - 1]);
console.log(carrello[carrello.length - 1]);
