export class Produto {
    constructor(nome, categoria, dataEntrada, quantidade) {
        this._nome = nome;
        this._categoria = categoria;
        this._dataEntrada = dataEntrada;
        this._quantidade = quantidade;
    }
    get nome() {
        return this._nome;
    }
    get categoria() {
        return this._categoria;
    }
    get dataEntrada() {
        return this._dataEntrada;
    }
    get quantidade() {
        return this._quantidade;
    }
    static criaProduto(nomeString, categoriaString, dataEntradaString, quantidadeString) {
        const nomeProd = nomeString;
        const categProd = categoriaString;
        const dataEntrada = new Date(dataEntradaString.replace(/-/g, ','));
        const qtd = parseInt(quantidadeString);
        return new Produto(nomeProd, categProd, dataEntrada, qtd);
    }
}
