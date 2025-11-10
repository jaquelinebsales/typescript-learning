export function escape(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){//O ...args: tranforma todos os argumentos apssaos apraz um funcao em um array do tipo explícito depoiss do dois pontos
        let retorno = metodoOriginal.apply(this, args);
        if(typeof(retorno) === 'string'){
            /*console.log(`@escape em acao na classe ${this.constructor.name} para o método ${propertyKey}.`);*/
            retorno = retorno.replace(/script[\s\S]*?<\/script>/,'');
        }

        return retorno;
    }

    return descriptor;
}