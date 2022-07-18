const { Router } = require("express");
const produtos = require("../database/models/produtos");
const ProdutosService = require('../service/ProdutosService')

const productsController = {
  index: async (req, res) => {
    const produtos = await ProdutosService.ListarProdutos()
    res.render("index", { produtos })
  },


  todosProdutos: async (req, res) => {

    const produtos = await ProdutosService.ListarProdutos();

    return res.json(produtos);

  },

  criar: async (req, res) => {

    const { nome, categoria } = req.body
    const produto = await ProdutosService.criarProduto(nome, categoria)
    return res.redirect('/')
  },

  atualizar: async (req, res) => {

    const { id } = req.body;

    const { nome, categoria } = req.body
    await ProdutosService.atualizar(id, nome, categoria)
    const produto = await ProdutosService.produtoPorId(id)
    return res.redirect('/');
  },

  apagar: async (req, res) => {

    const { id } = req.body;

    await ProdutosService.apagarProduto(id)

    return res.redirect('/')
  },
}


module.exports = productsController