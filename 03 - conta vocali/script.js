/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

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


// Invoca la funzione qui e stampa il risultato in console

console.log(vocaliPresentiNellaParola(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)