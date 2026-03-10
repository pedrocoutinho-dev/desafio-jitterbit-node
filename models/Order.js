// Importamos o Mongoose (nosso Hibernate/Entity Framework do Node.js)
const mongoose = require('mongoose');

// O Schema é a "planta" da nossa tabela (que no MongoDB chamamos de Collection).
// Aqui definimos os nomes das colunas EM INGLÊS, como o teste pede para o banco.
const orderSchema = new mongoose.Schema({
    orderId: { type: Number, required: true },
    value: { type: Number, required: true },
    creationDate: { type: String, required: true },
    
    // Isto é equivalente a um List<Item> no Java. Um Array de objetos.
    items: [{
        productId: { type: Number, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }]
});

// Exportamos a "Classe" para o resto do projeto poder usar (equivalente a public class)
module.exports = mongoose.model('Order', orderSchema);