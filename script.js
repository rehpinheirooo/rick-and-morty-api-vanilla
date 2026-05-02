// 1. Onde vamos colocar os cards?
const container = document.getElementById('container-cards');

// 2. Função para buscar os dados da API
function buscarPersonagens() {
    const url = 'https://rickandmortyapi.com/api/character';

    fetch(url)
        .then(resposta => resposta.json()) // Transforma a resposta em "linguagem de computador" (JSON)
        .then(dados => {
            exibirCards(dados.results); // Manda os personagens para a função que cria os cards
        })
        .catch(erro => console.error('Erro ao buscar dados:', erro));
}

// 3. Função que cria os cards na tela
function exibirCards(personagens) {
    personagens.forEach(personagem => {
        // Criar o elemento do card
        const card = document.createElement('div');
        card.classList.add('card');

        // Criar o conteúdo interno do card
        card.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.name}">
            <div class="card-info">
                <h2>${personagem.name}</h2>
                <p class="status">Status: ${personagem.status}</p>
                <p>Espécie: ${personagem.species}</p>
            </div>
        `;

        // Colocar o card dentro do container no HTML
        container.appendChild(card);
    });
}

// Iniciar a busca quando a página carregar
buscarPersonagens();