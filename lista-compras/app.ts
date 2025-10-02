/*Contrato para dizer como a estrutura de um objeto Item deve ser*/

interface Item {
    id: string;
    nome: string;
}

const formularioItem = document.getElementById('formularioItem') as HTMLFormElement
const listaItens = document.getElementById('listaItens') as HTMLUListElement
const inputItem = document.getElementById('item') as HTMLInputElement

const carregarItens = (): Item[] => {
    const itens = localStorage.getItem('itens');
    return itens ? JSON.parse(itens) : [];
}