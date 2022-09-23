//var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    var chute = parseInt(document.getElementById('valor').value);
    var mostrar = document.getElementById('resultado');
    var numeroSecreto = parseInt(Math.random() * 11);

    if (chute == numeroSecreto) {
        //var acertou = 'Parabéns seu chute foi correto'; // Eu não preciso criar uma variavel, posso só passar um texto como na linha a seguir.
        mostrar.innerHTML = 'Parabéns seu chute foi correto';
    } else if (document.getElementById('valor').value == '') {
        alert('Por favor digite um número');
    } else {
        mostrar.innerHTML = 'Você errou, o número secreto era ' + numeroSecreto;
    }

}