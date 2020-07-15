const btns = document.querySelectorAll('button');

btns.forEach(function(btn){
    
    btn.addEventListener("click", function(){
        
        
        btn.parentNode.parentNode.querySelector("div+section").classList.add("visible");
        
        let corpsVisible = document.querySelector("section.visible");
        let corpCourant = btn.parentNode.parentNode.querySelector("div+section"); 
        let iconCourant = btn.querySelector("i.fa");

        
        //si l'icon courante contient la class:(fa-plus-square-o))
        if(iconCourant.classList.contains("fa-plus-square-o") == true){
            
            //rentre tous les corps déjà visibles invisible & changer leurs icons
            if(corpsVisible !== null){

                corpCourant.classList.add("visible");
                iconCourant.classList.replace("fa-plus-square-o","fa-minus-square-o");
                corpsVisible.classList.remove("visible");
                corpsVisible.parentNode.querySelector("div.question button i.fa").classList.replace("fa-minus-square-o","fa-plus-square-o");

            }
            //alors on la remplace par fa-minus-square-o
            iconCourant.classList.replace("fa-plus-square-o","fa-minus-square-o");
            
            //Rendre le corps visible 
            corpCourant.classList.add("visible");
        }
        //Si non si l'icon courante contient la class:(fa-minus-square-o)
        else if(iconCourant.classList.contains("fa-minus-square-o") == true){
            
            //alors on la remplace par fa-plus....
            iconCourant.classList.replace("fa-minus-square-o","fa-plus-square-o");

            //rendre le corps invisible
            corpCourant.classList.remove("visible");

        }
        

    })
})