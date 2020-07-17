export function LogarTempoDeExecucao(emSegundos: boolean = false){

    return function(target: any, propretyKey: string, descriptor: PropertyDescriptor){

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            let unidade = 'ms';
            let divsor = 1;
            if(emSegundos){
                unidade = 's';
                divsor = 1000;
            }
            
            console.log('---------------');
            console.log(`parâmetros passados para o método ${propretyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do método ${propretyKey} é${JSON.stringify(retorno)}`);
            console.log(`O método ${propretyKey} demorou ${(t2 -t1)/divsor}${unidade}`);


            
            return retorno;
        } 
    }
} 