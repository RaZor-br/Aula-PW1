// Capturando botões e áreas de aviso
const btnSortear = document.getElementById("btnSortear");
const mensagemStatus = document.getElementById("mensagemStatus");
const cartaoPersonagem = document.getElementById("cartaoPersonagem");

// Capturando elementos de exibição de dados
const fotoPersonagem = document.getElementById("fotoPersonagem");
const nomePersonagem = document.getElementById("nomePersonagem");
const badgeStatus = document.getElementById("badgeStatus");
const badgeEspecie = document.getElementById("badgeEspecie");
const origemPersonagem = document.getElementById("origemPersonagem");

async function sortearPersonagem() {
    // 1. Gerando um número inteiro aleatório entre 1 e 50
    const idAleatorio = Math.floor(Math.random() * 50) + 1;

    // 2. Montando a URL dinânmica da API com o ID sorteado
    const urlApi = `https://rickandmortyapi.com/api/character/${idAleatorio}`;

    // 3. Informando o usuário sobre o carregamento e desabilitando o botão
    mensagemStatus.textContent = "Buscando dados no servidor...";
    btnSortear.disabled = true;

    try {
        // 4. Fazendo a requisição HTTP e aguardando a resposta do servidor
        const resposta = await fetch(urlApi);

        // 5. Verificando se o servidor respondeu com sucesso
        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API");
        }

        // 6. Convertendo o corpo da resposta em um objeto Javascript
        const dados = await resposta.json();

        // 7. Atualizando os elementos visual na página
        preencherCardNaTela(dados);

        // 8. Finalizando o estado de carregamento com sucesso
        mensagemStatus.textContent = `Personagem #${dados.id} carregado com sucesso.`;

        console.log(dados);
    } catch (erro) {
        // Caso a internet falhe ou o endereço esteja indisponível
        mensagemStatus.textContent = "Falha ao carregar os dados. Verifique sua conexão.";
        console.log(erro);
    } finally {
       // Reabilitando o botão para permitir novos sorteios
       btnSortear.disabled = false;
    }
}

function preencherCardNaTela(dados) {
    //tornando o cartão invisivel
    cartaoPersonagem.classList.remove("oculta");

    //inserindo a imagem e o texto alternativo de acessibilidade
    fotoPersonagem.src = dados.image;
    fotoPersonagem.alt = `Foto de ${dados.name}`;

    //inserindo o nome e a origem do personagem
    nomePersonagem.textContent = dados.name;
    origemPersonagem.textContent = dados.origin.name;

    //preenchedo a especie
    badgeEspecie.textContent = dados.species;

    //ajustando o badge de status com a cores dinamicas
    badgeStatus.textContent = dados.status;
    badgeStatus.className = "badge";//limpa classes anteriores

    if (dados.status === "Alive") {
        badgeStatus.classList.add("badge-vivo");
        badgeStatus.textContent = "Vivo";
    } else if (dados.status === "Dead") {
        badgeStatus.classList.add("badge-morto");
        badgeStatus.textContent = "Morto";
    } else {
        badgeStatus.classList.add("badge-desconhecido");
        badgeStatus.textContent = "Desconhecido";
    }

}