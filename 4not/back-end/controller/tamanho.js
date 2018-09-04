const Tamanho = require('../models/Tamanho');

exports.get = function (req, res) {
    Tamanho.find({}, function (erro, tamanhos) {
        if (erro)
            res.status(500).send(error.message);

        res.status(200).send(tamanhos);
    });
};

exports.getById = function (req, res) {
    Tamanho.findById(req.params.id, function (erro, tamanhos) {
        if (erro)
            res.status(500).send(error.message);

        res.status(200).send(tamanhos);
    });
};

exports.post = function (req, res) {
    var tamanho = new Tamanho(req.body);
    tamanho.save(function (error) {
        if (error)
            return res.status(500).send(error.message);

        return res.status(201).send();
    });
};

exports.put = function (req, res) {
    Tamanho.findByIdAndUpdate(req.body.id, req.body, function (error) {
        if (error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};

exports.delete = function (req, res) {
    Tamanho.findOneAndRemove(req.params.id, function (error) {
        if (error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};