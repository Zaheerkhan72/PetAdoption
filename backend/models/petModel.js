const { Schema, model } = require('../connection');

const mySchema = new Schema({
    type: String,
    breed: String,
    image: String,
    color: String,
    age: Number,
    ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('pet', mySchema);