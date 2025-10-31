
export abstract class View<T>{
    protected element: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor:string, escapar?:boolean){
        const element = document.querySelector(seletor);
        if(element){
            this.element = element as HTMLElement;
        }else{
            throw Error(`Seletor ${seletor} não existe no DOM`);
        }
        
        if(escapar){
            this.escapar = escapar;
        }
    }

    protected abstract template(model:T):string;

    update(model:T):void{
        const t1 = performance.now();
        let template = this.template(model);
        if(this.escapar){
            template = template.replace(/script[\s\S]*?<\/script>/,'');
        }
        this.element.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2-t1)/1000}`);
    }
}