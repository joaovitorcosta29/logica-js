const botao = document.querySelector("#calcular");
const saida = document.querySelector("#preco-final");
const saidaDesconto = document.querySelector("#desconto-valor");

botao.onclick = () => {
    // 1. ler]
    const preco = Number(document.querySelector("#preco").value);
    const desconto = Number(document.querySelector("#desconto").value);

    // 2. calcular
    const valorDesconto = (preco * desconto) / 100;
    const valorFinal = preco - valorDesconto;

    // 3. mostrar
    saida.textContent = `Preço final: R$ ${valorFinal.toFixed(2)}`;
    saidaDesconto.textContent = `Desconto: R$ ${valorDesconto.toFixed(2)}`;

}
