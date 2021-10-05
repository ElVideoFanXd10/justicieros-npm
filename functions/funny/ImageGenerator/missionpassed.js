const { errorImage } = require('../../../codeErrors')
let {justicierosError} = require('../../../src/error')
const Discord = require('discord.js')

/**
 * @param {user} user
 */

 function ImageGeneratorMissionPassed(user){

  if(!user){
      throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorImage}`)
  }

  let url = `https://some-random-api.ml/canvas/passed?avatar=${user.avatarURL({ format: 'png'})}`

  const MissionPassed = new Discord.MessageAttachment(url, "MissionPassed.png")

  return MissionPassed;
}

module.exports = {
    ImageGeneratorMissionPassed
}