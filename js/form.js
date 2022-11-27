var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();                                         // retira as propriedades padrão do botão do form

    var form = document.querySelector("#form-adiciona");            // adiciona a variavel form o formulario com o ID enviado
    var paciente = obtemPacienteDoFormulario(form);                 // chama a função que cria o objeto paciente com as proprieades que o usuario coloque no form  
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);        
        return;                                                     // ele sai da função sem chegar na parte de adicionar o paciente
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset();                                                   // limpa os campos do form
    var mensagemErro = document.querySelector("#mensagens-erro");
    mensagemErro.innerHTML = "";                                    // limpa as mensagens de erro quando conseguir adicionar um paciente

});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);                             // monta a Tr do paciente
    var tabela = document.querySelector("#tabela-pacientes");       // adiciona a variavel tabela todo o corpo da tabela pacientes 
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form){

    var paciente = {                    // criando um objeto em javascript
        nome: form.nome.value,          // criando propriedades
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");                                       // adicionar a classe paciente as novas tr 
 
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));                /* coloque como filho, pois as td são filhas da tr */
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");                  // crio a td
    td.textContent = dado;                                  // coloco o valor lá dentro com o parametro que iremos passar, pode ser paciente.nome, paciente,peso, etc.
    td.classList.add(classe);                               // coloco a classe que eu passar como parametro, pode ser info-nome, info-peso, etc.
    return td;
}

function validaPaciente(paciente){

    var erros = []; 

    if(paciente.nome.length == 0) {
        erros.push("Nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido");                                      // push -> coloca dentro da array o que colocar dentro dos ()
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");     
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    return erros;
}

function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";                                                  // toda vez que for exibir mensagem de erro, vai pagar as antigas e colocar as novas

    erros.forEach(function(erro){                                       // forEach -> para cada itens da minha array "erros", faça algo
        var li = document.createElement("li");
        li.textContent = erro;                                          // <li>mensagem de erro</li> -> que está dentro da array de erros
        ul.appendChild(li);
    });
}








/* 

function mostraMensagem () {
    console.log("Olá, eu fui clicado!");    
}

titulo.addEventListener("click", mostraMensagem);         adiciona um escutador de evento e chama uma função quando esse evento ocorre   

ou usamos uma função anonima 

titulo.addEventListener("click", function(){
    console.log("Olá, eu fui clicado!");
})

var botaoAdicionar = document.querySelector("#adicionar-paciente");         
console.log(botaoAdicionar);                                            -> testar se conseguimos pegar o botão do document html

botaoAdicionar.addEventListener("click", function(event){   -> precisamos passar o event como parametro para poder chamar essa função
    event.preventDefault();                                 -> função que previne o comportamento padrão do botão
    console.log("oi, eu sou o botão e fui clicado");
})

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    console.log(form.altura);                                   consigo acessar a um input do form através do name dele
    console.log(form.peso.value);                               pega o valor que está presente no campo

*/


/* COMO FAZIAMOS A MONTA TD ANTES 

var nomeTd = document.createElement("td");                  // crio a td
nomeTd.classList.add("info-nome");                          // adiciono a classe
nomeTd.textContent = paciente.nome;                         // coloco o valor lá dentro

var pesoTd = document.createElement("td");
nomeTd.classList.add("info-peso");
pesoTd.textContent = paciente.peso;

var alturaTd = document.createElement("td");
nomeTd.classList.add("info-altura");
alturaTd.textContent = paciente.altura;

var gorduraTd = document.createElement("td");
nomeTd.classList.add("info-gordura");
gorduraTd.textContent = paciente.gordura;

var imcTd = document.createElement("td");
nomeTd.classList.add("info-imc");
imcTd.textContent = paciente.imc;   

*/











