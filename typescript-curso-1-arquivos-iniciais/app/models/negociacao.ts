console.log("✅ negociacao.js está carregando!");


export class Negociacao{
    /*Só podem ser modficadas dentro dessa classe*/
    private _data: Date; /* é public por padrão*/
    private _quantidade: number;
    private _valor: number;
    /* aqui sao instâncias da classe que persistem com a classe, além de ser acessível em todas as funções*/

    constructor(data:Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    /*Apenas usando a funcao get é possível acessar esses atributos privados da classe*/
    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }
}