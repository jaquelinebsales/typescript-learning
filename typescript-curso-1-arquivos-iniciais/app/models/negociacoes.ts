import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel{
    private negociacoes: /*Array<Negociacao>*/Negociacao[] = [];

    constructor(){
        
    }

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    lista(): /*ReadonlyArray<Negociacao>*/ readonly Negociacao[]{
        return this.negociacoes;
    }

    public paraTexto():string{
        return JSON.stringify(this.negociacoes, null, 2)
    }

}

