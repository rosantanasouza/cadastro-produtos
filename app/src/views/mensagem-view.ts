import { View } from "./view.js";

export class MensagemView extends View<string> {
    
    protected template(mensagem: string): string {
        return `
            <p class="alert alert-success text-center" role="alert">${mensagem}</p>
        `;
    }
    
}