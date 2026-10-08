const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
  const n1 = Number(document.querySelector("#nota1").value); //estava faltando o Number, descobri o erro no console que me falou a linha do erro.
  const n2 = Number(document.querySelector("#nota2").value);
  const n3 = Number(document.querySelector("#nota3").value);
  const media = (n1 + n2 + n3) / 3;
  saida.textContent = "Média: " + media.toFixed(2); //esatva faltando o toFixed(2).
}