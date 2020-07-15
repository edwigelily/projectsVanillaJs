//appeler tous les éléments à modifier
const burger = document.querySelector('div.menu i');
let mobileOnly = document.querySelector('nav.mobile-only')

//Ecouter le click du burger
burger.addEventListener('click',function(){
    //faire apparaitre le menu
    
    mobileOnly.classList.toggle("visible");
    mobileOnly.animate([
        
        { transform: 'translateY(-30px)' }, 
        { transform: 'translateY(0px)' },
      ],
      {   
        duration: 250,
      });

});


