const Artigo = require('../models/Artigo')();

module.exports = function () {
    const controller = {};

    controller.novo = function (req, res) {
        const artigo = new Artigo(req.body);
        artigo.save(function (erro) {
            if (erro)
                res.status(500).send('Deu ruim');

            res.send(201);
        });
    }

    return controller;
}