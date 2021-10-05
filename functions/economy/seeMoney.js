const moneyDB = require('../economy/models/moneyperGlobal')
let {justicierosError} = require('../../src/error')
const { errorEco } = require('../../codeErrors')

/**
 * @param {userid} userid
 */

async function seeMoneyGlobal(userid){

    const schemaDB = await moneyDB.findOne({ user: userid})

    if(!userid){
        throw new justicierosError(`Un error inesperado a ocurrido: Favor de establecer una definicion para user, Codigo de error: ${errorEco}`)
    }
    
    if(!schemaDB) {
        throw new justicierosError(`Un error inesperado a ocurrido: No ah sido posible encontrar los datos de ese usuario, Codigo de error: ${errorEco}`)
    } 

    return schemaDB.money



}

module.exports = {
    seeMoneyGlobal
}