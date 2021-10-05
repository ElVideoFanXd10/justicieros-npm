const { errorMisaleous } = require('../../../codeErrors')
let {justicierosError} = require('../../../src/error')
const Discord = require('discord.js')

/**
 * @param {user} user
 */

function MiselaousGeneratorItSoStupid(user, texto){

  if(!user){
      throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorMisaleous}`)
  }

  if(!user){
    throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para texto, Codigo de error: ${errorMisaleous}`)
}

  let url = `https://some-random-api.ml/canvas/its-so-stupid?avatar=${user.avatarURL({ format: 'png'})}&dog=${texto}`

  const MissionPassed = new Discord.MessageAttachment(url, "jail.png")

  return MissionPassed;
}

module.exports = {
  MiselaousGeneratorItSoStupid
}