//equal == stesso valore
//strict equal == stesso tipo e stesso valore
let a = 1;
let b = 1;
let c = 2;
let d = "4";
console.log(a == b);
console.log(a == c);
console.log(a == d);
console.log(a === d);

// not equal !=
let a1 = 1;
let b1 = "1";
let b2 = 1;
let c1 = 2;
console.log(a1 != b1);
console.log(a1 != b2);
console.log(a1 != c1);

// strict not equale !== (triplo uguale al contrario)

console.log(a1 !== b1); //true
console.log(a1 !== b2); // false

console.log("--------------------------");
console.log(5 == 5);
console.log(5 == 6);
console.log(5 != 5);
console.log(5 != 6);
console.log(5 === "5");
console.log(5 === parseInt("5"));
console.log(5 !== "5"); //diverso tipo ma stesso valore
console.log(5 !== "2"); // diverso tipo e diverso valore
console.log(5 !== 6); // stesso tipo ma diverso valore
