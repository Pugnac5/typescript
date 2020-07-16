System.register(["../views/NegociacoesViews", "../views/MensagemView", "../models/Negociacoes", "../models/Negocioacao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesViews_1, MensagemView_1, Negociacoes_1, Negocioacao_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesViews_1_1) {
                NegociacoesViews_1 = NegociacoesViews_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negocioacao_1_1) {
                Negocioacao_1 = Negocioacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesviews = new NegociacoesViews_1.NegociacoesViews('#negociacoesViews');
                    this._mensagemview = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputDate = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesviews.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Negocioacao_1.Negociacao(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesviews.update(this._negociacoes);
                    this._mensagemview.update('Negociação adicionadas com sucesso');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
