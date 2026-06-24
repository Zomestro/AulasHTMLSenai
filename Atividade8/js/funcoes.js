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
function salvaHistorico(nomeDaFuncao, num1, num2, resultado) {
    console.log("Função: " + nomeDaFuncao);
    console.log("Primeiro Número: " + num1);
    console.log("Segundo Número: " + num2);
    console.log("Resultado: " + resultado);
    
}


    