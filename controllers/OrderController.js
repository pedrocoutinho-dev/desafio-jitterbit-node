const bancoDeDadosEmMemoria = [];

const OrderController = {
    async createOrder(req, res) {
        try {
            const pedidoPtBr = req.body;
            const itensEmIngles = [];

            // O LOOP DE TRADUÇÃO
            for (let i = 0; i < pedidoPtBr.items.length; i++) {
                let itemAtual = pedidoPtBr.items[i]; 
                itensEmIngles.push({
                    productId: itemAtual.idItem,
                    quantity: itemAtual.quantidadeItem,
                    price: itemAtual.valorItem
                });
            }

            const pedidoTraduzido = {
                orderId: pedidoPtBr.numeroPedido, // Aqui ele vai salvar o texto v10089015...
                value: pedidoPtBr.valorTotal,
                creationDate: pedidoPtBr.dataCriacao,
                items: itensEmIngles
            };

            bancoDeDadosEmMemoria.push(pedidoTraduzido);
            return res.status(201).json(pedidoTraduzido);
        } catch (erro) {
            return res.status(500).json({ erro: "Erro no mapeamento" });
        }
    },

    async getOrder(req, res) {
        // MUDANÇA AQUI: Pegamos o ID exatamente como ele vem da URL (como String)
        const idBuscado = req.params.id; 
        
        // Buscamos na lista
        const pedido = bancoDeDadosEmMemoria.find(p => p.orderId === idBuscado);

        if (!pedido) {
            return res.status(404).json({ mensagem: "Pedido não encontrado na memória" });
        }

        return res.status(200).json(pedido);
    }
};

module.exports = OrderController;