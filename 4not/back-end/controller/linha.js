const Linha = require('../models/Linha');

exports.get = function (req, res) {
    Linha.find({}, function (erro, linhas) {
        if (erro) 
            res.status(500).send(error.message);

        res.status(200).send(linhas);
    });
};

exports.getById = function (req, res) {
    Linha.findById(req.params.id, function (erro, linha) {
        if (erro) 
            res.status(500).send(error.message);

        res.status(200).send(linha);
    });
};

exports.post = function (req, res) {    
        var linha = new Linha(req.body);
        linha.save(function (error) {
            if (error)
                return res.status(500).send(error.message);

            return res.status(201).send();
        });    
};

exports.put = function (req, res) {
    Linha.findByIdAndUpdate(req.body.id, req.body, function(error){
        if(error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};

exports.delete = function (req, res) {
    Linha.findOneAndRemove(req.params.id, function(error){
        if(error)
            res.status(500).send(error.message);

        res.status(204).send();
    });
};
