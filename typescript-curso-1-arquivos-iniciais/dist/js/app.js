console.log(" ✅app.js está carregando!");
import { NegociacaoController } from "./controllers/negociacao-controller.js";
const constroller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("O submit do form ta enviando");
        constroller.adiciona();
    });
    console.log("O form tá sendo reconhecido pelo typescript");
    console.log("Form:", form);
}
else {
    throw Error('Não foi possível iniciaizar a aplicação. Verifique se o form existe.');
}
const botaoImporta = document.querySelector('#botao_importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        constroller.importarDados();
    });
}
else {
    throw Error('Botão importa não foi encontrado');
}
