
export abstract class View<T>{
    protected element: HTMLElement;

    constructor(seletor:string){
        this.element = document.querySelector(seletor);

    }

    /*template(modelNegociacao: Negociacoes, modelAlert:string):string[]{
        const elementsArray:string[] = [];
        elementsArray.push(`<p class="alert alert-info">${modelAlert}</p>`);
        elementsArray.push(`
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${modelNegociacao.lista().map(negociacao => {
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `);

        return elementsArray;

    }*/

    protected abstract template(model:T):string;

    update(model:T):void{
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}