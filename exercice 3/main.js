const profils = [
    {
        photo: "imgs/Edwige.jpg",
        nom: "Edwige BAMENOU",
        metier: "Developpeuse Fullstack",
        description: "Ed Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem maiores exercitationem voluptate beatae eum impedit a neque ea praesentium amet possimus similique soluta, fugit odit, ut maxime sit nisi voluptatum."
    },
    {
        photo: "imgs/Lyderic.jpg",
        nom: "Lydéric AGBODE",
        metier: "Developpeur  Back-end",
        description: "Lyd Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Commodi voluptate consectetur ducimus magnam. Quae quasi animi dolor maxime vero dolore earum,veritatis libero enim corporis ipsum aspernatur recusandae rerum officia?"
    },
    {
        photo: "imgs/Arsene.jpg",
        nom: "Arsène MIHINDOU",
        metier: "Developpeur Font-end ",
        description: "Ars Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem maiores exercitationem voluptate beatae eum impedit a neque ea praesentium amet possimus similique soluta, fugit odit, ut maxime sit nisi voluptatum."
    },
    {
        photo: "imgs/Cece.jpg",
        nom: "Cécilia EKOMY",
        metier: "Developpeuse Front",
        description: "Cécé Lorem ipsum dolor, sit amet consectetur adipisicing elit.  Commodi voluptate consectetur ducimus magnam. Quae quasi animi dolor maxime vero dolore earum,veritatis libero enim corporis ipsum aspernatur recusandae rerum officia?"
    },
    {
        photo: "imgs/Dimitri.jpg",
        nom: "Dimitri ONGOUAN",
        metier: "Developpeur Android",
        description: "Dim Lorem ipsum, dolor sit amet consectetur adipisicing elit.Autem maiores exercitationem voluptate beatae eum impedit a neque ea praesentium amet possimus similique soluta, fugit odit, ut maxime sit nisi voluptatum."
    }
]

const reculer = document.getElementById("recule");
const avancer = document.getElementById("avance");
const aleatoire = document.getElementById("aleatoire");

let img = document.querySelector("section>img");
let spanNom = document.querySelector("span#nom");
let spanMetier = document.querySelector("span#metier");
let article = document.querySelector("article");

//Déclaration d'une variable globale 
let i = 0;

//Mettre à jour le slider 
const miseJourDesStats = (indice)=>{
    
    //donner l'indice qui me permet de récupérer un profil
    img.setAttribute("src", profils[indice].photo);
    spanNom.textContent = profils[indice].nom;
    spanMetier.textContent = profils[indice].metier;
    article.textContent = profils[indice].description;
}
miseJourDesStats(i);


reculer.addEventListener('click', function () {
    //Décrémenter la variable globale(pas < 0)
    i--;
    i = (i < 0) ? profils.length - 1 : i;

    //Mettre à jour le profil 
    miseJourDesStats(i);

});

avancer.addEventListener('click', function () {
    //Incrémenter la variable globale(pas > profils.length)
    i++    
    i = (i == profils.length) ? 0 : i;
    //Mettre à jour le profil 
    miseJourDesStats(i);
});

aleatoire.addEventListener('click', function () {
    //Générer un nombre aléatoire 
    const index = Math.floor(Math.random() * Math.floor(profils.length));

    //Mettre à jour le profil
    miseJourDesStats(index);
});
