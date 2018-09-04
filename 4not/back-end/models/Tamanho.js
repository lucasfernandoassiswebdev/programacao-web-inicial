const mongoose = require('mongoose');

const schema = mongoose.Schema({
    descricao: {
        type: String,
        required: true
    },
    ordem: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Tamanho', schema, 'tamanhos');