var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("buscando pacientes");                              
                                                                        // requisições tem o envio e a resposta da requisição (request e response)
    var xhr = new XMLHttpRequest();                                     // responsavel por criar requisições http

    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");    // especificar que tipo de requisição queremos fazer e qual endereço

    xhr.addEventListener("load", function(){                            // Quando sua resposta estiver carregada(load), voce executa uma função pra mim
                                                                        // console.log(xhr.responseText); texto da resposta 
        var erroAjax = document.querySelector("#erro-ajax");        
        if( xhr.status == 200) {                                            // código que deu tudo certo, e então carrega todos os dados
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;                                // console.log(resposta); console.log(typeof resposta); -> tipo da resposta -> no caso, string */                                                                    
            var pacientes = JSON.parse(resposta);                           // transforma de JSON num objeto javascript, no caso de string para objeto                       
                                                                            // console.log(pacientes); console.log(typeof pacientes);                                                                         
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            })
        }else {
            console.log(xhr.status);                                        // no caso o codigo do erro
            console.log(xhr.responseText);                                  // texto da resposta

            erroAjax.classList.remove("invisivel");
        }
            
    });

    xhr.send();                                                         // envia a requisição

});