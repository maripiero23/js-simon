// const  numeriRandom = [];
// const  numeriUtente = [];
// const  numeriTrovati = [];




const numeriRandom = [];


let pippo = numeriRandom;

while( numeriRandom.length < 5){
    
    let num = Math.floor(Math.random()* 100);


    numeriRandom.push(num);
    console.log(numeriRandom);



    
}

const casualeEl = document.querySelector(".casuale");
casualeEl.innerHTML = pippo;


setTimeout(displayVanish, 5000);

function displayVanish(){

    casualeEl.classList.add("d-none");
}