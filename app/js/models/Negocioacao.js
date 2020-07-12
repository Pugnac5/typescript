class Negociacao {
    constructor(_date, _quantidade, _valor) {
        this._date = _date;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get date() {
        return this._date;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
