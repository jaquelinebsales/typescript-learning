var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiaDaSemana } from "../enuns/dias-da-semana.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";
import { inspect } from "../decorator/inspect.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.negociacaoMensagemView = new MensagemView('#mensagemView');
        this.negociacaoService = new NegociacoesService();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        if (!this.inputData || !this.inputQuantidade || !this.inputValor) {
            console.log("As inputs não estão sendo corretamente implementadas.");
            console.log(this.inputData, this.inputQuantidade, this.inputValor);
        }
    }
    eDiaUtil(data) {
        return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO;
    }
    adiciona() {
        console.log("O método adiciona em negociacao-controller esta sendo chamado");
        const negociacao = this.criaNegociacao();
        if (!this.eDiaUtil(negociacao.data)) {
            this.negociacaoMensagemView.update("Apenas negociações em dias úteis são aceitas.");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.negociacaoMensagemView.update("Negociação adicionada com sucesso!");
    }
    importarDados() {
        this.negociacaoService.obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacoesDeHoje => {
                return !this.negociacoes.lista().some(negociacao => negociacao.ehIgual(negociacoesDeHoje));
            });
        })
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
}
__decorate([
    logarTempoDeExecucao(true),
    inspect()
], NegociacaoController.prototype, "adiciona", null);
