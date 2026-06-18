    function imprimirNome() {
    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const tipoAcesso = document.getElementById("Tipo-acesso").checked ? "R" : "--";

    window.alert("Crachá gerado com sucesso!\n\nNome: " + nome + "\nCargo: " + cargo + "\nDepartamento: " + departamento + "\nTipo de acesso: " + tipoAcesso);
}
