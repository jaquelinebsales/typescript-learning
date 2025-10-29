import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js"; 
import { DiaDaSemana } from "../enuns/dias-da-semana.js";
export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView', true);
    private negociacaoMensagemView : MensagemView = new MensagemView('#mensagemView');
     /*private view : View = new View('#negociacoesView','#mensagemView');*/

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        
    }

    adiciona(): void{
        const negociacao: Negociacao = this.criaNegociacao();

        if (!this.eDiaUtil(negociacao.data)){
            this.negociacaoMensagemView.update("Apenas negociações em dias úteis são aceitas.");
            return ;
        }
        
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    
    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        

        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.negociacaoMensagemView.update("Negociação adicionada com sucesso!");

    }

    private eDiaUtil(data:Date):boolean{
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
}