const { Schema, model } = require('../connection');

const mySchema = new Schema({
    type: String,
    breed: String,
    image: String,
    color: String,
    age: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('pet', mySchema);