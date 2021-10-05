const { errorFilter } = require('../../../codeErrors')
let {justicierosError} = require('../../../src/error')
const Discord = require('discord.js')

/**
 * @param {user} user
 */

function FilterGeneratorRed(user){

  if(!user){
      throw new justicierosError(`Un error inesperado a ocurrido: Favor de colocar una definicion para user, Codigo de error: ${errorFilter}`)
  }

  let url = `https://some-random-api.ml/canvas/red?avatar=${user.avatarURL({ format: 'png'})}`

  const MissionPassed = new Discord.MessageAttachment(url, "jail.png")

  return MissionPassed;
}

module.exports = {
    FilterGeneratorRed
}