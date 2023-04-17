/*
=
+=
-=
*=
/=
%= modulo. da resto 0. per vedere se i numeri sono pari
*/

let n = 4;
let n1 = 2;

n = n1;
console.log(n);
console.log(n1);

let x = n;
console.log(x);
x = 5;
console.log(x);

let z = (n1 += n);
let z1 = n1 + n;
console.log("valore di z", z);
console.log("valore di z1", z1);

console.log("volre di n", n.valueOf());
console.log("valore di n1", n1.valueOf());

let h = n - n1;
console.log("valore di h", h);
let h1 = (n -= n1);
console.log("valore di h1", h1);

let j = (n *= n1);
let j1 = n * n1;
console.log("valore di j", j);
console.log("valore di j1", j1);

let i = (n /= n1);
let i1 = n / n1;
console.log("valore di i", i);
console.log("valore di i1", i1);

let a = 4;
a1 = a % 2;
let b = a % 3;
console.log(a1);
console.log(b);
