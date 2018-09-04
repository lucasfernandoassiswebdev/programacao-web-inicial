const Artigo = require('../models/Artigo');

exports.get = function (req, res) {
    Artigo.find({})
        .populate("tipo", "descricao")
        .populate("linha", "nome")
        .populate("tamanho", "descricao ordem")
        .exec(function (erro, artigos) {
            if (erro)
                res.status(500).send(error.message);

            res.status(200).send(artigos);
        });
};

exports.getById = function (req, res) {
    Artigo.findById(req.params.id)
        .populate("tipo", "descricao")
        .populate("linha", "nome")
        .populate("tamanho", "descricao ordem")
        .exec(function (erro, artigo) {
            if (erro)
                res.status(500).send(error.message);

            if (!argigo)
                res.status(404).send('Artigo não encontrado');

            res.status(200).send(artigo);
        });
};

exports.post = function (req, res) {
    var artigo = new Artigo(req.body);
    artigo.save(function (error) {
        if (error)
            return res.status(500).send(error.message);

        return res.status(201).send();
    });
};

exports.put = function (req, res) {
    Artigo.findByIdAndUpdate(req.body.id, req.body, function (error) {
        if (error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};

exports.delete = function (req, res) {
    Artigo.findOneAndRemove(req.params.id, function (error) {
        if (error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};
