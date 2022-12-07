export class Produtos {
    constructor() {
        this.listaDeProdutos = [];
    }
    adicionarProduto(produto) {
        this.listaDeProdutos.push(produto);
    }
    lista() {
        return this.listaDeProdutos;
    }
}
