namespace View {
    
    export class MensagemView extends View.View<string> {
    
        template(model: string){
    
            return `<p class="alert alert-info"> ${model}</p>`
        }
    }

}