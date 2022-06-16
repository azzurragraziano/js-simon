/* Visualizzare in un alert 5 numeri casuali.
30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// Visualizzare in un alert 5 numeri casuali.
const rndNumbersArray = generateRndNumbers(5, 1, 150);
alert(rndNumbersArray);

// 30 secondi dopo la chiusura dell'alert
setTimeout(function() {

    const userNumbersArray = [];
    const rightNumbers = [];
    let userNumber;

    for(let i = 0; i < 5; i++) {
       
        // l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        userNumber = parseInt(prompt('dimmi uno alla volta i numeri visti in precedenza'));
        console.log('userNumber', userNumber)   

        // lo aggiungo all'array vuoto dei numeri dati dall'utente
        userNumbersArray.push(userNumber);
        console.log('userNumbersArray', userNumbersArray)   
        
        // se il numero dato dall'utente è presente tra quelli generati random allora lo aggiungo all'array dei numeri indovinati
        if(rndNumbersArray.includes(userNumber)) {
            rightNumbers.push(userNumber);
            console.log('rightNumbers', rightNumbers)

        }
    }

    // il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    if(rightNumbers.length === 0) {
        alert(`Hai indovinato ${rightNumbers.length} numeri. Dai riprovaci! Migliorerai!`);
    } else if (rightNumbers.length === 1) {
        alert(`potevi fare di meglio... hai indovinato ${rightNumbers.length} numero. Dai riprovaci! Andrà meglio!`);
    } else {
        alert(`hai indovinato i seguenti ${rightNumbers.length} numeri: ${rightNumbers}.`)
    }

}, 30000)


/************
* FUNCTIONS *
*************/

/* FUNZIONE PER GENERARE LE BOMBE */
// genero un array di n elementi (numeri random)
// numberOfElements -> numero di elementi che devono essere presenti nell'array (5)
// rangeMin -> range minimo dei numeri random da generare
// rangeMax -> range massimo dei numeri random da generare
// return: array di numeri random con .length < numberOfElements

function generateRndNumbers (numberOfElements, rangeMin, rangeMax) {

    // console.log('numero elementi dell\'array', numberOfElements);
    // console.log('range minimo', rangeMin);
    // console.log('range massimo', rangeMax);

    const randomNumbers = [];

    while(randomNumbers.length < numberOfElements) {

        //genero un numero random da rangeMin (1) a rangeMax (che varia in base al livello scelto dall'utente)
        const randomNumber = getRndInteger(rangeMin, rangeMax);

        //pushiamo il numero nell'array solo se non è già presente
        if(!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    return randomNumbers;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}