import { NegociacoesViews } from '../views/NegociacoesViews';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/Negocioacao';

export class NegociacaoController{
 
    private _inputDate: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesviews = new NegociacoesViews('#negociacoesViews');
    private _mensagemview = new MensagemView('#mensagemView');
    
    constructor(){

        this._inputDate = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesviews.update(this._negociacoes);
    }

    adiciona(event: Event){
        
        event.preventDefault();

        const negociacao = new Negociacao(
           new Date (this._inputDate.val().replace(/-/g,',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        this._negociacoesviews.update(this._negociacoes);
        this._mensagemview.update('Negociação adicionadas com sucesso');
       
    }
}