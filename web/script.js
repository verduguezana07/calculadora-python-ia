
const visor = document.getElementById("visor");
const historico = document.getElementById("historico");

let primeiroNumero = null;
let operacao = "";
let novoNumero = false;
let expressao = "";

function limparVisor() {
    visor.value = "0";
    historico.textContent = "";
    primeiroNumero = null;
    operacao = "";
    novoNumero = false;
    expressao = "";
}

function adicionarNumero(numero) {
    if (novoNumero || visor.value.startsWith("Erro")) {
        visor.value = numero;
        novoNumero = false;
    } else if (visor.value === "0") {
        visor.value = numero;
    } else {
        visor.value += numero;
    }

    atualizarHistorico();
}

function adicionarPonto() {
    if (novoNumero || visor.value.startsWith("Erro")) {
        visor.value = "0.";
        novoNumero = false;
    } else if (!visor.value.includes(".")) {
        visor.value += ".";
    }

    atualizarHistorico();
}

function simbolo(tipo) {
    const simbolos = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷",
        "**": "^"
    };
    return simbolos[tipo] || tipo;
}

function atualizarHistorico() {
    if (operacao && primeiroNumero !== null) {
        historico.textContent =
            primeiroNumero + " " + simbolo(operacao) +
            " " + (novoNumero ? "" : visor.value);
    }
}

function prepararOperacao(tipo) {
    primeiroNumero = Number(visor.value);
    operacao = tipo;
    novoNumero = true;

    historico.textContent =
        primeiroNumero + " " + simbolo(tipo);
}

function calcularPorcentagem() {
    const valor = Number(visor.value);

    if (primeiroNumero !== null && operacao) {
        visor.value = String(primeiroNumero * valor / 100);
        atualizarHistorico();
        historico.textContent += "%";
    } else {
        historico.textContent = valor + "%";
        visor.value = String(valor / 100);
    }
}

function calcularResultado() {
    if (primeiroNumero === null || !operacao) return;

    const segundoNumero = Number(visor.value);
    let resultado;

    expressao = primeiroNumero + " " +
        simbolo(operacao) + " " + segundoNumero + " =";

    switch (operacao) {
        case "+":
            resultado = primeiroNumero + segundoNumero;
            break;
        case "-":
            resultado = primeiroNumero - segundoNumero;
            break;
        case "*":
            resultado = primeiroNumero * segundoNumero;
            break;
        case "/":
            if (segundoNumero === 0) {
                visor.value = "Erro: divisão por zero";
                historico.textContent = expressao;
                primeiroNumero = null;
                operacao = "";
                novoNumero = true;
                return;
            }
            resultado = primeiroNumero / segundoNumero;
            break;
        case "**":
            resultado = primeiroNumero ** segundoNumero;
            break;
        default:
            return;
    }

    historico.textContent = expressao;
    visor.value = Number.isFinite(resultado)
        ? String(Number(resultado.toPrecision(12)))
        : "Erro";

    primeiroNumero = null;
    operacao = "";
    novoNumero = true;
}

console.log("Calculadora Ana funcionando!");
