(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Usuario = require('./usuario');
    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'um mouse USB bonito'
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
})();