const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
    // 1. ler
    const n1 = Number(document.querySelector("#nota1").value);
    const n2 = Number(document.querySelector("#nota2").value);

    // 2. calcular
    const media = (n1 + n2) / 2;

    // 3. mostrar
    saida.textContent = "Média: " + media.toFixed(1);

    //Se somar a média de 2 e 3, o resultado é 11.5
    //Sem o number o javascript concatena as strings, e divide por 2, mas não faz a soma.
}
