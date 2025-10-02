/*Contrato para dizer como a estrutura de um objeto Item deve ser*/
//Selecionando elementos do DOM
const formularioItem = document.getElementById('formularioItem');
const listaItens = document.getElementById('listaItens');
const inputItem = document.getElementById('item');
/*->A função retornará um array de objtos do tipo Item[]
->É um armazenamento do navegador que guarda dados que não somem com o recarregamento da página.
-> o setItem é um nome padrão do JavaScript para definir/salvar dados.
-> salva o novo JSON, caso ocorra alguma mudanca (deletar, adicioanr, editar).*/
const salvarItens = (itens) => {
    localStorage.setItem('itens', JSON.stringify(itens));
};
// a declaracao dupla da cosnt itens não causa errro pois ocorre em escopos diferentes
const carregarItens = () => {
    const itens = localStorage.getItem('itens');
    return itens ? JSON.parse(itens) : [];
};
//Adicionadno um novo item
/*->new Date().toISOString(): cria um novo objeto do tipo data e formata para string.*/
const adicionarItem = (nome) => {
    const itens = carregarItens();
    const novoItem = {
        id: new Date().toISOString(),
        nome: nome
    };
    itens.push(novoItem);
    salvarItens(itens);
};
//Removendo um item pelo id
const removerItem = (id) => {
    const itens = carregarItens();
    const itensAtualizados = itens.filter(item => item.id !== id);
    salvarItens(itensAtualizados);
};

//Editando um item pelo id
const editarItem = (id, novoNome) => {
    const itens = carregarItens();
    const item = itens.find(item => item.id === id);
    if (item) {
        item.nome = novoNome;
        salvarItens(itens);
    }
};
//Renderizando a lista de itens
const renderizarItens = () => {
    const itens = carregarItens();
    listaItens.innerHTML = '';
    itens.forEach(item => {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button')
        const trash = document.createElement('i')

        trash.className = 'bi bi-trash'

        listItem.className = 'list-group-item';
        listItem.textContent = item.nome;

        deleteButton.className = 'list-group-item'

        deleteButton.appendChild(trash);

        listaItens.appendChild(listItem);
        listaItens.appendChild(deleteButton);

        listItem.addEventListener('dblclick', () => {
            const novoNome = prompt('Editar item: ', item.nome);
            if (novoNome !== null) {
                editarItem(item.id, novoNome);
            }
            renderizarItens();
        });

        deleteButton.addEventListener('click', () =>{
            const deleteConfirm = confirm(`Tem certeza que deseja deletar o item ${item.nome}?`);

            if(deleteConfirm){
                removerItem(item.id);
                renderizarItens();
            } else {
                alert("Delete cancelado");
            }

        })
    });
};
//Inicializando a aplicação
formularioItem.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = inputItem.value.trim();
    if (nome) {
        adicionarItem(nome);
        inputItem.value = '';
        renderizarItens();
    }
});
renderizarItens();
