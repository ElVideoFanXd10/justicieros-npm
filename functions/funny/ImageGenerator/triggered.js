const { errorImage } = require('../../../codeErrors')
let {justicierosError} = require('../../../src/error')
const Discord = require('discord.js')

/**
 * @param {user} user
 */

 function ImageGeneratorTriggered(user){

  if(!user){
      throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorImage}`)
  }

  let url = `https://some-random-api.ml/canvas/triggered?avatar=${user.avatarURL({ format: 'png'})}`

  const MissionPassed = new Discord.MessageAttachment(url, "triggered.gif")

  return MissionPassed;
}

module.exports = {
    ImageGeneratorTriggered
}