const { errorImage } = require('../../../codeErrors')
let {justicierosError} = require('../../../src/error')
const { MessageAttachment } = require('discord.js')

/**
 * @param {texto} texto
 * @param {color} color
 */

 function ImageGeneratorTextoFortnite(color, texto){

    if(!texto){
        throw new justicierosError(`Un error inesperado a ocurriodo: Favor de colocar una definicion para texto, Codigo de error: ${errorImage}`)
    }

    if(!color){
        throw new justicierosError(`Un error inesperado a ocurriodo: Favor de colocar una definicion para color , Codigo de error: ${errorImage}`)
    }

    let FortniteTexto = new MessageAttachment(`http://fortnitefontgenerator.com/img.php?fontsize=38&textcolor=${color}&text=${texto}`, "fortnite.png")

    return FortniteTexto;

}

module.exports = {
    ImageGeneratorTextoFortnite
}