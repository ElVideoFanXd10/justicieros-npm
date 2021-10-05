let mongoose = require('mongoose')
let {justicierosError} = require('../../src/error')
let { errorConnect, errorUrl } = require('../../codeErrors')

function justicierosConnect(mongourl){
    if(!mongourl)
    throw new justicierosError(`Un error inesperado a ocurrido: Favor de establecer un enlace del mongodb, Codigo de error : ${errorConnect} `)

    if(typeof mongourl !== 'string')
    throw new justicierosError(`Un error inesperado a ocurrido: Enlace de mongodb invalido, Codigo de error: ${errorUrl}`)
     mongoose.connect(mongourl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      console.log(' Justicieros-npm: Economy')
      
}

module.exports = {
    justicierosConnect
}