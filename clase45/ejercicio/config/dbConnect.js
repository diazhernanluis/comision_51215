const mongoose = require('mongoose');
const config = require('./config.js');
const log = require('./logger.js');

const conection = async () => {
    try {
        const conn = await mongoose.connect(config.db.cs);
        log.info("Coneccion establecida correctamente: ");
    } catch (e) {
        log.error("Error: ", e);
    }
}

module.exports = {
    conection
}