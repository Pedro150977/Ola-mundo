let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizeSenha = document.querySelector("#valor");
let senha = document.querySelector("#senha");

let containerSenha = document.querySelector("#container-senha")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*,."
let novaSenha = "";

sizeSenha.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizeSenha.innerHTML = this.value;
}

function GeradorSenha() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));// o * n é para o Math.random gerar um número aleatório do tamanho da variavel charset.
    }

    containerSenha.classList.remove("hide"); 
    senha.innerHTML = pass;
    novaSenha = pass
}

function copy() {
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
}

containerSenha.addEventListener("click", copy);
buttonElement.addEventListener("click", GeradorSenha);
