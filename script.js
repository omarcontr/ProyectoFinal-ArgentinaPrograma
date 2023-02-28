
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".card-link")[0];
let modal = document.querySelectorAll(".sss")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click" , function (e){
    modal.classList.replace("sss","modal" )
    modalC.style.opacity = "1";
    modalC.style.visibility ="visible";
    modal.classlist.toggle("close");
});

cerrar.addEventListener("click", function(){
    modal.classList.replace("modal","sss" )
    modalC.style.opacity = "0";
    modalC.style.visibility ="hidden";
    modal.classlist.toggle("close");  
});
