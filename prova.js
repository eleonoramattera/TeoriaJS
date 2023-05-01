const addToTen3 = function () {
  let result = 2 + 10;
  return result;
};
let result = addToTen3(); // così la invoco
let result2 = addToTen3; //così mi passo l'indirizzo di memoria di dove è salvata la funzione
console.log(result2);
console.log(addToTen3);
