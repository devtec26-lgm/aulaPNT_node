(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Usuario = require('./usuario');
    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();