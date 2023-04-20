//trasformare le proprietà di un oggetto in un' array
const car = {
  brand: "Ford",
  color: "red",
  year: 2002,
  buy: true,
};

//Object.keys() ritorna un'array con le PROPRIETA' come stringhe
const carKey = Object.keys(car);
console.log(carKey);

//Object.values() ritorna un'array con i VALORI come stringhe
const carValue = Object.values(car);
console.log(carValue);

//Object.entries() ritorna coppie chiave valore
const carEntries = Object.entries(car);
console.log(carEntries);

const NewCar = carKey[2];
console.log(NewCar); //year
