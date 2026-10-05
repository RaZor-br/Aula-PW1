function somar() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);
  const total = num1 + num2;

  document.getElementById("resultado").innerText = `total: ${total}`;
  console.log(`Cálculo efetuado: ${num1} + ${num2} = ${total}`);
}

function subtrair() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);
  const total = num1 - num2;

  document.getElementById("resultado").innerText = `total: ${total}`;
  console.log(`Cálculo efetuado: ${num1} - ${num2} = ${total}`);
}

function multiplicar() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);
  const total = num1 * num2;

  document.getElementById("resultado").innerText = `total: ${total}`;
  console.log(`Cálculo efetuado: ${num1} * ${num2} = ${total}`);
}

function dividir() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  const num1 = parseFloat(numero1);
  const num2 = parseFloat(numero2);
  const total = num1 / num2;

  document.getElementById("resultado").innerText = `total: ${total}`;
  console.log(`Cálculo efetuado: ${num1} / ${num2} = ${total}`);
}

function limpar() {
  const numero1 = document.getElementById("numero1").value;
  const numero2 = document.getElementById("numero2").value;

  document.getElementById("numero1").value = "";
  document.getElementById("numero2").value = "";
  document.getElementById("resultado").innerText = "0";
  console.log("Campos da calculadora reiniciados.")
}