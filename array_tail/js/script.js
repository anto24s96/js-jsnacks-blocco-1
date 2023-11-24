/* CREAZIONE ARRAY */
let array = [];
/* CHIEDERE ALL'UTENTE IL NUMERO DI ELEMENTI */
let user_n_elements = parseInt(prompt("Inserisci il numero di elementi desiderato"));
/* CHIEDERE ALL'UTENTE QUANTI ELEMENTI DELL'ARRAY VUOLE STAMPARE */
let n_elements = parseInt(prompt("Inserisci il numero di elementi che vuoi stampare"));

/* CREARE UN CICLO PER GENERARE I NUMERI RANDOMICI */
for(let i = 0; i < user_n_elements; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
}

console.log(array);
/* STAMPO SOLO GLI ULTIMI 5 */
console.log(array.slice(-5));

/* VERIFICARE GLI ELEMENTI IN CODA */
if(n_elements <= user_n_elements){
    console.log("Stampa in corso...");
}
else{
    console.log("Richiesta non valida!");
}