// Função para calcular o salário família
function calcularSalarioFamilia() {
    // Obter os valores dos inputs
    var empregado = document.getElementById("empregadoInput").value; // Obtém o valor do input de empregado
    var filhos = parseInt(document.getElementById("filhosInput").value); // Obtém o valor do input de filhos e converte para número inteiro
    var salario = parseFloat(document.getElementById("salarioInput").value); // Obtém o valor do input de salário e converte para número decimal

    // Verificar a faixa de salário contribuição e calcular o salário família
    var salarioFamilia = 0; // Inicializa a variável que armazenará o valor do salário família
    if (salario <= 808.89) { // Se o salário for menor ou igual a 808.89
        salarioFamilia = 41.80 * filhos; // Calcula o salário família multiplicando 41.80 pelo número de filhos
    } else if (salario > 808.89 && salario <= 1216.16) { // Se o salário for maior que 808.89 e menor ou igual a 1216.16
        salarioFamilia = 29.16 * filhos; // Calcula o salário família multiplicando 29.16 pelo número de filhos
    } else { // Caso contrário
        salarioFamilia = 0; // Define o salário família como 0, pois não há salário família para salários acima de 1216.16
    }

    // Exibir o resultado
    document.getElementById("resultadoSalarioFamilia").innerText = "O salário família de " + empregado + " é de R$ " + salarioFamilia.toFixed(2); // Exibe o resultado do cálculo na página
}