let a = 4;
let b = 2;
if (a >= 2 && b >= 2) {
  console.log("entrambi maggiori di 2");
} else {
  console.log("uno dei 2 è minore di 2");
}

let x = 40;
let y = 21;
if (x % 2 === 0 || y % 2 === 0) {
  console.log("uno dei 2 è pari");
} else {
  console.log("sono dispari");
}

let i = 70;
let j = 1;
/*if (!i >= 10 && j >= 10) { NO COSI' NO
  console.log("non sono maggiori di 10");
}
*/

console.log(!i >= 10 && j >= 10);
console.log(!i <= 10 && j <= 10);
console.log(!i >= 10 || j >= 10);
console.log(!i <= 10 || j <= 10);
