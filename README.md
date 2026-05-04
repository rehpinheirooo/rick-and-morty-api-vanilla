# 📑 Relatório Técnico: Galeria Rick and Morty API

Este documento detalha o desenvolvimento técnico e a fundamentação teórica da aplicação "Galeria Rick and Morty", desenvolvida como projeto acadêmico em 2026.

---

## 🔗 Links Oficiais
🎥 **Assista à Apresentação (Pitch):** [https://youtu.be/2GaIYW6GuPw](https://youtu.be/2GaIYW6GuPw)
🌐 **Acesse o Site (Live Demo):** [https://rehpinheirooo.github.io/rick-and-morty-api-vanilla/](https://rehpinheirooo.github.io/rick-and-morty-api-vanilla/)

---

## 1. O que é uma API e como funciona?
Uma **API (Application Programming Interface)** funciona como um intermediário ou mensageiro entre diferentes sistemas. No contexto deste projeto:
* **Pedido:** O site (cliente) envia uma requisição para o servidor da "Rick and Morty API".
* **Processamento:** O servidor interpreta o pedido e localiza os dados.
* **Resposta:** O servidor devolve os dados em formato **JSON**, permitindo que a interface mostre informações atualizadas em tempo real sem a necessidade de entrada manual de dados.

## 2. Conceito de DOM Manipulation
O **DOM (Document Object Model)** é a representação em árvore da estrutura da página HTML. A "Manipulação do DOM" é a técnica onde o JavaScript altera essa estrutura dinamicamente após o carregamento inicial.
* **Aplicação Prática:** Os cards dos personagens não existem previamente no código HTML; eles são fabricados "ao vivo" pelo JavaScript conforme a resposta da API é recebida.

## 3. Funções Core Utilizadas
A lógica do projeto baseia-se em quatro pilares do JavaScript moderno:
* `fetch()`: Responsável por realizar a chamada assíncrona ao endpoint da API.
* `.then()`: Estrutura de controle que lida com a *Promise*, executando a lógica após a resposta ser recebida.
* `createElement()`: Método utilizado para gerar novos elementos HTML (como as divs dos cards) via código.
* `appendChild()`: Função que insere os elementos criados dentro da hierarquia da página para exibição ao usuário.

## 4. Motivo da Escolha da API
A escolha pela **Rick and Morty API** deu-se por três fatores principais:
1. **Relevância:** Conexão direta com o tema de cultura pop e desenhos animados.
2. **Documentação:** Possui uma documentação robusta e organizada, ideal para práticas acadêmicas.
3. **Qualidade Visual:** Oferece imagens de alta resolução, o que valoriza o design final dos cards.

## 5. Regras de Acesso e Estrutura de Dados
Para garantir a transparência do consumo, seguem as diretrizes técnicas:
* **URL Base:** `https://rickandmortyapi.com/api/character`
* **Autenticação:** API pública e gratuita (Sem necessidade de Token/Key).
* **Formato de Resposta:** Objeto JSON contendo um *array* de resultados, onde cada entrada possui propriedades como `name`, `status`, `species` e `image`.

---
**Desenvolvido por:** Renato Pinheiro Ferreira
**Ano:** 2026 🎓
