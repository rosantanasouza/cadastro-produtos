import { Produtos } from "../models/produtos.js";
import { View } from "./view.js";

export class ProdutosView extends View<Produtos> {

    protected template(listaDeProdutos: Produtos): string {
        return `
        <table class="table table-dark table-hover table-bordered text-center">
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>CATEGORIA</th>
                    <th>DATA DE ENTRADA</th>
                    <th>QUANTIDADE</th>
                </tr>
            </thead>
            <tbody>
                ${listaDeProdutos.lista().map(produto => {
                    return`
                        <tr>
                            <td>${produto.nome}</td>
                            <td>${produto.categoria}</td>
                            <td>${this.formatarData(new Date(produto.dataEntrada))}</td>
                            <td>${produto.quantidade}</td>
                        </tr>
                    `;
                })}                
            </tbody>
        </table>        
        `;
    } 
    
    private formatarData(data: Date): string {
        return new Intl.DateTimeFormat().format(data)        
    }    
}