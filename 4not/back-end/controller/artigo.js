const Artigo = require('../models/Artigo')();

module.exports = function () {
    const controller = {};

    controller.get = function (req, res) {
        res.status(200).send(Artigo.find({}));
    };

    controller.post = function (req, res) {
        Artigo.create(req.body).then(function () {
            res.send(201).end();
        }, function (error) {
            console.log(error);
            res.send(500).end();
        });
    };

    return controller;
}