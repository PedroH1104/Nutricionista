/* 
console.log(document.querySelector("h1")); -> vai imprimir " <h1>Aparecida Nutrição</h1> " 	
console.log(titulo); -> retornará " <h1>Aparecida Nutrição</h1> " no console do navegador 
console.log(titulo.textContent); -> retornará "Aparecida Nutrição" no console do navegador 
var titulo = document.querySelector("h1"); -> cria uma variavel chamada titulo e atribui " <h1>Aparecida Nutrição</h1> " a ela 
*/


var titulo = document.querySelector(".titulo");                          /* declaramos uma classe no elemento para ficar mais facil de manutenção e desenvolvimento */
titulo.textContent = "Aparecida Nutricionista";                          /* vai trocar o conteudo de texto do titulo para "Banana" */

var listaPaciente = document.querySelectorAll(".paciente");

/*
    console.log(listaPaciente);                                          retorna a array 
    console.log(listaPaciente[0])                                        retorna o primeiro elemento da array
*/

for(var i = 0; i < listaPaciente.length; i++) {

    var paciente = listaPaciente[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;                                           /* a variavel peso vai receber o valor de texto presente em tdPeso */

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if (!pesoValido){                                       // se não for valido, ele entra
        console.log("Peso invalido");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";        
        paciente.classList.add("paciente-invalido");     /* o .classlist permite acessar a lista de classes do elemento e utilizando o add, conseguimos adicionar uma classe a ele */
        /* paciente.style.backgroundColor = "lightcoral"; -> o JS não aceita o "-" então não usaremos background-color, e sim usaremos a propriedade de cada palavra nova com letra maiuscula */
    }

    if (!alturaValida){                                     // se não for valido, ele entra
        console.log("Altura invalida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");       
    }

    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;                                
    }     
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else {
        return false;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else {
        return false 
    }
}

function calculaImc (peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);                                   /* deixar apenas duas casas decimais */
}





