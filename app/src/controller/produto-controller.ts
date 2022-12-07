import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Produto } from "../models/produto.js"
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produtos-view.js";

export class ProdutoController {
    private inputNome: HTMLInputElement;
    private inputCategoria: HTMLSelectElement;
    private inputDataEntrada: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private produtos = new Produtos();
    private produtosView = new ProdutosView('#produtosView');
    private mensagemView = new MensagemView('#mensagemView');    

    constructor() {
        this.inputNome = document.querySelector('#nomeProduto') as HTMLInputElement;        
        this.inputCategoria = document.querySelector('#categoriaProduto') as HTMLSelectElement;
        this.inputDataEntrada = document.querySelector('#dataEntrada') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.produtosView.update(this.produtos);
    }

    public cadastrarProduto(): void {
        const produto = Produto.criaProduto(
            this.inputNome.value,
            this.inputCategoria.value,
            this.inputDataEntrada.value,
            this.inputQuantidade.value
        );

        if (this.validaDiaUtil(produto.dataEntrada)) {
            this.produtos.adicionarProduto(produto);
            this.limparFormulario();
            this.atualizaView();
        } else {
            this.mensagemView.update('SÓ É PERMITIDO DATA DE ENTRADA COM DIA ÚTIL');
        }        
    }

    private validaDiaUtil(data: Date): boolean {
        return data.getDay() > DiaDaSemana.DOMINGO  && data.getDay() < DiaDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputNome.value = '';
        this.inputCategoria.value = '';
        this.inputDataEntrada.value = '';
        this.inputQuantidade.value = '';
    }

    private atualizaView(): void {
        this.produtosView.update(this.produtos);
        this.mensagemView.update('PRODUTO CADASTRADO COM SUCESSO.');
    }
}