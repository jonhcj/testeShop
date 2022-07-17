module.exports = (sequelize, DataTypes) => {
  const produtos = sequelize.define("Produtos", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },

    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
    { tableName: 'produtos' }
  );

  return produtos;
}