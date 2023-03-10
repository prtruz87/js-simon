/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

1. Visualizzare 5 numeri casuali in pagina e salvarli in un array
2. Dopo 30 secondi cancellarli
3. Chiedere di inserire uno alla volta i 5 numeri visualizzati in precedenza e salvarli
4. Confrontare i numeri inseriti con i 5 numeri casuali
5. Visualizzare numero di numeri indovinati
6. Visualizzare quelli indovinati
*/

const play = document.getElementById('play');

play.addEventListener('click',
      
      function() {

            erase(results);

            const numbers = document.getElementById('numbers');
            const randomNum = [];
            randomFive(randomNum, numbers);

            setTimeout(function() {
                  erase(numbers);
            }, 30000);

            setTimeout(function() {

                  const userNum = [];
                  input(userNum);
      
                  const equalNum = [];
                  comparison(userNum, randomNum, equalNum);
      
                  const results = document.getElementById('results');
                  finalRes(equalNum, results);

            }, 30500);

      }

);


//---------------------------------------------------------------------------------------------------

function randomFive(arr, elem) {

      elem.innerHTML = "";

      while(arr.length < 5) {

            const casualNum = Math.floor(Math.random() * 20) + 1;

            if(arr.includes(casualNum) == false) {

                  arr.push(casualNum);
                  const newNum = document.createElement('div');
                  newNum.innerHTML = casualNum;
                  elem.append(newNum);

            }

      }

      console.log(arr);

}

function erase(elem) {

      elem.innerHTML = "";

}

function input(arr) {

      if(ok = true) {

            for (let i = 1; i <= 5; i++) {

                  const userInput = parseInt(prompt('Inserisci numero ' + i));

                  if (isNaN(userInput) || userInput <= 0 || userInput > 20) {

                        alert('Valore errato, riprova.');
                        i--;

                  } else if (arr.includes(userInput) == false) {

                        arr.push(userInput);

                  } else {

                        alert('Numero già inserito');
                        i--;

                  }

            }

      }

      console.log(arr);

}

function comparison(arr1, arr2, arr3) {

      for(let i = 0; i < 5; i++) {

            for(let x = 0; x < 5; x++) {

                  if(arr1[x] == arr2[i]) {

                        arr3.push(arr1[x]);

                  }

            }

      }

      console.log(arr3);
      
}

function finalRes(arr, elem) {

      if(arr.length > 0) {

            elem.innerHTML = "Hai indovinato " + arr.length + " numeri che sono " + arr;

      }

}