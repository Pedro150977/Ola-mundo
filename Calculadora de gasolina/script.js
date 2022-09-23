function calcular(event) {
    event.preventDefault();

    var alcoolInput = document.getElementById('alcool').value;
    var gasolinaInput = document.getElementById('gasolina').value;
    var calculo = (alcoolInput / gasolinaInput);
    var alcoolSection = document.getElementById('alcoolResult');
    var gasolinaSection = document.getElementById('gasolinaResult');
    var result = document.getElementById('content-result');
    var textResult = document.getElementById('text-result');

    if (calculo < 0.7) {
        textResult.innerHTML = "Compensa usar alcool ";
    } else {
        textResult.innerHTML = "Compensa usar gasolina ";
    }

    alcoolSection.innerHTML = "Álcool R$ " + alcoolInput;
    gasolinaSection.innerHTML = "Gasolina R$ " + gasolinaInput;

    result.classList.remove("hide");
}


