var express = require('express');
var router = express.Router();
const produtoController = require('../controllers/ProductsController');

router.get('/', produtoController.index);

router.get('/listar', produtoController.todosProdutos);

router.post('/criar', produtoController.criar);

router.put('/alterar/:id', produtoController.atualizar);

router.delete('/apagar/:id', produtoController.apagar);

module.exports = router;