"use strict"
const maPromesse = new Promise((resolve)=>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET','https://catfact.ninja/breeds?page=1',true)
    
    xhr.onload = function (){
        
        if ((xhr.readyState === 4) && (xhr.status === 200))
        {
            resolve(JSON.parse(xhr.responseText)) ;
        }
        
    };
    xhr.send();
})


// je veux récuperer dans mon HTML la classe "selection-races"

let allRaces = document.querySelector('.selection-races');

let allRacesP  = document.querySelectorAll('.race-all');
console.log(allRaces);

// RESULTAT DE MON JSON GET
maPromesse.then((resultat) => {
    
    resultat.data.forEach(element =>{

        const RACE = document.createElement('div');
        RACE.classList.add('race-all');

        
        allRaces.appendChild(RACE);

        const P = document.createElement('p')
        P.innerHTML = "Une race";
        allRacesP.appendChild(P);

        
        
    });
});





