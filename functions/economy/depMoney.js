const moneyDB = require('../economy/models/moneyperGlobal')
let {justicierosError} = require('../../src/error')
const { errorEco } = require('../../codeErrors')
/**
 * @param {money} money
 * @param {user} userid
 */

async function depMoneyGlobal(userid, money){
    
    const schemaDB = await moneyDB.findOne({ user: userid })

    if(!schemaDB)
    throw new justicierosError(`Un error inesperado a ocurrido: El usuario no puede depositar dinero porque no a usado el cliente antes de ocupar este comando, Codigo de error: ${errorEco}`)
    if(!userid){
        throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorEco}`)

    }
    if(!money)
    throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una constante, Codigo de error: ${errorEco}`)

    if(money > schemaDB.money){
        throw new justicierosError(`Un error inesperado a ocurrido: No tiene esa cantidad de dinero, Codigo de error: ${errorEco}`)
    }

    const newSchemcaDB = await moneyDB.findOneAndUpdate({
        user: userid
    },
    {
        $inc : {
            money: -money,
            banco: money
        }
    })
    return money;
}

module.exports = {
    depMoneyGlobal
}