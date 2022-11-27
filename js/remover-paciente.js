var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){                    
    /*
    event.target.remove ->  console.log(event.target) -> quem foi clicado, vai remover apenas o quadradinho que foi clicado e não todo elemento
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;       
    */

    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    },500);                                                     // 500ms -> 0.5s
});



/*

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove();                                  // this -> quem o evento está atrelado " o paciente que foi clicado -> remove "
    })
})

*/