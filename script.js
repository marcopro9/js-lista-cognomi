//variabili
  var cognomi = ['Verratti', 'Insigne', 'Immobile', 'Balzano', 'Sansovini'];
  var cognomeUser = "";

// condizione
if (!isNaN(cognomeUser)) {
  cognomeUser = prompt('qual è il tuo cognome?');  //richiesta Cognome
  var cognomeUserUpper = cognomeUser.toUpperCase();//nome in lista in maiuscolo
  cognomi.push(cognomeUserUpper);// inivio cognome all'array
  cognomi.sort();//ordine alfabetico
  var risultato = cognomi; //variabile da stampare
  document.getElementById('lista').innerHTML = '<li>' + risultato + '</li>';//stampa su schermo
  document.getElementById('posizione').innerHTML = 'il tuo cognome è il numero ' + (cognomi.indexOf(cognomeUserUpper) + 1);//stampa su schermo
}
