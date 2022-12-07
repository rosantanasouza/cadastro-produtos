import { Produto } from "./produto.js";

export class Produtos {
    private listaDeProdutos: Produto[] = [];

    public adicionarProduto(produto: Produto): void {
        this.listaDeProdutos.push(produto);
    }

    public lista(): readonly Produto[] {
        return this.listaDeProdutos;
    }
}

