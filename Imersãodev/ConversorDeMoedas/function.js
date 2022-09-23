function Converter() {

    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);

    var valorEmEuro = valorEmDolar * 5.26;
    var valorEmReal = valorEmDolar * 5.25;

    var elementoValorConvertido = document.getElementById('valorConvertido2');
    var valorConvertido = 'O resultado em euro é € ' + valorEmEuro;
    elementoValorConvertido.innerHTML = valorConvertido
    var elementoValorConvertido = document.getElementById('valorConvertido');
    var valorConvertido = 'O resultado em real é R$ ' + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido

}