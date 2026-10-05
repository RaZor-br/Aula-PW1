function calcularDesconto() {
  let preco = parseFloat(document.getElementById("precoOriginal").value);
  let desconto = parseFloat(document.getElementById("valorDesconto").value);
  let valorFinal = preco - desconto;

  document.getElementById("resultadoFinal").innerText = "Valor a Pagar: R$ " + valorFinal.toFixed(2);
  console.log("Preço:", preco, "Desconto:", desconto, "Final:", valorFinal);
}