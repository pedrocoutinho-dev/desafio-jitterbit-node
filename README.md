# Desafio Técnico - API de Mapeamento de Pedidos (Jitterbit) 

Este projeto é uma API desenvolvida em **Node.js** com **Express**, criada como parte de um desafio técnico para a Jitterbit. O objetivo principal é receber dados de pedidos em português e realizar o mapeamento (tradução) para um formato padronizado em inglês.

---

## Sobre o Desenvolvedor
Vindo de uma base sólida em linguagens tipadas como **Java/C#**, este projeto marca minha primeira experiência prática construindo uma API REST com o ecossistema JavaScript/Node.js. Apliquei conceitos de **Clean Code** e a arquitetura **MVC** para garantir uma estrutura organizada e de fácil manutenção.

---

## Tecnologias Utilizadas
* **Node.js**: Ambiente de execução.
* **Express**: Framework para criação das rotas e servidor.
* **JavaScript (ES6+)**: Lógica de mapeamento e manipulação de dados.
* **Persistência em Memória**: Utilizada para garantir a portabilidade e execução imediata do teste, contornando bloqueios de rede local com bancos de dados externos.

---

## Estrutura do Projeto
A arquitetura foi separada em camadas para seguir as boas práticas de desenvolvimento:
- `index.js`: Ponto de entrada (Main) e configuração do servidor.
- `controllers/`: Camada de lógica de negócio e processamento do mapeamento.
- `models/`: Definição da estrutura de dados (Schema).

---

## Documentação da API (Endpoints)

### 1. Criar e Traduzir Pedido (POST)
**URL:** `http://localhost:3000/order`  
**Descrição:** Recebe o pedido em português, traduz os campos para inglês e salva em memória.

**Exemplo de Payload (Corpo):**
```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11Z",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}


