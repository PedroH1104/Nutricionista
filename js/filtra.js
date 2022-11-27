// queremos filtrar a cada letra que o usuario botar, então teremos que escutar o evento de digitação

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){     
    console.log(this.value)                                      // campo do input
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){                                       // verificando se tem algo digitado
        for( var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i];                             // paciente que está sendo visto naquele interação 
            var tdNome = paciente.querySelector(".info-nome");       // buscando dentro do tr(paciente), o td que tem a class info-nome 
            var nome = tdNome.textContent;          
            var expressao = new RegExp(this.value,"i")               // criar expressao regular -> Primeiro -> o que quer q ela busque / e como quer q busque (case sensitive) ou (case insensitive)

            if(!expressao.test(nome)){                               // função .test -> quero testar se no "nome" tem pelo menos um pedaço do que tem na minha expressao, return V ou F
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }    
    }else {
        for( var i = 0; i < pacientes.length ; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});  




