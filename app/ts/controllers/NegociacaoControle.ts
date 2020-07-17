import { NegociacoesViews } from '../views/NegociacoesViews';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negocioacao';
import { LogarTempoDeExecucao } from '../helpers/decorators/LogarTempoDeExecucao';
import { donInject } from '../helpers/decorators/donInject';

export class NegociacaoController{
    
    @donInject('#data')
    private _inputDate: JQuery;

    @donInject('#quantidade')
    private _inputQuantidade: JQuery;
    
    @donInject('#valor')
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesviews = new NegociacoesViews('#negociacoesViews');
    private _mensagemview = new MensagemView('#mensagemView');
    
    constructor(){

        this._negociacoesviews.update(this._negociacoes);
    }
    @LogarTempoDeExecucao(true)
    adiciona(event: Event){

        event.preventDefault();

        let date = new Date(this._inputDate.val().replace(/-/g,','));

        if(date.getDay() == 0 /*Domingo*/ || date.getDay() == 6 /*Sabado*/ ){

            this._mensagemview.update('Somente negociações em dias úteis, por favor.')
            return
        }

        const negociacao = new Negociacao(
            date,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        this._negociacoesviews.update(this._negociacoes);
        this._mensagemview.update('Negociação adicionadas com sucesso');
    
    }
}