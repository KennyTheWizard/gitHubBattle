// require mongoose
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    username: String,
    score: Number,
    avatarUrl: String
}, {timestamps:true})

const Player = mongoose.model('Player', PlayerSchema);