import { domInjector } from "../decorators/dom-injector.js";
import { information } from "../decorators/information.js";
import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Produto } from "../models/produto.js"
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produtos-view.js";

export class ProdutoController {
    
    @domInjector('#nomeProduto')
    private inputNome: HTMLInputElement;
    
    @domInjector('#categoriaProduto')
    private inputCategoria: HTMLSelectElement;
    
    @domInjector('#dataEntrada')
    private inputDataEntrada: HTMLInputElement;
    
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    
    private produtos = new Produtos();
    private produtosView = new ProdutosView('#produtosView');
    private mensagemView = new MensagemView('#mensagemView');    

    constructor() {
        this.produtosView.update(this.produtos);
    }
    
    @information
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
            this.mensagemView.update('SÓ É PERMITIDO DATA DE ENTRADA EM DIAS ÚTEIS');
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