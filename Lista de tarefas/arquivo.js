var button = document.getElementById("btn");
var tarefa = document.getElementById("tarefa");
var ul = document.getElementById("ul");

function criarTarefa() {
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(tarefa.value));
    ul.appendChild(li)
    tarefa.value = '';

    function tarefaConcluida() {
        li.classList.toggle('done');
    }

    li.addEventListener('click', tarefaConcluida);

    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add('delete');
    }
}

