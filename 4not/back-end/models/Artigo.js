const mongoose = require('mongoose');

module.exports = function () {
    const schema = mongoose.Schema({
        descricao: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        tamanho: {
            type: String,
            required: true
        },
        cor: {
            type: String,
            required: true
        },
        marca: {
            type: String,
            required: false
        },
        linha: {
            type: String,
            required: true
        },
        origem: {
            type: String,
            required: true
        },
        estado_conservacao: {
            type: String,
            required: true
        },
        conjunto: {
            type: Boolean,
            required: true
        },
        data_compra: {
            type: Date,
            required: true,
            default: Date.now()
        },
        valor_compra: {
            type: Number,
            required: true
        },
        data_venda: {
            type: Date,
            required: true
        },
        valor_venda: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('Artigo', schema, 'artigos');
}