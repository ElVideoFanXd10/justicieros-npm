const moneyDB = require('../economy/models/moneyperGlobal')
let {justicierosError} = require('../../src/error')
const { errorEco } = require('../../codeErrors')
/**
 * @param {money} money
 * @param {user} userid
 */
async function addMoneyGlobal (userid, money) {

    if(!userid){
        throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorEco}`)

    }
    if(!money){
        throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar un numero para dar, Codigo de error: ${errorEco}`)
    }

    const randomMoney = Math.floor(Math.random() * money) + 15

    let schemaDB = await moneyDB.findOne({ user: userid })

    if(!schemaDB){
        const newSchemcaDB = new moneyDB({
            user: userid,
            money: randomMoney
        })

        newSchemcaDB.save()
    } else {
        const newSchemcaDB = await moneyDB.findOneAndUpdate({
            user: userid
        },
        {
            $inc : {
                money: randomMoney
            }
        })
    }

    
        
        
    

     console.log(`El usuario ${userid} a ganado ${randomMoney}`)

     return randomMoney;
}

module.exports = {
    addMoneyGlobal
}