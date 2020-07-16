import { NegociacaoController } from './controllers/NegociacaoControle';

const controller = new NegociacaoController();
// Usando Jquery
$('.form').submit(controller.adiciona.bind(controller));
