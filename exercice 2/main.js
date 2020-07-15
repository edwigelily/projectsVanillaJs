let nombre = 0
const compter = document.getElementById('compter');
const btnDescrease = document.getElementById('descrease');
const btnReset = document.getElementById('reset');
const btnIncrease = document.getElementById('increase');

compter.textContent = nombre;

btnIncrease.addEventListener('click', function(){

    nombre ++;

    if(nombre > 0)
        compter.style.color = "#047C44";
    if(nombre === 0)
        compter.style.color="#000000"

     compter.textContent = nombre;

});

btnReset.addEventListener('click', function(){
    
    nombre = 0; 
    compter.textContent = nombre;
    compter.style.color = "#000000";
});

btnDescrease.addEventListener('click', function(){

    nombre--;
    
    if(nombre < 0)
        compter.style.color = "#FC0404";
    if(nombre === 0)
        compter.style.color = "#000000"

    compter.textContent = nombre;

});
