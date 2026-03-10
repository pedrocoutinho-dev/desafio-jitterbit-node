const express = require('express');
const orderController = require('./controllers/OrderController');

const app = express();

// Configuração para aceitar JSON
app.use(express.json());

console.log("⚠️ ATENÇÃO: API rodando em Modo de Persistência em Memória");

// Rotas (Endpoints)
app.post('/order', orderController.createOrder);
app.get('/order/:id', orderController.getOrder);

// Liga o servidor
app.listen(3000, () => {
    console.log("🚀 API ONLINE na porta 3000! Sem erros de conexão.");
});