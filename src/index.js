const { justicierosConnect } = require('../functions/economy/connectdb')
const { addMoneyGlobal } = require('../functions/economy/addMoney')
const { depMoneyGlobal } = require('../functions/economy/depMoney')
const { withMoneyGlobal } = require('../functions/economy/withMoney')
const { adminaddMoneyGlobal } =  require('../functions/economy/adminaddMoney')
const { adminremoveMoneyGlobal } = require('../functions/economy/adminremoveMoney')
const { removeMoneyGlobal } = require('../functions/economy/removeMoney')
const { seeMoneyGlobal } = require('../functions/economy/seeMoney')
const { seeMoneyBankGlobal} = require('../functions/economy/seeMoneyBank')
const { FilterGeneratorBightness } = require('../functions/funny/FilterGenerator/bightness')
const { FilterGeneratorBlue } = require('../functions/funny/FilterGenerator/blue') 
const { FilterGeneratorBlurple } = require('../functions/funny/FilterGenerator/blurple')
const { FilterGeneratorGreen} = require('../functions/funny/FilterGenerator/green') 
const { FilterGeneratorGreyScale } = require('../functions/funny/FilterGenerator/greyscale') 
const { FilterGeneratorInvert } = require('../functions/funny/FilterGenerator/invert') 
const { FilterGeneratorInvertGreyScale } = require('../functions/funny/FilterGenerator/Invertgreyscale') 
const { FilterGeneratorPixel } = require('../functions/funny/FilterGenerator/pixel') 
const { FilterGeneratorRed } = require('../functions/funny/FilterGenerator/red') 
const { FilterGeneratorSepia } = require('../functions/funny/FilterGenerator/sepia') 
const { FilterGeneratorThreshold } = require('../functions/funny/FilterGenerator/threshold') 
const { ImageGeneratorComunismo } = require('../functions/funny/ImageGenerator/comunismo')
const { ImageGeneratorGlass } = require('../functions/funny/ImageGenerator/glass')
const { ImageGeneratorJail } = require('../functions/funny/ImageGenerator/jail')
const { ImageGeneratorRainbow } = require('../functions/funny/ImageGenerator/rainbow')
const { ImageGeneratorTriggered } = require('../functions/funny/ImageGenerator/triggered')
const { ImageGeneratorWasted } = require('../functions/funny/ImageGenerator/wasted')
const { ImageGeneratorTextoFortnite } = require('../functions/funny/ImageGenerator/fortniteTexto')
const { ImageGeneratorMissionPassed } = require('../functions/funny/ImageGenerator/missionpassed')
const { MiselaousGeneratorItSoStupid } = require('../functions/funny/MiselaousGenerator/stupid')
const { MiselaousGeneratorSimpCard } = require('../functions/funny/MiselaousGenerator/simpcard') 
const { MiselaousGeneratorLoliPolice } = require('../functions/funny/MiselaousGenerator/lolipolice') 


module.exports = {
    justicierosConnect ,
    addMoneyGlobal ,
    depMoneyGlobal ,
    withMoneyGlobal ,
    removeMoneyGlobal,
    adminaddMoneyGlobal ,
    adminremoveMoneyGlobal,
    seeMoneyGlobal,
    seeMoneyBankGlobal,
    ImageGeneratorTextoFortnite,
    ImageGeneratorMissionPassed,
    ImageGeneratorWasted,
    ImageGeneratorTriggered,
    ImageGeneratorRainbow,
    ImageGeneratorJail,
    ImageGeneratorGlass,
    ImageGeneratorComunismo,
    MiselaousGeneratorLoliPolice,
    MiselaousGeneratorSimpCard,
    MiselaousGeneratorItSoStupid,
    FilterGeneratorThreshold,
    FilterGeneratorSepia,
    FilterGeneratorRed,
    FilterGeneratorPixel,
    FilterGeneratorInvertGreyScale,
    FilterGeneratorInvert,
    FilterGeneratorGreyScale,
    FilterGeneratorGreen,
    FilterGeneratorBlurple,
    FilterGeneratorBlue,
    FilterGeneratorBightness
}