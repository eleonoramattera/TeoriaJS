//WHILE
//BLOCCO DI CODICE CHE SI RIPETE(LOOP) FINO A CHE LA CONDIZIONE NON E' VERA. SE E' FALSA IL LOOP NON PARTE.
//IL CODICE SI ESEGUE SOLO SE LA CONDIZIONE E' VERA

let array = [22];
let i = 0;
while (i < array.length) {
  console.log(array[i]);
  i++;
}

let num = 10;
while (num <= 10) {
  num++;
  console.log(num);
}

//cosi non parte perchè numm non è diverso da 0
let n1 = 0;
let t = "ciao";

while (n1 != 0) {
  console.log(n1);
  t += n1;
  console.log(t);
  n1++;
}

//cosi parte perchè numm è diverso da 0
let n = 1;
let textt = "ciao";

while (n != 0) {
  console.log(n);
  textt += n;
  console.log(textt);
  n++;
}

//DO WHILE
//BLOCCO DI CODICE CHE SI ESEGUE MINIMO UNA VOLTA. POI SE LA CONDIZIONE E' VERA CONTINUA, SE E' FALSA SI FERMA
let arrayy = [22, 24];
let j = 0;
do {
  console.log(arrayy[j]);
  j++;
} while (arrayy.length);

let numm = 0;
let text = "ciao";

do {
  console.log(numm);
  text += numm;
  console.log(text);
} while (numm != 0);
{
  console.log(text);
}
