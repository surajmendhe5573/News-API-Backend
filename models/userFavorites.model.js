const mongoose= require('mongoose');

const favoriteSchema= new mongoose.Schema({
    user: {
        type: String,
        required: true
    },

    article: {
        title: {type: String, required: true},
        description: {type: String},
        url: {type: String, required: true},
        source: {type: String}
    }
});

module.exports= mongoose.model('Favorite', favoriteSchema);