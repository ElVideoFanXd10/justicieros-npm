const { errorMisaleous } = require('../../../codeErrors')
let {justicierosError} = require('../../../src/error')
const Discord = require('discord.js')

/**
 * @param {user} user
 */

function MiselaousGeneratorSimpCard(user){

  if(!user){
      throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorMisaleous}`)
  }

  let url = `https://some-random-api.ml/canvas/simpcard?avatar=${user.avatarURL({ format: 'png'})}`

  const MissionPassed = new Discord.MessageAttachment(url, "jail.png")

  return MissionPassed;
}

module.exports = {
  MiselaousGeneratorSimpCard
}