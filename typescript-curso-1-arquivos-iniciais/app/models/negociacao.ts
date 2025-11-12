import { Modelo } from "../interfaces/modelo.js";


export class Negociacao implements Modelo<Negociacao>{
    /*Só podem ser modficadas dentro dessa classe*/
    /* aqui sao instâncias da classe que persistem com a classe, além de ser acessível em todas as funções*/

    constructor(
        /*private _data: Date, /* é public por padrão
        private _quantidade: number,
        private _valor: number*/

        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ){
        
    }
    /*Apenas usando a funcao get é possível acessar esses atributos privados da classe*/

    get data():Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(){
        return this.quantidade * this.valor;
    }

    public paraTexto():string{
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}`;
    }
    
    public ehIgual(negociacao: Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }
}