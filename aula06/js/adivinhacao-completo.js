const botao = document.querySelector("#adivinhar");
const resultado = document.querySelector("#resultado");

const secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let fim = false;
let historico = "";

  botao.onclick = () => {
    tentativas++;
    const chute = Number(document.querySelector("#numero").value);
    
    if (chute === secreto) {
      resultado.textContent = "Acertou em " + tentativas + " tentativas!\n";
      resultado.className = "ok";
      fim = true;
    }
    else if (chute < secreto) {
      resultado.textContent = "É Maior!\n";
      resultado.className = "alerta";
      historico += chute + " ";
    }
    else {
      resultado.textContent = "É Menor!\n";
      resultado.className = "alerta";
      historico += chute + " ";
    }
    if(tentativas < 7 && chute !== secreto){
      resultado.textContent += "Restam " + (7 - tentativas) + " tentativas!";
    }
    else{
        resultado.textContent = "Suas 7 tentativas acabaram. O número era " + secreto + ".\n";
        fim = true;
    }
    if(fim === true){
        resultado.textContent += "O jogo acabou. aperte F5 para jogar novamente \n";
    }
    resultado.textContent += "\nChutes anteriores: " + historico;
}


  
