const moneyDB = require('../economy/models/moneyperGlobal')
let {justicierosError} = require('../../src/error')
const { errorEcoAdmin } = require('../../codeErrors')
/**
 * @param {money} money
 * @param {user} userid
 */
async function adminaddMoneyGlobal (userid, money) {

    if(!userid){
        throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorEco}`)

    }
    if(!money){
        throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar un numero para dar, Codigo de error: ${errorEcoAdmin}`)
    }

    let schemaDB = await moneyDB.findOne({ user: userid })

    if(!schemaDB)
    throw new justicierosError(`Un error inesperado a ocurrido: No es posible agregarle el dinero a ese usuario, Codigo de error: ${errorEco}`)

    
        const newSchemcaDB = await moneyDB.findOneAndUpdate({
            user: userid
        },
        {
            $inc : {
                money: money
            }
        })
        
    

     console.log(`El usuario ${userid} a ganado ${money}`)
     return money;
}

module.exports = {
    adminaddMoneyGlobal
}