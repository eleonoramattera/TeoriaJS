//DATE oggetto attraverso il quale si creano le date
let now = new Date();
console.log(now);
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("en-US"));
console.log(now.toLocaleDateString("en-GB"));
console.log(now.toLocaleDateString("de-DE"));
console.log(now.toLocaleDateString("fr-FR"));

let options = { year: "numeric", month: "numeric", day: "numeric" };
console.log(now.toLocaleDateString(now.getTimezoneOffset(), options));

const evento = new Date(Date.UTC(2023, 0, 2, 3, 0, 0));
const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
console.log(evento.toLocaleDateString("de-DE", option));
console.log(evento.toLocaleDateString("fr-FR", option));
console.log(evento.toLocaleDateString(undefined, option));

const evento2 = new Date();
const opt = { weekday: "short", year: "numeric", month: "short", day: "numeric" };
console.log(evento2.toLocaleDateString("de-DE", opt));
console.log(evento2.toLocaleDateString("fr-FR", opt));
console.log(evento2.toLocaleDateString(undefined, opt));

const evento3 = new Date();
const op = { weekday: "narrow", year: "numeric", month: "narrow", day: "numeric" };
console.log(evento3.toLocaleDateString("de-DE", op));
console.log(evento3.toLocaleDateString("fr-FR", op));
console.log(evento3.toLocaleDateString(undefined, op));

const evento4 = new Date();
const o = { weekday: "long", year: "2-digit", month: "short", day: "2-digit" };
console.log(evento4.toLocaleDateString("de-DE", o));
console.log(evento4.toLocaleDateString("fr-FR", o));
console.log(evento4.toLocaleDateString(undefined, o));

//decido io che data mettere mantenendo sempre lo stesso ordine
let data = new Date(2023, 2, 5);
console.log(data);
console.log(typeof data); // object di tipo Date
console.log(data.toString());
console.log(data.toLocaleString()); //anno mese giorno e ora (minuti secondi e millisecondi)
console.log(data.toLocaleDateString()); //anno mese giorno
console.log(data.toLocaleTimeString("it-IT")); //ora
console.log(data.toDateString());
console.log(data.toTimeString());
console.log(data.toISOString()); //usa standard ISO
console.log(data.toJSON());
console.log(data.toUTCString());

//ANNI year
//MESI  monthIndex (da 0 a 11)
//GIORNI  day Optional (default è 1)
//ORE hours Optional (da 0 a 23. Default è 0)
//MINUTI minutes Optional
//SECONDI seconds Optional
//MILLISECONDI milliseconds Optional

//METODI OGGETTO DATE

//.parse()
//restituisce il numero di millisecondi dalla mezzanotte del 1° gennaio 1970:
let dataa = Date.parse(2020, 26, 6);
console.log(dataa);
//.now()
//L'orologio interno in JavaScript inizia alla mezzanotte del 1 gennaio 1970. Date.now() restituisce il numero di millisecondi dal 1° gennaio 1970 00:00:00 UTC
console.log(Date.now());

//GET
//I metodi  "get" sono quelli utilizzati per recuperare un dato valore relativo ad una data o ad un orario
//getFullYear() - restituisce l'anno corrente
//getMonth() - restituisce il numero del mese corrente ( da 0 a 11 (gennaio= 0/ dicembre=11))
//getDate() - restituisce il numero del giorno corrente nel mese (1 -31);
//getDay() - restituisce il numero del giorno corrente nella settimana da 0 a 6 (0 = domenica; 1 = lunedì; 2 = martedì ecc)
//getMinutes() - restituisce il minuto corrente (0 - 59);
//getSeconds() - restituisce il secondo corrente (0 - 59);
//getMilliseconds() - restituisce il millisecondo corrente ( 0 - 999)
//getTime() - restituisce il numero di millisecondi per questa data dall'epoca, definita come la mezzanotte all'inizio del 1° gennaio 1970, UTC.
// getTimezoneOffset()

let miadata = new Date();
const opzione = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
console.log(miadata.toLocaleDateString("it-It", opzione));

console.log(miadata.getFullYear());
console.log(miadata.getDate());
console.log(miadata.getTime());
console.log(miadata.getDay());

//SET
//I metodi "set" sono quelli utilizzati per modificare (nel nostro script) uno o più valori relativi alla data o all'orario impostati nel browser
//setFullYear() - imposta arbitrariamente l'anno corrente;
//setMonth() - imposta arbitrariamente il numero del mese corrente;
//setDate() - imposta arbitrariamente il numero del giorno corrente nel mese;
//setDay() - imposta arbitrariamente il numero del giorno corrente nella settimana;
//setHours() - imposta arbitrariamente l'ora corrente;
//setMinutes() - imposta arbitrariamente il minuto corrente;
//setSeconds() - imposta arbitrariamente il secondo corrente
//setMilliseconds() - imposta arbitrariamente il millisecondo corrente
//setTime() - imposta una data aggiungendo millisecondi al 1 gennaio 1970

let miadataa = new Date();
miadataa.setFullYear(2000);
miadataa.setMonth(0);
console.log(miadataa.toDateString());

//librerie
//Moment.js XDate
