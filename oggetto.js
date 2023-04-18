//entità che raggruppa caratteristiche della stessa entità

let student = {
  name: "Ele",
  surname: "Mattera",
  age: 20,
  glasses: true,
  "color-hair": "blue",
};
//. accedo alla proprietà
console.log(student);
console.log(student.name);
console.log(student.surname);
console.log(student.age);
console.log(student.glasses);
console.log(student["color-hair"]);

student["color-hair"] = "red";
console.log(student);

// cambiare proprietà
student.age = 40;
console.log(student.age);

student.age++;
console.log(student.age);

student.age--;
console.log(student.age);

//aggiungere proprietà
student.city = "Torino";
console.log(student);

//rimuovere proprietà DELETE
delete student.glasses;
console.log(student);

//copiare oggetto
let student2 = student;
student2.name = "Roberta";
console.log(student); //sovrascrive il nome anche a student
console.log(student2);
//SOVRASCRIVE PERCHE' HANO LO STESO INDIRIZZO DI MEMORIA
// per non sovrascrivere uso  OBJECT ASSIGN o SPREAD OPERATOR

// 1 OBJECT ASSIGN (copia solo il primo livello. Per copiare anche il secondo uso spread operator)
//object.assign(target, source)

//let student2 = {} (creo prima oggetto vuoto e poi faccio Object assign)
//Object.assign(student2, student)
// in questo caso non l'ho fatto perchè già avevo creato student2
student2 = Object.assign({}, student);
console.log(student);
console.log(student2);
student.name = "Ele";
console.log(student);
console.log(student2);

student = {
  name: "Ele",
  surname: "Mattera",
  age: 20,
  city: "Torino",
};
student2 = {
  name: "Roberta",
  surname: "Rossi",
  age: 40,
  city: "Procida",
};
console.log(student2);
student2.age = student.age;
console.log(student2);

//SPREAD OPERATOR
let person = {
  name: "Gino",
  surname: "Rossi",
  eta: 2,
  location: {
    region: "Campania",
    city: "Napoli",
  },
};
let person2 = { ...person };
console.log(person2);
//primo livello cambio valore e me lo salva senza sovrascrivere person
person2.name = "Vincenzo";
console.log(person2);
console.log(person);
//secondo livello cambio valore e me lo cambia ad entrambi
person2.location.city = "Benevento";
console.log(person2);
console.log(person);
//per cambiarlo solo a person2
person2 = { ...person, location: { ...person.location, city: "Bene" }, name: "Vincenzo" };
console.log(person2);
console.log(person);
