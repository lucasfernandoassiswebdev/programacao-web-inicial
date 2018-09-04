const Tipo = require('../models/Tipo');

exports.get = function (req, res) {
    Tipo.find({}, function (erro, tipos) {
        if (erro)
            res.status(500).send(error.message);

        res.status(200).send(tipos);
    });
};

exports.getById = function (req, res) {
    Tipo.findById(req.params.id, function (erro, tipos) {
        if (erro)
            res.status(500).send(error.message);

        res.status(200).send(tipos);
    });
};

exports.post = function (req, res) {
    var tipo = new Tipo(req.body);
    tipo.save(function (error) {
        if (error)
            return res.status(500).send(error.message);

        return res.status(201).send();
    });
};

exports.put = function (req, res) {
    Tipo.findByIdAndUpdate(req.body.id, req.body, function (error) {
        if (error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};

exports.delete = function (req, res) {
    Tipo.findOneAndRemove(req.params.id, function (error) {
        if (error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};