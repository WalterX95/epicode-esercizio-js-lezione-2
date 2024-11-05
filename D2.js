/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Esecizio 1  Scrivi algoritmo per definire quale è il numero più grande*/

function maggiore(n1,n2) {
    console.log("Esercizio N 1");
    let risultato = (n1 > n2)  ?  console.log(n1 +  " è maggiore di "+ n2) : console.log(n2 + " è maggiore "+n1);
    return risultato;
}

maggiore(4,10);

/* Esercizio 2 
    Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

function notEqual(numberE) {
  console.log("Esercizio N 2");
    let five = 5;
    if(numberE !== five) {
      console.log('numero diverso da 5');
    }
    else {
      console.log('numero uguale a 5');
    }
}

notEqual(3);

/*Esercizio Numero 3 
 Scrivi un algoritmo che mostri "divisibile per 5" 
 in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

function divisibilePer5(number) {
   console.log("Esercizio N 3");
   let resto = number % 5;
   if(resto === 0) {
    console.log(number + " è divisibile per 5");
   }
   else {
    console.log(number + " non è divisibile per 5");
   }
}

divisibilePer5(10);

/*Esercizio Numero 4
   Scrivi un algoritmo per verificare che, dati due numeri interi, 
   il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


function verificaE8(n1,n2) {
   console.log("Esercizio N 4");
   if(n1 === 8 || n2 === 8) {
    console.log("Uno dei due numeri è 8");
   }
   else if(n1 + n2 === 8 || n1 - n2 === 8) {
     console.log("Addizione o sottrazione riportano al numero 8");
   }
   else {
     console.log("Nessuno di questi numeri è uguale a 8");
   }
}


verificaE8(12,3);
verificaE8(12,4);

/* Esercizio Numero 5 
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotaleCarrello(totalShoppingCart) {
  console.log("Esercizio N 5");
  let costoSpedizione = 0;
  if(totalShoppingCart >= 50) {
    costoSpedizione = 0;
  }
  else {
    console.log("Aggiungo costo di spedizione : "+costoSpedizione);
    costoSpedizione = 10;
  }
  let totale = totalShoppingCart + costoSpedizione;
  console.log("Il totale da addebitare è: " + totale);
}

calcolaTotaleCarrello(25);

calcolaTotaleCarrello(60);  // 60 > 50, quindi spedizione

/*Esercizio Numero 6
  Stai lavorando su un sito di e-commerce. 
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, 
  determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function calcolaTotaleCarrelloBlackFriday(totalShoppingCart) {
    console.log("Esercizio Numero 6");
    let costoSpedizione = 0;
    let totale = parseInt(totalShoppingCart * 20 / 100); // 20% di sconto
    if(totale >= 50) {
      costoSpedizione = 0;
    }
    else {
      costoSpedizione = 10;
      totale += costoSpedizione;
      console.log("Aggiungo costo di spedizione : "+costoSpedizione);
    }
    console.log("Il totale da addebitare più sconto del 20% : " + totale);
}

calcolaTotaleCarrelloBlackFriday(25);
calcolaTotaleCarrelloBlackFriday(60);

/*Esercizio Numero 7 
   Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

function sortDalPiuGrandeAlPiuPiccolo(n1,n2,n3) {
    console.log("Esercizio N 7");
    if(n1 > n2 && n1 > n3) {
       console.log("Ordine : "+n1+" "+n2+" "+n3);
    }
    else if(n2 > n1  && n2 > n3) {
      console.log("Ordine : "+n2+" "+n1+" "+n3);
    }
    else if(n3 > n1  && n3 > n2) {
      console.log("Ordine : "+n3+" "+n1+" "+n2);
    }
}

sortDalPiuGrandeAlPiuPiccolo(15,22,90);
sortDalPiuGrandeAlPiuPiccolo(70,80,29);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no 
  (suggerimento: cerca su un motore di ricerca "typeof").
*/

function verificaNumero(numero) {
  console.log("Esercizio N 8");
   if(typeof(numero)  === Number) {
      console.log(numero+ " è un numero");
   }
   else {
    console.log(numero +  " non è un numero");
   }
}

verificaNumero(89);
verificaNumero("10");

/*Esercizio Numero 9
   Crea un algoritmo per controllare se un numero
    fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function pariDispari(numero) {
    console.log("Esercizio N 9");
    if(numero % 2 === 0) {
      console.log(numero + " è un numero pari");
    }
    else {
      console.log(numero + " è un numero dispari");
    }
}

pariDispari(9);
pariDispari(10);

/*Esercizio 10
Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 7
  if (val < 5) {
      console.log("Meno di 10");
    } else if (val < 10) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/*Esercizio 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
 */

  const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
 
  console.log("Esercizio  N 11");
  console.log("Aggiungo proprietà city nell' oggetto me");
  me.city = "Toronto";
  console.log(me.city);

  /*Esercizio 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
   */

  console.log("Esercizio N 12");
  console.log("Rimuovo proprietà lastName nell' oggetto me"); 
  delete me.lastName;
  console.log(me);
  
  /*Esercizio 13 */
  console.log("Esercizio N 13");
  console.log("Cerco la proprietà 'skills' nell' oggetto me");
  console.log(me.skills);
  me.skills.pop();
  console.log(me.skills);

  /*Esercizio 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  sono tentato molto dal ciclo for e cosi faro' perchè e facile e va bene cosi!!!
   */
 
  console.log("Esercizio N 14");

  let array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(i);
  }
  console.log(array);
   
  /*Esercizio 15
   Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
   */
  console.log("Esercizio N 15");
  array[9] =  100;
  console.log(array);


