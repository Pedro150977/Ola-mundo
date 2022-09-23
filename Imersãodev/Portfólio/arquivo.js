const botoes = document.querySelectorAll('button');

function alterarTema () {
    document.getElementById('container').style.background = '#333439';
    document.getElementById('tema').style.background = '#1C1C1C';
    document.getElementById('tema').style.border = 'solid 2px white';
    document.getElementById('tema').style.color = 'white';
}

for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', alterarTema);
}