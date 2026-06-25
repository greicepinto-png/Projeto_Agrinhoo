let total = 0;

function plantarArvore(){
    total++;

    document.getElementById("contador").textContent = total;

    const arvore = document.getElementById("arvore");

    if(total < 5){
        arvore.textContent = "🌱";
    }
    else if(total < 10){
        arvore.textContent = "🌿";
    }
    else{
        arvore.textContent = "🌳";
    }
}

function resposta(correta){

    const resultado =
    document.getElementById("resultado");

    if(correta){
        resultado.innerHTML =
        "✅ Correto! Você fez uma escolha sustentável.";
    }
    else{
        resultado.innerHTML =
        "❌ Tente novamente.";
    }
}

function alternarContraste(){
    document.body.classList.toggle("alto-contraste");
}

function aumentarFonte(){

    let tamanho =
    parseFloat(
    getComputedStyle(document.body).fontSize);

    document.body.style.fontSize =
    (tamanho + 2) + "px";
}