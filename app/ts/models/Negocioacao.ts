class Negociacao {

    constructor(private _date: Date, private _quantidade: number, private _valor: number) {}
    
    get date() {

        return this._date;
    }

    get quantidade (){

        return this._quantidade;
    }

    get valor() {

        return this._valor;
    }

    
    get volume() {

        return this._quantidade * this._valor
    }
}