🌌 Galeria Rick and Morty - Consumo de API em Tempo Real
Este projeto foi desenvolvido como parte de um desafio acadêmico para colocar em prática conceitos de front-end, integração com APIs externas e manipulação dinâmica do DOM.

A aplicação consome dados da Rick and Morty API e gera cards dinâmicos para cada personagem retornado.

🔗 Acesse o Projeto
👉 Clique aqui para ver o site funcionando (Live Demo)

🚀 Tecnologias Utilizadas
O projeto foi construído "do zero", sem o uso de frameworks, para demonstrar o domínio das tecnologias base da web:

HTML5: Estruturação semântica da página.

CSS3: Estilização personalizada com foco em layout flexível (Flexbox) e estética moderna.

JavaScript (ES6+): Lógica de consumo da API utilizando fetch, tratamento de promessas e criação dinâmica de elementos HTML.

🛠️ Funcionalidades
[x] Conexão com API externa via requisições assíncronas.

[x] Criação automática de cards através do JavaScript (DOM Manipulation).

[x] Layout responsivo que se adapta a diferentes telas.

[x] Efeitos de interação (hover) nos cards para melhor experiência do usuário.

📖 Como o projeto funciona?
O script realiza um fetch para o endpoint da API.

A resposta é convertida para o formato JSON.

Um laço de repetição percorre os dados e utiliza o comando document.createElement para fabricar as estruturas de cada card.

Os cards são inseridos na tela através do método appendChild.

📁 Como rodar o projeto localmente
Clone este repositório:
git clone https://github.com/rehpinheirooo/rick-and-morty-api-vanilla.git

Abra a pasta do projeto.

Execute o arquivo index.html em seu navegador de preferência.

Desenvolvido por Renato Pinheiro Ferreira - 2026 🎓
