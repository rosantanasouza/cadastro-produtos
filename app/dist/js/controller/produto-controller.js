import { DiaDaSemana } from "../enums/dias-da-semana.js";
import { Produto } from "../models/produto.js";
import { Produtos } from "../models/produtos.js";
import { MensagemView } from "../views/mensagem-view.js";
import { ProdutosView } from "../views/produtos-view.js";
export class ProdutoController {
    constructor() {
        this.produtos = new Produtos();
        this.produtosView = new ProdutosView('#produtosView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputNome = document.querySelector('#nomeProduto');
        this.inputCategoria = document.querySelector('#categoriaProduto');
        this.inputDataEntrada = document.querySelector('#dataEntrada');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.produtosView.update(this.produtos);
    }
    cadastrarProduto() {
        const produto = Produto.criaProduto(this.inputNome.value, this.inputCategoria.value, this.inputDataEntrada.value, this.inputQuantidade.value);
        if (this.validaDiaUtil(produto.dataEntrada)) {
            this.produtos.adicionarProduto(produto);
            this.limparFormulario();
            this.atualizaView();
        }
        else {
            this.mensagemView.update('SÓ É PERMITIDO DATA DE ENTRADA COM DIA ÚTIL');
        }
    }
    validaDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputNome.value = '';
        this.inputCategoria.value = '';
        this.inputDataEntrada.value = '';
        this.inputQuantidade.value = '';
    }
    atualizaView() {
        this.produtosView.update(this.produtos);
        this.mensagemView.update('PRODUTO CADASTRADO COM SUCESSO.');
    }
}
