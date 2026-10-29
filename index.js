(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Usuario = require('./usuario');
    try {
        const resultado = await database.sync();
        console.log(resultado);

       /* const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'um mouse USB bonito'
        })
        console.log(resultadoCreate); */

        const resultadoCreate = await Usuario.create({
            nome: 'Edvaldo',
            endereco: 'rua da 98',
            telefone: '81906783543'
        })
        console.log(resultadoCreate);
/*
        const produtos = await Produto.findAll();
        console.log(produtos);

        const produto = await Produto.findByPk(1);
        console.log(produto);

        produto.nome = "Mouse Top";

        const resultadoSave = await produto.save();
        console.log(resultadoSave);
        */
      /* Produto.destroy({where: {id: 2}}); */

    } catch (error) {
        console.log(error);
    }
})();