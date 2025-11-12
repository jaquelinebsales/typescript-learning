import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
    private negociacoes:/*Array<Negociacao>*/Negociacao[] = [];

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

    public ehIgual(negociacoes :Negociacoes):boolean{
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}