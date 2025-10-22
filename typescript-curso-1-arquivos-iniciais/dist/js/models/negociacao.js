console.log("✅ negociacao.js está carregando!");
export class Negociacao {
    /*Só podem ser modficadas dentro dessa classe*/
    /* aqui sao instâncias da classe que persistem com a classe, além de ser acessível em todas as funções*/
    constructor(
    /*private _data: Date, /* é public por padrão
    private _quantidade: number,
    private _valor: number*/
    _data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    /*Apenas usando a funcao get é possível acessar esses atributos privados da classe*/
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
