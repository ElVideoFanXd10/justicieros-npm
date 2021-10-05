const { error404 } = require('../codeErrors')

class justicierosError extends Error{
    constructor(error){
        super()
        this.name = `[justicierosError] ${error ? error: `Error desconocido o no indentificado. Codigo de error: ${error404}`}`
    }
}

module.exports = {
    justicierosError
}