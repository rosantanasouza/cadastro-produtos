import { View } from "./view.js";
export class MensagemView extends View {
    template(mensagem) {
        return `
            <p class="alert alert-success text-center" role="alert">${mensagem}</p>
        `;
    }
}
