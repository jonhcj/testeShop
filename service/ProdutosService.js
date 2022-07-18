const database = require('../database/models');

const ProdutosService = {
  ListarProdutos: async () => {
    const products = await database.Produtos.findAll();
    return products;
  },
  ListarProdutoData: async (produtoNome) => {
    const product = await database.Produtos.findOne({
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
    const newProduto = await database.Produtos.create({
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
    await database.Produtos.update({
      nome,
      categoria
    }, {
      where: { id }
    })
  },
  produtoPorId: async (id) => {
    const produto = await database.Produtos.findByPk(id)
    return produto
  },
  apagarProduto: async (id) => {
    await database.Produtos.destroy({ where: { id } })

  }

}


module.exports = ProdutosService;