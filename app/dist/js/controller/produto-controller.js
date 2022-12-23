var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { information } from "../decorators/information.js";
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
            this.mensagemView.update('SÓ É PERMITIDO DATA DE ENTRADA EM DIAS ÚTEIS');
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
__decorate([
    domInjector('#nomeProduto')
], ProdutoController.prototype, "inputNome", void 0);
__decorate([
    domInjector('#categoriaProduto')
], ProdutoController.prototype, "inputCategoria", void 0);
__decorate([
    domInjector('#dataEntrada')
], ProdutoController.prototype, "inputDataEntrada", void 0);
__decorate([
    domInjector('#quantidade')
], ProdutoController.prototype, "inputQuantidade", void 0);
__decorate([
    information
], ProdutoController.prototype, "cadastrarProduto", null);
