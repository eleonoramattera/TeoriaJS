/*
int 2
float 2.2
double 2.20
binary 0 e 1 
octal
ewsadecimali
IN JS E' TUTTO NUMBER. NON FA DIFFERENZE. TYPESCRIPT SI
*/

//METODI NUMERI
/*
.toString();
.valueOf();
.typeOf()
.toFixed();
.toPrecision();
.toExponential()
*/

//METODI GLOBALI JS USATI ANCHE PER I NUMERI
/*
Number();
parseInt();
parseFloat();
*/

//.toString() typeOf() valueOf()
let x = 2;
let xStringa = x.toString();
console.log(typeof xStringa);
xStringa.valueOf();
console.log(xStringa);

//parseInt() parseFloat()
let y = "40.2";
let yNumero = parseInt(y);
console.log(yNumero);
let yNumeroFloat = parseFloat(y);
console.log(yNumeroFloat);

//Number (tipo parseInt());
let z = "30";
let result = z + 3;
console.log(result);
result = Number(z) + 3;
console.log(result);

//toFixed()
let n = 4.67866;
let n1 = n.toFixed();
console.log(n1);

//toPrecision()
let p = 45.567865;
let p1 = p.toPrecision(4);
console.log(p1);

//toExponential()
let e = 24.56744;
let ee = e.toExponential(4);
console.log(ee);
