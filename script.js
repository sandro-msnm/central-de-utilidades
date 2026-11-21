// ==========================================
// MENU PRINCIPAL (USO DE SWITCH)
// ==========================================
function abrirMenuPrincipal() {
    const opcao = prompt(
        "CENTRAL DE UTILIDADES\n" +
        "Escolha uma opção:\n" +
        "1 - Calculadora de Descontos\n" +
        "2 - Calculadora de Parcelas\n" +
        "3 - Simulador de Investimentos\n" +
        "4 - Divisor de Despesas\n" +
        "0 - Sair"
    );

    switch (opcao) {
        case "1":
            executarCalculadoraDescontos();
            break;
        case "2":
            executarCalculadoraParcelas();
            break;
        case "3":
            executarSimuladorInvestimentos();
            break;
        case "4":
            executarDivisorDespesas();
            break;
        case "0":
        case null:
            alert("Operação encerrada.");
            break;
        default:
            alert("Opção inválida! Escolha um número entre 1 e 4.");
    }
}

// ==========================================
// A) CALCULADORA DE DESCONTOS
// ==========================================
function calcularValorFinalDesconto(precoOriginal, percentualDesconto) {
    const valorEconomizado = precoOriginal * (percentualDesconto / 100);
    return precoOriginal - valorEconomizado;
}

function executarCalculadoraDescontos() {
    const precoOriginal = Number(prompt("Informe o preço original do produto (R$):"));
    const percentualDesconto = Number(prompt("Informe o percentual de desconto (%):"));

    if (isNaN(precoOriginal) || precoOriginal <= 0 || isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100) {
        alert("Dados inválidos! Informe um preço maior que zero e um desconto entre 0% e 100%.");
        return;
    }

    const valorFinal = calcularValorFinalDesconto(precoOriginal, percentualDesconto);
    const valorEconomizado = precoOriginal - valorFinal;

    alert(
        "RESULTADO - CALCULADORA DE DESCONTOS\n\n" +
        `Preço original: R$ ${precoOriginal.toFixed(2)}\n` +
        `Percentual de desconto: ${percentualDesconto}%\n` +
        `Valor economizado: R$ ${valorEconomizado.toFixed(2)}\n` +
        `Preço final: R$ ${valorFinal.toFixed(2)}`
    );
}

// ==========================================
// B) CALCULADORA DE PARCELAS
// ==========================================
function calcularValorParcela(valorTotal, quantidadeParcelas) {
    return valorTotal / quantidadeParcelas;
}

function executarCalculadoraParcelas() {
    const valorTotal = Number(prompt("Informe o valor total da compra (R$):"));
    const quantidadeParcelas = Number(prompt("Informe a quantidade de parcelas:"));

    if (isNaN(valorTotal) || valorTotal <= 0) {
        alert("Valor inválido! O valor da compra deve ser maior que zero.");
        return;
    }

    if (isNaN(quantidadeParcelas) || quantidadeParcelas <= 0 || !Number.isInteger(quantidadeParcelas)) {
        alert("Quantidade de parcelas inválida! Informe um número inteiro maior que zero.");
        return;
    }

    const valorParcela = calcularValorParcela(valorTotal, quantidadeParcelas);

    alert(
        "RESULTADO - CALCULADORA DE PARCELAS\n\n" +
        `Valor total: R$ ${valorTotal.toFixed(2)}\n` +
        `Quantidade de parcelas: ${quantidadeParcelas}x\n` +
        `Valor de cada parcela: R$ ${valorParcela.toFixed(2)}`
    );
}

// ==========================================
// C) SIMULADOR DE INVESTIMENTOS (USO DE FOR)
// ==========================================
function simularEvolucaoInvestimento(valorInicial, aporteMensal, taxaMensalPercentual, meses) {
    let saldo = valorInicial;
    const taxaDecimal = taxaMensalPercentual / 100;

    for (let i = 1; i <= meses; i++) {
        // Primeiro aplica o rendimento sobre o saldo acumulado, depois soma o aporte ao final do mês
        saldo = saldo + (saldo * taxaDecimal) + aporteMensal;
    }

    return saldo;
}

function executarSimuladorInvestimentos() {
    const valorInicial = Number(prompt("Informe o valor inicial do investimento (R$):"));
    const aporteMensal = Number(prompt("Informe o valor do aporte mensal (R$):"));
    const taxaMensal = Number(prompt("Informe a taxa de rendimento mensal (%):"));
    const meses = Number(prompt("Informe o período do investimento (em meses):"));

    if (
        isNaN(valorInicial) || valorInicial < 0 ||
        isNaN(aporteMensal) || aporteMensal < 0 ||
        isNaN(taxaMensal) || taxaMensal < 0 ||
        isNaN(meses) || meses <= 0 || !Number.isInteger(meses)
    ) {
        alert("Dados inválidos! Verifique os valores informados e tente novamente.");
        return;
    }

    const saldoFinal = simularEvolucaoInvestimento(valorInicial, aporteMensal, taxaMensal, meses);
    const totalInvestido = valorInicial + (aporteMensal * meses);
    const rendimentoObtido = saldoFinal - totalInvestido;

    alert(
        "RESULTADO - SIMULADOR DE INVESTIMENTOS\n\n" +
        `Saldo final: R$ ${saldoFinal.toFixed(2)}\n` +
        `Total investido: R$ ${totalInvestido.toFixed(2)}\n` +
        `Rendimento obtido: R$ ${rendimentoObtido.toFixed(2)}`
    );
}

// ==========================================
// D) DIVISOR DE DESPESAS (USO DE DO...WHILE)
// ==========================================
function calcularValorPorPessoa(totalDespesas, quantidadePessoas) {
    return totalDespesas / quantidadePessoas;
}

function executarDivisorDespesas() {
    let totalDespesas = 0;
    let valorDespesa = 0;

    do {
        const entrada = prompt("Informe o valor da despesa (R$) ou digite 0 para encerrar:");
        
        if (entrada === null) {
            alert("Operação cancelada.");
            return;
        }

        valorDespesa = Number(entrada);

        if (isNaN(valorDespesa) || valorDespesa < 0) {
            alert("Valor inválido! Digite um número positivo ou 0 para encerrar.");
        } else if (valorDespesa > 0) {
            totalDespesas += valorDespesa;
        }
    } while (valorDespesa !== 0);

    if (totalDespesas === 0) {
        alert("Nenhuma despesa foi informada.");
        return;
    }

    const quantidadePessoas = Number(prompt("Informe a quantidade de pessoas para dividir a conta:"));

    if (isNaN(quantidadePessoas) || quantidadePessoas <= 0 || !Number.isInteger(quantidadePessoas)) {
        alert("Quantidade de pessoas inválida! Informe um número inteiro maior que zero.");
        return;
    }

    const valorPorPessoa = calcularValorPorPessoa(totalDespesas, quantidadePessoas);

    alert(
        "RESULTADO - DIVISOR DE DESPESAS\n\n" +
        `Total das despesas: R$ ${totalDespesas.toFixed(2)}\n` +
        `Quantidade de pessoas: ${quantidadePessoas}\n` +
        `Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`
    );
}