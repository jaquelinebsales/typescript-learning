import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: /*Array<Negociacao>*/Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): /*ReadonlyArray<Negociacao>*/ readonly Negociacao[]{
        return this.negociacoes;
    }

}

