console.log(" ✅app.js está carregando!");

import { Negociacao } from "./models/negociacao.js"
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const minhaNegociacao = new Negociacao(new Date(), 20, 1500.18)
console.log(minhaNegociacao)

const constroller = new NegociacaoController();

const form = document.querySelector('.form');
form.addEventListener('submit', (event: Event) =>{
    event.preventDefault(); /*evitar o refresh da página*/
    constroller.adiciona();
});