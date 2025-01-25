import { app } from 'electron';
const path = require('path')
const { Sequelize } = require('sequelize');

const dbPath = path.join(app.getPath('userData'), 'db.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite', // Dialeto a ser usado [pode ser alterado conforme necessidade]
  storage: dbPath, // Caminho para salvar o arquivo sqlite
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
