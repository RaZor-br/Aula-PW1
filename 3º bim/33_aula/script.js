const soma = 10 + 5;
const subtracao = 20 / 8;
const multiplicacao = 4 * 3;

const primeiroTexto = "10";
const segundoTexto = "5";

const resultado = primeiroTexto + segundoTexto;
//console.log(resultado); // 105

const textoPreco = "25.75";
const numeroPreco = parseFloat(textoPreco);
//console.log(typeof numeroPreco);

const textoIdade = "15";
const numeroIdade = parseInt(textoIdade);
//console.log(typeof numeroIdade);

const textoValor = "42.67";
const valorNumerico = Number(textoValor);
//console.log(typeof valorNumerico);

//<input id="campoPrimeiroNumero">
const valorDigitado = document.getElementById("campoPrimeiroNumero").value;
const numeroConvertido = parseFloat(valorDigitado);
//exibir resultado na tela \/
//<span id="resultado"></span>
document.getElementById("resultado").innerText = `resultado: ${numeroConvertido}`;

function somarNumeros() {
    document.getElementById("resultado").value = `resultado: ${numeroConvertido}`;
}

//<button onclick="somarNumeros()">Somar</button>