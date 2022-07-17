const { request } = require('express');
const database = require('../database/models');

const ProdutosService = {
  ListaProdutos: async () => {
    const products = await database.produtos.findAll();
    return products;
  },
  ListaProdutoData: async (produtoNome) => {
    const product = await database.produtos.findOne({
      where: {
        nome: produtoNome
      }
    });
    return product;
  },
  criarProduto: async (
    nome,
    categoria

  ) => {
    const newProduto = await database.produtos.create({
      nome,
      categoria

    });
    return newProduto;
  },
  atualizar: async (
    id,
    nome,
    categoria
  ) => {
    await database.produtos.update({
      nome,
      categoria
    }, {
      where: { id }
    })

  },

}


module.exports = ProdutosService;