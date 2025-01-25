const { Sequelize } = require('sequelize');
const path = require('path')

const sequelize = new Sequelize({
  dialect: 'sqlite', // Dialeto a ser usado [pode ser alterado conforme necessidade]
  storage: path.join(__dirname, '../database.sqlite'), // Caminho para salvar o arquivo sqlite
  logging: false, // Desativar logs
});

// Autenticação
// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexão com DB realizada com sucesso');
//   } catch (error) {
//     console.error('Houve um erro em realizar a conexão com DB, verifique o diretório ./database e tente novamente')
//   }
// });

export default sequelize;
