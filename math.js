//function differenza(a, b) {
//  return Math.abs(a - b);}
//console.log(differenza(8 - 2));

//Math.abs()
let a = 10;
let b = 40;
let c = Math.abs(a - b);
console.log(c);

let a1 = 10.2;
let b1 = 40.4;
let c1 = Math.abs(a1 - b1);
console.log(c1);

//Math.cbrt()
let d = 125;
console.log(Math.cbrt(d));

//Math.ceil()
let e = 12.1;
console.log(Math.ceil(e));

//Math.clz32()
let q = Math.clz32(0);
console.log(q);
let q1 = Math.clz32(1);
console.log(q1);
let q2 = Math.clz32(2);
console.log(q2);
let q3 = Math.clz32(4);
console.log(q3);

//Math.exp() //Math.exp1()
let w = Math.exp(2);
console.log(w);
let w1 = Math.exp(0);
console.log(w1);
let w2 = Math.expm1(0);
console.log(w2);
let w3 = Math.expm1(1);
console.log(w3);

//Math.floor()
let f = Math.floor(12.4);
console.log(f);

//Math.fround()
let f1 = Math.fround(5.28);
console.log(f1);

//Math.pow()
let p = Math.pow(7, 3);
console.log(p);

//Math.random() n decimale
let r = Math.random();
console.log(r);
//n intero uso floor() // esce sempre 0 perchè random è compreso da 0 a 1 escluso 1
let r1 = Math.floor(Math.random());
console.log(r1);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(3));
// Expected output: 0, 1 or 2
console.log(getRandomInt(1));
// Expected output: 0
console.log(Math.random());
// Expected output: a number from 0 to <1

//Math.round()
let l = Math.round(0.8);
console.log(l);
