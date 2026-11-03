function verificarIdade() {
    const nome = document.getElementById("campoNome").value;
    const idade = parseInt(document.getElementById("campoIdade").value);
    const resultado = document.getElementById("mensagemResultado");

    if (nome === "" || isNaN(idade) || idade < 0) {
        resultado.innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const anosRestantes = 18 - idade;

    console.log("Verificando:", nome, idade);

    if (idade < 12) {
        resultado.innerText = `Acesso negado para ${nome}: você tem ${idade} anos e ainda não possui a idade mínima permitida. Faltam ${anosRestantes} ano(s) para atingir a maioridade. (Criança)`;
        console.log("Categoria: Criança");
    } else if (idade < 18) {
        resultado.innerText = `Acesso negado para ${nome}: você tem ${idade} anos e ainda não possui a idade mínima permitida. Faltam ${anosRestantes} ano(s) para atingir a maioridade. (Adolescente)`;
        console.log("Categoria: Adolescente");
    } else if (idade < 60) {
        resultado.innerText = `Olá, ${nome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso. (Adulto)`;
        console.log("Categoria: Adulto");
    } else {
        resultado.innerText = `Olá, ${nome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso. (Terceira Idade - Atendimento preferencial)`;
        console.log("Categoria: Terceira Idade");
    }
}   