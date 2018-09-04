const mongoose = require('mongoose');

const schema = mongoose.Schema({
    descricao: {
        type: String,
        required: true
    }
});

module.exports =  mongoose.model('Tipo', schema, 'tipos');