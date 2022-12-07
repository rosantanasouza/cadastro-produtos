import { ProdutoController } from "./controller/produto-controller.js";
const formulario = document.querySelector('#formulario');
const produtoController = new ProdutoController();
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    produtoController.cadastrarProduto();
});
