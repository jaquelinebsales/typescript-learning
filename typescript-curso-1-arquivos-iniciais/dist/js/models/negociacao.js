console.log("✅ negociacao.js está carregando!");


export class Negociacao{
    #data;
    #quantidade;
    #valor;
    /* aqui sao instâncias da classe que persistem com a classe, além de ser acessível em todas as funções*/

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }
}