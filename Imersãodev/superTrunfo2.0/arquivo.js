var carta1 = {
    nome: 'Naruto',
    foto: 'https://i.pinimg.com/564x/78/12/43/7812436150eb40ac5e1e4ff1cd16faba.jpg',
    atributos: {
        ataque: 9,
        defesa: 9,
        chakra: 8
    }
};
var carta2 = {
    nome: 'Sasuke',
    foto: 'https://upload.wikimedia.org/wikipedia/pt/0/02/Sasukereup.jpg',
    atributos: {
        ataque: 9,
        defesa: 8,
        chakra: 8
    }
};
var carta3 = {
    nome: 'Sakura',
    foto: 'https://cdn.awsli.com.br/1000x1000/1206/1206083/produto/93811704/e796a505bf.jpg',
    atributos: {
        ataque: 7,
        defesa: 9,
        chakra: 8
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
    var cartaAleatoriaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[cartaAleatoriaMaquina];
    //imagemDasCartas = imagemCartas[cartaAleatoriaMaquina]
    console.log(cartaMaquina);

    var cartaAleatoriaJogador = parseInt(Math.random() * 3);
    while (cartaAleatoriaJogador == cartaAleatoriaMaquina) {
        var cartaAleatoriaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[cartaAleatoriaJogador];
    //imagemDasCartas = imagemCartas[cartaAleatoriaJogador]
    console.log(cartaJogador);

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirCartaJogador();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})`
    var opcoesTexto = '';
    //Nessa linha 56 as `` são usadas para dar inicio a um código CSS, e depois o $ é para voltar para o JS.
    // divCartaJogador.style.backgroundImage= "url (" + cartaJogador.foto + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirOpcoes() {
    var opcoes = document.getElementById('opcoes');
    var opcoesTexto = '';

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
        console.log(atributo)
    }

    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName('atributo');
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        } else {
            alert('Selecione algum atributo')
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById('resultado');
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        divElementoResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
        divElementoResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
        divElementoResultado = "<p class='resultado-final'>Empatou</p>";
    }
    elementoResultado.innerHTML = divElementoResultado
    document.getElementById('btnJogar').disabled = true;
    exibirCartaMaquina();
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
    var opcoesTexto = '';
    //Nessa linha 56 as `` são usadas para dar inicio a um código CSS, e depois o $ é para voltar para o JS.
    // divCartaJogador.style.backgroundImage= "url (" + cartaJogador.foto + ")"
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}