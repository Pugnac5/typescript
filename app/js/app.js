System.register(["./controllers/NegociacaoControle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoControle_1, controller;
    return {
        setters: [
            function (NegociacaoControle_1_1) {
                NegociacaoControle_1 = NegociacaoControle_1_1;
            }
        ],
        execute: function () {
            controller = new NegociacaoControle_1.NegociacaoController();
            $('.form').submit(controller.adiciona.bind(controller));
        }
    };
});
