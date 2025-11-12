import { inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execucao.js";

export abstract class View<T>{
    protected element: HTMLElement;

    constructor(seletor:string){
        const element = document.querySelector(seletor);
        if(element){
            this.element = element as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        
    }

    protected abstract template(model:T):string;

    @inspect()
    @logarTempoDeExecucao(true)
    update(model:T):void{
        let template = this.template(model);

        this.element.innerHTML = template;
    }
}