/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// VERSIONE SWITCH STATEMENT
const vocaliPresentiNellaParola = (word) => {
    let numeroDiVocali = 0;

    for (let i = 0; i < word.length; i++) {
        switch (word[i].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                numeroDiVocali++; 
                break;
            default:
                break;
        }
    }

    return numeroDiVocali;
}


// VERSIONE CON IF 
/* 
const vocaliPresentiNellaParola = (word) => {
let numeroDiVocali = 0
let arrayvocali = []

for (let i = 0; i < word.length; i++){

    if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u"){
        numeroDiVocali++

    }
    }
    return numeroDiVocali
}
    */





// Invoca la funzione qui e stampa il risultato in console

console.log(vocaliPresentiNellaParola(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)