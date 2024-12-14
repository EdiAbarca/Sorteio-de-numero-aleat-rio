function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value); //cria uma variavel e retorna o valor  na id quantidade no HTML
    let de = parseInt(document.getElementById('de').value); 
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0 ; i < quantidade; i++) { // função de loop
        numero = obterNumeroAleatorio(de, ate);
        //sorteados.push(numero);
    
    while(sorteados.includes(numero)) { // while = enquanto. Verifica se o numero gerado já está na variavel sorteados
       numero = obterNumeroAleatorio(de, ate); 
        }   
       sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado'); // cria uma variavel para enviar ao html os valores sorteados
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
} 

function obterNumeroAleatorio(min, max){  // função que gera o numero aleatório 
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function alterarStatusBotao() { // altera status do botão entre habilitado e desabilitado
    let botao = document.getElementById('btn-reiniciar');  
    if (botao.classList.contains('container__botao-desabilitado')) { 
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }  else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }    
}

    function reiniciar() {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>' ; 
        alterarStatusBotao();
    }