System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogarTempoDeExecucao(emSegundos = false) {
        return function (target, propretyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let unidade = 'ms';
                let divsor = 1;
                if (emSegundos) {
                    unidade = 's';
                    divsor = 1000;
                }
                console.log('---------------');
                console.log(`parâmetros passados para o método ${propretyKey}: ${JSON.stringify(args)}`);
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`O retorno do método ${propretyKey} é${JSON.stringify(retorno)}`);
                console.log(`O método ${propretyKey} demorou ${(t2 - t1) / divsor}${unidade}`);
                return retorno;
            };
        };
    }
    exports_1("LogarTempoDeExecucao", LogarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
