var negrito = document.getElementById('negrito');
var italico = document.getElementById('italico');
var sublinhado = document.getElementById('sublinhado');
var grifado = document.getElementById('grifado');
var corFonte = document.getElementById('corfonte');
var tamanhoFonte = document.getElementById('tamanhofonte');
var estiloFonte = document.getElementById('estilofonte');
var direcaoTexto = document.getElementById('direcaotexto');
var texto = document.getElementById('texto');


function Negrito() {
    document.body + texto.classList.toggle('negrito');
} 

function Italico() {
    document.body + texto.classList.toggle('italico');
}

function Sublinhado() {
    document.body + texto.classList.toggle('sublinhado');
}

function Grifado() {
}
