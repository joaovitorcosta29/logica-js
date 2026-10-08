const botao = document.querySelector("#calcular");
const litrosgastos = document.querySelector("#litrosgastos");
const custoida = document.querySelector("#custoida");
const custototal = document.querySelector("#custototal");

botao.onclick = () => {
    // 1. ler
    const distancia = Number(document.querySelector("#distancia").value);
    const consumo = Number(document.querySelector("#consumo").value);
    const preco = Number(document.querySelector("#preco").value);

    // 2. calcular
    const litros = distancia / consumo;
    const custo = litros * preco;
    
    const custoTotal = custo * 2;

    // 3. mostrar
    litrosgastos.textContent = "Litros gastos:" + litros.toFixed(1) + "L";
    custoida.textContent = "Custo da ida: " + custo.toFixed(2);
    custototal.textContent = "Custo da viagem ida e volta: " + custoTotal.toFixed(2);
    
    //Pergunta: aparece escrito Infinity no campo aonde era para aparecer os dados.
}
