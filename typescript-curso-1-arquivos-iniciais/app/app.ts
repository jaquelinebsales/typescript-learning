console.log(" ✅app.js está carregando!");

import { Negociacao } from "./models/negociacao.js"
import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { View } from "./views/view.js"; 


const constroller = new NegociacaoController();

const form = document.querySelector('.form');
if(form){
    form.addEventListener('submit', (event: Event) =>{
        event.preventDefault(); /*evitar o refresh da página*/
        console.log("O submit do form ta enviando");
        constroller.adiciona();
    });
    console.log("O form tá sendo reconhecido pelo typescript");
    console.log("Form:",form);
}else{
    throw Error('Não foi possível iniciaizar a aplicação. Verifique se o form existe.');
}


/*const negociacoesView = new View('#negociacoesView');*/
