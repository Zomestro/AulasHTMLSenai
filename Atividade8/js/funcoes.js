function soma() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiroNumero) + Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Soma",primeiroNumero, segundoNumero, resultado)
}

function subtracao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiroNumero) - Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Subtração",primeiroNumero, segundoNumero, resultado)
}

function multiplicacao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiroNumero) * Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Multiplicação",primeiroNumero, segundoNumero, resultado)
    }

function divisao() {
    let primeiroNumero = document.getElementById("primeiro-numero").value;
    let segundoNumero = document.getElementById("segundo-numero").value;
    let resultado = Number(primeiroNumero) / Number(segundoNumero);

    document.getElementById("resultado").innerText = resultado;

    salvarHistorico("Divisão",primeiroNumero, segundoNumero, resultado)

    }

function baseCalculo() {
    let valorCompra = document.getElementById("valor-compra").value;
    let cotacao = document.getElementById("cotacao").value;
    let baseCalculo = Number(valorCompra) * Number(cotacao);

    document.getElementById("baseCalculo").innerText = baseCalculo;

    salvarHistorico("Base de Cálculo",valorCompra, cotacao, baseCalculo);

    }

function imposto() {
    let total1 = 0;
    let total2 = 0; 
    let valorTotal = 0;
    if (document.getElementById("valorCompra").value < 50) {
        total1 = baseCalculo * 1.2;
        valorTotal = total1;
    } else {
        total2 = baseCalculo * 1.2 * 1.9;
        valorTotal = total2;

    }

    document.getElementById("valorTotal").innerText = valorTotal;

    salvarHistorico("Compra total", valorCompra, cotacao, valorTotal);

}

function salvarHistorico(nomeDaFuncao, num1, num2, resultado) {
    // Criar o objeto de entrada
    const entrada = {
        data: new Date().toISOString(),
        operacao: nomeDaFuncao,
        num1: Number(num1),
        num2: Number(num2),
        resultado: resultado
    };

    // Ler histórico existente do localStorage
    const chave = "historicoCalc";
    let historico = [];
    try {
        const texto = localStorage.getItem(chave);
        if (texto) historico = JSON.parse(texto);
    } catch (e) {
        console.error("Erro ao ler histórico do localStorage:", e);
        historico = [];
    }

    // Adicionar nova entrada e salvar
    historico.push(entrada);
    try {
        localStorage.setItem(chave, JSON.stringify(historico));
    } catch (e) {
        console.error("Erro ao salvar histórico no localStorage:", e);
    }

    // Atualizar a exibição do histórico (se presente)
    if (typeof atualizarListaHistorico === 'function') atualizarListaHistorico();
}

function carregarHistorico() {
    atualizarListaHistorico();
}

function atualizarListaHistorico() {
    const chave = "historicoCalc";
    const listaEl = document.getElementById("lista-historico");
    if (!listaEl) return;

    let historico = [];
    try {
        const texto = localStorage.getItem(chave);
        if (texto) historico = JSON.parse(texto);
    } catch (e) {
        console.error("Erro ao ler histórico:", e);
        historico = [];
    }

    // Limpar e renderizar
    listaEl.innerHTML = "";
    if (historico.length === 0) {
        const li = document.createElement('li');
        li.innerText = 'Nenhuma operação no histórico.';
        listaEl.appendChild(li);
        return;
    }

    historico.slice().reverse().forEach(item => {
        const li = document.createElement('li');
        const data = new Date(item.data);
        li.innerText = `${data.toLocaleString()} — ${item.operacao}: ${item.num1} e ${item.num2} = ${item.resultado}`;
        listaEl.appendChild(li);
    });
}

function limparHistorico() {
    const chave = "historicoCalc";
    localStorage.removeItem(chave);
    atualizarListaHistorico();
}

document.addEventListener('DOMContentLoaded', carregarHistorico);


    