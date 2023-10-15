(async () => {
    const database = require('./db');
    const Produto = require('./produto');
  
    await database.sync();
  
    try {
      const produto = await Produto.findByPk(4);
      console.log(produto);
    } catch (error) {
      console.error(error);
    }
  })();
  