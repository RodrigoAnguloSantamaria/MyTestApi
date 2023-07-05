const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        asunto: {type: String},
        email: {type: String, required: true},
        mensaje: {type: String},
        nombre:{type:String}
    }
)

const Post = mongoose.model('post', postSchema);

module.exports = Post;

























//Abcd123$