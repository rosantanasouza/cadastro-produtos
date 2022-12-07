export class Produto {

    private _nome: string;
    private _categoria: string;
    private _dataEntrada: Date;
    private _quantidade: number;

    constructor(nome: string, categoria: string, dataEntrada: Date, quantidade: number) {
        this._nome = nome;
        this._categoria = categoria;
        this._dataEntrada = dataEntrada;
        this._quantidade = quantidade;
    }

    public get nome() {
        return this._nome;
    }

    public get categoria() {
        return this._categoria;
    }

    public get dataEntrada() {
        return this._dataEntrada;
    }

    public get quantidade() {
        return this._quantidade;
    }

    public static criaProduto (nomeString: string, categoriaString: string, dataEntradaString: string, quantidadeString: string): Produto {
        const nomeProd = nomeString;
        const categProd = categoriaString;
        const dataEntrada = new Date(dataEntradaString.replace(/-/g, ','));
        const qtd = parseInt(quantidadeString);

        return new Produto(nomeProd, categProd, dataEntrada, qtd);       
    }

}
