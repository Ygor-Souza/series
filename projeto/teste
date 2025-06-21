//princicio de responsabilidade única(SRP) e aberto e fechado(OCP)
document.addEventListener('DOMContentLoaded', function(){
    iniciarVotacao();
    //função responsavel por iniciar o processo de votação com o (SRP)    
});

function iniciarVotacao(){
    configurarVotação();
    configurarReset();
    //configura os botões da votação
    //cada botão segue uma única responsabilidade (SRP)
}

function configurarVotação(){
    var botoes = document.querySelectorAll('.votar');

    botoes.forEach(function(botao){
        botao.addEventListener('click', function(){
            votar(this);
        });
    });

    //incrementa o contador de votos da serie selecionada
    //função aberta para adicionar novas funcionalidades, sem alterar o codigo
    //usando o (OCP)
}

function votar(botao){
    var contador = botao.parentNode.querySelector('.votos');
    contador.textContent= parseInt(contador.textContent) + 1;
    //adiciona um voto ao contador
}

function configurarReset(){
    var reset = document.querySelector('.resetar');

    reset.addEventListener('click', function(){
        resetarVotação();
    });
    //a função resetar é estabelecida fora daqui
}

function resetarVotação(){
    var contadores = document.querySelectorAll('.votos');

    contadores.forEach(function(contador){
        contador.textContent = 0;
    })
    //estabelece a função contador
}