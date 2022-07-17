const { Router } = require("express");
const ProdutosService = require('../service/ProdutosService')

const productsController = {
  index: (req, res) => {

    res.render("index");
  },


  todosProdutos: async (req, res) => {

    const produtos = await cadastroProdutos.ListarProdutos();

    return res.json(produtos);

  },

  criar: async (req, res) => {

    const { nome, categoria } = req.body
    const produto = await ProdutosService.criarProduto(nome, categoria)
    return res.json(produto)
  },

  atualizar: async (req, res) => {

    const { id } = req.params;

    const { nome, categoria } = req.body

    console.log(req.body)

    return res.json(produtos);
  },

  apagar: async (req, res) => {

    const { id } = req.params;

    await cadastroProduto.apagarPoduto(id)

    return res.send("Produto " + id + " apagado")
  },
}


module.exports = ProductController