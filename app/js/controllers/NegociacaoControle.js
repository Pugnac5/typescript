System.register(["../views/NegociacoesViews", "../views/MensagemView", "../models/Negociacoes", "../models/Negocioacao", "../helpers/decorators/LogarTempoDeExecucao"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var NegociacoesViews_1, MensagemView_1, Negociacoes_1, Negocioacao_1, LogarTempoDeExecucao_1, NegociacaoController;
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
            },
            function (LogarTempoDeExecucao_1_1) {
                LogarTempoDeExecucao_1 = LogarTempoDeExecucao_1_1;
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
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (date.getDay() == 0 || date.getDay() == 6) {
                        this._mensagemview.update('Somente negociações em dias úteis, por favor.');
                        return;
                    }
                    const negociacao = new Negocioacao_1.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesviews.update(this._negociacoes);
                    this._mensagemview.update('Negociação adicionadas com sucesso');
                }
            };
            __decorate([
                LogarTempoDeExecucao_1.LogarTempoDeExecucao(true)
            ], NegociacaoController.prototype, "adiciona", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
