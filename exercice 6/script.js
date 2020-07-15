const btnOpenModal = document.querySelector("section.bloc_visible button");
const btnAnnuler = document.querySelector("section.bloc_invisible i");
const sectionVisible = document.querySelector('section.bloc_visible')
const sectionInvisible = document.querySelector('section.bloc_invisible')
const sectionBleu = document.querySelector('section.bleu')

btnOpenModal.addEventListener('click', function(){
    
    sectionBleu.classList.replace('invisible','visible_autre')
    sectionInvisible.classList.replace('invisible', 'visible')

});
btnAnnuler.addEventListener('click',function(){

    sectionBleu.classList.replace('visible_autre','invisible')
    sectionInvisible.classList.replace('visible', 'invisible')

})