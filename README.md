# 🌌 Galeria Rick and Morty - Consumo de API em Tempo Real

Este projeto foi desenvolvido como parte de um desafio acadêmico para colocar em prática conceitos de front-end, integração com APIs externas e manipulação dinâmica do DOM. 

A aplicação consome dados da [Rick and Morty API](https://rickandmortyapi.com/) e gera cards dinâmicos para cada personagem retornado.

---

## 🔗 Acesse o Projeto
👉 **[Clique aqui para ver o site funcionando (Live Demo)](https://rehpinheirooo.github.io/rick-and-morty-api-vanilla/)**

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído "do zero", sem o uso de frameworks, para demonstrar o domínio das tecnologias base da web:

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização personalizada com foco em layout flexível (Flexbox) e estética moderna.
* **JavaScript (ES6+):** Lógica de consumo da API utilizando `fetch`, tratamento de promessas e criação dinâmica de elementos HTML.

## 🛠️ Funcionalidades

- [x] Conexão com API externa via requisições assíncronas.
- [x] Criação automática de cards através do JavaScript (DOM Manipulation).
- [x] Layout responsivo que se adapta a diferentes telas.
- [x] Efeitos de interação (hover) nos cards para melhor experiência do usuário.

## 📖 Como o projeto funciona?

1. O script realiza um `fetch` para o endpoint da API.
2. A resposta é convertida para o formato **JSON**.
3. Um laço de repetição percorre os dados e utiliza o comando `document.createElement` para fabricar as estruturas de cada card.
4. Os cards são inseridos na tela através do método `appendChild`.

## 📁 Como rodar o projeto localmente

1. Clone este repositório:
```bash
git clone https://github.com/rehpinheirooo/rick-and-morty-api-vanilla.git

2. Abra a pasta do projeto.

3. Execute o arquivo index.html em seu navegador de preferência.

Desenvolvido por Renato Pinheiro Ferreira - 2026 🎓
