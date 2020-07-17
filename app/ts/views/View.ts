import { LogarTempoDeExecucao } from '../helpers/decorators/LogarTempoDeExecucao';

export abstract class View<T> {

    protected _elemento: JQuery;
    static View: any;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }

    @LogarTempoDeExecucao(true)
    update(model: T): void {

        this._elemento.html(this.template(model));

    }

    abstract template(model: T): string;
}
