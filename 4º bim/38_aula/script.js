//lista inicial de estudantes armazenada em um array

const listaDeEstudantes = [
    "Beatriz Oliveira",
    "Carlos Eduardo",
    "Daniel Santos",
    "Gabriel Ferraira",
    "Helena Rodrigues",
    "Lucas Vinicius"
];

//obtendo as referencias dos elementos HTML pelo identificador (id)

const elementoLista = document.getElementById("listaEstudantes");
const elementoContador = document.getElementById("contadorNomes");

function exibirListaAutomaticamente() {
    //limpa o conteudo atual das listas para evitar duplicações indesejadas
    elementoLista.innerHTML = "";

    //percorre cada posição do Array usando o laço for

    for(let i = 0; i < listaDeEstudantes.length; i++) {
        //cria um elemento <li> novo em memoria
        const itemLi = document.createElement("li"); //<li></li>
        itemLi.className = "item-nome"; //<li class="item-nome"></li>

        //define o conteudo do item com o nome e sua respectiva ordem visual
        itemLi.innerHTML = `
            <span>${listaDeEstudantes[i]}</span>
            <span class="posicao-tag">#${i+1}</span>
        `

        //anexa o item criado dentro da tag <ul> da pagina

        elementoLista.appendChild(itemLi); //<ul><li>Beatriz...</li></ul>

    }

    //atualiza a barra de status com o total de registros lidos pelo laço for
    elementoContador.innerText = `Total exibido: ${listaDeEstudantes.length} estudantes cadastrados`;
    elementoContador.style.color = "#16a34a";

    console.log(`Lista exibida com sucesso: ${listaDeEstudantes.length} itens processados.`);

}

function limparLista() {
    elementoLista.innerHTML = "";
    elementoContador.innerText = "Lista limpa pelo usuário. Nenhum nome na tela.";
    elementoContador.style.color = "#475569";
    console.log("tela limpa");
}

exibirListaAutomaticamente();