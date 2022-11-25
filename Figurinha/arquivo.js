let verde = true

function mudarTema(event) {
    const backgroundImage = verde ? "url(./assets/azul.svg)" : "url(./assets/verde.svg)"
    const card = event.currentTarget;
    verde = !verde
    console.log(verde)
    card.style.backgroundImage = backgroundImage
}