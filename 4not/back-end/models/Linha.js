const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    nome : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Linha', schema, 'linhas');