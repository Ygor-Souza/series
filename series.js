document.addEventListener( 'DOMContentLoaded', function () {
   var botoes = document.querySelectorAll('.votar');
    for ( var i = 0 ; i < botoes.length ; i++ ) {
        var botao = botoes[i];
        botao.addEventListener( 'click', function () {
            var contador = this.parentNode.querySelector('.votos');
            contador.textContent = parseInt(contador.textContent) + 1;
        } );
    }
    var reset = document.querySelector('.resetar');
    reset.addEventListener( 'click', function () {
        var contadores = document.querySelectorAll('.votos');
        for ( var j = 0 ; j < contadores.length ; j++) {
            contadores[j].textContent = 0;
        }
    } );
} );

