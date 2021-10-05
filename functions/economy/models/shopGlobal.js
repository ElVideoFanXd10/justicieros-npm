const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shopperGuild = new Schema({
       
    item: { type: Array } 

})
module.exports = mongoose.model("shopperGuild", shopperGuild)