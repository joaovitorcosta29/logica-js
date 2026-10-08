const TAXA_SERVICO = 0.1;

const botao = document.querySelector("#calcular");
const saida = document.querySelector("#preco-final");
const saidaServico = document.querySelector("#ValorTaxaServico");
const saidaTotal = document.querySelector("#ValorTotal");

botao.onclick = () => {
    // 1. ler
    const conta = Number(document.querySelector("#conta").value);
    const pessoas = Number(document.querySelector("#pessoas").value);

    // 2. calcular
    const valorServico = conta * TAXA_SERVICO;
    const valorTotal = conta + valorServico;
    const valorPorPessoa = valorTotal / pessoas;

    // 3. mostrar
    saida.textContent = `Preço por pessoa: R$ ${valorPorPessoa.toFixed(2)}`;
    saidaServico.textContent = `Serviço: R$ ${valorServico.toFixed(2)}`;
    saidaTotal.textContent = `Total: R$ ${valorTotal.toFixed(2)}`;

}
