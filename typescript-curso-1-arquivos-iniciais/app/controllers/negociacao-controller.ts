import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js"; 
import { DiaDaSemana } from "../enuns/dias-da-semana.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";
import { inspect } from "../decorator/inspect.js";
import { NegociacoesService } from "../services/negociacoes-service.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private negociacaoMensagemView : MensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacoesService()

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;  
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        
        // Verificação APÓS a inicialização
        if (!this.inputData || !this.inputQuantidade || !this.inputValor) {
            console.log("As inputs não estão sendo corretamente implementadas.");
            console.log(this.inputData, this.inputQuantidade, this.inputValor);
        }
    }

    
    private eDiaUtil(data:Date):boolean{
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    
    @logarTempoDeExecucao(true)
    @inspect()
    adiciona(): void{
        console.log("O método adiciona em negociacao-controller esta sendo chamado");
        const negociacao: Negociacao = this.criaNegociacao();//Aqui está o problema!!!!

        if (!this.eDiaUtil(negociacao.data)){
            this.negociacaoMensagemView.update("Apenas negociações em dias úteis são aceitas.");
            return ;
        }
        
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }
    
    private criaNegociacao(): Negociacao{
        const exp = /-/g;//encontra todos os caractres hífen(-)
        const date = new Date(this.inputData.value.replace(exp, ','));
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

    importarDados():void{
        this.negociacaoService.obterNegociacoesDoDia()
        .then(negociacoesDeHoje =>{
            for(let negociacao of negociacoesDeHoje){
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        })
    }


}