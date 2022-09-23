var numeroSecreto = parseInt(Math.random() * 11); 

function Chutar() {
    var chute = parseInt(document.getElementById('valor').value);
    //var valorChute = chute.value;
    //var converterChute = parseInt(chute);
    var mostrar = document.getElementById('resultado');

    if (chute == numeroSecreto) {
        //var acertou = 'Parabéns seu chute foi correto';
        mostrar.innerHTML = 'Parabén seu chute foi correto';
    } else if (chute > 10 || chute < 0) {
        //var menor = 'Seu chute foi menor que o valor correto, tente novamente';
        mostrar.innerHTML = 'Por favor digite um número de 0 a 10';
    } else if (chute > numeroSecreto){
        //var maior = 'Seu chute foi maior que o valor correto, tente novamente';
        mostrar.innerHTML = 'Seu chute foi maior que o valor correto, tente novamente';
    } else if (chute < numeroSecreto) {
        mostrar.innerHTML = 'Seu chute foi menor que o valor correto, tente novamente';
    } else {
        mostrar.innerHTML = ''
    }

    //var mostrar = document.getElementById('resultado');
    //mostrar.innerHTML = chute;
}