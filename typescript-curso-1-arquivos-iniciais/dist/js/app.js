console.log("✅ app.js está carregando!");


import { Negociacao } from "./models/negociacao.js"

const minhaNegociacao = new Negociacao("29/10/2007", 20, 1500.18)

console.log(minhaNegociacao)
Negociacao.quantidade = 10000;
console.log(minhaNegociacao);