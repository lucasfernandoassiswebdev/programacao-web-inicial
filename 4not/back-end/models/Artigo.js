const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    descricao: {
        type: String,
        required: true
    },
    tipo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tipo",
        required: true
    },
    tamanho: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tamanho",
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Linha",
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
        required: true,
        default: Date.now()
    },
    valor_venda: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Artigo', schema, 'artigos');
