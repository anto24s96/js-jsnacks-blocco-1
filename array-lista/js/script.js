/* Creo un array contenente gli alimenti presenti nel frigo; */
const refrigerator = ["banana", "mela", "pera", "ciliegia", "arancia", "mandarino", "cocomero", "limone", "fragola"];

/* Inserire la pesca nel frigo attraverso la funzione "push" nell'arrey; */
refrigerator.push("pesca");


/* Creo la variabile utile per la verifica */
let flag = false;

let fruit = "cocomero";
/* Verifico la presenza del cocomero nel frigo */
for(let i = 0; i < refrigerator.length; i++){
    if(fruit == refrigerator[i]){
        flag = true;
    }
}

if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.");
}
else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}






