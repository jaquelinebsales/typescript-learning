import { Negociacoes } from "../models/negociacoes"; 

export class View{
    private elementNegociacoes: HTMLElement;
    private elementMensagem: HTMLElement;
    

    constructor(seletorNegociacoes:string, seletorMensagem:string){
        this.elementNegociacoes = document.querySelector(seletorNegociacoes);
        this.elementMensagem = document.querySelector(seletorMensagem);

    }

    template(modelNegociacao: Negociacoes, modelAlert:string):string[]{
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

    }

    update(modelNegociacao: Negociacoes, modelAlert: string):void{
        const template = this.template(modelNegociacao, modelAlert);
        this.elementNegociacoes.innerHTML = template[1];
        this.elementMensagem.innerHTML = template[0];
    }
}