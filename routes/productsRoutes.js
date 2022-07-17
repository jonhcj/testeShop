var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const produtoController = require('../controllers/ProductsController');

router.get('/', indexController.index);

router.get('/listar', produtoController.todosprodutos);

router.post('/', produtoController.criar);

router.put('/:id', produtoController.atualizar);

router.delete('/apagar/:id', produtoController.apagar);

module.exports = produtosRouter;