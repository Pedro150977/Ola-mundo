function calcular(event){
    event.preventDefault();

    var nome = document.getElementById('nome');
    var valorNome = nome.value;

    var valorElemento = document.getElementById('nota1');
    var valor = valorElemento.value;
    var convert = parseFloat(valor);

    var valorElemento2 = document.getElementById('nota2');
    var valor2 = valorElemento2.value;
    var convert2 = parseFloat(valor2);

    var valorElemento3 = document.getElementById('nota3');
    var valor3 = valorElemento3.value;
    var convert3 = parseFloat(valor3);

    var valorElemento4 = document.getElementById('nota4');
    var valor4 = valorElemento4.value;
    var convert4 = parseFloat(valor4);
    var result = (convert + convert2 + convert3 + convert4) / 4;

    var mostrar = document.getElementById('final');

    if (result >= 7){
        var aprovado = 'Bem vindo ' + valorNome + " sua nota final é: " + result + ' e você foi aprovado';
        mostrar.innerHTML = aprovado
    } else {
        var reprovado = 'Bem vindo ' + valorNome + " sua nota final é: " + result + ' e você foi reprovado';
        mostrar.innerHTML = reprovado
    } 

}
