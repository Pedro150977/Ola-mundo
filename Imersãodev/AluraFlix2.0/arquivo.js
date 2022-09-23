function adicionarFilme() {
    var lista = [];
    var nome = document.getElementById('inputNome').value;
    var converterNome = '<h2>' + nome + '</h2>';
    var url = document.getElementById('filme').value;
    if (url.endsWith('.jpg')) {
        listarFilmesNaTela(url);
    } else {
        alert('Enderoço inválido');
    }
    lista.push(url);
    document.getElementById('filme').value = "";
    document.getElementById('inputNome').value = "";
    // com essa linha 10, eu limpo minha caixa de input no final da função
    function listarFilmesNaTela(url) {
        var converterUrl = "<img src=" + url + ">";
        var mostrarTela = document.getElementById('listaFilmes');
        var mostrarTela2 = document.getElementById('listaFilmes');
        mostrarTela.innerHTML = mostrarTela.innerHTML + converterUrl;
        mostrarTela2.innerHTML = mostrarTela2.innerHTML + converterNome; 
        // com essa linha 6, eu consigo adicionar mais de uma imagem, pois uma não sobrepõe a outra.
    }
}
function mostrarLista (mostrarTela) {
    for (i=0; i < lista.length; i++)
    mostrarLista.innerHTML = lista[i];
}