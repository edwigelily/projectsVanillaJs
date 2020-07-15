const couleurs = [
    {
        nom: "Background Color : #FCF404",
        style:"#FCF404"
    },
    {
        nom: "Background Color : #FC5C04",
        style:"#FC5C04"
    },
    {
        nom: "Background Color : #046C4C",
        style:"#046C4C"
    },
    {
        nom: "Background Color : #04B4A0",
        style:"#04B4A0"
    },
    {
        nom: "Background Color : #B4E4F4",
        style:"#B4E4F4"
    },
    {
        nom: "Background Color : #DCDCDC",
        style:"#DCDCDC"
    },
    {
        nom: "Background Color : #8C0404",
        style:"#8C0404"
    },
    {
        nom: "Background Color : #E9BDA7",
        style:"#E9BDA7"
    },
    {
        nom: "Background Color : #EDB606",
        style:"#EDB606"
    },
    {
        nom: "Background Color : #D4B082",
        style:"#D4B082"
    },
];

const button = document.getElementById("changer");
const body = document.querySelector('body');
const article = document.querySelector('article')


button.addEventListener('click', function(){

    const index = Math.floor(Math.random() * Math.floor(couleurs.length));
    
    article.textContent = couleurs[index].nom;
    body.style.backgroundColor = couleurs[index].style; 
});


