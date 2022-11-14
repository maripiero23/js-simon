
const numeriRandom = [];
const numeriUtente = [];
const  numeriTrovati = [];


let pippo = numeriRandom;


//Genero un array di numeri random di 5 numeri

while( numeriRandom.length < 5){
    
    let num = Math.floor(Math.random()* 100);


    numeriRandom.push(num);
    console.log(numeriRandom);


    



    
}

const casualeEl = document.querySelector(".casuale");
casualeEl.innerHTML = pippo;

//dopo 30 secondi faccio sparire l'array dei numeri
setTimeout(displayVanish, 5000);

function displayVanish(){

    casualeEl.classList.add("d-none");
}






setTimeout(function(){
    for (let i = 0; i < 5; i++) {
        const numU = parseInt(prompt("inserire i numeri"));

        numeriUtente.push(numU);
        console.log(numeriUtente);

    }

         const userNumberEl = document.querySelector(".user-numbers");
        userNumberEl.innerHTML = numeriUtente;

        casualeEl.classList.remove("d-none");


        function trovaNumeri(){
            const trovatiNum = [];
            for( i = 0, i<numeriRandom.length, i++){
                if(numeriUtente.includes(numeriRandom[i]))
                trovatiNum.push(numeriRandom[i])
            }
        }

    

}, 6000)











