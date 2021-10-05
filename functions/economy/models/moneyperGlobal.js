const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const moneyperGlobal = new Schema({
    user: String,
    banco: {
        type: Number,
        default: 0
    },
    money: {
        type: Number,
        default: 0
    }
})
module.exports = mongoose.model("moneyperGlobal", moneyperGlobal)