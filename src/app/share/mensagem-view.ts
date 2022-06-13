export class MensagemView {

    protected element: HTMLElement;

    constructor(seletor: string) {
        // @ts-ignore
        this.element = document.querySelector(seletor)
        console.log( this.element)
    }


    protected template(model: string, classe: string): string {
        return `
            <p class="alert ${classe}">${model}</p>
        `
    }

    public update(model: string, classe: string): void {
        console.log(model)
        console.log(classe)
        const template = this.template(model, classe);
        console.log(template)
        this.element.innerHTML = template;
    }

}