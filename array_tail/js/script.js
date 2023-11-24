/* CREAZIONE ARRAY */
let array = [];
/* CHIEDERE ALL'UTENTE IL NUMERO DI ELEMENTI */
let user_n_elements = parseInt(prompt("Inserisci il numero di elementi desiderato"));
/* CREARE UN CICLO PER GENERARE I NUMERI RANDOMICI */
for(let i = 0; i < user_n_elements; i++){
    array.push(Math.floor(Math.random() * 100) + 1);
}

console.log(array);
/* STAMPO SOLO GLI ULTIMI 5 */
console.log(array.slice(-5));