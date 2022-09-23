var listaDeFilmes = [''];
var listaDeNomes = [''];
function adicionarFilme() {
    var nome = document.getElementById('inputNome').value;
    var converterNome = "<p>" + nome + '</p>';
    var filme = document.getElementById('filme').value;
    var converterFilme = '<img src=' + filme + '>';
    listaDeNomes.push(nome)
    listaDeFilmes.push(filme);
    document.getElementById('listaFilmes').innerHTML = document.getElementById('listaFilmes').innerHTML + converterFilme + converterNome;
    var filme = document.getElementById('filme').value = '';
    var nome = document.getElementById('inputNome').value = '';
}

function mostrarLista() {
    document.getElementById('listaFilmes').innerHTML = '';
    document.getElementById('listaFilmes').innerHTML += '<img src=' + listaDeFilmes + '>' + listaDeNomes;
}