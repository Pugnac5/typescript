class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesviews = new NegociacoesViews('#negociacoesViews');
        this._mensagemview = new MensagemView('#mensagemView');
        this._inputDate = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoesviews.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesviews.update(this._negociacoes);
        this._mensagemview.update('Negociação adicionadas com sucesso');
    }
}
