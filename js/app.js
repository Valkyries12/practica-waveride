const menu_icon = document.querySelector(".menu-icon");
const caracteristicas = document.querySelectorAll(".caracteristicas p");
const titulo_caracteristicas = document.querySelector(".caracteristica-texto .h4");
const texto_caracteristica = document.querySelector(".texto-caracteristica");

//muestro u oculta el menu en version mobile
menu_icon.addEventListener("click", function() {
    let ul_nav = document.querySelector(".ul-nav");
    ul_nav.classList.toggle("visible");
});


//al click en la caracteristica cambia el h4 y texto
for(let i = 0; i < caracteristicas.length; i++){
    caracteristicas[i].addEventListener("click", function(e){
        for(let i = 0; i < caracteristicas.length; i++){
            if(caracteristicas[i].classList.contains("seleccionado")){
                caracteristicas[i].classList.remove("seleccionado");
            }
        }
        e.target.classList.add("seleccionado");
        switch(caracteristicas[i]){
            case caracteristicas[0]:
                titulo_caracteristicas.textContent = "Mauris Maximus Fermentum Arcu Ac Ante.";
                texto_caracteristica.textContent = "Vivamus eget est in odio tempor interdum. Mauris maximus fermentum arcu, ac finibus ante. Sed mattis risus at ipsum elementum, ut auctor ut turpis cursus. Vivamus eget est in odio tempor interdum. Mauris max fermentum arcu, ac finibus ante. Sed mattis risus at elementum.";
                break;
            case caracteristicas[1]:
                titulo_caracteristicas.textContent = "Sed Mattis Risus At Ipsum, Ut Auctor.";
                texto_caracteristica.textContent = "Mauris max fermentum arcu, ac finibus ante Vivamus eget est in odio sed tempor interdum. Mauris maximus fermentum arcu, ac finibus ante. Sed mattis risus at ipsum elementum, ut auctor turpis cursus ipsum dolor.";
                break;
            case caracteristicas[2]:
                titulo_caracteristicas.textContent = "Tempor Interdum. Maximus Fermentum Arcu.";
                texto_caracteristica.textContent = "Aac finibus ante. Sed mattis risus at ipsum Vivamus eget est in odio tempor interdum. Mauris maximus fermentum arcu, ac finibus ante. Sed mattis risus at ipsum elementum, ut auctor turpis cursus.";
                break;
        }
    });
}