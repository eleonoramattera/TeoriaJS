//length RETITUISCE LA LUNGHEZZA DELLA STRINGA (in unità di codice UTF-16) COMPRENDE SPAZI
let stringa = "ciao a tutti";
console.log(stringa.length);

//.valueOf() RESTITUISCE VALORE PRIMITIVO DELLA STRINGA
let st = "Ciao a tutti";
console.log(st.valueOf());

//.toString() RITRONA UNA STRINGA CON IL CONTENUTO STRESSO
let str = "sono una stringa";
console.log(str.toString());

//.concat() CONCATENA 2 STRINGHE
let s1 = "Ho";
let s2 = " fame";
console.log(s1.concat(s2));

//.localeCompare() RESTITUISCE UN N CHE INDICA SE UNA STRINGA DI RIFERIMENTO VIENE PRIMA DOPO O è UGUALE ALLA STRINGA SPECIFICATA
//-1 se ordinato prima
// se ordinato dopo
//0 se uguale
let a = "stringa 1";
let b = "stringa 2";
let result = a.localeCompare(b);
console.log(result);

//.includes() RITORNA TRUE O FLASE SE UNA STRINGA CONTIENE O MENO UNA STRINGA SPECIFICA AL SUO INTERNO (CASE SENSITIVE.distinzione tra maiuscole e minuscole)
let incl = "Alla ricerca di NEMO";
console.log(incl.includes("nemo")); //false
console.log(incl.includes("nemo".toUpperCase())); //
console.log(incl.includes("Nemo")); //false

//.search() CERCA UN VALORE IN UNA STRINGA E RESTITUISCE LA POSIZIONE DELLA PRIMA CORRISPONDENZA
let tex = "Mr. Blue has a blue house";
let position = tex.search("Blue");
console.log(position);

//.indexOf() RESTITUISCE LA POSIZIONE DEL VALORE SPECIFICATO
let find = "find the value";
console.log(find.indexOf("d"));
console.log(find.indexOf("the")); //restituisce il valore di t = 5

let find2 = "find the right value";
let value = "right";
let indice = find2.indexOf(value);
console.log(value, "ha indice", indice, "partendo dall'inizio della frase");

//lastIndexOf() RESTUTISCE L'INDICE DELL'ULTIMA OCCORRENZA  DEL VALORE SPECIFICATO
let find3 = "find again the value. Only the rigth value";
let v = "value";
console.log(find3.lastIndexOf(v));
console.log(find3.lastIndexOf("value"));

//.toLowerCase() RITORNA STRINGA IN MINUSCOLO
let ss = "Ciao a tutti. Buongiorno. Sono una stringa";
console.log(ss.toLowerCase());

//.toLocaleLowerCase() RITORNA STRINGA IN MINUSCOLO  in base a eventuali mappature di maiuscole e minuscole specifiche delle impostazioni locali.
let ss1 = "İstanbul";
console.log(ss1.toLocaleLowerCase("en-US"));

//.toUpperCase() RITORNA STRINGA IN MAUISCOLO
let ss2 = "Ciao a tutti. Buongiorno. Sono una stringa";
console.log(ss2.toUpperCase());

//.toLocaleUppeCase() RITORNA STRINGA IN MAUISCOLO in base a eventuali mappature di maiuscole e minuscole specifiche delle impostazioni locali.
let ss3 = "istanbul";
console.log(ss3.toLocaleUpperCase("en-En"));

//.slice() ESTRAE UNA PORZIONE DELLA STINGA
//slice(indexStart, indexEnd) indexEnd opzionale
let string = "oggi è primavera ma fa freddo come se fosse inverno";
console.log(string.slice(5, 16)); // è primavera
console.log(string.slice(-16)); // se fosse inverno

//.substring() RESTITUISCE UNA PARTE DELLA STINGA (dal valore iniziale  specificato fino all'indice finale escluso o alla fine della stringa se non viene fornito l' indice finale
let s = "oggi è primavera ma fa freddo come se fosse inverno";
console.log(s.substring(5, 16)); // è primavera
console.log(s.substring(5)); //è primavera ma fa freddo come se fosse inverno"
console.log(string.slice(-16)); // se fosse inverno

//.at() RESTITISCE UN CARATTERE INDICIZZATO (conta anche gli spazi)
let char = "W javascript";
console.log(char.at(2));
console.log(char.at(-6));

let frase = "The quick brown fox jumps over the lazy dog";
let index = 7;
console.log(`index è il numero ${index} e il carattere corrisondente è ${frase.at(index)}`);
index = -8;
console.log(`index è il numero ${index} e il carattere corrisondente è ${frase.at(index)}`);

//.charAt() RESTITUISCE UN CARATTERE IN CORRISPONDENZA DELLa POSIZIONE DELL'INDICE SPECIFICATO
let frasi = "Corri cavallo";
let i = 7;
console.log(frasi.charAt(i));
console.log(frasi.charAt(6));

//.charCodeAt() RESTITUISCE CODICE  UTF-16 (Unicode) DEL CARATTERE LA CUI POSIZIONE E' SPECIFICATA
let f = "The quick brown fox jumps over the lazy dog";
console.log(f.charCodeAt(4)); //4 sarebbe lettera q che ha il codice 113

//.codePointAt()

//.fromCharCode() RESTITUISCE UNA STRINGA CREATA DALLA SEQUENZA DI UNITA' DI CODICE UTF-16(converte i valori Unicode in stringhe.)
let code = String.fromCharCode(113, 45, 83, 68);
console.log(code);
console.log(String.fromCharCode(254, 65, 75, 34, 78));

//.fromCodePoint()

//isWellFormed() RESTITUISCE UN VALORE BOOLEANO CHE INDICA SE QUESTA STRINGA CONTIENE SURROGATI SOLITARI
//.normalize()
//.raw()

//.endsWith() RITORNA TRUE O FALSE IN BASE A SE LA STRINGA TERMINA CON CARATTERI DI UNA STRINGA SPECIFICATA (case senstive)
let end = "Cani e gatti sono animali domestici";
console.log(end.endsWith("domestici")); //true
console.log(end.endsWith("i")); // true
console.log(end.endsWith("tic")); //false

//.startWith() RITORNA TRUE O FALSE IN BASE A SE LA STRINGA INIZIA CON CARATTERI DI UNA STRINGA SPECIFICATA (case sensitive)
let start = "cani e gatti sono animali domestici";
console.log(start.startsWith("cani")); // true
console.log(start.startsWith("c")); //true

//.match() CERCA UNA CORRISPONDENZA IN UNA STRINGA
let phase = "L'italia è la nazione più bella";
let res = phase.match("lia");
console.log(res);

//.matchAll() RESTITUISCE  UN ITERATORE DI TUTTI I RISULTATI CORRISPONDENTI ALLA STRINGA
let phases = "L'italia è bella ma anche la Spagna è bella";
let r = phases.matchAll("bella");
console.log(r);

//.padEnd() BLOCCA LA STRINGA CORRENTE CON UNA DETERMINATA STRINGA (RIPETUTA SE NECESSARIO). INSERISCE UNA STRINGA ALLA FINE
//padEnd(targetLength, padString)
let text = "5";
text = text.padEnd(4, "1");
console.log(text);

//.padStart() BLOCCA LA STRINGA CORRENTE CON UNA DETERMINATA STRINGA (RIPETUTA SE NECESSARIO)
//padStart(targetLength, padString)
let t = "5";
t = t.padStart(4, "6");
console.log(t);

//.repeat() RESTITUISCE UNA NUOVA STRINGA CHE CONTIENE UN N SPECIFICATO DI COPIE DELLA STRINGA
let sss = " ciao a tutti.. ";
let sss1 = sss.repeat(2);
console.log(sss1);

//.repleace() CERCA UNA VALORE IN UNA STRINGA E RESTITUISCE UNA NUOVA STRINGA CON I VALORI SPECIFICATI SOSTITUITI
let r1 = "comprerò una nuova auto";
console.log(r1.replace("auto", "moto"));

//.split() DIVIDE LA STRINGA IN UN'ARRAY DI SOTTOSTRINGHE
let sp = "ciao come stai?";
let sp1 = sp.split(" ");
console.log(sp1);
let sp2 = sp.split();
console.log(sp2);
let sp3 = sp.split("");
console.log(sp3);

//.trim() RIMUOVE GLI SPAZI VUOTI DA ENTRAMBE LE ESTREMITA' DELLA STRINGA E RESTITUISCE UNA NUOVA STRINGA SENZA MODIFICARE QUELLA ORIGINALE
let tr = "   Hello world!   ";
let tr1 = tr.trim();
console.log(tr1);

//.trimEnd() RIMUOVE GLI SPAZI VUOTI DALLA FINE DI UNA STRINGA E RESTITUISCE UNA NUOVA STRINGA SENZA MODIFICARE QUELLA ORIGINAL
let trEnd = "   Hello world!      ";
let trEnd1 = trEnd.trimEnd();
console.log(trEnd1);

//.trimStart()RIMUOVE GLI SPAZI VUOTI ALL'INIZIO DI UNA STRINGA E RESTITUISCE UNA NUOVA STRINGA SENZA MODIFICARE QUELLA ORIGINAL
let trSt = "   Hello world!      ";
let trSt1 = trSt.trimStart();
console.log(trSt1);
