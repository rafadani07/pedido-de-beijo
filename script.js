function darBeijo() {
    alert("💋💖 Te amo, Giovanna! Beijinho dado! 😘");
}

function fugir() {
    let botao = document.getElementById("nao");
    let largura = window.innerWidth - botao.offsetWidth;
    let altura = window.innerHeight - botao.offsetHeight;

    let novaPosicaoX = Math.floor(Math.random() * largura);
    let novaPosicaoY = Math.floor(Math.random() * altura);

    botao.style.left = novaPosicaoX + "px";
    botao.style.top = novaPosicaoY + "px";
}
