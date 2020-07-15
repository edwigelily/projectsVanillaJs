const menu = document.querySelector('div.menu i');
const fermer = document.querySelector('div.logo-delete i');
const aside = document.querySelector('header aside')

menu.addEventListener('click', function(){

    aside.classList.replace('invisible', 'visible');
    aside.animate([
        
        { transform: 'translateX(-350px)' }, 
        { transform: 'translateX(0px)' },
      ],
      {   
        duration: 500,
      });

});

fermer.addEventListener('click', function(){

    aside.classList.replace('visible', 'invisible');    
    aside.animate([
        
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(-350px)' },
      ],
      {   
        duration: 400,
      });

});