//tra le [] metto valori dinamici            oppure proprietà con il - esempio student[last-name]

const frutta = {
  mela: "frutta rossa rotonda",
  banana: "frutta gialla",
  pera: "frutta verde",
  cocco: " rotondo e bianco",
};

let fruttaSelezionata = "cocco";
let definizione = frutta[fruttaSelezionata];

if (definizione != null || definizione != undefined) {
  console.log("definizione di", fruttaSelezionata, ":", definizione);
} else {
  console.log("frutta non trovata");
}

console.log("DEFINIZIONE", typeof definizione);

//////////////////////
let macchine = {
  alfaRomeo: "ottima scelta",
  BMW: "marchio in forte crescita",
  ferrari: "da sempre n1, consigliatissima",
  fiat: "ciao poveri",
  ford: "contento tu, contenti tutti",
};

let modelloMacchina = "ford";
let MacchinaCheHaiComprato = macchine[modelloMacchina];

if (MacchinaCheHaiComprato != null || MacchinaCheHaiComprato != undefined) {
  console.log("la macchina che hai scelto è:", modelloMacchina, "(", MacchinaCheHaiComprato, ")");
} else {
  console.log("la macchina che hai selezionato non è disponibile");
}

console.log("macchinachehaicomprato", typeof MacchinaCheHaiComprato);

////////////////////////////////////////
let guardaroba = {
  pantalone: "indumento unisex",
  gonna: "indumento femminile",
  costume: "si indossa al mare",
  ["t-shirt"]: "si indossa quando fa caldo",
  felpa: "si indossa quando fa freddo",
};

let IndumentoCheVoglioIndossare = "costume";
let IndumentoScelto = guardaroba[IndumentoCheVoglioIndossare];

if (IndumentoScelto != null || IndumentoScelto != undefined) {
  console.log("indumento scelto è:", IndumentoCheVoglioIndossare, ":", IndumentoScelto);
} else {
  console.log("indumento scelto non è presente");
}
