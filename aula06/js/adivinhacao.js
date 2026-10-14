const botao = document.querySelector("#adivinhar");
const resultado = document.querySelector("#resultado");

const secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

  botao.onclick = () => {
    tentativas++;
    const chute = Number(document.querySelector("#numero").value);
    if (chute === secreto) {
      resultado.textContent = "Acertou em " + tentativas + " tentativas!";
    }
    else if (chute < secreto) {
      resultado.textContent = "É Maior!";
    }
    else {
      resultado.textContent = "É Menor!";
    }
  }
  

