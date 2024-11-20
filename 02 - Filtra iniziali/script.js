/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const inizianoPerA = (names) => {
    let inizialiArray = []
    for (let i = 0; i < names.length; i++)
        if (names[i][0] == "A"){
            inizialiArray.push(names[i]) 
        }
    return inizialiArray
}


// Invoca la funzione qui e stampa il risultato in console
console.log(inizianoPerA (names));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]