// const  numeriRandom = [];
// const  numeriUtente = [];
// const  numeriTrovati = [];



const numeriRandom = [];


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