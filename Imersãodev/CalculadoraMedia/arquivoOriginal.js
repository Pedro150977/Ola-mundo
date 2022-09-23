var nome = "Pedro"
var notaDoPrimeiroBimestre = 5
var notaDoSegundoBimestre = 8
var notaDoTerceiroBimestre = 5
var notaDoQuartoBimestre = 7
var aprovado = 7

var valorNota = notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre
var notaFinal = valorNota / 4

//var notaFixada = notaFinal.toFixed(1) essa função 'toFixed() fixa o número de casas decimais após o ponto'

console.log('Bem vindo ' + nome + ' sua nota é:')
console.log(notaFinal)