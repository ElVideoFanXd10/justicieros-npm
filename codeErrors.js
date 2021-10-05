

const error404 = `NotFound-${makeid(6)}`

const errorConnect = `Connect-${makeid(6)}`

const errorUrl = `Url-${makeid(6)}`

const errorEco = `Eco-${makeid(6)}`

const errorEcoAdmin = `EcoAdmin-${makeid(6)}`

const errorImage = `ImageGenerator-${makeid(6)}`

const errorFort = `FortniteTexto-${makeid(6)}`

const errorAPI = `ApiConnect-${makeid(6)}`

const errorFilter = `FilterGenerator-${makeid(6)}`

const errorMisaleous = `MisaleousGenerator-${makeid(6)}`

module.exports = {
    error404,
    errorConnect,
    errorUrl,
    errorEcoAdmin,
    errorEco,
    errorImage, 
    errorFort,
    errorAPI,
    errorMisaleous,
    errorFilter
}

function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result;
}